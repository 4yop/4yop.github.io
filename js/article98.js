const s=`
<article class="font-sans text-gray-800 max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
  <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">还在手写建表语句？这个工具让你像搭积木一样设计数据库</h2>

  <div class="text-lg text-gray-600 mb-8 leading-relaxed">
    写过 MySQL 建表语句的人都知道，字段类型选错一个字母、少写个 NOT NULL、索引名字起得不够规范……这些小问题在上线后就是大坑。与其反复翻文档查语法，不如用工具一步到位。
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r">
    <p class="font-medium text-gray-800 mb-1">这是一个对标成熟产品的专业级 MySQL 建表语句生成器——不是那种只有三个字段的玩具。</p>
    <p class="text-gray-700">支持 SQL 解析导入、外键约束管理、语法高亮预览、9 种常用字段模板，导出 SQL/JSON/Markdown 多种格式。你想到的它都有，没想到的它也准备了。</p>
  </div>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">核心能力一览</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 class="font-bold text-base mb-2 text-blue-700">SQL DDL 智能解析导入</h3>
        <p class="text-gray-600 text-sm leading-relaxed">直接粘贴已有的 CREATE TABLE 语句，工具自动解析出所有字段、类型、长度、属性、主键、索引、外键和表选项，完整还原到编辑器中。再也不用手动一个个抄了。</p>
      </div>
      <div class="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 class="font-bold text-base mb-2 text-blue-700">外键约束管理</h3>
        <p class="text-gray-600 text-sm leading-relaxed">支持添加外键约束，配置关联表、关联字段、删除时和更新时的级联规则（CASCADE / SET NULL / RESTRICT / NO ACTION），生成标准的 FOREIGN KEY 子句。</p>
      </div>
      <div class="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 class="font-bold text-base mb-2 text-blue-700">SQL 语法高亮</h3>
        <p class="text-gray-600 text-sm leading-relaxed">生成的 SQL 不再是一坨黑乎乎的文字——关键字蓝色加粗、字符串绿色、数字橙色、标识符灰色，一目了然。复制出去也专业体面。</p>
      </div>
      <div class="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 class="font-bold text-base mb-2 text-blue-700">9 种常用字段模板</h3>
        <p class="text-gray-600 text-sm leading-relaxed">主键 ID（BIGINT 自增）、UUID 主键、创建时间、更新时间、软删除标记、状态枚举、排序权重、备注信息、乐观锁版本号——点一下就能加上，不用每次重复配置。</p>
      </div>
      <div class="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 class="font-bold text-base mb-2 text-blue-700">ENUM/SET 枚举值编辑器</h3>
        <p class="text-gray-600 text-sm leading-relaxed">当字段类型选择 ENUM 或 SET 时，自动弹出枚举值编辑器，每行输入一个选项值，支持单引号包裹，生成规范的 ENUM('a','b','c') 定义。</p>
      </div>
      <div class="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 class="font-bold text-base mb-2 text-blue-700">多格式导出</h3>
        <p class="text-gray-600 text-sm leading-relaxed">除了 SQL 文件下载和剪贴板复制，还支持导出为 JSON 配置文件（方便团队共享）和 Markdown 技术文档（含字段说明表格、索引列表、外键约束）。</p>
      </div>
    </div>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">从零到一张完整表，只需要三步</h2>
    <div class="space-y-6">
      <div class="flex gap-4 items-start">
        <span class="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</span>
        <div>
          <h3 class="font-bold text-lg mb-1 text-gray-800">填基本信息或直接导入 SQL</h3>
          <p class="text-gray-600">左侧面板填写表名、注释、引擎、字符集等。如果已有 SQL，直接粘贴到右侧「导入 SQL」区域，一键解析所有字段和约束。</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <span class="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</span>
        <div>
          <h3 class="font-bold text-lg mb-1 text-gray-800">用模板快速搭建 + 细节调整</h3>
          <p class="text-gray-600">点「主键ID」「状态枚举」「创建时间」等模板一键添加常用字段，再逐个微调类型、长度、默认值、注释。支持拖拽排序、复制字段。</p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <span class="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</span>
        <div>
          <h3 class="font-bold text-lg mb-1 text-gray-800">预览确认后导出使用</h3>
          <p class="text-gray-600">右侧实时显示带语法高亮的 CREATE TABLE 语句，确认无误后点击「复制」或「下载」。还能导出 Markdown 文档给团队做技术评审。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">支持的 MySQL 数据类型</h2>
    <div class="grid md:grid-cols-3 gap-4 text-sm">
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold text-gray-800 mb-2">整数</h4>
        <p class="text-gray-600">TINYINT / SMALLINT / MEDIUMINT / INT / BIGINT（均支持 UNSIGNED / ZEROFILL）</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold text-gray-800 mb-2">小数</h4>
        <p class="text-gray-600">FLOAT / DOUBLE / DECIMAL（可设置精度和小数位数）</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold text-gray-800 mb-2">字符串</h4>
        <p class="text-gray-600">VARCHAR / CHAR / TEXT / TINYTEXT / MEDIUMTEXT / LONGTEXT / ENUM / SET</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold text-gray-800 mb-2">日期时间</h4>
        <p class="text-gray-600">DATE / TIME / DATETIME / TIMESTAMP / YEAR</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold text-gray-800 mb-2">二进制</h4>
        <p class="text-gray-600">BINARY / VARBINARY / TINYBLOB / BLOB / MEDIUMBLOB / LONGBLOB</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold text-gray-800 mb-2">特殊</h4>
        <p class="text-gray-600">BOOLEAN / JSON</p>
      </div>
    </div>
  </section>

  <section class="border-t border-gray-200 pt-8">
    <h2 class="text-2xl font-semibold mb-4">适合谁用？</h2>
    <div class="flex flex-wrap gap-3">
      <span class="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">后端开发工程师</span>
      <span class="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">全栈开发者</span>
      <span class="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">DBA 数据库管理员</span>
      <span class="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">技术文档编写者</span>
      <span class="px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">学生 / 初学者</span>
    </div>
    <p class="mt-5 text-gray-600 leading-relaxed">不管你是要快速搭建新表结构、从旧系统迁移表定义、还是要输出规范的技术文档，这个工具都能帮你省下大量查语法、调格式的时间。专注业务逻辑，把脏活累活交给工具。</p>
  </section>
</article>
`;export{s as default};
