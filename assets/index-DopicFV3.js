const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OrbitControls-H9dYXL0l.js","assets/three.module-d0yTp6cH.js","assets/EffectComposer-BtcwDOBt.js","assets/Pass-BI6lC_e6.js","assets/RenderPass-DZy3X8JD.js","assets/OutputPass-CfAWFLld.js"])))=>i.map(i=>d[i]);
import{_ as _t,z as Lt,b as Mt,H as Ct,o as W,c as U,d as nt,m as v,F as mt,e as n,f as bt,t as at,k as Bt,n as vt,q as Dt,v as It,N as Ot,p as pt,A as Gt}from"./index-RqURbui3.js";import q from"./index-CJJ-WHAU.js";const Nt=500,Rt={__name:"Hourglass",props:{duration:{type:Number,default:60,validator:X=>X>0},particleCount:{type:Number,default:5e3,validator:X=>X>=1e3&&X<=2e4},width:{type:Number,default:400},height:{type:Number,default:700},sandColorPrimary:{type:String,default:"#FFD700"},sandColorSecondary:{type:String,default:"#FFA500"},autoRotate:{type:Boolean,default:!1}},emits:["complete","tick","flip"],setup(X,{expose:lt,emit:ut}){const b=X,ot=ut,k=v(null);let u=null,C=null,m=null,L=null,P=null,_=null,h=null,B=null,I=null,F=null,d=null,O=null,G=null,K=null,j=null,H=null,A=null;const g=v(0),M=v(!1),x=v(1);let E=0,tt=0,z=null,J=!1,y=0,et=0;function Q(t){if(t>=0)return t<=.25?.04+(.1-.04)*(t/.25):t<=.65?.1+(.22-.1)*((t-.25)/.4):t<=1.2?.22+(.32-.22)*((t-.65)/.55):t<=1.8?.32+(.37-.32)*((t-1.2)/.6):t<=2.4?.37+(.38-.37)*((t-1.8)/.6):t<=2.78?.38+(.39-.38)*((t-2.4)/.38):t<=2.88?.39+(.42-.39)*((t-2.78)/.1):.42+(0-.42)*((t-2.88)/.12);const e=-t;return e<=.2?.04+(.12-.04)*(e/.2):e<=.6?.12+(.28-.12)*((e-.2)/.4):e<=1.2?.28+(.37-.28)*((e-.6)/.6):e<=1.8?.37+(.39-.37)*((e-1.2)/.6):e<=2.4?.39+(.38-.39)*((e-1.8)/.6):e<=2.78?.38+(.4-.38)*((e-2.4)/.38):e<=2.88?.4+(.43-.4)*((e-2.78)/.1):.43+(0-.43)*((e-2.88)/.12)}async function ct(){const{isPrerender:t}=await nt(async()=>{const{isPrerender:i}=await import("./test-Db6pn0qC.js");return{isPrerender:i}},[]);if(t())return;const e=await nt(()=>import("./three.module-d0yTp6cH.js"),[]),{OrbitControls:a}=await nt(async()=>{const{OrbitControls:i}=await import("./OrbitControls-H9dYXL0l.js");return{OrbitControls:i}},__vite__mapDeps([0,1])),{EffectComposer:r}=await nt(async()=>{const{EffectComposer:i}=await import("./EffectComposer-BtcwDOBt.js");return{EffectComposer:i}},__vite__mapDeps([2,1,3])),{RenderPass:p}=await nt(async()=>{const{RenderPass:i}=await import("./RenderPass-DZy3X8JD.js");return{RenderPass:i}},__vite__mapDeps([4,1,3])),{OutputPass:f}=await nt(async()=>{const{OutputPass:i}=await import("./OutputPass-CfAWFLld.js");return{OutputPass:i}},__vite__mapDeps([5,1,3])),w=k.value;if(!w)return;const c=b.width,$=b.height;u=new e.Scene,u.background=new e.Color(328976),C=new e.PerspectiveCamera(50,c/$,.1,1e3),C.position.set(0,.5,8),m=new e.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance"}),m.setSize(c,$),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.toneMapping=e.ACESFilmicToneMapping,m.toneMappingExposure=1.4,m.outputColorSpace=e.SRGBColorSpace,w.appendChild(m.domElement),P=new a(C,m.domElement),P.enableDamping=!0,P.dampingFactor=.05,P.minDistance=4,P.maxDistance=15,P.maxPolarAngle=Math.PI*.85,P.enablePan=!1,it(e),T(e),ft(e),s(e),st(e),Pt(e,r,p,f),g.value=b.duration*1e3,x.value=1,et=performance.now(),ht()}function it(t){const e=new t.AmbientLight(2241348,1);u.add(e);const a=new t.DirectionalLight(16777215,2);a.position.set(5,10,8),u.add(a);const r=new t.PointLight(16755251,1.5,20);r.position.set(3,-1,5),u.add(r);const p=new t.PointLight(4482815,1.2,18);p.position.set(-3,3,-4),u.add(p);const f=new t.PointLight(16766720,1,15);f.position.set(0,-4,3),u.add(f);const w=new t.PointLight(16729224,.8,12);w.position.set(-4,2,-3),u.add(w);const c=new t.SpotLight(16777198,1,20,Math.PI/5,.3,1);c.position.set(0,10,6),c.target.position.set(0,0,0),u.add(c),u.add(c.target)}function T(t){const a=new t.BufferGeometry,r=new Float32Array(2e3*3),p=new Float32Array(2e3),f=new Float32Array(2e3);for(let c=0;c<2e3;c++)r[c*3]=(Math.random()-.5)*60,r[c*3+1]=(Math.random()-.5)*60,r[c*3+2]=(Math.random()-.5)*60-20,p[c]=Math.random()*2+.5,f[c]=Math.random()*.8+.2;a.setAttribute("position",new t.BufferAttribute(r,3)),a.setAttribute("aSize",new t.BufferAttribute(p,1)),a.setAttribute("aAlpha",new t.BufferAttribute(f,1));const w=new t.ShaderMaterial({uniforms:{uTime:{value:0}},vertexShader:`
      attribute float aSize;
      attribute float aAlpha;
      varying float vAlpha;
      uniform float uTime;
      void main() {
        vAlpha = aAlpha * (0.25 + 0.2 * sin(uTime * 2.0 + position.x * 0.1));
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (200.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying float vAlpha;
      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        if (dist > 0.5) discard;
        float alpha = (1.0 - dist * 2.0) * vAlpha;
        gl_FragColor = vec4(0.9, 0.95, 1.0, alpha);
      }
    `,transparent:!0,depthWrite:!1});O=new t.Points(a,w),u.add(O)}function ft(t){h=new t.Group,u.add(h);const e=[new t.Vector2(0,-3),new t.Vector2(.43,-2.88),new t.Vector2(.4,-2.78),new t.Vector2(.38,-2.4),new t.Vector2(.39,-1.8),new t.Vector2(.37,-1.2),new t.Vector2(.28,-.6),new t.Vector2(.12,-.2),new t.Vector2(.04,0),new t.Vector2(.1,.25),new t.Vector2(.22,.65),new t.Vector2(.32,1.2),new t.Vector2(.37,1.8),new t.Vector2(.38,2.4),new t.Vector2(.39,2.78),new t.Vector2(.42,2.88),new t.Vector2(0,3)],a=new t.LatheGeometry(e,64),r=new t.MeshPhysicalMaterial({transmission:.96,roughness:.1,ior:1.3,thickness:.3,color:15266047,transparent:!0,opacity:.12,side:t.DoubleSide,reflectivity:.2,clearcoat:.1,clearcoatRoughness:.2,sheen:.05,sheenRoughness:.4,sheenColor:16766720,envMapIntensity:.3});B=new t.Mesh(a,r),B.renderOrder=0,h.add(B);const p=new t.LatheGeometry(e,64),f=new t.LineBasicMaterial({color:16763972,transparent:!0,opacity:0});I=new t.LineSegments(new t.WireframeGeometry(p),f),h.add(I)}function s(t){const e=b.particleCount,a=new t.BufferGeometry;G=new Float32Array(e*3),K=new Float32Array(e*3),j=new Float32Array(e),H=new Float32Array(e),A=new Float32Array(e);for(let w=0;w<e;w++)o(w,e);a.setAttribute("position",new t.BufferAttribute(G,3)),a.setAttribute("aColor",new t.BufferAttribute(K,3)),a.setAttribute("aSize",new t.BufferAttribute(j,1)),a.setAttribute("aPhase",new t.BufferAttribute(H,1)),a.setAttribute("aRandom",new t.BufferAttribute(A,1));const r=`
    uniform float uTime;
    uniform float uPointSize;
    attribute float aSize;
    attribute float aPhase;
    attribute float aRandom;
    attribute vec3 aColor;
    varying float vAlpha;
    varying float vRandom;
    varying vec3 vColor;

    void main() {
      vec3 pos = position;
      float timeOffset = uTime * 2.5 + aRandom * 6.28;
      pos.x += sin(timeOffset) * 0.025;
      pos.z += cos(timeOffset * 1.4) * 0.025;
      pos.y += sin(timeOffset * 0.8) * 0.015;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = aSize * uPointSize * (500.0 / -mvPosition.z);
      gl_PointSize = clamp(gl_PointSize, 2.0, 150.0);

      gl_Position = projectionMatrix * mvPosition;
      vAlpha = 0.75 + sin(uTime * 5.0 + aRandom * 15.0) * 0.25;
      vRandom = aRandom;
      vColor = aColor;
    }
  `,p=`
    varying float vAlpha;
    varying float vRandom;
    varying vec3 vColor;

    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);

      if (dist > 0.5) discard;

      float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
      float core = 1.0 - smoothstep(0.0, 0.2, dist);
      alpha = mix(alpha, 1.0, core * 0.75);

      vec3 color = vColor;
      color += vec3(core * 0.7);

      float sparkle = sin(vRandom * 100.0 + dot(gl_PointCoord, vec2(12.9898, 78.233))) * 0.5 + 0.5;
      color += vec3(sparkle * 0.15 * core);

      alpha *= vAlpha;

      gl_FragColor = vec4(color, alpha);
    }
  `,f=new t.ShaderMaterial({vertexShader:r,fragmentShader:p,uniforms:{uTime:{value:0},uPointSize:{value:2}},transparent:!0,blending:t.AdditiveBlending,depthWrite:!1});d=new t.Points(a,f),d.renderOrder=1,h.add(d)}function o(t,e){const a=t*3;A[t]=Math.random(),j[t]=.18+Math.random()*.22,H[t]=Math.random();const p=.3+t/e*2.5,f=Q(p),w=Math.sqrt(Math.random())*f*.85,c=Math.random()*Math.PI*2;G[a]=Math.cos(c)*w,G[a+1]=p,G[a+2]=Math.sin(c)*w;const $=Math.random();K[a]=1,K[a+1]=.75+$*.18,K[a+2]=.05+$*.15}function S(t){if(!d)return;const e=d.geometry.attributes.position.array,a=d.geometry.attributes.aColor.array,r=e.length/3;if(!M.value||x.value>=.995){for(let i=0;i<r;i++){const l=i*3,V=.3+i/r*2.5,N=Q(V),R=Math.sqrt(A[i])*N*.85,Z=A[i]*6.28+y*.15+i*.003;e[l]=Math.cos(Z)*R,e[l+1]=V+Math.sin(y*.8+A[i]*10)*.03,e[l+2]=Math.sin(Z)*R;const Y=A[i];a[l]=1,a[l+1]=.75+Y*.18,a[l+2]=.05+Y*.15}d.geometry.attributes.position.needsUpdate=!0,d.geometry.attributes.aColor.needsUpdate=!0;return}const p=x.value,f=Math.floor(r*p*.92),w=Math.floor(r*.08),c=M.value?Math.min(w,Nt):0,$=r-f-c;for(let i=0;i<r;i++){const l=i*3;if(i<f&&f>0){const D=i/f,V=.3+p*2.5,N=.3+D*(V-.3),R=Q(N)*.85,Z=y*.8+i*.02+A[i]*6.28,Y=Math.sqrt(D)*R;e[l]=Math.cos(Z)*Y,e[l+1]=N+Math.sin(y*1.2+i*.08)*.04,e[l+2]=Math.sin(Z)*Y;const rt=A[i];a[l]=1,a[l+1]=.75+rt*.18,a[l+2]=.05+rt*.15}else if(i<f+c&&c>0){const D=i-f,V=(D/c+y*1.2)%1;e[l+1]=.35-V*3.2;const N=y*18+D*1.2,R=.032*(1-V*.6);e[l]=Math.cos(N)*R,e[l+2]=Math.sin(N)*R,a[l]=1,a[l+1]=.82+Math.sin(y*7+D)*.12,a[l+2]=0}else{const D=i-f-c;if($>0&&D<$){const V=D/$,N=Math.sin(V*Math.PI)*.45,R=-.4-V*2.2,Z=Q(R-N)*.88,Y=Math.sqrt(V)*Z,rt=A[i]*6.28+y*.06+D*.004;e[l]=Math.cos(rt)*Y,e[l+1]=R-N,e[l+2]=Math.sin(rt)*Y;const wt=1-V*.15;a[l]=wt,a[l+1]=wt*.78,a[l+2]=0}}}d.geometry.attributes.position.needsUpdate=!0,d.geometry.attributes.aColor.needsUpdate=!0}function st(t){const e=`
    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewDir = normalize(-mvPosition.xyz);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,a=`
    uniform vec3 uGlowColor;
    uniform float uIntensity;
    uniform float uTime;

    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
      float fresnel = 1.0 - dot(vViewDir, vNormal);
      fresnel = pow(fresnel, 2.5);
      float pulse = 0.7 + 0.3 * sin(uTime * 2.0);
      vec3 color = uGlowColor * fresnel * uIntensity * pulse;
      gl_FragColor = vec4(color, fresnel * 0.5);
    }
  `,r=B.geometry,p=new t.ShaderMaterial({vertexShader:e,fragmentShader:a,uniforms:{uGlowColor:{value:new t.Color(16766720)},uIntensity:{value:.25},uTime:{value:0}},transparent:!0,blending:t.AdditiveBlending,side:t.BackSide,depthWrite:!1});F=new t.Mesh(r,p),h.add(F)}function Pt(t,e,a,r){L=new e(m);const p=new a(u,C);L.addPass(p);const f=new r;L.addPass(f)}function ht(){_=requestAnimationFrame(ht);const t=performance.now();let e=(t-et)/1e3;et=t,e=Math.min(Math.max(e,0),.1),Number.isFinite(e)||(e=.016),y+=e,M.value&&!J&&At(e),S(),d&&d.material.uniforms&&(d.material.uniforms.uTime.value=y),F&&F.material.uniforms&&(F.material.uniforms.uTime.value=y),O&&O.material.uniforms&&(O.material.uniforms.uTime.value=y),b.autoRotate&&h&&(h.rotation.y+=.004),J&&z&&St(),P&&P.update(),L?L.render():m&&u&&C&&m.render(u,C)}function At(t){g.value=Math.max(0,g.value-t*1e3),x.value=g.value/(b.duration*1e3),ot("tick",g.value),g.value<=0&&(g.value=0,x.value=0,M.value=!1,ot("complete"),xt())}function xt(){J=!0,z={startTime:performance.now(),duration:2500,startRotationX:h?h.rotation.x:0,targetRotationX:Math.PI}}function St(){if(!z||!h)return;const t=performance.now()-z.startTime,e=Math.min(t/z.duration,1),a=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;h.rotation.x=z.startRotationX+(z.targetRotationX-z.startRotationX)*a,e>=1&&(J=!1,z=null,dt(),ot("flip"))}function dt(){if(!d)return;const t=G.length/3;for(let e=0;e<t;e++)o(e,t);d.geometry.attributes.position.needsUpdate=!0,d.geometry.attributes.aColor.needsUpdate=!0,x.value=1,g.value=b.duration*1e3}function kt(){_&&(cancelAnimationFrame(_),_=null),u&&u.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),m&&(m.dispose(),k.value&&m.domElement&&k.value.removeChild(m.domElement)),u=null,C=null,m=null,L=null,P=null,h=null,B=null,I=null,F=null,d=null,O=null}function Ft(){M.value||(M.value=!0,g.value<=0&&(g.value=b.duration*1e3,x.value=1,dt()),E=performance.now()-tt)}function gt(){M.value&&(M.value=!1,tt=performance.now()-E)}function zt(){M.value=!1,g.value=b.duration*1e3,x.value=1,tt=0,E=0,dt()}function Vt(t){t>0&&(gt(),g.value=t*1e3,x.value=1,dt())}return Lt([()=>b.width,()=>b.height],async([t,e])=>{m&&C&&(C.aspect=t/e,C.updateProjectionMatrix(),m.setSize(t,e),L&&L.setSize(t,e))}),Mt(async()=>{try{await ct()}catch(t){console.error("[沙漏] 初始化失败:",t)}}),Ct(()=>{kt()}),lt({start:Ft,pause:gt,reset:zt,setDuration:Vt,getRemainingTime:()=>g.value,getProgress:()=>x.value,getIsRunning:()=>M.value}),(t,e)=>(W(),U("div",{ref_key:"containerRef",ref:k,class:"hourglass-container"},null,512))}},yt=_t(Rt,[["__scopeId","data-v-55ea359f"]]),Wt={class:"right-panel"},Ut={class:"time-display"},$t={class:"time-ring"},qt={class:"time-ring-svg",viewBox:"0 0 120 120"},Yt=["stroke-dasharray"],Xt={class:"time-inner"},Kt={class:"time-value"},Jt={class:"preset-section"},Qt={class:"preset-buttons"},Tt=["onClick"],Zt={class:"custom-time-section"},jt={class:"time-input-row"},Ht={class:"action-buttons"},Et={class:"status-bar"},te={class:"status-item"},ee={class:"status-text"},ne={class:"progress-text"},ae={class:"progress-value"},oe={class:"fullscreen-controls"},ie={class:"fs-time-display"},se={class:"fs-time"},re={class:"fs-btns"},le={__name:"index",setup(X){const lt=v(null),ut=v(null),b=v(null),ot=v(null),k=v(60),u=v(1),C=v(5e3),m=v("#FFD700"),L=v("#FFA500"),P=v(!1),_=v(!1),h=v(6e4),B=v(1),I=v(!1),F=v(400),d=v(700),O=v(400),G=v(700),K=[{label:"1分钟",value:60},{label:"3分钟",value:180},{label:"5分钟",value:300},{label:"10分钟",value:600},{label:"25分钟",value:1500}],j=pt(()=>{const s=Math.ceil(h.value/1e3),o=Math.floor(s/3600),S=Math.floor(s%3600/60),st=s%60;return o>0?`${String(o).padStart(2,"0")}:${String(S).padStart(2,"0")}:${String(st).padStart(2,"0")}`:`${String(S).padStart(2,"0")}:${String(st).padStart(2,"0")}`}),H=pt(()=>_.value?"running":h.value>0?"paused":"completed"),A=pt(()=>_.value?"运行中":h.value>0?"已暂停":"已完成");function g(){return I.value?ut.value:lt.value}function M(){const s=g();s&&(s.start(),_.value=!0)}function x(){const s=g();s&&(s.pause(),_.value=!1)}function E(){const s=g();s&&(s.reset(),_.value=!1,h.value=k.value*1e3,B.value=1)}function tt(s){k.value=s,u.value=Math.round(s/60*10)/10;const o=g();o&&(o.setDuration(s),h.value=s*1e3,B.value=1),_.value||Gt(()=>M())}function z(){u.value>0&&tt(Math.round(u.value*60))}function J(){if(!q.isEnabled){alert("您的浏览器不支持全屏功能");return}if(q.isFullscreen)q.exit();else{const s=document.querySelector(".hourglass-page");q.request(s)}}function y(){I.value=!!q.isFullscreen,I.value?(O.value=window.innerWidth,G.value=window.innerHeight-80):it()}function et(){_.value=!1}function Q(s){h.value=s,k.value>0&&(B.value=Math.max(0,s/(k.value*1e3)))}function ct(){}function it(){if(b.value){const s=b.value.getBoundingClientRect(),o=s.width,S=s.height;F.value=Math.max(200,o),d.value=Math.max(300,S)}else window.innerWidth<768?(F.value=Math.min(window.innerWidth-32,400),d.value=F.value*1.75):(F.value=400,d.value=700)}let T=null;function ft(){T&&clearTimeout(T),T=setTimeout(()=>{I.value?(O.value=window.innerWidth,G.value=window.innerHeight-80):it()},200)}return Mt(()=>{q.isEnabled&&q.on("change",y),it(),window.addEventListener("resize",ft)}),Ct(()=>{q.isEnabled&&q.off("change",y),window.removeEventListener("resize",ft),T&&clearTimeout(T)}),(s,o)=>(W(),U("div",{class:vt(["hourglass-page",{fullscreen:I.value}])},[I.value?(W(),U(mt,{key:1},[n("div",{class:"fullscreen-canvas",ref_key:"fullscreenRef",ref:ot},[bt(yt,{ref_key:"hourglassRefFs",ref:ut,duration:k.value,"particle-count":C.value,width:O.value,height:G.value,"sand-color-primary":m.value,"sand-color-secondary":L.value,"auto-rotate":P.value,onComplete:et,onTick:Q,onFlip:ct},null,8,["duration","particle-count","width","height","sand-color-primary","sand-color-secondary","auto-rotate"])],512),n("div",oe,[n("div",ie,[n("span",se,at(j.value),1),n("span",{class:vt(["fs-status",H.value])},at(A.value),3)]),n("div",re,[_.value?(W(),U("button",{key:1,class:"fs-btn",onClick:x},"暂停")):(W(),U("button",{key:0,class:"fs-btn",onClick:M},"开始")),n("button",{class:"fs-btn",onClick:E},"重置"),n("button",{class:"fs-btn exit-btn",onClick:J},"退出全屏")])])],64)):(W(),U(mt,{key:0},[n("div",{class:"left-panel",ref_key:"leftPanelRef",ref:b},[bt(yt,{ref_key:"hourglassRef",ref:lt,duration:k.value,"particle-count":C.value,width:F.value,height:d.value,"sand-color-primary":m.value,"sand-color-secondary":L.value,"auto-rotate":P.value,onComplete:et,onTick:Q,onFlip:ct},null,8,["duration","particle-count","width","height","sand-color-primary","sand-color-secondary","auto-rotate"])],512),n("div",Wt,[o[10]||(o[10]=n("div",{class:"panel-header"},[n("h1",{class:"panel-title"},"沙漏计时器"),n("p",{class:"panel-subtitle"},"沉浸在流动的时光中")],-1)),n("div",Ut,[n("div",$t,[(W(),U("svg",qt,[o[1]||(o[1]=n("circle",{class:"time-ring-bg",cx:"60",cy:"60",r:"54"},null,-1)),n("circle",{class:"time-ring-progress",cx:"60",cy:"60",r:"54","stroke-dasharray":`${B.value*339.292} ${339.292}`},null,8,Yt)])),n("div",Xt,[n("span",Kt,at(j.value),1)])])]),n("div",Jt,[o[2]||(o[2]=n("span",{class:"section-label"},"快速设定",-1)),n("div",Qt,[(W(),U(mt,null,Bt(K,S=>n("button",{key:S.value,class:vt(["preset-btn",{active:k.value===S.value}]),onClick:st=>tt(S.value)},at(S.label),11,Tt)),64))])]),n("div",Zt,[o[4]||(o[4]=n("span",{class:"section-label"},"自定义时间",-1)),n("div",jt,[Dt(n("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=S=>u.value=S),class:"time-input",placeholder:"输入",min:"1",max:"120",onKeyup:Ot(z,["enter"])},null,544),[[It,u.value,void 0,{number:!0}]]),o[3]||(o[3]=n("span",{class:"input-unit"},"分钟",-1)),n("button",{class:"apply-btn",onClick:z},"设置")])]),n("div",Ht,[_.value?(W(),U("button",{key:1,class:"action-btn pause-btn",onClick:x},[...o[6]||(o[6]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})])],-1),n("span",null,"暂停",-1)])])):(W(),U("button",{key:0,class:"action-btn start-btn",onClick:M},[...o[5]||(o[5]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M8 5v14l11-7z"})])],-1),n("span",null,"开始",-1)])])),n("button",{class:"action-btn reset-btn",onClick:E},[...o[7]||(o[7]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})])],-1),n("span",null,"重置",-1)])]),n("button",{class:"action-btn fullscreen-btn",onClick:J},[...o[8]||(o[8]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})])],-1),n("span",null,"全屏",-1)])])]),n("div",Et,[n("div",te,[n("span",{class:vt(["status-dot",H.value])},null,2),n("span",ee,at(A.value),1)]),n("div",ne,[o[9]||(o[9]=n("span",null,"进度",-1)),n("span",ae,at(Math.round(B.value*100))+"%",1)])])])],64))],2))}},fe=_t(le,[["__scopeId","data-v-0f842458"]]);export{fe as default};
