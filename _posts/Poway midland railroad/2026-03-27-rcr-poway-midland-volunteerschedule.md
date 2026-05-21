---
layout: base
title: Volunteer Schedule
permalink: /volunteer-schedule
---

<script src="/assets/js/api/config.js"></script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --bg-base: #f0ebe2;
        --primary-dark: #000000;
        --primary-pure: #ffffff;
        --accent-wood: #4a3f35;
        --text-main: #1f1b17;
        --text-soft: #4a3f35;
        --border-light: #e2dbd0;
        --shadow-sm: 0 8px 20px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.05);
        --shadow-md: 0 12px 28px rgba(0, 0, 0, 0.06);
        --transition-default: all 0.2s ease;
        --green: #2d6a4f;
        --red: #c0392b;
        --gold: #000000;
    }

    body {
        background: var(--bg-base);
        font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        line-height: 1.4;
    }

    .page-content {
        max-width: none !important;
        padding: 0 !important;
        background: var(--bg-base) !important;
        padding-top: 0 !important;
    }

    .wrapper {
        max-width: none !important;
        padding: 0 !important;
    }

    .vol-page {
        background: var(--bg-base);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: inherit;
    }

    .vol-wrap {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 24px 28px 48px 28px;
        background: transparent;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .vol-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        background: transparent;
        padding: 0 0 8px 0;
        border-bottom: 2px solid var(--accent-wood);
        margin-bottom: 4px;
    }

    .vol-brand {
        display: flex;
        align-items: baseline;
        gap: 12px;
    }

    .vol-title h1 {
        font-size: 1.9rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #000000 !important;
        margin: 0;
        line-height: 1.2;
    }

    .vol-title p {
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        color: var(--accent-wood);
        margin-top: 6px;
    }

    .vol-back {
        background: var(--primary-pure);
        border: 1px solid var(--border-light);
        border-radius: 60px;
        padding: 8px 20px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.85rem;
        color: var(--accent-wood);
        transition: var(--transition-default);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        box-shadow: var(--shadow-sm);
    }

    .vol-back:hover {
        background: var(--accent-wood);
        color: white;
        border-color: var(--accent-wood);
        transform: translateY(-1px);
    }

    .stats-row {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 8px 0 4px 0;
        background: transparent;
    }

    .stat-card {
        background: var(--primary-pure);
        border-radius: 28px;
        padding: 18px 24px;
        flex: 1 1 180px;
        box-shadow: var(--shadow-sm);
        border: 1px solid var(--border-light);
        transition: var(--transition-default);
    }

    .stat-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }

    .stat-card .stat-label {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--accent-wood);
    }

    .stat-card .stat-number {
        font-size: 2.2rem;
        font-weight: 800;
        color: var(--primary-dark);
        line-height: 1.1;
        margin-top: 8px;
    }

    .stat-card .stat-sub {
        font-size: 0.7rem;
        color: var(--text-soft);
        margin-top: 6px;
        font-weight: 500;
    }

    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        padding: 4px 0;
    }

    .filter-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .filter-btn {
        background: var(--primary-pure);
        border: 1px solid var(--border-light);
        padding: 8px 18px;
        border-radius: 40px;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-main);
        cursor: pointer;
        transition: var(--transition-default);
        box-shadow: var(--shadow-sm);
    }

    .filter-btn.active {
        background: var(--accent-wood);
        border-color: var(--accent-wood);
        color: white;
        box-shadow: 0 2px 8px rgba(74, 63, 53, 0.2);
    }

    .filter-btn:hover:not(.active) {
        background: #f5efe8;
        border-color: var(--accent-wood);
        color: var(--accent-wood);
    }

    .search-box {
        display: flex;
        align-items: center;
        background: var(--primary-pure);
        border: 1px solid var(--border-light);
        border-radius: 48px;
        padding: 6px 16px;
        gap: 8px;
        box-shadow: var(--shadow-sm);
    }

    .search-box span {
        font-size: 0.9rem;
        opacity: 0.7;
    }

    .search-box input {
        border: none;
        background: transparent;
        padding: 8px 4px;
        font-size: 0.85rem;
        width: 180px;
        outline: none;
        color: var(--text-main);
        font-weight: 500;
    }

    .schedule-table-container {
        background: var(--primary-pure);
        border-radius: 28px;
        box-shadow: var(--shadow-md);
        overflow-x: auto;
        border: 1px solid var(--border-light);
    }

    .vol-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.85rem;
        min-width: 880px;
    }

    .vol-table th {
        text-align: left;
        padding: 18px 16px;
        background: #faf8f4;
        border-bottom: 1px solid var(--border-light);
        font-weight: 700;
        color: var(--accent-wood);
        font-size: 0.8rem;
        letter-spacing: 0.3px;
    }

    .vol-table td {
        padding: 18px 16px;
        border-bottom: 1px solid #ede6dd;
        vertical-align: middle;
        color: var(--text-main);
    }

    .vol-table tr:last-child td {
        border-bottom: none;
    }

    .vol-table tr:hover td {
        background-color: #fefcf9;
    }

    .date-cell {
        font-weight: 700;
        color: var(--primary-dark);
        white-space: nowrap;
    }

    .badge-event {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 60px;
        font-size: 0.75rem;
        font-weight: 600;
        white-space: nowrap;
        background: #f2ede6;
        color: var(--accent-wood);
        border: 1px solid #e2d9cf;
    }

    .time-slot {
        font-size: 0.75rem;
        color: var(--text-soft);
        margin-top: 4px;
    }

    .shift-count {
        font-size: 0.7rem;
        color: var(--text-soft);
        margin-top: 6px;
        line-height: 1.4;
    }

    .volunteer-buttons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    }

    .vol-btn {
        background: #f4f0ea;
        border: 1px solid var(--border-light);
        padding: 6px 14px;
        border-radius: 40px;
        font-size: 0.7rem;
        font-weight: 600;
        cursor: pointer;
        transition: 0.15s linear;
        color: var(--accent-wood);
    }

    .vol-btn.signup {
        background: var(--accent-wood);
        color: white;
        border-color: var(--accent-wood);
    }

    .vol-btn.signup:hover {
        background: #2c241e;
        transform: scale(0.97);
    }

    .vol-btn.cancel {
        background: #fff0ea;
        border-color: #d9cbbc;
        color: #8b5a3c;
    }

    .vol-btn.cancel:hover {
        background: #fae2d4;
    }

    .vol-status {
        font-size: 0.7rem;
        background: #f2ede6;
        display: inline-block;
        padding: 5px 12px;
        border-radius: 40px;
        color: var(--accent-wood);
        font-weight: 500;
        border: 1px solid #e2d9cf;
    }

    .slot-full {
        color: #b45a2b;
        font-weight: 600;
        font-size: 0.7rem;
        margin-top: 5px;
    }

    .volunteer-info {
        background: var(--primary-pure);
        border-radius: 28px;
        border: 1px solid var(--border-light);
        padding: 22px 28px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 28px;
        box-shadow: var(--shadow-sm);
    }

    .volunteer-info h4 {
        color: var(--primary-dark);
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 12px;
        letter-spacing: -0.2px;
    }

    .volunteer-info p {
        font-size: 0.8rem;
        color: #000000 !important;
        line-height: 1.5;
    }

    @media (max-width: 720px) {
        .vol-wrap {
            padding: 16px 20px 32px 20px;
        }
        .vol-title h1 {
            font-size: 1.5rem;
        }
        .stat-card {
            padding: 12px 18px;
        }
        .stat-card .stat-number {
            font-size: 1.8rem;
        }
    }
