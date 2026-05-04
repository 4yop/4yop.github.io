const e=`
<article class="article-container">
  <style>
    .article-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem 3rem;
      font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, sans-serif;
      color: rgba(255, 255, 255, 0.9);
      position: relative;
      overflow: hidden;
    }
    .article-bg {
      position: fixed;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      background: linear-gradient(135deg, #0a0a1a 0%, #1a1035 15%, #2d1b4e 30%, #4a1942 45%, #6b2149 55%, #a63d40 68%, #d66646 78%, #f5a642 88%, #fcd34d 100%);
    }
    .article-bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99, 102, 241, 0.35) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 55%),
        radial-gradient(ellipse 70% 55% at 50% 80%, rgba(236, 72, 153, 0.25) 0%, transparent 55%),
        radial-gradient(ellipse 50% 40% at 85% 75%, rgba(249, 115, 22, 0.3) 0%, transparent 50%);
      animation: bg-shift 12s ease-in-out infinite alternate;
    }
    @keyframes bg-shift {
      0% { opacity: 0.8; }
      100% { opacity: 1; }
    }
    .article-content {
      position: relative;
      z-index: 1;
    }
    .glass-card {
      background: rgba(30, 15, 50, 0.45);
      backdrop-filter: blur(24px) saturate(1.4);
      -webkit-backdrop-filter: blur(24px) saturate(1.4);
      border: 1px solid rgba(200, 180, 255, 0.12);
      border-radius: 20px;
      padding: 2rem 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(220, 200, 255, 0.06), 0 0 60px rgba(139, 92, 246, 0.05);
    }
    .article-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .article-title {
      font-size: 1.85rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 1rem;
      text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
      line-height: 1.3;
    }
    .article-subtitle {
      font-size: 1.05rem;
      color: rgba(196, 181, 253, 0.85);
      line-height: 1.7;
    }
    .section-title {
      font-size: 1.35rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.92);
      margin-bottom: 1.25rem;
      padding-bottom: 0.6rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .section-title::before {
      content: '';
      width: 4px;
      height: 1.2em;
      background: linear-gradient(180deg, #818cf8, #e879f9);
      border-radius: 2px;
    }
    .article-text {
      font-size: 1rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.75);
      margin-bottom: 1rem;
    }
    .feature-list {
      list-style: none;
      padding: 0;
      margin: 1.25rem 0;
    }
    .feature-item {
      display: flex;
      align-items: flex-start;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      gap: 0.75rem;
    }
    .feature-item:last-child {
      border-bottom: none;
    }
    .feature-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(135deg, #38bdf8, #818cf8);
      margin-top: 0.5rem;
      flex-shrink: 0;
      box-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
    }
    .feature-text {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }
    .feature-text strong {
      color: rgba(255, 255, 255, 0.95);
    }
    .scene-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 1.25rem 0;
    }
    @media (max-width: 580px) {
      .scene-grid {
        grid-template-columns: 1fr;
      }
    }
    .scene-card {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 1.25rem;
      transition: all 0.3s ease;
    }
    .scene-card:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.18);
    }
    .scene-card-orange { border-left: 3px solid rgba(249, 115, 22, 0.6); }
    .scene-card-blue { border-left: 3px solid rgba(56, 189, 248, 0.6); }
    .scene-card-yellow { border-left: 3px solid rgba(251, 191, 36, 0.6); }
    .scene-card-pink { border-left: 3px solid rgba(236, 72, 153, 0.6); }
    .scene-title {
      font-size: 1rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.92);
      margin-bottom: 0.5rem;
    }
    .scene-desc {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.65);
      line-height: 1.6;
    }
    .step-list {
      list-style: none;
      padding: 0;
      margin: 1.25rem 0;
      counter-reset: step;
    }
    .step-item {
      position: relative;
      padding-left: 3.5rem;
      margin-bottom: 1.5rem;
      counter-increment: step;
    }
    .step-item::before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 0;
      width: 2.2rem;
      height: 2.2rem;
      background: linear-gradient(135deg, #818cf8, #e879f9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.95rem;
      color: white;
      box-shadow: 0 4px 12px rgba(129, 140, 248, 0.4);
    }
    .step-item:nth-child(2)::before {
      background: linear-gradient(135deg, #38bdf8, #818cf8);
      box-shadow: 0 4px 12px rgba(56, 189, 248, 0.4);
    }
    .step-item:nth-child(3)::before {
      background: linear-gradient(135deg, #34d399, #38bdf8);
      box-shadow: 0 4px 12px rgba(52, 211, 153, 0.4);
    }
    .step-text {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.7;
      padding-top: 0.25rem;
    }
    .highlight-box {
      background: rgba(129, 140, 248, 0.12);
      border: 1px solid rgba(129, 140, 248, 0.25);
      border-radius: 16px;
      padding: 1.25rem;
      margin: 1.25rem 0;
    }
    .highlight-box-title {
      font-size: 1rem;
      font-weight: 600;
      color: rgba(196, 181, 253, 0.95);
      margin-bottom: 0.5rem;
    }
    .highlight-box-content {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.7;
    }
    .advantage-list {
      list-style: none;
      padding: 0;
      margin: 1.25rem 0;
    }
    .advantage-item {
      display: flex;
      align-items: flex-start;
      padding: 0.65rem 0;
      gap: 0.75rem;
    }
    .advantage-icon {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(52, 211, 153, 0.2);
      border: 1px solid rgba(52, 211, 153, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 0.15rem;
    }
    .advantage-icon svg {
      width: 12px;
      height: 12px;
      color: #34d399;
    }
    .summary-box {
      background: rgba(30, 15, 50, 0.4);
      border: 1px solid rgba(200, 180, 255, 0.1);
      border-radius: 20px;
      padding: 2rem 1.5rem;
      text-align: center;
      margin-top: 2rem;
    }
    .summary-text {
      font-size: 1.05rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.8;
    }

    /* ====== 展开/收起按钮适配 ====== */
    .article-toggle-wrap {
      text-align: center;
      position: relative;
      z-index: 5;
      margin-bottom: -1.25rem;
      pointer-events: none;
    }
    .article-toggle-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: 9999px;
      padding: 10px 24px;
      font-size: 0.88rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.85);
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08);
      pointer-events: auto;
      user-select: none;
      letter-spacing: 0.02em;
    }
    .article-toggle-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.35);
      color: #fff;
      transform: translateY(-1px);
      box-shadow: 0 6px 22px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.12);
    }
    .article-toggle-icon {
      width: 14px;
      height: 14px;
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .article-toggle-icon.rotated {
      transform: rotate(180deg);
    }

    @media (max-width: 580px) {
      .article-title {
        font-size: 1.5rem;
      }
      .glass-card {
        padding: 1.5rem 1rem;
        border-radius: 18px;
      }
    }
  </style>

  <!-- 展开/收起按钮样式（最高优先级覆盖App.vue灰色按钮） -->
  <style>
    .article-container > button.mt-2,
    .article-container > button[class*="bg-gray"] {
      background: rgba(255,255,255,.12) !important;
      backdrop-filter: blur(20px) !important;
      -webkit-backdrop-filter: blur(20px) !important;
      color: rgba(255,255,255,.85) !important;
      border: 1px solid rgba(255,255,255,.22) !important;
      border-radius: 9999px !important;
      padding: 10px 26px !important;
      font-size: .88rem !important;
      box-shadow: 0 4px 16px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.08) !important;
    }
    .article-container > button.mt-2:hover,
    .article-container > button[class*="bg-gray"]:hover {
      background: rgba(255,255,255,.22) !important;
      color: #fff !important;
      border-color: rgba(255,255,255,.4) !important;
    }
  </style>

  <div class="article-bg"></div>

  <div class="article-content">
    <header class="article-header">
      <h1 class="article-title">免费在线计时器：你的随身时间管理小助手</h1>
      <p class="article-subtitle">无论是煮鸡蛋、运动计时，还是提醒休息，这个简单好用的倒计时工具都能帮你精准掌控时间。</p>
    </header>

    <div class="glass-card">
      <h2 class="section-title">你是不是也经常忘记时间？</h2>
      <p class="article-text">想想看这些场景：锅里炖着汤，转身去忙别的事，结果一不小心就糊了；说好只玩十分钟手机，抬头却发现一小时过去了；工作学习时需要专注一段时间，却总是被各种事情打断。</p>
      <p class="article-text">时间看不见摸不着，稍不注意就从指缝溜走。这时候，如果能有一个简单、醒目的倒计时工具在一旁提醒你，事情就简单多了。</p>
    </div>

    <div class="glass-card">
      <h2 class="section-title">一个为你量身打造的时间提醒工具</h2>
      <p class="article-text">我们常常需要为各种活动计时，但手机自带的时钟应用可能操作繁琐，或者功能单一。一个好用的在线计时器应该是什么样子？它应该像你的私人助理一样，既听话又醒目。</p>

      <ul class="feature-list">
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>设定任意时长</strong>：无论是短短1分钟，还是长达数小时，都可以自由组合小时、分钟和秒。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>一键快速设置</strong>：泡面3分钟、番茄工作法25分钟、午休30分钟……常用时间只需点一下。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>清晰直观的显示</strong>：大数字倒计时，搭配一个逐渐填充的圆环进度条，剩余时间一目了然。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>灵活的控制</strong>：可以随时开始、暂停、继续，或者直接停止和重置，完全由你掌控节奏。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>贴心的完成提醒</strong>：时间一到，会有声音提示，如果允许，还会在电脑屏幕上弹出通知，绝不会让你错过。</span>
        </li>
      </ul>

      <p class="article-text">它就像一个放在电脑浏览器里的迷你计时闹钟，不占地方，随开随用，用完关掉即可。</p>
    </div>

    <div class="glass-card">
      <h2 class="section-title">生活中哪些地方用得上它？</h2>
      <p class="article-text">这个工具的设计初衷就是解决日常小麻烦，它的应用场景远超你的想象：</p>

      <div class="scene-grid">
        <div class="scene-card scene-card-orange">
          <h4 class="scene-title">厨房好帮手</h4>
          <p class="scene-desc">煮鸡蛋、泡茶叶、煲汤炖肉，设定好时间就可以放心离开，清脆的提示音会叫你回来。</p>
        </div>
        <div class="scene-card scene-card-blue">
          <h4 class="scene-title">学习工作伴侣</h4>
          <p class="scene-desc">采用"番茄工作法"，设定25分钟专注工作，5分钟休息，循环往复，大幅提升效率。</p>
        </div>
        <div class="scene-card scene-card-yellow">
          <h4 class="scene-title">健身运动教练</h4>
          <p class="scene-desc">做平板支撑？设定1分钟。组间休息？设定30秒。让计时器帮你严格遵循训练计划。</p>
        </div>
        <div class="scene-card scene-card-pink">
          <h4 class="scene-title">生活小提醒</h4>
          <p class="scene-desc">线上会议提前5分钟提醒，护肤品敷脸15分钟提醒，给孩子设定的游戏时间提醒……守护你的每个生活片段。</p>
        </div>
      </div>

      <p class="article-text">它的核心价值就在于：<strong style="color: rgba(255,255,255,0.95)">把抽象的时间，变成看得见、听得到的信号</strong>，帮你从"记时间"的负担中解脱出来，更专注于眼前的事情。</p>
    </div>

    <div class="glass-card">
      <h2 class="section-title">简单三步，轻松掌握</h2>
      <p class="article-text">使用起来非常简单，不需要任何学习成本：</p>

      <ol class="step-list">
        <li class="step-item">
          <span class="step-text"><strong>第一步：设定时间。</strong> 在页面上找到数字设置区域，通过点击加减号或直接输入，设定你所需的小时、分钟和秒。如果觉得麻烦，直接点击下方的"5分钟"、"30分钟"等快速按钮。</span>
        </li>
        <li class="step-item">
          <span class="step-text"><strong>第二步：开始计时。</strong> 点击大大的"开始"按钮，倒计时即刻启动。屏幕中央的大数字开始跳动，周围的进度环也会随之填充，视觉上非常直观。</span>
        </li>
        <li class="step-item">
          <span class="step-text"><strong>第三步：等待提醒。</strong> 你可以最小化浏览器页面去做自己的事。时间一到，提示音会响起，确保你能收到完成的信号。</span>
        </li>
      </ol>

      <div class="highlight-box">
        <p class="highlight-box-content">整个过程就像设置一个传统的机械闹钟一样自然，但比它更灵活、更智能。</p>
      </div>
    </div>

    <div class="glass-card">
      <h2 class="section-title">为什么选择在线计时器？</h2>
      <p class="article-text">相比手机APP或实体计时器，在浏览器里使用的在线工具有几个独特优势：</p>

      <ul class="advantage-list">
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>无需下载安装</strong>：打开网页就能用，不占用手机或电脑的存储空间。</span>
        </li>
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>多设备通用</strong>：无论是在家里的电脑、公司的笔记本，还是平板上，只要有个浏览器，功能体验完全一样。</span>
        </li>
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>完全免费</strong>：没有任何隐藏费用或高级订阅，所有功能都可以免费使用。</span>
        </li>
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>界面清爽</strong>：设计简洁，没有扰人的广告，让你能聚焦于倒计时本身。</span>
        </li>
      </ul>

      <p class="article-text">对于经常在电脑前工作学习的人来说，在浏览器标签页里放一个计时器，比拿起手机设置闹钟要方便得多，也更能减少分心。</p>
    </div>

    <div class="glass-card">
      <h2 class="section-title">总结</h2>
      <p class="article-text">时间管理并不总是需要复杂的计划和软件。很多时候，我们只是需要一个靠谱的提醒，把自己从对时间的焦虑和遗忘中拉回来。</p>
      <p class="article-text">这个免费的在线计时器，正是这样一个轻巧而实用的工具。它把复杂的计时功能变得极其简单，用最直观的方式告诉你："还有多久？"</p>
    </div>

    <div class="summary-box">
      <p class="summary-text">好的工具应该融入生活，而不是增加负担。希望这个小小的计时器，能成为你管理碎片时间、享受专注当下的得力助手。</p>
    </div>
  </div>
</article>
`;export{e as default};
