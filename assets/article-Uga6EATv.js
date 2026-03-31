const s=`
<div class="bg-white text-gray-800 font-sans leading-relaxed p-4 md:p-8 max-w-4xl mx-auto">
  <!-- 标题 -->
  <h1 class="text-3xl md:text-4xl font-bold mb-6 text-center">网络安全不是电影情节：那些你听说过但没见过的事，在这里可以亲手“感受”</h1>

  <!-- 引言/痛点 -->
  <p class="text-lg mb-6 text-gray-600">
    你是否曾好奇，电影里那些炫酷的“黑客”在屏幕上敲击的绿色代码到底是什么？你是否也担心过，自己的网络账号、个人信息，是否也会像新闻里说的那样，被看不见的手轻易“拿走”？网络安全听起来很遥远，但其实它就隐藏在我们每一次点击、每一次连接之中。
  </p>

  <!-- 简单解释 - 工具是什么 -->
  <div class="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
    <h2 class="text-2xl font-semibold mb-4 text-blue-800">这是一个网络安全“体验台”</h2>
    <p class="mb-4">
      把它想象成一个高度仿真的 <strong class="text-blue-600">网络安全互动展示窗</strong>。它的目的不是教你成为黑客，而是让你以最直观、最安全的方式，<strong class="text-blue-600">亲眼看到、亲手体验</strong> 那些在新闻和电影里被神化的网络攻击，究竟是如何一步步发生的。
    </p>
    <p>
      就像你去科技馆操作一个模拟火箭发射器一样，你在这里的操作是完全模拟和安全的，但它能给你最接近真实的感受和理解。
    </p>
  </div>

  <!-- 好处列举 -->
  <div class="mb-10">
    <h2 class="text-2xl font-semibold mb-6 border-b pb-2">为什么你需要了解这些？</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
        <h3 class="text-xl font-medium mb-2 text-green-700">从“看热闹”到“懂门道”</h3>
        <p class="text-gray-700">下次再看到“某公司数据泄露”的新闻，你不再只会感到恐慌。你能大概明白，攻击者可能是通过哪种方式（比如伪造网站、欺骗网络等）得手的，从而对风险有更具体的判断。</p>
      </div>
      <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
        <h3 class="text-xl font-medium mb-2 text-green-700">建立“网感”，提高警惕</h3>
        <p class="text-gray-700">当你体验过一次“钓鱼网站”是如何被悄悄搭建并让你上钩的过程后，你在现实中收到可疑邮件或链接时，<strong>警惕性会自然提高</strong>。了解骗术，是最好的防骗手段。</p>
      </div>
      <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
        <h3 class="text-xl font-medium mb-2 text-green-700">消除神秘，破除迷信</h3>
        <p class="text-gray-700">网络攻击并非无所不能的“魔法”，它也是一步步的逻辑和操作。了解它的原理，能帮你打破对“黑客技术”的盲目崇拜或过度恐惧，用更理性的态度看待网络安全。</p>
      </div>
      <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
        <h3 class="text-xl font-medium mb-2 text-green-700">一堂生动的安全科普课</h3>
        <p class="text-gray-700">对于学生、家长或非IT行业的从业者来说，这比阅读枯燥的技术文档要有效得多。在交互体验中，复杂的网络安全概念变得前所未有地清晰易懂。</p>
      </div>
    </div>
  </div>

  <!-- 应用场景/体验举例 -->
  <div class="mb-10">
    <h2 class="text-2xl font-semibold mb-6 border-b pb-2">你可以在这里“感受”什么？</h2>
    <p class="mb-6">下面这些听起来很酷的事情，你都可以通过点击按钮，看到它们是如何被模拟演示的：</p>

    <div class="space-y-6">
      <div class="flex flex-col md:flex-row items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <div class="md:w-1/4">
          <span class="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">网站安全</span>
        </div>
        <div class="md:w-3/4">
          <h4 class="text-lg font-medium mb-1">“万能钥匙”开锁（SQL注入）</h4>
          <p class="text-gray-700">想象一下，你在网站登录框里输入的不是密码，而是一段特殊的“咒语”，结果网站的后台数据库大门直接向你敞开，里面的用户信息、交易记录一览无余。这个过程是怎么发生的？</p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <div class="md:w-1/4">
          <span class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">本地网络</span>
        </div>
        <div class="md:w-3/4">
          <h4 class="text-lg font-medium mb-1">“伪装快递员”拦截包裹（ARP欺骗）</h4>
          <p class="text-gray-700">在你家里的Wi-Fi网络中，有人伪装成“路由器”，骗过了你的手机和电脑。从此，你上网发出的所有“包裹”（数据），都会先经过他那里“检查”一遍，再发出去。他看到了什么？</p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <div class="md:w-1/4">
          <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">系统入侵</span>
        </div>
        <div class="md:w-3/4">
          <h4 class="text-lg font-medium mb-1">远程“接管”电脑（反弹Shell）</h4>
          <p class="text-gray-700">就像电影里特工在别人电脑上植入一个后门程序，然后就可以在自己的设备上远程控制那台电脑，查看文件、运行程序。这个“后门”是如何悄悄打开并建立连接的？</p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <div class="md:w-1/4">
          <span class="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">网络欺骗</span>
        </div>
        <div class="md:w-3/4">
          <h4 class="text-lg font-medium mb-1">“路牌”被调包（DNS劫持）</h4>
          <p class="text-gray-700">你想去“某银行官网”，但在网络上问路时，有人给了你一个指向“假银行官网”的错误地址。你毫无察觉地走进了假网站，输入了账号密码...这个“错误路牌”是怎么被放上去的？</p>
        </div>
      </div>
    </div>
    <p class="mt-6 text-sm text-gray-500">当然，还包括像著名的“震网”病毒攻击工业设备、让电脑“隐身”的Rootkit等更多模拟演示。每一个演示都有详细的、像故事一样的步骤解说，让你一目了然。</p>
  </div>

  <!-- 行动号召与安全性强调 -->
  <div class="p-6 bg-gray-100 rounded-xl border border-gray-300 text-center">
    <h3 class="text-xl font-semibold mb-4">安全、可控的探索之旅</h3>
    <p class="mb-4">
      请放心，所有这一切都发生在一个完全<strong class="text-gray-800">封闭、虚拟的演示环境</strong>里。它就像飞行员训练用的模拟驾驶舱，无论你如何操作，都不会对真实世界、真实网络和任何人的真实设备造成一丝一毫的影响。
    </p>
    <p class="text-gray-700">
      好奇心是学习的开始。与其对网络安全感到未知和恐惧，不如亲自揭开它的一角，看看里面的原理。这或许是保护你自己数字资产的第一步，也是最坚实的一步。
    </p>
    <p class="mt-6 font-medium text-gray-900">
      点击演示按钮，开启你的网络安全认知体验吧。了解攻击，是为了更好地防御。
    </p>
  </div>

  <!-- 结尾 -->
  <div class="mt-10 pt-6 border-t text-center text-gray-500 text-sm">
    <p>本文旨在普及网络安全基础认知，所有演示均为虚拟仿真，请勿用于任何非法用途。提升安全意识，共建清朗网络空间。</p>
  </div>
</div>
`;export{s as default};
