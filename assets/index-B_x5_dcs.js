import{H as Le,m as i,b as Te,d as Re,z as Ve,c,e as t,F as R,k as O,q as ee,v as te,j as m,t as r,h as Ee,n as K,f as ae,w as se,T as ne,V as je,W as Ke,p as $,A as $e,o as l,s as Me,_ as De}from"./index-Dv2l9fXA.js";import{J as Ge}from"./jszip.min-C0bFdimd.js";import"./jszip.min-B_U0W5ZZ.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const He={class:"lk-page"},Pe={class:"tab-bar"},Oe=["onClick"],Ne={class:"lk-body"},ze={class:"param-card"},Be={class:"core-params"},Ie={class:"field"},Ue=["value"],Je={class:"field"},Fe=["value"],Ze={class:"expire-row"},Ye={class:"chip-group"},Xe=["onClick"],We={class:"prefix-row"},qe={class:"field flex-1"},Qe=["value"],et={class:"field flex-1"},tt=["value"],at={class:"param-card action-card"},st={class:"batch-row"},nt={class:"field flex-1"},ot=["value"],rt=["disabled"],it={class:"result-section"},lt={key:0,class:"stats-bar"},ct={class:"stat-item"},dt={class:"stat-num"},ut={class:"stat-item"},pt={class:"stat-num"},vt={class:"stat-item"},ft={class:"stat-num"},ht=["disabled"],gt={class:"output-card"},mt={class:"output-header"},yt={key:0,class:"output-actions"},xt={class:"output-area"},bt={class:"line-num"},kt=["onClick"],wt={class:"line-expire"},Ct={key:0,class:"truncation-hint"},_t={key:1,class:"empty-hint"},St={class:"param-card action-card"},At={class:"verify-field"},Lt={class:"verify-action-row",style:{"margin-top":"0.85rem"}},Tt={key:0,class:"result-section"},Rt={class:"output-card"},Vt={class:"verify-result-area"},Et={class:"vr-icon"},jt={class:"vr-body"},Kt={class:"vr-status"},$t={class:"vr-reason"},Mt={key:0,class:"vr-meta"},Dt={key:0},Gt={class:"modal-box"},Ht={class:"modal-head"},v="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",N=500,oe="lk_params_v1",Pt=Le({__name:"index",setup(Ot){const b=i(16),A=i(4),L=i(5),C=i(""),d=i(J()),T=i("30d"),p=i(30),u=i([]),M=i("复制全部"),D=i(!1),z=i(""),B=i("ok"),V=i(!1),_=i(!1),E=i("gen"),re=[{key:"gen",label:"生成激活码",icon:"🔑"},{key:"verify",label:"验证激活码",icon:"✅"}],G=i(""),ie=i(d.value),le=i(!1),h=i(null),ce=[{label:"1 天",value:"1d",days:1},{label:"7 天",value:"7d",days:7},{label:"30 天",value:"30d",days:30},{label:"90 天",value:"90d",days:90},{label:"365 天",value:"365d",days:365},{label:"永不过期",value:"never",days:-1},{label:"自定义",value:"custom",days:30}],I=$(()=>u.value.length>N),U=$(()=>I.value?u.value.slice(0,N):u.value),de=$(()=>`${b.value} 字符`),ue=$(()=>p.value===-1?"永久":p.value>=365&&p.value%365===0?`${p.value/365} 年`:`${p.value} 天`);function J(s=8){const e=new Uint8Array(s);return crypto.getRandomValues(e),Array.from(e,a=>v[a%v.length]).join("")}function f(s,e="ok"){z.value=s,B.value=e,D.value=!0,setTimeout(()=>{D.value=!1},2200)}function pe(){const s=C.value.toUpperCase().replace(/[^A-Z0-9]/g,""),e=b.value,a=Date.now(),n=p.value===-1?-1:a+p.value*864e5,o=new Uint8Array(e);crypto.getRandomValues(o);const S=Array.from(o,x=>v[x%v.length]).join(""),g=ve(S,n,d.value),y=`${g}:${d.value}`;let k=0;for(let x=0;x<y.length;x++)k=(k<<5)-k+y.charCodeAt(x)|0;const w=v[Math.abs(k)%v.length],P=g+w,Ae=s?`${s}${P}`:P;let Q="永久有效";if(n!==-1){const x=new Date(n);Q=`${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,"0")}-${String(x.getDate()).padStart(2,"0")}`}return{code:Ae,raw:P,expiresAt:n,expireText:Q}}function ve(s,e,a){const n=s.split(""),o=String(e),S=fe(a+o);for(let g=0;g<Math.min(o.length,n.length);g++){const y=(S+g*7)%n.length,k=(o.charCodeAt(g)+g*3)%v.length,w=v.indexOf(s[y]);w!==-1&&(n[y]=v[(w+k)%v.length])}return n.join("")}function fe(s){let e=0;for(let a=0;a<s.length;a++)e=(e<<5)-e+s.charCodeAt(a)|0;return Math.abs(e)}function F(s,e){const a=e||d.value,n=s.toUpperCase().trim();if(n.length<6)return{valid:!1,reason:"激活码长度不足",expired:!1,expiresAt:0};if(!/^[A-Z2-9]+$/.test(n))return{valid:!1,reason:"激活码包含非法字符",expired:!1,expiresAt:0};const o=n.slice(0,-1),S=n.slice(-1),g=o+":"+a;let y=0;for(let w=0;w<g.length;w++)y=(y<<5)-y+g.charCodeAt(w)|0;const k=v[Math.abs(y)%v.length];return S!==k?{valid:!1,reason:"激活码校验失败，可能被篡改",expired:!1,expiresAt:0}:{valid:!0,reason:"激活码格式正确",expired:!1,expiresAt:0}}function Z(){const s={totalLength:b.value,groupSize:A.value,batchCount:L.value,prefix:C.value,salt:d.value,expirePreset:T.value,expireDays:p.value};try{localStorage.setItem(oe,JSON.stringify(s))}catch{}}function he(){try{const s=localStorage.getItem(oe);if(!s)return!1;const e=JSON.parse(s);return e.totalLength!==void 0&&(b.value=e.totalLength),e.groupSize!==void 0&&(A.value=e.groupSize),e.batchCount!==void 0&&(L.value=e.batchCount),e.prefix!==void 0&&(C.value=e.prefix),e.salt?d.value=e.salt:d.value=J(),e.expirePreset!==void 0&&(T.value=e.expirePreset),e.expireDays!==void 0&&(p.value=e.expireDays),!0}catch{return!1}}async function ge(){he(),await $e(),await Y(),Z()}Te(async()=>{try{const{isPrerender:s}=await Re(async()=>{const{isPrerender:e}=await import("./test-Db6pn0qC.js");return{isPrerender:e}},[]);if(s())return}catch{}ge()}),Ve([b,A,L,C,d,T,p],()=>{Z()},{deep:!0});async function Y(){V.value=!0;const s=Math.max(1,Math.min(L.value,5e3));await new Promise(n=>setTimeout(n,10));const e=[],a=new Set;try{for(let n=0;n<s;n++){const o=pe();a.has(o.raw)?n--:(a.add(o.raw),e.push(o)),n>0&&n%500===0&&await new Promise(S=>setTimeout(S,0))}if(u.value=e,e.length>0){const n=F(e[0].code);n.valid||(console.error("[激活码自检失败]",e[0].code,n.reason),f("⚠️ 激活码自检未通过，请检查参数","err"))}f(`成功生成 ${e.length} 条激活码`,"ok")}catch{f("生成失败，请重试","err")}finally{V.value=!1}}async function me(){if(!u.value.length)return;const s=u.value.map(e=>e.code).join(`
`);try{await navigator.clipboard.writeText(s),M.value="已复制 ✓",f("已复制到剪贴板","ok"),setTimeout(()=>{M.value="复制全部"},2e3)}catch{f("复制失败，请手动选择复制","err")}}async function ye(s){try{await navigator.clipboard.writeText(s),f("已复制: "+s,"ok")}catch{}}function xe(){const s=G.value.trim();if(!s){f("请输入激活码","err");return}const e=ie.value||d.value,a=F(s,e),n=s.toUpperCase().trim();let o=null;/^[A-Z]{2,4}/.test(n)&&n.length>5&&(o=n.slice(0,n.match(/^[A-Z]+/)[0].length)),h.value={valid:a.valid,reason:a.reason,meta:{format:s,length:n.length,prefix:o}},f(a.valid?"激活码有效":"激活码无效",a.valid?"ok":"err")}function be(){const s=u.value.map(e=>`${e.code}	${e.expireText}`).join(`
`);j(s,`激活码列表_${H()}_${Date.now()}.txt`,"text/plain;charset=utf-8"),f("已导出 TXT 文件","ok")}function ke(){const s=u.value.map(a=>({code:a.code,expiresAt:a.expiresAt,expireText:a.expireText,generatedAt:Date.now(),config:{totalLength:b.value,groupSize:A.value,prefix:C.value,salt:d.value,expireDays:p.value}})),e=JSON.stringify(s,null,2);j(e,`激活码数据_${H()}_${Date.now()}.json`,"application/json;charset=utf-8"),f("已导出 JSON 文件","ok")}function H(){return window.location.hostname.replace(/\./g,"")}function j(s,e,a){const o=new Blob(["\uFEFF"+s],{type:a});X(o,e)}function X(s,e){const a=URL.createObjectURL(s),n=document.createElement("a");n.href=a,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}function W(){return`/**
 * 激活码生成器 — 纯前端版本
 * 使用方式：
 *   import { LicenseKeyGenerator } from './license-gen.js'
 *   const gen = new LicenseKeyGenerator({ length: 16, groupSize: 4 })
 *   console.log(gen.generate())
 *
 * 或直接在浏览器中使用全局变量 LicenseKeyGenerator
 */
