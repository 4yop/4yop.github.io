const s=`
<div class="text-gray-800 font-sans leading-relaxed">
  <article class="max-w-4xl mx-auto p-4 md:p-6">
    <h1 class="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">节日头像制作工具使用指南</h1>

    <div class="my-6 p-4 bg-red-50 rounded-lg border border-red-100">
      <p class="text-red-800">
        节日到了，想给微信、QQ或社交平台的头像换个节日气氛？这个工具帮你一键搞定——上传头像，选个节日边框，几秒钟就能得到一张带节日装饰的新头像。
      </p>
    </div>

    <h2 class="text-2xl font-bold mt-10 mb-4 pb-2 border-b">支持哪些节日？</h2>
    <p class="mb-4">
      工具内置了多个主流节日的边框模板，每个节日都有多款不同风格的设计：
    </p>
    <ul class="mb-6 pl-5 space-y-2">
      <li class="flex items-start"><span class="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong>国庆节：</strong>红金配色为主，包含"中国加油""我❤️祖国""欢度国庆"等爱国主题文字边框</span></li>
      <li class="flex items-start"><span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong>圣诞节：</strong>红绿白经典圣诞配色，包含圣诞树、雪花、礼物盒等元素</span></li>
      <li class="flex items-start"><span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong>元旦/新年：</strong>喜庆红金配色，包含倒计时、烟花、新年祝福文字</span></li>
      <li class="flex items-start"><span class="inline-block w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong>春节：</strong>中国红+金色，包含灯笼、春联、福字、"新年快乐"等传统元素</span></li>
      <li class="flex items-start"><span class="inline-block w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong>情人节：</strong>粉红爱心主题，包含爱心、玫瑰、"情人节快乐"等元素</span></li>
      <li class="flex items-start"><span class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span><strong>中秋：</strong>暖黄色调，包含月亮、玉兔、桂花、团圆祝福</span></li>
    </ul>

    <h2 class="text-2xl font-bold mt-10 mb-4 pb-2 border-b">怎么用？三步搞定</h2>
    <ol class="list-decimal pl-5 space-y-4 mb-6">
      <li class="pl-2">
        <strong>第一步：上传头像</strong>
        <p class="text-gray-600 mt-1">支持三种方式：<br/>• 直接把图片<strong>拖拽</strong>到上传区域<br/>• 从剪贴板<strong>粘贴</strong>截图（Ctrl+V / Command+V）<br/>• 点击"<strong>选择图片</strong>"按钮从电脑选取<br/>推荐使用正方形头像图片，效果最佳。</p>
      </li>
      <li class="pl-2">
        <strong>第二步：选择边框</strong>
        <p class="text-gray-600 mt-1">顶部切换节日分类，下方展示该节日的所有边框模板。点击任意边框即可实时预览合成效果。可以左右滑动浏览更多模板。</p>
      </li>
      <li class="pl-2">
        <strong>第三步：下载保存</strong>
        <p class="text-gray-600 mt-1">预览满意后，点击"下载头像"按钮，高清PNG图片会自动保存到本地。直接拿去当微信/QQ头像就行。</p>
      </li>
    </ol>

    <div class="my-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
      <h3 class="text-xl font-bold mb-3 text-red-700">几个实用小技巧</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li><strong>最佳头像尺寸：</strong>建议上传 300×300 像素以上的正方形图片，合成后效果最清晰。</li>
        <li><strong>边框位置：</strong>边框通常叠加在头像的底部或角落区域，不会遮挡面部主体部分。</li>
        <li><strong>隐私安全：</strong>所有图片处理都在你的浏览器里完成，图片不会上传到任何服务器。</li>
        <li><strong>手机也能用：</strong>完全响应式设计，手机浏览器打开一样流畅操作。</li>
      </ul>
    </div>

    <h2 class="text-2xl font-bold mt-10 mb-4 pb-2 border-b">适用场景</h2>
    <div class="flex flex-wrap gap-3 my-6">
      <span class="px-4 py-2 bg-red-50 rounded-full text-sm text-red-700">微信头像</span>
      <span class="px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-700">QQ头像</span>
      <span class="px-4 py-2 bg-pink-50 rounded-full text-sm text-pink-700">微博头像</span>
      <span class="px-4 py-2 bg-purple-50 rounded-full text-sm text-purple-700">抖音头像</span>
      <span class="px-4 py-2 bg-green-50 rounded-full text-sm text-green-700">小红书头像</span>
      <span class="px-4 py-2 bg-orange-50 rounded-full text-sm text-orange-700">游戏头像</span>
      <span class="px-4 py-2 bg-gray-100 rounded-full text-sm">论坛/社区</span>
    </div>

    <div class="mt-12 pt-8 border-t text-center">
      <p class="text-lg font-semibold mb-2">让头像也过节吧 🎉</p>
      <p class="text-gray-600">
        每到节日，换一个应景的头像，既表达了心情，又给朋友们带来一点小惊喜。简单几步，让你的头像焕然一新。
      </p>
    </div>
  </article>
</div>
`;export{s as default};
