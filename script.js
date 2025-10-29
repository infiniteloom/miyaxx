// Page content data
const pageContent = {
    listen: {
        title: 'Listen',
        content: `
            <h3>Japan Tour 2025</h3>
            <ul class="show-list">
                <li class="show-item">
                    <div class="show-date">28.11</div>
                    <div class="show-details">
                        <div class="show-city">Awaji Shima</div>
                        <div class="show-venue">Kominka Awa</div>
                    </div>
                </li>
                <li class="show-item">
                    <div class="show-date">29.11</div>
                    <div class="show-details">
                        <div class="show-city">Kobe</div>
                        <div class="show-venue">Space Eauuu</div>
                    </div>
                </li>
                <li class="show-item">
                    <div class="show-date">30.11</div>
                    <div class="show-details">
                        <div class="show-city">Kasai</div>
                        <div class="show-venue">Tobira Records</div>
                    </div>
                </li>
                <li class="show-item">
                    <div class="show-date">06.12</div>
                    <div class="show-details">
                        <div class="show-city">Tokyo</div>
                        <div class="show-venue">Ocha Soup</div>
                    </div>
                </li>
            </ul>
        `
    },
    shows: {
        title: 'Shows',
        content: `
            <h3>Upcoming Shows</h3>
            <p>Check back soon for upcoming show announcements.</p>
            <h3>Past Shows</h3>
            <p>Miyaxx has performed at venues across the globe, bringing their unique sound to audiences everywhere.</p>
        `
    },
    about: {
        title: 'About',
        content: `
            <p>Miyaxx is a band that pushes the boundaries of sound and creates immersive musical experiences.</p>
            <p>Follow us on our journey as we continue to explore new sonic territories.</p>
        `
    }
};

// Icon to image mapping
const iconImages = {
    listen: 'isolated datura.png',
    shows: 'isolated grass.png',
    about: 'isolated spiral calendula.png'
};

// State management
let currentState = 'home'; // 'home' or 'content'
let currentPage = null;

// DOM elements
const homeContainer = document.getElementById('home-container');
const contentContainer = document.getElementById('content-container');
const staticBg = document.getElementById('static-bg');
const largeIcon = document.getElementById('large-icon');
const pageContentEl = document.getElementById('page-content');
const logo = document.getElementById('logo');
const headerLogo = document.getElementById('header-logo');

// Home page icons
const daturaIcon = document.getElementById('datura-icon');
const grassIcon = document.getElementById('grass-icon');
const calendulaIcon = document.getElementById('calendula-icon');

// Nav icons
const navDatura = document.getElementById('nav-datura');
const navGrass = document.getElementById('nav-grass');
const navCalendula = document.getElementById('nav-calendula');

// Mobile tap reveal functionality
let tapTimeout = null;
const homeIcons = [daturaIcon, grassIcon, calendulaIcon];

homeIcons.forEach(icon => {
    icon.addEventListener('touchstart', (e) => {
        if (!icon.classList.contains('reveal')) {
            e.preventDefault();
            icon.classList.add('reveal');
            
            // Clear any existing timeout
            if (tapTimeout) clearTimeout(tapTimeout);
            
            // Remove reveal class after 3 seconds of inactivity
            tapTimeout = setTimeout(() => {
                icon.classList.remove('reveal');
            }, 3000);
        }
    });
    
    icon.addEventListener('click', (e) => {
        const page = icon.getAttribute('data-page');
        
        // On mobile, first click reveals, second click navigates
        if (window.innerWidth <= 768) {
            if (icon.classList.contains('reveal')) {
                navigateToPage(page);
            }
        } else {
            // Desktop: direct navigation
            navigateToPage(page);
        }
    });
});

// Nav icon click handlers
[navDatura, navGrass, navCalendula].forEach(navIcon => {
    navIcon.addEventListener('click', () => {
        const page = navIcon.getAttribute('data-page');
        loadPageContent(page);
    });
});

// Logo click handlers (return to home)
logo.addEventListener('click', navigateToHome);
headerLogo.addEventListener('click', navigateToHome);

// Navigate to a content page
function navigateToPage(page) {
    currentState = 'content';
    currentPage = page;
    
    // Hide home container
    homeContainer.classList.add('hidden');
    
    // Show static background
    staticBg.classList.add('active');
    
    // Show large icon overlay
    const iconImage = iconImages[page];
    largeIcon.style.backgroundImage = `url('${iconImage}')`;
    largeIcon.classList.add('active');
    
    // Load content
    loadPageContent(page);
    
    // Show content container
    setTimeout(() => {
        contentContainer.classList.add('active');
    }, 100);
}

// Navigate back to home
function navigateToHome() {
    currentState = 'home';
    currentPage = null;
    
    // Hide content container
    contentContainer.classList.remove('active');
    
    // Hide static background and large icon
    setTimeout(() => {
        staticBg.classList.remove('active');
        largeIcon.classList.remove('active');
        
        // Show home container
        homeContainer.classList.remove('hidden');
    }, 500);
}

// Load page content
function loadPageContent(page) {
    currentPage = page;
    const content = pageContent[page];
    
    if (content) {
        // Update large icon overlay if in content state
        if (currentState === 'content') {
            const iconImage = iconImages[page];
            largeIcon.style.backgroundImage = `url('${iconImage}')`;
        }
        
        pageContentEl.innerHTML = `
            <div class="content-section active">
                <h2>${content.title}</h2>
                ${content.content}
            </div>
        `;
    }
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Remove reveal class on resize to desktop
        if (window.innerWidth > 768) {
            homeIcons.forEach(icon => {
                icon.classList.remove('reveal');
            });
        }
    }, 250);
});

// Remove reveal class when clicking outside icons
document.addEventListener('click', (e) => {
    if (currentState === 'home' && window.innerWidth <= 768) {
        const clickedIcon = homeIcons.find(icon => icon.contains(e.target));
        if (!clickedIcon) {
            homeIcons.forEach(icon => {
                icon.classList.remove('reveal');
            });
        }
    }
});

// Prevent default touch behavior on icons to avoid double-tap zoom
homeIcons.forEach(icon => {
    icon.addEventListener('touchend', (e) => {
        e.preventDefault();
    }, { passive: false });
});

