const t=`
<article class="max-w-3xl mx-auto px-4 md:px-6 py-8 font-sans text-gray-800">
  <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-6 text-gray-900">想知道一个IP地址在哪？这个免费工具能告诉你很多</h1>

  <p class="text-lg text-gray-700 mb-6">
    你可能经常听到“IP地址”这个词，尤其是在上网遇到问题的时候。它就像网络世界的“门牌号”，每一台上网的设备都有一个。你有没有好奇过，通过这个“门牌号”，能了解到哪些信息呢？
  </p>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-5 my-7 rounded-r">
    <h2 class="text-xl font-semibold mb-2 text-gray-800">这个小工具能帮你：</h2>
    <ul class="list-disc pl-5 space-y-1.5 text-gray-700">
      <li>一键查询自己或他人的网络IP地址。</li>
      <li>知道这个地址对应在哪个国家、哪个城市。</li>
      <li>了解当地的时区、货币和语言。</li>
      <li>快速测试一下自己到百度、GitHub的网络连接速度。</li>
    </ul>
  </div>

  <h2 class="text-2xl font-bold mt-10 mb-4 pt-2 border-t border-gray-200 text-gray-900">查IP，不仅仅是看个地址</h2>

  <p class="mb-4">
    当你输入一个IP地址进行查询后，得到的远不止“它在某地”这么简单。结果会像一张详细的信息卡片，让你对这个地址背后的网络世界有更清晰的认识。
  </p>

  <p class="mb-4">
    首先，当然是它的<strong>地理位置</strong>。你能看到它属于哪个国家、哪个省份甚至哪个城市。如果这个地址在海外，你还能顺便知道那个国家的首都、人口和面积，算是一个小小的地理知识补充。
  </p>

  <p class="mb-4">
    其次，是与生活相关的<strong>实用信息</strong>。比如当地的<strong>时区</strong>和<strong>时间偏移</strong>，这能帮你理解为什么你和海外朋友有时差；当地的<strong>官方货币和语言</strong>是什么，如果你要访问那里的网站或服务，这些信息或许有用。
  </p>

  <p class="mb-4">
    最后，是<strong>网络本身的信息</strong>。比如这个IP地址属于哪家<strong>网络运营商或组织</strong>。有时候网络慢，可能就是这段网络线路的“管理人”不同导致的。
  </p>

  <h2 class="text-2xl font-bold mt-10 mb-4 pt-2 border-t border-gray-200 text-gray-900">随手测测你的网速快不快</h2>

  <p class="mb-4">
    除了查地址信息，这个工具还有一个很实用的“网络诊断”功能。它能帮你快速测试当前网络连接到两个常用网站的延迟。
  </p>

  <p class="mb-4">
    <strong>延迟</strong>，你可以简单理解为数据从你电脑跑到目标网站再回来的时间，单位是毫秒（ms）。这个数字<strong>越小越好</strong>。通常，看视频、打游戏的时候，延迟小会更流畅。
  </p>

  <p class="mb-4">
    测试结果会用颜色清晰地标示出来：<span class="text-green-600 font-medium">绿色</span>代表速度很快，<span class="text-orange-500 font-medium">橙色</span>代表速度一般，<span class="text-red-600 font-medium">红色</span>则代表可能比较慢或连接不畅。点一下“开始测试”，几秒钟就能看到结果。
  </p>

  <h2 class="text-2xl font-bold mt-10 mb-4 pt-2 border-t border-gray-200 text-gray-900">常见问题与解答</h2>

  <div class="space-y-6">
    <div>
      <h3 class="text-xl font-semibold mb-2 text-gray-800">1. 我为什么要查IP地址？</h3>
      <p class="text-gray-700">
        有几个常见场景：比如你登录某个网站，发现提示“新设备登录，地址在XX”，你想确认这个地址对不对；或者你访问一个外国网站很慢，想看看它服务器大概在哪；又或者只是单纯对某个网络来源感到好奇。
      </p>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-2 text-gray-800">2. 查到的地址准确吗？能精确定位到我家吗？</h3>
      <p class="text-gray-700">
        一般来说，IP地址定位到城市级别是比较常见的，大多数公开查询服务提供的也是这个级别的精度。<strong>它通常无法直接精确定位到具体的街道、门牌号或个人家庭住址</strong>。这主要是由IP地址分配机制决定的，也涉及个人隐私保护。
      </p>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-2 text-gray-800">3. 查询会泄露我的隐私吗？</h3>
      <p class="text-gray-700">
        使用这个工具时，如果你查询的是自己的IP，那么这些信息（大致地理位置、网络运营商等）本身就可能被你所访问的网站获取。这个工具只是将这些信息更清晰地展示给你看。它不会记录和存储你的个人查询行为。
      </p>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-2 text-gray-800">4. 测试延迟时，为什么两个网站结果不同？</h3>
      <p class="text-gray-700">
        这非常正常。百度服务器主要在国内，而GitHub服务器主要在海外。连接到国内服务器的延迟自然会更低。这个对比能帮你判断，是你的整体网络有问题，还是仅仅访问国外网站比较慢。
      </p>
    </div>
  </div>

  <div class="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
    <h2 class="text-2xl font-bold mb-4 text-gray-900">总结一下</h2>
    <p class="mb-3 text-gray-700">
      这个网络信息查询工具，就像一个简单的“网络望远镜”。它把一串冰冷的数字（IP地址），转化成了你能看懂的国家、城市、时区、网络运营商等信息。
    </p>
    <p class="text-gray-700">
      无论你是想验证登录信息，了解网站服务器位置，还是单纯满足好奇心，它都能提供一个快速、免费的参考。下次再遇到和网络地址相关的问题时，不妨试试用它来寻找答案。
    </p>
  </div>
</article>
`;export{t as default};
