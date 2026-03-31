const t=`
<article class="max-w-3xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-sm text-gray-800">
  <header class="mb-8 pb-6 border-b border-gray-200">
    <h1 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900">链接分享总出错？这个小工具帮你把复杂信息“装”进网址里</h1>
    <p class="text-gray-600">你有没有遇到过，想和别人分享一个带有很多选项的网页，结果对方打开的却是一片空白？今天，我们就来聊聊这个常常被忽视，却又实实在在影响效率的小麻烦。</p>
  </header>

  <section class="mb-10">
    <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-900">你很可能遇到过这些情况</h2>
    <div class="space-y-4">
      <div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <p class="font-medium mb-1">场景一：分享商品筛选结果</p>
        <p class="text-gray-700">你在购物网站筛选了“价格500-1000元”、“红色”、“包邮”的商品，想把结果页分享给朋友。你复制了浏览器顶部的长链接发过去，可朋友点开一看，怎么筛选条件全没了，显示的是所有商品？</p>
      </div>
      <div class="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
        <p class="font-medium mb-1">场景二：填写好的表单或问卷</p>
        <p class="text-gray-700">你费劲填完了一个长长的在线申请表，里面有个人信息、多个选项和勾选内容。临时有事关闭了网页，再想打开时，之前填好的内容全都不见了，一切都要重头再来，是不是很崩溃？</p>
      </div>
    </div>
    <p class="mt-4 text-gray-700">这些问题，其实都和一个叫做“<strong>网址里的查询信息</strong>”有关。它能把你选择的所有条件，“打包”进一个链接里，让分享和保存变得无比简单。</p>
  </section>

  <section class="mb-10">
    <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-900">像“快递单”和“地址标签”的关系</h2>
    <p class="mb-4 text-gray-700">想象一下，你要寄一个快递。</p>
    <div class="flex flex-col md:flex-row items-center mb-6 gap-6">
      <div class="flex-1 p-5 border border-gray-300 rounded-lg bg-gray-50">
        <p class="font-medium mb-2 text-center">详细的快递单</p>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>收件人：张三</li>
          <li>电话：138xxxx1234</li>
          <li>物品：书籍(3本)、衣服(2件)</li>
          <li>备注：易碎品，轻拿轻放</li>
        </ul>
        <p class="text-xs text-gray-500 mt-3 text-center">（包含所有详细信息，但内容多，体积大）</p>
      </div>
      <div class="text-2xl text-gray-400">→</div>
      <div class="flex-1 p-5 border border-blue-200 rounded-lg bg-blue-50">
        <p class="font-medium mb-2 text-center">贴在箱子上的小标签</p>
        <p class="text-sm text-gray-800 font-mono break-all">name=张三&phone=138xxxx1234&items=书籍,衣服&note=易碎</p>
        <p class="text-xs text-gray-500 mt-3 text-center">（提取关键信息，压缩成简洁的格式，方便传递）</p>
      </div>
    </div>
    <p class="text-gray-700">我们工具做的事，就是把左边那份详细的“快递单”（结构化的数据），转换成右边那种能贴在“快递箱”（网址）上的简洁“小标签”（查询字符串）。反过来，也能把“小标签”还原成清晰易读的“快递单”。</p>
  </section>

  <section class="mb-10">
    <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-900">这能给你带来什么方便？</h2>
    <ul class="space-y-4">
      <li class="flex items-start">
        <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3 mt-1">1</div>
        <div>
          <p class="font-medium text-gray-900">省时省力，一键分享完整状态</p>
          <p class="text-gray-700">无论是复杂的搜索结果、包含多选项的表单，还是一个游戏进度，都能浓缩成一个链接。发给别人，对方看到的就是和你一模一样的页面状态，无需再次设置。</p>
        </div>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 mt-1">2</div>
        <div>
          <p class="font-medium text-gray-900">准确无误，告别信息错漏</p>
          <p class="text-gray-700">用文字或截图描述多个选项容易遗漏，而链接里的信息是精确的。保存为书签或稍后打开，内容也不会丢失。</p>
        </div>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center mr-3 mt-1">3</div>
        <div>
          <p class="font-medium text-gray-900">操作简单，无需专业知识</p>
          <p class="text-gray-700">你只需要准备一份清晰的数据清单，剩下的转换工作交给工具就行。还能选择是否需要将中文字符进行安全编码，确保链接在任何地方都能正常打开。</p>
        </div>
      </li>
    </ul>
  </section>

  <section class="mb-10">
    <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-900">生活中的实际应用</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
        <h3 class="font-semibold mb-3 text-gray-900">给同事分享精准的调研数据</h3>
        <p class="text-gray-700">小李在做市场调研，他筛选了“华东地区”、“25-35岁”、“月消费超过3000元”的用户数据图表。他使用工具生成一个链接发给团队，每个人点开都能立刻看到完全相同的分析视图，极大提升了沟通效率。</p>
      </div>
      <div class="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
        <h3 class="font-semibold mb-3 text-gray-900">保存未完成的在线申请</h3>
        <p class="text-gray-700">小王在申请一项服务，填了半天的表格临时要出门。他利用工具，将已填好的部分（姓名、联系方式、选择的套餐等）生成一个专属链接保存下来。回来后点击这个链接，之前填写的内容自动恢复，可以直接继续，无需重填。</p>
      </div>
    </div>
  </section>

  <section class="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
    <p class="text-lg font-medium mb-3 text-gray-900">想要体验这种“把复杂信息装进链接”的便利吗？</p>
    <p class="text-gray-700 mb-4">我们准备了一个简单易用的在线工具，你不需要理解背后的技术原理，只需要专注于你的数据和需求。</p>
    <a href="#转换工具" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
      前往免费转换工具
    </a>
    <p class="text-sm text-gray-500 mt-4">试试看，你会发现分享和保存多选项信息，原来可以如此简单。</p>
  </section>
</article>
`;export{t as default};
