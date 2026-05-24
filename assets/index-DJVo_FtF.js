const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DownloadUtil-D0PeGmLW.js","assets/index-MifDkgXE.js","assets/index-BTu5SfG-.css","assets/FileUtil-CdDD5r1_.js"])))=>i.map(i=>d[i]);
import{K as A,b as U,d as x,i as W,c as r,e,F as k,k as M,n as c,t as u,j as m,q,v as F,m as p,o as n,h as N,_ as K}from"./index-MifDkgXE.js";const Q={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5"},Y={class:"fixed top-4 right-4 z-50 flex flex-col gap-2"},G={class:"flex items-center gap-2"},J={key:0,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},X={key:1,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},Z={key:2,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},ee={key:3,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},le={class:"text-sm font-medium"},te={class:"flex flex-wrap justify-between items-center mb-5 p-4 bg-gray-50 rounded-lg"},oe={class:"flex gap-2"},re={key:0,class:"text-center mb-5 p-4 bg-gray-50 rounded-lg"},ne={class:"flex justify-center gap-2"},se={class:"grid grid-cols-1 md:grid-cols-2 gap-5"},ae={class:"border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full flex flex-col"},de={class:"flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50"},ue={class:"font-medium"},ie={class:"flex gap-2"},ce=["placeholder","rows"],pe={class:"flex flex-wrap gap-3 p-4 border-t border-gray-200 bg-gray-50 text-xs text-gray-500"},ge={key:0},ve={class:"border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full flex flex-col"},be={class:"flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50"},me={class:"font-medium"},fe={key:0,class:"flex gap-2"},he={key:0,class:"flex-grow max-h-[500px] overflow-y-auto bg-gray-50 p-4"},xe={class:"m-0 text-sm leading-relaxed"},ye=["innerHTML"],we={key:1,class:"flex-grow max-h-[500px] overflow-y-auto p-4 border border-gray-200 bg-white"},_e=["innerHTML"],ke={key:2,class:"flex-grow max-h-[500px] overflow-y-auto bg-gray-50 p-4"},Me={class:"m-0 text-sm leading-relaxed"},Te=["innerHTML"],Le={class:"flex flex-wrap gap-3 p-4 border-t border-gray-200 bg-gray-50 text-xs text-gray-500"},Ce={class:"mt-5 border border-gray-200 rounded-lg shadow-sm overflow-hidden"},He={class:"p-4"},$e=["onClick"],ze={key:0,class:"mt-2 p-3 bg-blue-50 rounded-md leading-relaxed syntax-example border-l-4 border-blue-300"},Ee={key:0},De=A({__name:"index",setup(je){const s=p("md2html"),g=p("code"),d=p(""),a=p(""),i=p(""),f=p(!1),v=p("input"),w=p(null),y=p([]);function b(o,l="info"){const t=Math.random().toString(36).substr(2,9);y.value.push({id:t,type:l,text:o}),setTimeout(()=>{y.value=y.value.filter(h=>h.id!==t)},3e3)}const E=p([{title:"标题",expanded:!1,code:["# 一级标题","## 二级标题","### 三级标题"]},{title:"文本样式",expanded:!1,code:["**粗体文本**","*斜体文本*","~~删除线~~","`行内代码`"]},{title:"列表",expanded:!1,code:["- 无序列表项","1. 有序列表项","- [ ] 任务列表","- [x] 已完成任务"]},{title:"链接和图片",expanded:!1,code:["[链接文本](https://example.com)","![图片描述](image.jpg)","<https://example.com>"]},{title:"代码块",expanded:!1,code:["```javascript","console.log('Hello World');","```"]},{title:"表格",expanded:!1,code:["| 列1 | 列2 |","|-----|-----|","| 内容1 | 内容2 |"]}]);function _(){f.value=window.innerWidth<=768}function T(){d.value="",a.value="",i.value="",g.value="code",v.value="input"}function L(){s.value==="md2html"?D():j()}async function D(){if(!d.value.trim()){a.value="",i.value="";return}try{const o=await x(()=>import("./marked.esm-D-R7kuv_.js"),[]),{default:l}=await x(async()=>{const{default:h}=await import("./purify.es-BgtpMKW3.js");return{default:h}},[]);let t=o.parse(d.value);t=l.sanitize(t),a.value=t,i.value=V(t)}catch(o){a.value="转换错误: "+o.message,i.value=a.value}}async function j(){if(!d.value.trim()){a.value="",i.value="";return}try{let o=w.value.turndown(d.value);a.value=o,i.value=B(o)}catch(o){a.value="转换错误: "+o.message,i.value=a.value}}function V(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/(&lt;\/?[^&\s]*&gt;)/g,'<span class="html-tag">$1</span>')}function B(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^(#{1,6})\s+(.*)$/gm,'<span class="md-header">$1 $2</span>').replace(/(\*\*.*?\*\*)/g,'<span class="md-bold">$1</span>').replace(/(\*.*?\*)/g,'<span class="md-italic">$1</span>').replace(/(`.*?`)/g,'<span class="md-code">$1</span>').replace(/(\[.*?\]\(.*?\))/g,'<span class="md-link">$1</span>')}function O(){if(s.value==="html2md"&&d.value)try{d.value=d.value.replace(/></g,`>
<`).replace(/^\s+|\s+$/gm,"").split(`
`).filter(o=>o.trim()).join(`
`)}catch{b("格式化失败","error")}}function C(){s.value==="md2html"?d.value=`# Markdown示例文档
  
  ## 文本样式
  
  这是一个**粗体文本**和*斜体文本*的示例。
  
  你也可以使用~~删除线~~和\`行内代码\`。
  
  ## 列表
  
  ### 无序列表
  - 项目1
  - 项目2
  - 项目3
  
  ### 有序列表
  1. 第一项
  2. 第二项
  3. 第三项
  
  ## 链接和图片
  
  这是一个[链接示例](https://example.com)。
  
  ![图片示例](https://via.placeholder.com/150)
  
  ## 代码块
  
  \`\`\`javascript
  function hello() {
      console.log("Hello, World!");
  }
  \`\`\`
  
  ## 引用
  
  > 这是一个引用示例。
  > 可以包含多行内容。
  
  ## 表格
  
  | 列1 | 列2 | 列3 |
  |-----|-----|-----|
  | 内容1 | 内容2 | 内容3 |
  | 内容4 | 内容5 | 内容6 |
  
  ---
  
  这就是Markdown的基本语法示例！`:d.value=`<!DOCTYPE html>
  <html>
  <head>
      <title>HTML示例</title>
  </head>
  <body>
      <h2>HTML示例文档</h2>
      
      <h2>文本样式</h2>
      <p>这是一个<strong>粗体文本</strong>和<em>斜体文本</em>的示例。</p>
      <p>你也可以使用<del>删除线</del>和<code>行内代码</code>。</p>
      
      <h2>列表</h2>
      <ul>
          <li>无序列表项1</li>
          <li>无序列表项2</li>
      </ul>
      
      <ol>
          <li>有序列表项1</li>
          <li>有序列表项2</li>
      </ol>
      
      <h2>链接和图片</h2>
      <p>这是一个<a href="https://example.com">链接示例</a>。</p>
      <img src="https://via.placeholder.com/150" alt="图片示例">
      
      <h2>代码块</h2>
      <pre><code>function hello() {
      console.log("Hello, World!");
  }</code></pre>
      
      <h2>引用</h2>
      <blockquote>这是一个引用示例。</blockquote>
      
      <hr>
      
      <p>这就是HTML的基本结构示例！</p>
  </body>
  </html>`,L()}function P(){d.value="",a.value="",i.value=""}async function R(){if(!a.value){b("没有可复制的内容","warning");return}try{const{ClipboardUtil:o}=await x(async()=>{const{ClipboardUtil:t}=await import("./ClipboardUtil-DJXy2Bl2.js");return{ClipboardUtil:t}},[]);await o.copyText(a.value)?b("结果已复制到剪贴板","success"):b("复制失败","error")}catch(o){b("复制失败: "+o.message,"error")}}async function I(){if(!a.value){b("没有可下载的内容","warning");return}const o=s.value==="md2html"?"html":"md",l=await x(()=>import("./DownloadUtil-D0PeGmLW.js"),__vite__mapDeps([0,1,2,3])),t=l.generateTimestampFilename("converted",o);l.downloadText(a.value,t),b("文件下载成功","success")}function H(o){return o?o.split(`
`).length:0}function S(o){return o?o.split(/\s+/).filter(l=>l).length:0}return U(()=>{x(async()=>{const{default:o}=await import("./turndown.browser.es-DqC8V-Us.js");return{default:o}},[]).then(({default:o})=>{w.value=new o({headingStyle:"atx",codeBlockStyle:"fenced",emDelimiter:"*",strongDelimiter:"**"}),w.value.addRule("strikethrough",{filter:["del","s"],replacement:function(l){return"~~"+l+"~~"}}),C()}),_(),window.addEventListener("resize",_)}),W(()=>{window.removeEventListener("resize",_)}),(o,l)=>(n(),r("div",Q,[e("div",Y,[(n(!0),r(k,null,M(y.value,t=>(n(),r("div",{key:t.id,class:c(["px-4 py-3 rounded-lg shadow-lg text-white transform transition-all duration-300 animate-slide-in",{"bg-green-500":t.type==="success","bg-red-500":t.type==="error","bg-yellow-500":t.type==="warning","bg-blue-500":t.type==="info"}])},[e("div",G,[t.type==="success"?(n(),r("svg",J,[...l[7]||(l[7]=[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1)])])):t.type==="error"?(n(),r("svg",X,[...l[8]||(l[8]=[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"},null,-1)])])):t.type==="warning"?(n(),r("svg",Z,[...l[9]||(l[9]=[e("path",{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"},null,-1)])])):(n(),r("svg",ee,[...l[10]||(l[10]=[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"},null,-1)])])),e("span",le,u(t.text),1)])],2))),128))]),l[13]||(l[13]=e("div",{class:"text-center mb-7"},[e("h1",{class:"text-2xl font-bold text-blue-800 mb-2"},"Markdown转换器"),e("p",{class:"text-blue-600"},"Markdown与HTML的相互转换，支持实时预览和语法高亮")],-1)),e("div",te,[e("div",oe,[e("button",{onClick:l[0]||(l[0]=t=>{s.value="md2html",T()}),class:c(["px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":s.value==="md2html"}])}," Markdown → HTML ",2),e("button",{onClick:l[1]||(l[1]=t=>{s.value="html2md",T()}),class:c(["px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":s.value==="html2md"}])}," HTML → Markdown ",2)]),e("div",{class:"flex gap-2 mt-2 sm:mt-0"},[e("button",{onClick:C,class:"px-3 py-1 text-sm border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 加载示例 "),e("button",{onClick:P,class:"px-3 py-1 text-sm border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 清空 "),e("button",{onClick:R,class:"px-3 py-1 text-sm border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 复制结果 "),e("button",{onClick:I,class:"px-3 py-1 text-sm border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 下载文件 ")])]),f.value?(n(),r("div",re,[e("div",ne,[e("button",{onClick:l[2]||(l[2]=t=>{v.value="input"}),class:c(["px-4 py-2 border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":v.value==="input"}])},u(s.value==="md2html"?"Markdown输入":"HTML输入"),3),e("button",{onClick:l[3]||(l[3]=t=>{v.value="output"}),class:c(["px-4 py-2 border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":v.value==="output"}])},u(s.value==="md2html"?"HTML输出":"Markdown输出"),3)])])):m("",!0),e("div",se,[e("div",{class:c({"mobile-hidden":f.value&&v.value!=="input"})},[e("div",ae,[e("div",de,[e("span",ue,u(s.value==="md2html"?"Markdown输入":"HTML输入"),1),e("div",ie,[s.value==="html2md"?(n(),r("button",{key:0,onClick:O,class:"px-3 py-1 text-xs border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 格式化 ")):m("",!0)])]),q(e("textarea",{"onUpdate:modelValue":l[4]||(l[4]=t=>d.value=t),placeholder:s.value==="md2html"?"请输入Markdown文本...":"请输入HTML代码...",rows:f.value?15:20,onInput:L,class:"w-full p-4 border-none focus:ring-0 input-textarea flex-grow",style:{"min-height":"400px"}},null,40,ce),[[F,d.value]]),e("div",pe,[e("span",null,"字符数: "+u(d.value.length),1),e("span",null,"行数: "+u(H(d.value)),1),s.value==="md2html"?(n(),r("span",ge,"单词数: "+u(S(d.value)),1)):m("",!0)])])],2),e("div",{class:c({"mobile-hidden":f.value&&v.value!=="output"})},[e("div",ve,[e("div",be,[e("span",me,u(s.value==="md2html"?"HTML输出":"Markdown输出"),1),s.value==="md2html"?(n(),r("div",fe,[e("button",{onClick:l[5]||(l[5]=t=>g.value="code"),class:c(["px-3 py-1 text-xs border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":g.value==="code"}])}," 代码 ",2),e("button",{onClick:l[6]||(l[6]=t=>g.value="preview"),class:c(["px-3 py-1 text-xs border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":g.value==="preview"}])}," 预览 ",2)])):m("",!0)]),g.value==="code"?(n(),r("div",he,[e("pre",xe,[e("code",{innerHTML:i.value},null,8,ye)])])):g.value==="preview"&&s.value==="md2html"?(n(),r("div",we,[e("div",{innerHTML:a.value,class:"markdown-preview leading-relaxed"},null,8,_e)])):s.value==="html2md"?(n(),r("div",ke,[e("pre",Me,[e("code",{innerHTML:i.value},null,8,Te)])])):m("",!0),e("div",Le,[e("span",null,"字符数: "+u(a.value.length),1),e("span",null,"行数: "+u(H(a.value)),1)])])],2)]),e("div",Ce,[l[12]||(l[12]=e("div",{class:"p-4 border-b border-gray-200 bg-gray-50"},[e("span",{class:"font-medium"},"Markdown语法参考")],-1)),e("div",He,[(n(!0),r(k,null,M(E.value,(t,h)=>(n(),r("div",{key:h,class:"mb-4"},[e("button",{onClick:$=>t.expanded=!t.expanded,class:"w-full flex justify-between items-center p-3 bg-blue-50 rounded-md hover:bg-blue-100 text-left font-medium text-blue-800"},[e("span",null,u(t.title),1),(n(),r("svg",{class:c(["w-5 h-5 text-blue-600 transform transition-transform",{"rotate-180":t.expanded}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...l[11]||(l[11]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,$e),t.expanded?(n(),r("div",ze,[(n(!0),r(k,null,M(t.code,($,z)=>(n(),r("code",{key:z},[N(u($)+" ",1),z<t.code.length-1?(n(),r("br",Ee)):m("",!0)]))),128))])):m("",!0)]))),128))])])]))}}),Be=K(De,[["__scopeId","data-v-dd98d830"]]);export{Be as default};
