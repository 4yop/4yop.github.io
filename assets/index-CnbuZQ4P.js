import{I as L,c as P,b as t,y as F,A as V,B as T,t as R,m as U,a as M,j as b,o as z,_ as j}from"./index-ClP7pIH1.js";const A={class:"css-pxtorem-page"},X={class:"tool-container"},q={class:"config-panel"},G={class:"config-item"},H={class:"config-input-wrap"},J={class:"config-item"},K={class:"config-checkbox-wrap"},Q={class:"config-item"},W={class:"file-upload-text"},Y={class:"editor-panel"},Z={class:"editor-item"},ee={class:"editor-header"},te={class:"editor-hint"},oe={class:"editor-item"},ne={class:"editor-header"},se={class:"editor-actions"},re={class:"editor-hint"},ie=["value"],ae=L({__name:"index",setup(le){const v=b(20),S=b(!1),f=b(""),u=b(""),k=b(""),_=b(null);function B(){var o;(o=_.value)==null||o.click()}function N(o){var d;const s=(d=o.target.files)==null?void 0:d[0];if(!s)return;k.value=s.name;const p=new FileReader;p.onload=l=>{var x;f.value=((x=l.target)==null?void 0:x.result)||""},p.readAsText(s)}function E(o,e,s){if(!o.trim())return"";if(!e||e<=0||!Number.isFinite(e))return o;const p=["border","border-width","border-top-width","border-right-width","border-bottom-width","border-left-width","border-top","border-right","border-bottom","border-left"],d=/(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*px/gi,l=o.split(`
`),x=[];let C=!1;for(let w of l){let n=w;if(C){const i=n.indexOf("*/");if(i!==-1){const g=n.substring(i+2);C=!1,n=n.substring(0,i+2)+h(g,e,s,p,d)}}else{const i=n.indexOf("/*");if(i!==-1){const g=n.indexOf("*/",i+2);if(g!==-1){const r=n.substring(0,i),c=n.substring(g+2);n=r+h(r,e,s,p,d)+"/*"+n.substring(i+2,g)+"*/"+h(c,e,s,p,d)}else{const r=n.substring(0,i);n=r+h(r,e,s,p,d)+n.substring(i),C=!0}}else n=h(n,e,s,p,d)}x.push(n)}return x.join(`
`)}function h(o,e,s,p,d){if(!s)return o.replace(d,(r,c)=>{const a=parseFloat(c)/e;return(a%1===0?a.toFixed(0):a.toFixed(4).replace(/0+$/,"").replace(/\.$/,""))+"rem"});let l=o;const x=l.trim();if(!p.some(r=>{const c=x.indexOf(r+":");if(c===-1)return!1;const m=c>0?x[c-1]:"";return m===""||m===" "||m==="{"||m===";"}))return l.replace(d,(r,c)=>{const a=parseFloat(c)/e;return(a%1===0?a.toFixed(0):a.toFixed(4).replace(/0+$/,"").replace(/\.$/,""))+"rem"});const w="__BORDER_PX_";let n=0;const i=[],g=/(border(?:-(?:top|right|bottom|left|width))?(?:-width)?)\s*:\s*([^;]*?)(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*px/gi;l=l.replace(g,(r,c,m,a)=>{const y=w+n+++"__";return i.push(a+"px"),r.replace(a+"px",y)}),l=l.replace(d,(r,c)=>{const a=parseFloat(c)/e;return(a%1===0?a.toFixed(0):a.toFixed(4).replace(/0+$/,"").replace(/\.$/,""))+"rem"});for(let r=0;r<i.length;r++)l=l.replace(w+r+"__",()=>i[r]);return l}function I(){if(!f.value.trim()){alert("请先输入或上传CSS代码");return}if(!v.value||v.value<=0||!Number.isFinite(v.value)){alert("请输入有效的Rem基准值（必须为正数）");return}u.value=E(f.value,v.value,S.value)}function $(){f.value=`/* 演示数据 - 移动端页面样式 */
.container {
  width: 750px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

.header {
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 36px;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
}

.banner {
  width: 100%;
  height: 360px;
  margin-top: 20px;
  border-radius: 12px;
  overflow: hidden;
}

.content {
  padding: 24px 16px;
  font-size: 28px;
  line-height: 1.6;
  color: #666;
}

.card {
  background: #fff;
  padding: 24px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.card-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-left: 16px;
  border-left: 6px solid #409eff;
}

.btn-primary {
  display: inline-block;
  width: 240px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 32px;
  color: #fff;
  background-color: #409eff;
  border-radius: 40px;
  border: none;
}

.footer {
  height: 120px;
  line-height: 120px;
  text-align: center;
  font-size: 24px;
  color: #999;
  border-top: 1px solid #eee;
  margin-top: 40px;
}`,u.value=""}function D(){f.value="",u.value="",k.value="",_.value&&(_.value.value="")}async function O(){if(u.value)try{await navigator.clipboard.writeText(u.value),alert("已复制到剪贴板")}catch{const o=document.createElement("textarea");o.value=u.value,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),alert("已复制到剪贴板")}}return(o,e)=>(z(),P("div",A,[e[10]||(e[10]=t("div",{class:"page-header"},[t("h1",{class:"page-title"},"CSS PX转REM工具"),t("p",{class:"page-desc"},"将CSS中的px单位批量转换为rem单位，适用于移动端响应式开发")],-1)),t("div",X,[t("div",q,[t("div",G,[e[5]||(e[5]=t("label",{class:"config-label"},"Rem基准值",-1)),t("div",H,[e[3]||(e[3]=t("span",{class:"config-prefix"},"1Rem =",-1)),F(t("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=s=>v.value=s),class:"config-input",min:"1",max:"200"},null,512),[[V,v.value,void 0,{number:!0}]]),e[4]||(e[4]=t("span",{class:"config-suffix"},"px",-1))])]),t("div",J,[t("label",K,[F(t("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=s=>S.value=s),class:"config-checkbox"},null,512),[[T,S.value]]),e[6]||(e[6]=t("span",null,"不处理Border属性值",-1))])]),t("div",Q,[e[7]||(e[7]=t("label",{class:"config-label"},"导入文件",-1)),t("div",{class:"file-upload-wrap",onClick:B},[t("span",W,R(k.value||"点击上传CSS文件"),1),t("input",{ref_key:"fileInputRef",ref:_,type:"file",accept:".css,.less,.scss,.sass",class:"file-input",onChange:N},null,544)])]),t("div",{class:"btn-group"},[t("button",{class:"btn btn-primary",onClick:I},"点击处理"),t("button",{class:"btn btn-secondary",onClick:$},"演示数据"),t("button",{class:"btn btn-default",onClick:D},"清空数据")])]),t("div",Y,[t("div",Z,[t("div",ee,[e[8]||(e[8]=t("span",{class:"editor-label"},"输入CSS代码",-1)),t("span",te,R(f.value.length)+" 字符",1)]),F(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=s=>f.value=s),class:"editor-textarea",placeholder:`在此粘贴或输入CSS代码...

示例：
.container {
  width: 750px;
  font-size: 28px;
  padding: 20px;
  border: 1px solid #ccc;
}`,spellcheck:"false"},null,512),[[V,f.value]])]),t("div",oe,[t("div",ne,[e[9]||(e[9]=t("span",{class:"editor-label"},"转换结果",-1)),t("div",se,[t("span",re,R(u.value.length)+" 字符",1),u.value?(z(),P("button",{key:0,class:"btn-copy",onClick:O},"复制")):U("",!0)])]),t("textarea",{value:u.value,class:"editor-textarea output-area",readonly:"",placeholder:"转换结果将显示在这里..."},null,8,ie)])])]),e[11]||(e[11]=M('<div class="tips-section" data-v-9e593806><h3 class="tips-title" data-v-9e593806>使用说明</h3><ul class="tips-list" data-v-9e593806><li data-v-9e593806><strong data-v-9e593806>Rem基准值：</strong>设置1rem等于多少像素，常见值为16（浏览器默认）、10（方便计算）、20（移动端常用）等</li><li data-v-9e593806><strong data-v-9e593806>不处理Border属性：</strong>勾选后，border-width、border等属性中的px值不会被转换，因为边框通常不需要响应式缩放</li><li data-v-9e593806><strong data-v-9e593806>支持格式：</strong>支持 .css / .less / .scss / .sass 文件上传，也支持直接粘贴CSS代码</li><li data-v-9e593806><strong data-v-9e593806>转换规则：</strong>仅转换数值+px格式的单位（如 20px），保留其他单位和注释不变</li></ul></div>',1))]))}}),ce=j(ae,[["__scopeId","data-v-9e593806"]]);export{ce as default};
