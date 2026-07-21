/* ============ 系统层：设置 / 电源 / 菜单栏 / Dock / 控制中心 / 通知 / Spotlight / 屏保 ============ */
'use strict';
const WALLPAPERS = [
  { id: 'monterey', name: 'Monterey 抽象', src: 'assets/wallpapers/monterey.jpg' },
  { id: 'sonoma', name: 'Sonoma 落日', src: 'assets/wallpapers/sonoma.jpg' },
  { id: 'ventura', name: 'Ventura 霞光', src: 'assets/wallpapers/ventura.jpg' },
  { id: 'bigsur', name: 'Big Sur 海岸', src: 'assets/wallpapers/big-sur-day.jpg', dark: 'assets/wallpapers/big-sur-night.jpg' },
  { id: 'sequoia', name: 'Sequoia 山谷', src: 'assets/wallpapers/sequoia.jpg' },
  { id: 'galaxy', name: '银河', src: 'assets/wallpapers/galaxy.jpg' },
];

const DEFAULT_SETTINGS = {
  appearance: 'light', wallpaper: 'monterey', accent: '#0a84ff',
  reduceTransparency: false, reduceMotion: false, increaseContrast: false,
  dockSize: 54, dockMagnify: true, dockMagnifyLevel: 1.6, dockPosition: 'bottom', dockAutohide: false,
  brightness: 1, nightShift: false, nightShiftStrength: 0.4,
  volume: 0.6, muted: false,
  wifi: true, bluetooth: true, airdrop: false, focus: false, vpn: false,
  userName: '客人用户', avatar: 'assets/icons/avatar.svg',
  passwordEnabled: false, password: '',
  screensaverType: 'off', screensaverDelay: 5,
  h24: false, language: 'zh-Hans', region: '中国', firstDayMonday: true,
  searchEngine: 'bing', computerName: 'MacBook Pro',
  siriApps: true, siriFiles: true, siriSettings: true,
  loginItems: {}, notifAllow: {},
  finderView: 'icon', finderSort: 'name',
};

