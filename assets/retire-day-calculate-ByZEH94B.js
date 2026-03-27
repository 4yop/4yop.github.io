const t=`
<div class="max-w-4xl mx-auto px-4 md:px-0 py-8 text-gray-700">
  <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">一键算出你的退休日期，看看你还要工作多少年？</h1>
  <div class="text-center text-gray-500 text-sm mb-8">最后更新：${new Date().toLocaleDateString("zh-CN")}</div>

  <div class="mb-10">
    <p class="mb-4 leading-relaxed">你是否也曾算过，自己距离退休还有多少天？是几十年后的遥远未来，还是近在眼前的几年光阴？对于很多上班族来说，“退休”是一个既期待又模糊的概念。我们知道大概的年龄，却很少去精确计算那个具体的日子。</p>
    <p class="leading-relaxed">这篇文章，我们就来聊聊怎么轻松算出你的法定退休日期，以及这个日期背后，对我们生活规划的意义。</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
    <p class="font-medium text-gray-800">文章看点：</p>
    <ul class="mt-2 space-y-1 text-gray-600">
      <li>· 法定退休年龄是怎么规定的？</li>
      <li>· 如何快速计算自己的精准退休日期？</li>
      <li>· 知道退休日期后，对我们有什么实际帮助？</li>
    </ul>
  </div>

  <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-6 pb-2 border-b border-gray-200">一、我们的法定退休年龄是多少？</h2>
  <p class="mb-4 leading-relaxed">目前，我们国家有一套通用的退休年龄规定，这也是大多数企事业单位员工参考的标准：</p>
  <div class="overflow-x-auto my-6">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="py-3 px-4 border-b text-left font-medium text-gray-700">人员类别</th>
          <th class="py-3 px-4 border-b text-left font-medium text-gray-700">退休年龄</th>
          <th class="py-3 px-4 border-b text-left font-medium text-gray-700">简要说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-3 px-4 border-b">男性职工</td>
          <td class="py-3 px-4 border-b font-mono">60周岁</td>
          <td class="py-3 px-4 border-b text-gray-600">这是最常见的标准。</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border-b">女性干部</td>
          <td class="py-3 px-4 border-b font-mono">55周岁</td>
          <td class="py-3 px-4 border-b text-gray-600">通常在管理或技术岗位的女性。</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border-b">女性工人</td>
          <td class="py-3 px-4 border-b font-mono">50周岁</td>
          <td class="py-3 px-4 border-b text-gray-600">从事普通岗位工作的女性。</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm text-gray-500 italic mt-2">注：本文讨论的计算主要基于上述广泛应用的通用标准。像特殊工种、高级专家或未来的延迟退休政策等特殊情况，会有不同的规定。</p>

  <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-6 pb-2 border-b border-gray-200">二、为什么要精确计算退休日期？</h2>
  <p class="mb-4 leading-relaxed">知道一个“大概年龄”和知道“具体是哪年哪月哪日”，感觉是完全不同的。精确计算能带来更清晰的规划视角。</p>
  <div class="grid md:grid-cols-2 gap-6 my-8">
    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div class="text-blue-600 font-bold text-lg mb-2">1. 人生规划更清晰</div>
      <p class="text-gray-600">当你知道距离退休还有“15年3个月零10天”时，你可能会更具体地思考：如何利用这段黄金工作期提升自己？退休后的生活目标是什么？</p>
    </div>
    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div class="text-blue-600 font-bold text-lg mb-2">2. 财务安排有依据</div>
      <p class="text-gray-600">养老储蓄、商业养老保险、投资计划……这些都需要一个明确的时间节点。知道了退休日，你可以倒推出每一年需要完成的储蓄目标。</p>
    </div>
  </div>

  <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-6 pb-2 border-b border-gray-200">三、常见问题解答</h2>
  <div class="space-y-6 my-8">
    <div>
      <div class="font-bold text-gray-800 mb-2">问：计算出来的退休日期一定准确吗？</div>
      <p class="text-gray-600 pl-4">答：计算工具基于当前广泛执行的法定退休年龄政策。它可以给你一个非常准确的参考日期。但请记住，个人的具体退休时间还可能受到工种、职称、单位性质以及未来国家政策调整的影响，最终请以办理退休时当地社保部门的规定为准。</p>
    </div>
    <div>
      <div class="font-bold text-gray-800 mb-2">问：如果赶上“延迟退休”怎么办？</div>
      <p class="text-gray-600 pl-4">答：这是一个大家都关心的话题。目前计算工具使用的是现行政策。如果未来实施渐进式延迟退休方案，你的退休年龄可能会比现在计算的结果稍晚一些。计算工具的意义在于帮你建立一个“基准线”，让你对未来的变化有心理准备和调整空间。</p>
    </div>
    <div>
      <div class="font-bold text-gray-800 mb-2">问：我是灵活就业人员，也按这个算吗？</div>
      <p class="text-gray-600 pl-4">答：通常情况下，个人缴纳社保的灵活就业人员，男性的退休年龄也是60周岁，女性则多为55周岁（部分地区可能有差异，建议咨询当地社保局）。你可以先按此标准计算，作为参考。</p>
    </div>
  </div>

  <div class="mt-12 p-8 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-blue-100">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">写在最后</h2>
    <p class="leading-relaxed mb-4">算出退休日期，不是为了“数着日子等退休”，而是为了更好地规划和珍惜当下的时光。</p>
    <p class="leading-relaxed">无论是还有几千天奋斗的日子，还是已经步入退休享受生活，每个阶段都有独特的风景和价值。希望这个小小的计算，能帮你更清晰地看见未来那条路，从而更踏实、更有目标地走好现在的每一步。</p>
    <p class="text-gray-500 text-sm mt-6 italic">温馨提醒：所有计算结果仅供个人规划参考，不具备法律效力。具体退休事宜请务必以退休时国家及地方的最新政策规定和社保部门的核定为准。</p>
  </div>
</div>
`;export{t as default};
