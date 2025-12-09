(function() {
    // --- 1. DESKTOP FAVICON (SVG) ---
    // Remains a full-bleed clean circle for browser tabs.
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23EA5E29%22/></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);

    // --- 2. MOBILE APP ICON (PNG) ---
    // Optimized for iOS "Add to Home Screen".
    // Creates a Cream Square with a smaller Orange Circle inside.
    
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');

    // A. Draw Background Square (Cream)
    // iOS doesn't handle transparency well (fills with black), so we give it a solid base.
    ctx.fillStyle = '#FDFCF8'; 
    ctx.fillRect(0, 0, 180, 180);

    // B. Draw Orange Circle (Scaled Down)
    // Radius reduced to 70 (was 90) to add padding/breathing room.
    ctx.fillStyle = '#EA5E29';
    ctx.beginPath();
    ctx.arc(90, 90, 70, 0, Math.PI * 2); 
    ctx.fill();

    // Convert to PNG and inject
    const pngUrl = canvas.toDataURL('image/png');
    let touchLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    touchLink.rel = 'apple-touch-icon';
    touchLink.href = pngUrl;
    document.getElementsByTagName('head')[0].appendChild(touchLink);
})();
