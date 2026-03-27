// script.js - Updated with India, Chhattisgarh & World Important Days

(function() {
    'use strict';
    
    console.log('📱 Mobile App Initialized with Fixed Header:', new Date().toLocaleString());
    
    // ========== CONFIGURATION ==========
    const APP_VERSION = '2.2.0';
    const UPDATE_INTERVAL = 30 * 60 * 1000; // 30 minutes
    
    // ========== IMPORTANT DAYS DATASET ==========
    // Includes India, Chhattisgarh & World Important Days (No duplicates)
    const importantDays = [
        // ========== JANUARY ==========
        // 1 January
        { month: 1, day: 1, event: "New Year Day (विश्व)" },
        
        // 9 January
        { month: 1, day: 9, event: "Pravasi Bharatiya Divas (भारत)" },
        
        // 12 January
        { month: 1, day: 12, event: "National Youth Day - Swami Vivekananda Jayanti (भारत)" },
        
        // 15 January
        { month: 1, day: 15, event: "Indian Army Day (भारत)" },
        
        // 23 January
        { month: 1, day: 23, event: "Netaji Subhash Chandra Bose Jayanti (भारत)" },
        
        // 24 January
        { month: 1, day: 24, event: "National Girl Child Day (भारत)" },
        
        // 25 January
        { month: 1, day: 25, event: "National Voters Day (भारत)" },
        
        // 26 January
        { month: 1, day: 26, event: "Republic Day (भारत)" },
        
        // 30 January
        { month: 1, day: 30, event: "Martyrs' Day - Shaheed Diwas (भारत)" },
        
        
        // ========== FEBRUARY ==========
        // 4 February
        { month: 2, day: 4, event: "World Cancer Day (विश्व)" },
        
        // 11 February
        { month: 2, day: 11, event: "International Day of Women and Girls in Science (विश्व)" },
        
        // 14 February
        { month: 2, day: 14, event: "Valentine's Day (विश्व)" },
        
        // 21 February
        { month: 2, day: 21, event: "International Mother Language Day (विश्व)" },
        
        // 28 February
        { month: 2, day: 28, event: "National Science Day (भारत)" },
        
        
        // ========== MARCH ==========
        // 8 March
        { month: 3, day: 8, event: "International Women's Day (विश्व)" },
        
        // 15 March
        { month: 3, day: 15, event: "World Consumer Rights Day (विश्व)" },
         { month: 3, day: 15, event: "Bhakt Mata Karma Jayanti" },
// 17 March
        { month: 3, day: 17, event: "Just checking that working or not" },
// 20 March
        { month: 3, day: 20, event: "Eid al-Fitr" },
        // 21 March
{ month: 3, day: 21, event: "Eid al-Fitr" },
        { month: 3, day: 21, event: "International Day of Forests (विश्व)" },
        
        // 22 March
        { month: 3, day: 22, event: "World Water Day (विश्व)" },
        
        // 23 March
        { month: 3, day: 23, event: "Shaheed Diwas - Bhagat Singh, Rajguru, Sukhdev (भारत)" },

  // 26 March
        { month: 3, day: 26, event: "Ram Navami (भारत)" },   
   { month: 3, day: 27, event: "Ram Navami (भारत)" },
// 31 March
{ month: 3, day: 31, event: "Mahaveer Jayanti (भारत)" },
        
        // ========== APRIL ==========
    // 3 April    
{ month: 4, day: 3, event: "Good Friday (विश्व)" },
// 5 April  
{ month: 4, day: 5, event: "Easter day(विश्व)" },
// 7 April
        { month: 4, day: 7, event: "World Health Day (विश्व)" },
        
        // 14 April
        { month: 4, day: 14, event: "Dr. B. R. Ambedkar Jayanti (भारत)" },
        
        // 18 April
        { month: 4, day: 18, event: "World Heritage Day (विश्व)" },
        
        // 22 April
        { month: 4, day: 22, event: "Earth Day (विश्व)" },
        
        // 24 April
        { month: 4, day: 24, event: "National Panchayati Raj Day (भारत)" },
        
        
        // ========== MAY ==========
        // 1 May
        { month: 5, day: 1, event: "International Labour Day (विश्व)" },
        { month: 5, day: 1, event: "Buddha Purnima" },
        // 3 May
        { month: 5, day: 3, event: "World Press Freedom Day (विश्व)" },
        
        // 8 May
        { month: 5, day: 8, event: "World Red Cross Day (विश्व)" },

        // 9 May
        { month: 5, day: 9, event: "Rabindranath Tagore Jayanti " },
        // 11 May
        { month: 5, day: 11, event: "National Technology Day (भारत)" },
        
        // 15 May
        { month: 5, day: 15, event: "International Day of Families (विश्व)" },
        
        // 31 May
        { month: 5, day: 31, event: "World No Tobacco Day (विश्व)" },
        
        
        // ========== JUNE ==========
        // 5 June
        { month: 6, day: 5, event: "World Environment Day (विश्व)" },
        
        // 14 June
        { month: 6, day: 14, event: "World Blood Donor Day (विश्व)" },
        
        // 21 June
        { month: 6, day: 21, event: "International Yoga Day (विश्व)" },
        
        // 23 June
        { month: 6, day: 23, event: "United Nations Public Service Day (विश्व)" },
        
        
        // ========== JULY ==========
        // 1 July
        { month: 7, day: 1, event: "National Doctors' Day (भारत)" },
        
        // 11 July
        { month: 7, day: 11, event: "World Population Day (विश्व)" },
        
        // 26 July
        { month: 7, day: 26, event: "Kargil Vijay Diwas (भारत)" },
        
        
        // ========== AUGUST ==========
        // 6 August
        { month: 8, day: 6, event: "Hiroshima Day (विश्व)" },
        
        // 9 August
        { month: 8, day: 9, event: "Quit India Movement Day (भारत)" },
        
        // 12 August
        { month: 8, day: 12, event: "International Youth Day (विश्व)" },
        
        // 15 August
        { month: 8, day: 15, event: "Independence Day (भारत)" },
        
        // 29 August
        { month: 8, day: 29, event: "National Sports Day - Major Dhyan Chand (भारत)" },
        
        
        // ========== SEPTEMBER ==========
        // 5 September
        { month: 9, day: 5, event: "Teachers' Day (भारत)" },
        
        // 8 September
        { month: 9, day: 8, event: "International Literacy Day (विश्व)" },
        
        // 14 September
        { month: 9, day: 14, event: "Hindi Diwas (भारत)" },
        
        // 16 September
        { month: 9, day: 16, event: "World Ozone Day (विश्व)" },
        
        // 27 September
        { month: 9, day: 27, event: "World Tourism Day (विश्व)" },
        
        
        // ========== OCTOBER ==========
        // 2 October
        { month: 10, day: 2, event: "Gandhi Jayanti & International Day of Non-Violence (भारत/विश्व)" },
        
        // 5 October
        { month: 10, day: 5, event: "World Teachers' Day (विश्व)" },
        
        // 10 October
        { month: 10, day: 10, event: "World Mental Health Day (विश्व)" },
        
        // 16 October
        { month: 10, day: 16, event: "World Food Day (विश्व)" },
        
        // 31 October
        { month: 10, day: 31, event: "National Unity Day - Sardar Patel (भारत)" },
        
        
        // ========== NOVEMBER ==========
        // 1 November
        { month: 11, day: 1, event: "Chhattisgarh State Foundation Day (छत्तीसगढ़)" },
        
        // 7 November
        { month: 11, day: 7, event: "National Cancer Awareness Day (भारत)" },
        
        // 11 November
        { month: 11, day: 11, event: "National Education Day (भारत)" },
        
        // 14 November
        { month: 11, day: 14, event: "Children's Day - Jawaharlal Nehru (भारत)" },
        
        // 19 November
        { month: 11, day: 19, event: "World Toilet Day (विश्व)" },
        
        // 26 November
        { month: 11, day: 26, event: "Constitution Day (भारत)" },
        
        
        // ========== DECEMBER ==========
        // 1 December
        { month: 12, day: 1, event: "World AIDS Day (विश्व)" },
        
        // 4 December
        { month: 12, day: 4, event: "Indian Navy Day (भारत)" },
        
        // 10 December
        { month: 12, day: 10, event: "Human Rights Day (विश्व)" },
        
        // 14 December
        { month: 12, day: 14, event: "National Energy Conservation Day (भारत)" },
        
        // 25 December
        { month: 12, day: 25, event: "Christmas Day (विश्व)" }
    ];

    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    // ========== AUTO-UPDATE FUNCTIONS ==========
    
    // Force cache clear on app start
    function clearAllCaches() {
        console.log('🧹 Clearing all caches...');
        
        if ('caches' in window) {
            caches.keys().then(keys => {
                keys.forEach(key => {
                    caches.delete(key);
                    console.log('   ✓ Deleted:', key);
                });
            });
        }
        
        sessionStorage.clear();
        
        const keysToRemove = ['lastUpdate', 'cachedEvents', 'lastVisitDate'];
        keysToRemove.forEach(key => localStorage.removeItem(key));
        
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(registrations => {
                registrations.forEach(reg => reg.unregister());
            });
        }
    }
    
    // Check if date changed
    function isNewDay() {
        const lastVisit = localStorage.getItem('lastVisitDate');
        const today = new Date().toDateString();
        return lastVisit !== today;
    }
    
    // Update last visit date
    function updateLastVisit() {
        localStorage.setItem('lastVisitDate', new Date().toDateString());
    }
    
    // Show last update time
    function updateTimestamp() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        
        const updateEl = document.getElementById('updateTimeDisplay');
        if (updateEl) {
            updateEl.innerHTML = `⏰ Last update: ${timeStr}`;
        }
        
        const versionEl = document.getElementById('versionInfo');
        if (versionEl) {
            versionEl.innerHTML = `App v${APP_VERSION} · ${now.toLocaleDateString()}`;
        }
    }
    
    // Pull to refresh - Modified for fixed header
    function setupPullToRefresh() {
        const ptrIndicator = document.getElementById('ptrIndicator');
        let touchStart = 0;
        let pulling = false;
        
        document.addEventListener('touchstart', (e) => {
            // Check if we're at the top of the scrollable content
            const container = document.querySelector('.notification-container');
            if (container && container.scrollTop <= 0) {
                touchStart = e.touches[0].clientY;
                pulling = true;
            }
        });
        
        document.addEventListener('touchmove', (e) => {
            if (!pulling) return;
            const touchY = e.touches[0].clientY;
            const diff = touchY - touchStart;
            
            if (diff > 60) {
                ptrIndicator.classList.add('show');
            }
        });
        
        document.addEventListener('touchend', () => {
            if (ptrIndicator.classList.contains('show')) {
                ptrIndicator.classList.remove('show');
                refreshApp();
            }
            pulling = false;
        });
    }
    
    // Main refresh function
    function refreshApp() {
        console.log('🔄 Refreshing app data...');
        clearAllCaches();
        updateTimestamp();
        renderMainForDate(currentMonth, currentDay);
        
        const statusEl = document.getElementById('refreshStatus');
        if (statusEl) {
            statusEl.innerHTML = '✓ Updated just now';
            statusEl.style.color = '#4CAF50';
            setTimeout(() => {
                statusEl.innerHTML = '';
            }, 3000);
        }
    }
    
    // Check for updates periodically
    function startAutoUpdate() {
        // Check every 30 minutes
        setInterval(() => {
            console.log('⏰ Auto-update check at:', new Date().toLocaleTimeString());
            
            if (isNewDay()) {
                console.log('📅 New day detected! Refreshing...');
                refreshApp();
                updateLastVisit();
            } else {
                // Still refresh data every interval
                renderMainForDate(currentMonth, currentDay);
                updateTimestamp();
            }
        }, UPDATE_INTERVAL);
        
        // Also check when app becomes active
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                console.log('👁️ App became active');
                if (isNewDay()) {
                    refreshApp();
                    updateLastVisit();
                } else {
                    renderMainForDate(currentMonth, currentDay);
                    updateTimestamp();
                }
            }
        });
    }
    
    // ========== UI RENDERING FUNCTIONS ==========
    
    const today = new Date();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    // UI elements
    const bodyEl = document.body;
    const darkToggle = document.getElementById('darkToggle');
    const menuToggle = document.getElementById('menuToggle');
    const drawer = document.getElementById('dateDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const closeDrawer = document.getElementById('closeDrawer');
    const monthGrid = document.getElementById('monthGrid');
    const selectedMonthLabel = document.getElementById('selectedMonthLabel');
    const dayChipsContainer = document.getElementById('dayChipsContainer');
    const jumpBtn = document.getElementById('jumpToDateBtn');
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    const eventCountBadge = document.getElementById('eventCountBadge');
    const todayGreeting = document.getElementById('todayGreeting');
    const footerDate = document.getElementById('footerDate');
    const eventsContainer = document.getElementById('eventsContainer');

    // state for drawer
    let selectedMonth = currentMonth;
    let selectedDay = currentDay;

    function renderMainForDate(month, day) {
        const filtered = importantDays.filter(item => item.month === month && item.day === day);
        const monthName = monthNames[month-1];

        currentDateDisplay.innerHTML = `${day} <small>${monthName.substring(0,3).toUpperCase()}</small>`;
        todayGreeting.innerHTML = `🔔 ${day} ${monthName} special notifications`;
        footerDate.innerHTML = `showing events for <strong>${monthName} ${day}</strong>`;

        if (filtered.length === 0) {
            eventsContainer.innerHTML = `<div class="empty-state">✨ No important days on ${monthName} ${day} ✨</div>`;
            eventCountBadge.innerText = '0 events';
        } else {
            let cards = '';
            filtered.forEach(ev => {
                // Determine emoji based on category
                let emoji = '📌';
                if (ev.event.includes('भारत')) emoji = '🇮🇳';
                if (ev.event.includes('छत्तीसगढ़')) emoji = '🎯';
                if (ev.event.includes('विश्व')) emoji = '🌍';
                
                cards += `
                    <div class="event-card">
                        <div class="event-icon">${emoji}</div>
                        <div class="event-content">
                            <div class="event-title">${ev.event}</div>
                            <div class="event-meta">
                                <span>📅 ${monthNames[ev.month-1]} ${ev.day}</span>
                                <span>🔔 ${ev.event.includes('भारत') ? '🇮🇳' : ev.event.includes('छत्तीसगढ़') ? '🎯' : '🌍'}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            eventsContainer.innerHTML = cards;
            eventCountBadge.innerText = `${filtered.length} event${filtered.length > 1 ? 's' : ''}`;
        }
        
        updateTimestamp();
    }

    function buildMonthGrid() {
        monthGrid.innerHTML = '';
        monthNames.forEach((name, idx) => {
            const m = idx+1;
            const btn = document.createElement('div');
            btn.className = 'month-item';
            btn.innerText = name.substring(0,3);
            btn.dataset.month = m;
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.month-item').forEach(el => el.classList.remove('selected'));
                btn.classList.add('selected');
                selectedMonth = m;
                selectedMonthLabel.innerText = name + ' · choose day';
                buildDayChips(m);
            });
            monthGrid.appendChild(btn);
        });
    }

    function buildDayChips(month) {
        const daysInMonth = [...new Set(importantDays.filter(item => item.month === month).map(item => item.day))].sort((a,b) => a-b);
        dayChipsContainer.innerHTML = '';
        if (daysInMonth.length === 0) {
            dayChipsContainer.innerHTML = '<div style="color:var(--text-soft);">No important days this month</div>';
            return;
        }
        daysInMonth.forEach(d => {
            const chip = document.createElement('span');
            chip.className = 'day-chip' + (d === selectedDay ? ' selected' : '');
            chip.innerText = d;
            chip.addEventListener('click', () => {
                document.querySelectorAll('.day-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');
                selectedDay = d;
            });
            dayChipsContainer.appendChild(chip);
        });
    }

    function openDrawer() {
        selectedMonth = currentMonth;
        selectedDay = currentDay;
        buildMonthGrid();
        selectedMonthLabel.innerText = monthNames[selectedMonth-1] + ' · choose day';
        buildDayChips(selectedMonth);
        
        setTimeout(() => {
            document.querySelectorAll('.month-item').forEach(el => {
                if (Number(el.dataset.month) === selectedMonth) el.classList.add('selected');
            });
            buildDayChips(selectedMonth);
        }, 10);
        drawer.classList.add('open');
        overlay.classList.add('active');
    }

    function closeDrawerFunc() {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
    }

    // ========== EVENT LISTENERS ==========
    
    jumpBtn.addEventListener('click', () => {
        currentMonth = selectedMonth;
        currentDay = selectedDay;
        renderMainForDate(currentMonth, currentDay);
        closeDrawerFunc();
    });

    darkToggle.addEventListener('click', () => {
        bodyEl.classList.toggle('dark');
        darkToggle.innerText = bodyEl.classList.contains('dark') ? '☀️' : '🌙';
    });

    menuToggle.addEventListener('click', openDrawer);
    closeDrawer.addEventListener('click', closeDrawerFunc);
    overlay.addEventListener('click', closeDrawerFunc);

    // ========== INITIALIZATION ==========
    
    // Clear caches on start
    clearAllCaches();
    
    // Check if new day
    if (isNewDay()) {
        console.log('✨ New day! Fresh data loaded');
        updateLastVisit();
    }
    
    // Initial render
    renderMainForDate(currentMonth, currentDay);
    
    // Setup auto-update
    startAutoUpdate();
    
    // Setup pull to refresh
    setupPullToRefresh();
    
    // Update timestamp immediately
    updateTimestamp();
    
    // Close drawer initially
    closeDrawerFunc();
    
    console.log('✅ App ready. Version:', APP_VERSION);
    console.log('📊 Total Important Days:', importantDays.length);
})();


// Agar app WebView mein convert kiya hai to:
function sendLocalNotification(title, message) {
    // Android bridge
    if (window.Android) {
        Android.showNotification(title, message);
    }
    // iOS bridge
    if (window.webkit && window.webkit.messageHandlers) {
        window.webkit.messageHandlers.notification.postMessage({
            title: title,
            message: message
        });
    }
}

// Daily check
function checkForNotification() {
    const now = new Date();
    const events = importantDays.filter(d => 
        d.month === now.getMonth() + 1 && 
        d.day === now.getDate()
    );
    
    if (events.length > 0) {
        sendLocalNotification(
            "📅 Today's Important Days",
            `${events.length} event${events.length > 1 ? 's' : ''} today!`
        );
    }
}

// Check at 8 AM
const now = new Date();
const eightAM = new Date(now);
eightAM.setHours(8, 0, 0, 0);

if (now > eightAM) {
    eightAM.setDate(eightAM.getDate() + 1);
}

const timeUntilEight = eightAM - now;
setTimeout(() => {
    checkForNotification();
    setInterval(checkForNotification, 24 * 60 * 60 * 1000);
}, timeUntilEight);


// Add to script.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registered');
            
            // Request notification permission
            Notification.requestPermission().then(function(permission) {
                if (permission === 'granted') {
                    console.log('Notification permission granted');
                    
                    // Subscribe to push
                    registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: 'YOUR_PUBLIC_KEY'
                    });
                }
            });
        });
    });
}