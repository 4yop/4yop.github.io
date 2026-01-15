
import { pipeline, env, Tensor } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.0';

// 配置环境
env.allowLocalModels = false;
env.useBrowserCache = true;

// 管道单例存储
const pipelines = {};

// 消息处理
self.addEventListener('message', async (event) => {
    const { type, data, id } = event.data;

    try {
        switch (type) {
            case 'load':
                await loadPipeline(data.task, data.model, data.options);
                self.postMessage({ type: 'load_done', id, success: true });
                break;

            case 'run': {
                const result = await runInference(data.task, data.model, data.inputs, data.args);
                
                // 结果处理：如果是 Audio 对象 (TTS)，需要转换
                let transferList = [];
                let finalResult = result;

                if (data.task === 'text-to-speech' && result.audio) {
                    // result: { audio: Float32Array, sampling_rate: number }
                    // 已经是 Float32Array，可以直接传递，但为了性能可以使用 Transferable
                    // finalResult = { ...result }; // clone
                    // transferList = [result.audio.buffer]; // 转移所有权
                }
                
                self.postMessage({ type: 'run_done', id, result: finalResult }, transferList);
                break;
            }
                
            case 'check_gpu':
                 try {
                    const adapter = await navigator.gpu.requestAdapter();
                    self.postMessage({ type: 'gpu_status', id, available: !!adapter });
                 } catch (e) {
                    self.postMessage({ type: 'gpu_status', id, available: false });
                 }
                 break;
        }
    } catch (error) {
        console.error(error);
        self.postMessage({ type: 'error', id, error: error.message });
    }
});

async function loadPipeline(task, model, options = {}) {
    const key = task + '|' + model;
    if (!pipelines[key]) {
        self.postMessage({ type: 'status', status: 'loading', message: `Loading ${model}...` });
        
        // 默认配置
        const defaultOptions = {
            device: 'webgpu',
            dtype: 'q8', // 默认量化
            progress_callback: (progress) => {
                self.postMessage({ 
                    type: 'progress', 
                    status: 'loading', // add status to differentiate
                    task, 
                    model, 
                    progress 
                });
            }
        };

        // 合并选项，允许覆盖 device
        const finalOptions = { ...defaultOptions, ...options };
        
        try {
            pipelines[key] = await pipeline(task, model, finalOptions);
            self.postMessage({ type: 'status', status: 'ready', message: `${model} loaded.` });
        } catch (e) {
            // 如果 WebGPU 失败，尝试回退到 CPU (WASM)
            if (finalOptions.device === 'webgpu') {
                console.warn('WebGPU load failed, falling back to CPU/WASM');
                self.postMessage({ type: 'status', status: 'loading', message: `WebGPU failed, falling back to CPU...` });
                finalOptions.device = 'wasm';
                pipelines[key] = await pipeline(task, model, finalOptions);
                self.postMessage({ type: 'status', status: 'ready', message: `${model} loaded (CPU mode).` });
            } else {
                throw e;
            }
        }
    }
    return pipelines[key];
}

async function runInference(task, model, inputs, args = {}) {
    const pipe = await loadPipeline(task, model);
    
    // 特殊处理：SpeechT5 需要 Speaker Embeddings
    if (task === 'text-to-speech' && model.includes('speecht5') && args.use_default_speaker) {
        if (!args.speaker_embeddings) {
            self.postMessage({ type: 'status', status: 'loading', message: 'Fetching speaker embeddings...' });
            
            // 使用 Xenova 提供的默认 embeddings
            const response = await fetch('https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/speaker_embeddings.bin');
            const buffer = await response.arrayBuffer();
            const data = new Float32Array(buffer);
            args.speaker_embeddings = new Tensor('float32', data, [1, 512]);
            
            delete args.use_default_speaker; // 清理标记
        }
    }

    // 执行推理
    // inputs 可以是 text, url(image/audio), 或 array(audio)
    return await pipe(inputs, args);
}
