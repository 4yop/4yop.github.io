const t=`
<div class="mx-auto max-w-4xl px-4 py-6 text-gray-700">
  <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">这个页面能做什么</h2>
    <ul class="space-y-2 pl-5 text-sm leading-7 text-gray-600">
      <li>把多个 PDF 合并成一个文件，并保持原有页面内容。</li>
      <li>支持调整文件顺序，也可以只取某个 PDF 的指定页范围。</li>
      <li>整个过程在浏览器中完成，适合整理扫描件、资料包和汇总文档。</li>
    </ul>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">建议这样操作</h2>
    <ol class="space-y-2 pl-5 text-sm leading-7 text-gray-600 list-decimal">
      <li>先按阅读顺序整理文件名，再上传，后面移动起来更省事。</li>
      <li>如果只需要部分内容，优先用页码范围截取，别把整本 PDF 都并进去。</li>
      <li>合并完成后快速抽查首页、目录页和最后一页，确认顺序没错。</li>
      <li>大文件较多时分批处理，会比一次性塞太多更稳。</li>
    </ol>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
    <div class="space-y-4 text-sm leading-7 text-gray-600">
      <div>
        <h3 class="font-semibold text-gray-900">合并后画质会下降吗？</h3>
        <p>通常不会。这个操作主要是把页面重新装进一个文件，不是重新截图压缩。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">能只取某几页再合并吗？</h3>
        <p>可以，页面里已经支持按文件设置页码范围，适合整理合同附件或扫描件片段。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">文件会上传吗？</h3>
        <p>当前页面在浏览器本地处理，更适合先整理敏感文档或内部资料。</p>
      </div>
    </div>
  </section>
</div>
`;export{t as default};
