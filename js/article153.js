const t=`
<div class="mx-auto max-w-4xl px-4 pb-8 text-gray-700">
  <article class="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
    <section class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-gray-900">PDF加密工具使用指南</h2>
      <p class="mb-4 text-gray-600 leading-relaxed">
        PDF加密工具用于为单个PDF文件添加打开密码和所有者密码，全部处理都在浏览器本地完成，适合对合同、发票、方案、报告和共享资料进行下载前保护。
      </p>
    </section>

    <section class="mb-8">
      <h3 class="mb-3 text-xl font-semibold text-gray-900">核心功能</h3>
      <ul class="list-disc space-y-2 pl-6 text-gray-600">
        <li>支持上传单个PDF文件并本地执行加密</li>
        <li>支持设置用户密码，用于控制文件打开访问</li>
        <li>支持设置所有者密码，留空时自动与用户密码保持一致</li>
        <li>默认使用AES-256加密后导出新的PDF文件</li>
        <li>支持一键下载加密结果，不上传原始文件和密码</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="mb-3 text-xl font-semibold text-gray-900">使用步骤</h3>
      <ol class="list-decimal space-y-2 pl-6 text-gray-600">
        <li><strong>选择文件</strong>：在工具区域选择或拖拽一个PDF文件</li>
        <li><strong>输入用户密码</strong>：填写后接收方打开PDF时需要输入该密码（可选）</li>
        <li><strong>补充所有者密码</strong>：按需填写，用于移除加密或管理权限限制（可选）</li>
        <li><strong>配置文档权限</strong>：勾选或取消需要的权限选项</li>
        <li><strong>开始加密</strong>：点击"开始加密"按钮，等待浏览器本地完成处理</li>
        <li><strong>下载结果</strong>：切换到结果区域下载新的加密PDF文件</li>
      </ol>
    </section>

    <section class="mb-8">
      <h3 class="mb-3 text-xl font-semibold text-gray-900">密码说明</h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-left text-sm">
          <thead>
            <tr class="bg-gray-50">
              <th class="border border-gray-200 px-4 py-2 font-semibold text-gray-900">密码类型</th>
              <th class="border border-gray-200 px-4 py-2 font-semibold text-gray-900">用途</th>
              <th class="border border-gray-200 px-4 py-2 font-semibold text-gray-900">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-200 px-4 py-2">用户密码</td>
              <td class="border border-gray-200 px-4 py-2">打开PDF</td>
              <td class="border border-gray-200 px-4 py-2">接收方在查看文件时需要输入</td>
            </tr>
            <tr>
              <td class="border border-gray-200 px-4 py-2">所有者密码</td>
              <td class="border border-gray-200 px-4 py-2">文档管理</td>
              <td class="border border-gray-200 px-4 py-2">用于文档管理和权限控制，通常由文件提供者保留</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mt-3 text-sm text-gray-500">如果不单独设置所有者密码，工具会默认复用用户密码。若要启用权限限制，需设置与用户密码不同的所有者密码。</p>
    </section>

    <section class="mb-8">
      <h3 class="mb-3 text-xl font-semibold text-gray-900">文档权限说明</h3>
      <ul class="list-disc space-y-2 pl-6 text-gray-600">
        <li><strong>允许打印</strong>：控制是否允许打印文档内容</li>
        <li><strong>允许修改内容</strong>：控制是否允许修改文档内容</li>
        <li><strong>允许复制文本和图片</strong>：控制是否允许从文档复制文本和图片</li>
        <li><strong>允许批注</strong>：控制是否允许添加批注和注释</li>
        <li><strong>允许填写表单</strong>：控制是否允许填写表单字段</li>
        <li><strong>允许辅助功能读取</strong>：控制是否允许辅助功能读取文档内容</li>
        <li><strong>允许页面组装</strong>：控制是否允许插入、删除或旋转页面</li>
      </ul>
      <p class="mt-3 rounded bg-yellow-50 p-3 text-sm text-yellow-800">注意：只有当所有者密码与用户密码不同时，上述权限限制才会写入PDF文件。</p>
    </section>

    <section class="mb-8">
      <h3 class="mb-3 text-xl font-semibold text-gray-900">适用场景</h3>
      <ul class="list-disc space-y-2 pl-6 text-gray-600">
        <li>合同、报价单和投标材料发送前加密</li>
        <li>发票、报销文件和财务资料下载前保护</li>
        <li>报告、方案、客户资料对外共享前加密</li>
        <li>内部文档归档或跨部门传输时增加访问门槛</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="mb-3 text-xl font-semibold text-gray-900">隐私安全</h3>
      <p class="text-gray-600 leading-relaxed">
        当前工具在浏览器本地读取文件、执行加密并导出结果，不会主动上传PDF内容和密码到服务器。
      </p>
    </section>

    <section>
      <h3 class="mb-3 text-xl font-semibold text-gray-900">加密算法</h3>
      <p class="text-gray-600 leading-relaxed">
        本工具默认使用AES-256算法进行PDF加密，这是目前业界公认的安全加密标准之一。
      </p>
    </section>
  </article>
</div>
`;export{t as default};
