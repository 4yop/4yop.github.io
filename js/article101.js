const s=`
<div class="mx-auto max-w-4xl px-4 pb-8 text-gray-700">
  <article class="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
    <section class="mb-8">
      <h2 class="mb-4 text-2xl font-semibold text-gray-900">这个工具能做什么</h2>
      <p class="text-sm leading-7">
        这个工具可以批量修改图片的DPI（每英寸点数）分辨率。DPI决定了图片打印时的清晰度和尺寸，
        常用于打印、出版、证件照等场景。所有处理在浏览器本地完成，图片不会上传到服务器。
      </p>
    </section>

    <section class="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">建议这样使用</h2>
      <ol class="space-y-3 pl-5 text-sm leading-7 text-gray-700 list-decimal">
        <li>网页显示用途建议设置72或96 DPI，这是屏幕标准分辨率。</li>
        <li>普通打印建议150 DPI，高质量打印和出版建议300 DPI。</li>
        <li>注意：只有JPG/JPEG格式支持写入DPI数据，其他格式会自动转换为JPG。</li>
        <li>批量处理时先确认目标DPI值，处理完成后可打包下载所有图片。</li>
      </ol>
    </section>

    <section class="mb-8">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
      <div class="space-y-4 text-sm leading-7 text-gray-700">
        <p><strong>修改DPI会改变图片质量吗？</strong> 不会。DPI只是元数据，修改DPI不会重新采样图片像素，图片的实际分辨率和画质不变。</p>
        <p><strong>为什么PNG图片会变成JPG？</strong> PNG格式不支持DPI元数据写入，只有JPG/JPEG格式的JFIF头可以存储DPI信息，所以非JPG图片会自动转换。</p>
        <p><strong>图片会上传到服务器吗？</strong> 不会。所有处理都在浏览器本地完成，您的图片数据不会离开您的设备。</p>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">什么是DPI</h2>
      <div class="space-y-3 text-sm leading-7 text-gray-700">
        <p>DPI（Dots Per Inch，每英寸点数）是衡量图像在每英寸长度上显示或打印的点数。数值越高，图像越精细。</p>
        <p>常见DPI参考值：</p>
        <ul class="space-y-1 pl-5 list-disc">
          <li>72 DPI - 网页显示标准</li>
          <li>96 DPI - Windows屏幕标准</li>
          <li>150 DPI - 普通打印质量</li>
          <li>300 DPI - 高质量打印/出版标准</li>
        </ul>
      </div>
    </section>
  </article>
</div>
`;export{s as default};
