const s=`
<div class="text-gray-800 font-sans max-w-4xl mx-auto px-4 py-8">
  <!-- 标题 -->
  <h1 class="text-3xl md:text-4xl font-bold mb-6 text-center leading-tight">
    和朋友打游戏王还在口算？一个聪明工具帮你搞定所有记分烦恼
  </h1>

  <!-- 引言 -->
  <p class="text-lg mb-8 text-gray-600 text-center">
    你是否曾因复杂的生命值计算中断了紧张刺激的决斗？试试这个专为游戏王玩家设计的贴心助手。
  </p>

  <div class="bg-gray-50 border-l-4 border-blue-500 p-4 mb-8">
    <p class="text-gray-700">
      无论你是刚入坑的新手，还是经验丰富的老玩家，精准便捷地记录生命值，能让你的对局体验提升一个档次。
    </p>
  </div>

  <!-- 主体内容第一部分 -->
  <h2 class="text-2xl font-bold mt-10 mb-4 pt-6 border-t border-gray-200">
    为什么你需要一个专门的生命值计算器？
  </h2>
  <p class="mb-4">
    回想一下你和朋友的对战场景。一方发动了效果，另一方连锁，生命值就像坐过山车一样上上下下。这时候，你们是不是常常需要：
  </p>
  <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
    <li>暂停游戏，拿出手机计算器反复按</li>
    <li>担心自己算错，要求对方再算一遍</li>
    <li>用纸笔记录，但字迹潦草过后就忘</li>
    <li>在多人群战时，完全搞不清谁还剩多少生命值</li>
  </ul>
  <p class="mb-6">
    这些瞬间不仅打断了流畅的对战节奏，还可能引发不必要的争执。一个顺手好用的记分工具，能让你们完全沉浸于策略的较量中。
  </p>

  <!-- 功能介绍 -->
  <h2 class="text-2xl font-bold mt-10 mb-4 pt-6 border-t border-gray-200">
    它如何让你们的对战变得更轻松？
  </h2>

  <div class="mb-8">
    <h3 class="text-xl font-semibold mb-3 text-blue-600">一、多种模式，适应各种对局</h3>
    <p class="mb-4">
      就像游戏王有不同的玩法规则一样，这个工具也准备了不同的模式。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div class="bg-white p-4 border border-gray-200 rounded shadow-sm">
        <h4 class="font-bold mb-2">经典1对1</h4>
        <p class="text-sm text-gray-600">最常用的模式，标准8000点生命值开局，适合大部分日常切磋。</p>
      </div>
      <div class="bg-white p-4 border border-gray-200 rounded shadow-sm">
        <h4 class="font-bold mb-2">激动人心的2v2</h4>
        <p class="text-sm text-gray-600">团队战专用，每队共享16000点生命值，协同作战的体验拉满。</p>
      </div>
      <div class="bg-white p-4 border border-gray-200 rounded shadow-sm">
        <h4 class="font-bold mb-2">自由自定义</h4>
        <p class="text-sm text-gray-600">想玩点特别的？可以自由设定初始生命值，满足你的各种创意规则。</p>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h3 class="text-xl font-semibold mb-3 text-blue-600">二、操作简单，快如闪电</h3>
    <p class="mb-4">
      它的设计核心就是“快”。在决斗中，每一次计算都应该在瞬息间完成。
    </p>
    <ul class="list-disc pl-5 mb-4 space-y-2">
      <li><strong>核心操作：</strong>输入数值，点“增加”或“减少”，完成。就这么简单。</li>
      <li><strong>快捷按键：</strong>常用的+500、+1000，以及“生命值减半”都有独立按钮，一键到位。</li>
      <li><strong>为移动端优化：</strong>在手机上按钮够大，间距合适，不会误触，躺着玩也能轻松操作。</li>
    </ul>
  </div>

  <div class="mb-8">
    <h3 class="text-xl font-semibold mb-3 text-blue-600">三、像裁判一样自动记录</h3>
    <p class="mb-4">
      它不仅是计算器，更是一个称职的“对战记录员”。
    </p>
    <p class="mb-4">
      每一次生命值的变动，都会被精确地记录下来：什么时间、变化了多少、最终结果是多少。对局结束后，你可以清晰地回顾整个对战过程，复盘关键操作，或者解决“刚才是不是算错了”的疑问。
    </p>
  </div>

  <div class="mb-8">
    <h3 class="text-xl font-semibold mb-3 text-blue-600">四、贴心的细节设计</h3>
    <p class="mb-4">
      一些你可能没注意到，但用起来会感觉很舒服的功能：
    </p>
    <ul class="list-disc pl-5 space-y-2">
      <li><strong>记住你的习惯：</strong>如果你和固定的朋友玩，可以输入他们的名字，下次会自动提示，不用每次都输。</li>
      <li><strong>数据自动保存：</strong>就算不小心关闭了浏览器页面，或者手机来电话中断了游戏，重新打开，对局数据依然还在。</li>
      <li><strong>随时重新开始：</strong>一局打完，点一下“重开一局”，所有数据瞬间归位，准备迎接下一场决斗。</li>
    </ul>
  </div>

  <!-- 场景化描述 -->
  <h2 class="text-2xl font-bold mt-10 mb-4 pt-6 border-t border-gray-200">
    它会出现在你的哪些游戏场景里？
  </h2>
  <div class="bg-blue-50 p-6 rounded-lg mb-8">
    <p class="font-semibold mb-2">周末的朋友聚会：</p>
    <p class="mb-4 text-gray-700">大家围坐在一起，手机或平板放在桌子中央，所有人都能清楚看到当前生命值，争议少了，欢乐多了。</p>
    <p class="font-semibold mb-2">卡店的小型比赛：</p>
    <p class="mb-4 text-gray-700">除了正式的记分纸，用它作为辅助记录，能让你的计算更准确，避免因分数错误影响比赛成绩。</p>
    <p class="font-semibold mb-2">家庭内的亲子娱乐：</p>
    <p class="text-gray-700">教孩子玩游戏王时，用它来管理分数，可以让规则讲解更直观，孩子也更容易理解和上手。</p>
  </div>

  <!-- 总结与引导 -->
  <h2 class="text-2xl font-bold mt-10 mb-4 pt-6 border-t border-gray-200">
    告别心算和纸笔，让工具服务于快乐
  </h2>
  <p class="mb-6">
    游戏王最大的魅力在于千变万化的战术和扣人心弦的博弈。一个好的工具，应该默默解决掉那些繁琐的后勤工作，让你能更专注地享受思考与对决的乐趣本身。
  </p>
  <p class="mb-10">
    这个游戏王生命值计算器，就像一个永远在线、绝对公正的裁判助理。它不改变任何游戏规则，只是让你遵守规则的过程变得异常顺畅。下次决斗开始时，不妨试一试，你可能会发现，你们的对局因此变得更加专注和愉快。
  </p>

  <div class="text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
    <p>希望这个小工具能成为你卡组之外的又一个得力助手，祝你决斗愉快！</p>
  </div>
</div>
`;export{s as default};
