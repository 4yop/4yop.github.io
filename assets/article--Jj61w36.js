const t=`
<div class="mx-auto max-w-4xl px-4 pb-8 text-gray-700">
  <article class="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
    <section class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-gray-900">这个工具能做什么</h2>
      <p class="text-sm leading-7">
        这页适合把 <code>.docx</code> 文档快速转成 PDF，页面里可以选择是否尽量保留基础排版，
        也可以在大文件场景下启用 Web Worker 来减少卡顿。转换过程在浏览器里完成，不需要把文件传到服务器。
      </p>
    </section>

    <section class="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">建议这样用</h2>
      <ol class="space-y-3 pl-5 text-sm leading-7 text-gray-700 list-decimal">
        <li>先上传 <code>.docx</code> 文件，确认文件名和体积正常。</li>
        <li>如果正文、表格和常规图片为主，保留“基础排版”通常更稳。</li>
        <li>文件较大时开启 Web Worker，转换时页面会更顺一些。</li>
        <li>下载 PDF 后快速核一遍字体、分页、表格和图片位置。</li>
      </ol>
    </section>

    <section class="mb-8">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
      <div class="space-y-4 text-sm leading-7 text-gray-700">
        <p><strong>为什么格式和 Word 不完全一样？</strong> 复杂字体、浮动图片、表格和分页规则，都会影响转换后的外观。</p>
        <p><strong>支持哪些文件？</strong> 当前页面只接收 <code>.docx</code>，并限制在 50MB 以内。</p>
        <p><strong>适合哪些文档？</strong> 适合简历、说明文档、普通表格文档这类轻量办公内容；非常复杂的模板仍建议手动复核。</p>
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-xl font-semibold text-gray-900">继续看</h2>
      <p class="text-sm leading-7">
        如果你遇到的是字体替换、表格换页、图片偏移这类问题，可以继续看
        <a class="text-blue-600 hover:text-blue-700" href="/article/word-to-pdf-layout-issues/">《Word 转 PDF 常见排版问题怎么处理》</a>，
        里面把排查顺序和容易踩的坑整理好了。
      </p>
    </section>
  </article>
</div>
`;export{t as default};
