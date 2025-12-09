(function() {
    // 1. APP NAME (Roam)
    let metaTitle = document.createElement('meta');
    metaTitle.name = 'apple-mobile-web-app-title';
    metaTitle.content = 'Roam';
    document.head.appendChild(metaTitle);

    // 2. DESKTOP FAVICON (SVG ONLY)
    // We leave the Mobile/Favorites icon to your hardcoded HTML tag.
    // This just handles the nice crisp circle for laptop browsers.
    let iconLink = document.querySelector("link[rel*='icon']") || document.createElement('link');
    iconLink.type = 'image/svg+xml';
    iconLink.rel = 'icon';
    iconLink.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23EA5E29%22/></svg>';
    document.head.appendChild(iconLink);
})();
