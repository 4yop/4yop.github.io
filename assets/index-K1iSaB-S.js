import{_ as d,o as x,c as n,e,f as l,w as r,h as s,a,r as i}from"./index-CC7-jPTn.js";const p={},g={class:"mx-auto max-w-4xl px-4 pt-8 pb-12"},b={class:"rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"},m={class:"mt-6 flex flex-wrap gap-3"},c={class:"mt-3 text-sm leading-7 text-gray-600 sm:text-base"},y={class:"mt-10 rounded-xl bg-blue-50 border border-blue-100 p-5 sm:p-6"},u={class:"mt-2 text-sm leading-7 text-blue-800/80"};function w(f,t){const o=i("router-link");return x(),n("section",g,[e("article",b,[t[9]||(t[9]=e("p",{class:"mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"},"SEO 指南",-1)),t[10]||(t[10]=e("h1",{class:"text-2xl font-bold leading-tight text-gray-900 sm:text-3xl"},"Robots.txt 编写检查清单：SEO 必备的爬虫控制指南",-1)),t[11]||(t[11]=e("p",{class:"mt-4 text-sm leading-7 text-gray-600 sm:text-base"},' Robots.txt 是网站与搜索引擎爬虫之间的"沟通协议"。一份编写规范的 robots.txt 文件， 能够有效引导搜索引擎抓取你希望被收录的页面，同时屏蔽无意义的重复内容、后台管理目录和临时文件。 本文将从基础语法、常见误区、上线前检查清单到实战案例，为你提供一份完整的 robots.txt 编写指南。 ',-1)),e("div",m,[l(o,{to:"/dev/robots-txt-generator/",class:"inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"},{default:r(()=>[...t[0]||(t[0]=[s(" 在线生成 robots.txt ",-1)])]),_:1}),l(o,{to:"/article/",class:"inline-flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-blue-200 hover:text-blue-600"},{default:r(()=>[...t[1]||(t[1]=[s(" 返回文章列表 ",-1)])]),_:1})]),t[12]||(t[12]=a(`<h2 id="what-is-robots" class="mt-10 text-xl font-semibold text-gray-900">什么是 robots.txt？为什么对 SEO 至关重要</h2><p class="mt-3 text-sm leading-7 text-gray-600 sm:text-base"> robots.txt 是一个放置在网站根目录下的纯文本文件（例如 <code class="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-red-600">https://example.com/robots.txt</code>）， 用于告诉搜索引擎爬虫哪些页面可以抓取、哪些路径应当忽略。根据 <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-700">Google 官方文档</a>， robots.txt 是搜索引擎与网站之间最基础的交流方式之一。 </p><p class="mt-3 text-sm leading-7 text-gray-600 sm:text-base"> 合理配置 robots.txt 的核心价值体现在三个方面：第一，避免爬虫浪费抓取配额在无价值的页面上（如搜索结果页、分页参数页、打印版本页）； 第二，防止敏感信息或未完成页面被意外收录；第三，通过 Sitemap 指令主动引导爬虫发现重要内容。 对于中大型站点而言，一份精心编写的 robots.txt 是 SEO 基础设施中不可或缺的一环。 </p><h2 id="basic-syntax" class="mt-10 text-xl font-semibold text-gray-900">robots.txt 基础语法详解</h2><p class="mt-3 text-sm leading-7 text-gray-600 sm:text-base"> robots.txt 文件由若干条&quot;记录&quot;组成，每条记录包含 User-agent（指定目标爬虫）和一系列指令。 最常用的五个指令分别是：User-agent、Disallow、Allow、Sitemap 和 Crawl-delay。下面逐一说明： </p><div class="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6"><pre class="overflow-x-auto text-xs leading-6 text-gray-700 sm:text-sm"><code># robots.txt 基础示例

# 针对所有爬虫
User-agent: *
Disallow: /admin/
Disallow: /tmp/
Disallow: /search?q=*
Allow: /

# 仅针对百度蜘蛛
User-agent: Baiduspider
Disallow: /api/
Crawl-delay: 1

# 站点地图地址
Sitemap: https://example.com/sitemap.xml</code></pre></div><ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 sm:text-base"><li><strong>User-agent: *</strong> -- 通配符，表示规则适用于所有爬虫。</li><li><strong>Disallow: /path/</strong> -- 告诉爬虫不要抓取该路径及其子路径。注意结尾斜杠的含义：<code class="rounded bg-gray-100 px-1 py-0.5 text-xs">/admin</code> 和 <code class="rounded bg-gray-100 px-1 py-0.5 text-xs">/admin/</code> 匹配范围不同。</li><li><strong>Allow: /path/</strong> -- 明确允许抓取某个路径，通常用于在 Disallow 规则下开放特定子目录。</li><li><strong>Sitemap:</strong> -- 指向站点地图文件的完整 URL，帮助爬虫快速发现公开页面。</li><li><strong>Crawl-delay:</strong> -- 请求两次抓取之间的秒数延迟（Google 已忽略此指令，但部分搜索引擎仍支持）。</li></ul><h2 id="common-mistakes" class="mt-10 text-xl font-semibold text-gray-900">高频误区与避坑指南</h2><p class="mt-3 text-sm leading-7 text-gray-600 sm:text-base"> 在实际工作中，我们见过大量因 robots.txt 配置错误导致 SEO 受损的案例。以下是出现频率最高的五类问题： </p><div class="mt-4 space-y-4"><div class="rounded-lg border-l-4 border-red-400 bg-red-50 p-4"><p class="text-sm font-semibold text-red-800">误区一：误用全站 Disallow 导致整站无法收录</p><p class="mt-1 text-sm leading-6 text-red-700"> 上线时从测试环境复制了 <code class="rounded bg-white px-1 py-0.5 text-xs">Disallow: /</code> 却忘记删除，导致所有页面从索引中消失。 这是最致命的错误之一，务必在部署前逐行审查。 </p></div><div class="rounded-lg border-l-4 border-orange-400 bg-orange-50 p-4"><p class="text-sm font-semibold text-orange-800">误区二：混淆大小写导致规则失效</p><p class="mt-1 text-sm leading-6 text-orange-700"> robots.txt 中的路径匹配是区分大小写的。如果你的 URL 包含大写字符（如 <code class="rounded bg-white px-1 py-0.5 text-xs">/Admin/</code>）， 而 robots.txt 写的是小写，则规则不会生效。 </p></div><div class="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4"><p class="text-sm font-semibold text-yellow-800">误区三：把 robots.txt 当作安全屏障</p><p class="mt-1 text-sm leading-6 text-yellow-700"> robots.txt 只是&quot;君子协定&quot;，它不能阻止用户直接访问 URL，也不能阻止其他网站通过外链暴露你的页面地址。 敏感内容必须依赖服务端鉴权、登录验证或 noindex 标签来实现真正的保护。 </p></div><div class="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4"><p class="text-sm font-semibold text-blue-800">误区四：Disallow 后期望页面立即从索引消失</p><p class="mt-1 text-sm leading-6 text-blue-700"> Disallow 只限制&quot;未来抓取&quot;，已收录的页面不会自动删除。如需移除已有索引，应配合 Google Search Console 的移除工具或页面级 noindex 使用。 </p></div><div class="rounded-lg border-l-4 border-gray-400 bg-gray-50 p-4"><p class="text-sm font-semibold text-gray-800">误区五：忽略通配符 * 和结束符 $ 的正确用法</p><p class="mt-1 text-sm leading-6 text-gray-700"> Google 支持 <code class="rounded bg-white px-1 py-0.5 text-xs">*</code> 匹配任意字符序列、<code class="rounded bg-white px-1 py-0.5 text-xs">$</code> 表示 URL 结尾。 例如 <code class="rounded bg-white px-1 py-0.5 text-xs">Disallow: /*.pdf$</code> 可以精确屏蔽所有 PDF 文件。 </p></div></div><h2 id="checklist" class="mt-10 text-xl font-semibold text-gray-900">上线前检查清单（Checklist）</h2><p class="mt-3 text-sm leading-7 text-gray-600 sm:text-base"> 每次修改 robots.txt 后，建议按照以下清单逐项核对，确保配置无误后再部署上线： </p><div class="mt-4 overflow-hidden rounded-xl border border-gray-200"><table class="w-full text-left text-sm"><thead class="bg-gray-50"><tr><th class="px-4 py-3 font-semibold text-gray-900">检查项</th><th class="px-4 py-3 font-semibold text-gray-900">操作方法</th></tr></thead><tbody class="divide-y divide-gray-100"><tr><td class="px-4 py-3 text-gray-700">文件可访问性</td><td class="px-4 py-3 text-gray-600">浏览器直接访问 <code class="rounded bg-gray-100 px-1 py-0.5 text-xs">域名/robots.txt</code>，确认返回 200 且内容正确</td></tr><tr class="bg-gray-50/50"><td class="px-4 py-3 text-gray-700">无全站 Disallow</td><td class="px-4 py-3 text-gray-600">全文搜索 <code class="rounded bg-gray-100 px-1 py-0.5 text-xs">Disallow: /</code>，确保不存在或已被注释</td></tr><tr><td class="px-4 py-3 text-gray-700">路径大小写一致</td><td class="px-4 py-3 text-gray-600">对比实际 URL 路径与 robots.txt 中的写法，确保大小写完全一致</td></tr><tr class="bg-gray-50/50"><td class="px-4 py-3 text-gray-700">Sitemap 地址有效</td><td class="px-4 py-3 text-gray-600">点击 Sitemap URL，确认能正常打开且返回 XML 内容</td></tr><tr><td class="px-4 py-3 text-gray-700">编码格式为 UTF-8</td><td class="px-4 py-3 text-gray-600">使用文本编辑器确认文件保存为 UTF-8 无 BOM 格式</td></tr><tr class="bg-gray-50/50"><td class="px-4 py-3 text-gray-700">Google 测试工具验证</td><td class="px-4 py-3 text-gray-600">在 Google Search Console 的 robots.txt 测试工具中模拟抓取关键页面</td></tr><tr><td class="px-4 py-3 text-gray-700">移动端适配</td><td class="px-4 py-3 text-gray-600">确认移动端专属路径（如 <code class="rounded bg-gray-100 px-1 py-0.5 text-xs">/m/</code>）未被误屏蔽</td></tr></tbody></table></div><h2 id="best-practice-example" class="mt-10 text-xl font-semibold text-gray-900">最佳实践：一份生产级 robots.txt 模板</h2>`,14)),e("p",c,[t[3]||(t[3]=s(" 下面是一份适用于大多数中小型站点的 robots.txt 参考模板，你可以根据自身业务需求进行调整。 如果不想手动编写，也可以使用我们的 ",-1)),l(o,{to:"/dev/robots-txt-generator/",class:"text-blue-600 underline hover:text-blue-700"},{default:r(()=>[...t[2]||(t[2]=[s("在线 robots.txt 生成器",-1)])]),_:1}),t[4]||(t[4]=s(" 一键生成。 ",-1))]),t[13]||(t[13]=a(`<div class="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6"><pre class="overflow-x-auto text-xs leading-6 text-gray-700 sm:text-sm"><code># ============================================================
# robots.txt - 生产环境模板
# 最后更新时间请根据实际情况填写
# ============================================================

# --- 全局规则：适用于所有爬虫 ---
User-agent: *

# 屏蔽后台管理与系统目录
Disallow: /admin/
Disallow: /manage/
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /cgi-bin/
Disallow: /tmp/

# 屏蔽搜索结果页与分页参数（避免重复内容）
Disallow: /search
Disallow: /s?
Disallow: /*?page=*
Disallow: /*?sort=*
Disallow: /*?filter=*

# 屏蔽动态会话ID参数
Disallow: /*?sessionid=*
Disallow: /*?PHPSESSID=*

# 屏蔽打印版本与PDF归档
Disallow: /print/
Disallow: /*?print=1
Disallow: /*.pdf$

# 允许抓取静态资源与公共API
Allow: /assets/css/
Allow: /assets/js/
Allow: /images/
Allow: /api/public/

# 允许首页及主要栏目
Allow: /
Allow: /about/
Allow: /products/
Allow: /blog/

# --- 百度专用规则 ---
User-agent: Baiduspider
Crawl-delay: 1
Disallow: /internal/

# --- 站点地图 ---
Sitemap: https://www.example.com/sitemap.xml
Sitemap: https://www.example.com/sitemap-news.xml</code></pre></div><h2 id="faq" class="mt-10 text-xl font-semibold text-gray-900">常见问题解答（FAQ）</h2><div class="mt-4 space-y-4"><details class="group rounded-xl border border-gray-200 bg-white p-4 open:bg-blue-50/30"><summary class="cursor-pointer text-sm font-semibold text-gray-900 group-open:text-blue-700"> Q1：robots.txt 写错了，多久才能恢复？ </summary><p class="mt-3 text-sm leading-7 text-gray-600"> 修复后，Google 通常会在下次重新抓取 robots.txt 时（一般数小时到一两天）识别新规则。 但已被 Disallow 阻止期间错过的抓取不会自动补回。建议修复后通过 Google Search Console 手动请求重新抓取关键页面， 并配合 sitemap 重新提交以加速恢复进程。根据 <a href="https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-700">Google 官方建议</a>， 修改后应尽快在 Search Console 中测试生效情况。 </p></details><details class="group rounded-xl border border-gray-200 bg-white p-4 open:bg-blue-50/30"><summary class="cursor-pointer text-sm font-semibold text-gray-900 group-open:text-blue-700"> Q2：Disallow 了某个页面，但它在搜索结果中仍然存在，怎么办？ </summary><p class="mt-3 text-sm leading-7 text-gray-600"> Disallow 只阻止&quot;抓取&quot;，不等于&quot;删除索引&quot;。如果页面已被收录，需要采取额外措施： （1）在页面 HTML 中添加 <code class="rounded bg-gray-100 px-1 py-0.5 text-xs">&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code> 标签； （2）在 Google Search Console 中使用&quot;移除过期内容&quot;工具请求临时隐藏； （3）返回 404 或 410 状态码让搜索引擎自然淘汰该 URL。 三种方法可以组合使用以达到最快效果。 </p></details><details class="group rounded-xl border border-gray-200 bg-white p-4 open:bg-blue-50/30"><summary class="cursor-pointer text-sm font-semibold text-gray-900 group-open:text-blue-700"> Q3：是否应该为每个搜索引擎分别写不同的 User-agent 规则？ </summary><p class="mt-3 text-sm leading-7 text-gray-600"> 大多数情况下不需要。使用通配符 <code class="rounded bg-gray-100 px-1 py-0.5 text-xs">User-agent: *</code> 即可覆盖主流搜索引擎。 只有以下场景才考虑单独设置：（1）某搜索引擎的爬虫行为异常，需要单独限制抓取频率（如 Crawl-delay）； （2）希望对不同搜索引擎展示不同内容（不推荐，可能被视为欺骗行为）； （3）需要屏蔽特定已知的不良爬虫。对于常规 SEO 优化，保持简洁的全局规则即可。 </p></details><details class="group rounded-xl border border-gray-200 bg-white p-4 open:bg-blue-50/30"><summary class="cursor-pointer text-sm font-semibold text-gray-900 group-open:text-blue-700"> Q4：robots.txt 文件有大小限制吗？最多能写多少条规则？ </summary><p class="mt-3 text-sm leading-7 text-gray-600"> 根据 Google 官方规范，robots.txt 文件大小上限为 500KB（字节），远超绝大多数站点的实际需求。 如果你的规则数量接近这个限制，说明网站结构可能过于复杂，建议优先优化 URL 架构而非继续堆砌规则。 另外，Google 只读取前 500KB 的内容，超出部分会被忽略，因此务必将最重要的规则放在文件开头。 </p></details><details class="group rounded-xl border border-gray-200 bg-white p-4 open:bg-blue-50/30"><summary class="cursor-pointer text-sm font-semibold text-gray-900 group-open:text-blue-700"> Q5：没有 robots.txt 文件会有什么影响？ </summary><p class="mt-3 text-sm leading-7 text-gray-600"> 如果网站根目录下不存在 robots.txt 文件，搜索引擎会默认允许抓取所有页面。 对于简单的个人博客或小型官网，这通常不会有问题。但对于包含后台管理系统、API 接口、临时文件或大量参数页的中大型站点来说， 缺失 robots.txt 可能导致爬虫浪费配额抓取无意义页面，甚至意外收录敏感路径。 因此，无论站点规模如何，都建议至少放置一份基础的 robots.txt 文件作为标准实践。 </p></details></div>`,3)),e("div",y,[t[8]||(t[8]=e("p",{class:"text-sm font-semibold text-blue-900"},"总结与下一步行动",-1)),e("p",u,[t[6]||(t[6]=s(" robots.txt 是 SEO 工作中最基础却最容易被忽视的环节之一。一份规范、清晰的 robots.txt 文件， 能够为你的网站建立良好的抓取秩序，避免不必要的索引混乱和配额浪费。 建议你现在就检查自己网站的 robots.txt 文件，对照本文的检查清单逐项核实。 如果你需要快速生成一份符合规范的 robots.txt 文件，欢迎使用我们的 ",-1)),l(o,{to:"/dev/robots-txt-generator/",class:"font-medium underline hover:text-blue-900"},{default:r(()=>[...t[5]||(t[5]=[s("在线 robots.txt 生成工具",-1)])]),_:1}),t[7]||(t[7]=s("， 几步操作即可完成配置并下载。 ",-1))])])])])}const v=d(p,[["render",w]]);export{v as default};
