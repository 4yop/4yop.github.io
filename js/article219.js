const r=`
<div class="text-gray-800 bg-white font-sans">
  <article class="max-w-4xl mx-auto px-4 py-8 md:px-8">
    <h1 class="text-3xl md:text-4xl font-bold mb-6 text-center">星宿关系计算器：探秘《宿曜经》27星宿的因缘奥秘</h1>

    <p class="text-lg mb-8 leading-relaxed">
      在古老的东方智慧中，星宿不仅是夜空中闪烁的星辰，更是一把解读人与人之间缘分奥秘的钥匙。《宿曜经》，这部由唐代不空三藏大师翻译的经典，将古印度占星术与中国传统文化完美融合，为我们揭示了27星宿背后深邃的人际关系密码。
    </p>

    <div class="bg-gray-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
      <p class="italic">
        本文将带你走进27星宿的神秘世界，了解六种核心星宿关系的含义，探索人与人之间业力与缘分的深层联系。愿这古老的智慧能为你理解人际关系提供一个全新的视角。
      </p>
    </div>

    <h2 class="text-2xl md:text-3xl font-semibold mt-10 mb-6 pb-2 border-b">一、什么是《宿曜经》与27星宿？</h2>
    <p class="mb-4 leading-relaxed">
      《文殊师利菩萨及诸仙所说吉凶时日善恶宿曜经》，简称《宿曜经》，是唐代密教大师不空三藏所译的一部重要典籍。它不仅是一部佛经，更是中国历史上最早、最系统的占星学著作之一。这部经典将古印度的Nakshatras（星宿）体系与中国本土文化完美融合，形成了独具特色的星宿文化。
    </p>

    <h3 class="text-xl font-medium mt-8 mb-4">为什么是27星宿而非28？</h3>
    <p class="mb-4 leading-relaxed">
      在天文学上，月亮绕地球一周约为27.32日。中国传统的28星宿为了四方对称增加了一个"牛宿"，但在《宿曜经》的演算体系中，为了精准对齐月律周期，剔除了跨度极小的牛宿，采用27星宿循环。这种算法更侧重于月亮所代表的潜意识、情感本能与灵魂业力。
    </p>

    <p class="mb-6 leading-relaxed">
      27星宿，每一个都有其独特的象征意义和能量特质。从角宿的开创精神，到轸宿的智慧收尾，27个星宿如同一幅生命的画卷，展现了人性的各个面向。
    </p>

    <h3 class="text-xl font-medium mt-8 mb-4">27星宿一览</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">角木蛟</h4>
        <p class="text-gray-600 text-sm">开创、领导</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">亢金龙</h4>
        <p class="text-gray-600 text-sm">内敛、积蓄</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">氐土貉</h4>
        <p class="text-gray-600 text-sm">根基、稳定</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">房日兔</h4>
        <p class="text-gray-600 text-sm">内在、私密</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">心月狐</h4>
        <p class="text-gray-600 text-sm">情感、直觉</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">尾火虎</h4>
        <p class="text-gray-600 text-sm">热情、行动力</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">箕水豹</h4>
        <p class="text-gray-600 text-sm">流动、传播</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">斗木獬</h4>
        <p class="text-gray-600 text-sm">收集、整合</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">女土蝠</h4>
        <p class="text-gray-600 text-sm">细腻、洞察</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">虚日鼠</h4>
        <p class="text-gray-600 text-sm">隐藏、守护</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">危月燕</h4>
        <p class="text-gray-600 text-sm">危机、转机</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">室火猪</h4>
        <p class="text-gray-600 text-sm">充实、饱满</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">壁水貐</h4>
        <p class="text-gray-600 text-sm">屏障、保护</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">奎木狼</h4>
        <p class="text-gray-600 text-sm">开启、探索</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">娄金狗</h4>
        <p class="text-gray-600 text-sm">聚集、累积</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">胃土雉</h4>
        <p class="text-gray-600 text-sm">储存、滋养</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">昴日鸡</h4>
        <p class="text-gray-600 text-sm">警觉、清晰</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">毕月乌</h4>
        <p class="text-gray-600 text-sm">完全、圆满</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">觜火猴</h4>
        <p class="text-gray-600 text-sm">精简、核心</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">参水猿</h4>
        <p class="text-gray-600 text-sm">参与、观察</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">井木犴</h4>
        <p class="text-gray-600 text-sm">源泉、深度</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">鬼金羊</h4>
        <p class="text-gray-600 text-sm">神秘、隐藏</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">柳土獐</h4>
        <p class="text-gray-600 text-sm">柔顺、适应</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">星日马</h4>
        <p class="text-gray-600 text-sm">光明、照耀</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">张月鹿</h4>
        <p class="text-gray-600 text-sm">展开、延伸</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">翼火蛇</h4>
        <p class="text-gray-600 text-sm">飞翔、升华</p>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
        <h4 class="font-bold mb-1">轸水蚓</h4>
        <p class="text-gray-600 text-sm">转化、循环</p>
      </div>
    </div>

    <h2 class="text-2xl md:text-3xl font-semibold mt-12 mb-6 pb-2 border-b">二、六种核心星宿关系：三九之法</h2>
    <p class="mb-6 leading-relaxed">
      《宿曜经》将星宿之间的关系归纳为六种核心类型，称为"三九之法"。每一种关系都揭示了人与人之间独特的能量互动模式和业力连接。
    </p>

    <div class="space-y-6 mb-10">
      <div class="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition">
        <h3 class="text-xl font-bold mb-3">一、命之星 · 镜中相遇</h3>
        <p class="text-gray-600 mb-2"><strong>关系特征：</strong>双方属于同一个星宿</p>
        <p class="text-gray-600">
          这种关系如同照镜子，性格、习惯、思维极度相似。相遇时有强烈的同类感，仿佛遇到了另一个自己。他们能够深刻理解对方的内心世界，是灵魂的另一半。
        </p>
      </div>

      <div class="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition">
        <h3 class="text-xl font-bold mb-3">二、业胎关系 · 宿世债缘</h3>
        <p class="text-gray-600 mb-2"><strong>关系特征：</strong>星宿距离为9或18</p>
        <p class="text-gray-600">
          这是最具宿命感的关系，一方为"业"（前世因），一方为"胎"（今世果）。双方即便没有血缘，也会有无法斩断的连接感。这种关系往往伴随着深刻的情感纠葛和成长课题。
        </p>
      </div>

      <div class="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition">
        <h3 class="text-xl font-bold mb-3">三、荣亲关系 · 家族守护</h3>
        <p class="text-gray-600 mb-2"><strong>关系特征：</strong>代表荣耀与亲近</p>
        <p class="text-gray-600">
          这是最适合婚姻的关系，双方相处如家人般自在，能互相增益对方的运势，稳定而持久。荣亲关系带来的是温暖的归属感和彼此成就的能量。
        </p>
      </div>

      <div class="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition">
        <h3 class="text-xl font-bold mb-3">四、安坏关系 · 极致虐恋</h3>
        <p class="text-gray-600 mb-2"><strong>关系特征：</strong>一方为"安住"，一方为"破坏"</p>
        <p class="text-gray-600">
          这种关系极具吸引力但也极具杀伤力，充满了控制与被控制的博弈，是修行中最难跨越的课题。安坏关系往往带来深刻的成长，但也伴随着剧烈的情感波动。
        </p>
      </div>

      <div class="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition">
        <h3 class="text-xl font-bold mb-3">五、危成关系 · 现实博弈</h3>
        <p class="text-gray-600 mb-2"><strong>关系特征：</strong>一方为"危险"，一方为"成就"</p>
        <p class="text-gray-600">
          多发生于事业合作伙伴或因才华吸引的伴侣，强调现实价值的创造与博弈。危成关系往往在物质和事业层面带来显著的互动和成就。
        </p>
      </div>

      <div class="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition">
        <h3 class="text-xl font-bold mb-3">六、友衰关系 · 志趣相投</h3>
        <p class="text-gray-600 mb-2"><strong>关系特征：</strong>一方为"友"，一方为"衰"</p>
        <p class="text-gray-600">
          像朋友一样玩在一起，轻松愉快，但缺乏物质上的深度绑定，缘分较轻，需靠共同爱好维系。友衰关系带来的是轻松的陪伴和思想的交流。
        </p>
      </div>
    </div>

    <h2 class="text-2xl md:text-3xl font-semibold mt-12 mb-6 pb-2 border-b">三、如何计算自己的星宿？</h2>
    <p class="mb-4 leading-relaxed">
      计算星宿需要你的公历出生日期。星宿的确定基于农历日期，通过复杂的天文计算得出。现代的星宿计算器已经将这些复杂的算法简化，你只需要输入出生日期，就能立刻知道自己属于哪个星宿。
    </p>
    <p class="mb-6 leading-relaxed">
      星宿不仅仅是一个标签，更是一种能量的象征。每个星宿都有其独特的特质和倾向，了解自己的星宿，可以帮助你更好地认识自己，理解自己的行为模式和情感需求。
    </p>

    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-10 text-center">
      <p class="text-lg font-medium mb-3">想知道你和他/她之间的星宿关系吗？</p>
      <p class="text-gray-700">
        星宿揭示的是一种能量倾向。了解关系背景是为了更好地经营，而非定义结局。愿你在星辰的指引下，遇见更好的彼此。现在就来试试这个免费的星宿关系计算器，探索你们之间的缘分奥秘吧！
      </p>
    </div>
  </article>
</div>
`;export{r as default};
