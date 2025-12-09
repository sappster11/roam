(function() {
    // --- 1. DESKTOP FAVICON (SVG) ---
    // Best for browser tabs. Infinite resolution, tiny file size.
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    // This is the SVG Data URI for the Orange Circle
    link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23EA5E29%22/></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);

    // --- 2. MOBILE APP ICON (PNG) ---
    // Best for "Add to Home Screen" on iOS/Android.
    // We generate a PNG on the fly using a hidden canvas.
    
    // Create a hidden canvas element (180x180 is the Apple standard)
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');

    // Draw the Orange Circle on the canvas
    ctx.fillStyle = '#EA5E29';
    ctx.beginPath();
    // Arc parameters: x, y, radius, startAngle, endAngle
    ctx.arc(90, 90, 90, 0, Math.PI * 2); 
    ctx.fill();

    // Convert the canvas drawing to a PNG Data URL
    const pngUrl = canvas.toDataURL('image/png');

    // Create the apple-touch-icon link
    let touchLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
    touchLink.rel = 'apple-touch-icon';
    touchLink.href = pngUrl;
    document.getElementsByTagName('head')[0].appendChild(touchLink);
})();
