const s=`
<article class="article-content">
  <header class="article-header">
    <h1 class="article-title">颜色选择器在线工具 - 专业取色器与颜色代码转换</h1>
    <p class="article-intro">在数字设计和开发领域，<strong>颜色选择器</strong>（Color Picker）是不可或缺的专业工具。无论您是UI设计师、前端开发者还是内容创作者，掌握高效的<strong>取色器</strong>使用方法都能显著提升工作效率。本文将深入介绍颜色选择器的核心功能、常见<strong>颜色代码</strong>格式以及实际应用场景。</p>
  </header>

  <section class="article-section" id="color-formats">
    <h2 class="section-title">一、常见的颜色格式详解</h2>
    <p class="section-text">了解不同的颜色表示方法是使用颜色选择器的基础。以下是四种最常用的颜色格式：</p>
    
    <div class="format-grid">
      <div class="format-card">
        <h3 class="format-name">HEX 十六进制</h3>
        <p class="format-desc">网页开发中最常用的颜色格式，以#开头，后跟6位或3位十六进制数字。</p>
        <code class="format-example">#FF5733 或 #F53</code>
        <p class="format-usage">适用于：CSS样式、HTML属性、设计规范文档</p>
      </div>
      
      <div class="format-card">
        <h3 class="format-name">RGB 红绿蓝</h3>
        <p class="format-desc">基于光的三原色原理，通过红(Red)、绿(Green)、蓝(Blue)三个通道的数值（0-255）定义颜色。</p>
        <code class="format-example">rgb(255, 87, 51)</code>
        <p class="format-usage">适用于：图像处理软件、屏幕显示校准</p>
      </div>
      
      <div class="format-card">
        <h3 class="format-name">HSL 色相/饱和度/亮度</h3>
        <p class="format-desc">更符合人类直觉的颜色表示方式，H代表色相(0-360°)，S代表饱和度(0-100%)，L代表亮度(0-100%)。</p>
        <code class="format-example">hsl(9, 100%, 60%)</code>
        <p class="format-usage">适用于：配色方案设计、颜色变体生成</p>
      </div>
      
      <div class="format-card">
        <h3 class="format-name">CMYK 印刷四色</h3>
        <p class="format-desc">青(Cyan)、品红(Magenta)、黄(Yellow)、黑(Key)四色印刷模式，主要用于专业印刷领域。</p>
        <code class="format-example">cmyk(0%, 66%, 80%, 0%)</code>
        <p class="format-usage">适用于：印刷设计、出版物制作</p>
      </div>
    </div>
  </section>

  <section class="article-section" id="use-cases">
    <h2 class="section-title">二、颜色选择器的使用场景</h2>
    
    <div class="use-case-block">
      <h3 class="use-case-title">🎨 设计师的工作利器</h3>
      <ul class="use-case-list">
        <li><strong>品牌色彩管理</strong>：提取并保存企业VI标准色，确保视觉一致性</li>
        <li><strong>竞品分析</strong>：快速获取竞争对手网站的配色方案</li>
        <li><strong>灵感收集</strong>：从优秀设计作品中提取配色灵感</li>
        <li><strong>设计交付</strong>：为开发团队提供精确的颜色代码规范</li>
      </ul>
    </div>
    
    <div class="use-case-block">
      <h3 class="use-case-title">💻 开发者的效率工具</h3>
      <ul class="use-case-list">
        <li><strong>前端开发</strong>：快速获取CSS所需的颜色值</li>
        <li><strong>UI组件开发</strong>：统一组件库的颜色变量</li>
        <li><strong>主题定制</strong>：一键生成深色/浅色模式配色</li>
        <li><strong>调试优化</strong>：实时预览颜色效果，快速迭代</li>
      </ul>
    </div>
    
    <div class="use-case-block">
      <h3 class="use-case-title">📸 屏幕取色的应用场景</h3>
      <ul class="use-case-list">
        <li><strong>网页取色</strong>：提取网页中任意元素的颜色值</li>
        <li><strong>图片取色</strong>：从参考图片中获取精确色彩</li>
        <li><strong>视频取色</strong>：截取视频帧中的特定颜色</li>
        <li><strong>跨平台取色</strong>：支持桌面任意位置的屏幕取色</li>
      </ul>
    </div>
  </section>

  <section class="article-section" id="design-tips">
    <h2 class="section-title">三、配色基础与设计技巧</h2>
    
    <div class="tips-container">
      <div class="tip-item">
        <h4 class="tip-title">60-30-10 配色法则</h4>
        <p class="tip-content">主色占60%（背景、大面积区域），辅助色占30%（次要元素），强调色占10%（按钮、重点内容）。这是打造和谐配色方案的黄金比例。</p>
      </div>
      
      <div class="tip-item">
        <h4 class="tip-title">色彩心理学应用</h4>
        <p class="tip-content">了解颜色传达的情感：红色代表热情与紧急，蓝色象征信任与专业，绿色关联自然与健康，黄色传递活力与警示。根据产品定位选择合适的色彩语言。</p>
      </div>
      
      <div class="tip-item">
        <h4 class="tip-title">对比度与可读性</h4>
        <p class="tip-content">确保文字与背景有足够的对比度（建议至少4.5:1）。使用颜色选择器的对比度检测功能，验证设计是否符合WCAG无障碍标准。</p>
      </div>
      
      <div class="tip-item">
        <h4 class="tip-title">色盲友好设计</h4>
        <p class="tip-content">约8%的男性存在色觉障碍。避免仅用颜色传递关键信息，结合图标、文字标签或纹理区分。使用颜色选择器的色盲模拟功能预览效果。</p>
      </div>
    </div>
  </section>

  <section class="article-section" id="accessibility">
    <h2 class="section-title">四、颜色无障碍设计指南</h2>
    <p class="section-text">无障碍设计不仅是道德责任，也是法律要求。以下是使用颜色选择器进行无障碍设计的要点：</p>
    
    <div class="accessibility-checklist">
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span class="check-text">确保文本对比度符合WCAG 2.1 AA标准（普通文本4.5:1，大文本3:1）</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span class="check-text">不要仅用颜色表示状态（如错误提示应配合图标和文字）</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span class="check-text">提供高对比度模式或主题切换选项</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span class="check-text">测试红绿色盲、蓝黄色盲等不同色觉缺陷下的显示效果</span>
      </div>
    </div>
  </section>

  <section class="article-section" id="faq">
    <h2 class="section-title">五、常见问题解答（FAQ）</h2>
    
    <div class="faq-list">
      <div class="faq-item">
        <h4 class="faq-question">Q1: HEX和RGB颜色代码有什么区别？</h4>
        <p class="faq-answer">HEX和RGB表示的是相同的颜色信息，只是格式不同。HEX使用十六进制表示（如#FF5733），更紧凑适合代码编写；RGB使用十进制（如rgb(255,87,51)），更直观易读。现代浏览器和工具都支持两种格式，可以互相转换。</p>
      </div>
      
      <div class="faq-item">
        <h4 class="faq-question">Q2: 屏幕取色器如何确保颜色准确性？</h4>
        <p class="faq-answer">屏幕取色器通过读取屏幕像素点的RGB值来获取颜色。准确性取决于显示器的色彩校准。对于专业设计工作，建议使用经过色彩校准的显示器，并在sRGB或Adobe RGB色彩空间下工作。</p>
      </div>
      
      <div class="faq-item">
        <h4 class="faq-question">Q3: 什么是HSL格式，为什么设计师更喜欢用它？</h4>
        <p class="faq-answer">HSL（色相、饱和度、亮度）是一种更符合人类直觉的颜色表示方式。设计师喜欢HSL是因为调整亮度或饱和度时，色相保持不变，便于创建同色系配色方案。例如，将亮度从50%调到70%就能得到同一颜色的浅色变体。</p>
      </div>
      
      <div class="faq-item">
        <h4 class="faq-question">Q4: 如何选择适合网页设计的配色方案？</h4>
        <p class="faq-answer">选择网页配色时，建议：1) 确定品牌主色；2) 使用60-30-10法则分配颜色比例；3) 确保文字与背景对比度达标；4) 限制总颜色数量（通常3-5种）；5) 考虑色盲用户的体验。可以使用颜色选择器的配色生成功能辅助决策。</p>
      </div>
      
      <div class="faq-item">
        <h4 class="faq-question">Q5: 颜色选择器支持哪些颜色格式的转换？</h4>
        <p class="faq-answer">专业的颜色选择器通常支持HEX、RGB、RGBA、HSL、HSLA、CMYK、HSV等多种格式之间的相互转换。部分高级工具还支持CSS颜色关键字（如"red"、"transparent"）、LAB、LCH等专业色彩空间，满足不同场景的需求。</p>
      </div>
    </div>
  </section>

  <section class="article-section" id="conclusion">
    <h2 class="section-title">六、结语</h2>
    <p class="section-text">颜色选择器是数字创意工作者的必备工具，掌握其使用方法能显著提升设计效率和作品质量。无论您是需要快速获取颜色代码、进行屏幕取色，还是创建和谐的配色方案，一款功能完善的<strong>取色器</strong>都能满足您的需求。</p>
    <p class="section-text">希望本文对您理解和使用<strong>颜色选择器</strong>有所帮助。立即体验我们的在线取色工具，让配色工作变得更加轻松高效！</p>
  </section>
</article>

<style>
.article-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.8;
  color: #333;
}

.article-header {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e0e0e0;
}

.article-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.article-intro {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
}

.article-section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
}

.section-text {
  margin-bottom: 1rem;
  color: #444;
}

.format-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.format-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 4px solid #3498db;
}

.format-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.format-desc {
  color: #666;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.format-example {
  display: inline-block;
  background: #2c3e50;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.format-usage {
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
}

.use-case-block {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.use-case-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.use-case-list {
  list-style: none;
  padding: 0;
}

.use-case-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
}

.use-case-list li::before {
  content: "•";
  color: #3498db;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.tips-container {
  display: grid;
  gap: 1.2rem;
}

.tip-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 1.2rem;
  border-radius: 8px;
}

.tip-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.tip-content {
  font-size: 0.95rem;
  opacity: 0.95;
  line-height: 1.6;
}

.accessibility-checklist {
  background: #f0f8ff;
  border-radius: 8px;
  padding: 1.5rem;
}

.check-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #d0e0f0;
}

.check-item:last-child {
  border-bottom: none;
}

.check-icon {
  color: #27ae60;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.check-text {
  color: #444;
  line-height: 1.5;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.faq-item {
  background: #fafafa;
  border-radius: 8px;
  padding: 1.2rem;
  border-left: 4px solid #e74c3c;
}

.faq-question {
  font-size: 1.05rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.faq-answer {
  color: #555;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .article-content {
    padding: 1rem;
  }
  
  .article-title {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 1.2rem;
  }
  
  .format-grid {
    grid-template-columns: 1fr;
  }
}
</style>
`;export{s as default};
