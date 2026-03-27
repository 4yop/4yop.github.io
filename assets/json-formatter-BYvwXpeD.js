const e=`
<div class="text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-8 text-center">JSON格式化工具：让混乱的数据变得清晰可读</h1>

  <div class="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="m-0 font-medium text-blue-900">开发者的时间不应该浪费在手动整理数据上</p>
    <p class="mt-2 mb-0">如果你经常和API接口、配置文件或数据交换打交道，JSON格式化工具将成为你工作流程中不可或缺的助手。它能把一团乱麻般的JSON数据，瞬间变成结构清晰、易于阅读和分析的格式。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">JSON是什么？为什么它无处不在？</h2>
  <p>JSON（JavaScript Object Notation）是一种轻量级的数据交换格式。它诞生于2001年，如今已成为互联网上数据交换的事实标准。</p>
  
  <p>从Web API响应到配置文件，从移动应用到物联网设备，JSON几乎无处不在：</p>
  <ul class="my-4 pl-5 space-y-2">
    <li>• <strong>前后端通信</strong>：RESTful API的标准数据格式</li>
    <li>• <strong>配置文件</strong>：package.json、tsconfig.json等</li>
    <li>• <strong>数据存储</strong>：NoSQL数据库（如MongoDB）的文档格式</li>
    <li>• <strong>日志记录</strong>：结构化日志的标准格式</li>
    <li>• <strong>第三方集成</strong>：几乎所有现代服务都提供JSON格式的API</li>
  </ul>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">未经格式化的JSON有多难读？</h2>
  <p>想象一下，你正在调试一个API接口，返回的数据是这样的：</p>
  
  <div class="bg-gray-900 text-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
    <pre class="text-sm">{"user":{"name":"张三","age":28,"email":"zhangsan@example.com","address":{"city":"北京","zip":"100000"},"hobbies":["编程","阅读","旅行"]},"status":"active","createdAt":"2024-01-15T08:30:00Z"}</pre>
  </div>
  
  <p>在一行密密麻麻的字符中找到特定字段，不仅费时费力，还容易出错。特别是当数据嵌套层级较深时，阅读体验简直是灾难。</p>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">格式化后的JSON：一目了然</h2>
  <p>经过格式化，同样的数据变成了这样：</p>
  
  <div class="bg-gray-900 text-green-400 p-4 rounded-lg my-4 overflow-x-auto">
    <pre class="text-sm">{
  "user": {
    "name": "张三",
    "age": 28,
    "email": "zhangsan@example.com",
    "address": {
      "city": "北京",
      "zip": "100000"
    },
    "hobbies": [
      "编程",
      "阅读",
      "旅行"
    ]
  },
  "status": "active",
  "createdAt": "2024-01-15T08:30:00Z"
}</pre>
  </div>

  <p class="mt-4">结构清晰、层级分明，每个字段都一目了然。这就是JSON格式化工具的价值。</p>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">一个好用的JSON格式化工具应该具备什么功能？</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <h3 class="font-medium text-gray-800 mb-2">🎨 语法高亮</h3>
      <p class="text-sm text-gray-600">用不同颜色区分键、字符串、数字、布尔值，让数据结构更加直观。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <h3 class="font-medium text-gray-800 mb-2">📐 智能缩进</h3>
      <p class="text-sm text-gray-600">自动添加适当的空格和换行，清晰展示数据的层级关系。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <h3 class="font-medium text-gray-800 mb-2">✅ 语法验证</h3>
      <p class="text-sm text-gray-600">实时检测JSON语法错误，精确定位问题所在，节省调试时间。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <h3 class="font-medium text-gray-800 mb-2">🌳 树形视图</h3>
      <p class="text-sm text-gray-600">可折叠/展开的层级结构，方便浏览大型JSON文档。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <h3 class="font-medium text-gray-800 mb-2">🔍 搜索功能</h3>
      <p class="text-sm text-gray-600">在大型JSON数据中快速定位特定键或值。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <h3 class="font-medium text-gray-800 mb-2">📋 一键复制</h3>
      <p class="text-sm text-gray-600">格式化后的结果一键复制到剪贴板，方便粘贴使用。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">实际应用场景</h2>
  
  <div class="space-y-6 my-6">
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">场景一：API接口调试</h3>
      <p>后端开发者小王正在调试一个用户查询接口。返回的JSON数据有上千行，嵌套了用户信息、订单记录、地址列表等多个对象。使用JSON格式化工具，他可以快速折叠不关心的部分，专注于当前调试的字段，效率提升数倍。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">场景二：配置文件编辑</h3>
      <p>前端开发者小李需要修改项目的package.json文件。格式化后的配置文件结构清晰，依赖项、脚本命令、项目元数据分区明确，修改起来得心应手，大大降低了出错概率。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">场景三：数据分析</h3>
      <p>数据分析师小张从数据库导出了用户行为数据，格式是JSON。通过格式化工具，他可以快速理解数据结构，找到需要的字段，为后续的数据处理和分析工作打下基础。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">JSON使用小贴士</h2>
  
  <div class="bg-yellow-50 p-5 rounded-lg my-6 border border-yellow-200">
    <h3 class="font-medium text-yellow-800 mb-3">常见JSON错误及解决方法：</h3>
    <ul class="space-y-2 text-yellow-700">
      <li>• <strong>尾随逗号</strong>：JSON不允许最后一个元素后面有逗号，删除即可</li>
      <li>• <strong>单引号</strong>：JSON字符串必须使用双引号，将单引号替换为双引号</li>
      <li>• <strong>注释</strong>：标准JSON不支持注释，需要移除 // 或 /* */ 注释</li>
      <li>• <strong>未定义值</strong>：使用 null 而不是 undefined</li>
    </ul>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见问题解答</h2>
  
  <div class="space-y-4 my-6">
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：JSON和JavaScript对象有什么区别？</p>
      <p class="text-gray-600">答：虽然JSON语法源自JavaScript，但它们是不同的事物。JSON是文本格式，JavaScript对象是内存中的数据结构。JSON的键必须用双引号包裹，且不支持函数、undefined等JavaScript特性。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：格式化后的JSON还能被程序解析吗？</p>
      <p class="text-gray-600">答：当然可以。格式化只是添加了空白字符让数据更易读，不会改变数据的结构和内容。所有JSON解析器都能正常处理格式化后的JSON。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：如何处理超大JSON文件？</p>
      <p class="text-gray-600">答：对于几十MB以上的JSON文件，建议使用专门的JSON处理工具或命令行工具（如jq）。浏览器端的格式化工具适合处理几MB以内的数据。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">提升你的开发效率</h2>
  <p>JSON格式化工具看似简单，却能在日常开发工作中节省大量时间。与其在混乱的数据中苦苦挣扎，不如让工具帮你把数据整理得井井有条。</p>
  
  <div class="mt-6 p-5 bg-green-50 border border-green-100 rounded-lg">
    <p class="font-medium text-green-900 mb-2">💡 使用建议：</p>
    <ul class="text-green-800 space-y-1">
      <li>• 将JSON格式化工具加入浏览器书签，随时可用</li>
      <li>• 在IDE中安装JSON格式化插件，本地文件也能一键美化</li>
      <li>• 养成先格式化再查看的习惯，培养良好的数据阅读习惯</li>
      <li>• 结合JSON Schema验证，确保数据格式符合预期</li>
    </ul>
  </div>
  
  <p class="mt-6 text-center text-gray-600">好的工具能让工作事半功倍。从今天开始，让JSON格式化成为你数据处理流程中的标准步骤。</p>
</div>
`;export{e as default};
