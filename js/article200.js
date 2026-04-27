const r=`
<div class="text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-8 text-center">大小写转换工具：一键统一文本格式，告别手动修改</h1>

  <div class="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="m-0 font-medium text-blue-900">一段大小写混乱的文本，你准备怎么改？</p>
    <p class="mt-2 mb-0">手动一个个字母修改？太浪费时间了。大小写转换工具可以一键将文本转换为大写、小写或首字母大写格式，几秒钟完成原本需要几分钟的工作。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">大小写转换的常见应用场景</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
      <h3 class="font-medium text-gray-800 mb-2">📝 文档格式化</h3>
      <p class="text-sm text-gray-600">统一标题、段落的大小写风格，让文档更专业规范。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
      <h3 class="font-medium text-gray-800 mb-2">💻 编程开发</h3>
      <p class="text-sm text-gray-600">快速转换变量名、常量名（如camelCase、CONSTANT_CASE）。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
      <h3 class="font-medium text-gray-800 mb-2">📊 数据整理</h3>
      <p class="text-sm text-gray-600">统一Excel或数据库中的文本字段格式。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
      <h3 class="font-medium text-gray-800 mb-2">✍️ 内容创作</h3>
      <p class="text-sm text-gray-600">调整文章标题、社交媒体文案的大小写风格。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">支持的转换格式</h2>
  
  <div class="space-y-4 my-6">
    <div class="p-4 border-2 border-gray-200 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-gray-800">大写 (UPPERCASE)</h3>
        <span class="text-xs bg-gray-200 px-2 py-1 rounded">全大写</span>
      </div>
      <div class="bg-gray-100 p-3 rounded text-sm font-mono">
        <span class="text-gray-500">输入：</span>Hello World<br>
        <span class="text-gray-500">输出：</span>HELLO WORLD
      </div>
      <p class="text-sm text-gray-600 mt-2">适用于强调、标题、缩写或需要突出显示的场景。</p>
    </div>
    
    <div class="p-4 border-2 border-gray-200 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-gray-800">小写 (lowercase)</h3>
        <span class="text-xs bg-gray-200 px-2 py-1 rounded">全小写</span>
      </div>
      <div class="bg-gray-100 p-3 rounded text-sm font-mono">
        <span class="text-gray-500">输入：</span>Hello World<br>
        <span class="text-gray-500">输出：</span>hello world
      </div>
      <p class="text-sm text-gray-600 mt-2">适用于URL、文件名、某些编程场景或统一格式。</p>
    </div>
    
    <div class="p-4 border-2 border-gray-200 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-gray-800">首字母大写 (Title Case)</h3>
        <span class="text-xs bg-gray-200 px-2 py-1 rounded">标题格式</span>
      </div>
      <div class="bg-gray-100 p-3 rounded text-sm font-mono">
        <span class="text-gray-500">输入：</span>hello world<br>
        <span class="text-gray-500">输出：</span>Hello World
      </div>
      <p class="text-sm text-gray-600 mt-2">适用于文章标题、人名、地名、产品名等。</p>
    </div>
    
    <div class="p-4 border-2 border-gray-200 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-gray-800">句首大写 (Sentence case)</h3>
        <span class="text-xs bg-gray-200 px-2 py-1 rounded">句子格式</span>
      </div>
      <div class="bg-gray-100 p-3 rounded text-sm font-mono">
        <span class="text-gray-500">输入：</span>HELLO WORLD. THIS IS A TEST.<br>
        <span class="text-gray-500">输出：</span>Hello world. This is a test.
      </div>
      <p class="text-sm text-gray-600 mt-2">适用于正文段落、普通句子。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">开发者常用：命名风格转换</h2>
  
  <p>对于程序员来说，大小写转换是日常工作中最高频的操作之一。不同编程语言和场景有不同的命名规范：</p>
  
  <div class="overflow-x-auto my-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left">命名风格</th>
          <th class="border border-gray-300 p-3 text-left">示例</th>
          <th class="border border-gray-300 p-3 text-left">使用场景</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">camelCase</td>
          <td class="border border-gray-300 p-3 font-mono">userName, getData</td>
          <td class="border border-gray-300 p-3">JavaScript变量、函数</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">PascalCase</td>
          <td class="border border-gray-300 p-3 font-mono">UserName, GetData</td>
          <td class="border border-gray-300 p-3">类名、组件名</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">snake_case</td>
          <td class="border border-gray-300 p-3 font-mono">user_name, get_data</td>
          <td class="border border-gray-300 p-3">Python、数据库字段</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">CONSTANT_CASE</td>
          <td class="border border-gray-300 p-3 font-mono">MAX_SIZE, API_KEY</td>
          <td class="border border-gray-300 p-3">常量、配置项</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">kebab-case</td>
          <td class="border border-gray-300 p-3 font-mono">user-name, get-data</td>
          <td class="border border-gray-300 p-3">CSS类名、URL</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">实际使用案例</h2>
  
  <div class="space-y-6 my-6">
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">案例一：统一数据格式</h3>
      <p>数据分析师小王从多个来源收集了一批用户数据，发现姓名字段格式混乱：有的全大写（"ZHANG SAN"），有的全小写（"zhang san"），有的不规范（"zHANG sAN"）。使用大小写转换工具，一键将所有姓名统一为"首字母大写"格式，数据瞬间变得整洁规范。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">案例二：代码重构</h3>
      <p>开发者小李接手了一个老项目，发现代码中的常量命名不统一，有的是小写，有的是混合大小写。他使用大小写转换工具，快速将所有常量名统一为全大写的CONSTANT_CASE格式，代码规范性和可读性大大提升。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">案例三：文档排版</h3>
      <p>编辑小张正在整理一份报告，发现标题格式不统一。他使用大小写转换工具，将所有一级标题转换为全大写，二级标题转换为标题格式（Title Case），文档的专业感立即提升。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">使用技巧</h2>
  
  <div class="bg-yellow-50 p-5 rounded-lg my-6 border border-yellow-200">
    <h3 class="font-medium text-yellow-800 mb-3">💡 提高效率的小技巧：</h3>
    <ul class="space-y-2 text-yellow-700">
      <li>• <strong>批量处理</strong>：将多行文本一次性粘贴，统一转换格式</li>
      <li>• <strong>快捷键</strong>：熟悉工具的快捷键，操作更快</li>
      <li>• <strong>复制即用</strong>：转换后直接复制，无需手动选择</li>
      <li>• <strong>撤销功能</strong>：转换前保留原文，方便对比</li>
      <li>• <strong>特殊字符</strong>：注意某些特殊字符在转换时的处理</li>
    </ul>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见问题解答</h2>
  
  <div class="space-y-4 my-6">
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：转换会改变非英文字符吗？</p>
      <p class="text-gray-600">答：不会。大小写转换只影响英文字母（A-Z, a-z），中文字符、数字、符号等保持不变。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：可以转换整篇文章吗？</p>
      <p class="text-gray-600">答：可以。工具通常支持大段文本输入，但建议分段处理，以便更好地控制格式。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：转换后的文本可以撤销吗？</p>
      <p class="text-gray-600">答：建议在转换前复制保留原文。虽然可以再次转换，但多次转换可能无法完全恢复原样（如全大写转小写再转大写，原小写部分信息丢失）。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">让文本处理更高效</h2>
  <p>大小写转换看似简单，却是文本处理中最基础、最高频的操作之一。一个好用的工具，能让你从繁琐的手动修改中解放出来，专注于更有价值的工作。</p>
  
  <div class="mt-6 p-5 bg-green-50 border border-green-100 rounded-lg">
    <p class="font-medium text-green-900 mb-2">✅ 记住这些要点：</p>
    <ul class="text-green-800 space-y-1">
      <li>• 根据使用场景选择合适的转换格式</li>
      <li>• 转换前保留原文备份</li>
      <li>• 大段文本建议分段处理</li>
      <li>• 注意特殊字符和空格的保留</li>
      <li>• 将工具加入书签，随时可用</li>
    </ul>
  </div>
  
  <p class="mt-6 text-center text-gray-600">小工具，大效率。从今天开始，让大小写转换成为你文本处理的标准步骤。</p>
</div>
`;export{r as default};