</style>

<div class="vol-page">
<div class="vol-wrap">
    <div class="vol-header">
        <div class="vol-brand">
            <div class="vol-title">
                <h1>Volunteer Crew Schedule</h1>
                <p>Poway–Midland Railroad · Operations Sign-up</p>
            </div>
        </div>
        <a href="{{ "/calendar" | relative_url }}" class="vol-back">← Back to Calendar</a>
    </div>

    <div class="stats-row" id="statsContainer">
        <div class="stat-card"><div class="stat-label">Total Shifts</div><div class="stat-number" id="totalShifts">—</div><div class="stat-sub">2026</div></div>
        <div class="stat-card"><div class="stat-label">Open Spots</div><div class="stat-number" id="openSpots">—</div><div class="stat-sub">volunteers needed</div></div>
        <div class="stat-card"><div class="stat-label">Signed Up</div><div class="stat-number" id="signedUpCount">—</div><div class="stat-sub">crew members</div></div>
        <div class="stat-card"><div class="stat-label">Steam Saturdays</div><div class="stat-number" id="steamCount">—</div><div class="stat-sub">locomotive days</div></div>
    </div>

    <div class="filters">
        <div class="filter-buttons">
            <button class="filter-btn active" data-filter="all">All shifts</button>
            <button class="filter-btn" data-filter="steam">🔥 Steam</button>
            <button class="filter-btn" data-filter="cable">🚋 Cable Car</button>
            <button class="filter-btn" data-filter="speeder">🚃 Speeder</button>
            <button class="filter-btn" data-filter="open">🟢 Open spots</button>
            <button class="filter-btn" data-filter="my">⭐ My sign-ups</button>
        </div>
        <div class="search-box">
            <span>🔍</span>
            <input type="text" id="searchInput" placeholder="Search by date or event" autocomplete="off">
        </div>
    </div>

    <div class="schedule-table-container">
        <table class="vol-table" id="volTable">
            <thead>
                <tr><th>Date & Day</th><th>Operation Type</th><th>Time</th><th>Volunteer Slots (max 4)</th><th>Actions</th></tr>
            </thead>
            <tbody id="tableBody"></tbody>
        </table>
    </div>

    <div class="volunteer-info">
        <div>
            <h4>📋 Volunteer guidelines</h4>
            <p>• Each shift needs 2–4 volunteers (conductors, ticket takers, safety).<br>
            • Sign up at least 48h in advance. Arrive 30 min before operation.<br>
            • Contact railroad ops for training: (858) 486-4063.</p>
        </div>
        <div>
            <h4>👨‍✈️ Crew coordinator</h4>
            <p>Volunteer desk: oldpoway.volunteer@poway.org<br>📍 Old Poway Park – 14134 Midland Rd</p>
        </div>
    </div>
