const t=`
<div class="max-w-4xl mx-auto px-4 py-8 font-sans">
  <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
    做移动端页面还在用px写尺寸？这个工具帮你一键全转rem
  </h1>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r">
    <p class="text-gray-700">
      如果你做H5页面或者移动端Web开发，一定遇到过这样的困扰：设计稿给的是750宽度的px值，但实际要适配各种屏幕尺寸。用px写死的话，在大屏手机上元素太小，在小屏手机上又溢出。rem单位能完美解决这个问题——只要改一个基准值，整个页面等比缩放。但手动把每个px值算成rem太痛苦了？别担心，这个在线工具帮你批量搞定。
    </p>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b">什么是rem？为什么要用它替代px？</h2>
    <p class="text-gray-700 mb-4">
      简单来说，rem是一个"相对单位"。它相对于html根元素的字体大小来计算。比如你设置html的font-size为20px，那么1rem就等于20px，2rem就是40px，0.5rem就是10px。
    </p>
    <p class="text-gray-700 mb-4">
      这有什么好处呢？<strong>关键在于"一处改动，全局生效"</strong>。当用户用不同尺寸的设备打开你的页面时，只需要通过JavaScript动态修改html的font-size（也就是1rem对应的像素值），页面上所有用rem设置的尺寸就会自动按比例缩放。不用逐个去改每个元素的宽度、高度、字号、间距。
    </p>
    <p class="text-gray-700">
      相比之下，px是绝对单位，写死了就不会变；em虽然也是相对单位，但它是相对于父元素的字体大小，嵌套层级多了容易算晕。rem只认根元素，清晰可控，是目前移动端响应式开发的主流方案。
    </p>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b">手动转换有多麻烦？</h2>
    <p class="text-gray-700 mb-4">
      假设你的设计稿基于750px宽度，你设定的基准值是1rem=75px（方便计算）。那么：
    </p>
    <ul class="space-y-3 ml-6 list-disc text-gray-700 mb-4">
      <li>width: 375px 要写成 width: 5rem</li>
      <li>font-size: 28px 要写成 font-size: 0.3733rem</li>
      <li>padding: 24px 16px 要写成 padding: 0.32rem 0.2133rem</li>
      <li>margin-top: 40px 要写成 margin-top: 0.5333rem</li>
      <li>border-radius: 12px 要写成 border-radius: 0.16rem</li>
    </ul>
    <p class="text-gray-700">
      一个普通的移动端页面可能有几十上百个px值，一个个拿计算器除以75，再填回去，不仅耗时还容易算错。更别提有时候还要处理负数、小数精度等问题了。
    </p>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b">这个工具怎么帮你解决？</h2>
    <p class="text-gray-700 mb-6">
      使用非常简单，只需三步：
    </p>

    <div class="space-y-6">
      <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
        <h3 class="text-xl font-medium text-gray-800 mb-3">第一步：设置Rem基准值</h3>
        <p class="text-gray-700 mb-3">
          在左侧配置区输入你的基准像素值。常见的设置有：
        </p>
        <ul class="ml-6 list-disc text-gray-600 text-sm space-y-1">
          <li><strong>移动端常用：</strong>设计稿宽度/10，比如750的设计稿就用75，375的就用37.5</li>
          <li><strong>方便计算：</strong>设为10或100，这样转换结果一目了然</li>
          <li><strong>浏览器默认：</strong>设为16（大多数浏览器的默认字号）</li>
        </ul>
        <p class="text-gray-700 mt-3">
          工具会按照"rem值 = px数值 / 基准像素"的公式进行自动换算。
        </p>
      </div>

      <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
        <h3 class="text-xl font-medium text-gray-800 mb-3">第二步：输入CSS代码</h3>
        <p class="text-gray-700 mb-3">
          你可以<strong>直接粘贴CSS代码</strong>到输入框中，也可以<strong>上传.css文件</strong>让工具读取内容。支持普通CSS、Less、Scss/Sass格式的文件。
        </p>
        <p class="text-gray-700">
          不确定格式对不对？点击"演示数据"按钮，工具会填充一段示例CSS代码供你测试效果。
        </p>
      </div>

      <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
        <h3 class="text-xl font-medium text-gray-800 mb-3">第三步：点击转换并复制结果</h3>
        <p class="text-gray-700 mb-3">
          点击"点击处理"按钮，所有px值会被自动转换为对应的rem值。转换完成后直接点击"复制"按钮就能拿到结果代码。
        </p>
        <p class="text-gray-700">
          如果需要重新调整，修改基准值后再次点击处理即可。点击"清空数据"可以重置一切从头开始。
        </p>
      </div>
    </div>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b">进阶技巧：关于Border的处理</h2>
    <p class="text-gray-700 mb-4">
      你可能注意到工具有一个"<strong>不处理Border属性值</strong>"的选项。这是为什么呢？
    </p>
    <p class="text-gray-700 mb-4">
      在实际开发中，边框（border）通常不需要随屏幕缩放。比如一个1px的细线边框，如果换成rem后在不同设备上可能变成2px甚至更粗，反而影响视觉效果。所以很多开发者习惯保留border相关属性中的px值不变。
    </p>
    <p class="text-gray-700">
      勾选此选项后，工具会跳过border-width、border、border-top/bottom/left/right-width等属性中的px转换。你可以根据项目需求灵活选择。
    </p>
  </div>

  <div class="mb-10 bg-gray-50 p-6 rounded-xl">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">实际使用场景</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white p-4 rounded-lg shadow">
        <h4 class="font-medium text-gray-800 mb-2">小张 | 前端开发工程师</h4>
        <p class="text-gray-700 text-sm">
          "公司项目全面转向移动端适配，几百个页面的样式要从px改成rem。用这个工具批量处理，配合编辑器的全局替换功能，两天就把核心页面全部迁移完了。省了大量手工计算的时间。"
        </p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h4 class="font-medium text-gray-800 mb-2">李姐 | 自媒体运营</h4>
        <p class="text-gray-700 text-sm">
          "做公众号H5活动页面，设计师给的稿子全是px标注。以前要自己一个个算，现在把CSS贴进去，一秒出结果。连演示数据功能都帮我想好了示例格式，很贴心。"
        </p>
      </div>
    </div>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-bottom">关于rem单位的常见问题</h2>
    <div class="space-y-5">
      <div>
        <h4 class="font-medium text-gray-800 mb-2">Q：rem和vw/vh有什么区别？应该用哪个？</h4>
        <p class="text-gray-700 text-sm">
          A：rem是基于根元素字号的比例单位，vw/vh是视口宽高的百分比单位。两者都能实现响应式，但rem更适合做整体等比缩放（如从设计稿还原），而vw适合做与屏幕宽度强相关的布局。很多成熟的方案是rem为主、vw为辅的组合使用。
        </p>
      </div>
      <div>
        <h4 class="font-medium text-gray-800 mb-2">Q：转换后的rem值有很多小数位怎么办？</h4>
        <p class="text-gray-700 text-sm">
          A：工具会自动去除末尾多余的零。一般来说保留2到4位小数足够精确。如果你希望结果更整洁，可以把基准值设为方便整除的数字（如10、25、50、100）。
        </p>
      </div>
      <div>
        <h4 class="font-medium text-gray-800 mb-2">Q：这个工具支持哪些CSS属性的转换？</h4>
        <p class="text-gray-700 text-sm">
          A：工具会扫描CSS中所有出现"数字+px"的地方并进行替换，包括但不限于width、height、font-size、padding、margin、border-radius、top/left/right/bottom、line-height、letter-spacing、gap等属性。注释和字符串中的px不会被误转。
        </p>
      </div>
      <div>
        <h4 class="font-medium text-gray-800 mb-2">Q：转换后的代码可以直接用在项目中吗？</h4>
        <p class="text-gray-700 text-sm">
          A：可以。转换只是做了单位换算，不会改变CSS的选择器结构和其他属性值。建议转换后检查一遍，特别是有特殊计算或CSS函数（如calc()）的地方。
        </p>
      </div>
    </div>
  </div>

  <div class="text-center p-6 border border-dashed border-gray-300 rounded-xl">
    <h3 class="text-xl font-semibold text-gray-800 mb-3">告别手工计算，专注更有价值的事</h3>
    <p class="text-gray-700 mb-4">
      把繁琐的单位换算交给工具，把时间留给创意和逻辑。无论你是专业前端开发者还是偶尔写写样式的运营人员，这个免费在线工具都能让你的工作更高效。打开即用，无需注册，转换结果一键复制。
    </p>
    <p class="text-gray-700 font-medium">
      下次收到满是px值的设计稿时，别忘了来这里一键转换。几秒钟的事情，何必浪费脑细胞呢？
    </p>
  </div>

  <div class="mt-10 pt-6 border-t border-gray-200">
    <p class="text-gray-600 text-sm">
      相关搜索：css px转rem在线工具、px转rem计算器、移动端rem适配方案、前端响应式单位转换、rem基准值怎么设、设计稿px转rem、H5页面rem布局、CSS单位px和rem区别、批量px转rem工具、在线CSS转换器
    </p>
  </div>
</div>
`;export{t as default};
