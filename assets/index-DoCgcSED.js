const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jszip.min-CPrIgNgz.js","assets/index-ncu1yzeF.js","assets/index-Mxeucpg1.css","assets/jszip.min-KEIoREUo.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js"])))=>i.map(i=>d[i]);
import{f as H,_ as ne,l as R,o as x,c as b,b as n,d as k,x as M,q as le,F as L,p as j,t as y,y as w,A as z,z as ae,a as ie,m as C,C as S,B as oe,j as _}from"./index-ncu1yzeF.js";import{DownloadUtil as G}from"./DownloadUtil-DrfxJeu3.js";import"./FileUtil-1lUATLVh.js";const Z="^\\s*(第\\s*[0-9零一二三四五六七八九十百千两百]+\\s*[章回节卷篇部集]|楔子|引子|序章|序言|前言|后记|尾声|番外|Chapter\\s+[0-9IVXLC]+|CHAPTER\\s+[0-9IVXLC]+)",se=/[。！？…」）】.!?]$/;function T(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function re(){return crypto&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const o=Math.random()*16|0;return(a==="x"?o:o&3|8).toString(16)})}function V(a){if(a.length>=3&&a[0]===239&&a[1]===187&&a[2]===191)return{text:new TextDecoder("utf-8").decode(a.subarray(3)),encoding:"utf-8"};if(a.length>=2&&a[0]===255&&a[1]===254)return{text:new TextDecoder("utf-16le").decode(a.subarray(2)),encoding:"utf-16le"};if(a.length>=2&&a[0]===254&&a[1]===255)return{text:new TextDecoder("utf-16be").decode(a.subarray(2)),encoding:"utf-16be"};const o=D(a,"utf-8");if(o&&o.repl===0&&o.text.length>0)return{text:o.text,encoding:"utf-8"};const l=D(a,"gb18030"),e=D(a,"big5"),u=r=>r?r.cjk-r.repl*2:-1/0;return l&&e?u(l)>=u(e)?{text:l.text,encoding:"gb18030"}:{text:e.text,encoding:"big5"}:l?{text:l.text,encoding:"gb18030"}:e?{text:e.text,encoding:"big5"}:{text:o?o.text:"",encoding:"utf-8"}}function de(a,o){if(!o||o==="auto")return V(a).text;try{return new TextDecoder(o).decode(a)}catch{return V(a).text}}const ce={none:null,s2t:{from:"cn",to:"twp"},t2s:{from:"tw",to:"cn"}},X={};async function ue(a,o){const l=ce[o];if(!l||!a)return a;let e=X[o];return e||(e=(await H(async()=>{const{default:r}=await import("./full-CRZ7eiOf.js");return{default:r}},[])).default.Converter(l),X[o]=e),e(a)}function D(a,o){try{const l=new TextDecoder(o,{fatal:!1}).decode(a);let e=0,u=0;for(const r of l){const d=r.codePointAt(0);d===65533?e++:d>=19968&&d<=40959&&u++}return{text:l,repl:e,cjk:u}}catch{return null}}function pe(a){try{return new RegExp(a)}catch{return new RegExp(Z)}}function fe(a,o){const l=[];let e="";for(const u of a){const r=u.trim();if(r===""){e&&(l.push(e),e="");continue}if(o.test(r)){e&&(l.push(e),e=""),l.push(r);continue}e?se.test(e)?(l.push(e),e=r):e+=r:e=r}return e&&l.push(e),l}function ve(a,o,l={}){const e=pe(o),u=a.split(/\r?\n/),r=l.smartMerge?fe(u,e):u.map(m=>m.trim()).filter(Boolean),d=[];let c=null;const f=[];for(const m of r)e.test(m)?(c={title:m.trim(),content:[]},d.push(c)):c?c.content.push(m):f.push(m);return f.length>0&&d.length>0&&d.unshift({title:"序章",content:f}),d.length===0?[{title:"正文",content:r}]:d}function me(a){let o=0;for(let l=0;l<a.length;l++)o=(o*31+a.charCodeAt(l))%360;return o}function he(a,o){const l=document.createElement("canvas");l.width=800,l.height=1200;const e=l.getContext("2d"),u=me(a||"book"),r=e.createLinearGradient(0,0,l.width,l.height);r.addColorStop(0,`hsl(${u},45%,30%)`),r.addColorStop(1,`hsl(${(u+45)%360},52%,18%)`),e.fillStyle=r,e.fillRect(0,0,l.width,l.height),e.globalAlpha=.1,e.fillStyle="#ffffff",e.beginPath(),e.arc(l.width*.82,l.height*.18,200,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(l.width*.18,l.height*.86,150,0,Math.PI*2),e.fill(),e.globalAlpha=1,e.fillStyle="#ffffff",e.textAlign="center",e.font='bold 66px "PingFang SC","Microsoft YaHei",sans-serif';const d=ge(e,a||"未命名作品",l.width/2,l.height/2-30,l.width-120,84);return o&&(e.font='32px "PingFang SC","Microsoft YaHei",sans-serif',e.fillStyle="rgba(255,255,255,0.85)",e.fillText(`作者：${o}`,l.width/2,d+70)),new Promise(c=>{l.toBlob(f=>c(f),"image/jpeg",.9)})}function ge(a,o,l,e,u,r){const d=Array.from(o);let c="",f=e;for(const m of d){const p=c+m;a.measureText(p).width>u&&c?(a.fillText(c,l,f),c=m,f+=r):c=p}return c&&a.fillText(c,l,f),f}const xe=`<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`,be=`body{margin:0;padding:0 0 1em;font-family:"PingFang SC","Microsoft YaHei",serif;line-height:1.9;}
.chapter-title{font-size:1.4em;text-align:center;margin:1.2em 0 1em;font-weight:700;}
p{text-indent:2em;margin:0.4em 1.2em;line-height:1.9;}
.cover-img{display:block;width:100%;height:auto;}`;function we(a,o){const l=o.filter(e=>e&&e.trim()).map(e=>`    <p>${T(e)}</p>`).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<head>
<meta charset="utf-8"/>
<title>${T(a)}</title>
<link rel="stylesheet" type="text/css" href="../style.css"/>
</head>
<body>
<h1 class="chapter-title">${T(a)}</h1>
${l}
</body>
</html>`}function _e(){return`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<head>
<meta charset="utf-8"/>
<title>封面</title>
</head>
<body>
<div style="text-align:center;">
<img class="cover-img" src="../images/cover.jpg" alt="封面"/>
</div>
</body>
</html>`}function ye(a,o){return`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="zh-CN">
<head>
<meta charset="utf-8"/>
<title>目录</title>
</head>
<body>
<nav epub:type="toc" id="toc">
<h1>目录</h1>
<ol>
${o.map(l=>`    <li><a href="${l.href}">${T(l.title)}</a></li>`).join(`
`)}
</ol>
</nav>
</body>
</html>`}function Ce(a,o,l){return`<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
<head>
<meta name="dtb:uid" content="${a}"/>
<meta name="dtb:depth" content="1"/>
<meta name="dtb:totalPageCount" content="0"/>
<meta name="dtb:maxPageNumber" content="0"/>
</head>
<docTitle><text>${T(o)}</text></docTitle>
<navMap>
${l.map(e=>`    <navPoint id="${e.id}" playOrder="${e.playOrder}">
      <navLabel><text>${T(e.title)}</text></navLabel>
      <content src="${e.href}"/>
    </navPoint>`).join(`
`)}
</navMap>
</ncx>`}function Te(a,o,l,e,u,r){const d=r?`
    <meta name="cover" content="cover-image"/>`:"";return`<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="zh">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="bookid">${a}</dc:identifier>
<dc:title>${T(o.title||"未命名作品")}</dc:title>
<dc:creator>${T(o.author||"佚名")}</dc:creator>
<dc:language>zh-CN</dc:language>
<dc:publisher>Tools321</dc:publisher>${d}
<meta property="dcterms:modified">${l}</meta>
</metadata>
<manifest>
${e.join(`
`)}
</manifest>
<spine toc="ncx">
${u.join(`
`)}
</spine>
</package>`}async function $e(a){const o=(await H(async()=>{const{default:h}=await import("./jszip.min-CPrIgNgz.js").then(B=>B.j);return{default:h}},__vite__mapDeps([0,1,2,3,4]))).default,l=new o,e="urn:uuid:"+re(),u=new Date().toISOString().replace(/\.\d+Z$/,"Z");l.file("mimetype","application/epub+zip",{compression:"STORE"}),l.file("META-INF/container.xml",xe);const r=!!a.coverBlob,d=[],c=[],f=[],m=[];let p=1;return a.chapters.forEach((h,B)=>{const $="chapter-"+String(B+1).padStart(4,"0"),P="text/"+$+".xhtml";l.file("OEBPS/"+P,we(h.title,h.content)),d.push(`<item id="${$}" href="${P}" media-type="application/xhtml+xml"/>`),c.push(`<itemref idref="${$}"/>`),f.push({href:P,title:h.title}),m.push({id:$,playOrder:p++,title:h.title,href:P})}),r&&(l.file("OEBPS/images/cover.jpg",a.coverBlob),l.file("OEBPS/text/cover.xhtml",_e()),d.unshift('<item id="cover-image" href="images/cover.jpg" media-type="image/jpeg" properties="cover-image"/>'),d.push('<item id="cover" href="text/cover.xhtml" media-type="application/xhtml+xml"/>'),c.unshift('<itemref idref="cover" linear="no"/>')),l.file("OEBPS/style.css",be),d.push('<item id="css" href="style.css" media-type="text/css"/>'),l.file("OEBPS/nav.xhtml",ye(a.title||"未命名作品",f)),l.file("OEBPS/toc.ncx",Ce(e,a.title||"未命名作品",m)),d.unshift('<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>'),d.unshift('<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>'),l.file("OEBPS/content.opf",Te(e,a,u,d,c,r)),l}const Pe={class:"epub-page"},Ee={key:0,class:"book-list"},Se={class:"book-head"},Be={class:"book-meta"},ke=["title"],Ue={class:"book-sub"},Oe={class:"size-tag"},Me={class:"chapter-badge"},ze=["onClick","disabled"],De={class:"book-fields"},Ve={class:"field"},Fe=["onUpdate:modelValue","disabled"],Ae={class:"field"},Ie=["onUpdate:modelValue","disabled"],Ne={class:"field"},Re=["onUpdate:modelValue","disabled","onChange"],Le=["onClick"],je={key:0,class:"chapter-preview"},Ge={key:0,class:"chapter-more"},Xe={key:1,class:"options-section"},Ye={class:"option-block"},He=["disabled"],Ze={class:"option-block"},qe={class:"radio-row"},Ke={class:"radio-item"},Je=["disabled"],We={class:"radio-item"},Qe=["disabled"],et={class:"radio-item"},tt=["disabled"],nt={class:"option-row"},lt={class:"checkbox-item"},at=["disabled"],it={class:"option-block"},ot={class:"radio-row"},st={class:"radio-item"},rt=["disabled"],dt={class:"radio-item"},ct=["disabled"],ut={class:"radio-item"},pt=["disabled"],ft={key:0,class:"upload-row"},vt={key:2,class:"action-bar"},mt=["disabled"],ht={key:0,class:"spin-icon"},gt={class:"action-note"},xt={key:3,class:"mask"},bt={class:"mask-box"},wt={class:"mask-text"},Y=50*1024*1024,_t={__name:"index",setup(a){const o=_(!1),l=_(null),e=_([]),u=_(new Set),r=_(Z),d=_(!0),c=_("none"),f=_("auto"),m=_(null),p=_(!1),h=_("");let B=0;const $=s=>s<1024?s+" B":s<1024*1024?(s/1024).toFixed(1)+" KB":(s/1024/1024).toFixed(2)+" MB",P=s=>(s||"未命名").replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"_").slice(0,60),F=s=>{s.chapters=ve(s.decodedText,r.value,{smartMerge:d.value})},U=async s=>{s.decodedText=await ue(s.rawText,c.value),F(s)},q=s=>{o.value=!1,A(s.dataTransfer.files)},K=s=>{A(s.target.files),s.target.value=""},A=async s=>{const t=Array.from(s||[]);for(const i of t){if(!/\.txt$/i.test(i.name)&&i.type!=="text/plain"){h.value=`已跳过非 txt 文件：${i.name}`;continue}if(i.size>Y){h.value=`已跳过超大文件（>${$(Y)}）：${i.name}`;continue}try{const v=await i.arrayBuffer(),g=new Uint8Array(v),{text:E,encoding:I}=V(g),O=i.name.replace(/\.txt$/i,""),N={id:++B,file:i,name:i.name,sizeLabel:$(i.size),bytes:g,encoding:I,rawText:E,decodedText:E,title:O||"未命名作品",author:"佚名",chapters:[]};await U(N),e.value.push(N)}catch{h.value=`读取失败：${i.name}`}}},J=async s=>{s.rawText=de(s.bytes,s.encoding),await U(s)},W=s=>{e.value=e.value.filter(t=>t.id!==s),u.value.delete(s)},Q=s=>{const t=new Set(u.value);t.has(s)?t.delete(s):t.add(s),u.value=t},ee=s=>{const t=s.target.files&&s.target.files[0];t&&(m.value=t)};R([r,d],()=>{e.value.forEach(F)}),R(c,async()=>{for(const s of e.value)await U(s)});const te=async()=>{if(!e.value.length||p.value)return;p.value=!0;const s=window.location.hostname||"web-tool",t=new Date().toISOString().replace(/[:.]/g,"-").slice(0,-5);try{const i=[];for(let v=0;v<e.value.length;v++){const g=e.value[v];h.value=`正在生成 第 ${v+1}/${e.value.length} 本：${g.title}`;let E;f.value==="auto"?E=await he(g.title,g.author):f.value==="upload"&&m.value&&(E=m.value);const O=await(await $e({title:g.title,author:g.author,chapters:g.chapters,coverBlob:E})).generateAsync({type:"blob"});i.push({name:`${P(g.title)}.epub`,blob:O})}i.length===1?G.downloadBlob(i[0].blob,`${P(e.value[0].title)}.${s}.epub`):await G.downloadZip(i.map(g=>({name:g.name,content:g.blob})),`txt-to-epub.${s}.${t}.zip`)||(h.value="打包下载失败，请重试"),h.value="已生成，开始下载"}catch(i){h.value="生成失败："+(i&&i.message?i.message:i)}finally{setTimeout(()=>{p.value=!1},800)}};return(s,t)=>(x(),b("div",Pe,[t[33]||(t[33]=n("div",{class:"text-center mb-5"},[n("h1",{class:"page-title"},"TXT转EPUB"),n("p",{class:"page-desc"},"把纯文本小说一键转成带目录、封面、元数据的电子书，Kindle / 掌阅 / Boox / Apple Books 都能用")],-1)),n("div",{class:le(["drop-zone",{"drag-over":o.value}]),onDragover:t[0]||(t[0]=M(i=>o.value=!0,["prevent"])),onDragleave:t[1]||(t[1]=M(i=>o.value=!1,["prevent"])),onDrop:M(q,["prevent"]),onClick:t[2]||(t[2]=i=>{var v;return(v=l.value)==null?void 0:v.click()})},[t[11]||(t[11]=n("div",{class:"drop-icon"},"📚",-1)),t[12]||(t[12]=n("div",{class:"drop-text"},[k("拖入 .txt 文件（可多本），或 "),n("span",{class:"link"},"点击选择")],-1)),t[13]||(t[13]=n("div",{class:"drop-hint"},"单个 ≤ 50MB · 自动识别 UTF-8 / GBK / GB18030 / Big5 · 多本一次打包 ZIP",-1)),n("input",{ref_key:"fileInput",ref:l,type:"file",accept:".txt,text/plain",multiple:"",hidden:"",onChange:K},null,544)],34),e.value.length?(x(),b("div",Ee,[(x(!0),b(L,null,j(e.value,i=>(x(),b("div",{key:i.id,class:"book-card"},[n("div",Se,[n("div",Be,[n("div",{class:"book-name",title:i.name},y(i.name),9,ke),n("div",Ue,[n("span",Oe,y(i.sizeLabel),1),n("span",Me,y(i.chapters.length)+" 章",1)])]),n("button",{class:"remove-btn",onClick:v=>W(i.id),disabled:p.value},"移除",8,ze)]),n("div",De,[n("div",Ve,[t[14]||(t[14]=n("label",null,"书名",-1)),w(n("input",{"onUpdate:modelValue":v=>i.title=v,class:"field-input",disabled:p.value},null,8,Fe),[[z,i.title]])]),n("div",Ae,[t[15]||(t[15]=n("label",null,"作者",-1)),w(n("input",{"onUpdate:modelValue":v=>i.author=v,class:"field-input",disabled:p.value},null,8,Ie),[[z,i.author]])]),n("div",Ne,[t[17]||(t[17]=n("label",null,"编码",-1)),w(n("select",{"onUpdate:modelValue":v=>i.encoding=v,class:"field-input",disabled:p.value,onChange:v=>J(i)},[...t[16]||(t[16]=[ie('<option value="utf-8" data-v-8933caf5>UTF-8</option><option value="gbk" data-v-8933caf5>GBK</option><option value="gb18030" data-v-8933caf5>GB18030</option><option value="big5" data-v-8933caf5>Big5</option><option value="utf-16le" data-v-8933caf5>UTF-16LE</option><option value="utf-16be" data-v-8933caf5>UTF-16BE</option>',6)])],40,Re),[[ae,i.encoding]])])]),n("button",{class:"preview-toggle",onClick:v=>Q(i.id)},y(u.value.has(i.id)?"收起章节预览":"预览章节（前 20 章）"),9,Le),u.value.has(i.id)?(x(),b("div",je,[(x(!0),b(L,null,j(i.chapters.slice(0,20),(v,g)=>(x(),b("div",{key:g,class:"chapter-line"},y(g+1)+". "+y(v.title),1))),128)),i.chapters.length>20?(x(),b("div",Ge,"… 共 "+y(i.chapters.length)+" 章",1)):C("",!0)])):C("",!0)]))),128))])):C("",!0),e.value.length?(x(),b("div",Xe,[n("div",Ye,[t[18]||(t[18]=n("div",{class:"option-label"},[k(" 章节匹配正则 "),n("span",{class:"option-tip"},"修改后所有书本实时重算")],-1)),w(n("textarea",{"onUpdate:modelValue":t[3]||(t[3]=i=>r.value=i),class:"regex-input",rows:"2",disabled:p.value,spellcheck:"false"},null,8,He),[[z,r.value]]),t[19]||(t[19]=n("div",{class:"option-tip"},"默认匹配「第X章/回/节/卷/篇/部/集」及序章/番外等；数字支持阿拉伯与汉字数字",-1))]),n("div",Ze,[t[23]||(t[23]=n("div",{class:"option-label"},[k(" 简繁转换 "),n("span",{class:"option-tip"},"基于 OpenCC 字典，浏览器本地完成")],-1)),n("div",qe,[n("label",Ke,[w(n("input",{type:"radio",value:"none","onUpdate:modelValue":t[4]||(t[4]=i=>c.value=i),disabled:p.value},null,8,Je),[[S,c.value]]),t[20]||(t[20]=n("span",null,"不转换",-1))]),n("label",We,[w(n("input",{type:"radio",value:"s2t","onUpdate:modelValue":t[5]||(t[5]=i=>c.value=i),disabled:p.value},null,8,Qe),[[S,c.value]]),t[21]||(t[21]=n("span",null,"简体转繁体",-1))]),n("label",et,[w(n("input",{type:"radio",value:"t2s","onUpdate:modelValue":t[6]||(t[6]=i=>c.value=i),disabled:p.value},null,8,tt),[[S,c.value]]),t[22]||(t[22]=n("span",null,"繁体转简体",-1))])])]),n("div",nt,[n("label",lt,[w(n("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=i=>d.value=i),disabled:p.value},null,8,at),[[oe,d.value]]),t[24]||(t[24]=n("span",{class:"checkmark"},null,-1)),t[25]||(t[25]=n("span",null,"智能合并行内换行（把手机端硬折行粘回段落）",-1))])]),n("div",it,[t[30]||(t[30]=n("div",{class:"option-label"},"封面",-1)),n("div",ot,[n("label",st,[w(n("input",{type:"radio",value:"auto","onUpdate:modelValue":t[8]||(t[8]=i=>f.value=i),disabled:p.value},null,8,rt),[[S,f.value]]),t[26]||(t[26]=n("span",null,"自动生成",-1))]),n("label",dt,[w(n("input",{type:"radio",value:"upload","onUpdate:modelValue":t[9]||(t[9]=i=>f.value=i),disabled:p.value},null,8,ct),[[S,f.value]]),t[27]||(t[27]=n("span",null,"上传图片",-1))]),n("label",ut,[w(n("input",{type:"radio",value:"none","onUpdate:modelValue":t[10]||(t[10]=i=>f.value=i),disabled:p.value},null,8,pt),[[S,f.value]]),t[28]||(t[28]=n("span",null,"不要封面",-1))])]),f.value==="upload"?(x(),b("div",ft,[n("input",{type:"file",accept:"image/jpeg,image/png",onChange:ee},null,32),t[29]||(t[29]=n("span",{class:"option-tip"},"支持 JPG / PNG，覆盖自动封面",-1))])):C("",!0)])])):C("",!0),e.value.length?(x(),b("div",vt,[n("button",{class:"generate-btn",onClick:te,disabled:p.value||!e.value.length},[p.value?(x(),b("span",ht,"↻")):C("",!0),k(" "+y(p.value?h.value:`生成 EPUB（${e.value.length} 本）`),1)],8,mt),n("div",gt,y(e.value.length===1?"单本直接下载 .epub":"多本打包为 .zip 一并下载"),1)])):C("",!0),p.value?(x(),b("div",xt,[n("div",bt,[t[31]||(t[31]=n("div",{class:"spin-lg"},"↻",-1)),n("div",wt,y(h.value),1),t[32]||(t[32]=n("div",{class:"mask-sub"},"全部在浏览器本地完成，文件不会上传",-1))])])):C("",!0)]))}},$t=ne(_t,[["__scopeId","data-v-8933caf5"]]);export{$t as default};