const Sys = {
  settings: null,
  unlocked: false,
  fullscreenWin: null,
  activeApp: 'finder',
  mediaEls: new Set(),
  _dockHideT: null,
  _saverT: null,
  _clockT: null,

  init() {
    this.settings = Object.assign(structuredClone(DEFAULT_SETTINGS), Store.get('settings', {}));
    this.applyAll();
    this.buildMenubar();
    this.buildDock();
    this.initIdleWatch();
    addEventListener('resize', debounce(() => { WM.clampAll(); this.layoutDock(); }, 120));
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => this.applyAppearance());
    document.addEventListener('keydown', e => this.globalKeys(e));
    // 全屏时鼠标触及顶部唤出菜单栏
    document.addEventListener('pointermove', e => {
      if (this.fullscreenWin) {
        $('#menubar').classList.toggle('autohide', e.clientY > 2 && !e.target.closest('#menubar'));
      }
    });
  },

  save() { Store.set('settings', this.settings); },
  set(k, v) { this.settings[k] = v; this.save(); this.applyAll(); },

  applyAll() {
    this.applyAppearance();
    this.applyWallpaper();
    this.applyBrightness();
    this.applyNightShift();
    this.applyVolume();
    document.documentElement.style.setProperty('--accent', this.settings.accent);
  },
  isDark() {
    const a = this.settings.appearance;
    if (a === 'dark') return true;
    if (a === 'auto') return matchMedia('(prefers-color-scheme: dark)').matches;
    return false;
  },
  applyAppearance() {
    const b = document.body;
    b.classList.toggle('dark', this.isDark());
    b.classList.toggle('reduce-transparency', !!this.settings.reduceTransparency);
    b.classList.toggle('reduce-motion', !!this.settings.reduceMotion);
    b.classList.toggle('increase-contrast', !!this.settings.increaseContrast);
    this.applyWallpaper();
  },
  wallpaperSrc() {
    const w = WALLPAPERS.find(w => w.id === this.settings.wallpaper) || WALLPAPERS[0];
    return (this.isDark() && w.dark) ? w.dark : w.src;
  },
  applyWallpaper() {
    const src = this.wallpaperSrc();
    const desk = $('#desktop'), lock = $('#lockscreen-bg');
    desk.style.backgroundImage = `url("${src}")`;
    lock.style.backgroundImage = `url("${src}")`;
    // 壁纸缺失时回退到 Big Sur 日落渐变
    const probe = new Image();
    probe.onerror = () => {
      const grad = 'linear-gradient(160deg,#4a6fa5 0%,#c86b85 45%,#f0a35e 100%)';
      desk.style.backgroundImage = grad; lock.style.backgroundImage = grad;
    };
    probe.src = src;
  },
  applyBrightness() { $('#overlay-brightness').style.opacity = String((1 - this.settings.brightness) * 0.55); },
  applyNightShift() { $('#overlay-nightshift').style.opacity = this.settings.nightShift ? String(this.settings.nightShiftStrength * 0.32) : '0'; },
  applyVolume() {
    const v = this.settings.muted ? 0 : this.settings.volume;
    this.mediaEls.forEach(m => { try { m.volume = clamp(v, 0, 1); } catch (e) {} });
  },
  registerMedia(m) { this.mediaEls.add(m); m.volume = this.settings.muted ? 0 : this.settings.volume; m.addEventListener('emptied', () => this.mediaEls.delete(m)); },

  /* ================= 电源流程 ================= */
  boot() {
    $('#poweroff').classList.add('hidden');
    $('#lockscreen').classList.add('hidden');
    $('#desktop').classList.add('hidden');
    $('#menubar').classList.add('hidden');
    $('#dock').classList.add('hidden');
    const boot = $('#bootscreen'), fill = $('#boot-progress-fill');
    boot.classList.remove('hidden');
    fill.style.transition = 'none'; fill.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = 'width 2.3s cubic-bezier(.25,.6,.35,1)';
      fill.style.width = '100%';
    }));
    setTimeout(() => {
      boot.classList.add('hidden');
      this.showLock();
    }, 3100);
  },

  showLock() {
    this.unlocked = false;
    WM.windows.slice().forEach(w => WM.close(w));
    const ls = $('#lockscreen');
    ls.classList.remove('hidden', 'unlocking', 'shake');
    $('#lock-password-row').classList.add('hidden');
    $('#lock-error').classList.add('hidden');
    $('#lock-hint').textContent = '点按或按 Enter 键解锁';
    $('#lock-username').textContent = this.settings.userName;
    $('#lock-avatar').src = this.settings.avatar;
    this.applyWallpaper();
    this.tickLockClock();
    clearInterval(this._lockT);
    this._lockT = setInterval(() => this.tickLockClock(), 1000);
    ls.onclick = () => this.lockAdvance();
    $('#lock-password').onkeydown = e => {
      e.stopPropagation();
      if (e.key === 'Enter') this.tryUnlock();
    };
  },
  tickLockClock() {
    const d = new Date();
    $('#lock-date').textContent = fmtDateCN(d);
    $('#lock-time').textContent = fmtTime(d, this.settings.h24);
  },
  lockAdvance() {
    if (this.unlocked) return;
    if (this.settings.passwordEnabled && $('#lock-password-row').classList.contains('hidden')) {
      $('#lock-password-row').classList.remove('hidden');
      $('#lock-hint').textContent = '按 Enter 键解锁';
      $('#lock-password').value = '';
      setTimeout(() => $('#lock-password').focus(), 50);
      return;
    }
    if (this.settings.passwordEnabled) { this.tryUnlock(); return; }
    this.unlock();
  },
  tryUnlock() {
    const v = $('#lock-password').value;
    if (v === this.settings.password) this.unlock();
    else {
      const ls = $('#lockscreen');
      $('#lock-error').classList.remove('hidden');
      ls.classList.remove('shake'); void ls.offsetWidth; ls.classList.add('shake');
      $('#lock-password').value = '';
    }
  },
  unlock() {
    this.unlocked = true;
    clearInterval(this._lockT);
    const ls = $('#lockscreen');
    ls.classList.add('unlocking');
    setTimeout(() => {
      ls.classList.add('hidden'); ls.classList.remove('unlocking');
      $('#desktop').classList.remove('hidden');
      $('#menubar').classList.remove('hidden');
      this.layoutDock();
      $('#dock').classList.remove('hidden');
      this.renderDesktopIcons();
      this.setActiveApp('finder');
      // 登录项
      for (const [appId, on] of Object.entries(this.settings.loginItems)) {
        if (on && Apps.get(appId)) setTimeout(() => Apps.open(appId), 400);
      }
      this.resetIdle();
    }, 420);
  },
  async powerOff() {
    if (!await UI.confirm('确定要关机吗？', '关机后所有未保存的更改将会丢失。', { ok: '关机', danger: true, icon: 'assets/icons/settings.png' })) return;
    this.unlocked = false;
    ['#desktop', '#menubar', '#dock', '#lockscreen', '#notification-center'].forEach(s => $(s).classList.add('hidden'));
    WM.windows.slice().forEach(w => WM.close(w));
    $('#poweroff').classList.remove('hidden');
    $('#poweroff').onclick = () => { $('#poweroff').classList.add('hidden'); this.boot(); };
  },
  async restart() {
    if (!await UI.confirm('确定要重新启动吗？', '', { ok: '重新启动', icon: 'assets/icons/settings.png' })) return;
    this.unlocked = false;
    WM.windows.slice().forEach(w => WM.close(w));
    this.boot();
  },
  sleep() {
    this.unlocked = false;
    ['#desktop', '#menubar', '#dock'].forEach(s => $(s).classList.add('hidden'));
    WM.windows.slice().forEach(w => WM.close(w));
    const black = el('div', { style: { position: 'fixed', inset: '0', background: '#000', zIndex: '9999' } });
    document.body.append(black);
    const wake = () => { black.remove(); document.removeEventListener('keydown', wake); this.showLock(); };
    setTimeout(() => { black.addEventListener('pointerdown', wake); document.addEventListener('keydown', wake); }, 600);
  },
  logout() { this.showLock(); },

  globalKeys(e) {
    // Spotlight
    if ((e.ctrlKey || e.metaKey) && e.code === 'Space') { e.preventDefault(); if (this.unlocked) Spotlight.toggle(); return; }
    if (!this.unlocked) {
      if (e.key === 'Enter' && !$('#lockscreen').classList.contains('hidden') && document.activeElement !== $('#lock-password')) this.lockAdvance();
      return;
    }
    // Ctrl+Cmd+F 全屏
    if (e.ctrlKey && e.metaKey && (e.key === 'f' || e.key === 'F')) {
      e.preventDefault();
      if (WM.activeWin) WM.toggleFullscreen(WM.activeWin);
      return;
    }
    // ⌘W 关闭窗口 / ⌘M 最小化（meta 在多数浏览器难捕获，兼容 ctrl+alt）
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key.toLowerCase() === 'w' && WM.activeWin) {
      if (e.metaKey) { e.preventDefault(); WM.close(WM.activeWin); }
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'm' && WM.activeWin && e.metaKey) {
      e.preventDefault(); WM.minimize(WM.activeWin);
    }
    // ⌘Q 退出前台应用
    if (e.metaKey && e.key.toLowerCase() === 'q') {
      e.preventDefault();
      if (this.activeApp && this.activeApp !== 'finder') Apps.quit(this.activeApp);
    }
  },

  /* ================= 屏保 ================= */
  initIdleWatch() {
    const reset = () => this.resetIdle();
    ['pointermove', 'pointerdown', 'keydown', 'wheel'].forEach(ev =>
      document.addEventListener(ev, reset, { passive: true, capture: true }));
  },
  resetIdle() {
    if (!$('#screensaver').classList.contains('hidden')) this.hideScreensaver();
    clearTimeout(this._saverT);
    if (!this.unlocked || this.settings.screensaverType === 'off') return;
    this._saverT = setTimeout(() => this.showScreensaver(), this.settings.screensaverDelay * 60000);
  },
  showScreensaver() {
    const ss = $('#screensaver');
    ss.innerHTML = '';
    ss.classList.remove('hidden');
    if (this.settings.screensaverType === 'clock') {
      const t = el('div', { class: 't' }), d = el('div', { class: 'd' });
      ss.append(el('div', { class: 'ss-clock' }, t, d));
      const tick = () => { const n = new Date(); t.textContent = fmtTime(n, this.settings.h24); d.textContent = fmtDateCN(n); };
      tick(); ss._timer = setInterval(tick, 1000);
    } else {
      const srcs = WALLPAPERS.map(w => w.src);
      let i = 0;
      const slides = srcs.map(s => el('div', { class: 'ss-slide', style: { backgroundImage: `url("${s}")` } }));
      slides.forEach(s => ss.append(s));
      const cycle = () => { slides.forEach((s, j) => s.style.opacity = j === i ? '1' : '0'); i = (i + 1) % slides.length; };
      cycle(); ss._timer = setInterval(cycle, 5000);
    }
  },
  hideScreensaver() {
    const ss = $('#screensaver');
    clearInterval(ss._timer);
    ss.classList.add('hidden'); ss.innerHTML = '';
  },

  /* ================= 菜单栏 ================= */
  buildMenubar() {
    const left = $('#menubar-left'), right = $('#menubar-right');
    left.innerHTML = ''; right.innerHTML = '';
    // Apple 菜单
    const apple = el('div', { class: 'mb-item mb-apple', role: 'button', 'aria-label': 'Apple 菜单' },
      el('svg', { viewBox: '0 0 384 512', html: '<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>' }));
    apple.addEventListener('click', e => { e.stopPropagation(); UI.closeAllMenus(); this.openAppleMenu(apple); });
    left.append(apple);
    this._appMenuItems = [];
    // 右侧状态项
    const mk = (cls, html, title) => { const d = el('div', { class: 'mb-item ' + cls, title: title || '' }); if (html != null) d.innerHTML = html; return d; };
    this._mbBattery = mk('mb-battery', `<span>100%</span><svg viewBox="0 0 27 12"><rect x="0.5" y="0.5" width="22" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".5"/><rect x="2" y="2" width="19" height="8" rx="2" fill="currentColor"/><path d="M25 4 v4 c1.2-.3 2-1 2-2 s-.8-1.7-2-2z" fill="currentColor" opacity=".5"/></svg>`, '电池电量：100%（电源适配器）');
    this._mbWifi = mk('mb-wifi', '', 'Wi-Fi');
    this._mbWifi.append(this.wifiSvg());
    this._mbSpot = mk('mb-spot', '<svg viewBox="0 0 24 24" width="15" height="15"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="15.3" y1="15.3" x2="20.5" y2="20.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>', '聚焦搜索 (Ctrl+空格)');
    this._mbCC = mk('mb-cc', '<svg viewBox="0 0 24 24" width="15" height="15"><rect x="2" y="4" width="20" height="7" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.5" cy="7.5" r="2.2" fill="currentColor"/><rect x="2" y="13" width="20" height="7" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="6.5" cy="16.5" r="2.2" fill="currentColor"/></svg>', '控制中心');
    this._mbClock = mk('', '', '');
    this._mbClock.id = 'mb-clock';
    right.append(this._mbBattery, this._mbWifi, this._mbSpot, this._mbCC, this._mbClock);
    this._mbSpot.addEventListener('click', () => Spotlight.toggle());
    this._mbCC.addEventListener('click', e => { e.stopPropagation(); this.toggleControlCenter(); });
    this._mbWifi.addEventListener('click', e => { e.stopPropagation(); this.toggleControlCenter(); });
    this._mbClock.addEventListener('click', e => { e.stopPropagation(); this.toggleNotificationCenter(); });
    this.tickClock();
    clearInterval(this._clockT);
    this._clockT = setInterval(() => this.tickClock(), 1000);
    this.initDockMag();
  },
  wifiSvg() {
    const on = this.settings.wifi;
    const color = 'currentColor';
    const svg = el('span', { style: { display: 'inline-flex', opacity: on ? '1' : '.45' } });
    svg.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><g fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"><path d="M4 9.5 C8.5 5 15.5 5 20 9.5"/><path d="M7 13 C10 10.2 14 10.2 17 13"/><path d="M9.8 16.3 C11.2 15 12.8 15 14.2 16.3"/><circle cx="12" cy="19" r="1.4" fill="${color}" stroke="none"/></g>${on ? '' : '<line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" stroke-width="2"/>'}</svg>`;
    return svg;
  },
  tickClock() {
    if (this._mbClock) this._mbClock.textContent = fmtMenuClock(new Date(), this.settings.h24);
    // 闹钟检查
    globalThis.ClockApp && ClockApp.tick();
  },

  openAppleMenu(anchor) {
    const r = anchor.getBoundingClientRect();
    UI.menu([
      { label: '关于本机', action: () => Apps.open('settings', { pane: 'about' }) },
      { sep: true },
      { label: '系统设置…', action: () => Apps.open('settings') },
      { label: 'App Store…', action: () => Apps.open('appstore') },
      { sep: true },
      { label: '强制退出…', key: '⌥⌘⎋', action: () => this.forceQuitDialog() },
      { sep: true },
      { label: '睡眠', action: () => this.sleep() },
      { label: '重新启动…', action: () => this.restart() },
      { label: '关机…', action: () => this.powerOff() },
      { sep: true },
      { label: '锁定屏幕', key: '⌃⌘Q', action: () => this.showLock() },
      { label: `注销“${this.settings.userName}”…`, action: async () => { if (await UI.confirm('确定要注销吗？', '所有窗口将被关闭。', { ok: '注销' })) this.logout(); } },
    ], r.left, r.bottom + 4);
  },

  forceQuitDialog() {
    const running = [...new Set(WM.windows.map(w => w.appId))].map(id => Apps.get(id)).filter(Boolean);
    const mask = el('div', { class: 'modal-mask' });
    const list = el('div', { style: { margin: '10px 0', maxHeight: '180px', overflowY: 'auto', textAlign: 'left' } });
    let sel = null;
    const render = () => {
      list.innerHTML = '';
      if (!running.length) list.append(el('div', { class: 'empty-state', style: { height: '80px' }, text: '没有正在运行的应用' }));
      running.forEach(app => {
        const row = el('div', {
          class: 'menu-item enabled', style: { borderRadius: '6px' },
          onclick: () => { sel = app; $$('.menu-item', list).forEach(n => n.style.background = ''); row.style.background = 'var(--selection)'; }
        }, iconImg(app.icon, '', ''), el('span', { text: app.name }));
        row.querySelector('img').style.width = '20px'; row.querySelector('img').style.height = '20px';
        list.append(row);
      });
    };
    render();
    const dlg = el('div', { class: 'dialog', style: { width: '300px' } },
      el('div', { class: 'dlg-title', text: '强制退出应用程序' }),
      el('div', { class: 'dlg-msg', text: '选择要强制退出的应用，未保存的更改将会丢失。' }),
      list
    );
    const btns = el('div', { class: 'dlg-btns row' },
      el('button', { class: 'btn', text: '取消', onclick: () => mask.remove() }),
      el('button', {
        class: 'btn danger', text: '强制退出', onclick: () => {
          if (sel) { WM.windowsForApp(sel.id).slice().forEach(w => WM.close(w)); running.splice(running.indexOf(sel), 1); sel = null; render(); }
        }
      })
    );
    dlg.append(btns); mask.append(dlg); document.body.append(mask);
    mask.addEventListener('pointerdown', e => { if (e.target === mask) mask.remove(); });
  },

  setActiveApp(appId) {
    this.activeApp = appId || 'finder';
    const app = Apps.get(this.activeApp);
    // 重建应用菜单区
    $$('.mb-appmenu', $('#menubar-left')).forEach(n => n.remove());
    const left = $('#menubar-left');
    const menus = app ? app.menus(WM.activeWin && WM.activeWin.appId === app.id ? WM.activeWin : null) : [];
    const nameItem = el('div', { class: 'mb-item mb-appmenu app-name', text: app ? app.name : '访达' });
    nameItem.addEventListener('click', e => {
      e.stopPropagation();
      UI.closeAllMenus();
      const r = nameItem.getBoundingClientRect();
      const nm = app ? app.name : '访达';
      UI.menu([
        { label: `关于${nm}`, action: () => UI.dialog({ icon: app?.icon, title: nm, msg: app?.about || 'macOS 网页版内置应用', buttons: ['好'] }) },
        { sep: true },
        { label: '设置…', action: () => Apps.open('settings') },
        { sep: true },
        { label: `退出${nm}`, key: '⌘Q', disabled: this.activeApp === 'finder', action: () => Apps.quit(this.activeApp) },
      ], r.left, r.bottom + 4);
    });
    left.append(nameItem);
    for (const m of menus) {
      const item = el('div', { class: 'mb-item mb-appmenu', text: m.label });
      item.addEventListener('click', e => {
        e.stopPropagation();
        if (item.classList.contains('open')) { UI.closeAllMenus(); item.classList.remove('open'); return; }
        UI.closeAllMenus(); $$('.mb-item.open').forEach(n => n.classList.remove('open'));
        item.classList.add('open');
        const r = item.getBoundingClientRect();
        const pop = UI.menu(typeof m.items === 'function' ? m.items() : m.items, r.left, r.bottom + 4);
        const obs = new MutationObserver(() => { if (!document.body.contains(pop)) item.classList.remove('open'); obs.disconnect(); });
        obs.observe(document.body, { childList: true });
      });
      item.addEventListener('pointerenter', () => {
        if ($$('.menu-pop').length && !item.classList.contains('open') && $$('.mb-item.open').length) item.click();
      });
      left.append(item);
    }
  },

  /* ================= Dock ================= */
  dockPinned() {
    return ['finder', 'launchpad', 'safari', 'mail', 'messages', 'facetime', 'maps', 'notes', 'textedit', 'calendar', 'photos', 'music', 'calculator', 'terminal', 'activitymonitor', 'appstore', 'settings'];
  },
  buildDock() {
    Bus.on('wm:changed', () => this.updateDockDots());
    Bus.on('trash:changed', () => this.renderDock());
  },
  dockItems() {
    const pinned = this.dockPinned();
    const running = [...new Set(WM.windows.map(w => w.appId))].filter(id => !pinned.includes(id));
    return [...pinned, ...running];
  },
  renderDock() {
    const dock = $('#dock');
    dock.innerHTML = '';
    const s = this.settings;
    for (const id of this.dockItems()) {
      const app = Apps.get(id);
      if (!app) continue;
      const ic = el('div', { class: 'dock-icon', dataset: { app: id }, title: '' },
        iconImg(app.icon, '', app.name),
        el('span', { class: 'dock-tip', text: app.name }),
        el('span', { class: 'run-dot hidden' })
      );
      const badge = Notify.badgeCount(id);
      if (badge > 0) ic.append(el('span', { class: 'badge dock-badge', text: String(badge) }));
      ic.style.width = ic.style.height = s.dockSize + 'px';
      ic.addEventListener('click', () => this.dockClick(id, ic));
      ic.addEventListener('contextmenu', e => this.dockIconMenu(e, id));
      dock.append(ic);
    }
    const sep = el('div', { class: 'dock-sep' });
    dock.append(sep);
    // 废纸篓
    const trashEmpty = FS.list(FS.TRASH).length === 0;
    const trash = el('div', { class: 'dock-icon', dataset: { app: '__trash' }, title: '废纸篓' },
      iconImg(trashEmpty ? 'assets/icons/trash.svg' : 'assets/icons/trash-full.svg', '', '废纸篓'),
      el('span', { class: 'dock-tip', text: '废纸篓' })
    );
    trash.style.width = trash.style.height = s.dockSize + 'px';
    trash.addEventListener('click', () => Apps.open('finder', { path: FS.TRASH }));
    trash.addEventListener('contextmenu', e => {
      e.preventDefault(); e.stopPropagation();
      UI.contextMenu([
        { label: '打开', action: () => Apps.open('finder', { path: FS.TRASH }) },
        { label: '清空废纸篓', disabled: trashEmpty, action: async () => { if (await UI.confirm('确定要清空废纸篓吗？', '此操作无法撤销。', { ok: '清空', danger: true })) FS.emptyTrash(); } },
      ], e);
    });
    dock.append(trash);
    dock.addEventListener('contextmenu', e => {
      if (e.target.closest('.dock-icon')) return;
      e.preventDefault();
      this.dockBgMenu(e);
    });
    this.layoutDock();
    this.updateDockDots();
  },
  layoutDock() {
    const dock = $('#dock'), hz = $('#dock-hotzone'), s = this.settings;
    dock.className = dock.className.replace(/pos-\w+|hidden-\w+/g, '').trim();
    dock.classList.add('pos-' + s.dockPosition);
    hz.className = s.dockPosition;
    // 尺寸
    $$('.dock-icon', dock).forEach(ic => { ic.style.width = ic.style.height = s.dockSize + 'px'; });
    // 自动隐藏
    const hidden = s.dockAutohide && !this._dockPeeking;
    dock.classList.toggle('hidden-' + s.dockPosition, !!hidden && this.unlocked);
    if (this.fullscreenWin) dock.classList.add('hidden-' + s.dockPosition);
    // 绑定热区
    hz.onpointerenter = () => { if (s.dockAutohide) this.dockPeek(true); };
    dock.onpointerenter = () => { clearTimeout(this._dockHideT); if (s.dockMagnify) dock.addEventListener('pointermove', this._dockMag); };
    dock.onpointerleave = () => {
      dock.removeEventListener('pointermove', this._dockMag);
      this.dockResetMag();
      if (s.dockAutohide) { clearTimeout(this._dockHideT); this._dockHideT = setTimeout(() => this.dockPeek(false), 450); }
    };
  },
  dockPeek(show) {
    this._dockPeeking = show;
    const dock = $('#dock'), s = this.settings;
    clearTimeout(this._dockHideT);
    dock.classList.toggle('hidden-' + s.dockPosition, !show);
    if (!show) this._dockPeeking = false;
  },
  dockHide(force) {
    const dock = $('#dock'), s = this.settings;
    dock.classList.toggle('hidden-' + s.dockPosition, force || (s.dockAutohide && !this._dockPeeking));
  },
  _dockMag: null,
  dockResetMag() {
    const s = this.settings;
    $$('.dock-icon', $('#dock')).forEach(ic => { ic.style.width = ic.style.height = s.dockSize + 'px'; ic.style.margin = '0'; });
  },
  initDockMag() {
    this._dockMag = e => {
      const s = this.settings;
      if (!s.dockMagnify) return;
      const base = s.dockSize, max = base * s.dockMagnifyLevel;
      const vertical = s.dockPosition !== 'bottom';
      for (const ic of $$('.dock-icon', $('#dock'))) {
        const r = ic.getBoundingClientRect();
        const c = vertical ? r.top + r.height / 2 : r.left + r.width / 2;
        const m = vertical ? e.clientY : e.clientX;
        const d = Math.abs(m - c);
        const range = base * 2.4;
        const scale = d < range ? base + (max - base) * Math.cos((d / range) * Math.PI / 2) : base;
        ic.style.width = ic.style.height = scale + 'px';
      }
    };
  },
  updateDockDots() {
    for (const ic of $$('.dock-icon', $('#dock'))) {
      const id = ic.dataset.app;
      if (!id || id === '__trash') continue;
      const running = WM.windows.some(w => w.appId === id);
      ic.querySelector('.run-dot')?.classList.toggle('hidden', !running);
      // 同步 dock 项（未固定应用退出后移除）
    }
    const want = this.dockItems();
    const have = $$('.dock-icon', $('#dock')).map(n => n.dataset.app).filter(a => a && a !== '__trash');
    if (want.join() !== have.join()) this.renderDock();
  },
  dockClick(id, ic) {
    const wins = WM.windowsForApp(id);
    if (!wins.length) {
      ic.classList.add('bouncing');
      setTimeout(() => ic.classList.remove('bouncing'), 1700);
      Apps.open(id);
      return;
    }
    const min = wins.filter(w => w.state === 'minimized');
    if (min.length) { min.forEach(w => WM.restore(w)); return; }
    if (WM.activeWin && WM.activeWin.appId === id && wins.length > 1) {
      // 轮换窗口
      const i = wins.indexOf(WM.activeWin);
      WM.focus(wins[(i + 1) % wins.length]);
    } else WM.focus(wins[wins.length - 1]);
  },
  dockIconMenu(e, id) {
    e.preventDefault(); e.stopPropagation();
    const app = Apps.get(id);
    const running = WM.windowsForApp(id).length > 0;
    UI.contextMenu([
      { label: running ? '显示所有窗口' : '打开', action: () => { running ? WM.windowsForApp(id).forEach(w => WM.restore(w)) : Apps.open(id); } },
      { sep: true },
      { label: '选项', submenu: [
        { label: '登录时打开', checked: !!this.settings.loginItems[id], action: () => { this.settings.loginItems[id] = !this.settings.loginItems[id]; this.save(); } },
      ] },
      { label: running ? '退出' : '在访达中显示', action: () => { running ? Apps.quit(id) : Apps.open('finder', { path: FS.HOME + '/Applications' }); } },
    ], e);
  },
  dockBgMenu(e) {
    const s = this.settings;
    UI.contextMenu([
      { label: '自动隐藏', checked: s.dockAutohide, action: () => { s.dockAutohide = !s.dockAutohide; this.save(); this.layoutDock(); } },
      { label: '位置', submenu: ['bottom', 'left', 'right'].map(p => ({
        label: { bottom: '置于底部', left: '置于左边', right: '置于右边' }[p], checked: s.dockPosition === p,
        action: () => { s.dockPosition = p; this.save(); this.layoutDock(); }
      })) },
      { sep: true },
      { label: '程序坞设置…', action: () => Apps.open('settings', { pane: 'dock' }) },
    ], e);
  },

  /* ================= 控制中心 ================= */
  toggleControlCenter() {
    const cc = $('#control-center');
    if (!cc.classList.contains('hidden')) { cc.classList.add('hidden'); return; }
    Notify.hideCenter();
    this.renderControlCenter();
    cc.classList.remove('hidden');
    const close = e => { if (!e.target.closest('#control-center') && !e.target.closest('.mb-cc') && !e.target.closest('.mb-wifi')) { cc.classList.add('hidden'); document.removeEventListener('pointerdown', close); } };
    setTimeout(() => document.addEventListener('pointerdown', close), 0);
  },
  ccToggle(iconSvg, label, sub, key, onClick) {
    const s = this.settings;
    const ico = el('div', { class: 'cc-ico' + (s[key] ? ' on' : '') }); ico.innerHTML = iconSvg;
    const row = el('div', { class: 'cc-row', style: { cursor: 'pointer' } }, ico,
      el('div', { class: 'cc-lab' }, label, el('small', { text: s[key] ? '打开' : '关闭' })));
    row.addEventListener('click', () => {
      if (onClick) onClick(!s[key]);
      else { s[key] = !s[key]; this.save(); }
      this.applyAll(); this.renderControlCenter();
      if (key === 'wifi') { this._mbWifi.innerHTML = ''; this._mbWifi.append(this.wifiSvg()); }
    });
    return row;
  },
  renderControlCenter() {
    const cc = $('#control-center'), s = this.settings;
    cc.innerHTML = '';
    const svgWifi = '<svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9.5 C8.5 5 15.5 5 20 9.5"/><path d="M7 13 C10 10.2 14 10.2 17 13"/><circle cx="12" cy="19" r="1.6" fill="currentColor" stroke="none"/></g></svg>';
    const svgBt = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 12 l5 -6 v12 z M12 8 l4 4 -4 4 M12 8 l4 4"/></svg>';
    const svgDrop = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.5" fill="currentColor"/></svg>';
    const svgMoon = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 15.5 A8.5 8.5 0 1 1 8.5 4 A7 7 0 0 0 20 15.5z"/></svg>';
    const svgSun = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="2.5" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="21.5" y2="12"/><line x1="5" y1="5" x2="6.8" y2="6.8"/><line x1="17.2" y1="17.2" x2="19" y2="19"/><line x1="5" y1="19" x2="6.8" y2="17.2"/><line x1="17.2" y1="6.8" x2="19" y2="5"/></g></svg>';
    const svgVol = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 9 v6 h4 l5 4 V5 L8 9 z"/><path d="M16 9 a4.5 4.5 0 0 1 0 6 M18 6.5 a8 8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    cc.append(
      el('div', { class: 'cc-card' },
        this.ccToggle(svgWifi, 'Wi-Fi', '', 'wifi'),
        this.ccToggle(svgBt, '蓝牙', '', 'bluetooth'),
        this.ccToggle(svgDrop, '隔空投送', '', 'airdrop')),
      el('div', { class: 'cc-card' },
        this.ccToggle(svgMoon, '专注模式', '', 'focus'),
        this.ccToggle('<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 20 h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>', 'VPN', '', 'vpn')),
      el('div', { class: 'cc-card span2' },
        el('div', { class: 'cc-title', text: '显示器' }),
        el('div', { class: 'cc-slider-row' }, (() => { const i = el('span'); i.innerHTML = svgSun; return i; })(),
          (() => {
            const r = el('input', { type: 'range', class: 'slider', min: '20', max: '100', value: String(Math.round(s.brightness * 100)) });
            r.style.setProperty('--fill', (s.brightness * 100) + '%');
            r.addEventListener('input', () => { s.brightness = r.value / 100; r.style.setProperty('--fill', r.value + '%'); Sys.applyBrightness(); });
            r.addEventListener('change', () => Sys.save());
            return r;
          })())),
      el('div', { class: 'cc-card span2' },
        el('div', { class: 'cc-title', text: '声音' }),
        el('div', { class: 'cc-slider-row' }, (() => { const i = el('span'); i.innerHTML = svgVol; return i; })(),
          (() => {
            const r = el('input', { type: 'range', class: 'slider', min: '0', max: '100', value: String(Math.round(s.volume * 100)) });
            r.style.setProperty('--fill', (s.volume * 100) + '%');
            r.addEventListener('input', () => { s.volume = r.value / 100; s.muted = r.value == 0; r.style.setProperty('--fill', r.value + '%'); Sys.applyVolume(); });
            r.addEventListener('change', () => Sys.save());
            return r;
          })())),
      el('div', { class: 'cc-card span2' },
        this.ccToggle('<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor"/><path d="M12 2 v3 M12 19 v3 M2 12 h3 M19 12 h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>', '夜览', '', 'nightShift'))
    );
  },

  /* ================= 通知中心 ================= */
  toggleNotificationCenter() {
    const nc = $('#notification-center');
    const open = nc.classList.contains('nc-hidden') || nc.classList.contains('hidden');
    if (open) { $('#control-center').classList.add('hidden'); Notify.showCenter(); }
    else Notify.hideCenter();
  },

  /* 还原所有设置 */
  async resetAll() {
    const ok = await UI.confirm('还原所有设置？', '将清除本应用保存在此浏览器中的全部数据（设置、文件、备忘录等）并恢复默认。', { ok: '还原', danger: true, icon: 'assets/icons/settings.png' });
    if (!ok) return false;
    Store.clearAll();
    location.reload();
    return true;
  }
};

