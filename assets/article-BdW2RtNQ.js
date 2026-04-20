const e=`
<article class="bg-white text-gray-800 font-sans">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <header class="text-center mb-10 md:mb-16">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">还在手动一个个拼URL？试试网址批量生成工具</h1>
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
        输入一个带变量的网址模板，配合数字或字母规则，一键生成成百上千个链接。SEO优化、网站地图、数据采集，全靠它。
      </p>
    </header>

    <section class="mb-12">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 pb-2 border-b">什么是网址批量生成？</h2>
      <p class="text-lg leading-relaxed mb-4">
        想象一下，你的网站有1000个商品详情页，URL格式都是 <code class="bg-gray-100 px-1 rounded">https://example.com/product/1</code>、<code class="bg-gray-100 px-1 rounded">https://example.com/product/2</code> ... 一直到 <code class="bg-gray-100 px-1 rounded">https://example.com/product/1000</code>。
      </p>
      <p class="text-lg leading-relaxed mb-4">
        如果让你手动敲这1000个链接，估计要敲到天荒地老。而网址批量生成工具就是来解决这个问题的——你只需要告诉它"规则"，它就能自动帮你把所有链接都生成出来。
      </p>
      <div class="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 mt-6">
        <h3 class="text-xl font-bold mb-4 text-blue-700">核心原理：变量替换</h3>
        <p class="mb-4">工具的核心思想非常简单：</p>
        <ul class="space-y-3 pl-5 list-disc">
          <li><strong>定义模板：</strong> 在网址中用特殊标记 <code class="bg-gray-200 px-1">{*}</code> 标记出需要变化的部分</li>
          <li><strong>设置规则：</strong> 告诉工具这个位置应该填什么——是递增的数字（1到1000），还是循环的字母（a到z）</li>
          <li><strong>一键生成：</strong> 工具按照规则自动替换变量，输出所有可能的URL组合</li>
        </ul>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 pb-2 border-b">两种生成规则</h2>
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <div class="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-3 text-blue-700">数字规则</h3>
          <p class="mb-3">适用于编号、分页、ID类URL。</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>设置最小值和最大值</li>
            <li>可自定义步长间隔</li>
            <li>支持位数不足时自动补零</li>
          </ul>
          <div class="mt-4 p-3 bg-blue-50 rounded-lg text-sm font-mono">
            示例：page/{*} → page/001, page/002...page/100
          </div>
        </div>
        <div class="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-3 text-green-700">字母规则</h3>
          <p class="mb-3">适用于分类、标签等字母编码URL。</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>按26个英文字母顺序循环</li>
            <li>支持多字母组合（如 aa, ab, ac...）</li>
            <li>设置起始和结束字母串</li>
          </ul>
          <div class="mt-4 p-3 bg-green-50 rounded-lg text-sm font-mono">
            示例：cat/{*} → cat/a, cat/b...cat/z
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 pb-2 border-b">实际应用场景</h2>
      <div class="space-y-6">
        <div class="flex flex-col md:flex-row gap-6 items-start p-5 bg-gray-50 rounded-xl">
          <div class="md:w-1/4">
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">SEO优化</span>
          </div>
          <div class="md:w-3/4">
            <p class="text-base leading-relaxed">批量生成所有产品页面的URL列表，用于提交到搜索引擎站长平台，加快收录速度。</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-6 items-start p-5 bg-gray-50 rounded-xl">
          <div class="md:w-1/4">
            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">网站地图</span>
          </div>
          <div class="md:w-3/4">
            <p class="text-base leading-relaxed">快速生成sitemap.xml所需的完整URL集合，覆盖全站所有分页和分类页面。</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-6 items-start p-5 bg-gray-50 rounded-xl">
          <div class="md:w-1/4">
            <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">数据采集</span>
          </div>
          <div class="md:w-3/4">
            <p class="text-base leading-relaxed">爬虫开发前，先批量生成目标URL列表，再逐个请求采集数据。</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-6 items-start p-5 bg-gray-50 rounded-xl">
          <div class="md:w-1/4">
            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">接口测试</span>
          </div>
          <div class="md:w-3/4">
            <p class="text-base leading-relaxed">批量生成API接口地址，用于压力测试或批量验证接口可用性。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center py-10 border-t border-gray-200 mt-12">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6">开始使用</h2>
      <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        在上方输入带有 <code class="bg-gray-100 px-1">{*}</code> 变量的网址模板，选择数字或字母规则，点击生成即可获得完整的URL列表。
      </p>
    </section>

    <footer class="mt-12 pt-8 border-t border-gray-300 text-sm text-gray-600">
      <p class="mb-2">这篇文章可能也回答了这些问题：怎么批量生成URL链接？网址批量生成器怎么用？如何快速生成网站所有页面地址？SEO链接批量生成工具有哪些？</p>
    </footer>
  </div>
</article>
`;export{e as default};
