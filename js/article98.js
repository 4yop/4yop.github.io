const t=`
<div class="mx-auto max-w-4xl px-4 pb-8 text-gray-700">
  <article class="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
    <section class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-gray-900">这个工具能做什么</h2>
      <p class="text-sm leading-7">
        这页适合把图片做压缩、减小体积和导出，方便上传网站、发消息、塞进表单或者做存储优化。
        如果你只是想先把图片从“太大传不上去”处理到“可以正常发出去”，这类本地压缩很省事。
      </p>
    </section>

    <section class="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">建议这样使用</h2>
      <ol class="space-y-3 pl-5 text-sm leading-7 text-gray-700 list-decimal">
        <li>先看用途：网页展示、表单上传、聊天发送，不同场景对体积和清晰度要求不一样。</li>
        <li>第一次压缩建议从中高质量开始，再逐步往下试，不要一开始就压得太狠。</li>
        <li>如果原图分辨率特别大，先缩尺寸再压缩，通常比只调质量更稳。</li>
        <li>批量处理时先抽样看几张结果，再决定是否整批导出。</li>
      </ol>
    </section>

    <section class="mb-8">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
      <div class="space-y-4 text-sm leading-7 text-gray-700">
        <p><strong>压缩后一定会糊吗？</strong> 会有取舍，但大多数日常上传场景，只要质量别压太低，肉眼差异通常不明显。</p>
        <p><strong>为什么有时 PNG 反而更大？</strong> PNG 更适合文字、图标和透明背景，照片类图片通常 JPG 或 WebP 更省体积。</p>
        <p><strong>图片会上传到服务器吗？</strong> 当前页面在浏览器本地处理，适合先做日常上传和存储优化。</p>
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-xl font-semibold text-gray-900">继续看</h2>
      <p class="text-sm leading-7">
        如果你还拿不准什么时候该压缩、什么时候该换格式，可以继续看
        <a class="text-blue-600 hover:text-blue-700" href="/article/image-compress-format-choice/">《图片压缩和格式转换怎么选》</a>。
      </p>
    </section>
  </article>
</div>
`;export{t as default};
