const s=`
<article class="max-w-4xl mx-auto p-6 bg-white text-gray-800">
  <header class="mb-10 border-b pb-6">
    <h1 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">你的网络“身份证”和“定位仪”，一个工具全看清</h1>
    <p class="text-lg text-gray-600">想知道谁“看”到了你上网，或者好奇那个陌生地址来自何方？一个简单工具就能揭开谜底。</p>
  </header>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b">你有没有过这些疑惑？</h2>
    <ul class="space-y-4 pl-5">
      <li class="flex items-start">
        <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p>访问某些网站或服务时，页面提示“您所在的地区无法访问”。你心里嘀咕：<strong>它究竟是怎么知道我在哪儿的？</strong></p>
      </li>
      <li class="flex items-start">
        <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p>收到一封奇怪的邮件，或者看到一个陌生的账号留言，上面显示了一个看不懂的数字地址（比如 8.8.8.8）。你很想知道：<strong>这家伙到底在世界的哪个角落？</strong></p>
      </li>
      <li class="flex items-start">
        <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <p>看视频总是卡顿，游戏延迟高得让人恼火。你抱怨网络太慢，但不确定是自家网络的问题，还是你要访问的网站本身“距离”你太远。</p>
      </li>
    </ul>
    <p class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic">其实，这些问题背后都与两个关键信息有关：<strong>IP地址</strong>和<strong>网络连接质量</strong>。下面这个工具，就像给你的网络世界装上了“透视镜”和“测速仪”。</p>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b">这个工具能为你做什么？</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="border border-gray-200 rounded-lg p-5 shadow-sm">
        <div class="text-blue-600 text-2xl font-bold mb-3">一、看清你的网络“身份证”</div>
        <p class="mb-3">当你连接互联网时，会获得一个独一无二的“数字门牌号”，这就是公网IP。它是你在网络世界的临时身份证。</p>
        <ul class="text-sm space-y-2 text-gray-700">
          <li>• <strong>即刻显示</strong>：打开工具，一秒看到你自己的IP地址。</li>
          <li>• <strong>归属地揭秘</strong>：同时显示你大致的地理位置（如城市）和网络服务商。</li>
          <li>• <strong>心里有数</strong>：明白网站是如何“认出”并定位你的。</li>
        </ul>
      </div>
      <div class="border border-gray-200 rounded-lg p-5 shadow-sm">
        <div class="text-blue-600 text-2xl font-bold mb-3">二、化身网络“侦探”</div>
        <p class="mb-3">对任何IP地址感到好奇？把它输入进去，就像在地图上输入坐标一样。</p>
        <ul class="text-sm space-y-2 text-gray-700">
          <li>• <strong>全球定位</strong>：查出该地址所在的国家、地区甚至城市。</li>
          <li>• <strong>更多细节</strong>：了解当地的时区、使用的货币，甚至经纬度。</li>
          <li>• <strong>记录足迹</strong>：你查询过的地址会被自动记录下来，方便下次核对。</li>
        </ul>
      </div>
      <div class="border border-gray-200 rounded-lg p-5 shadow-sm">
        <div class="text-blue-600 text-2xl font-bold mb-3">三、一键“体检”网速</div>
        <p class="mb-3">感觉网络不顺畅？用工具自带的诊断功能快速测一下。</p>
        <ul class="text-sm space-y-2 text-gray-700">
          <li>• <strong>连接延迟测试</strong>：测试连接到常用网站（如百度、GitHub）的速度，用毫秒数直观显示。</li>
          <li>• <strong>颜色提示</strong>：绿色代表良好，黄色代表一般，红色则可能有问题。</li>
          <li>• <strong>快速排查</strong>：帮你初步判断是本地网络问题，还是目标网站响应慢。</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-6 pb-2 border-b">在生活中，你可以这样用它</h2>
    <div class="space-y-8">
      <div>
        <h3 class="text-xl font-medium mb-3 text-gray-900">场景一：解决“地域限制”的困惑</h3>
        <p class="text-gray-700 mb-3">当你无法访问某个服务时，先别急着怪网络。用工具看一眼<b>自己的IP显示的地理位置</b>。有时，可能是因为你的网络出口被分配到了其他城市，导致服务商误判。了解这一点后，你可以尝试重启路由器，或者联系你的网络服务商咨询。</p>
      </div>
      <div>
        <h3 class="text-xl font-medium mb-3 text-gray-900">场景二：识别陌生信息的来源</h3>
        <p class="text-gray-700">在论坛、邮箱或后台日志里看到一个不认识的IP地址。将它复制到工具的查询框，<b>“侦探”功能</b>能立刻告诉你它大概来自哪里。如果显示来自一个你毫无关联的遥远国度，那么对于这条信息的可信度，你心里就能多一分警惕。</p>
      </div>
      <div class="p-5 bg-gray-50 border rounded-lg">
        <h3 class="text-xl font-medium mb-3 text-gray-900">额外小技巧：便捷的图片管理</h3>
        <p class="text-gray-700 mb-2">工具还附带了一个简单的图片查看区。你可以上传多张截图（比如错误提示的截图、网络测速结果的截图），并像看手机相册一样<b>点击放大、滑动浏览</b>。这方便你在排查问题时，把所有相关证据集中在一起查看。</p>
        <p class="text-sm text-gray-500">（提示：点击图片可放大，点击黑色背景或“×”可关闭，两侧箭头可切换。）</p>
      </div>
    </div>
  </section>

  <section class="mt-12 p-6 md:p-8 border border-blue-200 bg-blue-50 rounded-xl">
    <h2 class="text-2xl font-bold mb-4 text-gray-900">总结一下</h2>
    <p class="mb-4 text-lg">这个工具就像给你的网络体验配了一个<strong>简易仪表盘</strong>。它不复杂，却能解答你最常遇到的几个网络身份和连接问题：</p>
    <ol class="list-decimal pl-5 space-y-2 mb-6 text-gray-700">
      <li><strong>“我在哪？”</strong> – 显示你自己的IP和位置。</li>
      <li><strong>“TA在哪？”</strong> – 查询任意IP地址的详细信息。</li>
      <li><strong>“连接快吗？”</strong> – 快速测试到关键网站的延迟。</li>
    </ol>
    <p class="font-medium">无论你是普通网民，还是需要偶尔处理网络相关事务的人，了解这些信息都能让你在面对网络问题时更加从容，减少一些“未知”带来的困扰。网络世界的信息脉络，其实比你想象的要清晰。</p>
  </section>
</article>
`;export{s as default};
