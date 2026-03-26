const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B7Hc7_GR.js","assets/index-C8e-g5zz.js","assets/index-Agq0vRzt.css"])))=>i.map(i=>d[i]);
import{D as se,p as oe,o as ne,a as h,c as m,b as s,i as re,t as C,d as B,e as j,s as R,n as ae,r as v,_ as U,q as le}from"./index-C8e-g5zz.js";const ie={class:"docx-converter"},ce={class:"main-content"},ue={class:"upload-section"},de={key:0,class:"file-info"},fe={class:"file-info-content"},pe={class:"file-name"},ve={class:"file-size"},ge={key:1,class:"conversion-section"},he={class:"conversion-options"},me={class:"option-item"},be={class:"option-item"},ye={class:"action-buttons"},xe=["disabled"],_e={key:0},we={key:1,class:"converting-text"},ke={key:2,class:"progress-section"},De={class:"progress-bar"},Ce={class:"progress-text"},Be={key:3,class:"result-section"},Fe={class:"result-card"},Pe={class:"result-info"},Me={key:4,class:"error-section"},ze={class:"error-card"},Se={class:"error-text"},Le=se({__name:"index",setup(We){const f=v(null),x=v(!1),u=v(0),b=v(null),_=v(""),F=v(!1),S=v(!0),P=v(!0),w=v(null);function V(){this.$refs.fileInput.click()}function X(t){const e=t.target.files[0];T(e)}function $(t){t.preventDefault(),F.value=!0}function H(t){t.preventDefault(),F.value=!1}function N(t){t.preventDefault(),F.value=!1;const e=t.dataTransfer.files[0];T(e)}function T(t){if(!t)return;if(!t.name.endsWith(".docx")){_.value="请选择 .docx 格式的文件";return}const e=50*1024*1024;if(t.size>e){_.value="文件大小不能超过 50MB";return}L(),b.value=null,f.value=t,u.value=0}function q(){f.value=null,b.value=null,u.value=0,this.$refs.fileInput.value=""}function L(){_.value=""}function A(t){if(t===0)return"0 Bytes";const e=1024,n=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(t)/Math.log(e));return parseFloat((t/Math.pow(e,o)).toFixed(2))+" "+n[o]}function G(){if(typeof Worker>"u"){console.warn("浏览器不支持 Web Worker"),P.value=!1;return}const t=`
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
        `,e=new Blob([t],{type:"application/javascript"});w.value=new Worker(URL.createObjectURL(e)),w.value.onmessage=n=>{const o=n.data;o.type==="progress"?u.value=o.progress:o.type==="success"?E(o.docStructure):o.type==="error"&&I(o.error)}}async function K(){if(f.value){x.value=!0,u.value=10,L();try{const t=await Q(f.value);P.value&&w.value?w.value.postMessage({fileArrayBuffer:t,options:{preserveFormatting:S.value}}):await Y(t)}catch(t){I(t.message)}}}async function Y(t){const n=await(await U(()=>import("./index-LHXn8vCj.js"),[])).Document.load(t);u.value=30;const o={paragraphs:[],tables:[],images:[]},c=n.body.sections;for(const k of c)for(const l of k.children)if(l.constructor.name==="Paragraph"){const p=l.text||"";o.paragraphs.push({text:p,style:l.style})}else if(l.constructor.name==="Table"){const p=[];for(const r of l.rows){const a=[];for(const D of r.cells)a.push(D.paragraphs.map(W=>W.text).join(" "));p.push(a)}o.tables.push(p)}u.value=70,await E(o)}async function E(t){try{const e=await U(()=>import("./index-B7Hc7_GR.js"),__vite__mapDeps([0,1,2])),{PDFDocument:n,rgb:o,StandardFonts:c}=e,k=await n.create(),l=k.addPage([595,842]),{height:p}=l.getSize(),r=50;let a=p-r;const D=await k.embedFont(c.Helvetica);l.drawText("Converted from DOCX",{x:r,y:a,size:16,font:D,color:o(0,0,0)}),a-=40;for(const d of t.paragraphs){a<r+20&&(l.addPage([595,842]),a=p-r);const g=J(d.text,80);for(const y of g)l.drawText(y,{x:r,y:a,size:12,font:D,color:o(0,0,0)}),a-=20,a<r+20&&(l.addPage([595,842]),a=p-r);a-=10}for(const d of t.tables){a<r+100&&(l.addPage([595,842]),a=p-r);const g=a,y=25,M=100;for(let i=0;i<=d.length;i++)l.drawLine({start:{x:r,y:g-i*y},end:{x:r+d[0].length*M,y:g-i*y},thickness:1,color:o(0,0,0)});for(let i=0;i<=d[0].length;i++)l.drawLine({start:{x:r+i*M,y:g},end:{x:r+i*M,y:g-d.length*y},thickness:1,color:o(0,0,0)});for(let i=0;i<d.length;i++)for(let z=0;z<d[i].length;z++){const te=d[i][z]||"";l.drawText(te.substring(0,15),{x:r+z*M+5,y:g-i*y-18,size:10,font:D,color:o(0,0,0)})}a=g-d.length*y-20}const W=await k.save(),O=new Blob([W],{type:"application/pdf"}),ee=URL.createObjectURL(O);u.value=100,b.value={url:ee,size:O.size,blob:O},x.value=!1}catch(e){throw new Error(`PDF 生成失败: ${e.message}`)}}function J(t,e){const n=[];let o="";for(const c of t.split(" "))(o+c).length<=e?o+=(o?" ":"")+c:(o&&n.push(o),o=c);return o&&n.push(o),n}function Q(t){return new Promise((e,n)=>{const o=new FileReader;o.onload=c=>{e(c.target.result)},o.onerror=c=>{n(c)},o.readAsArrayBuffer(t)})}function I(t){_.value=t||"转换过程中发生错误",x.value=!1,u.value=0}function Z(){if(!b.value)return;const t=document.createElement("a");t.href=b.value.url,t.download=f.value.name.replace(".docx",".pdf")||"converted.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t)}return oe(()=>{G()}),ne(()=>{w.value&&w.value.terminate()}),(t,e)=>(h(),m("div",ie,[e[12]||(e[12]=s("div",{class:"header"},[s("h1",null,"DOCX 转 PDF 转换器"),s("p",{class:"subtitle"},"纯前端处理 • 支持文字/表格/图片 • 保留基础排版")],-1)),s("div",ce,[s("div",ue,[s("div",{class:re(["upload-area",{"drag-over":F.value}]),onDragover:$,onDragleave:H,onDrop:N},[s("input",{type:"file",id:"fileInput",ref:"fileInput",accept:".docx",onChange:X,hidden:""},null,544),e[2]||(e[2]=s("div",{class:"upload-icon"},"文件",-1)),e[3]||(e[3]=s("h3",null,"拖放 DOCX 文件到此处",-1)),e[4]||(e[4]=s("p",{class:"upload-hint"},"或点击按钮选择文件",-1)),s("button",{class:"btn btn-primary",onClick:V}," 选择 DOCX 文件 "),e[5]||(e[5]=s("p",{class:"file-size-hint"},"最大支持 50MB 的文件",-1))],34)]),f.value?(h(),m("div",de,[s("div",fe,[s("span",pe,C(f.value.name),1),s("span",ve,"("+C(A(f.value.size))+")",1),s("button",{class:"btn btn-clear",onClick:q,"aria-label":"清除文件"}," × ")])])):B("",!0),f.value?(h(),m("div",ge,[s("div",he,[s("div",me,[j(s("input",{type:"checkbox",id:"preserveFormatting","onUpdate:modelValue":e[0]||(e[0]=n=>S.value=n),class:"checkbox"},null,512),[[R,S.value]]),e[6]||(e[6]=s("label",{for:"preserveFormatting"},"保留基础排版（段落、表格、字体）",-1))]),s("div",be,[j(s("input",{type:"checkbox",id:"useWorker","onUpdate:modelValue":e[1]||(e[1]=n=>P.value=n),class:"checkbox"},null,512),[[R,P.value]]),e[7]||(e[7]=s("label",{for:"useWorker"},"使用 Web Worker 处理大文件",-1))])]),s("div",ye,[s("button",{class:"btn btn-convert",onClick:K,disabled:x.value},[x.value?(h(),m("span",we,"转换中...")):(h(),m("span",_e,"开始转换"))],8,xe)])])):B("",!0),x.value?(h(),m("div",ke,[s("div",De,[s("div",{class:"progress-fill",style:ae({width:u.value+"%"})},null,4)]),s("p",Ce,"正在转换: "+C(u.value)+"%",1)])):B("",!0),b.value?(h(),m("div",Be,[s("div",Fe,[e[8]||(e[8]=s("div",{class:"result-icon"},"✓",-1)),e[9]||(e[9]=s("h3",null,"转换完成",-1)),s("p",Pe,"文件大小: "+C(A(b.value.size)),1),s("button",{class:"btn btn-download",onClick:Z}," 下载 PDF 文件 ")])])):B("",!0),_.value?(h(),m("div",Me,[s("div",ze,[e[10]||(e[10]=s("div",{class:"error-icon"},"⚠",-1)),e[11]||(e[11]=s("h3",null,"转换失败",-1)),s("p",Se,C(_.value),1),s("button",{class:"btn btn-retry",onClick:L}," 重试 ")])])):B("",!0)]),e[13]||(e[13]=s("div",{class:"footer"},[s("p",{class:"footer-text"},"纯前端转换 • 数据不经过服务器 • 支持移动端")],-1))]))}}),Te=le(Le,[["__scopeId","data-v-0825577d"]]);export{Te as default};
