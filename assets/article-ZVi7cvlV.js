const r=`
<div class="text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-8 text-center">图片压缩工具：在画质与体积之间找到完美平衡</h1>

  <div class="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="m-0 font-medium text-blue-900">网站加载慢？存储空间不够？问题可能出在图片上</p>
    <p class="mt-2 mb-0">图片通常占据网页体积的60%以上。一张未经优化的照片可能有几MB大小，而经过适当压缩后，可以减小到几百KB，画质却几乎看不出差别。这就是图片压缩的魔力。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">为什么图片压缩如此重要？</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">🚀</div>
      <h3 class="font-medium text-gray-800 mb-2">提升加载速度</h3>
      <p class="text-sm text-gray-600">图片体积减小，网页加载更快，用户体验更好</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">💰</div>
      <h3 class="font-medium text-gray-800 mb-2">节省流量成本</h3>
      <p class="text-sm text-gray-600">减少服务器带宽消耗，降低CDN和存储费用</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">📱</div>
      <h3 class="font-medium text-gray-800 mb-2">优化移动体验</h3>
      <p class="text-sm text-gray-600">移动端用户流量宝贵，小体积图片更友好</p>
    </div>
  </div>

  <p>根据Google的研究，网页加载时间每增加1秒，跳出率就会增加32%。而图片是影响加载速度的最大因素。压缩图片，就是在优化你的核心业务指标。</p>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">图片压缩的两种类型</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    <div class="p-5 border-2 border-green-200 rounded-lg bg-green-50">
      <h3 class="font-medium text-green-800 mb-3 text-lg">✅ 有损压缩（Lossy）</h3>
      <p class="text-sm text-gray-700 mb-3">通过去除人眼不太敏感的数据来减小文件大小。</p>
      <ul class="text-sm text-gray-600 space-y-1">
        <li>• 压缩率高（可减小70-90%）</li>
        <li>• 适合照片、复杂图像</li>
        <li>• 格式：JPEG、WebP</li>
        <li>• 可调整压缩质量</li>
      </ul>
    </div>
    <div class="p-5 border-2 border-blue-200 rounded-lg bg-blue-50">
      <h3 class="font-medium text-blue-800 mb-3 text-lg">✅ 无损压缩（Lossless）</h3>
      <p class="text-sm text-gray-700 mb-3">不丢失任何像素数据，完全保留原始画质。</p>
      <ul class="text-sm text-gray-600 space-y-1">
        <li>• 压缩率较低（可减小20-50%）</li>
        <li>• 适合图标、截图、文字图片</li>
        <li>• 格式：PNG、GIF、WebP</li>
        <li>• 画质100%保留</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">不同场景下的压缩策略</h2>
  
  <div class="space-y-4 my-6">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🌐 网站展示图片</h3>
      <p class="text-sm text-gray-600"><strong>推荐：</strong>JPEG质量80-85%，或转换为WebP格式</p>
      <p class="text-sm text-gray-600"><strong>目标大小：</strong>单张图片控制在200KB以内</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🛒 电商产品图</h3>
      <p class="text-sm text-gray-600"><strong>推荐：</strong>JPEG质量90%，保留细节但控制体积</p>
      <p class="text-sm text-gray-600"><strong>目标大小：</strong>主图500KB以内，缩略图50KB以内</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">📱 社交媒体分享</h3>
      <p class="text-sm text-gray-600"><strong>推荐：</strong>根据平台要求调整，一般宽度1080px即可</p>
      <p class="text-sm text-gray-600"><strong>目标大小：</strong>微信分享控制在1MB以内</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🎨 设计素材/图标</h3>
      <p class="text-sm text-gray-600"><strong>推荐：</strong>PNG-8或SVG格式，透明背景用PNG-24</p>
      <p class="text-sm text-gray-600"><strong>目标大小：</strong>图标控制在10KB以内</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">现代图片格式的选择</h2>
  
  <div class="overflow-x-auto my-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left">格式</th>
          <th class="border border-gray-300 p-3 text-left">压缩类型</th>
          <th class="border border-gray-300 p-3 text-left">透明度</th>
          <th class="border border-gray-300 p-3 text-left">动画</th>
          <th class="border border-gray-300 p-3 text-left">适用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">JPEG/JPG</td>
          <td class="border border-gray-300 p-3">有损</td>
          <td class="border border-gray-300 p-3">❌</td>
          <td class="border border-gray-300 p-3">❌</td>
          <td class="border border-gray-300 p-3">照片、复杂图像</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">PNG</td>
          <td class="border border-gray-300 p-3">无损</td>
          <td class="border border-gray-300 p-3">✅</td>
          <td class="border border-gray-300 p-3">❌</td>
          <td class="border border-gray-300 p-3">图标、截图、透明图</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">WebP</td>
          <td class="border border-gray-300 p-3">有损/无损</td>
          <td class="border border-gray-300 p-3">✅</td>
          <td class="border border-gray-300 p-3">✅</td>
          <td class="border border-gray-300 p-3">现代网站首选</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">GIF</td>
          <td class="border border-gray-300 p-3">无损</td>
          <td class="border border-gray-300 p-3">✅</td>
          <td class="border border-gray-300 p-3">✅</td>
          <td class="border border-gray-300 p-3">简单动画（逐渐被WebP替代）</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-indigo-50 p-5 rounded-lg my-6 border border-indigo-100">
    <p class="font-medium text-indigo-900 mb-2">💡 专业提示：WebP是未来的趋势</p>
    <p class="text-indigo-800 text-sm">WebP格式在相同画质下比JPEG小25-35%，比PNG小26%。现代浏览器都已支持，是网站图片优化的最佳选择。建议提供WebP格式，同时准备JPEG作为后备。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">批量压缩：效率提升的关键</h2>
  <p>如果你需要处理几十甚至上百张图片，一张张手动压缩显然不现实。批量压缩功能让你可以：</p>
  <ul class="my-4 pl-5 space-y-2">
    <li>• 一次选择多张图片，统一设置压缩参数</li>
    <li>• 自动应用相同的压缩策略和质量设置</li>
    <li>• 批量下载压缩后的图片，保持原有文件名</li>
    <li>• 节省90%以上的处理时间</li>
  </ul>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见问题解答</h2>
  
  <div class="space-y-4 my-6">
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：压缩后的图片画质会下降吗？</p>
      <p class="text-gray-600">答：有损压缩会轻微降低画质，但在合理的压缩比例下（如JPEG质量80%），人眼几乎察觉不到差别。无损压缩则完全保留画质。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：压缩比例多少合适？</p>
      <p class="text-gray-600">答：一般建议JPEG质量设置在70-85%之间。质量低于70%可能出现明显瑕疵，高于90%则体积收益递减。可以根据具体用途微调。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：压缩后的图片可以恢复吗？</p>
      <p class="text-gray-600">答：有损压缩是不可逆的，压缩后的图片无法恢复到原始质量。建议保留原始图片备份，需要时再重新压缩。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：浏览器端压缩安全吗？</p>
      <p class="text-gray-600">答：浏览器端压缩（客户端压缩）非常安全，图片不会上传到任何服务器，所有处理都在你的设备上完成，适合处理敏感图片。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">开始优化你的图片</h2>
  <p>图片优化是网站性能优化中最容易实施、效果最明显的环节之一。不需要复杂的技术知识，只需选择合适的压缩参数，就能显著提升网站速度。</p>
  
  <div class="mt-6 p-5 bg-green-50 border border-green-100 rounded-lg">
    <p class="font-medium text-green-900 mb-2">🎯 图片优化检查清单：</p>
    <ul class="text-green-800 space-y-1">
      <li>• 为网站图片选择合适的格式（WebP > JPEG > PNG）</li>
      <li>• 设置合理的压缩质量（一般80%左右）</li>
      <li>• 控制单张图片大小（网页用图建议<200KB）</li>
      <li>• 根据显示尺寸调整图片分辨率（不要上传4000px宽度的缩略图）</li>
      <li>• 使用响应式图片，为不同设备提供合适尺寸</li>
    </ul>
  </div>
  
  <p class="mt-6 text-center text-gray-600">好的图片压缩工具，是每位网站运营者和内容创作者的必备利器。现在就开始优化你的图片吧！</p>
</div>
`;export{r as default};
