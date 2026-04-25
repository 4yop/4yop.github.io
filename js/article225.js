const t=`
<div class="max-w-4xl mx-auto px-4 py-8 text-gray-800">
  <!-- 标题 -->
  <h1 class="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
    蚂蚁文菊花文生成器：让你的文字"开花"
  </h1>

  <!-- 引言 -->
  <p class="text-lg mb-6 text-gray-700 leading-relaxed">
    你是否在社交媒体上看到过这样的文字——"҉N҉i҉c҉e҉ ҉m҉e҉e҉t҉i҉n҉g҉ ҉y҉o҉u҉"，每个字符周围都带着小点或装饰符号，看起来像是蚂蚁爬过一样？这就是蚂蚁文，也叫菊花文，一种通过在字符前后添加Unicode组合符号来制造视觉装饰效果的文字艺术。无论是游戏昵称、社交签名还是评论装饰，它都能让你的文字瞬间脱颖而出。
  </p>

  <!-- 什么是蚂蚁文 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">什么是蚂蚁文/菊花文？</h2>
  <p class="mb-4 text-gray-700">
    蚂蚁文（Ant Text）和菊花文（Chrysanthemum Text）是同一种文字装饰效果的两种称呼。它通过在普通字符的前后添加特殊的Unicode组合字符（如声调符号、变音符号、装饰性符号等），让文字看起来带有装饰性点缀。因为那些小符号像蚂蚁一样散布在文字周围，或者像花瓣一样环绕着文字，所以有了这样形象的名字。
  </p>
  <p class="mb-4 text-gray-700">
    这种文字并不是真正的乱码，而是一种视觉艺术形式。每个基础字符都被精心选择的装饰符号包围，形成不同的视觉效果。有的像撒了糖粉，有的像带了光晕，有的则像被施了魔法般闪烁。这些装饰符号都是标准的Unicode字符，所以在绝大多数现代应用和平台都能正常显示。
  </p>

  <!-- 为什么使用蚂蚁文 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">为什么大家都爱用蚂蚁文？</h2>
  <p class="mb-4 text-gray-700">
    在这个个性化时代，谁都希望自己的文字能与众不同。普通的用户名容易淹没在茫茫人海中，而一个带装饰效果的昵称——比如"༺ཌ༻N༺ཌ༻i༺ཌ༻c༺ཌ༻e༺ཌ༻"——会让人忍不住多看两眼。游戏玩家用它打造独特的角色名称，社交博主用它制作个性签名，甚至设计师会把这种效果用在海报和视频标题里，营造神秘感或艺术感。
  </p>
  <p class="mb-4 text-gray-700">
    而且这种文字的生成非常简单，不需要任何设计基础，只要输入文字，选择喜欢的样式，就能得到专属的装饰文字。这也是蚂蚁文生成器受欢迎的原因——简单、快速、效果好。
  </p>

  <!-- 如何使用 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">三步生成你的蚂蚁文</h2>
  <p class="mb-2 text-gray-700">这个工具完全傻瓜式操作，你只需要：</p>
  <ol class="list-decimal list-inside mb-4 space-y-2 text-gray-700">
    <li><span class="font-medium">输入文字：</span>在输入框中输入你想要转换的内容，支持中文、英文、数字和标点符号。</li>
    <li><span class="font-medium">选择样式：</span>系统会自动生成60种不同装饰风格的蚂蚁文效果供你选择。</li>
    <li><span class="font-medium">复制使用：</span>点击任意样式的"点击复制"按钮，就能将结果粘贴到任何地方。</li>
  </ol>
  <p class="mb-4 text-gray-700">
    你也可以点击"复制全部结果"一次性获取所有样式的转换结果，方便对比选择最满意的效果。
  </p>

  <!-- 样式说明 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">60种装饰样式详解</h2>
  <p class="mb-4 text-gray-700">
    我们的生成器提供多达60种不同的装饰样式，每种都使用独特的Unicode组合字符组合：
  </p>
  <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
    <li><span class="font-medium">基础装饰类（样式1-9）：</span>使用单一类型的组合字符，如点状装饰(҉)、双点装饰(҈)、删除线(̶)、下划线(̲)等，效果简洁清爽。</li>
    <li><span class="font-medium">双重组合类（样式10-20）：</span>叠加两种不同的组合字符，视觉效果更丰富，如点+上弧、圆圈+短竖线等。</li>
    <li><span class="font-medium">三重装饰类（样式21-30）：</span>三种符号组合，装饰效果更加华丽繁复。</li>
    <li><span class="font-medium">特殊符号类（样式31-45）：</span>引入括号、藏文符号等特殊字符，营造异域风情或科技感。</li>
    <li><span class="font-medium">多重混合类（样式46-60）：</span>四种及以上符号的组合，效果最为夸张炫酷。</li>
  </ul>
  <p class="mb-4 text-gray-700">
    从简约到奢华，从清新到狂野，总有一款适合你的场景需求。
  </p>

  <!-- 应用场景 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">适用场景推荐</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div class="bg-gray-50 p-4 rounded-none">
      <h3 class="font-bold text-gray-900 mb-2">社交媒体</h3>
      <ul class="text-sm text-gray-700 space-y-1">
        <li>- 微信/QQ昵称美化</li>
        <li>- 微博/抖音个性签名</li>
        <li>- 小红书/Instagram bio</li>
        <li>- 朋友圈文案装饰</li>
      </ul>
    </div>
    <div class="bg-gray-50 p-4 rounded-none">
      <h3 class="font-bold text-gray-900 mb-2">游戏场景</h3>
      <ul class="text-sm text-gray-700 space-y-1">
        <li>- 游戏角色命名</li>
        <li>- 公会/战队名称</li>
        <li>- 游戏内聊天装饰</li>
        <li>- 个人主页展示</li>
      </ul>
    </div>
    <div class="bg-gray-50 p-4 rounded-none">
      <h3 class="font-bold text-gray-900 mb-2">内容创作</h3>
      <ul class="text-sm text-gray-700 space-y-1">
        <li>- 视频标题美化</li>
        <li>- 文章标题装饰</li>
        <li>- 评论互动亮点</li>
        <li>- 直播间标题</li>
      </ul>
    </div>
    <div class="bg-gray-50 p-4 rounded-none">
      <h3 class="font-bold text-gray-900 mb-2">日常应用</h3>
      <ul class="text-sm text-gray-700 space-y-1">
        <li>- 邮件签名设计</li>
        <li>- 文档标题美化</li>
        <li>- 贺卡祝福语</li>
        <li>- 个人名片装饰</li>
      </ul>
    </div>
  </div>

  <!-- 技术原理 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">技术原理：Unicode组合字符</h2>
  <p class="mb-4 text-gray-700">
    蚂蚁文的实现依赖于Unicode标准中的"组合字符"（Combining Characters）。这些字符本身不能独立显示，而是要附加在基础字符的上方、下方或周围。通过在不同位置添加多个组合字符，就能创造出丰富的视觉装饰效果。
  </p>
  <p class="mb-4 text-gray-700">
    常用的组合字符包括：变音符号（U+0300-U+036F）、装饰性符号、数学符号、藏文符号等。我们的生成器精心挑选了数十种视觉效果好且兼容性强的组合字符，确保生成的文字在主流平台上都能完美显示。
  </p>

  <!-- 使用技巧 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">使用技巧与建议</h2>
  <ul class="list-disc list-inside mb-4 space-y-2 text-gray-700">
    <li><span class="font-medium">长度控制：</span>由于每个字符都会添加装饰符号，转换后的文字长度会增加数倍。建议原始文本控制在20字以内，以免在某些平台显示时被截断。</li>
    <li><span class="font-medium">样式选择：</span>正式场合建议使用简单样式（1-15），娱乐场合可以选择复杂样式（40-60）以增强视觉冲击力。</li>
    <li><span class="font-medium">兼容性测试：</span>虽然大多数现代应用都能显示，但某些老旧系统或特殊平台可能渲染异常。重要场合建议先测试再使用。</li>
    <li><span class="font-medium">适度使用：</span>装饰文字适合用于短文本（昵称、签名、标题），长段落使用可能影响阅读体验。</li>
    <li><span class="font-medium">创意组合：</span>可以尝试先转换为某种样式，再手动微调部分字符的装饰，创造独一无二的效果。</li>
  </ul>

  <!-- 常见问题 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">常见问题解答</h2>
  <div class="space-y-4">
    <div>
      <p class="font-medium text-gray-900">Q：生成的蚂蚁文可以商用吗？</p>
      <p class="text-gray-700">A：完全可以。这只是标准Unicode字符的组合使用，不涉及版权问题。你可以自由用于个人或商业用途。</p>
    </div>
    <div>
      <p class="font-medium text-gray-900">Q：为什么复制到某些地方显示不正常？</p>
      <p class="text-gray-700">A：极少数老旧的应用或不支持完整Unicode的系统可能会过滤掉组合字符。这种情况在现代操作系统和应用中非常罕见。如果遇到，换个平台通常就能解决。</p>
    </div>
    <div>
      <p class="font-medium text-gray-900">Q：支持哪些语言的文字？</p>
      <p class="text-gray-700">A：理论上支持所有Unicode文字，包括中文、英文、日文、韩文、阿拉伯文等。我们的工具对中文、英文、数字进行了特别优化，效果最佳。</p>
    </div>
    <div>
      <p class="font-medium text-gray-900">Q：可以在手机上使用吗？</p>
      <p class="text-gray-700">A：当然可以！我们的页面完全响应式设计，在手机、平板、电脑上都能完美运行和使用。</p>
    </div>
    <div>
      <p class="font-medium text-gray-900">Q：我的数据安全吗？</p>
      <p class="text-gray-700">A：绝对安全。所有的文字转换都在你的浏览器本地完成，不会上传到任何服务器。我们看不到你的输入内容，也无法存储任何信息。</p>
    </div>
  </div>

  <!-- 创意示例 -->
  <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-900">创意示例展示</h2>
  <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-none mb-4">
    <p class="text-center text-lg mb-4 font-mono">
      原文：<span class="font-bold">你好世界</span>
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm font-mono">
      <div class="bg-white p-3">
        <p class="text-xs text-gray-500 mb-1">样式1 - 点状</p>
        <p>҉你҉好҉世҉界҉</p>
      </div>
      <div class="bg-white p-3">
        <p class="text-xs text-gray-500 mb-1">样式10 - 组合上弧</p>
        <p>҉͡你҉͡好҉͡世҉͡界҉͡</p>
      </div>
      <div class="bg-white p-3">
        <p class="text-xs text-gray-500 mb-1">样式39 - 藏文装饰</p>
        <p>҈༺ཌ༻你҈༺ཌ༻好҈༺ཌ༻世҈༺ཌ༻界҈༺ཌ༻</p>
      </div>
    </div>
  </div>

  <!-- 结尾 -->
  <p class="mt-8 text-gray-700 border-t pt-6 text-center text-sm text-gray-500">
    蚂蚁文菊花文就像给文字穿上了华丽的礼服，让平凡的文字也能绽放光彩。无论你是想让自己的社交账号更出众，还是为内容增添一抹亮色，这个免费在线工具都能帮你轻松实现。快来试试吧，让你的文字"开花"！
  </p>
</div>
`;export{t as default};
