const t=`
<div class="mx-auto max-w-4xl px-4 py-6 text-gray-700">
  <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">这个页面能做什么</h2>
    <ul class="space-y-2 pl-5 text-sm leading-7 text-gray-600">
      <li>把一团 JSON 格式化成更容易阅读的结构。</li>
      <li>支持压缩、校验和缩进设置，方便接口调试和配置文件整理。</li>
      <li>显示基本统计信息，并支持一键复制、下载结果。</li>
    </ul>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">怎么用更顺手</h2>
    <ol class="space-y-2 pl-5 text-sm leading-7 text-gray-600 list-decimal">
      <li>先把原始 JSON 粘贴进输入框，第一步用“校验”确认是不是合法 JSON。</li>
      <li>排查问题时用格式化模式，方便看层级、数组和对象结构。</li>
      <li>需要嵌入请求参数、日志或配置时，再切到压缩模式。</li>
      <li>如果报错，优先检查多余逗号、单引号和注释。</li>
    </ol>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
    <div class="space-y-4 text-sm leading-7 text-gray-600">
      <div>
        <h3 class="font-semibold text-gray-900">为什么格式化失败？</h3>
        <p>最常见的是尾部多逗号、用了单引号、混进注释，或者复制时带了非法字符。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">压缩和格式化会改数据吗？</h3>
        <p>不会改变数据含义，主要是调整空格和换行，前提是原始 JSON 本身合法。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">适合处理多大的 JSON？</h3>
        <p>日常接口返回和配置文件没问题，但超大的日志或导出文件，建议分段处理会更稳。</p>
      </div>
    </div>
  </section>
</div>
`;export{t as default};
