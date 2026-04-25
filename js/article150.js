const r=`
<div class="text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-8 text-center">图片格式转换：让你的图片适配任何使用场景</h1>

  <div class="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="m-0 font-medium text-blue-900">不同平台需要不同格式？一张图搞定</p>
    <p class="mt-2 mb-0">网站需要WebP、微信需要JPG、设计需要PNG透明、App图标需要ICO……图片格式转换是日常开发中最高频的操作之一。这个工具让你在浏览器中批量完成所有转换，无需安装任何软件。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">为什么要转换图片格式？</h2>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">🌐</div>
      <h3 class="font-medium text-gray-800 mb-2">平台兼容</h3>
      <p class="text-sm text-gray-600">不同平台对图片格式要求不同，转换后才能正常使用</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">📦</div>
      <h3 class="font-medium text-gray-800 mb-2">减小体积</h3>
      <p class="text-sm text-gray-600">WebP比JPEG小25-35%，转换格式可大幅节省存储和带宽</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">🎨</div>
      <h3 class="font-medium text-gray-800 mb-2">功能需求</h3>
      <p class="text-sm text-gray-600">透明背景需要PNG、动态图需要WebP/GIF、图标需要ICO</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见图片格式对比</h2>

  <div class="overflow-x-auto my-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left">格式</th>
          <th class="border border-gray-300 p-3 text-left">类型</th>
          <th class="border border-gray-300 p-3 text-left">透明</th>
          <th class="border border-gray-300 p-3 text-left">动画</th>
          <th class="border border-gray-300 p-3 text-left">适用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">JPEG/JPG</td>
          <td class="border border-gray-300 p-3">有损</td>
          <td class="border border-gray-300 p-3">不支持</td>
          <td class="border border-gray-300 p-3">不支持</td>
          <td class="border border-gray-300 p-3">照片、社交媒体</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">PNG</td>
          <td class="border border-gray-300 p-3">无损</td>
          <td class="border border-gray-300 p-3">支持</td>
          <td class="border border-gray-300 p-3">不支持</td>
          <td class="border border-gray-300 p-3">图标、截图、透明图</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">WebP</td>
          <td class="border border-gray-300 p-3">有损/无损</td>
          <td class="border border-gray-300 p-3">支持</td>
          <td class="border border-gray-300 p-3">支持</td>
          <td class="border border-gray-300 p-3">网站图片、现代Web</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">BMP</td>
          <td class="border border-gray-300 p-3">无损</td>
          <td class="border border-gray-300 p-3">支持</td>
          <td class="border border-gray-300 p-3">不支持</td>
          <td class="border border-gray-300 p-3">Windows系统、打印</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">ICO</td>
          <td class="border border-gray-300 p-3">无损</td>
          <td class="border border-gray-300 p-3">支持</td>
          <td class="border border-gray-300 p-3">不支持</td>
          <td class="border border-gray-300 p-3">网站Favicon、App图标</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">AVIF</td>
          <td class="border border-gray-300 p-3">有损/无损</td>
          <td class="border border-gray-300 p-3">支持</td>
          <td class="border border-gray-300 p-3">支持</td>
          <td class="border border-gray-300 p-3">新一代Web图片格式</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-indigo-50 p-5 rounded-lg my-6 border border-indigo-100">
    <p class="font-medium text-indigo-900 mb-2">提示：选择合适的格式很重要</p>
    <p class="text-indigo-800 text-sm">JPEG适合照片、PNG适合带透明的图片、WebP是网站优化的首选。根据你的使用场景选择合适的输出格式，可以兼顾画质和文件大小。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见使用场景</h2>

  <div class="space-y-4 my-6">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🌐 网站开发</h3>
      <p class="text-sm text-gray-600"><strong>推荐格式：</strong>WebP（体积小，兼容性好）</p>
      <p class="text-sm text-gray-600">将PNG/JPG转换为WebP，可以在保持画质的同时减小25-50%的文件体积。</p>
    </div>

    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">📱 社交媒体分享</h3>
      <p class="text-sm text-gray-600"><strong>推荐格式：</strong>JPEG</p>
      <p class="text-sm text-gray-600">微信、微博等平台对JPEG兼容性最好，上传后不会出现格式不支持的问题。</p>
    </div>

    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🖼️ 设计素材</h3>
      <p class="text-sm text-gray-600"><strong>推荐格式：</strong>PNG</p>
      <p class="text-sm text-gray-600">需要透明背景的Logo、图标等素材必须使用PNG格式。</p>
    </div>

    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">⚙️ 网站图标</h3>
      <p class="text-sm text-gray-600"><strong>推荐格式：</strong>ICO</p>
      <p class="text-sm text-gray-600">浏览器标签页图标（Favicon）需要ICO格式，通常是16x16或32x32像素。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见问题</h2>

  <div class="space-y-4 my-6">
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：转换后画质会下降吗？</p>
      <p class="text-gray-600">答：转换为无损格式（PNG、BMP、ICO）不会损失画质。转换为有损格式（JPEG、WebP、AVIF）时，可以通过调节质量参数控制画质损失程度，高质量设置下人眼几乎无法分辨差异。</p>
    </div>

    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：我的图片会被上传到服务器吗？</p>
      <p class="text-gray-600">答：不会。所有转换都在你的浏览器本地完成，图片不会离开你的设备，充分保护你的隐私。</p>
    </div>

    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：支持批量转换吗？</p>
      <p class="text-gray-600">答：支持。你可以一次选择多张图片，统一设置目标格式和质量，然后逐个下载或打包为ZIP一次下载。</p>
    </div>

    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：GIF动图可以转换格式吗？</p>
      <p class="text-gray-600">答：GIF动图可以转换为其他格式，但动画帧信息会丢失，只保留第一帧静态图片。如需保留动画，建议转换为WebP动画格式。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">使用技巧</h2>

  <div class="mt-6 p-5 bg-green-50 border border-green-100 rounded-lg">
    <p class="font-medium text-green-900 mb-2">格式转换最佳实践：</p>
    <ul class="text-green-800 space-y-1">
      <li>• 网站图片优先使用WebP格式，体积最小</li>
      <li>• 需要透明背景时选择PNG，避免使用JPEG</li>
      <li>• JPEG质量设置80-90即可满足大部分场景</li>
      <li>• 网站Favicon建议转为ICO，尺寸建议32x32</li>
      <li>• 批量处理大量图片时，使用ZIP打包下载更高效</li>
    </ul>
  </div>

  <p class="mt-6 text-center text-gray-600">无需安装软件，打开浏览器就能用。现在就开始转换你的图片吧！</p>
</div>
`;export{r as default};