;(function(global) {
  'use strict'

  const CHARSET = '${v}' // 排除 0/O/1/I/L 等易混淆字符

  /**
   * 激活码生成器类
   * @param {Object} options 配置项
   * @param {number} options.totalLength 激活码总位数（不含前缀），默认 16
   * @param {number} options.groupSize 每组字符数，默认 4
   * @param {string} options.prefix 前缀，默认空
   * @param {string} options.salt 密钥盐值（用于校验），默认随机生成
   * @param {number} options.expireDays 有效期天数，-1 表示永不过期，默认 30
   */
  function LicenseKeyGenerator(options) {
    options = Object.assign({
      totalLength: 16,
      groupSize: 4,
      prefix: '',
      salt: '',
      expireDays: 30
    }, options)

    if (!options.salt) {
      options.salt = this._generateSalt(8)
    }

    this.config = options
  }

  /**
   * 生成单个激活码
   * @returns {{ code: string, raw: string, expiresAt: number, expireText: string }}
   */
  LicenseKeyGenerator.prototype.generate = function() {
    var cfg = this.config
    var pfx = (cfg.prefix || '').toUpperCase().replace(/[^A-Z0-9]/g, '')
    var effectiveLen = cfg.totalLength
    var now = Date.now()
    var expiresAt = cfg.expireDays === -1 ? -1 : now + cfg.expireDays * 86400000

    // 生成随机主体（优先使用安全随机数）
    var rawBody = ''
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      var arr = new Uint8Array(effectiveLen)
      crypto.getRandomValues(arr)
      for (var ri = 0; ri < effectiveLen; ri++) {
        rawBody += CHARSET[arr[ri] % CHARSET.length]
      }
    } else {
      for (var mi = 0; mi < effectiveLen; mi++) {
        rawBody += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length))
      }
    }

    // 先编码过期信息（修改字符）
    var encoded = this._encodeExpire(rawBody, expiresAt, cfg.salt)

    // 校验位仅基于编码后主体 + 盐值
    var combined = encoded + ':' + cfg.salt
    var checksum = 0
    for (var j = 0; j < combined.length; j++) {
      checksum = ((checksum << 5) - checksum + combined.charCodeAt(j)) | 0
    }
    var checkChar = CHARSET[Math.abs(checksum) % CHARSET.length]
    var finalRaw = encoded + checkChar

    // 纯字符，无分隔符
    var code = pfx ? pfx + finalRaw : finalRaw

    var expireText = '永久有效'
    if (expiresAt !== -1) {
      var d = new Date(expiresAt)
      expireText = d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0')
    }

    return { code: code, raw: finalRaw, expiresAt: expiresAt, expireText: expireText }
  }

  /**
   * 批量生成（自动去重）
   * @param {number} count 数量
   * @returns {Array} 激活码数组
   */
  LicenseKeyGenerator.prototype.batchGenerate = function(count) {
    count = Math.max(1, Math.min(count || 1, 10000))
    var results = []
    var seen = {}
    var attempts = 0
    var maxAttempts = count * 10

    while (results.length < count && attempts < maxAttempts) {
      attempts++
      var key = this.generate()
      if (!seen[key.raw]) {
        seen[key.raw] = true
        results.push(key)
      }
    }
    return results
  }

  /** 内部：生成随机盐值 */
  LicenseKeyGenerator.prototype._generateSalt = function(len) {
    var s = ''
    for (var i = 0; i < len; i++) {
      s += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length))
    }
    return s
  }

  /** 内部：编码过期信息到激活码 */
  LicenseKeyGenerator.prototype._encodeExpire = function(body, expiresAt, secret) {
    var arr = body.split('')
    var expStr = String(expiresAt)
    var seed = this._hashString(secret + expStr)
    for (var i = 0; i < Math.min(expStr.length, arr.length); i++) {
      var pos = (seed + i * 7) % arr.length
      var offset = (expStr.charCodeAt(i) + i * 3) % CHARSET.length
      var origIdx = CHARSET.indexOf(body[pos])
      if (origIdx !== -1) {
        arr[pos] = CHARSET[(origIdx + offset) % CHARSET.length]
      }
    }
    return arr.join('')
  }

  /** 内部：字符串哈希 */
  LicenseKeyGenerator.prototype._hashString = function(str) {
    var h = 0
    for (var i = 0; i < str.length; i++) {
      h = ((h << 5) - h + str.charCodeAt(i)) | 0
    }
    return Math.abs(h)
  }

  // 导出
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = LicenseKeyGenerator
  } else {
    global.LicenseKeyGenerator = LicenseKeyGenerator
  }
})(typeof window !== 'undefined' ? window : this)
`}function q(){return`/**
 * 激活码验证器 — 纯前端版本
 * 使用方式：
 *   import { LicenseKeyVerifier } from './license-verify.js'
 *   const verifier = new LicenseKeyVerifier({ salt: 'your-salt-here' })
 *   const result = verifier.verify('ABCDEFGHJKLMNP23')
 *   console.log(result.valid, result.reason)
 *
 * 或在浏览器中使用全局变量 LicenseKeyVerifier
 *
 * ⚠️ 注意：
 * 完整的过期时间验证需要后端配合。此模块提供格式校验和校验位验证，
 * 可以检测激活码是否被篡改或伪造。
 */