</div>
</div>

<script type="module">
import pythonURI from "/assets/js/api/config.module.js";
const BACKEND = window.pythonURI;

let currentUserEmail = null;
let currentUserName = null;
let allShifts = [];
let currentFilter = "all";
let searchQuery = "";

// 获取当前登录用户 - 只使用 API，无模拟数据
async function getCurrentUser() {
    // 尝试从 localStorage 读取（如果登录时保存了）
    const savedEmail = localStorage.getItem('user_email');
    const savedName = localStorage.getItem('user_name');
    
    if (savedEmail && savedName) {
        currentUserEmail = savedEmail;
        currentUserName = savedName;
        console.log('Using localStorage user:', currentUserEmail);
        return true;
    }
    
    // 尝试 API 端点
    const endpoints = ['/api/user', '/api/id', '/api/auth/status', '/api/me'];
    
    for (const endpoint of endpoints) {
        try {
            const res = await fetch(`${BACKEND}${endpoint}`, { 
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            });
            
            if (res.ok) {
                const data = await res.json();
                console.log(`Response from ${endpoint}:`, data);
                
                let user = null;
                if (Array.isArray(data) && data.length > 0) {
                    user = data[0];
                } else if (data && typeof data === 'object') {
                    user = data;
                }
                
                if (user) {
                    currentUserEmail = user.uid || user.email || user.id;
                    currentUserName = user.name || user.username || currentUserEmail;
                    if (currentUserEmail) {
                        console.log(`Found user via ${endpoint}:`, currentUserEmail);
                        // 保存到 localStorage 供后续使用
                        localStorage.setItem('user_email', currentUserEmail);
                        localStorage.setItem('user_name', currentUserName);
                        return true;
                    }
                }
            }
        } catch(e) {
            console.log(`${endpoint} failed:`, e);
        }
    }
    
    console.log('No valid user endpoint found, user not logged in');
    return false;
}

