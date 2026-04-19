---
layout: opencs
title: Volunteer Schedule
permalink: /volunteer-schedule
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Poway-Midland Railroad · Volunteer Crew</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-base: #f0ebe2;       /* warm sand/paper background */
            --primary-dark: #000000;   /* pure black for high contrast accents */
            --primary-pure: #ffffff;   /* white for cards, elevated surfaces */
            --accent-wood: #4a3f35;    /* warm brown for buttons, headers, special elements */
            --text-main: #1f1b17;      /* slightly softened black for readability */
            --text-soft: #4a3f35;      /* brownish tone for secondary text */
            --border-light: #e2dbd0;
            --shadow-sm: 0 8px 20px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.05);
            --shadow-md: 0 12px 28px rgba(0, 0, 0, 0.06);
            --transition-default: all 0.2s ease;
        }

        body {
            background: var(--bg-base);
            font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            line-height: 1.4;
        }

        /* Override jekyll theme if any */
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

        /* header area – refined */
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
            color: var(--primary-dark);
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

        /* stats cards — warm & clean */
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

        /* filters row – refined */
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

        .search-box input::placeholder {
            color: var(--text-soft);
            font-weight: 400;
        }

        /* table container – elegant card */
        .schedule-table-container {
            background: var(--primary-pure);
            border-radius: 28px;
            box-shadow: var(--shadow-md);
            overflow-x: auto;
            border: 1px solid var(--border-light);
            backdrop-filter: blur(0px);
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

        .badge-steam {
            background: #e7dfd5;
            color: #2c241e;
        }
        .badge-cable {
            background: #e7dfd5;
            color: #2c241e;
        }
        .badge-speeder {
            background: #e7dfd5;
            color: #2c241e;
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

        /* info footer */
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
            color: var(--text-soft);
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
</head>
<body>
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
        <div class="stat-card"><div class="stat-label">Total Shifts</div><div class="stat-number" id="totalShifts">—</div><div class="stat-sub">Mar–May 2026</div></div>
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

<script>
    // ---------- SCHEDULE DATA (same core but refined display) ----------
    const RR_SCHEDULE = {
        '2026-3-7':'steam','2026-3-8':'none','2026-3-14':'steam','2026-3-15':'cable',
        '2026-3-21':'steam','2026-3-22':'speeder','2026-3-28':'steam','2026-3-29':'cable',
        '2026-4-4':'steam','2026-4-5':'cable','2026-4-11':'steam','2026-4-12':'none',
        '2026-4-18':'steam','2026-4-19':'cable','2026-4-25':'steam','2026-4-26':'speeder',
        '2026-5-2':'steam','2026-5-3':'cable','2026-5-9':'steam','2026-5-10':'none',
        '2026-5-16':'steam','2026-5-17':'cable','2026-5-23':'steam','2026-5-24':'speeder',
        '2026-5-30':'steam','2026-5-31':'cable',
    };
    function getEventForDate(y,m,d){
        const key = `${y}-${m+1}-${d}`;
        if(RR_SCHEDULE[key]) return RR_SCHEDULE[key];
        const dow = new Date(y,m,d).getDay();
        if(dow === 6) return 'steam';
        return null;
    }

    const startDate = new Date(2026,2,1);
    const endDate = new Date(2026,4,31);
    let allOps = [];
    let current = new Date(startDate);
    while(current <= endDate){
        const y = current.getFullYear(), m = current.getMonth(), d = current.getDate();
        const eventType = getEventForDate(y,m,d);
        if(eventType && eventType !== 'none'){
            let timeRange = '', displayLabel = '';
            if(eventType === 'steam'){ displayLabel = 'Steam Locomotive'; timeRange = '10:00am – 2:00pm'; }
            if(eventType === 'cable'){ displayLabel = 'Cable Car'; timeRange = '11:00am – 2:00pm'; }
            if(eventType === 'speeder'){ displayLabel = 'Speeder w/ Ore Cars'; timeRange = '11:00am – 2:00pm'; }
            const weekdayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            const dateObj = new Date(y,m,d);
            const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            const formattedDate = `${months[m]} ${d}, ${y}`;
            const isoDate = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            allOps.push({
                id: isoDate,
                year: y, month: m, day: d,
                dateDisplay: formattedDate,
                weekday: weekdayNames[dateObj.getDay()],
                eventType,
                eventLabel: displayLabel,
                timeRange,
                iso: isoDate,
                slotsTotal: 4,
                volunteers: []
            });
        }
        current.setDate(current.getDate() + 1);
    }

    let volunteerData = {};
    let currentUser = "CrewMember_" + (Math.floor(Math.random() * 900) + 100);

    function loadVolunteerData(){
        const stored = localStorage.getItem("PMRR_Volunteers");
        if(stored){
            try { volunteerData = JSON.parse(stored); } catch(e) { volunteerData = {}; }
        } else {
            volunteerData = {
                '2026-3-7':['Tom R.','Linda S.'],
                '2026-3-15':['Greg M.'],
                '2026-3-22':['Sarah K.','David L.'],
                '2026-4-4':['Emily W.'],
                '2026-4-19':['James C.','Robert N.'],
                '2026-5-2':['Anna P.'],
                '2026-5-24':['Mike D.','Chris T.','Olivia B.']
            };
        }
        for(let op of allOps){
            if(!volunteerData[op.iso]) volunteerData[op.iso] = [];
        }
        saveVolunteerData();
    }

    function saveVolunteerData(){
        localStorage.setItem("PMRR_Volunteers", JSON.stringify(volunteerData));
    }

    function isUserSignedUp(iso){
        return (volunteerData[iso] || []).includes(currentUser);
    }

    function signUpForShift(iso){
        if(!volunteerData[iso]) volunteerData[iso] = [];
        const slots = volunteerData[iso];
        const shiftObj = allOps.find(op => op.iso === iso);
        if(!shiftObj) return false;
        if(slots.length >= shiftObj.slotsTotal) return false;
        if(slots.includes(currentUser)) return false;
        slots.push(currentUser);
        saveVolunteerData();
        return true;
    }

    function cancelSignUp(iso){
        if(!volunteerData[iso]) return false;
        const idx = volunteerData[iso].indexOf(currentUser);
        if(idx !== -1){
            volunteerData[iso].splice(idx,1);
            saveVolunteerData();
            return true;
        }
        return false;
    }

    let currentFilter = "all";
    let searchQuery = "";

    function getFilteredOps(){
        let filtered = [...allOps];
        if(currentFilter === 'steam') filtered = filtered.filter(op => op.eventType === 'steam');
        else if(currentFilter === 'cable') filtered = filtered.filter(op => op.eventType === 'cable');
        else if(currentFilter === 'speeder') filtered = filtered.filter(op => op.eventType === 'speeder');
        else if(currentFilter === 'open') filtered = filtered.filter(op => (volunteerData[op.iso]?.length || 0) < op.slotsTotal);
        else if(currentFilter === 'my') filtered = filtered.filter(op => isUserSignedUp(op.iso));
        
        if(searchQuery.trim() !== ""){
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(op => 
                op.dateDisplay.toLowerCase().includes(q) || 
                op.eventLabel.toLowerCase().includes(q) || 
                op.weekday.toLowerCase().includes(q)
            );
        }
        filtered.sort((a,b) => new Date(a.iso) - new Date(b.iso));
        return filtered;
    }

    function updateStats(){
        const totalShifts = allOps.length;
        let openSpotsCount = 0, totalSigned = 0;
        const steamDays = allOps.filter(op => op.eventType === 'steam').length;
        for(let op of allOps){
            const taken = volunteerData[op.iso]?.length || 0;
            openSpotsCount += Math.max(0, op.slotsTotal - taken);
            totalSigned += taken;
        }
        document.getElementById('totalShifts').innerText = totalShifts;
        document.getElementById('openSpots').innerText = openSpotsCount;
        document.getElementById('signedUpCount').innerText = totalSigned;
        document.getElementById('steamCount').innerText = steamDays;
    }

    function renderTable(){
        const filtered = getFilteredOps();
        const tbody = document.getElementById('tableBody');
        tbody.innerHTML = '';
        if(filtered.length === 0){
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="5" style="text-align:center;padding:48px;color:var(--text-soft);font-weight:500;">✨ No shifts match the current filter. Try adjusting search or filter.✨</td>`;
            tbody.appendChild(tr);
            updateStats();
            return;
        }

        for(let op of filtered){
            const volunteersList = volunteerData[op.iso] || [];
            const takenCount = volunteersList.length;
            const slotsLeft = op.slotsTotal - takenCount;
            const isSigned = isUserSignedUp(op.iso);
            const isFull = takenCount >= op.slotsTotal;
            const badgeClass = `badge-${op.eventType}`;
            let eventIcon = '';
            if(op.eventType === 'steam') eventIcon = '🔥 ';
            else if(op.eventType === 'cable') eventIcon = '🚋 ';
            else eventIcon = '🚃 ';
            
            const volunteersDisplay = volunteersList.length > 0 ? volunteersList.join(', ') : '— no volunteers yet';
            const tr = document.createElement('tr');
            
            // slot availability notice
            let slotStatusHtml = '';
            if(isFull){
                slotStatusHtml = `<div class="slot-full">⚠️ Shift full</div>`;
            } else {
                slotStatusHtml = `<div style="color:#4a3f35;font-size:0.7rem; font-weight:500; margin-top:4px;">✅ ${slotsLeft} spot(s) open</div>`;
            }
            
            tr.innerHTML = `
                <td class="date-cell">${op.dateDisplay}<br><span style="font-size:0.7rem;color:var(--text-soft);">${op.weekday}</span></td>
                <td><span class="badge-event ${badgeClass}">${eventIcon}${op.eventLabel}</span></td>
                <td>${op.timeRange}</td>
                <td>
                    <div><strong>${takenCount}/${op.slotsTotal} slots filled</strong></div>
                    <div class="shift-count">👥 ${volunteersDisplay}</div>
                    ${slotStatusHtml}
                </td>
                <td class="volunteer-buttons">
                    ${(!isSigned && !isFull) ? `<button class="vol-btn signup" data-iso="${op.iso}">➕ Sign up</button>` : ''}
                    ${isSigned ? `<button class="vol-btn cancel" data-iso="${op.iso}">✖ Cancel</button>` : ''}
                    ${isSigned ? `<span class="vol-status">✓ Signed</span>` : (isFull ? `<span class="vol-status" style="background:#f2e1d4;color:#b45a2b;">🔒 Full</span>` : `<span class="vol-status">Open</span>`)}
                </td>
            `;
            tbody.appendChild(tr);
        }

        // attach events dynamically
        document.querySelectorAll('.vol-btn.signup').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const iso = btn.getAttribute('data-iso');
                if(signUpForShift(iso)){
                    renderTable();
                    updateStats();
                } else {
                    alert('Unable to sign up. Shift may be full or you already signed.');
                    renderTable();
                }
            });
        });
        document.querySelectorAll('.vol-btn.cancel').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const iso = btn.getAttribute('data-iso');
                cancelSignUp(iso);
                renderTable();
                updateStats();
            });
        });
        updateStats();
    }

    function initFilters(){
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.getAttribute('data-filter');
                renderTable();
            });
        });
        document.getElementById('searchInput').addEventListener('input', e => {
            searchQuery = e.target.value;
            renderTable();
        });
    }

    loadVolunteerData();
    renderTable();
    initFilters();
    updateStats();
</script>