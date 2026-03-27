const s=`
<article class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 font-sans text-gray-800">
  <!-- 标题 -->
  <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
    DOCX转PDF不用愁：一个在浏览器里就能搞定的小工具
  </h1>
  <p class="text-lg text-gray-600 mb-6 sm:mb-8">
    还在为把Word文档转成PDF发愁吗？现在，你只需要一个网页，就能轻松、安全地完成转换，整个过程文件都不会离开你的电脑。
  </p>

  <!-- 核心好处 -->
  <section class="mb-8 sm:mb-12">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b">为什么选择这个小工具？</h2>
    <ul class="space-y-4">
      <li class="flex items-start">
        <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
          <div class="h-3 w-3 rounded-full bg-blue-600"></div>
        </div>
        <p><strong class="text-gray-900">隐私安全看得见</strong>：整个转换过程都在你自己的浏览器里完成。你的文档、合同、报告等任何文件，<span class="text-blue-700">不会被上传到任何服务器</span>，完全杜绝了文件泄露的风险。</p>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
          <div class="h-3 w-3 rounded-full bg-green-600"></div>
        </div>
        <p><strong class="text-gray-900">操作简单零门槛</strong>：就像把文件拖进文件夹一样简单。打开网页，把.docx文件拖进去，点一下按钮，稍等片刻就能下载PDF。<span class="text-green-700">不需要安装软件</span>，也无需注册账号。</p>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
          <div class="h-3 w-3 rounded-full bg-purple-600"></div>
        </div>
        <p><strong class="text-gray-900">基础格式都保留</strong>：转换后的PDF会尽力保持你原来Word文档的模样。<span class="text-purple-700">文字、分段、简单的表格</span>，都能被较好地还原，让你得到一个“像模像样”的PDF文件。</p>
      </li>
    </ul>
  </section>

  <!-- 使用场景 -->
  <section class="mb-8 sm:mb-12 bg-gray-50 p-5 sm:p-6 rounded-xl">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4">你会在什么时候用到它？</h2>
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <h3 class="font-medium text-gray-900 mb-2">提交正式文件</h3>
        <p class="text-gray-700 text-sm">给学校交作业、向公司提交报告，对方常常要求PDF格式，因为它看起来更正式，排版也不容易乱。</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <h3 class="font-medium text-gray-900 mb-2">发送简历或作品集</h3>
        <p class="text-gray-700 text-sm">用Word写的简历，在别人的电脑上打开可能会变样。转成PDF发送，能确保招聘方看到的就是你精心排版的版本。</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <h3 class="font-medium text-gray-900 mb-2">分享文档或合同</h3>
        <p class="text-gray-700 text-sm">PDF格式的文档更适合阅读和打印，而且不容易被随意修改，是分享最终版文件的理想选择。</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <h3 class="font-medium text-gray-900 mb-2">手机临时处理文件</h3>
        <p class="text-gray-700 text-sm">手机上收到一个Word文档，急需转成PDF。直接用手机浏览器打开这个网页就能处理，非常方便。</p>
      </div>
    </div>
  </section>

  <!-- 如何使用 -->
  <section class="mb-8 sm:mb-12">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b">怎么使用？三步就搞定</h2>
    <ol class="space-y-6 sm:space-y-8">
      <li class="flex flex-col sm:flex-row items-start sm:items-center">
        <div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-6">
          <div class="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">1</div>
        </div>
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">拖放或选择文件</h3>
          <p class="text-gray-700">打开工具页面，你会看到一个清晰的拖放区域。直接把电脑里的<code class="text-sm bg-gray-100 px-1.5 py-0.5 rounded">.docx</code>文件拖进去，或者点击按钮从文件夹里选择。它支持最大50MB的文件。</p>
        </div>
      </li>
      <li class="flex flex-col sm:flex-row items-start sm:items-center">
        <div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-6">
          <div class="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">2</div>
        </div>
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">一键开始转换</h3>
          <p class="text-gray-700">选好文件后，直接点击“开始转换”按钮。页面会显示一个进度条，让你清楚知道转换进行到哪一步了。对于大文件，转换可能需要多花几秒钟。</p>
        </div>
      </li>
      <li class="flex flex-col sm:flex-row items-start sm:items-center">
        <div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-6">
          <div class="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">3</div>
        </div>
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">下载你的PDF</h3>
          <p class="text-gray-700">转换完成后，页面会提示成功，并出现一个“下载PDF文件”的按钮。点击它，转换好的PDF就会保存到你的电脑或手机里了。文件名通常和原来的Word文档一致。</p>
        </div>
      </li>
    </ol>
  </section>

  <!-- 常见问题/总结 -->
  <section class="border-t pt-8">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4">你可能关心的问题</h2>
    <div class="space-y-4">
      <div class="border-l-4 border-blue-500 pl-4 py-1">
        <p class="font-medium text-gray-900">这个工具收费吗？</p>
        <p class="text-gray-700 mt-1">完全免费。这是一个纯粹为了提供便利而存在的在线工具，没有任何隐藏费用。</p>
      </div>
      <div class="border-l-4 border-blue-500 pl-4 py-1">
        <p class="font-medium text-gray-900">我的文件真的安全吗？</p>
        <p class="text-gray-700 mt-1">是的，这是它最大的优点。因为所有处理都在你设备的浏览器内瞬间完成，文件数据<b class="text-gray-900">不会通过网络发送出去</b>，比需要上传文件的服务安全得多。</p>
      </div>
      <div class="border-l-4 border-blue-500 pl-4 py-1">
        <p class="font-medium text-gray-900">转换效果怎么样？</p>
        <p class="text-gray-700 mt-1">它能很好地处理文档中的文字、段落和简单表格，保留基础排版。如果你有非常复杂的排版（如特殊字体、复杂页眉页脚），建议转换后核对一下。</p>
      </div>
    </div>
    <p class="mt-8 p-4 bg-blue-50 rounded-lg text-gray-800">
      简单来说，这是一个帮你快速、安全地把Word文档变成PDF的网页小帮手。下次再遇到需要转换格式的情况，不妨试试这种更安心的方式。
    </p>
  </section>
</article>
`;export{s as default};