// 从后端加载班次数据 - 无模拟数据回退
async function loadShifts() {
    try {
        const res = await fetch(`${BACKEND}/api/volunteer/shifts`, { 
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        
        allShifts = await res.json();
        console.log('Loaded API shifts:', allShifts.length);
        
for (let shift of allShifts) {
    if (!shift.volunteers) shift.volunteers = [];
    if (!shift.max_volunteers) shift.max_volunteers = 4;
}
        return true;
    } catch(e) {
        console.error('Failed to load shifts from API:', e);
        // 显示错误信息，不使用模拟数据
        const tbody = document.getElementById('tableBody');
        if (tbody) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:48px;color:var(--red);">
                ❌ Failed to load shifts from server.<br>
                Please check your connection and try again.<br>
                <small>${e.message}</small>
            </td></tr>`;
        }
        return false;
    }
}

// 报名
async function signUpForShift(shiftId) {
    const shift = allShifts.find(s => s.id == shiftId);
    if (!shift) return false;
    
    if (!currentUserEmail) {
        alert('Please log in to sign up for shifts.');
        return false;
    }
    
    try {
        const res = await fetch(`${BACKEND}/api/volunteer/shifts/${shiftId}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ 
                name: currentUserName,
                email: currentUserEmail,
                job: 'Volunteer'
            })
        });
        
        if (!res.ok) {
            const error = await res.json();
            console.error('Signup failed:', error);
            alert(error.error || 'Unable to sign up. Shift may be full or you already signed.');
            return false;
        }
        alert('✓ Successfully signed up!');
        return true;
    } catch(e) {
        console.error('Signup error:', e);
        alert('Network error. Please try again.');
        return false;
    }
}

// 取消报名
async function cancelSignUp(shiftId) {
    const shift = allShifts.find(s => s.id == shiftId);
    if (!shift) return false;
    
    if (!currentUserEmail) {
        alert('Please log in to cancel sign-ups.');
        return false;
    }
    
    try {
        const res = await fetch(`${BACKEND}/api/volunteer/shifts/${shiftId}/signup`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email: currentUserEmail })
        });
        
        if (!res.ok) {
            const error = await res.json();
            alert(error.error || 'Failed to cancel sign-up.');
            return false;
        }
        alert('✓ Successfully cancelled sign-up!');
        return true;
    } catch(e) {
        console.error('Cancel error:', e);
        alert('Network error. Please try again.');
        return false;
    }
}

function isUserSignedUp(shift) {
    if (!currentUserEmail) return false;
    
    if (shift.volunteers && Array.isArray(shift.volunteers)) {
        return shift.volunteers.some(v => v.email === currentUserEmail);
    }
    return false;
}

function getVolunteerCount(shift) {
    if (shift.current_volunteers !== undefined) {
        return shift.current_volunteers;
    }
    if (shift.volunteers && Array.isArray(shift.volunteers)) {
        return shift.volunteers.length;
    }
    return 0;
}

function getFilteredShifts() {
    let filtered = [...allShifts];
    
    if (currentFilter === 'steam') filtered = filtered.filter(s => s.train_type === 'steam');
    else if (currentFilter === 'cable') filtered = filtered.filter(s => s.train_type === 'cable');
    else if (currentFilter === 'speeder') filtered = filtered.filter(s => s.train_type === 'speeder');
    else if (currentFilter === 'open') filtered = filtered.filter(s => getVolunteerCount(s) < s.max_volunteers);
    else if (currentFilter === 'my') filtered = filtered.filter(s => isUserSignedUp(s));
    
    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(s => s.date.includes(q) || s.train_type.includes(q));
    }
    
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    return filtered;
}

