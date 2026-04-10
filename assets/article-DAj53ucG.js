const e=`
<div class="mx-auto max-w-4xl px-4 py-6 text-gray-700">
  <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">这个页面能做什么</h2>
    <ul class="space-y-2 pl-5 text-sm leading-7 text-gray-600">
      <li>把 JWT 拆成 Header、Payload、Signature 三段展示。</li>
      <li>直接查看 payload 里的用户信息、权限字段和过期时间。</li>
      <li>快速复制解码后的内容，方便排查登录或接口鉴权问题。</li>
    </ul>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-xl font-semibold text-gray-900">怎么用更有效</h2>
    <ol class="space-y-2 pl-5 text-sm leading-7 text-gray-600 list-decimal">
      <li>把完整 token 粘贴进输入框，先确认格式能正常拆成三段。</li>
      <li>重点看 payload 里的 <code>exp</code>、<code>iat</code>、<code>nbf</code>。</li>
      <li>如果接口提示过期，先比对当前时间，再判断是不是时钟偏差或 refresh 失败。</li>
      <li>需要和后端沟通时，直接复制解码内容，不要手动截图抄字段。</li>
    </ol>
  </section>

  <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-gray-900">常见问题</h2>
    <div class="space-y-4 text-sm leading-7 text-gray-600">
      <div>
        <h3 class="font-semibold text-gray-900">这个工具会校验签名吗？</h3>
        <p>不会。它主要负责解码和查看内容，帮助你快速判断时间字段和 payload 是否合理。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">解码成功就代表 token 可用吗？</h3>
        <p>不代表。能解码说明格式像 JWT，但签名是否有效、密钥是否匹配，还要看服务端校验结果。</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">粘贴进去会上传到服务器吗？</h3>
        <p>当前页面在浏览器本地做解析，更适合先做第一轮排查。</p>
      </div>
    </div>
  </section>

  <section class="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
    <h2 class="mb-2 text-xl font-semibold text-gray-900">继续看排查思路</h2>
    <p class="text-sm leading-7 text-gray-700">
      如果你现在遇到的是“token 失效”“登录突然掉线”“接口 401”，可以继续读
      <a class="text-blue-600 hover:text-blue-700" href="/article/jwt-token-expiry/">JWT Token 过期怎么排查</a>，
      把过期、时间偏差、refresh 失败和旧缓存这些问题分开看。
    </p>
  </section>
</div>
`;export{e as default};
