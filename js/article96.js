const t=`
<div class="max-w-4xl mx-auto p-4 sm:p-6 text-gray-800">
  <!-- 标题 -->
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">分享照片前，你删掉那些“隐藏信息”了吗？</h1>

  <!-- 引语/首段 -->
  <p class="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed text-center">
    你是否想过，随手拍下并分享到网络的照片，可能会悄悄透露你的家庭住址、拍摄时间，甚至手机型号？
  </p>

  <!-- 痛点场景 -->
  <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
    <h2 class="text-xl font-semibold text-gray-900 mb-3">一个常见的担忧</h2>
    <p class="text-gray-700 mb-2">想在网上晒一晒新家的装修，却担心照片会暴露精确的地理位置。</p>
    <p class="text-gray-700 mb-2">想把孩子的可爱瞬间发给亲友群，但不想让照片里记录的拍摄时间和设备信息一起传出去。</p>
    <p class="text-gray-700">工作中需要上传产品图片到公开平台，希望只展示图片本身，不附带任何多余的相机参数。</p>
  </div>

  <!-- 简单解释 -->
  <div class="mb-10">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">照片的“隐形日记本”：EXIF信息</h2>
    <p class="text-gray-700 mb-4">
      你可以把每张数码照片想象成一本小小的“日记本”。除了我们能看到的画面（日记内容），它里面还悄悄记录了很多拍摄时的“背景信息”（日记的备注）。
    </p>
    <p class="text-gray-700 mb-4">
      这些“背景信息”就是EXIF数据。它可能包括：
    </p>
    <ul class="list-disc pl-5 space-y-2 text-gray-700 mb-4">
      <li><strong>你的位置</strong>：如果拍照时开启了定位，经纬度坐标就可能被记下。</li>
      <li><strong>拍摄时间</strong>：具体的年月日、时分秒。</li>
      <li><strong>你的设备</strong>：用什么牌子、什么型号的手机或相机拍的。</li>
      <li><strong>拍摄参数</strong>：光圈、快门速度、ISO等专业数据。</li>
    </ul>
    <p class="text-gray-700">
      当你把原图直接发送或上传时，这本“隐形日记本”通常也会一并交给对方。在网络分享时，这可能会带来一些隐私顾虑。
    </p>
  </div>

  <!-- 解决方案引入 -->
  <div class="bg-gray-100 p-6 sm:p-8 rounded-xl mb-10">
    <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">给你的照片做个“大扫除”</h2>
    <p class="text-gray-700 mb-4 text-center">
      其实，你可以在分享前，轻松抹去这些不需要的“背景信息”，只留下干净的图片本身。这个过程，就像是为照片做一次保护隐私的“大扫除”。
    </p>
  </div>

  <!-- 好处列举 -->
  <div class="mb-10">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">这样做有什么好处？</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">保护个人隐私</h3>
        <p class="text-gray-700">安心分享生活瞬间，不必担心泄露家庭、公司等常去地点的位置信息。</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">让文件更“清爽”</h3>
        <p class="text-gray-700">移除不必要的数据，有时能让图片文件变得更小，上传和发送更快捷。</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">操作简单快捷</h3>
        <p class="text-gray-700">整个过程就像给图片“冲个澡”一样简单，无需学习复杂的技术知识。</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">完全在本地完成</h3>
        <p class="text-gray-700">所有处理都在你自己的设备上进行，图片无需上传到陌生服务器，更加安全。</p>
      </div>
    </div>
  </div>

  <!-- 应用场景 -->
  <div class="mb-10">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">哪些时候特别需要？</h2>
    <div class="space-y-6">
      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">场景一：旅行分享</h3>
        <p class="text-gray-700">
          旅行归来，想发九宫格美景到社交平台。在发布前，清理一下照片的EXIF信息，可以避免你精美的构图背后，附带一串精确的GPS坐标，既能分享快乐，又保护了旅行轨迹的隐私。
        </p>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">场景二：二手交易或工作展示</h3>
        <p class="text-gray-700">
          在网上出售闲置物品，或者需要向客户展示产品图片。上传清理后的照片，可以确保对方只关注商品或产品本身，而不会看到你手机的型号、照片的原始拍摄时间等无关信息，显得更加专业。
        </p>
      </div>
    </div>
  </div>

  <!-- 结尾与引导 -->
  <div class="text-center border-t pt-8 mt-8">
    <p class="text-gray-700 mb-4">
      在这个注重隐私的时代，掌握对自己数字信息的控制权，从小小的习惯开始。下次分享照片前，不妨花一分钟时间，考虑一下是否要为它做一次简单的“信息大扫除”。
    </p>
    <p class="text-sm text-gray-600">
      了解如何轻松便捷地清除照片隐私信息，保护你的数字足迹。
    </p>
  </div>
</div>
`;export{t as default};
