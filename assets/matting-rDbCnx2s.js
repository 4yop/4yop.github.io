const r=`
<div class="text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-8 text-center">智能抠图工具：一键去除背景，让主体脱颖而出</h1>

  <div class="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="m-0 font-medium text-blue-900">还在为去除图片背景发愁？</p>
    <p class="mt-2 mb-0">无论是制作证件照、设计电商产品图，还是创作社交媒体内容，去除图片背景都是常见需求。智能抠图工具利用AI技术，一键自动识别主体并去除背景，无需复杂的PS操作，几秒钟就能完成专业级效果。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">智能抠图的应用场景</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🪪 证件照制作</h3>
      <p class="text-sm text-gray-600">快速去除原背景，更换为白色、蓝色或红色背景，制作标准证件照。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🛍️ 电商产品图</h3>
      <p class="text-sm text-gray-600">去除产品背景，制作白底图或透明背景图，符合电商平台要求。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">📱 社交媒体</h3>
      <p class="text-sm text-gray-600">制作创意头像、表情包、合成图片，让内容更有趣。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🎨 设计创作</h3>
      <p class="text-sm text-gray-600">提取素材元素，用于海报、Banner、PPT等设计作品。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">AI抠图 vs 传统方法</h2>
  
  <div class="overflow-x-auto my-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left">对比项</th>
          <th class="border border-gray-300 p-3 text-left">AI智能抠图</th>
          <th class="border border-gray-300 p-3 text-left">传统PS抠图</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">操作难度</td>
          <td class="border border-gray-300 p-3 text-green-600">简单，一键完成</td>
          <td class="border border-gray-300 p-3 text-yellow-600">复杂，需要专业技能</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">处理时间</td>
          <td class="border border-gray-300 p-3 text-green-600">几秒钟</td>
          <td class="border border-gray-300 p-3 text-yellow-600">几分钟到几十分钟</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">边缘处理</td>
          <td class="border border-gray-300 p-3 text-green-600">自动识别，效果自然</td>
          <td class="border border-gray-300 p-3 text-green-600">精细控制，专业级</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">成本</td>
          <td class="border border-gray-300 p-3 text-green-600">免费或低成本</td>
          <td class="border border-gray-300 p-3 text-yellow-600">软件订阅费用</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">适用场景</td>
          <td class="border border-gray-300 p-3">日常需求、批量处理</td>
          <td class="border border-gray-300 p-3">专业设计、精细修图</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">AI抠图的工作原理</h2>
  
  <div class="space-y-4 my-6">
    <div class="p-5 bg-indigo-50 rounded-lg border border-indigo-100">
      <h3 class="font-medium text-indigo-800 mb-2">1. 图像识别</h3>
      <p class="text-indigo-700">AI模型分析图片内容，识别出前景主体（人物、物体）和背景区域。</p>
    </div>
    
    <div class="p-5 bg-blue-50 rounded-lg border border-blue-100">
      <h3 class="font-medium text-blue-800 mb-2">2. 边缘检测</h3>
      <p class="text-blue-700">精确识别主体边缘，处理头发丝、毛发等细节，确保抠图自然。</p>
    </div>
    
    <div class="p-5 bg-green-50 rounded-lg border border-green-100">
      <h3 class="font-medium text-green-800 mb-2">3. 背景移除</h3>
      <p class="text-green-700">将识别出的背景区域变为透明或纯色，保留主体完整。</p>
    </div>
    
    <div class="p-5 bg-purple-50 rounded-lg border border-purple-100">
      <h3 class="font-medium text-purple-800 mb-2">4. 优化输出</h3>
      <p class="text-purple-700">对边缘进行平滑处理，消除锯齿，生成高质量的PNG透明背景图片。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">使用技巧与注意事项</h2>
  
  <div class="bg-yellow-50 p-5 rounded-lg my-6 border border-yellow-200">
    <h3 class="font-medium text-yellow-800 mb-3">💡 获得最佳效果的建议：</h3>
    <ul class="space-y-2 text-yellow-700">
      <li>• <strong>主体清晰</strong>：确保主体与背景有明显对比，边缘清晰</li>
      <li>• <strong>光线均匀</strong>：避免主体一半过亮一半过暗，影响识别</li>
      <li>• <strong>背景简洁</strong>：复杂背景可能影响识别精度，纯色背景效果最佳</li>
      <li>• <strong>分辨率适中</strong>：图片过大可能导致处理缓慢，过小则影响细节</li>
      <li>• <strong>检查边缘</strong>：抠图后检查头发、手指等细节区域，必要时手动调整</li>
    </ul>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">抠图后的创意应用</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">🌅</div>
      <h3 class="font-medium text-gray-800 mb-2">换背景</h3>
      <p class="text-sm text-gray-600">将人物放到风景、城市或虚拟场景中</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">✨</div>
      <h3 class="font-medium text-gray-800 mb-2">加特效</h3>
      <p class="text-sm text-gray-600">添加阴影、描边、光效等视觉效果</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg text-center">
      <div class="text-3xl mb-2">🎭</div>
      <h3 class="font-medium text-gray-800 mb-2">做合成</h3>
      <p class="text-sm text-gray-600">多元素组合，创作创意图片</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见问题解答</h2>
  
  <div class="space-y-4 my-6">
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：AI抠图能处理复杂背景吗？</p>
      <p class="text-gray-600">答：现代AI抠图工具可以处理大多数复杂背景，但效果取决于主体与背景的对比度。对于头发丝、半透明物体等细节，高端工具表现更好。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：抠图后的图片是什么格式？</p>
      <p class="text-gray-600">答：通常输出为PNG格式，支持透明背景。如果不需要透明背景，也可以选择JPG格式并指定背景颜色。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：在线抠图工具安全吗？</p>
      <p class="text-gray-600">答：使用本地处理的工具非常安全，图片不会上传到服务器。避免使用需要上传图片到云端的服务处理敏感照片。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：抠图效果不满意怎么办？</p>
      <p class="text-gray-600">答：可以尝试更换原图（选择主体更清晰的），或使用支持手动调整的工具进行边缘修正。部分工具提供"保留"和"删除"画笔进行精细调整。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">让图片处理更简单</h2>
  <p>AI技术的发展让原本专业的设计技能变得触手可及。智能抠图工具让每个人都能轻松获得专业级的图片处理效果，无论是工作需求还是个人创作，都能事半功倍。</p>
  
  <div class="mt-6 p-5 bg-green-50 border border-green-100 rounded-lg">
    <p class="font-medium text-green-900 mb-2">✅ 使用建议：</p>
    <ul class="text-green-800 space-y-1">
      <li>• 选择本地处理的工具，保护图片隐私</li>
      <li>• 上传前确保图片质量，主体清晰</li>
      <li>• 抠图后检查细节，特别是头发和边缘</li>
      <li>• 保存为PNG格式保留透明背景</li>
      <li>• 尝试不同的背景替换，发挥创意</li>
    </ul>
  </div>
  
  <p class="mt-6 text-center text-gray-600">好的工具能让创意无限延伸。现在就开始体验智能抠图的魔力吧！</p>
</div>
`;export{r as default};
