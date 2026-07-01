const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CHQhSlVh.js","assets/index-B19dPDxv.js","assets/index-ioBMV_FK.css"])))=>i.map(i=>d[i]);
import{I as se,e as re,i as ne,c as m,b as o,q as ae,t as C,m as B,y as I,B as U,n as le,j as f,f as V,o as v}from"./index-B19dPDxv.js";const ie={class:"min-h-screen flex flex-col bg-gray-100 text-gray-800"},ce={class:"flex-1 px-4 py-6 max-w-2xl mx-auto w-full"},de={class:"mb-8"},ue={key:0,class:"bg-white border border-gray-200 rounded-md p-4 mb-6"},fe={class:"flex items-center justify-between"},pe={class:"font-medium flex-1 truncate"},ge={class:"text-gray-600 mx-4"},be={key:1,class:"bg-white border border-gray-200 rounded-md p-6 mb-6"},me={class:"mb-6"},ve={class:"flex items-center mb-3"},xe={class:"flex items-center"},he=["disabled"],ye={key:0},we={key:1,class:"inline-block animate-pulse"},_e={key:2,class:"bg-white border border-gray-200 rounded-md p-6 mb-6"},ke={class:"h-2 bg-gray-200 rounded-full overflow-hidden mb-3"},De={class:"text-center text-gray-600"},Ce={key:3,class:"mb-6"},Be={class:"bg-white border border-gray-200 rounded-md p-8 text-center"},Fe={class:"text-gray-600 mb-6"},Pe={key:4,class:"mb-6"},Me={class:"bg-white border border-gray-200 rounded-md p-8 text-center"},ze={class:"text-red-600 mb-6"},We=se({__name:"index",setup(Se){const S=f(null),p=f(null),y=f(!1),d=f(0),x=f(null),w=f(""),F=f(!1),L=f(!0),P=f(!0),_=f(null);function X(){S.value.click()}function $(t){const e=t.target.files[0];j(e)}function H(t){t.preventDefault(),F.value=!0}function N(t){t.preventDefault(),F.value=!1}function q(t){t.preventDefault(),F.value=!1;const e=t.dataTransfer.files[0];j(e)}function j(t){if(!t)return;if(!t.name.endsWith(".docx")){w.value="请选择 .docx 格式的文件";return}const e=50*1024*1024;if(t.size>e){w.value="文件大小不能超过 50MB";return}W(),x.value=null,p.value=t,d.value=0}function G(){p.value=null,x.value=null,d.value=0,S.value.value=""}function W(){w.value=""}function A(t){if(t===0)return"0 Bytes";const e=1024,r=["Bytes","KB","MB","GB"],s=Math.floor(Math.log(t)/Math.log(e));return parseFloat((t/Math.pow(e,s)).toFixed(2))+" "+r[s]}function K(){if(typeof Worker>"u"){console.warn("浏览器不支持 Web Worker"),P.value=!1;return}const t=`
          self.addEventListener('message', async (event) => {
            const { fileArrayBuffer, options } = event.data;
            
            try {
              // 加载 docx 库
              importScripts('https://unpkg.com/docx@7.8.0/build/index.js');
              
              // 解析 DOCX 文件
              const doc = await self.docx.Document.load(fileArrayBuffer);
              const sections = doc.body.sections;
              
              // 报告进度
              self.postMessage({ type: 'progress', progress: 50 });
              
              // 构建文档结构
              const docStructure = {
                paragraphs: [],
                tables: [],
                images: []
              };
              
              // 提取段落和表格
              for (const section of sections) {
                for (const element of section.children) {
                  if (element.constructor.name === 'Paragraph') {
                    const text = element.text || '';
                    docStructure.paragraphs.push({
                      text: text,
                      style: element.style
                    });
                  } else if (element.constructor.name === 'Table') {
                    const tableData = [];
                    for (const row of element.rows) {
                      const rowData = [];
                      for (const cell of row.cells) {
                        rowData.push(cell.paragraphs.map(p => p.text).join(' '));
                      }
                      tableData.push(rowData);
                    }
                    docStructure.tables.push(tableData);
                  }
                }
              }
              
              self.postMessage({ 
                type: 'success', 
                docStructure,
                progress: 100 
              });
              
            } catch (error) {
              self.postMessage({ 
                type: 'error', 
                error: error.message 
              });
            }
          });
        `,e=new Blob([t],{type:"application/javascript"});_.value=new Worker(URL.createObjectURL(e)),_.value.onmessage=r=>{const s=r.data;s.type==="progress"?d.value=s.progress:s.type==="success"?E(s.docStructure):s.type==="error"&&R(s.error)}}async function Y(){if(p.value){y.value=!0,d.value=10,W();try{const t=await Z(p.value);P.value&&_.value?_.value.postMessage({fileArrayBuffer:t,options:{preserveFormatting:L.value}}):await J(t)}catch(t){R(t.message)}}}async function J(t){const r=await(await V(()=>import("./index-LHXn8vCj.js"),[])).Document.load(t);d.value=30;const s={paragraphs:[],tables:[],images:[]},c=r.body.sections;for(const k of c)for(const l of k.children)if(l.constructor.name==="Paragraph"){const g=l.text||"";s.paragraphs.push({text:g,style:l.style})}else if(l.constructor.name==="Table"){const g=[];for(const n of l.rows){const a=[];for(const D of n.cells)a.push(D.paragraphs.map(O=>O.text).join(" "));g.push(a)}s.tables.push(g)}d.value=70,await E(s)}async function E(t){try{const e=await V(()=>import("./index-CHQhSlVh.js"),__vite__mapDeps([0,1,2])),{PDFDocument:r,rgb:s,StandardFonts:c}=e,k=await r.create(),l=k.addPage([595,842]),{height:g}=l.getSize(),n=50;let a=g-n;const D=await k.embedFont(c.Helvetica);l.drawText("Converted from DOCX",{x:n,y:a,size:16,font:D,color:s(0,0,0)}),a-=40;for(const u of t.paragraphs){a<n+20&&(l.addPage([595,842]),a=g-n);const b=Q(u.text,80);for(const h of b)l.drawText(h,{x:n,y:a,size:12,font:D,color:s(0,0,0)}),a-=20,a<n+20&&(l.addPage([595,842]),a=g-n);a-=10}for(const u of t.tables){a<n+100&&(l.addPage([595,842]),a=g-n);const b=a,h=25,M=100;for(let i=0;i<=u.length;i++)l.drawLine({start:{x:n,y:b-i*h},end:{x:n+u[0].length*M,y:b-i*h},thickness:1,color:s(0,0,0)});for(let i=0;i<=u[0].length;i++)l.drawLine({start:{x:n+i*M,y:b},end:{x:n+i*M,y:b-u.length*h},thickness:1,color:s(0,0,0)});for(let i=0;i<u.length;i++)for(let z=0;z<u[i].length;z++){const oe=u[i][z]||"";l.drawText(oe.substring(0,15),{x:n+z*M+5,y:b-i*h-18,size:10,font:D,color:s(0,0,0)})}a=b-u.length*h-20}const O=await k.save(),T=new Blob([O],{type:"application/pdf"}),te=URL.createObjectURL(T);d.value=100,x.value={url:te,size:T.size,blob:T},y.value=!1}catch(e){throw new Error(`PDF 生成失败: ${e.message}`)}}function Q(t,e){const r=[];let s="";for(const c of t.split(" "))(s+c).length<=e?s+=(s?" ":"")+c:(s&&r.push(s),s=c);return s&&r.push(s),r}function Z(t){return new Promise((e,r)=>{const s=new FileReader;s.onload=c=>{e(c.target.result)},s.onerror=c=>{r(c)},s.readAsArrayBuffer(t)})}function R(t){w.value=t||"转换过程中发生错误",y.value=!1,d.value=0}function ee(){if(!x.value)return;const t=document.createElement("a");t.href=x.value.url;const e=window.location.hostname||"web-tool";t.download=p.value.name.replace(".docx","")+`_${e}_${Date.now()}.pdf`,document.body.appendChild(t),t.click(),document.body.removeChild(t)}return re(()=>{K()}),ne(()=>{_.value&&_.value.terminate()}),(t,e)=>(v(),m("div",ie,[e[12]||(e[12]=o("div",{class:"bg-white border-b border-gray-200 px-4 py-6 text-center"},[o("h1",{class:"text-2xl font-semibold text-gray-800 mb-2"},"DOCX 转 PDF 转换器"),o("p",{class:"text-sm text-gray-600"},"纯前端处理 • 支持文字/表格/图片 • 保留基础排版")],-1)),o("div",ce,[o("div",de,[o("div",{class:ae(["bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center transition-all duration-300",{"border-blue-600 bg-blue-50":F.value}]),onDragover:H,onDragleave:N,onDrop:q},[o("input",{type:"file",id:"fileInput",ref_key:"fileInputRef",ref:S,accept:".docx",onChange:$,hidden:""},null,544),e[2]||(e[2]=o("div",{class:"text-5xl mb-4"},"📄",-1)),e[3]||(e[3]=o("h3",{class:"text-xl text-gray-800 mb-2"},"拖放 DOCX 文件到此处",-1)),e[4]||(e[4]=o("p",{class:"text-gray-600 mb-6"},"或点击按钮选择文件",-1)),o("button",{class:"inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 min-h-11",onClick:X}," 选择 DOCX 文件 "),e[5]||(e[5]=o("p",{class:"text-xs text-gray-500 mt-4"},"最大支持 50MB 的文件",-1))],34)]),p.value?(v(),m("div",ue,[o("div",fe,[o("span",pe,C(p.value.name),1),o("span",ge,"("+C(A(p.value.size))+")",1),o("button",{class:"bg-none border-none text-gray-600 text-2xl px-2 cursor-pointer hover:text-gray-800 transition-colors",onClick:G,"aria-label":"清除文件"}," × ")])])):B("",!0),p.value?(v(),m("div",be,[o("div",me,[o("div",ve,[I(o("input",{type:"checkbox",id:"preserveFormatting","onUpdate:modelValue":e[0]||(e[0]=r=>L.value=r),class:"w-5 h-5 mr-3 cursor-pointer"},null,512),[[U,L.value]]),e[6]||(e[6]=o("label",{for:"preserveFormatting",class:"cursor-pointer"},"保留基础排版（段落、表格、字体）",-1))]),o("div",xe,[I(o("input",{type:"checkbox",id:"useWorker","onUpdate:modelValue":e[1]||(e[1]=r=>P.value=r),class:"w-5 h-5 mr-3 cursor-pointer"},null,512),[[U,P.value]]),e[7]||(e[7]=o("label",{for:"useWorker",class:"cursor-pointer"},"使用 Web Worker 处理大文件",-1))])]),o("button",{class:"w-full px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed min-h-11 text-lg",onClick:Y,disabled:y.value},[y.value?(v(),m("span",we,"转换中...")):(v(),m("span",ye,"开始转换"))],8,he)])):B("",!0),y.value?(v(),m("div",_e,[o("div",ke,[o("div",{class:"h-full bg-blue-600 transition-all duration-300",style:le({width:d.value+"%"})},null,4)]),o("p",De,"正在转换: "+C(d.value)+"%",1)])):B("",!0),x.value?(v(),m("div",Ce,[o("div",Be,[e[8]||(e[8]=o("div",{class:"text-5xl text-teal-600 mb-4"},"✓",-1)),e[9]||(e[9]=o("h3",{class:"text-xl text-gray-800 mb-2"},"转换完成",-1)),o("p",Fe,"文件大小: "+C(A(x.value.size)),1),o("button",{class:"w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 min-h-11 text-lg",onClick:ee}," 下载 PDF 文件 ")])])):B("",!0),w.value?(v(),m("div",Pe,[o("div",Me,[e[10]||(e[10]=o("div",{class:"text-5xl text-red-600 mb-4"},"⚠",-1)),e[11]||(e[11]=o("h3",{class:"text-xl text-gray-800 mb-2"},"转换失败",-1)),o("p",ze,C(w.value),1),o("button",{class:"w-full px-6 py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors duration-200 min-h-11",onClick:W}," 重试 ")])])):B("",!0)]),e[13]||(e[13]=o("div",{class:"bg-white border-t border-gray-200 px-4 py-4 text-center"},[o("p",{class:"text-sm text-gray-600"},"纯前端转换 • 数据不经过服务器 • 支持移动端")],-1))]))}});export{We as default};
