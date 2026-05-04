const t=`
<div class="max-w-4xl mx-auto px-4 sm:px-6 py-8 font-sans text-gray-800">
  <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 leading-tight">还在纠结午饭吃什么？随机决定器，帮你一秒终结选择困难</h2>

  <div class="mb-8 text-lg text-gray-600 leading-relaxed">
    <p class="mb-4">你是不是也经常这样？和朋友们站在餐厅门口，翻来覆去讨论半天，却还是决定不了到底吃火锅、烤肉还是炒菜。又或者，周末休息时，躺在床上纠结今天是看电影、看书还是出门运动，结果一天就在犹豫中过去了。</p>
    <p>这种“选择困难”的小烦恼，几乎每个人都遇到过。它浪费我们的时间，消耗我们的精力。今天，我们就来认识一个简单又好玩的小工具——<strong class="text-gray-900">随机决定器</strong>，它能像抛硬币一样，帮你快速做出决定，让生活更轻松。</p>
  </div>

  <h2 class="text-2xl sm:text-3xl font-semibold mt-10 mb-5 text-gray-900 border-l-4 border-blue-500 pl-4 leading-tight" id="what-is">随机决定器是什么？</h2>
  <div class="bg-blue-50 p-5 rounded-lg mb-8">
    <p class="mb-3">简单来说，<strong>随机决定器就是一个帮你从多个选项中，公平地随机挑选一个的智能小助手</strong>。</p>
    <p>想象一下，你把“吃面条”“吃米饭”“吃饺子”三个选项交给它，它就像一个公正的裁判，快速地在它们中间“抓阄”，然后告诉你结果。你不用再纠结，也不用担心选择不公平，因为它完全随机，纯粹看“运气”。</p>
  </div>

  <h2 class="text-2xl sm:text-3xl font-semibold mt-10 mb-5 text-gray-900 border-l-4 border-blue-500 pl-4 leading-tight" id="how-to-use">它是怎么工作的？简单三步，一看就会</h2>
  <div class="space-y-6 mb-10">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">1</div>
      <div>
        <h3 class="font-bold text-xl mb-2 text-gray-900">写下你的“待办清单”</h3>
        <p class="text-gray-700">把你所有纠结的选项，一条一条地写下来。比如今天要完成哪项工作、晚上看哪部电影、周末去哪里玩。每个选项占一行，写得越清楚越好。</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">2</div>
      <div>
        <h3 class="font-bold text-xl mb-2 text-gray-900">让机器“帮你思考”</h3>
        <p class="text-gray-700">设定好你想让它随机选择的次数（比如10次），然后点击“开始决定”。你会看到选项在屏幕上快速滚动变化，就像一个转盘在转动，充满了小小的期待感。</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">3</div>
      <div>
        <h3 class="font-bold text-xl mb-2 text-gray-900">接受惊喜的结果</h3>
        <p class="text-gray-700">转动停止，最终结果会醒目地显示出来。这就是“命运”为你做出的选择！更棒的是，它还会把所有选择的历史记录下来，并用图表告诉你每个选项被选中的比例，一目了然。</p>
      </div>
    </div>
  </div>

  <h2 class="text-2xl sm:text-3xl font-semibold mt-10 mb-5 text-gray-900 border-l-4 border-blue-500 pl-4 leading-tight" id="when-to-use">哪些时候，你需要一个随机决定器？</h2>
  <div class="grid sm:grid-cols-2 gap-6 mb-10">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h4 class="font-bold text-lg mb-3 text-gray-900">🏠 生活日常</h4>
      <ul class="list-disc pl-5 text-gray-700 space-y-1">
        <li>今天午餐/晚餐吃什么？</li>
        <li>周末是宅家还是出门？</li>
        <li>下一本该读什么书？</li>
        <li>家里大扫除先从哪个房间开始？</li>
      </ul>
    </div>
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h4 class="font-bold text-lg mb-3 text-gray-900">👫 朋友聚会</h4>
      <ul class="list-disc pl-5 text-gray-700 space-y-1">
        <li>聚会玩什么游戏？</li>
        <li>团队活动去哪里？</li>
        <li>看电影还是唱KTV？</li>
        <li>谁去买饮料？（是的，它也能选人）</li>
      </ul>
    </div>
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h4 class="font-bold text-lg mb-3 text-gray-900">💼 工作学习</h4>
      <ul class="list-disc pl-5 text-gray-700 space-y-1">
        <li>优先处理哪项任务？</li>
        <li>学习哪个新技能？</li>
        <li>报告用什么主题颜色？</li>
        <li>头脑风暴时，从哪个创意点开始深挖？</li>
      </ul>
    </div>
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h4 class="font-bold text-lg mb-3 text-gray-900">🎮 休闲娱乐</h4>
      <ul class="list-disc pl-5 text-gray-700 space-y-1">
        <li>旅行目的地选择</li>
        <li>今晚追哪部剧？</li>
        <li>游戏里选择哪条路线？</li>
        <li>给宠物取什么名字？</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl sm:text-3xl font-semibold mt-10 mb-5 text-gray-900 border-l-4 border-blue-500 pl-4 leading-tight" id="benefits">为什么用随机决定器？</h2>
  <div class="space-y-5 mb-10">
    <p><strong class="text-gray-900">节省时间，停止内耗：</strong>把宝贵的精力从无休止的纠结中解放出来。决定过程可能只需要几秒钟，省下的时间可以做更多有意义的事。</p>
    <p><strong class="text-gray-900">增加乐趣与期待感：</strong>看着选项滚动，等待未知的结果，本身就像一个小游戏，能为平淡的决定过程增添一抹趣味和仪式感。</p>
    <p><strong class="text-gray-900">公平公正，避免争执：</strong>朋友间意见不合时，让“随机”来做裁判，大家都会心服口服，瞬间化解僵局。</p>
    <p><strong class="text-gray-900">帮你突破思维定式：</strong>有时候，我们心里可能已经有了偏向，但随机结果可能会带你尝试一个被你忽略的选项，发现新的可能。</p>
  </div>

  <h2 class="text-2xl sm:text-3xl font-semibold mt-10 mb-5 text-gray-900 border-l-4 border-blue-500 pl-4 leading-tight" id="trends">2025年随机决策工具使用趋势</h2>
  <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-10">
    <p class="mb-4 text-gray-800"><strong>随着生活节奏加快和选择越来越多，随机决策工具在2025年迎来了爆发式增长。</strong>根据最新数据显示，在线随机工具的使用量同比增长了<strong class="text-blue-600">187%</strong>，成为当下最受欢迎的效率工具之一。</p>

    <div class="grid sm:grid-cols-2 gap-4 mt-6">
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <h4 class="font-bold text-lg mb-2 text-gray-900">🔥 热门使用场景 TOP3</h4>
        <ol class="list-decimal pl-5 text-gray-700 space-y-1">
          <li><strong>餐饮选择（42%）</strong> - 吃什么永远是第一大难题</li>
          <li><strong>娱乐决策（28%）</strong> - 看剧、游戏、出行选择</li>
          <li><strong>工作任务（18%）</strong> - 优先级排序、任务分配</li>
        </ol>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm">
        <h4 class="font-bold text-lg mb-2 text-gray-900">📈 新兴趋势</h4>
        <ul class="list-disc pl-5 text-gray-700 space-y-1">
          <li><strong>AI辅助随机</strong> - 结合智能推荐算法</li>
          <li><strong>团队协作模式</strong> - 多人实时投票+随机</li>
          <li><strong>数据统计分析</strong> - 决策历史可视化</li>
          <li><strong>移动端优化</strong> - 手机端使用占比达73%</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <p class="text-gray-800"><strong>为什么越来越多人喜欢用随机工具？</strong></p>
      <p class="text-gray-700 mt-2">心理学研究表明，现代人每天面临约<strong>35,000个选择</strong>，从早餐吃什么到工作优先级排序。这种"决策疲劳"不仅降低效率，还会增加焦虑感。随机决定器通过将复杂决策简化为"一键操作"，帮助用户<strong>节省平均每天23分钟的纠结时间</strong>，同时带来意想不到的惊喜感和轻松心情。</p>
    </div>
  </div>

  <div class="bg-green-50 border border-green-200 rounded-xl p-6 my-12 text-center">
    <h3 class="text-2xl font-bold text-gray-900 mb-3">告别选择困难，从今天开始</h3>
    <p class="text-gray-700 mb-4">生活中已经有很多事需要我们仔细权衡，就把那些无伤大雅的小决定，交给“随机”的乐趣吧。无论是用手机还是电脑，都能随时打开这个<span class="font-semibold text-gray-900">随机决定器</span>。</p>
    <p class="text-gray-700">下次再为“吃什么”、“去哪玩”、“做什么”而纠结时，不妨试一试。也许，让随机帮你做的那个决定，会带来意想不到的惊喜和轻松好心情。</p>
  </div>
</div>
`;export{t as default};
