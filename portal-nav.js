// Portal Navigation Component
// Include this on all portal pages

function loadPortalNav() {
  const navHTML = `
    <!-- Mobile Overlay -->
    <div class="mobile-overlay" id="mobileOverlay" onclick="toggleMobileSidebar()"></div>

    <!-- Sidebar -->
    <aside id="sidebar">
        <!-- Logo Area -->
        <div class="mb-10 flex items-center justify-between px-2">
            <div class="flex items-center gap-3">
                <span class="w-4 h-4 bg-orange-600 rounded-full flex-shrink-0"></span>
                <span class="text-xl font-bold tracking-tight text-white logo-text">Roam.</span>
            </div>
            <button onclick="toggleMobileSidebar()" class="lg:hidden text-gray-400 hover:text-white">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto pt-2">
            <a href="portal.html" class="nav-item" data-page="dashboard"><i class="fa-solid fa-chart-pie"></i> <span class="nav-label">Dashboard</span></a>
            <a href="portal-calendar.html" class="nav-item" data-page="calendar"><i class="fa-solid fa-calendar-days"></i> <span class="nav-label">Campaign Calendar</span></a>
            <a href="portal-projects.html" class="nav-item" data-page="projects"><i class="fa-solid fa-list-check"></i> <span class="nav-label">Project Status</span></a>
            <a href="portal-testing.html" class="nav-item" data-page="testing"><i class="fa-solid fa-flask"></i> <span class="nav-label">Testing Tracker</span></a>
            <a href="portal-scope.html" class="nav-item" data-page="scope"><i class="fa-solid fa-bullseye"></i> <span class="nav-label">Scope</span></a>
            <a href="portal-assets.html" class="nav-item" data-page="assets"><i class="fa-solid fa-folder-tree"></i> <span class="nav-label">Assets & Resources</span></a>
            <a href="portal-billing.html" class="nav-item" data-page="billing"><i class="fa-solid fa-file-invoice-dollar"></i> <span class="nav-label">Billing</span></a>
        </nav>

        <!-- Sidebar Footer -->
        <div class="mt-auto">
            <!-- Collapse Toggle Button -->
            <button onclick="toggleDesktopSidebar()" class="hidden lg:flex w-full items-center px-2 py-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-md transition-colors mb-4 collapse-btn group">
                <i class="fa-solid fa-angles-left text-lg transition-transform duration-300 collapse-icon group-hover:text-orange-500"></i>
                <span class="text-sm font-medium ml-3 collapse-text">Collapse Sidebar</span>
            </button>

            <!-- User Profile Section -->
            <div class="pt-6 border-t border-white/10">
                <div class="flex items-center gap-3 px-2">
                    <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-white flex-shrink-0" id="user-initials">--</div>
                    <div class="user-info overflow-hidden">
                        <p class="text-sm font-medium text-white truncate" id="user-company">Loading...</p>
                        <p class="text-xs text-gray-500" id="user-plan">Client</p>
                    </div>
                </div>
                <button onclick="signOut()" class="block mt-4 text-xs text-red-400 hover:text-red-300 ml-2 user-info bg-transparent border-none cursor-pointer">Sign Out</button>
            </div>
        </div>
    </aside>
  `;

  // Insert at beginning of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Set active nav item based on current page
  setActiveNavItem();
}

function setActiveNavItem() {
  const currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    const activeLink = document.querySelector(`.nav-item[data-page="${currentPage}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobileOverlay');
  
  sidebar.classList.toggle('mobile-open');
  overlay.classList.toggle('active');
}

function toggleDesktopSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('desktop-collapsed');
}

function signOut() {
  // Clear the auth cookie
  document.cookie = 'sb-rtmewagtvmubpushnzag-auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  
  // Redirect to home
  window.location.href = '/'
}

// Load nav when DOM is ready
document.addEventListener('DOMContentLoaded', loadPortalNav);
