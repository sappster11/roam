// This script automatically sets the favicon for any page it is included on.
// To use: Add <script src="favicon.js"></script> to the <head> of your HTML files.

(function() {
    // 1. Check if a favicon link already exists
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    
    // 2. Configure the link for the Orange Circle SVG
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23EA5E29%22/></svg>';
    
    // 3. Inject it into the document <head>
    document.getElementsByTagName('head')[0].appendChild(link);
})();
