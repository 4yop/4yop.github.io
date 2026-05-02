const t=`
<div class="bg-gray-50 text-gray-800">
  <div class="max-w-4xl mx-auto px-4 py-8 md:px-6">
    <!-- 文章标题 -->
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-6 leading-tight">
      天数计算器：轻松算出那些对你重要的日子，过了多久
    </h1>
    <p class="text-lg text-gray-600 text-center mb-10 leading-relaxed">
      你是否曾好奇，距离某个特别的日子，已经过去了多少年、多少月、甚至多少秒？一个简单工具就能告诉你答案。
    </p>

    <!-- 引语部分 -->
    <div class="bg-blue-50 border-l-4 border-blue-400 p-5 mb-8 rounded-r">
      <p class="text-gray-700 italic">
        “时间看不见也摸不着，但我们总想为它标上刻度。从出生那天起，到第一次远行，再到某个铭记于心的纪念日，计算天数，是我们丈量生活的一种方式。”
      </p>
    </div>

    <!-- 工具能做什么 -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 pb-2 border-b">这个计算器，到底能算什么？</h2>
      <p class="mb-4 leading-relaxed">
        它就像一个专注于时间的尺子。你只需要告诉它一个<strong>过去的日期</strong>，它就能立刻帮你算出，从那天到现在，总共经历了多长时间。
      </p>
      <ul class="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>人生里程碑：</strong> 算算你来到这个世界已经多少天，或者你的孩子出生多久了。</li>
        <li><strong>爱情与纪念：</strong> 想知道恋爱或结婚至今的具体年、月、日吗？它都能精确显示。</li>
        <li><strong>工作与学习：</strong> 入职公司多少天？距离一个项目启动过去了多久？帮你清晰记录。</li>
        <li><strong>历史与社会大事：</strong> 对重要的历史时刻感到好奇？比如新中国成立至今的精确时间。</li>
        <li><strong>未来倒数：</strong> 虽然主要计算过去，但理解时间跨度也能帮你更好地期待未来的目标。</li>
      </ul>
    </div>

    <!-- 为什么我们需要计算天数 -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 pb-2 border-b">为什么要计算得这么仔细？</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-5 rounded-lg shadow-sm border">
          <h3 class="text-xl font-medium mb-2 text-blue-600">让记忆更具体</h3>
          <p class="leading-relaxed">
            说“好几年了”很模糊，但“1825天”这个数字会瞬间让你的记忆变得清晰可触。时间被量化，情感也因此有了更坚实的载体。
          </p>
        </div>
        <div class="bg-white p-5 rounded-lg shadow-sm border">
          <h3 class="text-xl font-medium mb-2 text-green-600">见证成长与积累</h3>
          <p class="leading-relaxed">
            无论是坚持一个习惯，还是经营一段关系，看到不断累积增长的天数，本身就是一种无声的鼓励和成就感的来源。
          </p>
        </div>
      </div>
    </div>

    <!-- 如何使用 -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 pb-2 border-b">如何使用它？（非常简单）</h2>
      <div class="space-y-6">
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">1</div>
          <div>
            <h3 class="text-lg font-medium mb-1">选择你的起始日</h3>
            <p class="text-gray-700 leading-relaxed">
              在页面上找到一个日历选择框，点击它，然后选出那个对你意义非凡的年、月、日，甚至可以精确到当时的时刻。
            </p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-3">2</div>
          <div>
            <h3 class="text-lg font-medium mb-1">查看丰富的结果</h3>
            <p class="text-gray-700 leading-relaxed">
              选择完成后，下方会立刻出现一个清晰的结果面板。你会看到两种时间呈现方式：
            </p>
            <ul class="list-disc pl-5 mt-2 text-gray-600">
              <li><strong>总计数：</strong> 从那天起，一共过去了多少天、多少小时、多少分钟。</li>
              <li><strong>详细分解：</strong> 像“X年Y个月Z天A小时B分钟C秒”这样更符合我们日常习惯的说法。</li>
            </ul>
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-3">3</div>
          <div>
            <h3 class="text-lg font-medium mb-1">试试快捷按钮</h3>
            <p class="text-gray-700 leading-relaxed">
              如果你一时想不到要算哪天，或者想看看一些公共纪念日的时间，可以试试页面上的预设按钮，比如“新中国成立”、“北京奥运”等，一键就能看到结果。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 时间单位的意义 -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 pb-2 border-b">看懂那些数字：时间单位的意义</h2>
      <p class="mb-4 leading-relaxed">
        计算器给出的不同数字，可以帮助你从不同角度理解时间的跨度：
      </p>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border rounded-lg">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 border-b text-left font-medium">单位</th>
              <th class="py-3 px-4 border-b text-left font-medium">它告诉你什么</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-50">
              <td class="py-3 px-4 border-b font-medium">总天数</td>
              <td class="py-3 px-4 border-b">最宏观的衡量，适合记录长期坚持或人生大阶段。</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="py-3 px-4 border-b font-medium">年、月、日</td>
              <td class="py-3 px-4 border-b">我们最熟悉、最口语化的表达方式，方便与人分享。</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="py-3 px-4 border-b font-medium">总小时/分钟</td>
              <td class="py-3 px-4 border-b">当时间跨度没那么长时，这些单位会让你更觉震撼，感受分秒的珍贵。</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="py-3 px-4 border-b font-medium">秒</td>
              <td class="py-3 px-4 border-b">时间最精细的刻度，而且数字在实时跳动，让你直观感受到“此刻”正在流逝。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 关于里程碑 -->
    <div class="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
      <h2 class="text-2xl font-semibold mb-3">一个小惊喜：里程碑</h2>
      <p class="mb-3 leading-relaxed">
        除了基本计算，这个工具还会帮你关注一些特殊的“整点”时刻。
      </p>
      <p class="text-gray-700 leading-relaxed">
        例如，当你计算自己的生日或纪念日时，它会自动算出“百日”、“一周年”、“千日”等里程碑日期。已经过去的，它会标记为“已达成”；未来的，则会告诉你“还需X天”，像一个小小的时间向导，帮你期待下一个值得庆祝的日子。
      </p>
    </div>

    <!-- 结语 -->
    <div class="text-center pt-6 border-t">
      <h2 class="text-2xl font-semibold mb-4">开始你的时间旅行吧</h2>
      <p class="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
        时间对每个人都是公平的，但赋予时间的意义却各不相同。找一个安静的片刻，输入那个对你而言独一无二的日期。看看跳动的数字，回想那段时光。计算天数，不只是为了一个结果，更是为了<span class="font-medium text-gray-900">重温、确认和纪念</span>。
      </p>
      <p class="text-gray-500">
        希望这个简单的小工具，能帮你更好地收藏那些闪亮的日子。
      </p>
    </div>
  </div>
</div>
`;export{t as default};
