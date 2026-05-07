const t=`
<style>
  /* ========== 整体布局 ========== */
  .holiday-article {
    max-width: 720px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 12px;
    padding: 28px 24px 32px;
    box-sizing: border-box;
  }

  /* ========== 文章头部 ========== */
  .article-header {
    text-align: center;
    padding-bottom: 20px;
    margin-bottom: 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .article-header h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1a1a2e;
    text-align: center;
    line-height: 1.4;
    margin-bottom: 14px;
  }

  .article-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 0.85rem;
    color: #6b7280;
  }

  .article-meta time,
  .article-meta span {
    color: #6b7280;
  }

  /* ========== 章节区块通用样式 ========== */
  section {
    margin-bottom: 24px;
    padding: 22px 24px;
    border-radius: 12px;
  }

  /* 端午专题区 - 紫色背景 */
  .section-highlight-purple {
    background: #fdf4ff;
    border-left: 4px solid #c026d3;
    border-radius: 12px;
    padding: 22px 24px;
    margin-bottom: 24px;
  }

  /* 全年概览区 - 浅灰背景 */
  .section-gray-bg {
    background: #f8fafc;
    border-radius: 12px;
    padding: 22px 24px;
    margin-bottom: 24px;
  }

  /* 文化习俗区 - 蓝色边框 */
  .section-blue-border {
    background: #eff6ff;
    border-left: 4px solid #3b82f6;
    border-radius: 12px;
    padding: 22px 24px;
    margin-bottom: 24px;
  }

  /* 龙舟赛区 - 绿色背景 */
  .section-green-bg {
    background: #f0fdf4;
    border-left: 4px solid #22c55e;
    border-radius: 12px;
    padding: 22px 24px;
    margin-bottom: 24px;
  }

  /* FAQ区 */
  .section-faq {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 22px 24px;
    margin-bottom: 24px;
  }

  /* ========== 标题层级 ========== */
  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 16px;
    line-height: 1.35;
  }

  h3 {
    font-size: 1.13rem;
    font-weight: 600;
    color: #1f2937;
    margin-top: 20px;
    margin-bottom: 8px;
    line-height: 1.4;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  /* ========== 正文段落 ========== */
  p {
    font-size: 0.94rem;
    line-height: 1.8;
    color: #374151;
    margin-bottom: 11px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  strong {
    color: #111827;
    font-weight: 700;
  }

  a {
    color: #2563eb;
    text-decoration: none;
    transition: text-decoration 0.2s ease;
  }

  a:hover {
    text-decoration: underline;
  }

  /* ========== 列表样式 ========== */
  ul,
  ol {
    padding-left: 20px;
    margin-bottom: 11px;
  }

  li {
    font-size: 0.94rem;
    line-height: 1.7;
    color: #374151;
    margin-bottom: 7px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  /* 节假日列表特殊样式 */
  .holiday-list {
    list-style: none;
    padding-left: 0;
  }

  .holiday-list li {
    display: block;
    background: #f9fafb;
    border-radius: 8px;
    padding: 14px 16px;
    margin-bottom: 10px;
    line-height: 1.8;
  }

  .holiday-list li strong {
    display: inline-block;
    font-size: 1.05rem;
    margin-right: 6px;
  }

  /* ========== 信息框组件 ========== */
  .info-box {
    background: #dbeafe;
    border-left: 3px solid #3b82f6;
    padding: 15px 18px;
    border-radius: 8px;
    margin: 16px 0;
  }

  .info-box h4 {
    margin-bottom: 10px;
    color: #1e40af;
  }

  .info-box p {
    margin-bottom: 5px;
  }

  .info-box ul {
    margin-bottom: 0;
    padding-left: 18px;
  }

  .info-box li {
    margin-bottom: 5px;
  }

  /* 总结框 - 暖色调 */
  .summary-box {
    background: #fef3c7;
    border-left: 3px solid #d97706;
    padding: 15px 18px;
    border-radius: 8px;
    margin: 16px 0;
  }

  .summary-box h4 {
    margin-bottom: 10px;
    color: #92400e;
  }

  .summary-box p {
    margin-bottom: 5px;
  }

  /* 注意框 - 红橙色调 */
  .notice-box {
    background: #fef2f2;
    border-left: 3px solid #dc2626;
    padding: 15px 18px;
    border-radius: 8px;
    margin: 16px 0;
  }

  .notice-box ul {
    margin-bottom: 0;
    padding-left: 18px;
  }

  .notice-box li {
    margin-bottom: 5px;
  }

  /* 方案框 - 白底边框 */
  .plan-box {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 15px 18px;
    margin: 12px 0;
  }

  .plan-box p {
    margin-bottom: 4px;
    font-size: 0.92rem;
  }

  .plan-box p:last-child {
    margin-bottom: 0;
  }

  /* ========== FAQ 折叠样式 ========== */
  details {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  details[open] {
    border-color: #f5d0fe;
  }

  summary {
    padding: 13px 15px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.97rem;
    color: #1f2937;
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    list-style: none;
    transition: background-color 0.2s ease;
  }

  details[open] > summary {
    border-bottom: 1px solid #f5d0fe;
  }

  summary:hover {
    background: #f3f4f6;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::marker {
    content: "";
  }

  summary::before {
    content: "+";
    display: inline-block;
    width: 20px;
    font-weight: 700;
    color: #c026d3;
    margin-right: 8px;
    transition: transform 0.2s ease;
  }

  details[open] > summary::before {
    content: "-";
  }

  details > p,
  details > ul,
  details > ol {
    padding: 13px 15px;
    background: #ffffff;
    margin: 0;
  }

  details p {
    line-height: 1.75;
    margin-bottom: 8px;
  }

  details p:last-child {
    margin-bottom: 0;
  }

  details ul,
  details ol {
    padding-left: 18px;
    margin-bottom: 0;
  }

  /* ========== Footer ========== */
  .article-footer {
    border-top: 1px solid #e5e7eb;
    padding-top: 16px;
    margin-top: 28px;
  }

  .article-footer p {
    font-size: 0.82rem;
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 8px;
  }

  .update-time {
    font-size: 0.78rem !important;
    color: #9ca3af !important;
    margin-top: 6px;
  }

  /* ========== 特殊标签类 ========== */
  .holiday-date {
    display: inline-block;
    background: #f1f5f9;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.82rem;
    color: #475569;
    margin: 0 4px;
  }

  .holiday-days {
    display: inline-block;
    background: #dcfce7;
    color: #166534;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.82rem;
    margin: 0 4px;
  }

  .holiday-note {
    display: block;
    font-size: 0.8rem;
    color: #6b7280;
    margin-top: 4px;
    padding-left: 4px;
  }

  /* ========== 移动端响应式 - 520px断点 ========== */
  @media (max-width: 520px) {
    .holiday-article {
      max-width: 100%;
      padding: 18px 16px 24px;
      border-radius: 8px;
    }

    .article-header h1 {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }

    .article-header {
      padding-bottom: 14px;
      margin-bottom: 18px;
    }

    .article-meta {
      font-size: 0.8rem;
      gap: 10px;
      flex-wrap: wrap;
    }

    section,
    .section-highlight-purple,
    .section-gray-bg,
    .section-blue-border,
    .section-green-bg,
    .section-faq {
      padding: 16px 14px;
      margin-bottom: 18px;
      border-radius: 10px;
    }

    h2 {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 1.05rem;
      margin-top: 16px;
      margin-bottom: 6px;
    }

    h4 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.89rem;
      line-height: 1.75;
      margin-bottom: 9px;
    }

    li {
      font-size: 0.89rem;
    }

    .holiday-list li {
      padding: 12px 14px;
      margin-bottom: 8px;
    }

    .holiday-list li strong {
      font-size: 1rem;
    }

    .info-box,
    .summary-box,
    .notice-box,
    .plan-box {
      padding: 12px 14px;
      margin: 12px 0;
    }

    details {
      margin-bottom: 8px;
    }

    summary {
      padding: 11px 12px;
      font-size: 0.92rem;
    }

    details > p,
    details > ul,
    details > ol {
      padding: 11px 12px;
    }

    .article-footer {
      padding-top: 14px;
      margin-top: 22px;
    }

    .article-footer p {
      font-size: 0.78rem;
    }

    .update-time {
      font-size: 0.74rem !important;
    }

    .holiday-date,
    .holiday-days {
      font-size: 0.78rem;
      padding: 2px 6px;
    }

    .holiday-note {
      font-size: 0.76rem;
    }
  }

  /* ========== 移动端响应式 - 380px断点 ========== */
  @media (max-width: 380px) {
    .holiday-article {
      padding: 14px 12px 20px;
      border-radius: 6px;
    }

    .article-header h1 {
      font-size: 1.25rem;
      margin-bottom: 8px;
      line-height: 1.35;
    }

    .article-header {
      padding-bottom: 12px;
      margin-bottom: 14px;
    }

    .article-meta {
      font-size: 0.76rem;
      gap: 8px;
    }

    section,
    .section-highlight-purple,
    .section-gray-bg,
    .section-blue-border,
    .section-green-bg,
    .section-faq {
      padding: 14px 12px;
      margin-bottom: 14px;
      border-radius: 8px;
    }

    h2 {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 0.98rem;
      margin-top: 14px;
      margin-bottom: 5px;
    }

    h4 {
      font-size: 0.9rem;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.7;
      margin-bottom: 8px;
    }

    li {
      font-size: 0.85rem;
      margin-bottom: 5px;
    }

    .holiday-list li {
      padding: 10px 12px;
      margin-bottom: 6px;
    }

    .holiday-list li strong {
      font-size: 0.95rem;
    }

    .info-box,
    .summary-box,
    .notice-box,
    .plan-box {
      padding: 10px 12px;
      margin: 10px 0;
      border-radius: 6px;
    }

    .info-box h4,
    .summary-box h4 {
      font-size: 0.92rem;
      margin-bottom: 8px;
    }

    details {
      margin-bottom: 6px;
      border-radius: 6px;
    }

    summary {
      padding: 10px 11px;
      font-size: 0.88rem;
    }

    details > p,
    details > ul,
    details > ol {
      padding: 10px 11px;
    }

    details p {
      font-size: 0.85rem;
      line-height: 1.65;
      margin-bottom: 6px;
    }

    .article-footer {
      padding-top: 12px;
      margin-top: 18px;
    }

    .article-footer p {
      font-size: 0.76rem;
      line-height: 1.6;
    }

    .update-time {
      font-size: 0.72rem !important;
    }

    .holiday-date,
    .holiday-days {
      font-size: 0.75rem;
      padding: 2px 5px;
    }

    .holiday-note {
      font-size: 0.73rem;
    }
  }
</style>

<article itemscope itemtype="https://schema.org/Article" class="holiday-article">
  <header class="article-header">
    <h1 itemprop="headline">2026年端午节放假安排 - 粽子龙舟端午文化完整指南</h1>
    <div class="article-meta">
      <time itemprop="datePublished" datetime="2026-01-15">2026年01月15日</time>
      <span itemprop="author">节假日查询助手</span>
    </div>
  </header>

  <!-- 第一节：端午专题 -->
  <section class="section-highlight-purple">
    <h2>2026年端午节放假安排详解</h2>

    <h3>什么是端午节？</h3>
    <p>端午节，又称端阳节、龙舟节、重午节、天中节等，是中国的传统节日，日期在每年农历<strong>五月初五</strong>。端午节源于自然天象崇拜，由上古时代祭龙演变而来。传说战国时期的楚国诗人屈原在五月五日投汨罗江自尽，后人亦将端午节作为纪念屈原的节日。2006年5月，国务院将其列入首批国家级非物质文化遗产名录；2009年9月，联合国教科文组织正式批准将其列入《人类非物质文化遗产代表作名录》，端午节成为中国首个入选世界非遗的节日。</p>

    <h3>2026年端午节具体放假时间</h3>
    <p>根据国务院办公厅发布的2026年部分节假日安排通知，<strong>2026年端午节放假时间为5月31日（星期日）至6月2日（星期二），共计放假3天</strong>。</p>

    <div class="info-box">
      <h4>2026年端午节放假详情：</h4>
      <ul>
        <li><strong>放假日期：</strong>5月31日（周日）至6月2日（周二）</li>
        <li><strong>假期天数：</strong>共3天</li>
        <li><strong>农历日期：</strong>农历丙午年五月初五为6月1日（星期一）</li>
        <li><strong>调休上班：</strong>5月30日（周六）需正常上班补休</li>
        <li><strong>特别说明：</strong>端午节正日子恰逢周一，与周末连休形成3天小长假</li>
      </ul>
    </div>

    <h3>调休安排说明</h3>
    <p>为了形成3天的连续假期，国家采取了调休机制：<strong>5月30日（星期六）</strong>这一天虽然是周末，但需要正常上班，用来弥补假期中占用的工作日。虽然只有一天的调休，但确实让大家能够享受一个完整的端午小长假，有充足的时间品尝粽子、观看龙舟赛或短途出游。</p>
  </section>

  <!-- 第二节：粽子文化 -->
  <section class="section-blue-border">
    <h2>粽子文化与各地风味</h2>

    <h3>粽子的由来</h3>
    <p>粽子，古称"角黍"、"筒粽"，是端午节最具代表性的食品。关于粽子的起源有多种说法：</p>
    <ul>
      <li><strong>祭祖说：</strong>最早用于祭祀祖先和神灵，用菰叶包裹米粮投入江河，以飨神灵</li>
      <li><strong>纪念屈原说：</strong>传说百姓怕鱼虾伤害屈原遗体，纷纷投粽子入江喂鱼，此俗流传至今</li>
      <li><strong>避疫驱邪说：</strong>古人认为五月是"毒月"，五日是"恶日"，吃粽子可以避邪驱瘟</li>
      <li><strong>时令食品说：</strong>端午前后新粮上市，用叶子包裹煮熟便于携带和保存</li>
    </ul>

    <h3>南北粽子大比拼</h3>
    <p>中国地域辽阔，各地的粽子风味迥异，形成了著名的"南北之争"：</p>

    <h4>北方粽子代表</h4>
    <ul>
      <li><strong>北京粽：</strong>个头较大，多为斜四角形或三角形，以红枣、豆沙甜馅为主，口感黏软</li>
      <li><strong>山东粽：</strong>用黄米（黍米）制作，个大饱满，多用红枣或果脯做馅</li>
      <li><strong>西安粽：</strong>蜂蜜凉粽，不加馅料，蘸蜂蜜或白糖食用，清凉爽口</li>
    </ul>

    <h4>南方粽子代表</h4>
    <ul>
      <li><strong>嘉兴粽：</strong>江南粽子之首，以瘦肥相间的猪肉为馅，酱油调味，鲜美油润</li>
      <li><strong>广东粽：</strong>个头最大，馅料丰富，有蛋黄、五花肉、香菇、虾仁、瑶柱等</li>
      <li><strong>四川粽：</strong>麻辣口味，加入花椒、辣椒面，别具一格</li>
      <li><strong>闽南粽：</strong>烧肉粽，糯米先炒制再加料包扎，香气浓郁</li>
      <li><strong>海南粽：</strong>用芭蕉叶包裹，馅料有咸鸭蛋、猪肉、咸鱼等，热带风情</li>
    </ul>

    <h3>特色创新粽子</h3>
    <p>随着时代发展，各种创新口味层出不穷：</p>
    <ul>
      <li><strong>甜品系：</strong>巧克力粽、冰淇淋粽、奶茶波波粽、榴莲粽</li>
      <li><strong>海鲜系：</strong>鲍鱼粽、龙虾粽、蟹粉粽、干贝粽</li>
      <li><strong>健康系：</strong>糙米粽、紫米粽、藜麦粽、全麦粽</li>
      <li><strong>网红系：</strong>小龙虾粽、螺蛳粉粽、火锅粽（四川麻辣味）</li>
    </ul>
  </section>

  <!-- 第三节：龙舟赛文化 -->
  <section class="section-green-bg">
    <h2>龙舟竞渡与端午习俗</h2>

    <h3>龙舟赛的历史渊源</h3>
    <p>龙舟竞渡，是端午节最富激情和观赏性的活动之一。其历史可追溯到战国时期，最初是<strong>祭祀龙神、祈求风调雨顺</strong>的仪式活动。后来逐渐演变为纪念屈原的民俗体育活动，并传播到世界各地，成为中华文化的重要符号。</p>

    <h3>龙舟赛的规则与看点</h3>
    <ul>
      <li><strong>船型规格：</strong>标准龙舟长12-20米，宽1-1.2米，可坐20-40名划手</li>
      <li><strong>人员配置：</strong>包括鼓手（指挥节奏）、舵手（控制方向）、划手（提供动力）</li>
      <li><strong>比赛距离：</strong>通常为200米、500米或1000米直道竞速</li>
      <li><strong>技术要点：</strong>动作整齐划一、入水角度精准、拉水有力、回桨迅速</li>
      <li><strong>观赏亮点：</strong>起航冲刺、途中加速、终点撞线，鼓声震天、呐喊助威</li>
    </ul>

    <h3>2026年龙舟赛事推荐</h3>
    <div class="plan-box">
      <p><strong>广东广州（珠江）：</strong>传统龙舟之乡，比赛规模大、水平高，岭南文化氛围浓厚</p>
      <p><湖南汨罗（汨罗江）：屈原投江地，最具文化底蕴的龙舟赛事，仪式感极强</p>
      <p><strong>浙江绍兴（鉴湖）：</strong>江南水乡特色，乌篷船与龙舟同台竞技，风景如画</p>
      <p><strong>福建福州（闽江）：</strong>海峡两岸龙舟邀请赛，促进两岸文化交流</p>
      <p><strong>湖北宜昌（长江）：</strong>三峡地区龙舟赛，山水壮美，气势磅礴</p>
    </div>

    <h3>其他端午习俗</h3>
    <p>除了吃粽子和赛龙舟，端午节还有许多有趣的习俗：</p>
    <ul>
      <li><strong>挂艾草菖蒲：</strong>在门楣悬挂艾草和菖蒲，寓意驱邪避疫、招百福</li>
      <li><strong>佩香囊：</strong>儿童佩戴装有香料的小布袋，既美观又防蚊虫</li>
      <li><strong>系五彩绳：</strong>手腕脚踝系上五色丝线，象征祈福纳吉、保平安</li>
      <li><strong>饮雄黄酒：</strong>大人喝雄黄酒驱毒，儿童则在额头画"王"字</li>
      <li><strong>沐兰汤：</strong>用兰草熬制的汤水洗浴，清洁身体、祛除晦气</li>
      <li><strong>斗草游戏：</strong>儿童之间玩拔草比赛，比试草茎的韧性</li>
      <li><strong>贴钟馗像：</strong>挂钟馗画像镇宅辟邪，保护家宅平安</li>
    </ul>
  </section>

  <!-- 第四节：全年概览 -->
  <section class="section-gray-bg">
    <h2>2026年全年法定节假日安排一览</h2>
    <p>了解全年的节假日安排，有助于你提前规划年度行程。以下是2026年中国大陆地区的七大法定节假日详细信息：</p>

    <ul class="holiday-list">
      <li>
        <strong>元旦</strong>
        <span class="holiday-date">1月1日（周四）</span>
        <span class="holiday-days">放假1天</span>
        <span class="holiday-note">1月1日当天为法定假日，如遇周末可能顺延</span>
      </li>
      <li>
        <strong>春节</strong>
        <span class="holiday-date">1月28日（周三）至2月4日（周三）</span>
        <span class="holiday-days">放假8天</span>
        <span class="holiday-note">1月26日（周日）、2月8日（周日）需上班补休</span>
      </li>
      <li>
        <strong>清明节</strong>
        <span class="holiday-date">4月4日（周六）至4月6日（周一）</span>
        <span class="holiday-days">放假3天</span>
        <span class="holiday-note">无需调休，恰逢周末连休</span>
      </li>
      <li>
        <strong>劳动节（五一）</strong>
        <span class="holiday-date">5月1日（周五）至5月5日（周二）</span>
        <span class="holiday-days">放假5天</span>
        <span class="holiday-note">4月26日（周日）需上班补休</span>
      </li>
      <li>
        <strong>端午节</strong>
        <span class="holiday-date">5月31日（周日）至6月2日（周二）</span>
        <span class="holiday-days">放假3天</span>
        <span class="holiday-note">5月30日（周六）需上班补休</span>
      </li>
      <li>
        <strong>中秋节 + 国庆节</strong>
        <span class="holiday-date">10月1日（周四）至10月8日（周四）</span>
        <span class="holiday-days">放假8天</span>
        <span class="holiday-note">中秋节与国庆节连休；9月27日（周日）、10月10日（周六）需上班补休</span>
      </li>
    </ul>

    <div class="summary-box">
      <h4>2026年全年假期统计</h4>
      <p>2026年全年法定节假日总天数约为<strong>31天</strong>（含调休形成的连休）。端午节虽然只有3天假期，但作为世界非物质文化遗产，其文化价值不可估量。端午时节正值初夏，气候宜人，适合品尝时令美食、参与民俗活动、进行短途休闲游。</p>
    </div>
  </section>

  <!-- 第五节：常见问题FAQ -->
  <section class="section-faq">
    <h2>端午节常见问题解答</h2>

    <details>
      <summary>2026年端午节是哪一天？放几天假？</summary>
      <p>2026年的端午节（农历五月初五）对应公历<strong>6月1日（星期一）</strong>。法定假期安排为<strong>5月31日（星期日）至6月2日（星期二），共3天</strong>。由于端午节正日子恰逢周一，因此与前后周末形成自然的3天连休，只需在5月30日（周六）补班一天即可。</p>
    </details>

    <details>
      <summary>端午节需要调休吗？哪天要上班？</summary>
      <p>是的，2026年端午节需要进行调休。<strong>5月30日（星期六）</strong>需要正常上班，作为调休补班日。这意味着虽然5月30日本应是周末休息日，但由于端午假期的调休安排，这一天需要照常工作。相比其他节日的调休，端午节的调休负担较轻，只涉及一个周六。</p>
    </details>

    <details>
      <summary>端午节为什么要吃粽子？有什么寓意？</summary>
      <p>端午节吃粽子有着深厚的文化内涵：</p>
      <ul>
        <li><strong>纪念屈原：</strong>最广为流传的说法是为了纪念爱国诗人屈原，百姓投粽子入江防止鱼虾啃食其身体</li>
        <li><strong>祭祀祖先：</strong>更早的起源是用粽子祭祀祖先和神灵，表达敬意和祈愿</li>
        <li><strong>驱邪避疫：</strong>古人认为五月多灾多病，粽子用菰叶包裹，具有驱邪避瘟的作用</li>
        <li><strong>阴阳调和：</strong>粽子外裹青叶（阳），内藏白米（阴），象征阴阳和谐、天地交泰</li>
        <li><strong>团圆寓意：</strong>粽子形状多样，但多以三角或多角形为主，象征家庭团圆、人际关系紧密</li>
      </ul>
    </details>

    <details>
      <summary>甜粽子和咸粽子哪个更好吃？</summary>
      <p>这是一个永恒的争论话题，答案因人而异：</p>
      <ul>
        <li><strong>甜粽党：</strong>认为粽子应该是甜品，红枣豆沙才是正宗，蘸糖吃才够味</li>
        <li><strong>咸粽党：</strong>坚持粽子必须有肉，鲜肉蛋黄才是灵魂，咸鲜可口才过瘾</li>
        <li><strong>地域差异：</strong>北方人普遍偏爱甜粽，南方人多数支持咸粽，但也有例外</li>
        <li><strong>包容态度：</strong>现代人越来越开放，很多人甜咸都爱，甚至喜欢尝试各种创新口味</li>
        <li><strong>营养角度：</strong>甜粽主要提供碳水化合物，咸粽蛋白质含量更高，各有优势</li>
      </ul>
      <p>其实不必纠结，<strong>好吃就是最好的</strong>！端午节不妨两种都尝尝，感受不同风味带来的快乐。</p>
    </details>

    <details>
      <summary>端午节加班工资怎么算？</summary>
      <p>端午节期间的加班工资计算如下：</p>
      <ul>
        <li><strong>6月1日（端午节当日，法定假日）：</strong>如果在这一天加班，用人单位应支付不低于工资的<strong>300%</strong>的工资报酬，且不能以补休代替</li>
        <li><strong>5月31日、6月2日（休息日/调休）：</strong>如果在这两天加班，首先应安排补休；不能安排补休的，支付不低于工资的<strong>200%</strong>的工资报酬</li>
      </ul>
      <p>如有疑问，建议咨询人力资源部门或当地劳动保障部门。</p>
    </details>

    <details>
      <summary>端午节高速公路免费吗？</summary>
      <p>是的，根据交通运输部的规定，<strong>端午节假期期间高速公路对小客车免费通行</strong>。免费时间为2026年5月31日00:00至6月2日24:00，共3天。免费车辆范围是7座及以下小型载客汽车，包括允许在普通收费公路行驶的摩托车。</p>
      <p>需要注意的是：</p>
      <ul>
        <li>免费时间以<strong>驶离出口收费车道</strong>的时间为准</li>
        <li>端午假期较短，出行相对集中，建议合理规划时间</li>
        <li>ETC用户正常通行即可，系统自动处理免费事宜</li>
      </ul>
    </details>

    <details>
      <summary>端午节有哪些禁忌和注意事项？</summary>
      <p>端午节作为传统节日，有一些民间流传的禁忌：</p>
      <ul>
        <li><strong>"躲五毒"：</strong>端午节又称"五毒日"，民间认为这天要小心蛇、蝎、蜈蚣、壁虎、蟾蜍五种毒物</li>
        <li><strong>忌游泳：</strong>部分地区认为端午当天不宜下水游泳，尤其是中午时分</li>
        <li><strong>小孩禁忌：</strong>不满周岁的婴儿不宜带去人多拥挤的地方，避免受惊吓</li>
        <li><strong>饮食注意：</strong>粽子黏性大不易消化，老人、儿童、胃病患者应适量食用</li>
        <li><strong>雄黄酒慎用：</strong>雄黄含有砷成分，现代医学不建议饮用，可用普通黄酒代替</li>
        <li><strong>孕妇注意：</strong>艾草、菖蒲气味浓烈，孕妇应避免长时间接触</li>
      </ul>
      <p>这些禁忌虽有迷信色彩，但其中包含的生活智慧值得参考。理性对待，科学过节即可。</p>
    </details>

    <details>
      <summary>如何在家包粽子？新手教程</summary>
      <p>在家包粽子并不难，以下是简易教程：</p>
      <ol>
        <li><strong>准备材料：</strong>糯米（提前浸泡4小时以上）、粽叶（洗净煮软）、馅料（按喜好准备）、棉线</li>
        <li><strong>处理粽叶：</strong>新鲜粽叶需清洗煮软；干粽叶需提前浸泡一夜再煮软</li>
        <li><strong>折叠粽叶：</strong>将粽叶卷成漏斗状，先放少量米垫底，再放入馅料，最后用米填满</li>
        <li><strong>封口捆扎：</strong>将粽叶盖下包裹严实，用棉线十字交叉绑紧，打结固定</li>
        <li><strong>煮制方法：</strong>冷水下锅，水量没过粽子，大火烧开后转小火煮2-3小时</li>
        <li><strong>焖制入味：</strong>关火后不要立即取出，焖1-2小时让味道充分渗透</li>
      </ol>
      <p>新手建议从简单的三角粽开始练习，多包几次就能掌握技巧。第一次不完美也没关系，自己做的就是最好吃的！</p>
    </details>

    <details>
      <summary>端午节适合去哪里旅游？</summary>
      <p>端午节正值初夏，气候宜人，适合以下几类旅游目的地：</p>
      <ul>
        <li><strong>观赛之旅：</strong>前往广州、汨罗、绍兴等地观看正宗龙舟赛，感受传统文化魅力</li>
        <li><strong>古镇游：</strong>乌镇、周庄、西塘等江南古镇，体验包粽子、挂香囊等民俗活动</li>
        <li><strong>山水游：</strong>桂林漓江、张家界武陵源、黄山等自然景区，初夏景色正好</li>
        <li><strong>海岛游：</strong>三亚、北海、厦门等海滨城市，气温适宜，适合戏水踏浪</li>
        <li><strong>周边游：</strong>由于只有3天假期，选择城市周边的农家乐、采摘园、温泉度假村也很不错</li>
      </ul>
      <p>建议提前规划行程，预订住宿，避开热门景点的高峰时段。</p>
    </details>

    <details>
      <summary>端午节给朋友送什么礼物合适？</summary>
      <p>端午节送礼讲究心意和文化内涵，推荐以下几类礼物：</p>
      <ul>
        <li><strong>粽子礼盒：</strong>最经典的端午礼品，选择知名品牌或手工制作的精品礼盒</li>
        <li><strong>咸鸭蛋礼盒：</strong>流油的咸鸭蛋是端午标配，高邮、微山湖等地出产的最为有名</li>
        <li><strong>香囊荷包：</strong>精美刺绣香囊，既有装饰性又有实用价值，还能驱蚊防疫</li>
        <li><strong>茶叶礼盒：</strong>端午正值新茶上市，绿茶、红茶都是不错的选择</li>
        <li><strong>绿豆糕点心：</strong>清凉解暑的传统点心，适合夏季食用</li>
        <li><strong>文创产品：</strong>龙舟模型、端午主题文具、国潮T恤等，年轻人会很喜欢</li>
      </ul>
      <p>送礼最重要的是心意，根据对方的喜好和需求选择合适的礼物即可。</p>
    </details>
  </section>

  <!-- Footer 免责声明 -->
  <footer class="article-footer">
    <p><strong>免责声明：</strong>本文所提供的2026年端午节放假安排信息基于目前已知的政策文件整理，仅供参考。具体放假安排请以国务院办公厅发布的官方通知为准。各地各单位可能根据实际情况有所调整，建议大家临近假期时再次确认相关信息。如因信息误差造成不便，本站不承担相关责任。</p>
    <p class="update-time">最后更新时间：2026年1月</p>
  </footer>
</article>

<!-- FAQPage 结构化数据 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "2026年端午节是哪一天？放几天假？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2026年端午节为6月1日（星期一），放假时间为5月31日（周日）至6月2日（周二），共3天。"
      }
    },
    {
      "@type": "Question",
      "name": "端午节需要调休吗？哪天要上班？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "是的，5月30日（星期六）需要正常上班作为调休补班日，只涉及一个周六。"
      }
    },
    {
      "@type": "Question",
      "name": "端午节为什么要吃粽子？有什么寓意？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "包括纪念屈原、祭祀祖先、驱邪避疫、阴阳调和和家庭团圆等多重文化寓意。"
      }
    },
    {
      "@type": "Question",
      "name": "甜粽子和咸粽子哪个更好吃？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "这是个人偏好问题，北方多喜甜粽，南方多爱咸粽，现代人越来越包容多元口味。"
      }
    },
    {
      "@type": "Question",
      "name": "端午节加班工资怎么算？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "端午节当日（6月1日）加班支付300%工资，其余休息日加班支付200%工资或安排补休。"
      }
    },
    {
      "@type": "Question",
      "name": "端午节高速公路免费吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "是的，5月31日00:00至6月2日24:00期间高速公路对7座及以下小客车免费通行。"
      }
    },
    {
      "@type": "Question",
      "name": "端午节有哪些禁忌和注意事项？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "包括躲五毒、忌游泳、小孩少去人群、适量吃粽子、慎用雄黄酒、孕妇避免接触艾草等。"
      }
    },
    {
      "@type": "Question",
      "name": "如何在家包粽子？新手教程",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "准备糯米粽叶馅料棉线，处理粽叶后折叠成漏斗状装料封口捆扎，冷水下锅煮2-3小时即可。"
      }
    },
    {
      "@type": "Question",
      "name": "端午节适合去哪里旅游？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "推荐龙舟赛举办地（广州、汨罗）、江南古镇、自然景区（桂林、张家界）、海岛游和周边农家乐。"
      }
    },
    {
      "@type": "Question",
      "name": "端午节给朋友送什么礼物合适？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "可选粽子礼盒、咸鸭蛋、香囊、茶叶、绿豆糕和国潮文创产品等，重在心意。"
      }
    }
  ]
}
<\/script>
`;export{t as default};
