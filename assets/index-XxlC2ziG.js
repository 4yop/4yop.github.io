import{H as k,o as _,c as d,b as t,m as C,p as T,t as b,j as y,n as M,A as r,a as i}from"./index-O7qSMx9s.js";const I={class:"max-w-3xl mx-auto p-5"},$={class:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"},j={class:"bg-slate-50 rounded-xl p-6 shadow-md"},z={class:"text-right text-xs text-slate-500 mt-2.5"},B={class:"bg-slate-50 rounded-xl p-6 shadow-md"},V={class:"bg-white rounded-lg p-8 mb-5 text-center min-h-32 flex items-center justify-center shadow-sm"},D={key:0,class:"text-center"},A={class:"text-2xl font-bold text-blue-500 mb-2"},E={class:"text-sm text-slate-500"},H={key:1,class:"text-slate-500"},N={class:"flex gap-2.5 justify-center flex-wrap"},P=["disabled"],R={class:"bg-white rounded-xl p-6 shadow-md"},S={class:"flex gap-2.5 flex-wrap justify-center"},F=k({__name:"index",setup(U){const u=r(""),o=r([]),n=r(""),c=r(-1),x=r(!1),m=r(""),v=r("success"),g={yesno:`是
否`,dice:`1
2
3
4
5
6`,coin:`正面
反面`,colors:`红色
蓝色
绿色
黄色
紫色
橙色`,numbers:`1
2
3
4
5
6
7
8
9
10`};function p(s,e="success"){m.value=s,v.value=e,x.value=!0,setTimeout(()=>{x.value=!1},2e3)}function f(){const s=u.value.trim();if(!s){o.value=[];return}s.includes(`
`)?o.value=s.split(`
`):o.value=s.split(","),o.value=o.value.map(e=>e.trim()).filter(e=>e.length>0)}function h(){if(o.value.length===0)return;const s=Math.floor(Math.random()*o.value.length);n.value=o.value[s],c.value=s}function w(){n.value&&navigator.clipboard.writeText(n.value).then(()=>{p("结果已复制到剪贴板！","success")}).catch(()=>{p("复制失败！","error")})}function l(s){g[s]&&(u.value=g[s],f(),n.value="",c.value=-1)}return _(()=>l("yesno")),(s,e)=>(i(),d("div",I,[e[10]||(e[10]=t("div",{class:"text-center mb-8"},[t("h1",{class:"text-3xl font-bold text-slate-700 mb-2"},"🎲 随机选择器"),t("p",{class:"text-slate-500 text-base"},"从列表中随机选择项目，支持权重设置")],-1)),t("div",$,[t("div",j,[e[6]||(e[6]=t("h3",{class:"text-lg font-semibold text-slate-700 mb-5 pb-2.5 border-b-2 border-gray-100"},"📝 选项列表",-1)),C(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>u.value=a),rows:"8",class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-y text-sm",placeholder:"每行输入一个选项，或用逗号分隔",onInput:f},null,544),[[T,u.value]]),t("div",z,"共 "+b(o.value.length)+" 个选项",1)]),t("div",B,[e[8]||(e[8]=t("h3",{class:"text-lg font-semibold text-slate-700 mb-5 pb-2.5 border-b-2 border-gray-100"},"🎯 选择结果",-1)),t("div",V,[n.value?(i(),d("div",D,[t("div",A,b(n.value),1),t("div",E,"第 "+b(c.value+1)+" 个选项",1)])):(i(),d("div",H,[...e[7]||(e[7]=[t("div",{class:"text-5xl mb-4"},"🎲",-1),t("div",{class:"text-base text-slate-700"},"点击按钮开始选择",-1)])]))]),t("div",N,[t("button",{class:"px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors duration-200 text-base",disabled:o.value.length===0,onClick:h}," 随机选择 ",8,P),n.value?(i(),d("button",{key:0,class:"px-6 py-3 bg-white hover:bg-gray-50 text-slate-700 font-medium rounded-md border border-gray-300 transition-colors duration-200",onClick:w}," 复制结果 ")):y("",!0)])])]),t("div",R,[e[9]||(e[9]=t("h3",{class:"text-lg font-semibold text-slate-700 mb-5 pb-2.5 border-b-2 border-gray-100"},"🔖 快速模板",-1)),t("div",S,[t("button",{class:"px-4 py-1.5 bg-white hover:bg-gray-50 text-slate-700 text-sm rounded-md border border-gray-300 transition-colors duration-200",onClick:e[1]||(e[1]=a=>l("yesno"))}," 是/否 "),t("button",{class:"px-4 py-1.5 bg-white hover:bg-gray-50 text-slate-700 text-sm rounded-md border border-gray-300 transition-colors duration-200",onClick:e[2]||(e[2]=a=>l("dice"))}," 骰子(1-6) "),t("button",{class:"px-4 py-1.5 bg-white hover:bg-gray-50 text-slate-700 text-sm rounded-md border border-gray-300 transition-colors duration-200",onClick:e[3]||(e[3]=a=>l("coin"))}," 抛硬币 "),t("button",{class:"px-4 py-1.5 bg-white hover:bg-gray-50 text-slate-700 text-sm rounded-md border border-gray-300 transition-colors duration-200",onClick:e[4]||(e[4]=a=>l("colors"))}," 颜色 "),t("button",{class:"px-4 py-1.5 bg-white hover:bg-gray-50 text-slate-700 text-sm rounded-md border border-gray-300 transition-colors duration-200",onClick:e[5]||(e[5]=a=>l("numbers"))}," 数字(1-10) ")])]),x.value?(i(),d("div",{key:0,class:M(["fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg transition-all duration-300 z-50",v.value==="success"?"bg-green-500 text-white":"bg-red-500 text-white"])},b(m.value),3)):y("",!0)]))}});export{F as default};
