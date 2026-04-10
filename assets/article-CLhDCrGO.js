const e=`
<div class="mx-auto max-w-4xl px-4 py-6 text-gray-700">
  <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">这个页面能做什么</h2>
    <ul class="space-y-2 pl-5 text-sm leading-7 text-gray-600">
      <li>批量上传 JPG、PNG、WebP、GIF 图片，统一压缩。</li>
      <li>根据需求调整压缩强度，并选择导出格式。</li>
      <li>处理完成后可单独下载，也可以打包成 ZIP。</li>
    </ul>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">建议这样使用</h2>
    <ol class="space-y-2 pl-5 text-sm leading-7 text-gray-600 list-decimal">
      <li>先按用途决定目标格式，照片优先考虑 JPG 或 WebP，文字截图再考虑 PNG。</li>
      <li>第一次压缩建议从中高质量开始，再逐步往下试，不要一上来就压得太狠。</li>
      <li>如果图片本身分辨率特别大，先缩尺寸再压缩，效果通常更稳。</li>
      <li>批量处理时先抽样看 2 到 3 张结果，再决定是否一键打包下载。</li>
    </ol>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
    <div class="space-y-4 text-sm leading-7 text-gray-600">
      <div>
        <h3 class="font-semibold text-gray-900">压缩后画质会掉吗？</h3>
        <p>会有取舍，但多数场景下把质量控制在合理区间，肉眼不会看到明显差别。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">为什么 PNG 有时反而更大？</h3>
        <p>PNG 更适合线条、文字和透明背景，不一定适合照片。照片类图片通常用 JPG 或 WebP 更省体积。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">图片会上传到服务器吗？</h3>
        <p>当前页面在浏览器本地处理，更适合先处理日常上传、发送和存储优化场景。</p>
      </div>
    </div>
  </section>

  <section class="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
    <h2 class="mb-2 text-xl font-semibold text-gray-900">不知道该选哪个格式？</h2>
    <p class="text-sm leading-7 text-gray-700">
      如果你分不清“减小体积”和“换格式”到底该先做哪一步，可以继续读
      <a class="text-blue-600 hover:text-blue-700" href="/article/image-compress-format-choice/">图片压缩和格式转换怎么选</a>，
      按照片、截图、透明图和网页展示这几类场景来判断。
    </p>
  </section>
</div>
`;export{e as default};
