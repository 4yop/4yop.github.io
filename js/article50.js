const l=`
<div class="text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-8 text-center">密码生成器：为你的数字生活筑起安全防线</h1>

  <div class="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="m-0 font-medium text-blue-900">⚠️ 你的密码可能比你想象的更脆弱</p>
    <p class="mt-2 mb-0">据安全研究机构统计，超过80%的数据泄露事件都与弱密码有关。如果你还在使用"123456"、"password"或生日作为密码，那么这篇文章就是为你准备的。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">为什么你需要一个强大的密码？</h2>
  <p>在数字化时代，密码就像你家门的钥匙。不同的是，这扇门后面存放着你的银行账户、私人照片、工作文件，甚至是身份信息。一个强大的密码，是保护这些数字资产的第一道防线。</p>
  
  <div class="bg-red-50 p-5 rounded-lg my-6 border border-red-100">
    <h3 class="font-medium text-red-800 mb-3">弱密码的常见风险：</h3>
    <ul class="space-y-2 text-red-700">
      <li>• <strong>字典攻击</strong>：黑客使用常见密码列表，几秒钟就能破解简单密码</li>
      <li>• <strong>暴力破解</strong>：短密码（8位以下）在现代计算机面前撑不过几分钟</li>
      <li>• <strong>撞库攻击</strong>：一个网站的泄露密码，可能被用来尝试登录你的其他账户</li>
      <li>• <strong>社会工程学</strong>：使用生日、姓名等个人信息，容易被熟人猜到</li>
    </ul>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">什么样的密码才算安全？</h2>
  <p>网络安全专家普遍推荐的密码标准：</p>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg bg-green-50">
      <h3 class="font-medium text-green-800 mb-2">✅ 安全的密码特征</h3>
      <ul class="text-sm text-green-700 space-y-1">
        <li>• 至少12位以上长度</li>
        <li>• 包含大小写字母混合</li>
        <li>• 包含数字和特殊符号</li>
        <li>• 不包含个人信息</li>
        <li>• 每个账户使用不同密码</li>
      </ul>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg bg-red-50">
      <h3 class="font-medium text-red-800 mb-2">❌ 避免的密码类型</h3>
      <ul class="text-sm text-red-700 space-y-1">
        <li>• 连续数字（123456）</li>
        <li>• 键盘顺序（qwerty）</li>
        <li>• 常见单词（password）</li>
        <li>• 生日或纪念日</li>
        <li>• 在多个网站重复使用</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">密码生成器：让安全变得简单</h2>
  <p>手动创建并记住几十个复杂密码几乎是不可能的任务。这就是密码生成器的价值所在——它能在几秒钟内为你生成符合安全标准的随机密码。</p>

  <h3 class="text-xl font-medium text-gray-800 mt-8 mb-3">一个好用的密码生成器应该具备：</h3>
  <ul class="my-4 pl-5 space-y-2">
    <li><strong>自定义长度</strong>：根据需求生成4-64位密码</li>
    <li><strong>字符类型选择</strong>：灵活开关大小写、数字、特殊符号</li>
    <li><strong>批量生成</strong>：一次生成多个选项供选择</li>
    <li><strong>一键复制</strong>：方便快速使用</li>
    <li><strong>本地运行</strong>：密码不在网络传输，更安全</li>
  </ul>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">密码安全最佳实践</h2>
  
  <div class="space-y-6 my-6">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-lg text-gray-800 mb-2">1. 使用密码管理器</h3>
      <p>记住几十个复杂密码不现实。使用密码管理器（如Bitwarden、1Password）可以安全存储所有密码，你只需要记住一个主密码。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-lg text-gray-800 mb-2">2. 开启双重验证（2FA）</h3>
      <p>即使密码泄露，双重验证也能提供额外保护。建议为重要账户（邮箱、银行、社交账号）开启此功能。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-lg text-gray-800 mb-2">3. 定期更换重要密码</h3>
      <p>对于银行账户、邮箱等关键服务，建议每3-6个月更换一次密码。如果收到安全提醒，应立即更换。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-medium text-lg text-gray-800 mb-2">4. 警惕钓鱼攻击</h3>
      <p>不要在可疑网站输入密码。检查网址是否正确，留意拼写错误（如g00gle.com）。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见问题解答</h2>
  
  <div class="space-y-4 my-6">
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：密码生成器生成的密码安全吗？</p>
      <p class="text-gray-600">答：是的。密码生成器使用加密安全的随机数生成算法，产生的密码具有高度随机性，几乎不可能被猜测或破解。相比人脑想出的密码，随机生成的密码安全性要高得多。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：多长的密码才算足够安全？</p>
      <p class="text-gray-600">答：对于一般网站，12位以上即可。对于银行、邮箱等重要账户，建议使用16位或更长的密码。每增加一位，破解难度呈指数级增长。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：特殊符号真的有必要吗？</p>
      <p class="text-gray-600">答：有必要。包含特殊符号（!@#$%^&*等）可以大幅增加密码的复杂度。不过，有些网站不支持某些特殊字符，这时可以灵活调整。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">立即行动，保护你的数字资产</h2>
  <p>密码安全不是小事。一次数据泄露可能带来身份盗用、财产损失等严重后果。好消息是，保护自己也并不复杂。</p>
  
  <div class="mt-6 p-5 bg-green-50 border border-green-100 rounded-lg">
    <p class="font-medium text-green-900 mb-2">🛡️ 今天的行动计划：</p>
    <ol class="text-green-800 space-y-1">
      <li>1. 使用密码生成器，为你的重要账户创建新密码</li>
      <li>2. 安装一个密码管理器，开始有序管理密码</li>
      <li>3. 为邮箱和银行账户开启双重验证</li>
      <li>4. 检查是否有重复使用的密码，逐一更换</li>
    </ol>
  </div>
  
  <p class="mt-6 text-center text-gray-600">安全是一个持续的过程，而不是一次性的任务。从今天开始，让你的数字生活更加安全。</p>
</div>
`;export{l as default};
