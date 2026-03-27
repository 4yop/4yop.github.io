const s=`
<div class="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
  <article class="bg-white rounded-xl shadow-sm p-6 md:p-8">
    <!-- 文章标题 -->
    <header class="mb-8 md:mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">身份证生成器是什么？一个有趣的虚拟身份制作工具</h1>
      <p class="text-gray-600 text-lg">很多人可能听说过身份证生成器，但不清楚它到底是什么。今天我们就来聊聊这个有趣的小工具，以及它的一些常见用途。</p>
    </header>

    <!-- 首段介绍 -->
    <section class="mb-8">
      <p class="text-gray-700 mb-4">
        在日常生活中，我们有时候需要展示身份证样式，但又不想使用真实的个人信息。这时，一个可以生成虚拟身份证样式的小工具就很有用了。
      </p>
      <p class="text-gray-700">
        这种工具通常被称为娱乐身份证生成器，它能够按照特定格式生成一个看起来很像真实身份证的图片，但上面的信息都是虚拟的。
      </p>
    </section>

    <!-- 主要功能 -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">它能做什么？</h2>
      
      <div class="space-y-6">
        <div class="bg-blue-50 p-5 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">自定义个人信息</h3>
          <p class="text-gray-700">你可以自由填写姓名、性别、出生日期等基本信息，就像填写一份普通的表格一样简单。</p>
        </div>
        
        <div class="bg-green-50 p-5 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">选择不同样式</h3>
          <p class="text-gray-700">有些工具提供了多种样式选择，比如不同地区的风格，让你可以根据需要选择合适的模板。</p>
        </div>
        
        <div class="bg-yellow-50 p-5 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">快速生成随机信息</h3>
          <p class="text-gray-700">如果不想手动填写，可以点击随机生成按钮，系统会自动生成一套完整的虚拟信息，非常方便。</p>
        </div>
        
        <div class="bg-purple-50 p-5 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">下载生成结果</h3>
          <p class="text-gray-700">完成后可以将生成的身份证样式保存为图片，方便在需要的时候使用。</p>
        </div>
      </div>
    </section>

    <!-- 使用场景 -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">什么时候会用到？</h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-blue-600 font-bold">教学</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">演示用途</h3>
          <p class="text-gray-700">老师在讲解身份证知识时，可以用虚拟的样式进行展示，既直观又保护了隐私。</p>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-green-600 font-bold">设计</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">设计制作</h3>
          <p class="text-gray-700">设计师在做界面设计时，如果需要身份证样式的占位图，就可以用这种工具快速生成。</p>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-yellow-600 font-bold">娱乐</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">娱乐游戏</h3>
          <p class="text-gray-700">和朋友玩角色扮演游戏时，可以制作一个虚拟的身份卡片，增加游戏的趣味性。</p>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-purple-600 font-bold">学习</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">了解格式</h3>
          <p class="text-gray-700">想了解身份证的格式和包含哪些信息，通过生成虚拟样式来学习是个不错的方法。</p>
        </div>
      </div>
    </section>

    <!-- 注意事项 -->
    <section class="mb-10 bg-gray-50 p-6 rounded-lg">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">需要特别注意的事项</h2>
      
      <div class="space-y-4">
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
            <span class="text-red-600 font-bold">!</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">仅供娱乐使用</h3>
            <p class="text-gray-700">这种工具生成的身份证样式完全是虚拟的，不具备任何法律效力，也不能用于任何正式场合。</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
            <span class="text-orange-600 font-bold">!</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">保护个人信息</h3>
            <p class="text-gray-700">任何时候都不要在类似的工具中输入自己真实的身份证号码或其他重要个人信息。</p>
          </div>
        </div>
        
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
            <span class="text-blue-600 font-bold">!</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">合法合规使用</h3>
            <p class="text-gray-700">生成的虚拟身份证样式只能用于合法的娱乐、学习或设计用途，不能用于欺骗他人或违法行为。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">你可能关心的问题</h2>
      
      <div class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-5">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">生成的身份证样式真实吗？</h3>
          <p class="text-gray-700">这种工具生成的样式主要是模仿真实身份证的外观格式，但仔细看还是能看出是虚拟的。它只是提供了一个类似的外观，不能替代真实的身份证。</p>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-5">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">需要下载软件吗？</h3>
          <p class="text-gray-700">现在很多这类工具都是网页版的，直接在浏览器里就能使用，不需要下载安装任何软件，使用起来很方便。</p>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-5">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">会不会泄露信息？</h3>
          <p class="text-gray-700">正规的在线工具通常不会保存用户输入的信息，但为了安全起见，建议不要输入真实的个人信息，使用随机生成的信息就好。</p>
        </div>
      </div>
    </section>

    <!-- 结尾总结 -->
    <section class="pt-6 border-t">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">简单总结</h2>
      <p class="text-gray-700 mb-4">
        娱乐身份证生成器是一个有趣的小工具，它可以帮助我们快速生成一个虚拟的身份证样式。无论是用于设计演示、教学展示，还是单纯的娱乐消遣，都能提供一定的便利。
      </p>
      <p class="text-gray-700">
        关键是要记住，它生成的结果只是样式上的模仿，不具备任何实际的法律效力。使用时要遵守法律法规，保护好自己的隐私，享受科技带来的乐趣就好。
      </p>
    </section>
  </article>
</div>
`;export{s as default};
