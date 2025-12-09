(function() {
    const head = document.getElementsByTagName('head')[0];

    // --- 1. APP NAME (Fixes the "..." truncation) ---
    // This tells iOS/Android to just use "Roam" under the icon
    // instead of the full page title.
    let metaTitle = document.createElement('meta');
    metaTitle.name = 'apple-mobile-web-app-title';
    metaTitle.content = 'Roam'; // <--- The short name you want
    head.appendChild(metaTitle);

    // --- 2. DESKTOP FAVICON (SVG) ---
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23EA5E29%22/></svg>';
    head.appendChild(link);

    // --- 3. MOBILE APP ICON (Solid Orange Square) ---
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');

    // A. Background: Solid Brand Orange
    ctx.fillStyle = '#EB5E28'; 
    ctx.fillRect(0, 0, 180, 180);

    // B. Center Circle: Cream
    ctx.fillStyle = '#FDFCF8';
    ctx.beginPath();
    ctx.arc(90, 90, 70, 0, Math.PI * 2); 
    ctx.fill();

    // Inject the icon
    const pngUrl = canvas.toDataURL('image/png');
    let touchLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    touchLink.rel = 'apple-touch-icon';
    touchLink.href = pngUrl;
    head.appendChild(touchLink);
})();
