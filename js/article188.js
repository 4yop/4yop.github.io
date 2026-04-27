const t=`
<div class="mx-auto max-w-4xl px-4 pb-8 text-gray-700">
  <article class="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
    <section class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-gray-900">这个工具能做什么</h2>
      <p class="text-sm leading-7">
        这页适合把一段 JSON 做格式化、压缩和校验，也支持设置缩进、查看基础结构统计，并且可以直接复制或下载结果。
        对接口调试、配置整理和日志排查这类场景很实用。
      </p>
    </section>

    <section class="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">建议这样使用</h2>
      <ol class="space-y-3 pl-5 text-sm leading-7 text-gray-700 list-decimal">
        <li>先把原始 JSON 粘贴进输入框，第一步优先用“验证”看语法是否正确。</li>
        <li>排查结构时用“格式化”，这样对象、数组和缩进层级更容易看清。</li>
        <li>准备嵌入请求参数、日志或配置文件时，再切到“压缩”模式。</li>
        <li>如果报错，优先检查尾逗号、单双引号和非法注释。</li>
      </ol>
    </section>

    <section class="mb-8">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
      <div class="space-y-4 text-sm leading-7 text-gray-700">
        <p><strong>格式化和验证有什么区别？</strong> 验证只判断 JSON 语法是否正确；格式化会在语法正确的前提下，把结构排版成更容易阅读的样子。</p>
        <p><strong>压缩会不会改数据？</strong> 不会，压缩只是去掉多余空格和换行，不会改变字段含义。</p>
        <p><strong>适合处理超大的 JSON 吗？</strong> 日常接口返回和配置文件没问题，但特别大的导出文件建议分段处理更稳。</p>
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-xl font-semibold text-gray-900">继续看</h2>
      <p class="text-sm leading-7">
        如果你分不清什么时候该“格式化”，什么时候只需要“校验”，可以继续看
        <a class="text-blue-600 hover:text-blue-700" href="/article/json-format-vs-validate/">《JSON 格式化和 JSON 校验有什么区别》</a>。
      </p>
    </section>
  </article>
</div>
`;export{t as default};
