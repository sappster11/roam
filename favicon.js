(function() {
    const head = document.getElementsByTagName('head')[0];

    // --- 1. APP NAME ---
    // Sets the name under the icon on home screens
    let metaTitle = document.createElement('meta');
    metaTitle.name = 'apple-mobile-web-app-title';
    metaTitle.content = 'Roam';
    head.appendChild(metaTitle);

    // --- 2. DESKTOP FAVICON (SVG) ---
    // Crisp Orange Circle for Browser Tabs
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23EA5E29%22/></svg>';
    head.appendChild(link);

    // --- 3. MOBILE FALLBACK ---
    // This points to the REAL file you uploaded.
    // Safari Favorites needs this specific file path to work.
    let touchLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    touchLink.rel = 'apple-touch-icon';
    touchLink.href = 'apple-touch-icon.png'; 
    head.appendChild(touchLink);
})();
