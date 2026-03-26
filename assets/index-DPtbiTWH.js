const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DownloadUtil-CR51XFxr.js","assets/index-C8e-g5zz.js","assets/index-Agq0vRzt.css","assets/FileUtil-PGS_lfvu.js","assets/jszip.min-D3mJXubg.js","assets/jszip.min-DxYGnYuB.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js"])))=>i.map(i=>d[i]);
import{D as S,p as U,_ as h,o as W,a,c as u,b as e,i as c,t as d,d as v,e as z,v as q,F as H,l as $,r as g,M as m,h as F,q as N}from"./index-C8e-g5zz.js";const Y={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5"},G={class:"flex flex-wrap justify-between items-center mb-5 p-4 bg-gray-50 rounded-lg"},J={class:"flex gap-2"},K={key:0,class:"text-center mb-5 p-4 bg-gray-50 rounded-lg"},Q={class:"flex justify-center gap-2"},X={class:"grid grid-cols-1 md:grid-cols-2 gap-5"},Z={class:"border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full flex flex-col"},ee={class:"flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50"},te={class:"font-medium"},le={class:"flex gap-2"},oe=["placeholder","rows"],re={class:"flex flex-wrap gap-3 p-4 border-t border-gray-200 bg-gray-50 text-xs text-gray-500"},ne={key:0},se={class:"border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full flex flex-col"},ae={class:"flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50"},ue={class:"font-medium"},de={key:0,class:"flex gap-2"},ie={key:0,class:"flex-grow max-h-[500px] overflow-y-auto bg-gray-50 p-4"},ce={class:"m-0 text-sm leading-relaxed"},ge=["innerHTML"],be={key:1,class:"flex-grow max-h-[500px] overflow-y-auto p-4 border border-gray-200 bg-white"},pe=["innerHTML"],ve={key:2,class:"flex-grow max-h-[500px] overflow-y-auto bg-gray-50 p-4"},me={class:"m-0 text-sm leading-relaxed"},fe=["innerHTML"],he={class:"flex flex-wrap gap-3 p-4 border-t border-gray-200 bg-gray-50 text-xs text-gray-500"},xe={class:"mt-5 border border-gray-200 rounded-lg shadow-sm overflow-hidden"},ye={class:"p-4"},we=["onClick"],_e={key:0,class:"mt-2 p-3 bg-blue-50 rounded-md leading-relaxed syntax-example border-l-4 border-blue-300"},ke={key:0},Me=S({__name:"index",setup(Te){const r=g("md2html"),b=g("code"),s=g(""),n=g(""),i=g(""),f=g(!1),p=g("input"),x=g(null),E=g([{title:"标题",expanded:!1,code:["# 一级标题","## 二级标题","### 三级标题"]},{title:"文本样式",expanded:!1,code:["**粗体文本**","*斜体文本*","~~删除线~~","`行内代码`"]},{title:"列表",expanded:!1,code:["- 无序列表项","1. 有序列表项","- [ ] 任务列表","- [x] 已完成任务"]},{title:"链接和图片",expanded:!1,code:["[链接文本](https://example.com)","![图片描述](image.jpg)","<https://example.com>"]},{title:"代码块",expanded:!1,code:["```javascript","console.log('Hello World');","```"]},{title:"表格",expanded:!1,code:["| 列1 | 列2 |","|-----|-----|","| 内容1 | 内容2 |"]}]);function y(){f.value=window.innerWidth<=768}function _(){s.value="",n.value="",i.value="",b.value="code",p.value="input"}function k(){r.value==="md2html"?D():j()}async function D(){if(!s.value.trim()){n.value="",i.value="";return}try{const t=await h(()=>import("./marked.esm-D-R7kuv_.js"),[]),{default:l}=await h(async()=>{const{default:w}=await import("./purify.es-BgtpMKW3.js");return{default:w}},[]);let o=t.parse(s.value);o=l.sanitize(o),n.value=o,i.value=V(o)}catch(t){n.value="转换错误: "+t.message,i.value=n.value}}async function j(){if(!s.value.trim()){n.value="",i.value="";return}try{let t=x.value.turndown(s.value);n.value=t,i.value=O(t)}catch(t){n.value="转换错误: "+t.message,i.value=n.value}}function V(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/(&lt;\/?[^&\s]*&gt;)/g,'<span class="html-tag">$1</span>')}function O(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^(#{1,6})\s+(.*)$/gm,'<span class="md-header">$1 $2</span>').replace(/(\*\*.*?\*\*)/g,'<span class="md-bold">$1</span>').replace(/(\*.*?\*)/g,'<span class="md-italic">$1</span>').replace(/(`.*?`)/g,'<span class="md-code">$1</span>').replace(/(\[.*?\]\(.*?\))/g,'<span class="md-link">$1</span>')}function P(){if(r.value==="html2md"&&s.value)try{s.value=s.value.replace(/></g,`>
<`).replace(/^\s+|\s+$/gm,"").split(`
`).filter(t=>t.trim()).join(`
`)}catch{this.$message&&m.error("格式化失败")}}function M(){r.value==="md2html"?s.value=`# Markdown示例文档
  
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
  
  这就是Markdown的基本语法示例！`:s.value=`<!DOCTYPE html>
  <html>
  <head>
      <title>HTML示例</title>
  </head>
  <body>
      <h1>HTML示例文档</h1>
      
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
  </html>`,k()}function R(){s.value="",n.value="",i.value=""}async function I(){if(!n.value){this.$message&&m.warning("没有可复制的内容");return}try{const{ClipboardUtil:t}=await h(async()=>{const{ClipboardUtil:o}=await import("./ClipboardUtil-DJXy2Bl2.js");return{ClipboardUtil:o}},[]);await t.copyText(n.value)&&this.$message?m.success("结果已复制到剪贴板"):this.$message&&m.error("复制失败")}catch(t){this.$message&&m.error("复制失败: "+t.message)}}async function A(){if(!n.value){this.$message&&m.warning("没有可下载的内容");return}const t=r.value==="md2html"?"html":"md",l=await h(()=>import("./DownloadUtil-CR51XFxr.js"),__vite__mapDeps([0,1,2,3,4,5,6])),o=l.generateTimestampFilename("converted",t);l.downloadText(n.value,o),this.$message&&m.success("文件下载成功")}function T(t){return t?t.split(`
`).length:0}function B(t){return t?t.split(/\s+/).filter(l=>l).length:0}return U(()=>{h(async()=>{const{default:t}=await import("./turndown.browser.es-DqC8V-Us.js");return{default:t}},[]).then(({default:t})=>{x.value=new t({headingStyle:"atx",codeBlockStyle:"fenced",emDelimiter:"*",strongDelimiter:"**"}),x.value.addRule("strikethrough",{filter:["del","s"],replacement:function(l){return"~~"+l+"~~"}}),M()}),y(),window.addEventListener("resize",y.value)}),W(()=>{window.removeEventListener("resize",y.value)}),(t,l)=>(a(),u("div",Y,[l[9]||(l[9]=e("div",{class:"text-center mb-7"},[e("h1",{class:"text-2xl font-bold text-blue-800 mb-2"},"Markdown转换器"),e("p",{class:"text-blue-600"},"Markdown与HTML的相互转换，支持实时预览和语法高亮")],-1)),e("div",G,[e("div",J,[e("button",{onClick:l[0]||(l[0]=o=>{r.value="md2html",_()}),class:c(["px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":r.value==="md2html"}])}," Markdown → HTML ",2),e("button",{onClick:l[1]||(l[1]=o=>{r.value="html2md",_()}),class:c(["px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":r.value==="html2md"}])}," HTML → Markdown ",2)]),e("div",{class:"flex gap-2 mt-2 sm:mt-0"},[e("button",{onClick:M,class:"px-3 py-1 text-sm border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 加载示例 "),e("button",{onClick:R,class:"px-3 py-1 text-sm border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 清空 "),e("button",{onClick:I,class:"px-3 py-1 text-sm border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 复制结果 "),e("button",{onClick:A,class:"px-3 py-1 text-sm border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 下载文件 ")])]),f.value?(a(),u("div",K,[e("div",Q,[e("button",{onClick:l[2]||(l[2]=o=>{p.value="input"}),class:c(["px-4 py-2 border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":p.value==="input"}])},d(r.value==="md2html"?"Markdown输入":"HTML输入"),3),e("button",{onClick:l[3]||(l[3]=o=>{p.value="output"}),class:c(["px-4 py-2 border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":p.value==="output"}])},d(r.value==="md2html"?"HTML输出":"Markdown输出"),3)])])):v("",!0),e("div",X,[e("div",{class:c({"mobile-hidden":f.value&&p.value!=="input"})},[e("div",Z,[e("div",ee,[e("span",te,d(r.value==="md2html"?"Markdown输入":"HTML输入"),1),e("div",le,[r.value==="html2md"?(a(),u("button",{key:0,onClick:P,class:"px-3 py-1 text-xs border border-blue-300 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}," 格式化 ")):v("",!0)])]),z(e("textarea",{"onUpdate:modelValue":l[4]||(l[4]=o=>s.value=o),placeholder:r.value==="md2html"?"请输入Markdown文本...":"请输入HTML代码...",rows:f.value?15:20,onInput:k,class:"w-full p-4 border-none focus:ring-0 input-textarea flex-grow",style:{"min-height":"400px"}},null,40,oe),[[q,s.value]]),e("div",re,[e("span",null,"字符数: "+d(s.value.length),1),e("span",null,"行数: "+d(T(s.value)),1),r.value==="md2html"?(a(),u("span",ne,"单词数: "+d(B(s.value)),1)):v("",!0)])])],2),e("div",{class:c({"mobile-hidden":f.value&&p.value!=="output"})},[e("div",se,[e("div",ae,[e("span",ue,d(r.value==="md2html"?"HTML输出":"Markdown输出"),1),r.value==="md2html"?(a(),u("div",de,[e("button",{onClick:l[5]||(l[5]=o=>b.value="code"),class:c(["px-3 py-1 text-xs border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":b.value==="code"}])}," 代码 ",2),e("button",{onClick:l[6]||(l[6]=o=>b.value="preview"),class:c(["px-3 py-1 text-xs border border-gray-300 rounded-r-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",{"bg-blue-100 text-blue-800 border-blue-300":b.value==="preview"}])}," 预览 ",2)])):v("",!0)]),b.value==="code"?(a(),u("div",ie,[e("pre",ce,[e("code",{innerHTML:i.value},null,8,ge)])])):b.value==="preview"&&r.value==="md2html"?(a(),u("div",be,[e("div",{innerHTML:n.value,class:"markdown-preview leading-relaxed"},null,8,pe)])):r.value==="html2md"?(a(),u("div",ve,[e("pre",me,[e("code",{innerHTML:i.value},null,8,fe)])])):v("",!0),e("div",he,[e("span",null,"字符数: "+d(n.value.length),1),e("span",null,"行数: "+d(T(n.value)),1)])])],2)]),e("div",xe,[l[8]||(l[8]=e("div",{class:"p-4 border-b border-gray-200 bg-gray-50"},[e("span",{class:"font-medium"},"Markdown语法参考")],-1)),e("div",ye,[(a(!0),u(H,null,$(E.value,(o,w)=>(a(),u("div",{key:w,class:"mb-4"},[e("button",{onClick:L=>o.expanded=!o.expanded,class:"w-full flex justify-between items-center p-3 bg-blue-50 rounded-md hover:bg-blue-100 text-left font-medium text-blue-800"},[e("span",null,d(o.title),1),(a(),u("svg",{class:c(["w-5 h-5 text-blue-600 transform transition-transform",{"rotate-180":o.expanded}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...l[7]||(l[7]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,we),o.expanded?(a(),u("div",_e,[(a(!0),u(H,null,$(o.code,(L,C)=>(a(),u("code",{key:C},[F(d(L)+" ",1),C<o.code.length-1?(a(),u("br",ke)):v("",!0)]))),128))])):v("",!0)]))),128))])])]))}}),Ce=N(Me,[["__scopeId","data-v-ea88acda"]]);export{Ce as default};
