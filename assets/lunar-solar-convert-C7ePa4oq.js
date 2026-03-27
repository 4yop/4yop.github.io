const r=`
<div class="text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-8 text-center">农历阳历转换工具：轻松查询传统与现代日期</h1>

  <div class="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="m-0 font-medium text-blue-900">你的农历生日是哪天？</p>
    <p class="mt-2 mb-0">很多年轻人只记得自己的阳历生日，但长辈们更习惯用农历。农历阳历转换工具帮你轻松在这两种历法之间切换，无论是查询传统节日、安排生日庆祝，还是了解老黄历，都能快速搞定。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">为什么需要农历阳历转换？</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🎂 生日查询</h3>
      <p class="text-sm text-gray-600">查询农历生日对应的阳历日期，或反之，不错过重要的生日庆祝。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">🧧 传统节日</h3>
      <p class="text-sm text-gray-600">春节、中秋、端午等传统节日都按农历计算，需要转换才能确定阳历日期。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">📅 择日办事</h3>
      <p class="text-sm text-gray-600">搬家、结婚、开业等传统习俗需要参考农历黄道吉日。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg">
      <h3 class="font-medium text-gray-800 mb-2">👴 长辈沟通</h3>
      <p class="text-sm text-gray-600">方便与习惯使用农历的长辈交流日期，避免误解。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">农历与阳历的区别</h2>
  
  <div class="overflow-x-auto my-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left">对比项</th>
          <th class="border border-gray-300 p-3 text-left">阳历（公历）</th>
          <th class="border border-gray-300 p-3 text-left">农历（阴历）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">起源</td>
          <td class="border border-gray-300 p-3">西方，基于太阳运行</td>
          <td class="border border-gray-300 p-3">中国传统，基于月相变化</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">月份天数</td>
          <td class="border border-gray-300 p-3">固定（28-31天）</td>
          <td class="border border-gray-300 p-3">不固定（29或30天）</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">年份天数</td>
          <td class="border border-gray-300 p-3">365或366天</td>
          <td class="border border-gray-300 p-3">353-355天（平年）或383-385天（闰年）</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">新年日期</td>
          <td class="border border-gray-300 p-3">固定1月1日</td>
          <td class="border border-gray-300 p-3">不固定（1月下旬至2月中旬）</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">使用场景</td>
          <td class="border border-gray-300 p-3">国际通用、官方事务</td>
          <td class="border border-gray-300 p-3">传统节日、民俗活动</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">农历的奥秘：闰月与节气</h2>
  
  <div class="space-y-4 my-6">
    <div class="p-5 bg-indigo-50 rounded-lg border border-indigo-100">
      <h3 class="font-medium text-indigo-800 mb-2">什么是闰月？</h3>
      <p class="text-indigo-700">农历采用"十九年七闰"的规则来协调太阳年和月亮月的关系。当某个月份没有中气（二十四节气中的偶数位节气）时，就设为闰月。闰月会导致该农历年有13个月，全年约384天。</p>
    </div>
    
    <div class="p-5 bg-green-50 rounded-lg border border-green-100">
      <h3 class="font-medium text-green-800 mb-2">二十四节气</h3>
      <p class="text-green-700">农历融合了二十四节气，这是中国古代农耕文明的智慧结晶。节气按照太阳在黄道上的位置划分，指导农事活动。如立春、清明、夏至、冬至等。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">2024-2025年主要传统节日对照</h2>
  
  <div class="overflow-x-auto my-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left">节日</th>
          <th class="border border-gray-300 p-3 text-left">农历日期</th>
          <th class="border border-gray-300 p-3 text-left">2024年阳历</th>
          <th class="border border-gray-300 p-3 text-left">2025年阳历</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">春节</td>
          <td class="border border-gray-300 p-3">正月初一</td>
          <td class="border border-gray-300 p-3">2月10日</td>
          <td class="border border-gray-300 p-3">1月29日</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">元宵节</td>
          <td class="border border-gray-300 p-3">正月十五</td>
          <td class="border border-gray-300 p-3">2月24日</td>
          <td class="border border-gray-300 p-3">2月12日</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">清明节</td>
          <td class="border border-gray-300 p-3">（节气）</td>
          <td class="border border-gray-300 p-3">4月4日</td>
          <td class="border border-gray-300 p-3">4月4日</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">端午节</td>
          <td class="border border-gray-300 p-3">五月初五</td>
          <td class="border border-gray-300 p-3">6月10日</td>
          <td class="border border-gray-300 p-3">5月31日</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">七夕节</td>
          <td class="border border-gray-300 p-3">七月初七</td>
          <td class="border border-gray-300 p-3">8月10日</td>
          <td class="border border-gray-300 p-3">8月29日</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">中秋节</td>
          <td class="border border-gray-300 p-3">八月十五</td>
          <td class="border border-gray-300 p-3">9月17日</td>
          <td class="border border-gray-300 p-3">10月6日</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">重阳节</td>
          <td class="border border-gray-300 p-3">九月初九</td>
          <td class="border border-gray-300 p-3">10月11日</td>
          <td class="border border-gray-300 p-3">10月29日</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">生肖与干支纪年</h2>
  
  <p>农历使用干支纪年法，每60年一个周期。同时每年对应一个生肖，12年一轮回。</p>
  
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
    <div class="p-3 bg-red-50 rounded text-center">
      <div class="text-2xl">🐭</div>
      <div class="text-sm font-medium">鼠年</div>
      <div class="text-xs text-gray-500">2020, 2032</div>
    </div>
    <div class="p-3 bg-yellow-50 rounded text-center">
      <div class="text-2xl">🐮</div>
      <div class="text-sm font-medium">牛年</div>
      <div class="text-xs text-gray-500">2021, 2033</div>
    </div>
    <div class="p-3 bg-blue-50 rounded text-center">
      <div class="text-2xl">🐯</div>
      <div class="text-sm font-medium">虎年</div>
      <div class="text-xs text-gray-500">2022, 2034</div>
    </div>
    <div class="p-3 bg-green-50 rounded text-center">
      <div class="text-2xl">🐰</div>
      <div class="text-sm font-medium">兔年</div>
      <div class="text-xs text-gray-500">2023, 2035</div>
    </div>
    <div class="p-3 bg-red-50 rounded text-center">
      <div class="text-2xl">🐲</div>
      <div class="text-sm font-medium">龙年</div>
      <div class="text-xs text-gray-500">2024, 2036</div>
    </div>
    <div class="p-3 bg-yellow-50 rounded text-center">
      <div class="text-2xl">🐍</div>
      <div class="text-sm font-medium">蛇年</div>
      <div class="text-xs text-gray-500">2025, 2037</div>
    </div>
    <div class="p-3 bg-blue-50 rounded text-center">
      <div class="text-2xl">🐴</div>
      <div class="text-sm font-medium">马年</div>
      <div class="text-xs text-gray-500">2026, 2038</div>
    </div>
    <div class="p-3 bg-green-50 rounded text-center">
      <div class="text-2xl">🐑</div>
      <div class="text-sm font-medium">羊年</div>
      <div class="text-xs text-gray-500">2027, 2039</div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见问题解答</h2>
  
  <div class="space-y-4 my-6">
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：农历和阴历是一回事吗？</p>
      <p class="text-gray-600">答：日常生活中常混用，但严格来说有区别。农历是阴阳合历，既考虑月相（阴历成分），又通过闰月协调太阳年（阳历成分）。而纯阴历只考虑月相。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：为什么农历新年每年日期不同？</p>
      <p class="text-gray-600">答：农历新年（春节）是农历正月初一。由于农历一年约354天，比阳历少11天左右，所以农历日期每年在阳历中会"漂移"约11天。为了协调，农历采用闰月，使春节保持在阳历1月下旬至2月中旬之间。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：农历生日每年阳历日期都不一样吗？</p>
      <p class="text-gray-600">答：是的。农历生日对应的阳历日期每年都会变化，通常比上一年晚约11天（遇闰月则变化不同）。如果想知道某年农历生日是阳历哪天，需要使用农历阳历转换工具查询。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：转换工具支持哪些年份范围？</p>
      <p class="text-gray-600">答：大多数工具支持1900年至2100年左右的转换，覆盖日常需求。某些专业工具可能支持更宽的年份范围，甚至上溯到清朝时期。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">连接传统与现代</h2>
  <p>农历承载着中华民族数千年的文化积淀，是传统节日、民俗活动的时间坐标。在现代社会，农历阳历转换工具成为连接传统与现代的重要桥梁，让我们既能享受现代生活的便利，又不遗忘传统文化的根脉。</p>
  
  <div class="mt-6 p-5 bg-green-50 border border-green-100 rounded-lg">
    <p class="font-medium text-green-900 mb-2">💡 使用建议：</p>
    <ul class="text-green-800 space-y-1">
      <li>• 提前查询传统节日的阳历日期，方便安排假期和活动</li>
      <li>• 记录家人的农历生日，按传统方式庆祝</li>
      <li>• 了解二十四节气，感受自然节律的变化</li>
      <li>• 将转换工具加入收藏，随时查询</li>
      <li>• 向外国朋友介绍中国农历文化时，用转换工具辅助说明</li>
    </ul>
  </div>
  
  <p class="mt-6 text-center text-gray-600">历法是人类丈量时间的标尺，农历与阳历各有其美。用好转换工具，让两种时间体系和谐共存。</p>
</div>
`;export{r as default};
