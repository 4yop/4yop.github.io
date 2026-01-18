(function () {
    const currentHostname = window.location.hostname;
    const isProduction = currentHostname === window.CURRENT_HOST;

    if (!isProduction) {
        console.log(
            'Google Analytics: Tracking IS DISABLED (Non-production). Hostname:',
            currentHostname
        );
        // 保底，避免代码里有人直接调用 gtag 报错
        window.gtag = window.gtag || function () {};
        return;
    }

    console.log('Google Analytics: Loading GA (Production Mode)');

    // 1. 初始化 dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    window.gtag = gtag;

    // 2. 动态加载 GA 脚本
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MTDVMYZDBN';

    // 3. 脚本加载成功后再执行配置
    script.onload = function () {
        gtag('js', new Date());
        gtag('config', 'G-MTDVMYZDBN');

        console.log('Google Analytics: Tracking ENABLED');
    };

    script.onerror = function () {
        console.warn('Google Analytics: Script failed to load');
    };

    document.head.appendChild(script);
})();



(function () {
    const { pathname, search, hash } = window.location;

    if (!pathname.endsWith('.html')) return;

    // /xxx/xxx.html → /xxx/xxx/
    // /xxx/xxx/index.html → /xxx/xxx/
    let newPath = pathname
        .replace(/index\.html$/, '')
        .replace(/\.html$/, '/');

    // 防止 // 情况
    newPath = newPath.replace(/\/{2,}/g, '/');

    const newUrl = newPath + search + hash;

    console.log('Redirect:', pathname, '→', newPath);

    window.location.replace(newUrl);
})();
