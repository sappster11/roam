(function() {
    // 1. APP NAME (Roam)
    // Ensures the home screen name is short and clean.
    let metaTitle = document.createElement('meta');
    metaTitle.name = 'apple-mobile-web-app-title';
    metaTitle.content = 'Roam';
    document.head.appendChild(metaTitle);

    // 2. DESKTOP FAVICON (SVG)
    // Clean Orange Circle for Browser Tabs.
    let iconLink = document.querySelector("link[rel*='icon']") || document.createElement('link');
    iconLink.type = 'image/svg+xml';
    iconLink.rel = 'icon';
    iconLink.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23EA5E29%22/></svg>';
    document.head.appendChild(iconLink);

    // 3. MOBILE/SAFARI ICON (Real File)
    // Points to the file at the ROOT of your site.
    // The "/" at the start is critical for pages like /main
    let touchLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    touchLink.rel = 'apple-touch-icon';
    touchLink.href = '/apple-touch-icon.png'; 
    document.head.appendChild(touchLink);
})();
