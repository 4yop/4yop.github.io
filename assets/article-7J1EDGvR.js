const t=`
<div class="mx-auto max-w-4xl px-4 py-6 text-gray-700">
  <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">这个页面能做什么</h2>
    <ul class="space-y-2 pl-5 text-sm leading-7 text-gray-600">
      <li>批量识别图片中的文字，并支持中文、英文、日文、韩文等语言组合。</li>
      <li>适合处理截图、扫描件、拍照文档和简单票据内容。</li>
      <li>识别结果可以直接复制，也可以导出为 Excel 继续整理。</li>
    </ul>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">建议这样使用</h2>
    <ol class="space-y-2 pl-5 text-sm leading-7 text-gray-600 list-decimal">
      <li>先选对语言，再上传图片，混合语言时优先选组合模式。</li>
      <li>图片尽量裁正、提高对比度，识别结果通常会更稳。</li>
      <li>批量处理时先看前几张结果，再决定是否整批导出。</li>
      <li>如果某张图误识别明显，把它单独重跑会比整批重复更省时间。</li>
    </ol>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
    <div class="space-y-4 text-sm leading-7 text-gray-600">
      <div>
        <h3 class="font-semibold text-gray-900">手写字能识别吗？</h3>
        <p>可以尝试，但规范印刷体和清晰截图通常更准，潦草手写体会更容易出错。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">为什么同一批图效果差别很大？</h3>
        <p>最常见的原因是清晰度、倾斜角度、背景干扰和语言选择不一致。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">识别结果能继续整理吗？</h3>
        <p>可以，页面已经支持复制文本和导出 Excel，适合继续做表格清洗或人工复核。</p>
      </div>
    </div>
  </section>

  <section class="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
    <h2 class="mb-2 text-xl font-semibold text-gray-900">本地 OCR 和在线 OCR 差在哪</h2>
    <p class="text-sm leading-7 text-gray-700">
      如果你正在纠结“图片要不要上传到外部平台”“本地识别够不够用”，可以继续读
      <a class="text-blue-600 hover:text-blue-700" href="/article/local-ocr-vs-online-ocr/">本地 OCR 和在线 OCR 怎么选</a>，
      把隐私、准确率和复杂版面这些因素拆开判断。
    </p>
  </section>
</div>
`;export{t as default};
