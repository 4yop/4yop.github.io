(function () {
    function initGA() {
        const currentHostname = window.location.hostname;
        const isProduction = currentHostname === window.CURRENT_HOST;

        if (!isProduction) {
            window.gtag = window.gtag || function () {};
            return;
        }

        // 防止重复加载
        if (window.__GA_LOADED__) return;
        window.__GA_LOADED__ = true;

        // 初始化 dataLayer
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MTDVMYZDBN';

        script.onload = function () {
            gtag('js', new Date());
            gtag('config', 'G-MTDVMYZDBN');
        };

        document.head.appendChild(script);
    }

    // function loadAds() {
    //     const adsScript = document.createElement('script');
    //     adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8982726393306273";
    //     adsScript.async = true;
    //     adsScript.crossOrigin = "anonymous";
    //     document.head.appendChild(adsScript);
    // }
    //
    // if ('requestIdleCallback' in window) {
    //     requestIdleCallback(loadAds, { timeout: 3000 }); // 浏览器空闲时加载
    // } else {
    //     window.addEventListener('load', loadAds); // fallback
    // }


    // 👇 关键：推迟到首屏之后
    if ('requestIdleCallback' in window) {
        requestIdleCallback(initGA, { timeout: 3000 });
    } else {
        setTimeout(initGA, 0);
    }

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