function updateStats() {
    const total = allShifts.length;
    let openSpots = 0, totalSigned = 0;
    const steamDays = allShifts.filter(s => s.train_type === 'steam').length;
    
    for (let s of allShifts) {
        const taken = getVolunteerCount(s);
        openSpots += Math.max(0, s.max_volunteers - taken);
        totalSigned += taken;
    }
    
    const totalShiftsEl = document.getElementById('totalShifts');
    const openSpotsEl = document.getElementById('openSpots');
    const signedUpCountEl = document.getElementById('signedUpCount');
    const steamCountEl = document.getElementById('steamCount');
    
    if (totalShiftsEl) totalShiftsEl.innerText = total;
    if (openSpotsEl) openSpotsEl.innerText = openSpots;
    if (signedUpCountEl) signedUpCountEl.innerText = totalSigned;
    if (steamCountEl) steamCountEl.innerText = steamDays;
}

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}<br><span style="font-size:0.7rem;">${days[d.getDay()]}</span>`;
}

function getTrainLabel(type) {
    const icons = { steam: '🔥 ', cable: '🚋 ', speeder: '🚃 ' };
    const labels = { steam: 'Steam Locomotive', cable: 'Cable Car', speeder: 'Speeder' };
    return `${icons[type] || ''}${labels[type] || type}`;
}

async function renderTable() {
    const success = await loadShifts();
    if (!success) return;
    
    const filtered = getFilteredShifts();
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:48px;">✨ No shifts available. Please check back later. ✨</td></tr>`;
        updateStats();
        return;
    }
    
    for (let shift of filtered) {
        const taken = getVolunteerCount(shift);
        const isFull = taken >= shift.max_volunteers;
        const isSigned = isUserSignedUp(shift);
        const volunteersList = shift.volunteers?.map(v => v.name || v.email.split('@')[0]).join(', ') || '— no volunteers yet';
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="date-cell">${formatDate(shift.date)}</td>
            <td><span class="badge-event">${getTrainLabel(shift.train_type)}</span></td>
            <td>${shift.time_start} - ${shift.time_end}</td>
            <td>
                <div><strong>${taken}/${shift.max_volunteers} slots filled</strong></div>
                <div class="shift-count">👥 ${volunteersList}</div>
                ${isFull ? '<div class="slot-full">⚠️ Shift full</div>' : `<div style="margin-top:4px;">✅ ${shift.max_volunteers - taken} spot(s) open</div>`}
            </td>
            <td class="volunteer-buttons">
                ${!currentUserEmail ? '<span class="vol-status">🔐 <a href="/login" style="color: var(--accent-wood);">Login</a> to sign up</span>' : ''}
                ${(currentUserEmail && !isSigned && !isFull) ? `<button class="vol-btn signup" data-id="${shift.id}">➕ Sign up</button>` : ''}
                ${(currentUserEmail && isSigned) ? `<button class="vol-btn cancel" data-id="${shift.id}">✖ Cancel</button>` : ''}
                ${isSigned ? '<span class="vol-status">✓ Signed</span>' : (isFull ? '<span class="vol-status">🔒 Full</span>' : (currentUserEmail ? '<span class="vol-status">Open</span>' : ''))}
            </td>
        `;
        tbody.appendChild(tr);
    }
    
    // 绑定报名按钮事件
    document.querySelectorAll('.vol-btn.signup').forEach(button => {
        button.addEventListener('click', async (e) => {
            const id = parseInt(button.getAttribute('data-id'));
            const success = await signUpForShift(id);
            if (success) {
                await renderTable();
            }
        });
    });
    
    // 绑定取消按钮事件
    document.querySelectorAll('.vol-btn.cancel').forEach(button => {
        button.addEventListener('click', async (e) => {
            const id = parseInt(button.getAttribute('data-id'));
            const success = await cancelSignUp(id);
            if (success) {
                await renderTable();
            }
        });
    });
    
    updateStats();
}

function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderTable();
        });
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', e => {
            searchQuery = e.target.value;
            renderTable();
        });
    }
}

async function init() {
    // 获取用户登录状态
    await getCurrentUser();
    
    // 加载并显示班次
    await renderTable();
    
    // 初始化筛选器
    initFilters();
}

// 启动应用
init();
</script>
</body>
</html>