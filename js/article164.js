const t=`<div class="max-w-4xl mx-auto px-4 py-8 text-gray-800">
  <!-- 文章标题 -->
  <h1 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">还在为搜不到想要的结果烦恼？这个多引擎搜索工具帮你精准定位</h1>
  <!-- 导语 -->
  <p class="text-lg text-center text-gray-600 mb-8">想找资料，却总被广告淹没？搜出来的东西牛头不对马嘴？别急，试试这款能同时用百度、谷歌、必应搜索的小工具，还有几十种“搜索暗号”帮你直达答案。</p>

  <!-- 正文部分 -->
  <div class="space-y-8">

    <!-- 第一部分：搜索痛点 -->
    <section>
      <h2 class="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-500 pl-3">为什么你总觉得“搜不到”</h2>
      <p class="mb-3">你有没有这样的经历：打开百度输入一个词，前几页全是广告和推广，翻半天也找不到真正有用的信息。或者想找一份PDF文档、一个政府网站的文件，结果出来一堆不相关的网页。这不是你搜索的方式不对，而是普通的搜索框太“笨”了，它听不懂你的真实需求。</p>
      <p class="mb-3">其实，搜索引擎自己都提供了一些“高级指令”，就像给搜索框下的暗号，可以让它只给你想要的东西。但大多数人不知道这些指令，或者觉得记起来太麻烦。今天要说的这个工具，就是把所有搜索引擎的“暗号”都集成在一起，你只需要点一点，就能用上这些专业功能。</p>
    </section>

    <!-- 第二部分：什么是多引擎智能搜索工具 -->
    <section>
      <h2 class="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-500 pl-3">一个工具，三个搜索引擎</h2>
      <p class="mb-3">这个小工具最直观的地方，就是它把百度、谷歌、必应都放在了一起。你不需要记住三个网址，也不用在不同标签页之间切来切去。想用哪个，点一下按钮就行。</p>
      <ul class="list-disc pl-6 mb-3 space-y-1">
        <li><span class="font-medium text-blue-600">百度</span>：适合搜中文内容，尤其是国内网站的信息。</li>
        <li><span class="font-medium text-blue-600">谷歌</span>：全球最大的搜索引擎，搜外文资料、学术内容特别好用。</li>
        <li><span class="font-medium text-blue-600">必应</span>：微软家的，界面干净，搜图片和视频质量很高。</li>
      </ul>
      <p>你可以根据自己需要，随时切换。比如找国内的政策文件用百度，查国外的论文用谷歌，找高清图片用必应。一个入口全搞定。</p>
    </section>

    <!-- 第三部分：高级搜索指令，像说话一样精准 -->
    <section>
      <h2 class="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-500 pl-3">“搜索暗号”让结果直击要害</h2>
      <p class="mb-3">这个工具最厉害的地方，是它自带了几十种“搜索暗号”——也就是搜索引擎的高级指令。你不用死记硬背，因为工具里都列出来了，点一下就能用。下面举几个生活中常见的例子：</p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <!-- 例子1：搜特定网站 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-medium text-lg mb-2 text-gray-800">只想看某个网站里的内容？用“site:”</h3>
          <p class="text-sm text-gray-600">比如你想在知乎上搜“人工智能”，但不想看其他网站，就在关键词前加上<code class="bg-gray-200 px-1 rounded">site:zhihu.com 人工智能</code>。工具里点一下“site:”按钮，再输入网址和关键词就行。</p>
        </div>
        <!-- 例子2：搜特定文件 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-medium text-lg mb-2 text-gray-800">想要PDF文档？用“filetype:pdf”</h3>
          <p class="text-sm text-gray-600">找工作简历模板、学术论文，往往PDF格式更规范。输入<code class="bg-gray-200 px-1 rounded">filetype:pdf 简历模板</code>，结果就全是PDF文件，省去筛选时间。</p>
        </div>
        <!-- 例子3：标题中含有关键词 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-medium text-lg mb-2 text-gray-800">想找标题里带“通知”的网页？用“intitle:”</h3>
          <p class="text-sm text-gray-600">如果关键词出现在网页标题里，通常相关性更高。比如搜<code class="bg-gray-200 px-1 rounded">intitle:放假通知</code>，出来的都是标题中明确有“放假通知”的页面。</p>
        </div>
        <!-- 例子4：排除不想要的关键词 -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-medium text-lg mb-2 text-gray-800">想排除广告？用减号“-”</h3>
          <p class="text-sm text-gray-600">搜“手机”，但不想看电商广告，可以搜<code class="bg-gray-200 px-1 rounded">手机 -京东 -淘宝</code>，结果里就不会出现包含“京东”“淘宝”的页面。</p>
        </div>
      </div>
      <p class="mt-4">还有更多指令，比如搜索特定时间范围、搜索某个网页的缓存、搜索相关网站等等，工具右侧的“高级搜索指令说明”里都列得清清楚楚，点一下就能复制或插入，非常方便。</p>
    </section>

    <!-- 第四部分：实际操作体验 -->
    <section>
      <h2 class="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-500 pl-3">怎么用？三步搞定</h2>
      <ol class="list-decimal pl-6 mb-3 space-y-2">
        <li><strong>选引擎</strong>：在百度、谷歌、必应中选一个你需要的。</li>
        <li><strong>输关键词</strong>：直接在搜索框里打字，如果要用高级指令，可以点下方的快捷按钮（比如“site:”），指令会自动填入，你再接着输入网址或关键词就行。</li>
        <li><strong>点搜索</strong>：点击右侧的搜索按钮（颜色会随引擎变化），结果就会在新标签页打开。</li>
      </ol>
      <p>就这么简单。而且你每次搜索，工具都会帮你记录下来（存在你自己的浏览器里，别人看不到）。以后想重复搜同样内容，点一下历史记录就行，不用重新打字。</p>
    </section>

    <!-- 第五部分：小细节让搜索更舒心 -->
    <section>
      <h2 class="text-2xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-500 pl-3">贴心的细节</h2>
      <ul class="list-disc pl-6 mb-3 space-y-1">
        <li><strong>输入提示</strong>：当你开始打字，工具会联想你可能想用的高级指令，选一个就直接填好。</li>
        <li><strong>历史记录</strong>：自动保存最近50次搜索，还能按引擎分类，点一下就能重新搜索。</li>
        <li><strong>使用统计</strong>：你可以看到自己总共搜了多少次，哪个引擎用得最多，有点小成就感。</li>
        <li><strong>移动端也能用</strong>：在手机上打开，布局会自动变成上下结构，按钮大小合适，很好点。</li>
      </ul>
    </section>

    <!-- 第六部分：总结 -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-2xl font-semibold mb-3 text-gray-900">从现在起，让搜索更聪明</h2>
      <p class="mb-3">以前你可能觉得“搜不到”是因为自己不会搜，其实只是没遇到好工具。这个多引擎智能搜索工具，把三大搜索引擎和几十种高级指令集合在一起，不用背、不用记，点一点就能用上“专业搜索”功能。</p>
      <p>下次想查资料、找文档、搜图片，不妨试试它。你会发现，原来答案可以离你那么近。</p>
    </section>

    <!-- 附加提示（非营销，纯说明） -->
    <p class="text-sm text-gray-500 text-center pt-4">—— 一个让搜索回归纯粹的小工具，不收集任何个人信息，所有历史记录只保存在你的浏览器中。</p>

  </div>
</div>`;export{t as default};
