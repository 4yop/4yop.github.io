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
      background: #1a0f0a;
    }
    .article-bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 60% at 20% 10%, rgba(239, 68, 68, 0.2) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 80% 20%, rgba(249, 115, 22, 0.18) 0%, transparent 55%),
        radial-gradient(ellipse 70% 55% at 50% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 55%),
        radial-gradient(ellipse 50% 40% at 85% 75%, rgba(234, 88, 12, 0.2) 0%, transparent 50%);
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
      background: rgba(40, 20, 12, 0.5);
      backdrop-filter: blur(24px) saturate(1.4);
      -webkit-backdrop-filter: blur(24px) saturate(1.4);
      border: 1px solid rgba(249, 115, 22, 0.12);
      border-radius: 20px;
      padding: 2rem 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 180, 120, 0.06), 0 0 60px rgba(239, 68, 68, 0.04);
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
      color: rgba(251, 191, 36, 0.85);
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
      background: #ef4444;
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
      background: #f97316;
      margin-top: 0.5rem;
      flex-shrink: 0;
      box-shadow: 0 0 8px rgba(249, 115, 22, 0.5);
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
    .scene-card-red { border-left: 3px solid rgba(239, 68, 68, 0.6); }
    .scene-card-orange { border-left: 3px solid rgba(249, 115, 22, 0.6); }
    .scene-card-amber { border-left: 3px solid rgba(245, 158, 11, 0.6); }
    .scene-card-rose { border-left: 3px solid rgba(225, 29, 72, 0.6); }
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
      background: #ef4444;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.95rem;
      color: white;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
    }
    .step-item:nth-child(2)::before {
      background: #f97316;
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
    }
    .step-item:nth-child(3)::before {
      background: #f59e0b;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
    }
    .step-item:nth-child(4)::before {
      background: #ea580c;
      box-shadow: 0 4px 12px rgba(234, 88, 12, 0.4);
    }
    .step-text {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.7;
      padding-top: 0.25rem;
    }
    .highlight-box {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.2);
      border-radius: 16px;
      padding: 1.25rem;
      margin: 1.25rem 0;
    }
    .highlight-box-title {
      font-size: 1rem;
      font-weight: 600;
      color: rgba(251, 191, 36, 0.95);
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
      background: rgba(40, 20, 12, 0.4);
      border: 1px solid rgba(249, 115, 22, 0.1);
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
      <h1 class="article-title">番茄时钟：用25分钟改变你的工作效率</h1>
      <p class="article-subtitle">番茄工作法是最简单有效的时间管理方法之一，25分钟专注+5分钟休息的节奏，让你告别拖延，找回掌控感。</p>
    </header>

    <div class="glass-card">
      <h2 class="section-title">你是不是也经常无法专注？</h2>
      <p class="article-text">打开电脑准备写报告，结果刷了半小时手机；说好只看一条消息，回过神来已经过去了四十分钟；坐在书桌前发呆，脑子里想的全是待会吃什么。</p>
      <p class="article-text">这些场景太常见了。不是你不够努力，而是人的大脑本来就不适合长时间连续运转。科学研究表明，大多数人的注意力在持续工作20到30分钟后就会明显下降。硬撑着继续，效率只会越来越低。</p>
      <p class="article-text">那怎么办？答案很简单：<strong style="color: rgba(255,255,255,0.95)">别跟大脑对着干，顺着它的节奏来。</strong></p>
    </div>

    <div class="glass-card">
      <h2 class="section-title">什么是番茄工作法？</h2>
      <p class="article-text">番茄工作法（Pomodoro Technique）是意大利人弗朗切斯科-西里洛在1980年代发明的一种时间管理方法。名字来源于他当时用的那个番茄形状的厨房计时器。</p>
      <p class="article-text">核心规则非常简单：</p>

      <ul class="feature-list">
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>专注25分钟</strong>：设定一个25分钟的计时器，在这段时间里只做一件事，不看手机、不刷网页、不回消息。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>短休息5分钟</strong>：25分钟到了之后，站起来活动一下，喝口水，让大脑喘口气。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>每4个番茄后来一次长休息</strong>：完成4轮25分钟专注后，给自己15到30分钟的较长休息，彻底放松一下。</span>
        </li>
      </ul>

      <div class="highlight-box">
        <p class="highlight-box-content">就这么简单。不需要复杂的计划表，不需要昂贵的软件，只需要一个计时器和一点自律。25分钟的长度刚好够你进入状态，5分钟的休息又不会让你彻底走神。</p>
      </div>
    </div>

    <div class="glass-card">
      <h2 class="section-title">这个番茄时钟能帮你做什么？</h2>
      <p class="article-text">我们按照番茄工作法的核心规则，做了一个开箱即用的在线番茄时钟工具：</p>

      <ul class="feature-list">
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>自动循环切换</strong>：25分钟专注结束后自动切换到5分钟短休息，4轮之后自动进入15分钟长休息，不用手动操作。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>圆形进度环</strong>：大号圆形进度条实时显示剩余时间，一眼就能看出还剩多久，不用盯着数字看。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>自定义时长</strong>：觉得25分钟太长或太短？专注、短休息、长休息的时长都可以自己调整。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>声音提醒</strong>：每个阶段结束时会播放提示音，即使你在看别的窗口也不会错过切换。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>浏览器通知</strong>：授权后会在桌面弹出通知，告诉你"专注结束，该休息了"或"休息结束，继续加油"。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>全屏模式</strong>：一键全屏，大字显示倒计时，适合放在副屏或投影上，团队一起用也没问题。</span>
        </li>
        <li class="feature-item">
          <span class="feature-dot"></span>
          <span class="feature-text"><strong>番茄计数统计</strong>：记录你今天完成了多少个番茄，看着数字增长，成就感满满。</span>
        </li>
      </ul>

      <p class="article-text">所有功能都在浏览器里运行，不需要下载安装，打开网页就能开始你的第一个番茄。</p>
    </div>

    <div class="glass-card">
      <h2 class="section-title">哪些人适合用番茄工作法？</h2>
      <p class="article-text">番茄工作法几乎适用于所有需要专注的场景，以下几类人尤其受益：</p>

      <div class="scene-grid">
        <div class="scene-card scene-card-red">
          <h4 class="scene-title">学生</h4>
          <p class="scene-desc">备考复习、写论文、做作业，25分钟刚好是一个高效的学习单元，5分钟休息防止大脑过载。</p>
        </div>
        <div class="scene-card scene-card-orange">
          <h4 class="scene-title">程序员</h4>
          <p class="scene-desc">写代码需要深度思考，番茄钟帮你进入心流状态，定时休息还能预防久坐带来的身体问题。</p>
        </div>
        <div class="scene-card scene-card-amber">
          <h4 class="scene-title">写作者</h4>
          <p class="scene-desc">面对空白文档最难的是开始，番茄钟给你一个"先写25分钟"的承诺，写着写着就停不下来。</p>
        </div>
        <div class="scene-card scene-card-rose">
          <h4 class="scene-title">远程办公者</h4>
          <p class="scene-desc">在家工作最怕分心，番茄钟帮你划分工作与休息的界限，4个番茄后心安理得地休息。</p>
        </div>
      </div>

      <p class="article-text">其实不只是这些，任何需要集中注意力的事情都可以用番茄工作法：读书、画画、学外语、整理房间......核心逻辑都是一样的：<strong style="color: rgba(255,255,255,0.95)">短时间全力投入，定时休息恢复，循环往复。</strong></p>
    </div>

    <div class="glass-card">
      <h2 class="section-title">如何使用番茄时钟？</h2>
      <p class="article-text">操作非常简单，四步就能开始：</p>

      <ol class="step-list">
        <li class="step-item">
          <span class="step-text"><strong>打开页面。</strong> 点击进入番茄时钟页面，默认已经按照25分钟专注、5分钟短休息、15分钟长休息的标准番茄工作法设置好了。</span>
        </li>
        <li class="step-item">
          <span class="step-text"><strong>点击开始。</strong> 按下开始按钮，25分钟倒计时启动，圆形进度环开始走动。把手机放一边，专心做你该做的事。</span>
        </li>
        <li class="step-item">
          <span class="step-text"><strong>听到提示音后休息。</strong> 25分钟结束，声音提醒响起，自动进入5分钟休息。站起来走走、喝口水、看看窗外。</span>
        </li>
        <li class="step-item">
          <span class="step-text"><strong>循环往复。</strong> 休息结束自动开始下一个番茄。每完成4个番茄，自动进入15分钟长休息。页面会记录你完成了几个番茄。</span>
        </li>
      </ol>

      <div class="highlight-box">
        <p class="highlight-box-content">如果你觉得25分钟不适合自己，可以随时调整专注和休息的时长。番茄工作法的精神是"短时间全力投入"，具体多短由你决定。</p>
      </div>
    </div>

    <div class="glass-card">
      <h2 class="section-title">为什么选择在线番茄时钟？</h2>
      <p class="article-text">市面上有很多番茄钟APP，为什么用网页版？</p>

      <ul class="advantage-list">
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>无需下载安装</strong>：打开浏览器就能用，不占手机存储，不占电脑空间。</span>
        </li>
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>电脑端体验更好</strong>：在电脑上工作时，浏览器标签页里的番茄钟比手机APP更方便，不用来回切换设备。</span>
        </li>
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>完全免费</strong>：没有高级版，没有内购，所有功能全部免费使用。</span>
        </li>
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>数据本地处理</strong>：你的番茄记录全部保存在浏览器本地，不上传任何服务器，隐私有保障。</span>
        </li>
        <li class="advantage-item">
          <span class="advantage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>
          <span class="feature-text"><strong>全屏大字显示</strong>：一键全屏，倒计时数字大到整个屏幕都看得见，适合放在副屏上随时查看。</span>
        </li>
      </ul>

      <p class="article-text">对于每天在电脑前工作学习的人来说，浏览器里放一个番茄钟，比掏出手机设闹钟方便得多，也更能避免"拿手机设闹钟结果顺便刷了二十分钟"的尴尬。</p>
    </div>

    <div class="glass-card">
      <h2 class="section-title">总结</h2>
      <p class="article-text">番茄工作法的魅力在于它的简单。不需要复杂的学习曲线，不需要昂贵的工具，只需要一个25分钟的计时器和一点开始的勇气。</p>
      <p class="article-text">很多人觉得时间管理很难，其实难的不是方法，而是开始。番茄工作法给了你一个极低的启动门槛："先专注25分钟试试。"往往开始之后，你会发现25分钟根本不够用。</p>
    </div>

    <div class="summary-box">
      <p class="summary-text">好的时间管理工具应该帮你减少决策负担，而不是增加它。这个番茄时钟就是为了这个目的而设计的：打开就用，自动循环，声音提醒，专注做事就好。</p>
    </div>
  </div>
</article>
`;export{e as default};
