const e=`
<div class="text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
  <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-8 text-center">加密解密工具：保护你的数据安全</h1>

  <div class="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
    <p class="m-0 font-medium text-blue-900">在数字世界里，数据安全不容忽视</p>
    <p class="mt-2 mb-0">无论是传输敏感信息、存储重要文件，还是保护个人隐私，加密都是最基本的安全手段。加密解密工具提供多种算法支持，让你能够轻松对文本进行加密保护，只有掌握密钥的人才能解密查看。</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">为什么需要加密？</h2>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    <div class="p-4 border border-gray-200 rounded-lg bg-red-50">
      <h3 class="font-medium text-red-800 mb-2">🔒 隐私保护</h3>
      <p class="text-sm text-red-700">保护个人隐私信息，防止未经授权的访问。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg bg-red-50">
      <h3 class="font-medium text-red-800 mb-2">📡 安全传输</h3>
      <p class="text-sm text-red-700">在不安全渠道传输数据时，加密可防止中间人窃取。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg bg-red-50">
      <h3 class="font-medium text-red-800 mb-2">💾 数据存储</h3>
      <p class="text-sm text-red-700">加密存储敏感文件，即使设备丢失数据也不会泄露。</p>
    </div>
    <div class="p-4 border border-gray-200 rounded-lg bg-red-50">
      <h3 class="font-medium text-red-800 mb-2">✅ 完整性验证</h3>
      <p class="text-sm text-red-700">通过哈希算法验证数据是否被篡改。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见加密算法介绍</h2>
  
  <div class="space-y-4 my-6">
    <div class="p-5 border-2 border-blue-200 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-blue-800 text-lg">Base64编码</h3>
        <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">编码 ≠ 加密</span>
      </div>
      <p class="text-gray-600 mb-2">Base64是一种编码方式，不是加密算法。它将二进制数据转换为ASCII字符串，便于文本传输。任何人都能解码，不提供安全性。</p>
      <p class="text-sm text-gray-500"><strong>适用场景：</strong>URL传输、数据嵌入、简单的数据格式转换</p>
    </div>
    
    <div class="p-5 border-2 border-yellow-200 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-yellow-800 text-lg">MD5哈希</h3>
        <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">单向哈希</span>
      </div>
      <p class="text-gray-600 mb-2">MD5将任意长度数据转换为32位十六进制字符串。它是单向的，无法从哈希值反推原文。曾广泛用于密码存储，但现在已被认为不够安全。</p>
      <p class="text-sm text-gray-500"><strong>适用场景：</strong>文件完整性校验、简单的数据指纹（不推荐用于密码）</p>
    </div>
    
    <div class="p-5 border-2 border-green-200 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-green-800 text-lg">SHA系列（SHA-1/256/512）</h3>
        <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">安全哈希</span>
      </div>
      <p class="text-gray-600 mb-2">SHA是更安全的哈希算法家族。SHA-256生成64位十六进制字符串，目前被认为安全可靠，广泛用于数字签名、证书验证等。</p>
      <p class="text-sm text-gray-500"><strong>适用场景：</strong>密码存储、数字签名、区块链、文件校验</p>
    </div>
    
    <div class="p-5 border-2 border-purple-200 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-medium text-purple-800 text-lg">AES加密</h3>
        <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">对称加密</span>
      </div>
      <p class="text-gray-600 mb-2">AES（高级加密标准）是目前最广泛使用的对称加密算法。加密和解密使用相同的密钥，安全性高、速度快，适合大数据量加密。</p>
      <p class="text-sm text-gray-500"><strong>适用场景：</strong>文件加密、数据传输、敏感信息保护</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">加密 vs 编码 vs 哈希</h2>
  
  <div class="overflow-x-auto my-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left">特性</th>
          <th class="border border-gray-300 p-3 text-left">编码（Base64）</th>
          <th class="border border-gray-300 p-3 text-left">哈希（MD5/SHA）</th>
          <th class="border border-gray-300 p-3 text-left">加密（AES）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">可逆性</td>
          <td class="border border-gray-300 p-3 text-green-600">可逆</td>
          <td class="border border-gray-300 p-3 text-red-600">不可逆</td>
          <td class="border border-gray-300 p-3 text-green-600">可逆（需密钥）</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">安全性</td>
          <td class="border border-gray-300 p-3 text-red-600">无</td>
          <td class="border border-gray-300 p-3 text-yellow-600">高（单向）</td>
          <td class="border border-gray-300 p-3 text-green-600">高</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3 font-medium">密钥</td>
          <td class="border border-gray-300 p-3">不需要</td>
          <td class="border border-gray-300 p-3">不需要</td>
          <td class="border border-gray-300 p-3">需要</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-medium">用途</td>
          <td class="border border-gray-300 p-3">数据格式转换</td>
          <td class="border border-gray-300 p-3">完整性校验</td>
          <td class="border border-gray-300 p-3">数据保密</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">实际应用场景</h2>
  
  <div class="space-y-6 my-6">
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">场景一：密码安全存储</h3>
      <p>网站存储用户密码时，不应保存明文。正确的做法是使用SHA-256等哈希算法对密码进行哈希处理，并添加随机"盐值"。这样即使数据库泄露，攻击者也无法直接获得用户密码。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">场景二：文件完整性校验</h3>
      <p>下载重要文件后，可以通过计算文件的MD5或SHA-256哈希值，与官方提供的哈希值对比，确认文件在传输过程中未被篡改或损坏。</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 class="font-medium text-lg text-gray-800 mb-2">场景三：敏感信息传输</h3>
      <p>需要通过邮件或即时通讯工具发送敏感信息时，可以先用AES加密，将密文发送给对方，再通过安全渠道告知密钥，确保信息不被中间人截获。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">安全使用建议</h2>
  
  <div class="bg-yellow-50 p-5 rounded-lg my-6 border border-yellow-200">
    <h3 class="font-medium text-yellow-800 mb-3">⚠️ 重要安全提示：</h3>
    <ul class="space-y-2 text-yellow-700">
      <li>• <strong>密钥管理</strong>：加密密钥与加密数据分开存储，不要一起传输</li>
      <li>• <strong>算法选择</strong>：避免使用MD5和SHA-1处理敏感数据，选择SHA-256或更高版本</li>
      <li>• <strong>密码强度</strong>：使用AES加密时，选择足够复杂的密钥（16位以上）</li>
      <li>• <strong>HTTPS传输</strong>：网页端加密工具应在HTTPS环境下使用</li>
      <li>• <strong>本地处理</strong>：敏感数据优先选择本地处理的工具，避免上传云端</li>
    </ul>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">常见问题解答</h2>
  
  <div class="space-y-4 my-6">
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：MD5还能用于密码存储吗？</p>
      <p class="text-gray-600">答：不推荐。MD5已被证明存在碰撞漏洞，攻击者可以使用彩虹表快速破解。密码存储应使用SHA-256配合盐值，或专门的密码哈希算法如bcrypt。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：Base64能保护我的数据吗？</p>
      <p class="text-gray-600">答：不能。Base64只是编码，任何人都能解码。它仅用于数据格式转换，不提供任何安全保护。需要保护数据请使用真正的加密算法如AES。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：加密后的数据能破解吗？</p>
      <p class="text-gray-600">答：理论上，只要有足够的时间和计算资源，任何加密都可以被暴力破解。但使用现代加密算法（如AES-256）和足够长的密钥，破解在实际上是不可能的。</p>
    </div>
    
    <div class="border border-gray-200 rounded-lg p-4">
      <p class="font-medium mb-2">问：忘记了加密密钥怎么办？</p>
      <p class="text-gray-600">答：很遗憾，如果忘记了密钥，加密的数据将无法恢复。这是加密的安全性所在——没有密钥，连你自己也无法访问。因此务必妥善保管密钥。</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">数据安全从加密开始</h2>
  <p>在信息时代，数据就是资产。了解基本的加密知识，使用合适的加密工具，是每个人保护数字资产的基本技能。无论是个人隐私还是工作机密，都值得用加密来守护。</p>
  
  <div class="mt-6 p-5 bg-green-50 border border-green-100 rounded-lg">
    <p class="font-medium text-green-900 mb-2">✅ 记住这些要点：</p>
    <ul class="text-green-800 space-y-1">
      <li>• 区分编码、哈希和加密的不同用途</li>
      <li>• 敏感数据使用AES等强加密算法</li>
      <li>• 密码存储使用SHA-256+盐值</li>
      <li>• 妥善保管加密密钥，丢失无法恢复</li>
      <li>• 优先选择本地处理的加密工具</li>
    </ul>
  </div>
  
  <p class="mt-6 text-center text-gray-600">安全是一种习惯，从每一次加密开始。</p>
</div>
`;export{e as default};