/* ============ 通知 API ============ */
const Notify = {
  list: [],
  init() { this.list = Store.get('notifs', []); },
  save() { Store.set('notifs', this.list.slice(-60)); },
  badgeCount(appId) { return this.list.filter(n => n.appId === appId && !n.read).length; },
  send({ appId, title, body, silent = false }) {
    const app = Apps.get(appId) || { name: appId, icon: 'assets/icons/settings.png' };
    const n = { id: uid(), appId, title, body, ts: Date.now(), read: false, icon: app.icon };
    this.list.push(n); this.save();
    if (!Sys.settings.focus && !silent) this.banner(n, app);
    if (!$('#notification-center').classList.contains('hidden') && !$('#notification-center').classList.contains('nc-hidden')) this.renderCenter();
    Sys.renderDock();
  },
  banner(n, app) {
    const b = el('div', { class: 'banner' }, iconImg(n.icon, '', ''),
      el('div', null, el('div', { class: 'n-title', text: n.title }), el('div', { class: 'n-text', text: n.body })));
    b.addEventListener('click', () => { this.markRead(n.id); b.remove(); if (Apps.get(n.appId)) Apps.open(n.appId); });
    $('#banner-container').append(b);
    setTimeout(() => { b.classList.add('out'); setTimeout(() => b.remove(), 320); }, 5200);
    this.markReadLater(n.id);
  },
  markReadLater(id) { setTimeout(() => this.markRead(id), 6000); },
  markRead(id) { const n = this.list.find(x => x.id === id); if (n && !n.read) { n.read = true; this.save(); Sys.renderDock(); } },
  remove(id) { this.list = this.list.filter(x => x.id !== id); this.save(); this.renderCenter(); Sys.renderDock(); },
  clearAll() { this.list = []; this.save(); this.renderCenter(); Sys.renderDock(); },
  showCenter() {
    const nc = $('#notification-center');
    nc.classList.remove('hidden', 'nc-hidden');
    this.renderCenter();
  },
  hideCenter() { $('#notification-center').classList.add('nc-hidden'); },
  renderCenter() {
    const nc = $('#notification-center');
    if (nc.classList.contains('hidden')) return;
    nc.innerHTML = '';
    const d = new Date();
    nc.append(el('div', { class: 'nc-date' }, el('div', { class: 'd1', text: WEEK_CN[d.getDay()] }), el('div', { class: 'd2', text: `${d.getMonth() + 1}月${d.getDate()}日` })));
    // 天气小组件
    const w = globalThis.WeatherApp ? WeatherApp.widgetData() : null;
    if (w) nc.append(el('div', { class: 'nc-widget' },
      el('div', { class: 'w-city', text: w.city }),
      el('div', { class: 'w-temp', text: w.temp + '°' }),
      el('div', { class: 'w-desc', text: `${w.desc}  最高${w.hi}° 最低${w.lo}°` })));
    const list = this.list.slice().reverse();
    if (!list.length) nc.append(el('div', { class: 'nc-empty', text: '没有新通知' }));
    for (const n of list.slice(0, 30)) {
      const item = el('div', { class: 'nc-notif' },
        el('button', { class: 'n-close', text: '✕', 'aria-label': '清除通知', onclick: e => { e.stopPropagation(); this.remove(n.id); } }),
        iconImg(n.icon, '', ''),
        el('div', { class: 'n-body' },
          el('div', { class: 'n-title' }, el('span', { text: n.title }), el('time', { text: relTime(n.ts) })),
          el('div', { class: 'n-text', text: n.body })));
      item.addEventListener('click', () => { this.markRead(n.id); if (Apps.get(n.appId)) Apps.open(n.appId); });
      nc.append(item);
    }
    if (list.length) nc.append(el('button', { class: 'nc-clear-all', text: '清除所有通知', onclick: () => this.clearAll() }));
  }
};

