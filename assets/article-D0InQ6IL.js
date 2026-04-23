const t=`
<article class="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-sans" itemscope itemtype="https://schema.org/Article">
  <meta itemprop="datePublished" content="2024-02-10">
  <meta itemprop="author" content="Tools321">

  <header>
    <h1 class="text-3xl font-bold mb-4 text-gray-900 text-center" itemprop="headline">日出日落时间查询 - 全球今日日出日落时刻在线计算器</h1>
  </header>

  <section class="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200" itemprop="description">
    <h2 class="text-xl font-semibold mb-3 text-blue-800">什么是日出日落时间？</h2>
    <p class="mb-2">
      <strong>日出日落时间</strong>是指太阳从地平线升起（<strong>日出</strong>）和完全没入地平线以下（<strong>日落</strong>）的精确时刻。这两个时刻并非固定不变，而是随着<strong>地理位置（经纬度）</strong>、<strong>日期</strong>、<strong>海拔高度</strong>的不同而每天变化。本工具采用 NOAA 太阳位置算法，可精确计算全球任意地点的<strong>今日日出日落时刻</strong>，以及包含天文晨光、航海晨光、民用晨光等在内的 <strong>16 个关键太阳时段</strong>。
    </p>
  </section>

  <p class="text-gray-700 mb-6">
    无论你是想规划摄影的<strong>黄金时刻</strong>、安排户外徒步的行程、还是了解农作物的日照时长，准确的日出日落时间都是必不可少的信息。本<strong>日出日落时间查询工具</strong>无需下载安装，打开浏览器输入经纬度即可免费使用，数据全部在本地计算处理，保护你的隐私安全。
  </p>

  <section class="bg-gray-50 p-5 rounded-lg mb-6" aria-labelledby="what-is-sunrise">
    <h2 id="what-is-sunrise" class="text-xl font-semibold mb-3 text-gray-900">什么是日出和日落？影响时间的因素有哪些？</h2>
    <p class="text-gray-700 mb-3">
      <strong>日出</strong>指太阳上边缘首次露出地平线的瞬间，<strong>日落</strong>则是太阳完全没入地平线以下的瞬间。具体时刻取决于以下四个核心因素：
    </p>
    <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-0">
      <li><strong>经纬度坐标</strong>：越靠近两极地区，昼夜变化越极端；赤道附近全年昼长稳定在约 12 小时。不同城市的日出日落时间差异显著。</li>
      <li><strong>日期（季节）</strong>：夏至前后北半球白昼最长、日出最早日落最晚；冬至则相反（南半球季节相反）。春秋分时全球昼夜大致均等。</li>
      <li><strong>海拔高度</strong>：海拔越高，地平线越远，日出会提前、日落会延后。一般每升高 1000 米，日出约提前 1~2 分钟。</li>
      <li><strong>时区</strong>：本工具的计算结果已自动转换为当地时间，无需手动换算。</li>
    </ul>
  </section>

  <section class="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg mb-6" aria-labelledby="twilight-stages">
    <h2 id="twilight-stages" class="text-lg font-semibold mb-2 text-blue-900">黎明与黄昏的三个阶段：天文晨光、航海晨光、民用晨光</h2>
    <p class="text-blue-800 text-sm mb-3">天文学根据太阳在地平线下的角度，将黎明和黄昏各分为三个阶段：</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="bg-white/70 rounded-lg p-3">
        <p class="font-semibold text-orange-600 text-sm">天文晨光 / 天文黄昏</p>
        <p class="text-xs text-gray-600 mt-1">太阳角度：-18度 至 -12度<br/>天空开始微亮，肉眼可见最亮的星体，适合天文观测和深空摄影</p>
      </div>
      <div class="bg-white/70 rounded-lg p-3">
        <p class="font-semibold text-yellow-600 text-sm">航海晨光 / 航海黄昏</p>
        <p class="text-xs text-gray-600 mt-1">太阳角度：-12度 至 -6度<br/>地平线和主要星体清晰可见，水手可用以导航定位</p>
      </div>
      <div class="bg-white/70 rounded-lg p-3">
        <p class="font-semibold text-sky-600 text-sm">民用晨光 / 民用黄昏</p>
        <p class="text-xs text-gray-600 mt-1">太阳角度：-6度 至 0度<br/>地面景物清晰可辨，无需人工照明即可进行户外活动</p>
      </div>
    </div>
  </section>

  <section class="bg-gray-50 p-5 rounded-lg mb-6" aria-labelledby="how-to-use">
    <h2 id="how-to-use" class="text-xl font-semibold mb-3 text-gray-900">如何使用日出日落时间查询工具？</h2>
    <ol class="list-decimal pl-6 space-y-2 text-gray-700">
      <li><strong>选择日期</strong>：点击日期输入框选择你想查询的日期（默认显示今天，即<strong>今日日出日落</strong>时间）。</li>
      <li><strong>输入经纬度</strong>：手动输入城市名称或经纬度坐标，或点击「获取当前位置」按钮自动 GPS 定位。页面进入时会通过 IP 自动获取大致位置并缓存。</li>
      <li><strong>设置海拔（可选）</strong>：如果你在高海拔地区（如高原城市），填写海拔高度可获得更精确的结果。</li>
      <li><strong>查看结果</strong>：页面上方横排显示今日日出时间、正午时间、日落时间和昼长；下方列表展示全部 16 个太阳时段的精确时刻，以及当前月相信息。</li>
    </ol>
  </section>

  <section class="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-6" aria-labelledby="use-cases">
    <h2 id="use-cases" class="text-lg font-semibold mb-2 text-amber-900">日出日落时间查询的实际应用场景</h2>
    <ul class="list-disc pl-5 space-y-1.5 text-sm text-amber-900/80 mb-0">
      <li><strong>摄影规划</strong>：「黄金时刻」在日出后和日落前约 1 小时，光线柔和色彩丰富；「蓝色时刻」在民用晨光/民用黄昏期间，天空呈深蓝色调，是拍摄城市夜景和人像的最佳时机。</li>
      <li><strong>徒步露营</strong>：利用日出日落时间精确规划行程，确保在天黑前到达营地；参考天文晨光时间判断安全的早起出发时间。</li>
      <li><strong>农业种植</strong>：了解每日日照时长变化，合理安排农事活动。不同作物对昼长有不同需求，日照数据是农业生产的重要参考。</li>
      <li><strong>太阳能发电</strong>：根据日出日落时间估算当日有效日照时长，从而预测光伏板发电量。</li>
      <li><strong>生物节律与健康</strong>：日出日落影响人体褪黑素分泌和昼夜节律，了解自然光照规律有助于科学调整作息时间。</li>
      <li><strong>航空航海</strong>：飞行员和水手需要精确的晨光昏影时间来进行目视飞行规则(VFR)操作和天文导航。</li>
    </ul>
  </section>

  <section class="bg-gray-50 p-5 rounded-lg mb-6" aria-labelledby="algorithm">
    <h2 id="algorithm" class="text-xl font-semibold mb-3 text-gray-900">日出日落时间计算原理是什么？</h2>
    <p class="text-gray-700 mb-2">
      本工具采用 <strong>NOAA（美国国家海洋大气管理局）公开发布的太阳位置算法</strong>，这是目前最权威的天文计算方法之一。核心计算步骤如下：
    </p>
    <ul class="list-disc pl-6 space-y-1.5 text-sm text-gray-600 mb-2">
      <li>计算儒略世纪数（以 J2000 历元为基准的时间偏移量）</li>
      <li>计算太阳平近点角、平黄经、真黄经等轨道参数</li>
      <li>考虑地球轨道偏心率和黄赤交角修正</li>
      <li>结合观测者的经纬度和海拔高度，求解太阳时角方程</li>
      <li>输出 UTC 时间后自动转换为当地标准时间</li>
    </ul>
    <p class="text-gray-500 text-xs">
      注：<strong>日出日落时间计算精度通常在正负 1 分钟以内</strong>。极地地区（出现极昼或极夜现象）可能显示为 --:--。实际时刻可能因局部地形遮挡、天气折射等因素略有偏差。
    </p>
  </section>

  <section class="mb-10" aria-labelledby="faq">
    <h2 id="faq" class="text-2xl font-semibold mb-6 border-b pb-2">常见问题</h2>
    <div class="space-y-4">
      <details class="border rounded-lg p-4 hover:bg-gray-50 transition-colors" open>
        <summary class="font-semibold cursor-pointer text-lg mb-2">如何查询今天的日出日落时间？</summary>
        <p class="text-gray-700 mt-2 pt-2 border-t">打开本工具后，默认即可看到<strong>今日日出日落时间</strong>。如果需要查询其他城市或地点，只需在输入框中输入地名或经纬度坐标，系统会自动计算并显示该地点当天的日出时刻、日落时刻、昼长、正午时间以及全部16个太阳时段。也可以点击「获取当前位置」按钮自动定位到你所在的位置。</p>
      </details>
      <details class="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
        <summary class="font-semibold cursor-pointer text-lg mb-2">日出日落时间查询准确吗？误差有多大？</summary>
        <p class="text-gray-700 mt-2 pt-2 border-t">本工具采用的 NOAA 太阳位置算法是目前公认最精确的民用天文算法之一，<strong>计算精度通常在正负 1 分钟以内</strong>。需要注意的是，这个精度假设观测者在开阔地带且无地形遮挡。实际生活中，山脉、建筑物等地形因素可能导致日出延迟数分钟或日落提前数分钟。此外，大气折射效应也会产生微小影响。</p>
      </details>
      <details class="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
        <summary class="font-semibold cursor-pointer text-lg mb-2">什么是天文晨光、航海晨光、民用晨光？有什么区别？</summary>
        <p class="text-gray-700 mt-2 pt-2 border-t">这三个概念描述的是日出前（晨光）和日落后（黄昏）天空亮度的不同阶段，区别在于太阳在地平线下的角度：<br/><br/>
        <strong>天文晨光/黄昏</strong>（太阳 -18° ~ -12°）：天空最暗的阶段，仅最亮的行星和恒星可见，适合天文观测。<br/><br/>
        <strong>航海晨光/黄昏</strong>（太阳 -12° ~ -6°）：地平线已经可见，水手可以利用星体进行导航。<br/><br/>
        <strong>民用晨光/黄昏</strong>（太阳 -6° ~ 0°）：户外活动无需额外照明即可进行，大多数日常活动可以开始或结束。</p>
      </details>
      <details class="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
        <summary class="font-semibold cursor-pointer text-lg mb-2">为什么不同城市的日出日落时间不一样？</summary>
        <p class="text-gray-700 mt-2 pt-2 border-t">日出日落时间主要受三个因素影响：<strong>纬度</strong>决定了太阳照射的角度——高纬度地区季节性差异大，低纬度地区全年较稳定；<strong>经度</strong>决定了时区位置——同一时区内东西部城市日出时间可相差数十分钟；<strong>日期</strong>决定了太阳直射点的位置——夏至北半球日出最早，冬至最晚。例如北京和海口在同一天的日出时间可相差 1 小时以上。</p>
      </details>
      <details class="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
        <summary class="font-semibold cursor-pointer text-lg mb-2">摄影中的黄金时刻和蓝色时刻是什么时候？</summary>
        <p class="text-gray-700 mt-2 pt-2 border-t"><strong>黄金时刻（Golden Hour）</strong>指日出后约 1 小时内和日落前约 1 小时内的时段，此时太阳接近地平线，光线温暖柔和、阴影较长，是人像摄影和风光摄影的最佳时机。<strong>蓝色时刻（Blue Hour）</strong>指太阳在地平线下 -4° 到 -6° 之间（即民用晨光期间），天空呈现深邃的蓝色调，适合拍摄城市夜景和剪影照片。本工具会在结果中标注这些特殊时段。</p>
      </details>
      <details class="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
        <summary class="font-semibold cursor-pointer text-lg mb-2">海拔高度对日出日落时间有什么影响？</summary>
        <p class="text-gray-700 mt-2 pt-2 border-t">海拔越高，视线所及的地平线就越远，因此<strong>海拔高的地方日出会更早、日落会更晚</strong>。经验公式是：每升高 1000 米，日出约提前 1~2 分钟，日落约延后 1~2 分钟。对于平原地区的用户来说这个差异可以忽略，但对于高原城市（如拉萨，海拔约 3650 米）或登山者来说，海拔修正是获得精确时间的重要参数。本工具支持可选的海拔高度输入。</p>
      </details>
      <details class="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
        <summary class="font-semibold cursor-pointer text-lg mb-2">日出方向是怎么确定的？能查到吗？</summary>
        <p class="text-gray-700 mt-2 pt-2 border-t">日出的方向并非永远正东，而是随季节变化。春分和秋分前后太阳大致从正东方升起、正西方落下；夏季北半球日出偏向东北、日落偏向西北；冬季则日出偏向东南、日落偏向西南。偏移角度取决于日期和纬度。本工具主要提供时间维度的精确数据，如需方位角信息可结合太阳位置算法进一步推算。</p>
      </details>
    </div>
  </section>

  <footer class="text-center text-gray-400 text-sm pt-4 border-t border-gray-200">
    <p>日出日落时间数据仅供参考，实际时刻可能因局部地形遮挡、大气折射、天气条件等因素略有偏差。</p>
  </footer>
</article>
`;export{t as default};
