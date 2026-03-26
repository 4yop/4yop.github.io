import{B as V,o as I,a as p,c as f,b as t,s as i,t as k,u as a,E as B,j as M,r as m,z as y,d,M as b,i as $}from"./index-CN3_bA3m.js";const T={class:"random-picker-container"},w={class:"picker-section"},E={class:"input-panel"},N={class:"item-count"},j={class:"result-panel"},D={class:"result-display"},P={key:0,class:"selected-item"},R={class:"item-text"},S={class:"item-index"},U={key:1,class:"no-selection"},q={class:"action-buttons"},A={class:"templates-section"},F={class:"template-buttons"},G=V({__name:"index",setup(H){const v=m(""),n=m([]),l=m(""),c=m(-1),x={yesno:`是
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
10`};function _(){const s=v.value.trim();if(!s){n.value=[];return}s.includes(`
`)?n.value=s.split(`
`):n.value=s.split(","),n.value=n.value.map(e=>e.trim()).filter(e=>e.length>0)}function g(){if(n.value.length===0)return;const s=Math.floor(Math.random()*n.value.length);l.value=n.value[s],c.value=s}function C(){l.value&&navigator.clipboard.writeText(l.value).then(()=>{b.success("结果已复制到剪贴板！")}).catch(()=>{b.error("复制失败！")})}function u(s){x[s]&&(v.value=x[s],_(),l.value="",c.value=-1)}return I(()=>u("yesno")),(s,e)=>{const z=y("el-input"),o=y("el-button");return p(),f("div",T,[e[17]||(e[17]=t("div",{class:"page-header"},[t("h1",null,"🎲 随机选择器"),t("p",{class:"page-description"},"从列表中随机选择项目，支持权重设置")],-1)),t("div",w,[t("div",E,[e[6]||(e[6]=t("h3",null,"📝 选项列表",-1)),i(z,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=r=>v.value=r),type:"textarea",rows:8,placeholder:"每行输入一个选项，或用逗号分隔",onInput:_},null,8,["modelValue"]),t("div",N,"共 "+k(n.value.length)+" 个选项",1)]),t("div",j,[e[10]||(e[10]=t("h3",null,"🎯 选择结果",-1)),t("div",D,[l.value?(p(),f("div",P,[t("div",R,k(l.value),1),t("div",S,"第 "+k(c.value+1)+" 个选项",1)])):(p(),f("div",U,[...e[7]||(e[7]=[t("div",{class:"placeholder-icon"},"🎲",-1),t("div",{class:"placeholder-text"},"点击按钮开始选择",-1)])]))]),t("div",q,[i(o,{type:"primary",size:"large",onClick:g,disabled:n.value.length===0},{default:a(()=>[...e[8]||(e[8]=[d("随机选择",-1)])]),_:1},8,["disabled"]),l.value?(p(),B(o,{key:0,onClick:C},{default:a(()=>[...e[9]||(e[9]=[d("复制结果",-1)])]),_:1})):M("",!0)])])]),t("div",A,[e[16]||(e[16]=t("h3",null,"🔖 快速模板",-1)),t("div",F,[i(o,{size:"small",onClick:e[1]||(e[1]=r=>u("yesno"))},{default:a(()=>[...e[11]||(e[11]=[d("是/否",-1)])]),_:1}),i(o,{size:"small",onClick:e[2]||(e[2]=r=>u("dice"))},{default:a(()=>[...e[12]||(e[12]=[d("骰子(1-6)",-1)])]),_:1}),i(o,{size:"small",onClick:e[3]||(e[3]=r=>u("coin"))},{default:a(()=>[...e[13]||(e[13]=[d("抛硬币",-1)])]),_:1}),i(o,{size:"small",onClick:e[4]||(e[4]=r=>u("colors"))},{default:a(()=>[...e[14]||(e[14]=[d("颜色",-1)])]),_:1}),i(o,{size:"small",onClick:e[5]||(e[5]=r=>u("numbers"))},{default:a(()=>[...e[15]||(e[15]=[d("数字(1-10)",-1)])]),_:1})])])])}}}),K=$(G,[["__scopeId","data-v-8d9b6d11"]]);export{K as default};
