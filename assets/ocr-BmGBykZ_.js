const s=`
<div class="font-sans text-gray-800 bg-white">
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 文章标题 -->
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
      从图片中轻松提取文字：批量OCR识别工具完全指南
    </h1>
    
    <!-- 文章元信息 -->
    <div class="flex items-center text-sm text-gray-500 mb-8 border-b pb-4">
      <span class="mr-4">阅读时间：约5分钟</span>
      <span>最后更新：近期</span>
    </div>
    
    <!-- 引言部分 -->
    <section class="mb-10">
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        你是否曾经拍下一张包含重要文字的图片，然后需要手动把文字一个个打出来？或者面对一堆扫描的文件照片，却不知道如何快速获取里面的文字内容？
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        今天，我们就来聊聊一个能帮你解决这些烦恼的工具——批量OCR文字识别。它就像给你的图片装上了“眼睛”，让电脑能看懂图片里的文字。
      </p>
    </section>
    
    <!-- 什么是OCR -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
        什么是图片文字识别？
      </h2>
      <div class="bg-gray-50 rounded-lg p-6 mb-6">
        <p class="text-gray-700 mb-4 leading-relaxed">
          简单来说，图片文字识别技术可以让电脑“阅读”图片中的文字。就像你看到一张照片里的文字能读出来一样，这个技术让机器也能做到。
        </p>
        <p class="text-gray-700 leading-relaxed">
          它特别适合处理那些无法直接复制的文字，比如手机拍下的文档、扫描的纸质文件、或者社交媒体上的截图。
        </p>
      </div>
    </section>
    
    <!-- 为什么需要批量处理 -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-green-500 pl-4">
        为什么要批量处理图片？
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-blue-50 rounded-lg p-5">
          <h3 class="font-medium text-blue-800 mb-3">节省时间</h3>
          <p class="text-gray-700 leading-relaxed">
            想象一下，如果你有10张、20张甚至更多图片需要提取文字，一张张处理会浪费大量时间。批量处理可以一次性完成所有工作。
          </p>
        </div>
        <div class="bg-green-50 rounded-lg p-5">
          <h3 class="font-medium text-green-800 mb-3">保持效率</h3>
          <p class="text-gray-700 leading-relaxed">
            在处理大量文档时，保持工作流程不中断很重要。批量识别让你可以上传多张图片后去做其他事情，回来时文字已经提取好了。
          </p>
        </div>
      </div>
    </section>
    
    <!-- 工具功能介绍 -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-purple-500 pl-4">
        这个工具能帮你做什么？
      </h2>
      
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row items-start">
          <div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span class="text-blue-600 font-bold">1</span>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900 mb-2">支持多种图片格式</h3>
            <p class="text-gray-700 leading-relaxed">
              无论是手机拍摄的JPG照片、扫描的PNG文档，还是其他常见图片格式，都可以直接上传使用。你不需要事先转换格式，省去不少麻烦。
            </p>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row items-start">
          <div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-green-600 font-bold">2</span>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900 mb-2">识别多种语言</h3>
            <p class="text-gray-700 leading-relaxed">
              不仅可以识别中文，还支持英文、日文、韩文等。如果你有混合语言的图片，比如中英文对照的文档，也能准确识别。
            </p>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row items-start">
          <div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span class="text-yellow-600 font-bold">3</span>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900 mb-2">方便的导出功能</h3>
            <p class="text-gray-700 leading-relaxed">
              识别后的文字可以直接复制使用，或者导出到Excel表格中。这样你可以轻松整理、编辑这些文字内容，用于后续工作。
            </p>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row items-start">
          <div class="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
            <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span class="text-red-600 font-bold">4</span>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900 mb-2">清晰的进度显示</h3>
            <p class="text-gray-700 leading-relaxed">
              处理过程中，你会看到每张图片的识别进度和状态。哪张成功了，哪张可能需要重试，一目了然。
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 常见使用场景 -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-indigo-500 pl-4">
        这些场景你遇到过吗？
      </h2>
      
      <div class="bg-gray-50 rounded-xl p-6">
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <p class="ml-3 text-gray-700 leading-relaxed">
              <span class="font-medium">学生和研究者：</span>把教科书、论文中的图表文字快速提取出来，方便引用和整理笔记。
            </p>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <p class="ml-3 text-gray-700 leading-relaxed">
              <span class="font-medium">办公室工作：</span>处理扫描的合同、发票、会议记录，把纸质文档快速转为电子版。
            </p>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <p class="ml-3 text-gray-700 leading-relaxed">
              <span class="font-medium">个人生活：</span>整理手机相册里拍下的食谱、地址、电话号码，不再需要手动输入。
            </p>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <p class="ml-3 text-gray-700 leading-relaxed">
              <span class="font-medium">档案管理：</span>把老照片、历史文档中的文字数字化，方便保存和搜索。
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 常见问题 -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
        你可能想知道的问题
      </h2>
      
      <div class="space-y-6">
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-5 py-4">
            <h3 class="font-medium text-gray-900">图片质量会影响识别效果吗？</h3>
          </div>
          <div class="px-5 py-4">
            <p class="text-gray-700 leading-relaxed">
              会的。就像人眼阅读一样，清晰、光线充足的图片识别效果更好。如果图片模糊、文字太小或者背景复杂，可能需要调整后重新尝试。
            </p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-5 py-4">
            <h3 class="font-medium text-gray-900">一次可以处理多少张图片？</h3>
          </div>
          <div class="px-5 py-4">
            <p class="text-gray-700 leading-relaxed">
              大多数情况下没有严格限制，你可以同时上传多张图片进行处理。系统会按顺序一张张识别，完成后你可以统一查看和管理结果。
            </p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-5 py-4">
            <h3 class="font-medium text-gray-900">识别后的文字准确吗？</h3>
          </div>
          <div class="px-5 py-4">
            <p class="text-gray-700 leading-relaxed">
              对于印刷体文字，准确率通常很高。手写体的识别难度会大一些，特别是连笔字或特殊字体。建议识别后简单校对一下，确保重要信息无误。
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 使用建议 -->
    <section class="mb-10 bg-blue-50 rounded-xl p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">使用小贴士</h2>
      <ul class="space-y-3">
        <li class="flex items-start">
          <span class="text-blue-600 mr-2">•</span>
          <span class="text-gray-700">上传前尽量选择清晰的图片，避免反光、阴影遮挡文字</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2">•</span>
          <span class="text-gray-700">如果识别效果不理想，可以尝试调整图片方向或重新拍摄</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2">•</span>
          <span class="text-gray-700">重要文件识别后，建议保存原始图片作为备份</span>
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-2">•</span>
          <span class="text-gray-700">处理大量图片时，可以分批进行，避免一次性上传太多</span>
        </li>
      </ul>
    </section>
    
    <!-- 结尾总结 -->
    <section class="border-t pt-8">
      <div class="text-center">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">让文字提取变得简单</h2>
        <p class="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
          无论是工作还是生活中，我们都会遇到需要从图片中获取文字的情况。批量OCR识别工具让这个过程变得快速、方便，节省了大量手动输入的时间。
        </p>
        <p class="text-gray-600 text-sm">
          下次当你面对一堆需要提取文字的图片时，不妨试试这个简单的方法。
        </p>
      </div>
    </section>
    
    <!-- 文章信息 -->
    <footer class="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <p class="mb-2 sm:mb-0">本文介绍的工具适合大多数图片文字提取需求</p>
        <p>无需安装软件，在线即可使用</p>
      </div>
    </footer>
  </article>
</div>
`;export{s as default};
