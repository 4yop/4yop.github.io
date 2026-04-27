const s=`
<div class="max-w-4xl mx-auto px-4 sm:px-6 py-8 font-sans text-gray-800 bg-white">
  <h1 class="text-2xl sm:text-3xl font-bold mb-6 text-center leading-tight">编码修复工具：一键解决文本乱码问题，让文字回归本真</h1>

  <div class="mb-8">
    <p class="mb-4 text-base leading-relaxed">你是否遇到过这样的困扰：从网页复制下来的文字变成了一堆看不懂的符号，打开某个文件满屏都是"浣犲埌"之类的奇怪字符，或者从数据库导出的数据完全无法阅读？这些都是典型的编码问题导致的乱码现象。</p>
    <p class="mb-4 text-base leading-relaxed">别担心，编码修复工具就是专门为解决这类问题而设计的。它能够自动检测文本的原始编码格式，并将其正确转换为目标编码，让你的文字恢复本来面目。整个过程在浏览器中完成，无需上传任何数据到服务器，既快捷又安全。</p>
  </div>

  <div class="mb-10">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">什么是文本编码？</h2>
    <p class="mb-4 text-base leading-relaxed">文本编码是将字符转换为计算机可以存储和传输的字节序列的过程。不同的编码标准使用不同的方式来表示字符，常见的编码格式包括：</p>
    <ul class="list-disc pl-5 mb-4 space-y-2 text-base leading-relaxed">
      <li><span class="font-medium">UTF-8：</span>国际通用编码，支持所有Unicode字符，是网页和现代应用的标准编码</li>
      <li><span class="font-medium">GBK：</span>中文编码标准，支持简体中文、繁体中文和日韩字符</li>
      <li><span class="font-medium">GB2312：</span>早期中文编码标准，主要支持简体中文</li>
      <li><span class="font-medium">ISO-8859-1：</span>拉丁字母编码，主要用于西欧语言</li>
      <li><span class="font-medium">Big5：</span>繁体中文编码标准，主要在台湾、香港地区使用</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">为什么会出现乱码？</h2>
    <p class="mb-4 text-base leading-relaxed">乱码通常由以下原因造成：</p>
    <ul class="list-disc pl-5 mb-4 space-y-2 text-base leading-relaxed">
      <li><span class="font-medium">编码不一致：</span>文件保存时使用的编码格式与打开时使用的编码格式不一致，这是最常见的原因</li>
      <li><span class="font-medium">缺少编码声明：</span>网页或应用没有正确声明字符编码，导致浏览器猜测错误的编码</li>
      <li><span class="font-medium">传输过程中丢失：</span>数据传输过程中编码信息丢失或被修改</li>
      <li><span class="font-medium">系统差异：</span>不同操作系统之间的编码标准默认值不同</li>
      <li><span class="font-medium">多重编码：</span>文本经过多次编码转换，导致累积性损坏</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">如何使用编码修复工具？</h2>
    <div class="space-y-4 text-base leading-relaxed">
      <div class="p-4 bg-gray-50 rounded-lg">
        <p class="font-medium mb-2">第一步：输入文本</p>
        <p>在输入框中粘贴或输入出现乱码或编码问题的文本</p>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <p class="font-medium mb-2">第二步：选择编码选项</p>
        <p>可以选择源编码（或使用自动检测），选择目标编码（推荐使用UTF-8），并根据需要勾选"移除BOM标记"或"修复损坏字符"</p>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <p class="font-medium mb-2">第三步：执行修复</p>
        <p>点击"执行修复"按钮，工具会自动分析并转换编码</p>
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <p class="font-medium mb-2">第四步：获取结果</p>
        <p>查看修复结果，可以复制或下载为文本文件</p>
      </div>
    </div>
  </div>

  <div class="mb-10">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">常见使用场景</h2>
    <ul class="list-disc pl-5 mb-4 space-y-2 text-base leading-relaxed">
      <li><span class="font-medium">网页乱码修复：</span>修复从网页复制或下载时出现的乱码问题</li>
      <li><span class="font-medium">文件编码转换：</span>将GBK编码的文件转换为UTF-8，或反之</li>
      <li><span class="font-medium">数据库数据修复：</span>修复数据库中因编码不一致导致的乱码数据</li>
      <li><span class="font-medium">API数据处理：</span>处理不同编码格式的API响应数据</li>
      <li><span class="font-medium">日志文件分析：</span>修复日志文件中因编码问题导致的乱码</li>
      <li><span class="font-medium">邮件内容修复：</span>修复邮件中出现的编码错误</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">常见问题解答</h2>
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-medium mb-2 text-gray-700">UTF-8 和 GBK 有什么区别？</h3>
        <p class="text-base leading-relaxed">UTF-8是国际通用编码，支持所有语言的字符，是互联网和现代软件的标准编码。每个字符可能占用1-4个字节。GBK是中文编码标准，主要支持中文字符，每个中文字符占用2个字节。建议：现代应用应优先使用UTF-8编码，以确保跨平台和跨语言的兼容性。</p>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-2 text-gray-700">什么是 BOM 标记？需要移除吗？</h3>
        <p class="text-base leading-relaxed">BOM（Byte Order Mark）是文件开头的特殊标记，用于标识文件的编码格式。某些编辑器会在UTF-8文件开头添加BOM标记（EF BB BF）。如果文件用于网页、接口或脚本，BOM更容易造成显示异常或解析错误，建议移除。</p>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-2 text-gray-700">如何判断文本是什么编码？</h3>
        <p class="text-base leading-relaxed">可以通过以下方式判断：查看文件头部的BOM标记（UTF-8 BOM为EF BB BF）；观察乱码模式（如"浣犲埌"通常是UTF-8被当GBK读取）；使用本工具的自动检测功能进行智能识别。工具会尝试多种编码组合，并自动选择最可能正确的修复结果。</p>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-2 text-gray-700">修复后还是不对怎么办？</h3>
        <p class="text-base leading-relaxed">如果源文本已经被错误编码多次，工具只能尽量还原最常见的情况。遇到多重乱码时，建议先保留原文，再分别尝试不同的源编码和目标编码组合进行比对。也可以开启"修复损坏字符"选项来进一步优化结果。</p>
      </div>
    </div>
  </div>

  <div class="mt-12 p-6 border border-gray-300 rounded-lg bg-gray-50">
    <h2 class="text-xl font-semibold mb-3 text-gray-800">小结</h2>
    <p class="mb-3 text-base leading-relaxed">编码修复工具是一个实用的文本处理助手，它能帮你快速诊断和修复各种编码问题。无论是网页乱码、文件编码不匹配还是数据库导出数据的显示异常，都可以通过这个工具得到有效解决。</p>
    <p class="text-base leading-relaxed">最重要的是，所有处理都在你的浏览器本地完成，不需要将任何敏感信息上传到远程服务器，确保了数据的安全性和隐私保护。下次遇到乱码问题，不妨试试这个工具，也许能省去很多手动排查的时间。</p>
  </div>
</div>
`;export{s as default};
