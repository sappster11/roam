(function() {
    // ==========================================
    // SINGLE SOURCE OF TRUTH
    // ==========================================
    const CONFIG = {
        appName: 'Roam',
        circleColor: '#EA5E29',      // Orange circle
        backgroundColor: '#F5F5DC',   // Cream background (change as needed)
        iconPath: '/roam-icon.png'    // Path to your existing icon file
    };

    // ==========================================
    // GENERATE ICON WITH CIRCLE-IN-SQUARE DESIGN
    // ==========================================
    function generateIcon(size) {
        return new Promise((resolve) => {
            let canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            let ctx = canvas.getContext('2d');

            // Step 1: Fill entire square with background color
            ctx.fillStyle = CONFIG.backgroundColor;
            ctx.fillRect(0, 0, size, size);

            // Step 2: Draw centered circle with padding
            let center = size / 2;
            let radius = center * 0.78; // ~20px padding on 180px (70/90 = 0.78)
            
            ctx.fillStyle = CONFIG.circleColor;
            ctx.beginPath();
            ctx.arc(center, center, radius, 0, Math.PI * 2);
            ctx.fill();

            canvas.toBlob((blob) => resolve(URL.createObjectURL(blob)), 'image/png');
        });
    }

    // ==========================================
    // CLEAR ALL EXISTING ICONS
    // ==========================================
    function clearExistingIcons() {
        document.querySelectorAll('link[rel*="icon"]').forEach(el => el.remove());
        document.querySelectorAll('link[rel*="apple-touch-icon"]').forEach(el => el.remove());
    }

    // ==========================================
    // SET APPLE TOUCH ICONS (all sizes iOS might want)
    // ==========================================
    async function setAppleTouchIcons() {
        // iOS looks for multiple sizes - provide them all
        const sizes = [180, 167, 152, 120];
        
        for (let size of sizes) {
            let url = await generateIcon(size);
            let link = document.createElement('link');
            link.rel = 'apple-touch-icon';
            link.sizes = `${size}x${size}`;
            link.href = url;
            document.head.appendChild(link);
        }

        // Add one without size attribute (iOS fallback)
        let url180 = await generateIcon(180);
        let linkDefault = document.createElement('link');
        linkDefault.rel = 'apple-touch-icon';
        linkDefault.href = url180;
        document.head.appendChild(linkDefault);
    }

    // ==========================================
    // SET STANDARD FAVICONS
    // ==========================================
    async function setStandardFavicons() {
        // SVG for desktop (clean and sharp)
        let svgLink = document.createElement('link');
        svgLink.rel = 'icon';
        svgLink.type = 'image/svg+xml';
        svgLink.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${encodeURIComponent(CONFIG.circleColor)}"/></svg>`;
        document.head.appendChild(svgLink);

        // PNG fallback for browsers that don't support SVG favicons
        let url32 = await generateIcon(32);
        let pngLink = document.createElement('link');
        pngLink.rel = 'icon';
        pngLink.type = 'image/png';
        pngLink.sizes = '32x32';
        pngLink.href = url32;
        document.head.appendChild(pngLink);
    }

    // ==========================================
    // SET APP METADATA
    // ==========================================
    function setMetadata() {
        // App name for iOS
        let metaTitle = document.createElement('meta');
        metaTitle.name = 'apple-mobile-web-app-title';
        metaTitle.content = CONFIG.appName;
        document.head.appendChild(metaTitle);

        // App name for other platforms
        let metaAppName = document.createElement('meta');
        metaAppName.name = 'application-name';
        metaAppName.content = CONFIG.appName;
        document.head.appendChild(metaAppName);

        // Theme color
        let themeColor = document.createElement('meta');
        themeColor.name = 'theme-color';
        themeColor.content = CONFIG.circleColor;
        document.head.appendChild(themeColor);

        // Apple-specific meta tags
        let webAppCapable = document.createElement('meta');
        webAppCapable.name = 'apple-mobile-web-app-capable';
        webAppCapable.content = 'yes';
        document.head.appendChild(webAppCapable);
    }

    // ==========================================
    // INITIALIZE
    // ==========================================
    async function init() {
        clearExistingIcons();
        setMetadata();
        await setAppleTouchIcons();
        await setStandardFavicons();
        
        console.log('✓ Favicon system initialized');
    }

    // Run when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
