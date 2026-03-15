// script.js - Mobile App Version with Auto-Update

(function() {
    'use strict';
    
    console.log('📱 Mobile App Initialized:', new Date().toLocaleString());
    
    // ========== AUTO-UPDATE CONFIGURATION ==========
    const APP_VERSION = '2.0.0';
    const UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutes (for testing)
    // const UPDATE_INTERVAL = 30 * 60 * 1000; // 30 minutes (production)
    
    // ========== IMPORTANT DAYS DATASET ==========
    const importantDays = [
        // JANUARY
{ month: 1, day: 1, event: "Happy New Year" },
        { month: 1, day: 1, event: "Global Family Day" },
        { month: 1, day: 1, event: "New Year's Day" },
        { month: 1, day: 4, event: "World Braille Day" },
        { month: 1, day: 11, event: "National Human Trafficking Awareness Day (US)" },
        { month: 1, day: 11, event: "Death anniversary of Lal Bahadur Shastri" },
        { month: 1, day: 12, event: "National Youth Day (Birthday of Swami Vivekananda)" },
        { month: 1, day: 15, event: "Army Day (India)" },
        { month: 1, day: 24, event: "National Girl Child Day (India)" },
        { month: 1, day: 25, event: "National Tourism Day (India)" },
        { month: 1, day: 25, event: "National Voters' Day (India)" },
        { month: 1, day: 26, event: "Republic Day (India)" },
        { month: 1, day: 26, event: "International Customs Day" },
        { month: 1, day: 26, event: "Beating Retreat rehearsal starts" },
        { month: 1, day: 30, event: "Martyrs' Day (Mahatma Gandhi's Death Anniversary)" },
        { month: 1, day: 30, event: "World Leprosy Eradication Day" },
        
        // FEBRUARY
        { month: 2, day: 4, event: "World Cancer Day" },
        { month: 2, day: 6, event: "International Day of Zero Tolerance to Female Genital Mutilation" },
        { month: 2, day: 10, event: "National Deworming Day (India)" },
        { month: 2, day: 11, event: "International Day of Women and Girls in Science" },
        { month: 2, day: 13, event: "World Radio Day" },
        { month: 2, day: 14, event: "Valentine's Day" },
        { month: 2, day: 14, event: "International Book Giving Day" },
        { month: 2, day: 20, event: "World Day of Social Justice" },
        { month: 2, day: 21, event: "International Mother Language Day" },
        { month: 2, day: 28, event: "National Science Day (India)" },
        
        // MARCH
        { month: 3, day: 3, event: "World Wildlife Day" },
        { month: 3, day: 3, event: "World Hearing Day" },
        { month: 3, day: 4, event: "National Safety Day (India)" },
        { month: 3, day: 8, event: "International Women's Day" },
        { month: 3, day: 9, event: "CISF Raising Day (India)" },
        { month: 3, day: 15, event: "World Consumer Rights Day" },
        { month: 3, day: 15, event: "International Day Against Police Brutality" },
        { month: 3, day: 15, event: "Bhakt Mata Karma Jayanti" },
{ month: 3, day: 16, event: "First day of visiting School gld (India)" },
        { month: 3, day: 18, event: "Ordnance Factories Day (India)" },
        { month: 3, day: 20, event: "International Day of Happiness" },
        { month: 3, day: 21, event: "World Forestry Day" },
        { month: 3, day: 21, event: "World Down Syndrome Day" },
        { month: 3, day: 21, event: "World Poetry Day" },
        { month: 3, day: 22, event: "World Water Day" },
        { month: 3, day: 23, event: "World Meteorological Day" },
        { month: 3, day: 23, event: "Shaheed Diwas (Bhagat Singh, Rajguru, Sukhdev)" },
        { month: 3, day: 24, event: "World Tuberculosis (TB) Day" },
        
        // APRIL

        { month: 4, day: 1, event: "April Fools' Day" },
        { month: 4, day: 1, event: "Odisha Foundation Day (Utkala Dibasa)" },
        { month: 4, day: 2, event: "World Autism Awareness Day" },
        { month: 4, day: 5, event: "National Maritime Day (India)" },
        { month: 4, day: 7, event: "World Health Day" },
        { month: 4, day: 10, event: "World Homoeopathy Day" },
        { month: 4, day: 14, event: "Dr. B.R. Ambedkar Remembrance Day (Ambedkar Jayanti)" },
        { month: 4, day: 17, event: "World Haemophilia Day" },
        { month: 4, day: 18, event: "World Heritage Day" },
        { month: 4, day: 21, event: "Civil Services Day (India)" },
        { month: 4, day: 22, event: "Earth Day" },
        { month: 4, day: 23, event: "World Book and Copyright Day" },
        { month: 4, day: 24, event: "National Panchayati Raj Day" },
        { month: 4, day: 25, event: "World Malaria Day" },
        { month: 4, day: 26, event: "World Intellectual Property Day" },
        
        // MAY
        { month: 5, day: 1, event: "International Labour Day" },
        { month: 5, day: 1, event: "Maharashtra Day" },
        { month: 5, day: 1, event: "Gujarat Day" },
        { month: 5, day: 3, event: "Press Freedom Day" },
        { month: 5, day: 3, event: "World Asthma Day" },
        { month: 5, day: 4, event: "Coal Miners Day" },
        { month: 5, day: 8, event: "World Red Cross Day" },
        { month: 5, day: 11, event: "National Technology Day (India)" },
        { month: 5, day: 12, event: "International Nurses Day" },
        { month: 5, day: 15, event: "International Day of Families" },
        { month: 5, day: 17, event: "World Telecommunication Day" },
        { month: 5, day: 17, event: "World Hypertension Day" },
        { month: 5, day: 20, event: "National Anti-Terrorism Day (India)" },
        { month: 5, day: 21, event: "National Anti-Terrorism Day (India)" },
        { month: 5, day: 21, event: "Armed Forces Day (US)" },
        { month: 5, day: 22, event: "International Day for Biological Diversity" },
        { month: 5, day: 31, event: "World No Tobacco Day" },
        { month: 5, day: 31, event: "National Memorial Day (US)" },
        
        // JUNE
        { month: 6, day: 1, event: "Global Day of Parents" },
        { month: 6, day: 4, event: "International Day of Innocent Children Victims of Aggression" },
        { month: 6, day: 5, event: "World Environment Day" },
        { month: 6, day: 7, event: "World Food Safety Day" },
        { month: 6, day: 8, event: "World Brain Tumor Day" },
        { month: 6, day: 8, event: "World Oceans Day" },
        { month: 6, day: 12, event: "World Day Against Child Labour" },
        { month: 6, day: 14, event: "World Blood Donor Day" },
        { month: 6, day: 15, event: "World Elder Abuse Awareness Day" },
        { month: 6, day: 16, event: "Martyrdom of Guru Arjan Dev" },
        { month: 6, day: 17, event: "World Day to Combat Desertification and Drought" },
        { month: 6, day: 18, event: "Autistic Pride Day" },
        { month: 6, day: 19, event: "World Sickle Cell Awareness Day" },
        { month: 6, day: 20, event: "World Refugee Day" },
        { month: 6, day: 21, event: "International Day of Yoga" },
        { month: 6, day: 21, event: "World Music Day" },
        { month: 6, day: 23, event: "International Olympic Day" },
        { month: 6, day: 23, event: "United Nations Public Service Day" },
        { month: 6, day: 26, event: "International Day Against Drug Abuse and Illicit Trafficking" },
        { month: 6, day: 29, event: "National Statistics Day (India)" },
        
        // JULY
        { month: 7, day: 1, event: "National Doctor's Day (India)" },
        { month: 7, day: 1, event: "Chartered Accountants Day (India)" },
        { month: 7, day: 2, event: "World UFO Day" },
        { month: 7, day: 6, event: "World Zoonoses Day" },
        { month: 7, day: 11, event: "World Population Day" },
        { month: 7, day: 12, event: "International Day of Combating Sand and Dust Storms" },
        { month: 7, day: 12, event: "Malala Day" },
        { month: 7, day: 15, event: "World Youth Skills Day" },
        { month: 7, day: 17, event: "International Justice Day" },
        { month: 7, day: 18, event: "Nelson Mandela International Day" },
        { month: 7, day: 26, event: "Kargil Vijay Diwas (India)" },
        { month: 7, day: 28, event: "World Hepatitis Day" },
        { month: 7, day: 29, event: "International Tiger Day" },
        { month: 7, day: 31, event: "World Ranger Day" },
        
        // AUGUST
        { month: 8, day: 1, event: "World Breastfeeding Week Begins" },
        { month: 8, day: 3, event: "International Friendship Day" },
        { month: 8, day: 6, event: "Hiroshima Day" },
        { month: 8, day: 7, event: "National Handloom Day (India)" },
        { month: 8, day: 8, event: "Quit India Movement Day" },
        { month: 8, day: 9, event: "Nagasaki Day" },
        { month: 8, day: 9, event: "International Day of the World's Indigenous Peoples" },
        { month: 8, day: 12, event: "International Youth Day" },
        { month: 8, day: 13, event: "International Lefthanders Day" },
        { month: 8, day: 15, event: "Independence Day (India)" },
        { month: 8, day: 19, event: "World Photography Day" },
        { month: 8, day: 19, event: "World Humanitarian Day" },
        { month: 8, day: 20, event: "Sadbhavana Diwas (India)" },
        { month: 8, day: 23, event: "International Day for the Remembrance of the Slave Trade and its Abolition" },
        { month: 8, day: 29, event: "National Sports Day (India) (Birthday of Dhyan Chand)" },
        
        // SEPTEMBER
        { month: 9, day: 2, event: "World Coconut Day" },
        { month: 9, day: 5, event: "Teachers' Day (India) (Birthday of Dr. S. Radhakrishnan)" },
        { month: 9, day: 5, event: "International Day of Charity" },
        { month: 9, day: 7, event: "International Day of Clean Air for Blue Skies" },
        { month: 9, day: 8, event: "International Literacy Day" },
        { month: 9, day: 14, event: "Hindi Diwas (India)" },
        { month: 9, day: 15, event: "International Day of Democracy" },
        { month: 9, day: 15, event: "Engineer's Day (India)" },
        { month: 9, day: 16, event: "World Ozone Day" },
        { month: 9, day: 17, event: "World Patient Safety Day" },
        { month: 9, day: 19, event: "International Talk Like a Pirate Day" },
        { month: 9, day: 21, event: "International Day of Peace" },
        { month: 9, day: 21, event: "World Alzheimer's Day" },
        { month: 9, day: 22, event: "World Rose Day (Cancer Awareness)" },
        { month: 9, day: 23, event: "International Day of Sign Languages" },
        { month: 9, day: 26, event: "World Contraception Day" },
        { month: 9, day: 27, event: "World Tourism Day" },
        { month: 9, day: 28, event: "World Rabies Day" },
        { month: 9, day: 29, event: "World Heart Day" },
        { month: 9, day: 30, event: "International Translation Day" },
        
        // OCTOBER
        { month: 10, day: 1, event: "International Day for the Elderly" },
        { month: 10, day: 1, event: "International Coffee Day" },
        { month: 10, day: 2, event: "Gandhi Jayanti" },
        { month: 10, day: 2, event: "International Day of Non-Violence" },
        { month: 10, day: 3, event: "World Habitat Day" },
        { month: 10, day: 4, event: "World Animal Day" },
        { month: 10, day: 5, event: "World Teachers' Day" },
        { month: 10, day: 8, event: "Indian Air Force Day" },
        { month: 10, day: 9, event: "World Postal Day" },
        { month: 10, day: 10, event: "World Mental Health Day" },
        { month: 10, day: 11, event: "International Day of the Girl Child" },
        { month: 10, day: 13, event: "International Day for Disaster Reduction" },
        { month: 10, day: 14, event: "World Standards Day" },
        { month: 10, day: 15, event: "Global Handwashing Day" },
        { month: 10, day: 15, event: "World Students' Day (Dr. A.P.J. Abdul Kalam's Birthday)" },
        { month: 10, day: 15, event: "International Day of Rural Women" },
        { month: 10, day: 16, event: "World Food Day" },
        { month: 10, day: 17, event: "International Day for the Eradication of Poverty" },
        { month: 10, day: 20, event: "World Statistics Day (every 5 years)" },
        { month: 10, day: 20, event: "National Solidarity Day (India)" },
        { month: 10, day: 24, event: "United Nations Day" },
        { month: 10, day: 24, event: "World Development Information Day" },
        { month: 10, day: 27, event: "World Day for Audiovisual Heritage" },
        { month: 10, day: 30, event: "World Thrift Day" },
        { month: 10, day: 31, event: "National Unity Day (India) (Birthday of Sardar Vallabhbhai Patel)" },
        { month: 10, day: 31, event: "Halloween" },
        
        // NOVEMBER
        { month: 11, day: 1, event: "World Vegan Day" },
        { month: 11, day: 1, event: "Rajyotsava Day (Karnataka Formation Day)" },
        { month: 11, day: 7, event: "National Cancer Awareness Day (India)" },
        { month: 11, day: 7, event: "Infant Protection Day" },
        { month: 11, day: 8, event: "World Urbanism Day" },
        { month: 11, day: 8, event: "International Day of Radiology" },
        { month: 11, day: 9, event: "Legal Services Day (India)" },
        { month: 11, day: 10, event: "World Science Day for Peace and Development" },
        { month: 11, day: 11, event: "National Education Day (India)" },
        { month: 11, day: 12, event: "World Pneumonia Day" },
        { month: 11, day: 13, event: "World Kindness Day" },
        { month: 11, day: 14, event: "Children's Day (India) (Birthday of Jawaharlal Nehru)" },
        { month: 11, day: 14, event: "World Diabetes Day" },
        { month: 11, day: 16, event: "International Day for Tolerance" },
        { month: 11, day: 17, event: "National Epilepsy Day (India)" },
        { month: 11, day: 19, event: "World Toilet Day" },
        { month: 11, day: 19, event: "International Men's Day" },
        { month: 11, day: 20, event: "Universal Children's Day" },
        { month: 11, day: 20, event: "Africa Industrialization Day" },
        { month: 11, day: 21, event: "World Television Day" },
        { month: 11, day: 21, event: "World Fisheries Day" },
        { month: 11, day: 21, event: "World Hello Day" },
        { month: 11, day: 25, event: "International Day for the Elimination of Violence against Women" },
        { month: 11, day: 26, event: "National Law Day (Constitution Day) (India)" },
        { month: 11, day: 29, event: "International Day of Solidarity with the Palestinian People" },
        
        // DECEMBER
        { month: 12, day: 1, event: "World AIDS Day" },
        { month: 12, day: 2, event: "World Computer Literacy Day" },
        { month: 12, day: 2, event: "International Day for the Abolition of Slavery" },
        { month: 12, day: 3, event: "International Day of Persons with Disabilities" },
        { month: 12, day: 4, event: "Indian Navy Day" },
        { month: 12, day: 5, event: "International Volunteer Day" },
        { month: 12, day: 5, event: "World Soil Day" },
        { month: 12, day: 7, event: "International Civil Aviation Day" },
        { month: 12, day: 7, event: "Armed Forces Flag Day (India)" },
        { month: 12, day: 9, event: "International Anti-Corruption Day" },
        { month: 12, day: 10, event: "Human Rights Day" },
        { month: 12, day: 11, event: "International Mountain Day" },
        { month: 12, day: 11, event: "UNICEF Day" },
        { month: 12, day: 14, event: "National Energy Conservation Day (India)" },
        { month: 12, day: 16, event: "Vijay Diwas (India)" },
        { month: 12, day: 16, event: "Day of Reconciliation (South Africa)" },
{ month: 12, day: 18, event: "GURU GHASIDAS JAYANTI" },
        { month: 12, day: 18, event: "Minorities Rights Day (India)" },
        { month: 12, day: 18, event: "International Migrants Day" },
        { month: 12, day: 19, event: "Goa Liberation Day (India)" },
        { month: 12, day: 20, event: "International Human Solidarity Day" },
        { month: 12, day: 22, event: "National Mathematics Day (India) (Birthday of Srinivasa Ramanujan)" },
        { month: 12, day: 23, event: "National Farmers Day (Kisan Diwas) (India)" },
        { month: 12, day: 24, event: "National Consumer Rights Day (India)" },
        { month: 12, day: 25, event: "Christmas Day" },
        { month: 12, day: 25, event: "Good Governance Day (India)" }
    ];

    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    // ========== AUTO-UPDATE FUNCTIONS ==========
    
    // Force cache clear on app start
    function clearAllCaches() {
        console.log('🧹 Clearing all caches...');
        
        // Clear browser cache storage
        if ('caches' in window) {
            caches.keys().then(keys => {
                keys.forEach(key => {
                    caches.delete(key);
                    console.log('   ✓ Deleted:', key);
                });
            });
        }
        
        // Clear storages
        sessionStorage.clear();
        
        // Clear specific app data
        const keysToRemove = ['lastUpdate', 'cachedEvents', 'lastVisitDate'];
        keysToRemove.forEach(key => localStorage.removeItem(key));
        
        // Clear service worker caches
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
        
        // Also update version info
        const versionEl = document.getElementById('versionInfo');
        if (versionEl) {
            versionEl.innerHTML = `App v${APP_VERSION} · ${now.toLocaleDateString()}`;
        }
    }
    
    // Pull to refresh simulation
    let touchStart = 0;
    function setupPullToRefresh() {
        const ptrIndicator = document.getElementById('ptrIndicator');
        let pulling = false;
        
        document.addEventListener('touchstart', (e) => {
            if (window.scrollY === 0) {
                touchStart = e.touches[0].clientY;
                pulling = true;
            }
        });
        
        document.addEventListener('touchmove', (e) => {
            if (!pulling) return;
            const touchY = e.touches[0].clientY;
            const diff = touchY - touchStart;
            
            if (diff > 60 && window.scrollY === 0) {
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
        
        // Clear caches
        clearAllCaches();
        
        // Update timestamp
        updateTimestamp();
        
        // Reload current date events
        renderMainForDate(currentMonth, currentDay);
        
        // Show refresh status
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
        // Check every 5 minutes (adjust as needed)
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
            eventsContainer.innerHTML = `<div class="empty-state">✨ no important days on ${monthName} ${day} ✨</div>`;
            eventCountBadge.innerText = '0 events';
        } else {
            let cards = '';
            filtered.forEach(ev => {
                cards += `
                    <div class="event-card">
                        <div class="event-icon">📌</div>
                        <div class="event-content">
                            <div class="event-title">${ev.event}</div>
                            <div class="event-meta">
                                <span>📅 ${monthNames[ev.month-1]} ${ev.day}</span>
                                <span>🔔 daily</span>
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
            dayChipsContainer.innerHTML = '<div style="color:var(--text-soft);">no days</div>';
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
})();