;(function(global) {
  'use strict'

  const CHARSET = '${v}'

  /**
   * 激活码验证器类
   * @param {Object} options 配置项
   * @param {string} options.salt 密钥盐值（必须与生成时一致）
   */
  function LicenseKeyVerifier(options) {
    if (!options || !options.salt) {
      throw new Error('LicenseKeyVerifier: 必须指定 salt 密钥盐值')
    }
    this.config = { salt: options.salt }
  }

  /**
   * 验证激活码
   * @param {string} code 待验证的激活码
   * @returns {{ valid: boolean, reason: string, expired: boolean, expiresAt: number }}
   */
  LicenseKeyVerifier.prototype.verify = function(code) {
    var s = this.config.salt
    var clean = (code || '').toString().toUpperCase().trim()

    // 1. 长度检查
    if (clean.length < 6) {
      return { valid: false, reason: '激活码长度不足', expired: false, expiresAt: 0 }
    }

    // 2. 字符集检查（排除易混淆字符后的合法集）
    if (!/^[A-Z2-9]+$/.test(clean)) {
      return { valid: false, reason: '激活码包含非法字符（只允许 A-Z 和 2-9）', expired: false, expiresAt: 0 }
    }

    // 3. 校验位验证
    var body = clean.slice(0, -1)
    var checkChar = clean.slice(-1)
    var combined = body + ':' + s
    var checksum = 0
    for (var i = 0; i < combined.length; i++) {
      checksum = ((checksum << 5) - checksum + combined.charCodeAt(i)) | 0
    }
    var expectedCheck = CHARSET[Math.abs(checksum) % CHARSET.length]

    if (checkChar !== expectedCheck) {
      return { valid: false, reason: '激活码校验失败，可能已被篡改或伪造', expired: false, expiresAt: 0 }
    }

    // 通过基本验证
    return { valid: true, reason: '激活码格式正确且未被篡改', expired: false, expiresAt: 0 }
  }

  /**
   * 快速验证（仅检查格式和校验位，不输出详细信息）
   * @param {string} code 激活码
   * @returns {boolean}
   */
  LicenseKeyVerifier.prototype.isValid = function(code) {
    return this.verify(code).valid
  }

  /**
   * 从激活码提取元数据（如果有的话）
   * @param {string} code 激活码
   * @returns {{ prefix: string|null, groups: string[], length: number }}
   */
  LicenseKeyVerifier.prototype.parseMeta = function(code) {
    var clean = (code || '').toString().toUpperCase().trim()

    // 前缀判断
    var prefix = null
    var m = clean.match(/^[A-Z]{2,4}/)
    if (m && clean.length > 5) {
      prefix = m[0]
    }

    return {
      prefix: prefix,
      body: prefix ? clean.slice(prefix.length) : clean,
      length: clean.length,
      hasPrefix: !!prefix
    }
  }

  // 导出
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = LicenseKeyVerifier
  } else {
    global.LicenseKeyVerifier = LicenseKeyVerifier
  }
})(typeof window !== 'undefined' ? window : this)
`}function we(){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>激活码示例页面</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 720px; margin: 40px auto; padding: 20px; background: #ffffff; color: #1a1a1a; }
    h1 { font-size: 1.5rem; margin-bottom: 1rem; }
    pre { background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 16px; overflow-x: auto; font-size: 0.85rem; line-height: 1.6; }
    .result { margin-top: 16px; padding: 12px; background: #fff; border-radius: 8px; border: 1px solid #ddd; }
    .ok { color: #15803d; }
    .err { color: #dc2626; }
    label { font-weight: 600; }
    input[type=text] { padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; width: 300px; font-family: monospace; margin-top: 4px; }
  </style>
</head>
<body>
  <h2>激活码使用示例</h2>

  <p><label>输入激活码：</label><br>
  <input type="text" id="codeInput" value="" placeholder="粘贴激活码..." /></p>
  <button onclick="testVerify()">验证</button>

  <div id="result" class="result" style="display:none;"></div>

  <h2 style="margin-top:32px;">示例代码</h2>
  <pre>// 1. 生成激活码
var gen = new LicenseKeyGenerator({
  totalLength: 16,     // 总位数
  groupSize: 4,        // 每组字数
  prefix: 'PRO',       // 前缀
  salt: '${d.value}',       // 盐值（必须保存！）
  expireDays: 30       // 有效期（天）
});

var key = gen.generate();
console.log(key.code);         // 如 PROABCDEFGHJKLMNP2
console.log(key.expiresAt);    // 过期时间戳
console.log(key.expireText);   // 如 2026-05-12

// 2. 批量生成
var list = gen.batchGenerate(10);
list.forEach(function(k) { console.log(k.code); });

// 3. 验证激活码
var verifier = new LicenseKeyVerifier({ salt: '${d.value}' });
var result = verifier.verify(key.code);
console.log(result.valid);   // true/false
console.log(result.reason);  // 验证原因

// 4. 快速验证
if (verifier.isValid(someCode)) {
  // 激活码有效
}</pre>

  <script src="./license-gen.js"><\/script>
  <script src="./license-verify.js"><\/script>
  <script>
    function testVerify() {
      var code = document.getElementById('codeInput').value;
      var v = new LicenseKeyVerifier({ salt: '${d.value}' });
      var r = v.verify(code);
      var el = document.getElementById('result');
      el.style.display = 'block';
      el.innerHTML = '<strong class="' + (r.valid ? 'ok' : 'err') + '">' +
        (r.valid ? '✓ 有效' : '✗ 无效') + '</strong><br>' +
        '<span>' + r.reason + '</span>';
    }
  <\/script>
</body>
</html>`}function Ce(){j(W(),"license-gen.js","application/javascript;charset=utf-8"),f("已下载 license-gen.js","ok"),_.value=!1}function _e(){j(q(),"license-verify.js","application/javascript;charset=utf-8"),f("已下载 license-verify.js","ok"),_.value=!1}async function Se(){const s=new Ge,e=`激活码工具_${H()}_${Date.now()}`;s.file("license-gen.js",W()),s.file("license-verify.js",q());const a=u.value.map(o=>({code:o.code,expireText:o.expireText}));s.file("激活码数据.json",JSON.stringify(a,null,2)),s.file("示例页面.html",we());const n=await s.generateAsync({type:"blob"});X(n,`${e}.zip`),f("已下载 ZIP 打包文件","ok"),_.value=!1}return(s,e)=>(l(),c("main",He,[e[31]||(e[31]=t("header",{class:"lk-header"},[t("div",null,[t("h1",null,"激活码生成器"),t("p",null,"生成含过期时间的激活码，支持批量生成与验证")])],-1)),t("div",Pe,[(l(),c(R,null,O(re,a=>t("button",{key:a.key,class:K(["tab-btn",{active:E.value===a.key}]),onClick:n=>E.value=a.key},r(a.icon)+" "+r(a.label),11,Oe)),64))]),t("main",Ne,[t("section",ze,[e[15]||(e[15]=t("h2",{class:"card-title"},"参数设置",-1)),t("div",Be,[t("div",Ie,[e[10]||(e[10]=t("label",{for:"totalLen"},"有效位数",-1)),t("input",{id:"totalLen",type:"number",value:b.value,onChange:e[0]||(e[0]=a=>b.value=Number(a.target.value)),min:"8",max:"48",step:"4"},null,40,Ue)]),t("div",Je,[e[11]||(e[11]=t("label",{for:"groupSize"},"每组字数",-1)),t("input",{id:"groupSize",type:"number",value:A.value,onChange:e[1]||(e[1]=a=>A.value=Number(a.target.value)),min:"3",max:"8"},null,40,Fe)])]),t("div",Ze,[e[12]||(e[12]=t("span",{class:"mode-label"},"过期时间",-1)),t("div",Ye,[(l(),c(R,null,O(ce,a=>t("button",{key:a.value,class:K(["chip",{active:T.value===a.value}]),onClick:n=>{T.value=a.value,p.value=a.days}},r(a.label),11,Xe)),64)),T.value==="custom"?ee((l(),c("input",{key:0,type:"number","onUpdate:modelValue":e[2]||(e[2]=a=>p.value=a),min:"1",max:"3650",class:"chip-input",placeholder:"天数"},null,512)),[[te,p.value,void 0,{number:!0}]]):m("",!0)])]),t("div",We,[t("div",qe,[e[13]||(e[13]=t("label",{for:"prefix"},"前缀（可选）",-1)),t("input",{id:"prefix",type:"text",value:C.value,onChange:e[3]||(e[3]=a=>C.value=a.target.value),placeholder:"如 PRO、VIP",maxlength:"10"},null,40,Qe)]),t("div",et,[e[14]||(e[14]=t("label",{for:"secret"},"密钥盐值",-1)),t("input",{id:"secret",type:"text",value:d.value,onChange:e[4]||(e[4]=a=>d.value=a.target.value),placeholder:"用于校验防伪，默认随机"},null,40,tt)])])]),E.value==="gen"?(l(),c(R,{key:0},[t("section",at,[t("div",st,[t("div",nt,[e[16]||(e[16]=t("label",{for:"batchCount"},"批量数量",-1)),t("input",{id:"batchCount",type:"number",value:L.value,onChange:e[5]||(e[5]=a=>L.value=Number(a.target.value)),min:"1",max:"5000"},null,40,ot)]),t("button",{class:"gen-btn",disabled:V.value,onClick:Y},r(V.value?"生成中...":"生成"),9,rt)])]),t("section",it,[u.value.length?(l(),c("div",lt,[t("div",ct,[t("span",dt,r(u.value.length.toLocaleString()),1),e[17]||(e[17]=t("span",{class:"stat-label"},"条激活码",-1))]),e[21]||(e[21]=t("div",{class:"stat-divider"},null,-1)),t("div",ut,[t("span",pt,r(de.value),1),e[18]||(e[18]=t("span",{class:"stat-label"},"格式预览",-1))]),e[22]||(e[22]=t("div",{class:"stat-divider"},null,-1)),t("div",vt,[t("span",ft,r(ue.value),1),e[19]||(e[19]=t("span",{class:"stat-label"},"有效期",-1))]),t("button",{class:"copy-action",onClick:me,disabled:!u.value.length},[e[20]||(e[20]=t("svg",{viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor","stroke-width":"2"},[t("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),t("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})],-1)),Ee(" "+r(M.value),1)],8,ht)])):m("",!0),t("div",gt,[t("div",mt,[e[23]||(e[23]=t("span",{class:"output-title"},"生成结果",-1)),u.value.length?(l(),c("div",yt,[t("button",{class:"act-btn",onClick:be},"导出 TXT"),t("button",{class:"act-btn",onClick:ke},"导出 JSON"),t("button",{class:"act-btn act-btn-primary",onClick:e[6]||(e[6]=a=>_.value=!0)},"下载逻辑文件")])):m("",!0)]),t("div",xt,[u.value.length?(l(),c(R,{key:0},[(l(!0),c(R,null,O(U.value,(a,n)=>(l(),c("div",{key:n,class:"output-line"},[t("span",bt,r(String(n+1).padStart(String(U.value.length).length,"0")),1),t("code",{onClick:o=>ye(a.code),title:"点击复制"},r(a.code),9,kt),t("span",wt,r(a.expireText),1)]))),128)),I.value?(l(),c("div",Ct," 仅显示前 "+r(N.toLocaleString())+" 条（共 "+r(u.value.length.toLocaleString())+" 条） ",1)):m("",!0)],64)):(l(),c("div",_t," 点击「生成」按钮开始创建激活码 "))])])])],64)):m("",!0),E.value==="verify"?(l(),c(R,{key:1},[t("section",St,[t("div",At,[e[24]||(e[24]=t("label",{for:"verifyCode"},"待验证激活码",-1)),ee(t("textarea",{id:"verifyCode","onUpdate:modelValue":e[7]||(e[7]=a=>G.value=a),rows:"3",placeholder:"粘贴激活码，如 GAUZGGFNWK342S4R3",class:"verify-textarea"},null,512),[[te,G.value,void 0,{trim:!0}]])]),t("div",Lt,[t("button",{class:"gen-btn",style:{background:"var(--ok)",width:"100%"},onClick:xe},r(le.value?"验证中...":"验证激活码"),1)])]),h.value?(l(),c("section",Tt,[t("div",Rt,[e[25]||(e[25]=t("div",{class:"output-header"},[t("span",{class:"output-title"},"验证结果")],-1)),t("div",Vt,[t("div",{class:K(["vr-card",h.value.valid?"vr-ok":"vr-err"])},[t("div",Et,r(h.value.valid?"✓":"✗"),1),t("div",jt,[t("div",Kt,r(h.value.valid?"有效":"无效"),1),t("div",$t,r(h.value.reason),1)])],2),h.value.meta?(l(),c("div",Mt,[t("span",null,"激活码: "+r(h.value.meta.format),1),t("span",null,"长度: "+r(h.value.meta.length)+" 字符",1),h.value.meta.prefix?(l(),c("span",Dt,"前缀: "+r(h.value.meta.prefix),1)):m("",!0)])):m("",!0)])])])):m("",!0)],64)):m("",!0)]),ae(ne,{name:"toast-fade"},{default:se(()=>[D.value?(l(),c("div",{key:0,class:K(["toast",B.value])},r(z.value),3)):m("",!0)]),_:1}),(l(),je(Ke,{to:"body"},[ae(ne,{name:"modal-fade"},{default:se(()=>[_.value?(l(),c("div",{key:0,class:"modal-mask",onClick:e[9]||(e[9]=Me(a=>_.value=!1,["self"]))},[t("div",Gt,[t("div",Ht,[e[26]||(e[26]=t("h3",null,"下载逻辑文件",-1)),t("button",{class:"modal-close",onClick:e[8]||(e[8]=a=>_.value=!1)},"×")]),t("div",{class:"modal-body"},[e[30]||(e[30]=t("p",{class:"modal-desc"},"下载独立的 JS 文件，可直接嵌入你的项目中使用。",-1)),t("div",{class:"dl-grid"},[t("button",{class:"dl-card",onClick:Ce},[...e[27]||(e[27]=[t("div",{class:"dl-icon"},"🔑",-1),t("div",{class:"dl-name"},"license-gen.js",-1),t("div",{class:"dl-desc"},"激活码生成逻辑",-1)])]),t("button",{class:"dl-card",onClick:_e},[...e[28]||(e[28]=[t("div",{class:"dl-icon"},"✅",-1),t("div",{class:"dl-name"},"license-verify.js",-1),t("div",{class:"dl-desc"},"激活码验证逻辑",-1)])]),t("button",{class:"dl-card dl-card-wide",onClick:Se},[...e[29]||(e[29]=[t("div",{class:"dl-icon"},"📦",-1),t("div",{class:"dl-name"},"打包下载全部",-1),t("div",{class:"dl-desc"},"包含生成、验证逻辑 + 示例代码 + 当前结果",-1)])])])])])])):m("",!0)]),_:1})]))]))}}),Ut=De(Pt,[["__scopeId","data-v-98f144ee"]]);export{Ut as default};