/* ============ Spotlight ============ */
const Spotlight = {
  sel: 0, items: [],
  toggle() { $('#spotlight').classList.contains('hidden') ? this.open() : this.close(); },
  open() {
    const sp = $('#spotlight');
    sp.classList.remove('hidden');
    const input = $('#spotlight-input');
    input.value = ''; this.render('');
    setTimeout(() => input.focus(), 30);
    input.oninput = () => { this.sel = 0; this.render(input.value.trim()); };
    input.onkeydown = e => {
      if (e.key === 'Escape') this.close();
      else if (e.key === 'ArrowDown') { e.preventDefault(); this.moveSel(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); this.moveSel(-1); }
      else if (e.key === 'Enter') { const it = this.items[this.sel]; if (it) { this.close(); it.action(); } }
    };
    sp.onclick = e => { if (e.target === sp) this.close(); };
  },
  close() { $('#spotlight').classList.add('hidden'); },
  moveSel(d) {
    if (!this.items.length) return;
    this.sel = (this.sel + d + this.items.length) % this.items.length;
    $$('.sp-item').forEach((n, i) => n.classList.toggle('sel', i === this.sel));
    $$('.sp-item')[this.sel]?.scrollIntoView({ block: 'nearest' });
  },
  render(q) {
    const box = $('#spotlight-results');
    box.innerHTML = ''; this.items = [];
    if (!q) return;
    const s = Sys.settings;
    const addSection = name => box.append(el('div', { class: 'sp-section', text: name }));
    const addItem = (section, icon, label, sub, action) => {
      this.items.push({ action });
      const item = el('div', { class: 'sp-item' + (this.items.length - 1 === this.sel ? ' sel' : '') },
        typeof icon === 'string' ? iconImg(icon, '', '') : icon,
        el('span', { text: label }), sub ? el('span', { class: 'sp-sub', text: sub }) : null);
      item.addEventListener('click', () => { this.close(); action(); });
      item.addEventListener('pointerenter', () => { this.sel = this.items.length - 1; $$('.sp-item').forEach((n, i) => n.classList.toggle('sel', i === this.sel)); });
      if (section) { const secs = $$('.sp-section', box).map(n => n.textContent); if (!secs.includes(section)) addSection(section); }
      box.append(item);
    };
    // 计算器
    if (/^[\d\s+\-*/().%×÷^]+$/.test(q) && /\d/.test(q) && /[+\-*/×÷^%]/.test(q)) {
      try {
        const expr = q.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**').replace(/%/g, '/100');
        const val = Function('"use strict";return (' + expr + ')')();
        if (isFinite(val)) {
          const c = el('div', { class: 'sp-calc', text: `${q} = ${+val.toFixed(8)}` });
          box.append(c);
          this.items.push({ action: () => navigator.clipboard?.writeText(String(+val.toFixed(8))) });
        }
      } catch (e) {}
    }
    const ql = q.toLowerCase();
    if (s.siriApps) {
      const apps = Object.values(Apps.registry).filter(a => a.name.toLowerCase().includes(ql) || a.id.includes(ql)).slice(0, 5);
      apps.forEach(a => addItem('应用程序', a.icon, a.name, '应用程序', () => Apps.open(a.id)));
    }
    if (s.siriFiles) {
      const files = FS.search(q).slice(0, 6);
      files.forEach(f => addItem('文件与文件夹', FS.iconFor(f.path), FS.baseName(f.path), FS.dirName(f.path).replace(FS.HOME, '~'), () => Apps.openPath(f.path)));
    }
    if (s.siriSettings && window.SettingsApp) {
      const panes = SettingsApp.panes.filter(p => p.name.includes(q)).slice(0, 4);
      panes.forEach(p => addItem('系统设置', 'assets/icons/settings.png', p.name, '系统设置', () => Apps.open('settings', { pane: p.id })));
    }
    if (!this.items.length && !box.querySelector('.sp-calc')) box.append(el('div', { class: 'sp-item disabled', text: `未找到“${q}”相关结果` }));
  }
};
window.Sys = Sys; window.Notify = Notify; window.Spotlight = Spotlight; window.WALLPAPERS = WALLPAPERS; window.DEFAULT_SETTINGS = DEFAULT_SETTINGS;
