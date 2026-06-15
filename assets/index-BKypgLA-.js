const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OrbitControls-H9dYXL0l.js","assets/three.module-d0yTp6cH.js","assets/EffectComposer-BtcwDOBt.js","assets/Pass-BI6lC_e6.js","assets/RenderPass-DZy3X8JD.js","assets/OutputPass-CfAWFLld.js"])))=>i.map(i=>d[i]);
import{_ as _t,l as Lt,e as Mt,H as Ct,o as R,c as W,f as tt,j as d,I as Bt,O as et,F as mt,b as n,h as yt,t as nt,p as Dt,y as It,A as Ot,N as Gt,q as vt,v as pt,s as Nt}from"./index-CAvK_Cdy.js";import{u as Rt}from"./useFullscreen-B0qLfKpy.js";const Wt=500,Ut={__name:"Hourglass",props:{duration:{type:Number,default:60,validator:K=>K>0},particleCount:{type:Number,default:5e3,validator:K=>K>=1e3&&K<=2e4},width:{type:Number,default:400},height:{type:Number,default:700},sandColorPrimary:{type:String,default:"#FFD700"},sandColorSecondary:{type:String,default:"#FFA500"},autoRotate:{type:Boolean,default:!1}},emits:["complete","tick","flip"],setup(K,{expose:lt,emit:ut}){const b=K,at=ut,k=d(null);let u=null,P=null,v=null,F=null,A=null,C=null,h=null,L=null,U=null,B=null,m=null,I=null,$=null,O=null,Y=null,ot=null,x=null;const w=d(0),S=d(!1),_=d(1);let j=0,H=0,z=null,J=!1,M=0,E=0;function Q(t){if(t>=0)return t<=.25?.04+(.1-.04)*(t/.25):t<=.65?.1+(.22-.1)*((t-.25)/.4):t<=1.2?.22+(.32-.22)*((t-.65)/.55):t<=1.8?.32+(.37-.32)*((t-1.2)/.6):t<=2.4?.37+(.38-.37)*((t-1.8)/.6):t<=2.78?.38+(.39-.38)*((t-2.4)/.38):t<=2.88?.39+(.42-.39)*((t-2.78)/.1):.42+(0-.42)*((t-2.88)/.12);const e=-t;return e<=.2?.04+(.12-.04)*(e/.2):e<=.6?.12+(.28-.12)*((e-.2)/.4):e<=1.2?.28+(.37-.28)*((e-.6)/.6):e<=1.8?.37+(.39-.37)*((e-1.2)/.6):e<=2.4?.39+(.38-.39)*((e-1.8)/.6):e<=2.78?.38+(.4-.38)*((e-2.4)/.38):e<=2.88?.4+(.43-.4)*((e-2.78)/.1):.43+(0-.43)*((e-2.88)/.12)}async function ct(){const{isPrerender:t}=await tt(async()=>{const{isPrerender:s}=await import("./test-Db6pn0qC.js");return{isPrerender:s}},[]);if(t())return;const e=await tt(()=>import("./three.module-d0yTp6cH.js"),[]),{OrbitControls:a}=await tt(async()=>{const{OrbitControls:s}=await import("./OrbitControls-H9dYXL0l.js");return{OrbitControls:s}},__vite__mapDeps([0,1])),{EffectComposer:r}=await tt(async()=>{const{EffectComposer:s}=await import("./EffectComposer-BtcwDOBt.js");return{EffectComposer:s}},__vite__mapDeps([2,1,3])),{RenderPass:p}=await tt(async()=>{const{RenderPass:s}=await import("./RenderPass-DZy3X8JD.js");return{RenderPass:s}},__vite__mapDeps([4,1,3])),{OutputPass:f}=await tt(async()=>{const{OutputPass:s}=await import("./OutputPass-CfAWFLld.js");return{OutputPass:s}},__vite__mapDeps([5,1,3])),y=k.value;if(!y)return;const c=b.width,q=b.height;u=new e.Scene,u.background=new e.Color(328976),P=new e.PerspectiveCamera(50,c/q,.1,1e3),P.position.set(0,.5,8),v=new e.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance"}),v.setSize(c,q),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.toneMapping=e.ACESFilmicToneMapping,v.toneMappingExposure=1.4,v.outputColorSpace=e.SRGBColorSpace,y.appendChild(v.domElement),A=new a(P,v.domElement),A.enableDamping=!0,A.dampingFactor=.05,A.minDistance=4,A.maxDistance=15,A.maxPolarAngle=Math.PI*.85,A.enablePan=!1,st(e),Z(e),ft(e),i(e),it(e),Pt(e,r,p,f),w.value=b.duration*1e3,_.value=1,E=performance.now(),ht()}function st(t){const e=new t.AmbientLight(2241348,1);u.add(e);const a=new t.DirectionalLight(16777215,2);a.position.set(5,10,8),u.add(a);const r=new t.PointLight(16755251,1.5,20);r.position.set(3,-1,5),u.add(r);const p=new t.PointLight(4482815,1.2,18);p.position.set(-3,3,-4),u.add(p);const f=new t.PointLight(16766720,1,15);f.position.set(0,-4,3),u.add(f);const y=new t.PointLight(16729224,.8,12);y.position.set(-4,2,-3),u.add(y);const c=new t.SpotLight(16777198,1,20,Math.PI/5,.3,1);c.position.set(0,10,6),c.target.position.set(0,0,0),u.add(c),u.add(c.target)}function Z(t){const a=new t.BufferGeometry,r=new Float32Array(2e3*3),p=new Float32Array(2e3),f=new Float32Array(2e3);for(let c=0;c<2e3;c++)r[c*3]=(Math.random()-.5)*60,r[c*3+1]=(Math.random()-.5)*60,r[c*3+2]=(Math.random()-.5)*60-20,p[c]=Math.random()*2+.5,f[c]=Math.random()*.8+.2;a.setAttribute("position",new t.BufferAttribute(r,3)),a.setAttribute("aSize",new t.BufferAttribute(p,1)),a.setAttribute("aAlpha",new t.BufferAttribute(f,1));const y=new t.ShaderMaterial({uniforms:{uTime:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1});I=new t.Points(a,y),u.add(I)}function ft(t){h=new t.Group,u.add(h);const e=[new t.Vector2(0,-3),new t.Vector2(.43,-2.88),new t.Vector2(.4,-2.78),new t.Vector2(.38,-2.4),new t.Vector2(.39,-1.8),new t.Vector2(.37,-1.2),new t.Vector2(.28,-.6),new t.Vector2(.12,-.2),new t.Vector2(.04,0),new t.Vector2(.1,.25),new t.Vector2(.22,.65),new t.Vector2(.32,1.2),new t.Vector2(.37,1.8),new t.Vector2(.38,2.4),new t.Vector2(.39,2.78),new t.Vector2(.42,2.88),new t.Vector2(0,3)],a=new t.LatheGeometry(e,64),r=new t.MeshPhysicalMaterial({transmission:.96,roughness:.1,ior:1.3,thickness:.3,color:15266047,transparent:!0,opacity:.12,side:t.DoubleSide,reflectivity:.2,clearcoat:.1,clearcoatRoughness:.2,sheen:.05,sheenRoughness:.4,sheenColor:16766720,envMapIntensity:.3});L=new t.Mesh(a,r),L.renderOrder=0,h.add(L);const p=new t.LatheGeometry(e,64),f=new t.LineBasicMaterial({color:16763972,transparent:!0,opacity:0});U=new t.LineSegments(new t.WireframeGeometry(p),f),h.add(U)}function i(t){const e=b.particleCount,a=new t.BufferGeometry;$=new Float32Array(e*3),O=new Float32Array(e*3),Y=new Float32Array(e),ot=new Float32Array(e),x=new Float32Array(e);for(let y=0;y<e;y++)o(y,e);a.setAttribute("position",new t.BufferAttribute($,3)),a.setAttribute("aColor",new t.BufferAttribute(O,3)),a.setAttribute("aSize",new t.BufferAttribute(Y,1)),a.setAttribute("aPhase",new t.BufferAttribute(ot,1)),a.setAttribute("aRandom",new t.BufferAttribute(x,1));const r=`
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
  `,f=new t.ShaderMaterial({vertexShader:r,fragmentShader:p,uniforms:{uTime:{value:0},uPointSize:{value:2}},transparent:!0,blending:t.AdditiveBlending,depthWrite:!1});m=new t.Points(a,f),m.renderOrder=1,h.add(m)}function o(t,e){const a=t*3;x[t]=Math.random(),Y[t]=.18+Math.random()*.22,ot[t]=Math.random();const p=.3+t/e*2.5,f=Q(p),y=Math.sqrt(Math.random())*f*.85,c=Math.random()*Math.PI*2;$[a]=Math.cos(c)*y,$[a+1]=p,$[a+2]=Math.sin(c)*y;const q=Math.random();O[a]=1,O[a+1]=.75+q*.18,O[a+2]=.05+q*.15}function g(t){if(!m)return;const e=m.geometry.attributes.position.array,a=m.geometry.attributes.aColor.array,r=e.length/3;if(!S.value||_.value>=.995){for(let s=0;s<r;s++){const l=s*3,V=.3+s/r*2.5,G=Q(V),N=Math.sqrt(x[s])*G*.85,T=x[s]*6.28+M*.15+s*.003;e[l]=Math.cos(T)*N,e[l+1]=V+Math.sin(M*.8+x[s]*10)*.03,e[l+2]=Math.sin(T)*N;const X=x[s];a[l]=1,a[l+1]=.75+X*.18,a[l+2]=.05+X*.15}m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.aColor.needsUpdate=!0;return}const p=_.value,f=Math.floor(r*p*.92),y=Math.floor(r*.08),c=S.value?Math.min(y,Wt):0,q=r-f-c;for(let s=0;s<r;s++){const l=s*3;if(s<f&&f>0){const D=s/f,V=.3+p*2.5,G=.3+D*(V-.3),N=Q(G)*.85,T=M*.8+s*.02+x[s]*6.28,X=Math.sqrt(D)*N;e[l]=Math.cos(T)*X,e[l+1]=G+Math.sin(M*1.2+s*.08)*.04,e[l+2]=Math.sin(T)*X;const rt=x[s];a[l]=1,a[l+1]=.75+rt*.18,a[l+2]=.05+rt*.15}else if(s<f+c&&c>0){const D=s-f,V=(D/c+M*1.2)%1;e[l+1]=.35-V*3.2;const G=M*18+D*1.2,N=.032*(1-V*.6);e[l]=Math.cos(G)*N,e[l+2]=Math.sin(G)*N,a[l]=1,a[l+1]=.82+Math.sin(M*7+D)*.12,a[l+2]=0}else{const D=s-f-c;if(q>0&&D<q){const V=D/q,G=Math.sin(V*Math.PI)*.45,N=-.4-V*2.2,T=Q(N-G)*.88,X=Math.sqrt(V)*T,rt=x[s]*6.28+M*.06+D*.004;e[l]=Math.cos(rt)*X,e[l+1]=N-G,e[l+2]=Math.sin(rt)*X;const wt=1-V*.15;a[l]=wt,a[l+1]=wt*.78,a[l+2]=0}}}m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.aColor.needsUpdate=!0}function it(t){const e=`
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
  `,r=L.geometry,p=new t.ShaderMaterial({vertexShader:e,fragmentShader:a,uniforms:{uGlowColor:{value:new t.Color(16766720)},uIntensity:{value:.25},uTime:{value:0}},transparent:!0,blending:t.AdditiveBlending,side:t.BackSide,depthWrite:!1});B=new t.Mesh(r,p),h.add(B)}function Pt(t,e,a,r){F=new e(v);const p=new a(u,P);F.addPass(p);const f=new r;F.addPass(f)}function ht(){C=requestAnimationFrame(ht);const t=performance.now();let e=(t-E)/1e3;E=t,e=Math.min(Math.max(e,0),.1),Number.isFinite(e)||(e=.016),M+=e,S.value&&!J&&At(e),g(),m&&m.material.uniforms&&(m.material.uniforms.uTime.value=M),B&&B.material.uniforms&&(B.material.uniforms.uTime.value=M),I&&I.material.uniforms&&(I.material.uniforms.uTime.value=M),b.autoRotate&&h&&(h.rotation.y+=.004),J&&z&&St(),A&&A.update(),F?F.render():v&&u&&P&&v.render(u,P)}function At(t){w.value=Math.max(0,w.value-t*1e3),_.value=w.value/(b.duration*1e3),at("tick",w.value),w.value<=0&&(w.value=0,_.value=0,S.value=!1,at("complete"),xt())}function xt(){J=!0,z={startTime:performance.now(),duration:2500,startRotationX:h?h.rotation.x:0,targetRotationX:Math.PI}}function St(){if(!z||!h)return;const t=performance.now()-z.startTime,e=Math.min(t/z.duration,1),a=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;h.rotation.x=z.startRotationX+(z.targetRotationX-z.startRotationX)*a,e>=1&&(J=!1,z=null,dt(),at("flip"))}function dt(){if(!m)return;const t=$.length/3;for(let e=0;e<t;e++)o(e,t);m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.aColor.needsUpdate=!0,_.value=1,w.value=b.duration*1e3}function kt(){C&&(cancelAnimationFrame(C),C=null),u&&u.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),v&&(v.dispose(),k.value&&v.domElement&&k.value.removeChild(v.domElement)),u=null,P=null,v=null,F=null,A=null,h=null,L=null,U=null,B=null,m=null,I=null}function zt(){S.value||(S.value=!0,w.value<=0&&(w.value=b.duration*1e3,_.value=1,dt()),j=performance.now()-H)}function gt(){S.value&&(S.value=!1,H=performance.now()-j)}function Vt(){S.value=!1,w.value=b.duration*1e3,_.value=1,H=0,j=0,dt()}function Ft(t){t>0&&(gt(),w.value=t*1e3,_.value=1,dt())}return Lt([()=>b.width,()=>b.height],async([t,e])=>{v&&P&&(P.aspect=t/e,P.updateProjectionMatrix(),v.setSize(t,e),F&&F.setSize(t,e))}),Mt(async()=>{try{await ct()}catch(t){console.error("[沙漏] 初始化失败:",t)}}),Ct(()=>{kt()}),lt({start:zt,pause:gt,reset:Vt,setDuration:Ft,getRemainingTime:()=>w.value,getProgress:()=>_.value,getIsRunning:()=>S.value}),(t,e)=>(R(),W("div",{ref_key:"containerRef",ref:k,class:"hourglass-container"},null,512))}},bt=_t(Ut,[["__scopeId","data-v-55ea359f"]]),$t={class:"right-panel"},qt={class:"time-display"},Yt={class:"time-ring"},Xt={class:"time-ring-svg",viewBox:"0 0 120 120"},Kt=["stroke-dasharray"],jt={class:"time-inner"},Jt={class:"time-value"},Qt={class:"preset-section"},Zt={class:"preset-buttons"},Tt=["onClick"],Ht={class:"custom-time-section"},Et={class:"time-input-row"},te={class:"action-buttons"},ee={class:"status-bar"},ne={class:"status-item"},ae={class:"status-text"},oe={class:"progress-text"},se={class:"progress-value"},ie={class:"fullscreen-controls"},re={class:"fs-time-display"},le={class:"fs-time"},ue={class:"fs-btns"},ce=Bt({__name:"index",setup(K){const lt=d(null),ut=d(null),b=d(null),at=d(null),k=d(60),u=d(1),P=d(5e3),v=d("#FFD700"),F=d("#FFA500"),A=d(!1),C=d(!1),h=d(6e4),L=d(1),U=d(400),B=d(700),m=d(400),I=d(700),$=d(null),{isFullscreen:O,toggle:Y}=Rt({element:$,onChange:i=>{i?(m.value=window.innerWidth,I.value=window.innerHeight-80):st()}}),ot=[{label:"1分钟",value:60},{label:"3分钟",value:180},{label:"5分钟",value:300},{label:"10分钟",value:600},{label:"25分钟",value:1500}],x=pt(()=>{const i=Math.ceil(h.value/1e3),o=Math.floor(i/3600),g=Math.floor(i%3600/60),it=i%60;return o>0?`${String(o).padStart(2,"0")}:${String(g).padStart(2,"0")}:${String(it).padStart(2,"0")}`:`${String(g).padStart(2,"0")}:${String(it).padStart(2,"0")}`}),w=pt(()=>C.value?"running":h.value>0?"paused":"completed"),S=pt(()=>C.value?"运行中":h.value>0?"已暂停":"已完成");function _(){return O.value?ut.value:lt.value}function j(){const i=_();i&&(i.start(),C.value=!0)}function H(){const i=_();i&&(i.pause(),C.value=!1)}function z(){const i=_();i&&(i.reset(),C.value=!1,h.value=k.value*1e3,L.value=1)}function J(i){k.value=i,u.value=Math.round(i/60*10)/10;const o=_();o&&(o.setDuration(i),h.value=i*1e3,L.value=1),C.value||Nt(()=>j())}function M(){u.value>0&&J(Math.round(u.value*60))}function E(){C.value=!1}function Q(i){h.value=i,k.value>0&&(L.value=Math.max(0,i/(k.value*1e3)))}function ct(){}function st(){if(b.value){const i=b.value.getBoundingClientRect(),o=i.width,g=i.height;U.value=Math.max(200,o),B.value=Math.max(300,g)}else window.innerWidth<768?(U.value=Math.min(window.innerWidth-32,400),B.value=U.value*1.75):(U.value=400,B.value=700)}let Z=null;function ft(){Z&&clearTimeout(Z),Z=setTimeout(()=>{O.value?(m.value=window.innerWidth,I.value=window.innerHeight-80):st()},200)}return Mt(()=>{st(),window.addEventListener("resize",ft)}),Ct(()=>{window.removeEventListener("resize",ft),Z&&clearTimeout(Z)}),(i,o)=>(R(),W("div",{class:vt(["hourglass-page",{fullscreen:et(O)}]),ref_key:"hourglassPageRef",ref:$},[et(O)?(R(),W(mt,{key:1},[n("div",{class:"fullscreen-canvas",ref_key:"fullscreenRef",ref:at},[yt(bt,{ref_key:"hourglassRefFs",ref:ut,duration:k.value,"particle-count":P.value,width:m.value,height:I.value,"sand-color-primary":v.value,"sand-color-secondary":F.value,"auto-rotate":A.value,onComplete:E,onTick:Q,onFlip:ct},null,8,["duration","particle-count","width","height","sand-color-primary","sand-color-secondary","auto-rotate"])],512),n("div",ie,[n("div",re,[n("span",le,nt(x.value),1),n("span",{class:vt(["fs-status",w.value])},nt(S.value),3)]),n("div",ue,[C.value?(R(),W("button",{key:1,class:"fs-btn",onClick:H},"暂停")):(R(),W("button",{key:0,class:"fs-btn",onClick:j},"开始")),n("button",{class:"fs-btn",onClick:z},"重置"),n("button",{class:"fs-btn exit-btn",onClick:o[2]||(o[2]=(...g)=>et(Y)&&et(Y)(...g))},"退出全屏")])])],64)):(R(),W(mt,{key:0},[n("div",{class:"left-panel",ref_key:"leftPanelRef",ref:b},[yt(bt,{ref_key:"hourglassRef",ref:lt,duration:k.value,"particle-count":P.value,width:U.value,height:B.value,"sand-color-primary":v.value,"sand-color-secondary":F.value,"auto-rotate":A.value,onComplete:E,onTick:Q,onFlip:ct},null,8,["duration","particle-count","width","height","sand-color-primary","sand-color-secondary","auto-rotate"])],512),n("div",$t,[o[12]||(o[12]=n("div",{class:"panel-header"},[n("h1",{class:"panel-title"},"沙漏计时器"),n("p",{class:"panel-subtitle"},"沉浸在流动的时光中")],-1)),n("div",qt,[n("div",Yt,[(R(),W("svg",Xt,[o[3]||(o[3]=n("circle",{class:"time-ring-bg",cx:"60",cy:"60",r:"54"},null,-1)),n("circle",{class:"time-ring-progress",cx:"60",cy:"60",r:"54","stroke-dasharray":`${L.value*339.292} ${339.292}`},null,8,Kt)])),n("div",jt,[n("span",Jt,nt(x.value),1)])])]),n("div",Qt,[o[4]||(o[4]=n("span",{class:"section-label"},"快速设定",-1)),n("div",Zt,[(R(),W(mt,null,Dt(ot,g=>n("button",{key:g.value,class:vt(["preset-btn",{active:k.value===g.value}]),onClick:it=>J(g.value)},nt(g.label),11,Tt)),64))])]),n("div",Ht,[o[6]||(o[6]=n("span",{class:"section-label"},"自定义时间",-1)),n("div",Et,[It(n("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=g=>u.value=g),class:"time-input",placeholder:"输入",min:"1",max:"120",onKeyup:Gt(M,["enter"])},null,544),[[Ot,u.value,void 0,{number:!0}]]),o[5]||(o[5]=n("span",{class:"input-unit"},"分钟",-1)),n("button",{class:"apply-btn",onClick:M},"设置")])]),n("div",te,[C.value?(R(),W("button",{key:1,class:"action-btn pause-btn",onClick:H},[...o[8]||(o[8]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})])],-1),n("span",null,"暂停",-1)])])):(R(),W("button",{key:0,class:"action-btn start-btn",onClick:j},[...o[7]||(o[7]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M8 5v14l11-7z"})])],-1),n("span",null,"开始",-1)])])),n("button",{class:"action-btn reset-btn",onClick:z},[...o[9]||(o[9]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})])],-1),n("span",null,"重置",-1)])]),n("button",{class:"action-btn fullscreen-btn",onClick:o[1]||(o[1]=(...g)=>et(Y)&&et(Y)(...g))},[...o[10]||(o[10]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})])],-1),n("span",null,"全屏",-1)])])]),n("div",ee,[n("div",ne,[n("span",{class:vt(["status-dot",w.value])},null,2),n("span",ae,nt(S.value),1)]),n("div",oe,[o[11]||(o[11]=n("span",null,"进度",-1)),n("span",se,nt(Math.round(L.value*100))+"%",1)])])])],64))],2))}}),ve=_t(ce,[["__scopeId","data-v-6ec9a832"]]);export{ve as default};
