(function() {
    const head = document.getElementsByTagName('head')[0];

    // --- 1. APP NAME ---
    let metaTitle = document.createElement('meta');
    metaTitle.name = 'apple-mobile-web-app-title';
    metaTitle.content = 'Roam';
    head.appendChild(metaTitle);

    // --- 2. DESKTOP FAVICON (SVG) ---
    // Clean Orange Circle for Tabs
    let iconLink = document.querySelector("link[rel*='icon']") || document.createElement('link');
    iconLink.type = 'image/svg+xml';
    iconLink.rel = 'icon';
    iconLink.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23EA5E29%22/></svg>';
    head.appendChild(iconLink);

    // --- 3. SAFARI PINNED TAB (Mask Icon) ---
    // This adds a specific monochrome icon for Safari Pinned Tabs
    let maskLink = document.createElement('link');
    maskLink.rel = 'mask-icon';
    maskLink.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22black%22/></svg>';
    maskLink.setAttribute('color', '#EA5E29');
    head.appendChild(maskLink);

    // --- 4. MOBILE APP ICON (Cream Square, Orange Dot) ---
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');

    // A. Background: Cream
    ctx.fillStyle = '#FDFCF8'; 
    ctx.fillRect(0, 0, 180, 180);

    // B. Center Circle: Orange
    ctx.fillStyle = '#EB5E28';
    ctx.beginPath();
    ctx.arc(90, 90, 70, 0, Math.PI * 2); 
    ctx.fill();

    const pngUrl = canvas.toDataURL('image/png');

    // Standard Apple Touch Icon
    let touchLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    touchLink.rel = 'apple-touch-icon';
    touchLink.href = pngUrl;
    head.appendChild(touchLink);

    // Precomposed (Helps some versions of iOS/Safari Favorites)
    let precomposedLink = document.createElement('link');
    precomposedLink.rel = 'apple-touch-icon-precomposed';
    precomposedLink.href = pngUrl;
    head.appendChild(precomposedLink);
})();
