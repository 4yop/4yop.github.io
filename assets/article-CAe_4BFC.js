const t=`
<div class="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-sans">
  <h1 class="text-3xl font-bold mb-4 text-gray-900 text-center">日出日落时间计算器</h1>
  <p class="text-gray-700 mb-6">
    日出日落是地球自转与公转共同作用的结果——太阳每天从东方升起、西方落下，但具体时刻因日期和地理位置而异。本工具基于天文算法，精确计算你所在位置每一天的日出、日落以及 16 个关键太阳时段（包括晨光始、黄昏、正午等），帮助你规划户外活动、摄影出行或日常作息。
  </p>

  <div class="bg-gray-50 p-5 rounded-lg mb-6">
    <h2 class="text-xl font-semibold mb-3 text-gray-900">📖 什么是日出日落</h2>
    <p class="text-gray-700 mb-3">
      <strong>日出</strong>指太阳上边缘首次露出地平线的瞬间，<strong>日落</strong>则是太阳完全没入地平线以下的瞬间。这两个时刻取决于：
    </p>
    <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-3">
      <li><strong>经纬度</strong>：越靠近两极，昼夜变化越极端；赤道附近全年昼长约 12 小时。</li>
      <li><strong>日期</strong>：夏至前后北半球白昼最长，冬至最短（南半球相反）。</li>
      <li><strong>海拔</strong>：海拔越高，日出越早、日落越晚（地平线更远）。</li>
      <li><strong>时区</strong>：计算结果会自动转换为当地时间。</li>
    </ul>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-6">
    <h2 class="text-lg font-semibold mb-2 text-blue-900">🌅 晨光与黄昏的三个阶段</h2>
    <p class="text-blue-800 text-sm mb-3">天文学根据太阳在地平线下的角度，将黎明和黄昏各分为三个阶段：</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="bg-white/70 rounded-lg p-3">
        <p class="font-semibold text-orange-600 text-sm">🌑 天文晨光 / 黄昏</p>
        <p class="text-xs text-gray-600 mt-1">太阳角度：-18° ~ -12°<br/>天空开始微亮，肉眼可见最亮的星体，适合天文观测</p>
      </div>
      <div class="bg-white/70 rounded-lg p-3">
        <p class="font-semibold text-yellow-600 text-sm">⛅ 航海晨光 / 黄昏</p>
        <p class="text-xs text-gray-600 mt-1">太阳角度：-12° ~ -6°<br/>地平线和主要星体清晰可见，水手可用以导航</p>
      </div>
      <div class="bg-white/70 rounded-lg p-3">
        <p class="font-semibold text-sky-600 text-sm">🌤️ 民用晨光 / 黄昏</p>
        <p class="text-xs text-gray-600 mt-1">太阳角度：-6° ~ 0°<br/>地面景物清晰可辨，无需人工照明即可进行户外活动</p>
      </div>
    </div>
  </div>

  <div class="bg-gray-50 p-5 rounded-lg mb-6">
    <h2 class="text-xl font-semibold mb-3 text-gray-900">🧭 如何使用</h2>
    <ol class="list-decimal pl-6 space-y-2 text-gray-700">
      <li><strong>选择日期</strong>：点击日期输入框选择你想查询的日期（默认当天）。</li>
      <li><strong>输入经纬度</strong>：手动输入或使用「获取当前位置」按钮自动定位。页面进入时会通过 IP 自动获取大致位置并缓存 1 小时。</li>
      <li><strong>设置海拔（可选）</strong>：如果你在高海拔地区，填写海拔高度可获得更精确的结果。每升高 1000 米，日出约提前 1~2 分钟。</li>
      <li><strong>查看结果</strong>：页面顶部横排显示今日日出、正午、日落时间和昼长；下方列表展示全部 16 个太阳时段的精确时刻。</li>
    </ol>
  </div>

  <div class="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-6">
    <h2 class="text-lg font-semibold mb-2 text-amber-900">💡 实际应用场景</h2>
    <ul class="list-disc pl-5 space-y-1.5 text-sm text-amber-900/80">
      <li><strong>摄影</strong>：「黄金时刻」在日出后和日落前 1 小时左右，光线柔和色彩丰富；「蓝色时刻」在民用晨光/黄昏期间，天空呈深蓝色调。</li>
      <li><strong>徒步露营</strong>：提前规划行程确保在天黑前到达营地，利用天文晨光判断安全出发时间。</li>
      <li><strong>农业种植</strong>：了解日照时长安排农事活动，不同作物对昼长有不同需求。</li>
      <li><strong>太阳能发电</strong>：根据日照时长估算光伏板发电量。</li>
      <li><strong>生物节律</strong>：日出日落影响人体褪黑素分泌，了解光照规律有助于调整作息。</li>
    </ul>
  </div>

  <div class="bg-gray-50 p-5 rounded-lg mb-6">
    <h2 class="text-xl font-semibold mb-3 text-gray-900">🔢 算法说明</h2>
    <p class="text-gray-700 mb-2">
      本工具采用 NOAA（美国国家海洋大气管理局）公开发布的<strong>太阳位置算法</strong>，核心步骤如下：
    </p>
    <ul class="list-disc pl-6 space-y-1.5 text-sm text-gray-600">
      <li>计算儒略世纪数（J2000 历元起算的世纪偏移量）</li>
      <li>计算太阳平近点角、平黄经、真黄经等轨道参数</li>
      <li>考虑地球轨道偏心率和倾角修正</li>
      <li>结合观测者经纬度和海拔，求解太阳时角方程</li>
      <li>输出 UTC 时间后转换为当地标准时间</li>
    </ul>
    <p class="text-gray-500 text-xs mt-3">
      注：计算精度通常在 ±1 分钟以内。极地地区（出现极昼/极夜）可能显示为 --:--。
    </p>
  </div>

  <div class="text-center text-gray-400 text-sm pt-4 border-t border-gray-200">
    数据仅供参考，实际时刻可能因局部地形、天气等因素略有偏差。
  </div>
</div>
`;export{t as default};
