const s=`
<div class="max-w-4xl mx-auto px-4 py-8">
  <!-- 文章标题 -->
  <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
    了解自己，从认识你的性格开始：MBTI性格测试全解析
  </h1>
  
  <!-- 引言部分 -->
  <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
    <p class="text-gray-700">
      你是否好奇过，为什么有的人喜欢热闹的聚会，而有的人更享受独处的时光？为什么有人做决定时理性分析，有人则凭直觉感受？今天，我们就来聊聊这个能帮助你更好认识自己的工具——MBTI性格测试。
    </p>
  </div>
  
  <!-- 什么是MBTI -->
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
      MBTI是什么？
    </h2>
    <p class="text-gray-700 mb-4 leading-relaxed">
      MBTI（迈尔斯-布里格斯类型指标）是一种性格分类工具，它基于心理学家卡尔·荣格的理论发展而来。简单来说，它通过四个维度来描述一个人的性格偏好，帮助我们理解自己和他人不同的思考和行为方式。
    </p>
    <p class="text-gray-700 leading-relaxed">
      这不是一个评判好坏的工具，而是帮助我们认识到：每个人天生就有不同的性格倾向，这些倾向影响着我们如何获取信息、做决定、与他人相处。
    </p>
  </section>
  
  <!-- 四个维度详解 -->
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
      性格的四个维度
    </h2>
    
    <div class="space-y-8">
      <!-- 第一个维度 -->
      <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">1. 精力的来源：外向(E) vs 内向(I)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div class="p-4 bg-red-50 rounded-lg">
            <h4 class="font-medium text-red-700 mb-2">外向型(E)</h4>
            <p class="text-gray-700 text-sm">
              倾向于从外部世界获取能量。喜欢与人交流，在社交活动中感到充满活力，思维过程往往是说出来才更清晰。
            </p>
          </div>
          <div class="p-4 bg-blue-50 rounded-lg">
            <h4 class="font-medium text-blue-700 mb-2">内向型(I)</h4>
            <p class="text-gray-700 text-sm">
              倾向于从内心世界获取能量。享受独处时光，喜欢深入的思考，在安静的环境中更能集中注意力。
            </p>
          </div>
        </div>
        <p class="text-gray-600 text-sm">
          <span class="font-medium">简单判断：</span>周末充电时，你是想约朋友出去玩，还是更想在家看看书、看看电影？
        </p>
      </div>
      
      <!-- 第二个维度 -->
      <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">2. 获取信息的方式：实感(S) vs 直觉(N)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div class="p-4 bg-red-50 rounded-lg">
            <h4 class="font-medium text-red-700 mb-2">实感型(S)</h4>
            <p class="text-gray-700 text-sm">
              关注具体事实和细节。相信实际经验，注重现实情况，喜欢按部就班地处理事情。
            </p>
          </div>
          <div class="p-4 bg-blue-50 rounded-lg">
            <h4 class="font-medium text-blue-700 mb-2">直觉型(N)</h4>
            <p class="text-gray-700 text-sm">
              关注整体和可能性。善于看到事物的联系，喜欢探索新的想法，注重未来的发展。
            </p>
          </div>
        </div>
        <p class="text-gray-600 text-sm">
          <span class="font-medium">简单判断：</span>旅行时，你是更关注具体的行程安排，还是更期待未知的惊喜体验？
        </p>
      </div>
      
      <!-- 第三个维度 -->
      <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">3. 决策的方式：思考(T) vs 情感(F)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div class="p-4 bg-red-50 rounded-lg">
            <h4 class="font-medium text-red-700 mb-2">思考型(T)</h4>
            <p class="text-gray-700 text-sm">
              基于逻辑和客观分析做决定。注重公平和原则，善于分析问题的利弊。
            </p>
          </div>
          <div class="p-4 bg-blue-50 rounded-lg">
            <h4 class="font-medium text-blue-700 mb-2">情感型(F)</h4>
            <p class="text-gray-700 text-sm">
              基于价值观和人际关系做决定。注重和谐与共情，考虑他人的感受。
            </p>
          </div>
        </div>
        <p class="text-gray-600 text-sm">
          <span class="font-medium">简单判断：</span>团队意见不合时，你更倾向于用逻辑说服大家，还是想办法让每个人都感觉被尊重？
        </p>
      </div>
      
      <!-- 第四个维度 -->
      <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">4. 生活的方式：判断(J) vs 感知(P)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div class="p-4 bg-red-50 rounded-lg">
            <h4 class="font-medium text-red-700 mb-2">判断型(J)</h4>
            <p class="text-gray-700 text-sm">
              喜欢有计划、有条理的生活。做事有明确的目标和时间表，喜欢事情有结果。
            </p>
          </div>
          <div class="p-4 bg-blue-50 rounded-lg">
            <h4 class="font-medium text-blue-700 mb-2">感知型(P)</h4>
            <p class="text-gray-700 text-sm">
              喜欢灵活、开放的生活方式。适应能力强，喜欢保持选择的可能性。
            </p>
          </div>
        </div>
        <p class="text-gray-600 text-sm">
          <span class="font-medium">简单判断：</span>你是习惯提前规划好周末的安排，还是更喜欢看当天的心情决定做什么？
        </p>
      </div>
    </div>
  </section>
  
  <!-- 16种人格类型 -->
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
      常见的性格类型
    </h2>
    <p class="text-gray-700 mb-6 leading-relaxed">
      四个维度的不同组合，形成了16种不同的性格类型。每种类型都有其独特的特点和优势。这里简单介绍几种常见的类型：
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-gradient-to-r from-blue-50 to-teal-50 p-5 rounded-lg border border-blue-100">
        <h3 class="font-bold text-blue-800 mb-2">ISTJ（物流师）</h3>
        <p class="text-gray-700 text-sm mb-3">
          务实、有条理、可靠。喜欢按照计划和规则行事，是工作中值得信赖的伙伴。
        </p>
        <div class="text-xs text-gray-600">
          适合职业：会计、审计师、行政管理
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-100">
        <h3 class="font-bold text-purple-800 mb-2">ENFP（竞选者）</h3>
        <p class="text-gray-700 text-sm mb-3">
          热情、有创意、善于社交。充满好奇心，能够激励他人，喜欢探索各种可能性。
        </p>
        <div class="text-xs text-gray-600">
          适合职业：记者、心理咨询师、市场营销
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border border-green-100">
        <h3 class="font-bold text-green-800 mb-2">ISFJ（守护者）</h3>
        <p class="text-gray-700 text-sm mb-3">
          温暖、细心、有责任感。关心他人需求，是团队中默默付出的支持者。
        </p>
        <div class="text-xs text-gray-600">
          适合职业：教师、护士、人力资源
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg border border-yellow-100">
        <h3 class="font-bold text-yellow-800 mb-2">ENTJ（指挥官）</h3>
        <p class="text-gray-700 text-sm mb-3">
          果断、有战略眼光、领导力强。善于规划和组织，能够带领团队实现目标。
        </p>
        <div class="text-xs text-gray-600">
          适合职业：企业家、项目经理、律师
        </div>
      </div>
    </div>
    
    <div class="mt-6 p-4 bg-gray-50 rounded-lg">
      <p class="text-gray-600 text-sm">
        需要说明的是，性格类型没有“好坏”之分。每种类型都有自己独特的优势，也有可以发展的方面。了解自己的类型，是为了更好地发挥优势，同时理解并弥补自己的短板。
      </p>
    </div>
  </section>
  
  <!-- 如何正确看待测试结果 -->
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
      如何正确看待性格测试？
    </h2>
    
    <div class="space-y-6">
      <div class="flex items-start">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
          <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>
        <div>
          <h3 class="font-medium text-gray-800 mb-2">这是参考，不是标签</h3>
          <p class="text-gray-700">
            MBTI测试结果可以帮助你了解自己的倾向，但不应该成为限制自己的标签。人的性格是复杂的，测试结果只是提供了一个观察的视角。
          </p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
          <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>
        <div>
          <h3 class="font-medium text-gray-800 mb-2">性格可以发展</h3>
          <p class="text-gray-700">
            虽然我们有天生的倾向，但后天的学习和经历也会影响我们的性格。如果你发现某些方面需要改进，完全可以通过练习来发展这些能力。
          </p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
          <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>
        <div>
          <h3 class="font-medium text-gray-800 mb-2">理解他人差异</h3>
          <p class="text-gray-700">
            了解不同的性格类型，也能帮助我们更好地理解他人。当你知道同事或家人与你性格不同时，可能会对他们的行为有更多的理解和包容。
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- 测试的用途 -->
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
      性格测试有什么用？
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="text-center p-5 bg-white rounded-lg border border-gray-200">
        <div class="text-4xl mb-4 text-blue-600">💼</div>
        <h3 class="font-semibold text-gray-800 mb-3">职业发展</h3>
        <p class="text-gray-700 text-sm">
          了解自己适合的工作环境、工作方式，在选择职业方向时更有参考
        </p>
      </div>
      
      <div class="text-center p-5 bg-white rounded-lg border border-gray-200">
        <div class="text-4xl mb-4 text-green-600">👥</div>
        <h3 class="font-semibold text-gray-800 mb-3">人际关系</h3>
        <p class="text-gray-700 text-sm">
          理解自己与他人的相处模式，改善沟通方式，建立更好的关系
        </p>
      </div>
      
      <div class="text-center p-5 bg-white rounded-lg border border-gray-200">
        <div class="text-4xl mb-4 text-purple-600">🌱</div>
        <h3 class="font-semibold text-gray-800 mb-3">个人成长</h3>
        <p class="text-gray-700 text-sm">
          认识自己的优势与不足，有针对性地进行自我提升和发展
        </p>
      </div>
    </div>
  </section>
  
  <!-- 常见问题 -->
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
      关于MBTI的常见问题
    </h2>
    
    <div class="space-y-6">
      <div class="border border-gray-200 rounded-lg p-5">
        <h3 class="font-medium text-gray-800 mb-3">测试结果会变化吗？</h3>
        <p class="text-gray-700">
          会的。随着我们的成长、经历变化，性格也会有一定的发展和调整。很多人每隔几年测试，结果可能会有细微的变化。这很正常，说明你在不断成长。
        </p>
      </div>
      
      <div class="border border-gray-200 rounded-lg p-5">
        <h3 class="font-medium text-gray-800 mb-3">我应该相信测试结果吗？</h3>
        <p class="text-gray-700">
          测试结果可以作为参考，但最终的解释权在你手中。如果你觉得某些描述特别符合你，那就值得思考；如果有些不太准确，也不必完全相信。最了解你的人还是你自己。
        </p>
      </div>
      
      <div class="border border-gray-200 rounded-lg p-5">
        <h3 class="font-medium text-gray-800 mb-3">性格测试能预测成功吗？</h3>
        <p class="text-gray-700">
          不能。性格测试描述的是倾向和偏好，而不是能力或成功的保证。无论什么性格类型，都有成功的人。重要的是如何发挥自己的优势，并在需要时发展其他能力。
        </p>
      </div>
    </div>
  </section>
  
  <!-- 结语 -->
  <section class="bg-gradient-to-r from-blue-50 to-teal-50 p-6 md:p-8 rounded-xl border border-blue-200">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">写在最后</h2>
    <p class="text-gray-700 mb-4 leading-relaxed">
      性格测试就像一面镜子，让我们有机会更清晰地看到自己。它不是要给我们贴标签，而是提供一种理解自己和他人的语言。
    </p>
    <p class="text-gray-700 leading-relaxed">
      无论测试结果是什么，都请记住：你的价值不是由四个字母决定的。了解性格类型，是为了更好地成长，而不是限制自己的可能性。每个人都是独特的，都有自己的闪光点等待被发现。
    </p>
    <div class="mt-6 pt-6 border-t border-blue-200">
      <p class="text-gray-600 text-sm">
        如果你对性格测试感兴趣，可以找一个安静的时间，认真回答一些问题，看看结果会告诉你什么。也许会有意想不到的发现呢。
      </p>
    </div>
  </section>
</div>`;export{s as default};
