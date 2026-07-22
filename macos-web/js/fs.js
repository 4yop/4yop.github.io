/* ============ 虚拟文件系统（localStorage 持久化） ============ */
'use strict';
const FS = {
  HOME: '/Users/guest',
  get TRASH() { return this.HOME + '/.Trash'; },
  root: null,

  init() {
    this.root = Store.get('fs', null);
    if (!this.root || this.root.t !== 'd') { this.root = { t: 'd', c: {}, mtime: Date.now() }; this.seed(); }
    Bus.on('apps:ready', () => this.syncApps());
  },

  seed() {
    const dirs = ['Desktop', 'Documents', 'Downloads', 'Pictures', 'Music', 'Applications', '.Trash'];
    dirs.forEach(d => this.mkdir(this.HOME + '/' + d, { recursive: true, silent: true }));
    this.write(this.HOME + '/Desktop/welcome.txt', [
      '欢迎使用 macOS 网页版！', '',
      '这是一套在浏览器中运行的桌面模拟器。', '你可以：',
      '· 双击打开「Sample Folder」和各个应用', '· 在访达、终端、文本编辑之间管理同一套虚拟文件',
      '· 通过 Apple 菜单锁定、重启或关机', '· 在系统设置中更换壁纸、切换深色模式', '',
      '所有数据都保存在浏览器本地，刷新后依然存在。'
    ].join('\n'), { silent: true });
    this.write(this.HOME + '/Desktop/关于本模拟器.txt', [
      'macOS模拟器在线版：把整台苹果电脑塞进浏览器', '',
      '想体验苹果电脑的桌面，又不想开机、不用装虚拟机？',
      '这个网页版 macOS 模拟器用纯前端代码还原了苹果系统的核心交互：开机动画、锁屏登录、访达、计算器、终端、系统设置一应俱全，打开网页就能玩。',
      '全部运行在你的浏览器本地，无需下载安装，不收集任何数据，关掉标签页即清空。', '',
      '—— 它到底能做什么？ ——', '',
      '这不是一张静态截图，而是一套真正能交互的桌面环境：',
      '· 开机动画与锁屏：仿苹果开机进度条，锁屏显示日期时间和用户头像，回车或点按即可进入桌面',
      '· 桌面与菜单栏：顶部实时时钟、信号与电量图标，底部 Dock 支持悬停放大效果',
      '· 窗口管理：拖拽移动、边缘缩放、最小化、绿色按钮缩放、全屏，多窗口自由层叠',
      '· 启动台：全屏应用网格，点击任意图标即可打开对应应用',
      '· 聚焦搜索（Spotlight）：快捷键调出，支持应用检索、文件检索，还能当计算器直接求值',
      '· 毛玻璃特效：控制中心、通知中心、菜单下拉均带真实的背景模糊质感', '',
      '—— 内置了哪些应用？ ——', '',
      '访达 Finder：带侧边栏和文件列表的虚拟文件系统，可新建文件夹、重命名、查看简介，所有操作本地持久化。',
      '计算器 Calculator：标准四则运算，键盘与鼠标均可操作，还原 macOS 计算器的视觉与交互。',
      '终端 Terminal：内置 ls、cd、cat、echo、mkdir、open 等命令，还有 neofetch 系统概览。',
      '文本编辑与备忘录：文本编辑支持富文本输入并本地保存，备忘录独立记录待办与灵感，刷新不丢失。',
      '系统设置：通用、外观、墙纸、程序坞、通知、关于等面板，可切换浅色深色、更换壁纸、调整 Dock 行为。',
      '其他应用：还包含照片、音乐、日历、时钟、天气、地图、Safari 浏览器、邮件、信息、通讯录、便笺、FaceTime、QuickTime、预览、Keynote、Typora、VS Code、GitHub、Apple TV、播客、Apple News、活动监视器、App Store 等 30 余款拟真应用。', '',
      '—— 适合什么场景？ ——', '',
      '场景一：想试试 macOS 但不想买 Mac —— 在 Windows 或安卓设备上也能直观感受苹果桌面的操作逻辑和视觉风格，零成本体验。',
      '场景二：给孩子或长辈演示电脑基础 —— 窗口、文件夹、Dock、设置这些概念在拟真环境里点一点就懂，比纯讲更直观。',
      '场景三：整活、录屏与创意展示 —— 开机动画、毛玻璃、启动台网格都很上镜，做视频素材或朋友间整蛊都合适。', '',
      '—— 技术实现原理 ——', '',
      '纯前端架构：原生 JavaScript 与 CSS 实现，无框架、无构建步骤，单页面即可运行，加载快、兼容性广。',
      '虚拟文件系统：以树形结构在浏览器本地存储（localStorage）模拟磁盘，跨应用共享同一份文件数据。',
      '真实图标资源：应用图标采用还原度极高的真实 PNG / SVG 图标素材，随页面本地打包，不会因联网失败而缺图。',
      '毛玻璃与主题：通过 CSS 变量与 backdrop-filter 实现浅色、深色主题和实时背景模糊，统一切换。',
      '事件总线与窗口管理：轻量事件机制串联各模块，窗口拖拽、缩放、层叠、最小化由独立窗口管理器统一调度。', '',
      '—— 常见问题 ——', '',
      'Q: 需要下载或注册吗？',
      'A: 完全不需要。打开网页即可使用，所有数据只存在你当前浏览器里，不注册、不上传。',
      '',
      'Q: 我在里面创建的文件会丢吗？',
      'A: 只要不清除浏览器数据，文件会随本地存储保留，刷新和重新打开页面都还在；清缓存后会重置。',
      '',
      'Q: 能在手机上用吗？',
      'A: 桌面交互针对键鼠优化，手机浏览器可以打开但操作体验有限，建议在电脑端获得完整体验。',
      '',
      'Q: 这是正版 macOS 吗？',
      'A: 不是。这是一个第三方爱好者用网页技术还原苹果桌面视觉与交互的模拟器，与苹果公司无关，仅供体验与演示。'
    ].join('\n'), { silent: true });
    this.mkdir(this.HOME + '/Desktop/Sample Folder', { silent: true });
    this.write(this.HOME + '/Desktop/Sample Folder/会议纪要.txt', '周会纪要\n\n1. 桌面端体验优化\n2. 虚拟文件系统联调\n3. 下周发布预览版', { silent: true });
    this.write(this.HOME + '/Desktop/Sample Folder/待办.txt', '- [x] 搭建窗口管理器\n- [x] 接入通知中心\n- [ ] 完善离线回退', { silent: true });
    this.write(this.HOME + '/Documents/购物清单.txt', '牛奶\n鸡蛋\n全麦面包\n咖啡豆\n牛油果\n', { silent: true });
    this.write(this.HOME + '/Documents/Ideas.txt', '想法收集\n\n· 给屏保加上天气\n· 终端支持管道\n· 地图离线瓦片\n', { silent: true });
    this.write(this.HOME + '/Documents/旅行清单.txt', '京都 4 日行\n\nD1 清水寺 / 二年坂\nD2 岚山竹林 / 渡月桥\nD3 伏见稻荷大社\nD4 锦市场采购\n', { silent: true });
    this.write(this.HOME + '/Documents/关于本系统.txt', 'macOS 网页版 v1.0\n\n纯 HTML/CSS/JavaScript 实现，无需构建。\n数据存储于 localStorage，离线可用。', { silent: true });
    this.write(this.HOME + '/Downloads/说明.txt', '此目录用于存放下载的文件。', { silent: true });
    this.write(this.HOME + '/Pictures/壁纸说明.txt', '系统内置多张壁纸，可在「系统设置 › 墙纸」中切换。', { silent: true });
    this.write(this.HOME + '/Music/曲目说明.txt', '音乐 App 已内置 6 首 Kevin MacLeod (CC-BY) 曲目。', { silent: true });
    this.save();
  },

  /* 把已注册应用同步为 /Applications 下的 .app 条目 */
  syncApps() {
    if (!window.Apps) return;
    const dir = this.node(this.HOME + '/Applications');
    if (!dir) return;
    for (const app of Object.values(Apps.registry)) {
      const name = app.name + '.app';
      if (!dir.c[name]) { dir.c[name] = { t: 'a', app: app.id, mtime: Date.now() }; }
    }
    this.save(); Bus.emit('fs:changed', { op: 'sync', paths: [this.HOME + '/Applications'] });
  },

  save() { Store.set('fs', this.root); },

  normalize(path) {
    if (!path) return '/';
    const parts = [];
    for (const p of String(path).split('/')) {
      if (!p || p === '.') continue;
      if (p === '..') parts.pop(); else parts.push(p);
    }
    return '/' + parts.join('/');
  },
  join(...segs) { return this.normalize(segs.join('/')); },
  baseName(path) { path = this.normalize(path); return path === '/' ? '/' : path.slice(path.lastIndexOf('/') + 1); },
  dirName(path) { path = this.normalize(path); const i = path.lastIndexOf('/'); return i <= 0 ? '/' : path.slice(0, i); },

  node(path) {
    path = this.normalize(path);
    if (path === '/') return this.root;
    let cur = this.root;
    for (const seg of path.slice(1).split('/')) {
      if (!cur || cur.t !== 'd' || !cur.c[seg]) return null;
      cur = cur.c[seg];
    }
    return cur;
  },
  exists(path) { return !!this.node(path); },
  isDir(path) { return this.node(path)?.t === 'd'; },
  parent(path) {
    path = this.normalize(path);
    const dir = this.dirName(path), name = this.baseName(path);
    const p = this.node(dir);
    return p && p.t === 'd' ? [p, name, dir] : [null, name, dir];
  },
  assertDir(path) { const n = this.node(path); if (!n || n.t !== 'd') throw new Error('不是文件夹: ' + path); return n; },

  list(path, { showHidden = false } = {}) {
    const n = this.assertDir(path);
    return Object.entries(n.c)
      .filter(([name]) => showHidden || !name.startsWith('.'))
      .map(([name, node]) => ({ name, path: this.join(path, name), node }))
      .sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN'));
  },
  read(path) {
    const n = this.node(path);
    if (!n) throw new Error('文件不存在: ' + path);
    if (n.t !== 'f') throw new Error('不是文本文件: ' + path);
    return n.data ?? '';
  },
  write(path, data, { mime, silent } = {}) {
    const [p, name] = this.parent(path);
    if (!p) throw new Error('父目录不存在: ' + path);
    const now = Date.now();
    if (p.c[name] && p.c[name].t === 'd') throw new Error('同名文件夹已存在: ' + name);
    p.c[name] = { t: 'f', data: String(data ?? ''), mime: mime || this.mimeOf(name), mtime: now };
    this.save(); if (!silent) Bus.emit('fs:changed', { op: 'write', paths: [this.normalize(path), this.dirName(path)] });
  },
  mkdir(path, { recursive = false, silent } = {}) {
    path = this.normalize(path);
    if (this.exists(path)) { if (!recursive) throw new Error('已存在: ' + path); return; }
    if (recursive) {
      let cur = this.root, curPath = '';
      for (const seg of path.slice(1).split('/')) {
        curPath += '/' + seg;
        if (!cur.c[seg]) cur.c[seg] = { t: 'd', c: {}, mtime: Date.now() };
        if (cur.c[seg].t !== 'd') throw new Error('路径冲突: ' + curPath);
        cur = cur.c[seg];
      }
      this.save(); if (!silent) Bus.emit('fs:changed', { op: 'mkdir', paths: [path, this.dirName(path)] });
      return;
    }
    const [p, name] = this.parent(path);
    if (!p) throw new Error('父目录不存在: ' + path);
    p.c[name] = { t: 'd', c: {}, mtime: Date.now() };
    this.save(); if (!silent) Bus.emit('fs:changed', { op: 'mkdir', paths: [path, this.dirName(path)] });
  },
  rename(path, newName) {
    path = this.normalize(path); newName = String(newName || '').trim();
    if (!newName || newName.includes('/')) throw new Error('名称无效');
    const [p, name, dir] = this.parent(path);
    if (!p || !p.c[name]) throw new Error('不存在: ' + path);
    if (name === newName) return path;
    if (p.c[newName]) throw new Error('已存在同名项目: ' + newName);
    p.c[newName] = p.c[name]; delete p.c[name];
    p.c[newName].mtime = Date.now();
    const np = this.join(dir, newName);
    this.save(); Bus.emit('fs:changed', { op: 'rename', paths: [path, np, dir] });
    return np;
  },
  uniqueName(dir, base) {
    const n = this.assertDir(dir);
    if (!n.c[base]) return base;
    const dot = base.lastIndexOf('.');
    const stem = dot > 0 ? base.slice(0, dot) : base, ext = dot > 0 ? base.slice(dot) : '';
    for (let i = 2; ; i++) { const cand = `${stem} ${i}${ext}`; if (!n.c[cand]) return cand; }
  },
  copy(src, dstDir) {
    src = this.normalize(src); dstDir = this.normalize(dstDir);
    const sn = this.node(src); if (!sn) throw new Error('不存在: ' + src);
    const dd = this.assertDir(dstDir);
    const name = this.uniqueName(dstDir, this.baseName(src));
    dd.c[name] = structuredClone(sn); dd.c[name].mtime = Date.now();
    delete dd.c[name].origPath;
    this.save(); Bus.emit('fs:changed', { op: 'copy', paths: [src, this.join(dstDir, name), dstDir] });
    return this.join(dstDir, name);
  },
  move(src, dstDir) {
    src = this.normalize(src); dstDir = this.normalize(dstDir);
    if (src === dstDir) throw new Error('不能移动到自身');
    if (dstDir === src || dstDir.startsWith(src + '/')) throw new Error('不能把文件夹移动到它自己内部');
    const [p, name] = this.parent(src);
    if (!p || !p.c[name]) throw new Error('不存在: ' + src);
    const dd = this.assertDir(dstDir);
    let final = name;
    if (dd.c[final]) final = this.uniqueName(dstDir, name);
    dd.c[final] = p.c[name]; delete p.c[name];
    dd.c[final].mtime = Date.now();
    const np = this.join(dstDir, final);
    this.save(); Bus.emit('fs:changed', { op: 'move', paths: [src, np, this.dirName(src), dstDir] });
    return np;
  },
  remove(path) {
    path = this.normalize(path);
    if (path === '/' || path === this.TRASH) throw new Error('不能删除该项目');
    const [p, name, dir] = this.parent(path);
    if (!p || !p.c[name]) throw new Error('不存在: ' + path);
    delete p.c[name];
    this.save(); Bus.emit('fs:changed', { op: 'remove', paths: [path, dir] });
  },
  trash(path) {
    path = this.normalize(path);
    if (path.startsWith(this.TRASH + '/')) return this.remove(path);
    const n = this.node(path); if (!n) throw new Error('不存在: ' + path);
    n.origPath = path;
    const np = this.move(path, this.TRASH);
    Bus.emit('trash:changed'); return np;
  },
  restore(name) {
    const tp = this.join(this.TRASH, name);
    const n = this.node(tp); if (!n) throw new Error('不在废纸篓中');
    let dst = n.origPath ? this.dirName(n.origPath) : this.HOME + '/Desktop';
    if (!this.isDir(dst)) dst = this.HOME + '/Desktop';
    delete n.origPath;
    const np = this.move(tp, dst);
    Bus.emit('trash:changed'); return np;
  },
  emptyTrash() {
    const t = this.assertDir(this.TRASH);
    t.c = {}; this.save();
    Bus.emit('fs:changed', { op: 'emptyTrash', paths: [this.TRASH] });
    Bus.emit('trash:changed');
  },
  walk(path, fn) {
    const rec = (p, node) => { fn(p, node); if (node.t === 'd') for (const [nm, ch] of Object.entries(node.c)) rec(this.join(p, nm), ch); };
    const n = this.node(path); if (n) rec(this.normalize(path), n);
  },
  size(path = '/') {
    let s = 0; this.walk(path, (p, n) => { if (n.t === 'f') s += (n.data || '').length; }); return s;
  },
  search(query, base = '/') {
    const out = []; const q = query.toLowerCase();
    this.walk(base, (p, n) => {
      if (out.length >= 40) return;
      if (p !== base && this.baseName(p).toLowerCase().includes(q) && !p.startsWith(this.TRASH)) out.push({ path: p, node: n });
    });
    return out;
  },
  mimeOf(name) {
    const ext = (name.split('.').pop() || '').toLowerCase();
    return { txt: 'text/plain', md: 'text/markdown', rtf: 'text/rtf', log: 'text/plain', json: 'application/json', csv: 'text/csv' }[ext] || 'text/plain';
  },
  iconFor(path) {
    const n = this.node(path);
    if (n?.t === 'a') return Apps.get(n.app)?.icon || 'assets/icons/txt.svg';
    if (n?.t === 'd') return 'assets/icons/folder.svg';
    if (n?.t === 'f') {
      const ext = (path.split('.').pop() || '').toLowerCase();
      if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) return 'assets/icons/preview.svg';
      if (ext === 'pdf') return 'assets/icons/pdf.svg';
      return 'assets/icons/txt.svg';
    }
    return 'assets/icons/txt.svg';
  },
  kindOf(path) {
    const n = this.node(path);
    if (n?.t === 'd') return '文件夹';
    if (n?.t === 'a') return '应用程序';
    const ext = (path.split('.').pop() || '').toLowerCase();
    return { txt: '纯文本', md: 'Markdown', rtf: 'RTF', log: '日志', json: 'JSON', csv: 'CSV', pdf: 'PDF' }[ext] || '文件';
  }
};
window.FS = FS;
