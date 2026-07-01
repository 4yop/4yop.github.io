import{I as q,e as O,c as o,h as E,w as L,T as j,b as n,F as c,p as a,j as l,v as k,o as i,t as d,m as v,q as y,y as B,G,_ as R}from"./index-BDgmTDOw.js";const V={class:"cn-dns-page"},M=["data-kind"],Q={class:"dn-section"},U={class:"dn-cards"},z={class:"dn-card-header"},J={class:"dn-card-title"},K={class:"dn-card-desc"},X={class:"dn-card-tags"},Y={class:"dn-grid"},Z=["onClick"],ee={key:0,class:"dn-grid-empty"},te={class:"dn-grid"},se=["onClick"],ne={key:0,class:"dn-grid-empty"},oe={key:0,class:"dn-grid"},ie=["onClick"],re={key:1,class:"dn-grid"},de=["onClick"],ce={class:"dn-card-footer"},ae=["onClick"],le=["href"],ue={id:"config",class:"dn-section dn-config-section"},Se={class:"dn-tabs-wrapper"},ve={class:"dn-tabs"},De=["onClick"],pe={class:"dn-tabs-wrapper"},me={class:"dn-tabs dn-tabs-provider"},Ne=["onClick"],ge={class:"dn-panels"},he={class:"dn-panel-title"},fe={class:"dn-code"},ke=["onClick"],ye={class:"dn-os-desc"},_e={class:"dn-section dn-faq-section",itemscope:"",itemtype:"https://schema.org/FAQPage"},we={class:"dn-faq-details"},$e={class:"dn-faq-summary",itemprop:"name"},Ce={class:"dn-faq-answer",itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"},Pe={itemprop:"text"},be=q({__name:"index",setup(Ae){const D=l([]),p=l("macos"),m=l("alidns"),u=l({show:!1,message:"",kind:"ok"}),h=l([{id:"macos",name:"macOS",icon:"🍎",description:"适用于 macOS 10.15+ (Catalina 及以上)"},{id:"windows",name:"Windows",icon:"🪟",description:"适用于 Windows 10/11，需管理员权限"},{id:"linux",name:"Linux",icon:"🐧",description:"适用于 systemd-resolved (Ubuntu/Debian/CentOS 等)"},{id:"ios",name:"iOS/iPadOS",icon:"📱",description:"适用于 iOS 14+，支持私有 DNS (DoT)"},{id:"android",name:"Android",icon:"🤖",description:"适用于 Android 9+，支持私人 DNS (DoT)"},{id:"openwrt",name:"OpenWrt",icon:"📡",description:"适用于 OpenWrt 路由器，需修改 dnsmasq 配置"},{id:"docker",name:"Docker",icon:"🐋",description:"适用于 Docker 守护进程和单容器配置"},{id:"browser",name:"浏览器 DoH",icon:"🌐",description:"适用于 Chrome/Firefox/Edge 浏览器内置 DoH"},{id:"router",name:"路由器",icon:"🔌",description:"适用于路由器 WAN 口 DNS 设置"}]),_=l([{question:"什么是公共 DNS？",answer:"公共 DNS 是由第三方机构提供的免费 DNS 服务，任何人都可以使用。相比运营商默认的 DNS，公共 DNS 通常更快、更稳定，并且可以提供额外的功能如广告过滤、恶意网站拦截等。"},{question:"IPv4 和 IPv6 DNS 有什么区别？",answer:"IPv4 DNS 使用 32 位地址格式（如 223.5.5.5），是目前最广泛使用的格式。IPv6 DNS 使用 128 位地址格式（如 2400:3200::1），是下一代互联网协议，提供更多的地址空间和更好的安全性。建议同时配置两者以获得更好的网络兼容性。"},{question:"什么是 DoH 和 DoT？",answer:"DoH（DNS over HTTPS）和 DoT（DNS over TLS）是两种加密的 DNS 协议，可以防止 DNS 查询被窃听或篡改。DoH 使用 HTTPS 协议传输 DNS 查询，而 DoT 使用 TLS 协议。两者都能有效保护您的网络隐私和安全。"},{question:"如何选择适合自己的 DNS？",answer:"如果您主要访问国内网站，建议使用阿里 DNS、DNSPod、114DNS 或百度 DNS；如果需要访问国际网站，Cloudflare DNS 和 Google DNS 是不错的选择；如果重视隐私和安全，Quad9 和 AdGuard DNS 提供恶意网站拦截功能。您可以根据自己的网络环境和需求进行选择。"},{question:"DNS 配置后如何验证是否生效？",answer:"您可以使用命令行工具如 nslookup、dig 或 ping 来测试 DNS 解析。例如：nslookup google.com 或 dig google.com。如果返回的 IP 地址与您配置的 DNS 服务商一致，则说明配置已生效。也可以访问一些在线 DNS 测试网站进行验证。"}]),f=k(()=>D.value.find(s=>s.id===m.value)),w=k(()=>{if(!f.value)return[];const s=f.value;switch(p.value){case"macos":return $(s);case"windows":return C(s);case"linux":return P(s);case"ios":return b(s);case"android":return A(s);case"openwrt":return W(s);case"docker":return T(s);case"browser":return I(s);case"router":return F(s);default:return[]}});function $(s){const e=s.ipv4[0]||"",t=s.ipv4[1]||e,r=s.ipv6[0]||"";return[{title:"设置 IPv4 DNS（Wi-Fi）",content:`# 设置主 DNS
networksetup -setdnsservers Wi-Fi ${e}

# 设置主备 DNS
networksetup -setdnsservers Wi-Fi ${e} ${t}`},{title:"设置 IPv4 DNS（Ethernet）",content:`# 设置主 DNS
networksetup -setdnsservers Ethernet ${e}

# 设置主备 DNS
networksetup -setdnsservers Ethernet ${e} ${t}`},{title:"设置 IPv6 DNS（Wi-Fi）",content:r?`# 设置 IPv6 DNS
networksetup -setdnsservers Wi-Fi ${e} ${t} ${r}`:"# 该 Provider 不支持 IPv6"},{title:"验证 DNS 设置",content:`# 查看 Wi-Fi DNS
networksetup -getdnsservers Wi-Fi

# 查看 Ethernet DNS
networksetup -getdnsservers Ethernet

# 测试解析
dig google.com @${e}`},{title:"恢复 DHCP 自动获取",content:`# 清空 DNS，恢复 DHCP
networksetup -setdnsservers Wi-Fi Empty

networksetup -setdnsservers Ethernet Empty`}]}function C(s){const e=s.ipv4[0]||"",t=s.ipv4[1]||e;return[{title:"设置 IPv4 DNS（PowerShell）",content:`# 设置主 DNS（需管理员权限）
Set-DnsClientServerAddress -InterfaceAlias "以太网" -ServerAddresses ${e}

# 设置主备 DNS
Set-DnsClientServerAddress -InterfaceAlias "以太网" -ServerAddresses ${e},${t}

# 设置 Wi-Fi DNS
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses ${e},${t}`},{title:"设置 IPv4 DNS（CMD）",content:`# 设置主备 DNS（需管理员权限）
netsh interface ip set dns "以太网" static ${e} primary
netsh interface ip add dns "以太网" ${t} index=2

# 设置 Wi-Fi DNS
netsh interface ip set dns "Wi-Fi" static ${e} primary
netsh interface ip add dns "Wi-Fi" ${t} index=2`},{title:"验证 DNS 设置",content:`# 查看当前 DNS
Get-DnsClientServerAddress -AddressFamily IPv4

# 测试解析
nslookup google.com ${e}`},{title:"恢复 DHCP 自动获取",content:`# 清空 DNS，恢复 DHCP
Set-DnsClientServerAddress -InterfaceAlias "以太网" -ResetServerAddresses
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ResetServerAddresses`}]}function P(s){const e=s.ipv4[0]||"",t=s.ipv4[1]||e;return[{title:"设置 DNS（systemd-resolved）",content:`# 编辑 resolved.conf
sudo nano /etc/systemd/resolved.conf

# 修改以下行：
[Resolve]
DNS=${e} ${t}
FallbackDNS=

# 重启服务
sudo systemctl restart systemd-resolved`},{title:"设置 DNS（/etc/resolv.conf）",content:`# 编辑 resolv.conf
sudo nano /etc/resolv.conf

# 添加以下行：
nameserver ${e}
nameserver ${t}

# 防止被覆盖
sudo chattr +i /etc/resolv.conf`},{title:"验证 DNS 设置",content:`# 查看 DNS 配置
resolvectl status

# 测试解析
dig google.com @${e}

# 或使用 nslookup
nslookup google.com ${e}`},{title:"恢复默认配置",content:`# 取消 immutable 属性
sudo chattr -i /etc/resolv.conf

# 删除自定义 DNS
sudo rm /etc/resolv.conf

# 重启 resolved 服务
sudo systemctl restart systemd-resolved

# 创建软链接
sudo ln -s /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf`}]}function b(s){const e=s.dot||"";return[{title:"设置私有 DNS（DoT）",content:e?`1. 打开「设置」 → 「无线局域网」
2. 点击已连接 Wi-Fi 的 ℹ️ 图标
3. 向下滑动找到「配置 DNS」
4. 选择「手动」
5. 删除现有 DNS 服务器
6. 添加服务器：
   - ${s.ipv4[0]||""}
   - ${s.ipv4[1]||""}
7. 如果支持 DoT，可开启「私有 DNS」：
   - 输入域名：${e}`:`1. 打开「设置」 → 「无线局域网」
2. 点击已连接 Wi-Fi 的 ℹ️ 图标
3. 向下滑动找到「配置 DNS」
4. 选择「手动」
5. 添加服务器：
   - ${s.ipv4[0]||""}
   - ${s.ipv4[1]||""}`},{title:"验证 DNS 设置",content:`# 在 Safari 中访问 DNS 测试页面
https://dnssec.works/

# 或使用第三方 App 测试
- DNS Speed Test
- Network Ping Lite`}]}function A(s){const e=s.dot||"";return[{title:"设置私人 DNS（DoT）",content:e?`1. 打开「设置」 → 「网络和互联网」
2. 选择「私人 DNS」
3. 选择「私人 DNS 提供商主机名」
4. 输入主机名：${e}
5. 保存并测试连接`:`# 该 Provider 不支持 DoT
1. 仅能通过 Wi-Fi 设置静态 DNS
2. 长按 Wi-Fi 名称 → 「修改网络」
3. 高级选项 → IP 设置 → 静态
4. DNS 1: ${s.ipv4[0]||""}
5. DNS 2: ${s.ipv4[1]||""}`},{title:"验证 DNS 设置",content:`# 使用 DNS 测试 App
- DNS Speed Test
- Network Info

# 或访问测试页面
https://dnssec.works/`}]}function W(s){const e=s.ipv4[0]||"",t=s.ipv4[1]||e;return[{title:"设置 DNS（LuCI Web界面）",content:`1. 登录 OpenWrt Web 界面
2. Network → Interfaces → WAN
3. Edit → Physical Settings
4. Override DNS servers:
   - DNS 1: ${e}
   - DNS 2: ${t}
5. Save & Apply`},{title:"设置 DNS（命令行）",content:`# 编辑 dnsmasq 配置
uci set dhcp.@dnsmasq[0].server='${e}'
uci add_list dhcp.@dnsmasq[0].server='${t}'
uci commit dhcp
/etc/init.d/dnsmasq restart`},{title:"DHCP 下发 DNS",content:`# 让 DHCP 客户端使用指定 DNS
uci set dhcp.lan.dhcp_option='6,${e},${t}'
uci commit dhcp
/etc/init.d/dnsmasq restart`},{title:"验证 DNS 设置",content:`# 查看 DNS 配置
cat /etc/config/dhcp | grep server

# 测试解析
dig google.com @${e}`}]}function T(s){const e=s.ipv4[0]||"",t=s.ipv4[1]||e;return[{title:"全局守护进程 DNS",content:`# 编辑 daemon.json
sudo nano /etc/docker/daemon.json

# 添加 DNS 配置：
{
  "dns": ["${e}", "${t}"]
}

# 重启 Docker
sudo systemctl restart docker`},{title:"单容器 DNS",content:`# 运行容器时指定 DNS
docker run --dns=${e} --dns=${t} your-image

# 或在 docker-compose.yml 中：
services:
  app:
    dns:
      - ${e}
      - ${t}`},{title:"验证 DNS 设置",content:`# 进入容器测试
docker exec -it container-id sh

# 测试解析
nslookup google.com

# 或
dig google.com`}]}function I(s){const e=s.doh||"";return[{title:"Chrome 设置 DoH",content:e?`1. 打开 chrome://settings/security
2. 向下滑动找到「使用安全 DNS」
3. 选择「选择 DNS 服务提供商」
4. 如果列表中有该 Provider，直接选择
5. 否则选择「自定义」 → 输入：
   ${e}`:"# 该 Provider 不支持 DoH"},{title:"Firefox 设置 DoH",content:e?`1. 打开 about:preferences#general
2. Network Settings → Settings
3. 启用「DNS over HTTPS」
4. 选择「自定义」 → 输入：
   ${e}`:"# 该 Provider 不支持 DoH"},{title:"Edge 设置 DoH",content:e?`1. 打开 edge://settingsprivacy
2. 向下滑动找到「使用安全 DNS」
3. 选择「选择 DNS 服务提供商」
4. 选择「自定义」 → 输入：
   ${e}`:"# 该 Provider 不支持 DoH"},{title:"验证 DoH 设置",content:`# 访问测试页面
https://dnssec.works/

# 查看浏览器安全 DNS 状态
Chrome: chrome://net-internals/#dns
Firefox: about:networking#dns`}]}function F(s){const e=s.ipv4[0]||"",t=s.ipv4[1]||e;return[{title:"通用路由器设置",content:`1. 登录路由器管理界面（通常是 192.168.1.1 或 192.168.0.1）
2. 找到「网络设置」或「WAN 设置」
3. 修改 DNS 服务器：
   - 主 DNS: ${e}
   - 备 DNS: ${t}
4. 保存并重启路由器`},{title:"常见路由器品牌设置路径",content:`# TP-Link: 网络 → WAN → DNS 设置
# 华硕: 网络 → WAN → DNS 设置
# 小米: 常用设置 → 上网设置 → DNS
# 华为: 更多功能 → 网络设置 → DNS
# Netgear: Advanced → Setup → DNS Setup`},{title:"验证路由器 DNS",content:`# 在连接该路由器的设备上测试
nslookup google.com

# 或访问测试页面
https://dnssec.works/`}]}async function S(s){try{await navigator.clipboard.writeText(s),N("已复制 ✓","ok")}catch{const e=document.createElement("textarea");e.value=s,e.style.position="fixed",e.style.left="-999999px",document.body.appendChild(e),e.select();try{document.execCommand("copy"),N("已复制 ✓","ok")}catch{N("复制失败","err")}document.body.removeChild(e)}}function N(s,e){u.value={show:!0,message:s,kind:e},setTimeout(()=>{u.value.show=!1},1500)}function x(s){m.value=s;const e=document.getElementById("config");e&&e.scrollIntoView({behavior:"smooth"})}return O(async()=>{try{const s=await fetch("/data/dns-providers.json");if(!s.ok)throw new Error("Failed to load DNS providers");D.value=await s.json()}catch{N("加载 DNS 数据失败","err")}}),(s,e)=>(i(),o("div",V,[E(j,{name:"toast-fade"},{default:L(()=>[u.value.show?(i(),o("div",{key:0,class:"dn-toast","data-kind":u.value.kind},d(u.value.message),9,M)):v("",!0)]),_:1}),e[10]||(e[10]=n("h1",{class:"page-title"},"🛰️ 公共 DNS 速查与配置",-1)),e[11]||(e[11]=n("p",{class:"page-intro"}," 收录国内外9大主流公共DNS服务商的完整地址信息，包括IPv4、IPv6、DNS over HTTPS (DoH) 和 DNS over TLS (DoT)，支持一键复制。同时提供macOS、Windows、Linux、iOS、Android、OpenWrt、Docker、浏览器、路由器9大平台的配置命令生成器，帮助您快速配置DNS。 ",-1)),n("section",Q,[e[4]||(e[4]=n("h2",{class:"section-title"},"📋 DNS Provider 速查表",-1)),e[5]||(e[5]=n("p",{class:"section-desc"}," 点击地址格子即可一键复制。点击右侧「配置 →」可跳转到对应 Provider 的配置生成器。 ",-1)),n("div",U,[(i(!0),o(c,null,a(D.value,t=>(i(),o("article",{key:t.id,class:"dn-card"},[n("header",z,[n("h3",J,d(t.name),1),n("p",K,d(t.description),1),n("div",X,[(i(!0),o(c,null,a(t.tags,r=>(i(),o("span",{key:r,class:"dn-tag"},d(r),1))),128))])]),n("div",Y,[e[0]||(e[0]=n("div",{class:"dn-grid-label"},"IPv4",-1)),(i(!0),o(c,null,a(t.ipv4,(r,g)=>(i(),o("button",{key:`ipv4-${g}`,class:"dn-grid-btn",onClick:H=>S(r)},d(r),9,Z))),128)),t.ipv4.length===0?(i(),o("div",ee,"不支持")):v("",!0)]),n("div",te,[e[1]||(e[1]=n("div",{class:"dn-grid-label"},"IPv6",-1)),(i(!0),o(c,null,a(t.ipv6,(r,g)=>(i(),o("button",{key:`ipv6-${g}`,class:"dn-grid-btn",onClick:H=>S(r)},d(r),9,se))),128)),t.ipv6.length===0?(i(),o("div",ne,"不支持")):v("",!0)]),t.doh?(i(),o("div",oe,[e[2]||(e[2]=n("div",{class:"dn-grid-label"},"DoH",-1)),n("button",{class:"dn-grid-btn dn-grid-btn-wide",onClick:r=>S(t.doh)},d(t.doh),9,ie)])):v("",!0),t.dot?(i(),o("div",re,[e[3]||(e[3]=n("div",{class:"dn-grid-label"},"DoT",-1)),n("button",{class:"dn-grid-btn dn-grid-btn-wide",onClick:r=>S(t.dot)},d(t.dot),9,de)])):v("",!0),n("footer",ce,[n("button",{class:"dn-apply-btn",onClick:r=>x(t.id)}," 配置 → ",8,ae),(i(!0),o(c,null,a(t.links,r=>(i(),o("a",{key:r.label,href:r.url,target:"_blank",rel:"nofollow noopener noreferrer",class:"dn-link"},d(r.label),9,le))),128))])]))),128))])]),n("section",ue,[e[8]||(e[8]=n("h2",{class:"section-title"},"🛠️ 配置生成器",-1)),n("div",Se,[e[6]||(e[6]=n("div",{class:"dn-tabs-label"},"选择操作系统：",-1)),n("div",ve,[(i(!0),o(c,null,a(h.value,t=>(i(),o("button",{key:t.id,class:y(["dn-tab",{active:p.value===t.id}]),onClick:r=>p.value=t.id},d(t.icon)+" "+d(t.name),11,De))),128))])]),n("div",pe,[e[7]||(e[7]=n("div",{class:"dn-tabs-label"},"选择 DNS Provider：",-1)),n("div",me,[(i(!0),o(c,null,a(D.value,t=>(i(),o("button",{key:t.id,class:y(["dn-tab",{active:m.value===t.id}]),onClick:r=>m.value=t.id},d(t.name),11,Ne))),128))])]),n("div",ge,[(i(!0),o(c,null,a(w.value,t=>(i(),o("div",{key:t.title,class:"dn-panel"},[n("h4",he,d(t.title),1),n("pre",fe,[n("code",null,d(t.content),1)]),n("button",{class:"dn-copy-btn",onClick:r=>S(t.content)}," 📋 复制 ",8,ke)]))),128))]),n("div",ye,[(i(!0),o(c,null,a(h.value,t=>B((i(),o("p",{key:t.id,class:"dn-desc-text"},d(t.description),1)),[[G,p.value===t.id]])),128))])]),n("section",_e,[e[9]||(e[9]=n("h2",{class:"section-title"},"❓ 常见问题",-1)),(i(!0),o(c,null,a(_.value,(t,r)=>(i(),o("div",{key:r,class:"dn-faq-item",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"},[n("details",we,[n("summary",$e,d(t.question),1),n("div",Ce,[n("p",Pe,d(t.answer),1)])])]))),128))])]))}}),Te=R(be,[["__scopeId","data-v-cc0398f5"]]);export{Te as default};
