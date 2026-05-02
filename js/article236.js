const e=`
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <!-- 主标题 -->
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
    不用安装软件，你的浏览器就是视频录制器和相机
  </h1>

  <!-- 摘要/引言 -->
  <div class="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r">
    <p class="text-gray-700 leading-relaxed">
      想用电脑或手机的摄像头录一段视频、拍张照片，还得专门下载软件吗？其实不用那么麻烦。现在，只要你的设备有摄像头，打开一个网页就能轻松搞定录制和拍照。这就像打开手电筒一样简单。
    </p>
  </div>

  <!-- 主要功能介绍部分 -->
  <div class="mb-10">
    <h2 class="text-2xl font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200">
      一个网页，多种用途
    </h2>
    <p class="text-gray-700 mb-6 leading-relaxed">
      这个在线的录制工具就像一个放在浏览器里的多功能工作室，它能调用你设备上的摄像头和麦克风，完成视频和照片的创作。
    </p>

    <!-- 功能卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-center mb-3">
          <div class="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
          </div>
          <h3 class="text-lg font-medium text-gray-800">高清视频录制</h3>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">
          一键开始录制视频，还可以选择是否录入声音。录制时会有明显的红色提示，让你清楚地知道正在工作中。录好的视频会立即生成预览，方便查看。
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-center mb-3">
          <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
          </div>
          <h3 class="text-lg font-medium text-gray-800">实时拍照</h3>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">
          除了录像，随时可以按下拍照按钮，捕捉当前画面。拍下的照片会单独保存在一个相册列表里，可以一键下载保存到自己的设备上。
        </p>
      </div>
    </div>
  </div>

  <!-- 特色与设置 -->
  <div class="mb-10">
    <h2 class="text-2xl font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-200">
      就像使用真正的相机一样灵活
    </h2>
    <p class="text-gray-700 mb-6 leading-relaxed">
      为了让体验更好，这个工具还提供了一些实用的调节选项，让你能根据自己的需要来设置。
    </p>
    <ul class="list-disc pl-5 space-y-3 text-gray-700">
      <li class="leading-relaxed">
        <span class="font-medium">切换摄像头：</span>如果你有多个摄像头（比如笔记本电脑的前置和后置摄像头），可以在这里自由切换。
      </li>
      <li class="leading-relaxed">
        <span class="font-medium">调节清晰度：</span>可以选择不同的画面分辨率，从高清的720p到超清的4K，根据你的网络和设备能力来选择。
      </li>
      <li class="leading-relaxed">
        <span class="font-medium">管理你的作品：</span>所有录制好的视频和拍摄的照片都会在页面下方列出。你可以播放、下载，或者删除不需要的内容。
      </li>
    </ul>
  </div>

  <!-- 使用场景 -->
  <div class="bg-gray-50 p-6 sm:p-8 rounded-xl mb-10">
    <h2 class="text-2xl font-semibold text-gray-800 mb-5">你会在什么情况下用到它？</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="flex items-start">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
        <p class="ml-3 text-gray-700 leading-relaxed">临时需要录一段工作说明或作业讲解发给别人。</p>
      </div>
      <div class="flex items-start">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
        <p class="ml-3 text-gray-700 leading-relaxed">想拍一张证件照或产品照片，但觉得手机App操作复杂。</p>
      </div>
      <div class="flex items-start">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
        <p class="ml-3 text-gray-700 leading-relaxed">进行简单的直播测试，或者检查自己的摄像头和麦克风是否工作正常。</p>
      </div>
      <div class="flex items-start">
        <div class="flex-shrink-0 mt-1">
          <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
        <p class="ml-3 text-gray-700 leading-relaxed">为家人录制一段祝福视频，或者记录下孩子的某个瞬间。</p>
      </div>
    </div>
  </div>

  <!-- 常见问题/温馨提示 -->
  <div class="border border-yellow-200 bg-yellow-50 rounded-xl p-6 mb-8">
    <h3 class="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      温馨提示
    </h3>
    <ul class="space-y-2 text-yellow-700 text-sm">
      <li class="flex items-start">
        <span class="mr-2">•</span>
        <span>第一次使用时，你的浏览器会弹出窗口，请求使用摄像头和麦克风的权限，请点击“允许”。这是为了你的隐私安全。</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2">•</span>
        <span>所有的录制和拍照内容都只在你的浏览器本地处理，不会上传到任何服务器，可以放心使用。</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2">•</span>
        <span>在使用前，请确保摄像头和麦克风没有被其他软件（如微信、Zoom）占用，以免无法正常启动。</span>
      </li>
    </ul>
  </div>

  <!-- 结语 -->
  <div class="text-center pt-4 border-t border-gray-200">
    <p class="text-gray-600 leading-relaxed">
      技术的发展，让我们能用越来越简单的方式完成生活中的小事。以前需要复杂设备或专业软件才能做的事，现在一个网页就能轻松实现。无论是录制一段视频，还是拍摄一张照片，都可以变得更简单、更快捷。
    </p>
  </div>
</div>
`;export{e as default};
