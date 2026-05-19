const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OrbitControls-H9dYXL0l.js","assets/three.module-d0yTp6cH.js","assets/EffectComposer-01vSzWdl.js","assets/CopyShader-BzTUYzf6.js","assets/Pass-BI6lC_e6.js","assets/RenderPass-DZy3X8JD.js","assets/UnrealBloomPass-l0Q5vPJr.js","assets/OutputPass-CfAWFLld.js"])))=>i.map(i=>d[i]);
import{_ as bt,z as Lt,b as yt,I as _t,o as N,c as W,d as T,m as v,F as ut,e as n,f as gt,t as et,k as It,n as lt,q as Dt,v as Ot,J as Gt,p as ct,A as Nt}from"./index-GeBUIdFm.js";import U from"./index-CJJ-WHAU.js";const Wt=500,Ut={__name:"Hourglass",props:{duration:{type:Number,default:60,validator:Y=>Y>0},particleCount:{type:Number,default:5e3,validator:Y=>Y>=1e3&&Y<=2e4},width:{type:Number,default:400},height:{type:Number,default:700},sandColorPrimary:{type:String,default:"#FFD700"},sandColorSecondary:{type:String,default:"#FFA500"},autoRotate:{type:Boolean,default:!1}},emits:["complete","tick","flip"],setup(Y,{expose:ot,emit:it}){const w=Y,nt=it,S=v(null);let u=null,P=null,m=null,z=null,C=null,M=null,p=null,I=null,D=null,F=null,h=null,O=null,G=null,$=null,q=null,J=null,j=null,B=null;const b=v(0),L=v(!1),k=v(1);let Q=0,Z=0,V=null,R=!1,y=0,H=0;function E(t){if(t>=0)return t<=.3?.04+(.08-.04)*(t/.3):t<=.6?.08+(.06-.08)*((t-.3)/.3):t<=1.2?.06+(.22-.06)*((t-.6)/.6):t<=2?.22+(.36-.22)*((t-1.2)/.8):t<=2.6?.36+(.34-.36)*((t-2)/.6):t<=3?.34+(.28-.34)*((t-2.6)/.4):t<=3.25?.28+(.4-.28)*((t-3)/.25):t<=3.35?.4+(.35-.4)*((t-3.25)/.1):.35+(0-.35)*((t-3.35)/.05);const e=-t;return e<=.4?.04+(.12-.04)*(e/.4):e<=1?.12+(.3-.12)*((e-.4)/.6):e<=1.8?.3+(.42-.3)*((e-1)/.8):e<=2.4?.42+(.38-.42)*((e-1.8)/.6):e<=2.8?.38+(0-.38)*((e-2.4)/.4):0}async function at(){const{isPrerender:t}=await T(async()=>{const{isPrerender:f}=await import("./test-Db6pn0qC.js");return{isPrerender:f}},[]);if(t())return;const e=await T(()=>import("./three.module-d0yTp6cH.js"),[]),{OrbitControls:o}=await T(async()=>{const{OrbitControls:f}=await import("./OrbitControls-H9dYXL0l.js");return{OrbitControls:f}},__vite__mapDeps([0,1])),{EffectComposer:r}=await T(async()=>{const{EffectComposer:f}=await import("./EffectComposer-01vSzWdl.js");return{EffectComposer:f}},__vite__mapDeps([2,1,3,4])),{RenderPass:i}=await T(async()=>{const{RenderPass:f}=await import("./RenderPass-DZy3X8JD.js");return{RenderPass:f}},__vite__mapDeps([5,1,4])),{UnrealBloomPass:c}=await T(async()=>{const{UnrealBloomPass:f}=await import("./UnrealBloomPass-l0Q5vPJr.js");return{UnrealBloomPass:f}},__vite__mapDeps([6,1,4,3])),{OutputPass:g}=await T(async()=>{const{OutputPass:f}=await import("./OutputPass-CfAWFLld.js");return{OutputPass:f}},__vite__mapDeps([7,1,4])),a=S.value;if(!a)return;const d=w.width,_=w.height;u=new e.Scene,u.background=new e.Color(328976),P=new e.PerspectiveCamera(50,d/_,.1,1e3),P.position.set(0,.5,8),m=new e.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance"}),m.setSize(d,_),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.toneMapping=e.ACESFilmicToneMapping,m.toneMappingExposure=3.2,m.outputColorSpace=e.SRGBColorSpace,a.appendChild(m.domElement),C=new o(P,m.domElement),C.enableDamping=!0,C.dampingFactor=.05,C.minDistance=4,C.maxDistance=15,C.maxPolarAngle=Math.PI*.85,C.enablePan=!1,K(e),st(e),l(e),s(e),A(e),Pt(e),Ct(e,r,i,c,g),b.value=w.duration*1e3,k.value=1,H=performance.now(),dt()}function K(t){const e=new t.AmbientLight(2241348,2);u.add(e);const o=new t.DirectionalLight(16777215,4);o.position.set(5,10,8),u.add(o);const r=new t.PointLight(16755251,3,25);r.position.set(3,-1,5),u.add(r);const i=new t.PointLight(4482815,2.5,22);i.position.set(-3,3,-4),u.add(i);const c=new t.PointLight(16766720,2,18);c.position.set(0,-4,3),u.add(c);const g=new t.PointLight(16729224,1.5,15);g.position.set(-4,2,-3),u.add(g);const a=new t.SpotLight(16777198,3.5,30,Math.PI/5,.3,1);a.position.set(0,10,6),a.target.position.set(0,0,0),u.add(a),u.add(a.target)}function st(t){const o=new t.BufferGeometry,r=new Float32Array(2e3*3),i=new Float32Array(2e3),c=new Float32Array(2e3);for(let a=0;a<2e3;a++)r[a*3]=(Math.random()-.5)*60,r[a*3+1]=(Math.random()-.5)*60,r[a*3+2]=(Math.random()-.5)*60-20,i[a]=Math.random()*2+.5,c[a]=Math.random()*.8+.2;o.setAttribute("position",new t.BufferAttribute(r,3)),o.setAttribute("aSize",new t.BufferAttribute(i,1)),o.setAttribute("aAlpha",new t.BufferAttribute(c,1));const g=new t.ShaderMaterial({uniforms:{uTime:{value:0}},vertexShader:`
      attribute float aSize;
      attribute float aAlpha;
      varying float vAlpha;
      uniform float uTime;
      void main() {
        vAlpha = aAlpha * (0.6 + 0.4 * sin(uTime * 2.0 + position.x * 0.1));
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
    `,transparent:!0,depthWrite:!1});O=new t.Points(o,g),u.add(O)}function l(t){p=new t.Group,u.add(p);const e=[new t.Vector2(0,-2.8),new t.Vector2(.38,-2.4),new t.Vector2(.42,-1.8),new t.Vector2(.3,-1),new t.Vector2(.12,-.4),new t.Vector2(.04,0),new t.Vector2(.08,.3),new t.Vector2(.06,.6),new t.Vector2(.22,1.2),new t.Vector2(.36,2),new t.Vector2(.34,2.6),new t.Vector2(.28,3),new t.Vector2(.4,3.25),new t.Vector2(.35,3.35),new t.Vector2(0,3.4)],o=new t.LatheGeometry(e,64),r=new t.MeshPhysicalMaterial({transmission:.6,roughness:.05,ior:1.52,thickness:1.2,color:14544639,transparent:!0,opacity:.85,side:t.DoubleSide,reflectivity:2,clearcoat:1,clearcoatRoughness:.03,sheen:1,sheenRoughness:.1,sheenColor:16766720,envMapIntensity:2});I=new t.Mesh(o,r),p.add(I);const i=new t.LatheGeometry(e,64),c=new t.LineBasicMaterial({color:16770229,transparent:!0,opacity:.9});D=new t.LineSegments(new t.WireframeGeometry(i),c),p.add(D)}function s(t){const o=new t.BufferGeometry,r=new Float32Array(300*3),i=new Float32Array(300*3),c=new Float32Array(300);for(let a=0;a<300;a++){const d=Math.random()*Math.PI*2,_=.4+Math.random()*.3,f=(Math.random()-.5)*6;r[a*3]=Math.cos(d)*_,r[a*3+1]=f,r[a*3+2]=Math.sin(d)*_;const x=Math.random();x<.4?(i[a*3]=1,i[a*3+1]=.84,i[a*3+2]=0):x<.7?(i[a*3]=.27,i[a*3+1]=.4,i[a*3+2]=1):(i[a*3]=1,i[a*3+1]=.6,i[a*3+2]=.2),c[a]=Math.random()*3+1}o.setAttribute("position",new t.BufferAttribute(r,3)),o.setAttribute("color",new t.BufferAttribute(i,3)),o.setAttribute("aSize",new t.BufferAttribute(c,1));const g=new t.ShaderMaterial({uniforms:{uTime:{value:0}},vertexShader:`
      attribute float aSize;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vAlpha;
      uniform float uTime;
      void main() {
        vColor = color;
        vec3 pos = position;
        pos.y += sin(uTime * 3.0 + position.x * 2.0) * 0.02;
        vAlpha = 0.3 + 0.3 * sin(uTime * 4.0 + position.y * 3.0);
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = aSize * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        if (dist > 0.5) discard;
        float alpha = (1.0 - dist * 2.0) * vAlpha;
        vec3 color = vColor + vec3(0.3) * (1.0 - dist * 2.0);
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,blending:t.AdditiveBlending,depthWrite:!1});G=new t.Points(o,g),p.add(G)}function A(t){const e=w.particleCount,o=new t.BufferGeometry;$=new Float32Array(e*3),q=new Float32Array(e*3),J=new Float32Array(e),j=new Float32Array(e),B=new Float32Array(e);for(let g=0;g<e;g++)tt(g);o.setAttribute("position",new t.BufferAttribute($,3)),o.setAttribute("aColor",new t.BufferAttribute(q,3)),o.setAttribute("aSize",new t.BufferAttribute(J,1)),o.setAttribute("aPhase",new t.BufferAttribute(j,1)),o.setAttribute("aRandom",new t.BufferAttribute(B,1));const r=`
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
  `,i=`
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
  `,c=new t.ShaderMaterial({vertexShader:r,fragmentShader:i,uniforms:{uTime:{value:0},uPointSize:{value:1.2}},transparent:!0,blending:t.AdditiveBlending,depthWrite:!1});h=new t.Points(o,c),p.add(h)}function tt(t,e){const o=t*3;B[t]=Math.random(),J[t]=.12+Math.random()*.16,j[t]=Math.random();const r=.8+Math.random()*2,i=E(r),c=Math.random()*i*.82,g=Math.random()*Math.PI*2;$[o]=Math.cos(g)*c,$[o+1]=r,$[o+2]=Math.sin(g)*c;const a=Math.random();q[o]=.27+a*.27,q[o+1]=.4-a*.07,q[o+2]=1}function Mt(t){if(!h)return;const e=h.geometry.attributes.position.array,o=h.geometry.attributes.aColor.array,r=e.length/3,i=Math.floor(r*k.value*.9),c=Math.min(Math.floor(r*.1),Wt),g=r-i-c;for(let a=0;a<r;a++){const d=a*3;if(a<i){const _=.8+a/i*2,f=E(_)*.8,x=y*.6+a*.025+B[a]*6.28,X=Math.sin(y*1+a*.06)*.04;e[d]=Math.cos(x)*(f+X),e[d+1]=_+Math.sin(y*1.5+a*.1)*.05,e[d+2]=Math.sin(x)*(f+X),o[d]=.27+B[a]*.27,o[d+1]=.35+Math.sin(y*2.5+a)*.12,o[d+2]=1}else if(a<i+c){const _=a-i,f=(_/c+y*1)%1;e[d+1]=.6-f*3;const x=y*15+_*.9,X=.03*(1-f*.5);e[d]=Math.cos(x)*X,e[d+2]=Math.sin(x)*X,o[d]=1,o[d+1]=.84+Math.sin(y*6+_)*.12,o[d+2]=0}else{const _=a-i-c,f=g;if(f>0&&_<f){const x=_/f,X=-.6-x*1.9,vt=Math.sin(x*Math.PI)*.5,Bt=E(X-vt)*.85,mt=Math.sqrt(x)*Bt,pt=B[a]*Math.PI*2+y*.1+_*.006;e[d]=Math.cos(pt)*mt,e[d+1]=X-vt,e[d+2]=Math.sin(pt)*mt;const ht=1-x*.2;o[d]=ht,o[d+1]=ht*.8,o[d+2]=0}}}h.geometry.attributes.position.needsUpdate=!0,h.geometry.attributes.aColor.needsUpdate=!0}function Pt(t){const e=`
    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewDir = normalize(-mvPosition.xyz);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,o=`
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
  `,r=I.geometry,i=new t.ShaderMaterial({vertexShader:e,fragmentShader:o,uniforms:{uGlowColor:{value:new t.Color(16766720)},uIntensity:{value:.8},uTime:{value:0}},transparent:!0,blending:t.AdditiveBlending,side:t.BackSide,depthWrite:!1});F=new t.Mesh(r,i),p.add(F)}function Ct(t,e,o,r,i){z=new e(m);const c=new o(u,P);z.addPass(c);const g=new r(new t.Vector2(w.width,w.height),.8,.5,.75);z.addPass(g);const a=new i;z.addPass(a)}function dt(){M=requestAnimationFrame(dt);const t=performance.now();let e=(t-H)/1e3;H=t,e=Math.min(Math.max(e,0),.1),Number.isFinite(e)||(e=.016),y+=e,L.value&&!R&&At(e),Mt(),h&&h.material.uniforms&&(h.material.uniforms.uTime.value=y),G&&G.material.uniforms&&(G.material.uniforms.uTime.value=y),F&&F.material.uniforms&&(F.material.uniforms.uTime.value=y),O&&O.material.uniforms&&(O.material.uniforms.uTime.value=y),w.autoRotate&&p&&(p.rotation.y+=.004),R&&V&&St(),C&&C.update(),z?z.render():m&&u&&P&&m.render(u,P)}function At(t){b.value=Math.max(0,b.value-t*1e3),k.value=b.value/(w.duration*1e3),nt("tick",b.value),b.value<=0&&(b.value=0,k.value=0,L.value=!1,nt("complete"),xt())}function xt(){R=!0,V={startTime:performance.now(),duration:2500,startRotationX:p?p.rotation.x:0,targetRotationX:Math.PI}}function St(){if(!V||!p)return;const t=performance.now()-V.startTime,e=Math.min(t/V.duration,1),o=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;p.rotation.x=V.startRotationX+(V.targetRotationX-V.startRotationX)*o,e>=1&&(R=!1,V=null,rt(),nt("flip"))}function rt(){if(!h)return;const t=$.length/3;for(let e=0;e<t;e++)tt(e);h.geometry.attributes.position.needsUpdate=!0,h.geometry.attributes.aColor.needsUpdate=!0,k.value=1,b.value=w.duration*1e3}function zt(){M&&(cancelAnimationFrame(M),M=null),u&&u.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),m&&(m.dispose(),S.value&&m.domElement&&S.value.removeChild(m.domElement)),u=null,P=null,m=null,z=null,C=null,p=null,I=null,D=null,F=null,h=null,O=null,G=null}function Ft(){L.value||(L.value=!0,b.value<=0&&(b.value=w.duration*1e3,k.value=1,rt()),Q=performance.now()-Z)}function ft(){L.value&&(L.value=!1,Z=performance.now()-Q)}function kt(){L.value=!1,b.value=w.duration*1e3,k.value=1,Z=0,Q=0,rt()}function Vt(t){t>0&&(ft(),b.value=t*1e3,k.value=1,rt())}return Lt([()=>w.width,()=>w.height],async([t,e])=>{m&&P&&(P.aspect=t/e,P.updateProjectionMatrix(),m.setSize(t,e),z&&z.setSize(t,e))}),yt(async()=>{try{await at()}catch(t){console.error("[沙漏] 初始化失败:",t)}}),_t(()=>{zt()}),ot({start:Ft,pause:ft,reset:kt,setDuration:Vt,getRemainingTime:()=>b.value,getProgress:()=>k.value,getIsRunning:()=>L.value}),(t,e)=>(N(),W("div",{ref_key:"containerRef",ref:S,class:"hourglass-container"},null,512))}},wt=bt(Ut,[["__scopeId","data-v-fd016fca"]]),$t={class:"right-panel"},qt={class:"time-display"},Xt={class:"time-ring"},Yt={class:"time-ring-svg",viewBox:"0 0 120 120"},Rt=["stroke-dasharray"],Kt={class:"time-inner"},Tt={class:"time-value"},Jt={class:"preset-section"},jt={class:"preset-buttons"},Qt=["onClick"],Zt={class:"custom-time-section"},Ht={class:"time-input-row"},Et={class:"action-buttons"},te={class:"status-bar"},ee={class:"status-item"},ne={class:"status-text"},ae={class:"progress-text"},oe={class:"progress-value"},ie={class:"fullscreen-controls"},se={class:"fs-time-display"},re={class:"fs-time"},le={class:"fs-btns"},ue={__name:"index",setup(Y){const ot=v(null),it=v(null),w=v(null),nt=v(null),S=v(60),u=v(1),P=v(5e3),m=v("#FFD700"),z=v("#FFA500"),C=v(!1),M=v(!1),p=v(6e4),I=v(1),D=v(!1),F=v(400),h=v(700),O=v(400),G=v(700),$=[{label:"1分钟",value:60},{label:"3分钟",value:180},{label:"5分钟",value:300},{label:"10分钟",value:600},{label:"25分钟",value:1500}],q=ct(()=>{const l=Math.ceil(p.value/1e3),s=Math.floor(l/3600),A=Math.floor(l%3600/60),tt=l%60;return s>0?`${String(s).padStart(2,"0")}:${String(A).padStart(2,"0")}:${String(tt).padStart(2,"0")}`:`${String(A).padStart(2,"0")}:${String(tt).padStart(2,"0")}`}),J=ct(()=>M.value?"running":p.value>0?"paused":"completed"),j=ct(()=>M.value?"运行中":p.value>0?"已暂停":"已完成");function B(){return D.value?it.value:ot.value}function b(){const l=B();l&&(l.start(),M.value=!0)}function L(){const l=B();l&&(l.pause(),M.value=!1)}function k(){const l=B();l&&(l.reset(),M.value=!1,p.value=S.value*1e3,I.value=1)}function Q(l){S.value=l,u.value=Math.round(l/60*10)/10;const s=B();s&&(s.setDuration(l),p.value=l*1e3,I.value=1),M.value||Nt(()=>b())}function Z(){u.value>0&&Q(Math.round(u.value*60))}function V(){if(!U.isEnabled){alert("您的浏览器不支持全屏功能");return}if(U.isFullscreen)U.exit();else{const l=document.querySelector(".hourglass-page");U.request(l)}}function R(){D.value=!!U.isFullscreen,D.value?(O.value=window.innerWidth,G.value=window.innerHeight-80):at()}function y(){M.value=!1}function H(l){p.value=l,S.value>0&&(I.value=Math.max(0,l/(S.value*1e3)))}function E(){}function at(){if(w.value){const l=w.value.getBoundingClientRect(),s=l.width,A=l.height;F.value=Math.max(200,s),h.value=Math.max(300,A)}else window.innerWidth<768?(F.value=Math.min(window.innerWidth-32,400),h.value=F.value*1.75):(F.value=400,h.value=700)}let K=null;function st(){K&&clearTimeout(K),K=setTimeout(()=>{D.value?(O.value=window.innerWidth,G.value=window.innerHeight-80):at()},200)}return yt(()=>{U.isEnabled&&U.on("change",R),at(),window.addEventListener("resize",st)}),_t(()=>{U.isEnabled&&U.off("change",R),window.removeEventListener("resize",st),K&&clearTimeout(K)}),(l,s)=>(N(),W("div",{class:lt(["hourglass-page",{fullscreen:D.value}])},[D.value?(N(),W(ut,{key:1},[n("div",{class:"fullscreen-canvas",ref_key:"fullscreenRef",ref:nt},[gt(wt,{ref_key:"hourglassRefFs",ref:it,duration:S.value,"particle-count":P.value,width:O.value,height:G.value,"sand-color-primary":m.value,"sand-color-secondary":z.value,"auto-rotate":C.value,onComplete:y,onTick:H,onFlip:E},null,8,["duration","particle-count","width","height","sand-color-primary","sand-color-secondary","auto-rotate"])],512),n("div",ie,[n("div",se,[n("span",re,et(q.value),1),n("span",{class:lt(["fs-status",J.value])},et(j.value),3)]),n("div",le,[M.value?(N(),W("button",{key:1,class:"fs-btn",onClick:L},"暂停")):(N(),W("button",{key:0,class:"fs-btn",onClick:b},"开始")),n("button",{class:"fs-btn",onClick:k},"重置"),n("button",{class:"fs-btn exit-btn",onClick:V},"退出全屏")])])],64)):(N(),W(ut,{key:0},[n("div",{class:"left-panel",ref_key:"leftPanelRef",ref:w},[gt(wt,{ref_key:"hourglassRef",ref:ot,duration:S.value,"particle-count":P.value,width:F.value,height:h.value,"sand-color-primary":m.value,"sand-color-secondary":z.value,"auto-rotate":C.value,onComplete:y,onTick:H,onFlip:E},null,8,["duration","particle-count","width","height","sand-color-primary","sand-color-secondary","auto-rotate"])],512),n("div",$t,[s[10]||(s[10]=n("div",{class:"panel-header"},[n("h1",{class:"panel-title"},"沙漏计时器"),n("p",{class:"panel-subtitle"},"沉浸在流动的时光中")],-1)),n("div",qt,[n("div",Xt,[(N(),W("svg",Yt,[s[1]||(s[1]=n("circle",{class:"time-ring-bg",cx:"60",cy:"60",r:"54"},null,-1)),n("circle",{class:"time-ring-progress",cx:"60",cy:"60",r:"54","stroke-dasharray":`${I.value*339.292} ${339.292}`},null,8,Rt)])),n("div",Kt,[n("span",Tt,et(q.value),1)])])]),n("div",Jt,[s[2]||(s[2]=n("span",{class:"section-label"},"快速设定",-1)),n("div",jt,[(N(),W(ut,null,It($,A=>n("button",{key:A.value,class:lt(["preset-btn",{active:S.value===A.value}]),onClick:tt=>Q(A.value)},et(A.label),11,Qt)),64))])]),n("div",Zt,[s[4]||(s[4]=n("span",{class:"section-label"},"自定义时间",-1)),n("div",Ht,[Dt(n("input",{type:"number","onUpdate:modelValue":s[0]||(s[0]=A=>u.value=A),class:"time-input",placeholder:"输入",min:"1",max:"120",onKeyup:Gt(Z,["enter"])},null,544),[[Ot,u.value,void 0,{number:!0}]]),s[3]||(s[3]=n("span",{class:"input-unit"},"分钟",-1)),n("button",{class:"apply-btn",onClick:Z},"设置")])]),n("div",Et,[M.value?(N(),W("button",{key:1,class:"action-btn pause-btn",onClick:L},[...s[6]||(s[6]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})])],-1),n("span",null,"暂停",-1)])])):(N(),W("button",{key:0,class:"action-btn start-btn",onClick:b},[...s[5]||(s[5]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M8 5v14l11-7z"})])],-1),n("span",null,"开始",-1)])])),n("button",{class:"action-btn reset-btn",onClick:k},[...s[7]||(s[7]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})])],-1),n("span",null,"重置",-1)])]),n("button",{class:"action-btn fullscreen-btn",onClick:V},[...s[8]||(s[8]=[n("span",{class:"btn-icon"},[n("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[n("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})])],-1),n("span",null,"全屏",-1)])])]),n("div",te,[n("div",ee,[n("span",{class:lt(["status-dot",J.value])},null,2),n("span",ne,et(j.value),1)]),n("div",ae,[s[9]||(s[9]=n("span",null,"进度",-1)),n("span",oe,et(Math.round(I.value*100))+"%",1)])])])],64))],2))}},fe=bt(ue,[["__scopeId","data-v-0f842458"]]);export{fe as default};
