---
layout: base
title: Volunteer Schedule
permalink: /volunteer-schedule
---

<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --rust: #000000;
    --gold: #333333;
    --green: #000000;
    --coal: #ffffff;
    --iron: #ffffff;
    --iron2: #f5f5f5;
    --steam: #000000;
    --smoke: #666666;
    --light-bg: #ffffff;
    --white: #ffffff;
    --border: #cccccc;
    --text: #000000;
    --subtext: #666666;
    --steam-bg: #f0f0f0;
    --cable-bg: #f0f0f0;
    --speeder-bg: #f0f0f0;
    --none-bg: #f3f4f6;
}

  body { background: #ffffff; }
  .page-content { max-width: none !important; padding: 0 !important; background: #ffffff; padding-top: 54px !important;
 }
  .wrapper { max-width: none !important; padding: 0 !important; }

  .vol-page {
    background: var(--coal);
    min-height: 100vh;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    color: var(--text);
    display: flex;
    flex-direction: column;
  }
    .vol-wrap {
      width: 100%;
      min-height: 100vh;
      margin: 0;
      padding: 0;
      background: var(--light-bg);
      display: flex;
      flex-direction: column;
      overflow: visible;
    }

    /* header */
    .vol-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      padding: 16px 20px;
      background: #ffffff;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }
    .vol-brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .vol-title h1 {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text);
      letter-spacing: -0.2px;
    }
.vol-title p {
  font-size: 0.75rem;
  color: #000000 !important;  
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 2px;
}
    .vol-back {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 8px 16px;
      text-decoration: none;
      color: var(--text);
      font-weight: 600;
      font-size: 13px;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .vol-back:hover { background: #f5f5f5; }

    .stats-row { display: flex; flex-wrap: wrap; gap: 12px; padding: 12px 20px; background: #ffffff; border-bottom: 1px solid var(--border); flex-shrink: 0; }
    .stat-card { background: #f9f9f9; border-radius: 8px; padding: 12px 16px; flex: 0 0 auto; border: 1px solid var(--border); }
    .stat-card .stat-label { font-size: 0.65rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; color: var(--subtext); }
    .stat-card .stat-number { font-size: 1.6rem; font-weight: 800; color: var(--text); line-height: 1.1; margin-top: 4px; }
    .stat-card .stat-sub { font-size: 0.7rem; color: var(--subtext); margin-top: 4px; }

    .filters { display: flex; flex-wrap: wrap; gap: 10px; padding: 12px 20px; background: #ffffff; border-bottom: 1px solid var(--border); align-items: center; justify-content: space-between; flex-shrink: 0; }
    .filter-buttons { display: flex; flex-wrap: wrap; gap: 6px; }
    .filter-btn { background: var(--white); border: 1px solid var(--border); padding: 6px 14px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; color: var(--text); cursor: pointer; transition: all 0.2s; }
    .filter-btn.active { background: var(--rust); border-color: var(--rust); color: white; }
    .filter-btn:hover:not(.active) { background: #f5f5f5; border-color: var(--text); }
    .search-box { display: flex; align-items: center; background: var(--white); border: 1px solid var(--border); border-radius: 6px; padding: 4px 10px; gap: 6px; }
    .search-box input { border: none; background: transparent; padding: 6px 4px; font-size: 0.8rem; width: 160px; outline: none; color: var(--text); }

    .schedule-table-container { background: var(--white); border: 1px solid var(--border); overflow-x: auto; flex: 1; overflow-y: auto; }
    .vol-table { width: 100%; border-collapse: collapse; font-size: 0.8rem; min-width: 800px; }
    .vol-table th { text-align: left; padding: 12px 12px; background: #f5f5f5; border-bottom: 1px solid var(--border); font-weight: 700; color: var(--text); font-size: 0.75rem; letter-spacing: 0.3px; }
    .vol-table td { padding: 12px 12px; border-bottom: 1px solid var(--border); vertical-align: middle; }
    .date-cell { font-weight: 700; color: var(--text); white-space: nowrap; }
    .badge-event { display: inline-block; padding: 4px 10px; border-radius: 4px; font-size: 0.7rem; font-weight: 600; white-space: nowrap; border: 1px solid var(--border); }
    .badge-steam { background: #f0f0f0; color: var(--text); }
    .badge-cable { background: #f0f0f0; color: var(--text); }
    .badge-speeder { background: #f0f0f0; color: var(--text); }
    .badge-none { background: #f3f4f6; color: var(--subtext); }
    .time-slot { font-size: 0.7rem; color: var(--subtext); margin-top: 3px; }
    .volunteer-buttons { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
    .vol-btn { background: #f5f5f5; border: 1px solid var(--border); padding: 5px 10px; border-radius: 4px; font-size: 0.7rem; font-weight: 600; cursor: pointer; transition: 0.1s linear; color: var(--text); }
    .vol-btn.signup { background: var(--text); color: white; border-color: var(--text); }
    .vol-btn.signup:hover { background: #333333; }
    .vol-btn.cancel { background: #f5f5f5; }
    .vol-btn.cancel:hover { background: #e8e8e8; }
    .vol-status { font-size: 0.65rem; background: #f0f0f0; display: inline-block; padding: 3px 8px; border-radius: 3px; color: var(--text); border: 1px solid var(--border); }
    .slot-full { color: #d97706; font-weight: 500; font-size: 0.7rem; }
    .shift-count { font-size: 0.7rem; color: var(--subtext); }
    .volunteer-info { background: #f9f9f9; border: 1px solid var(--border); padding: 16px 20px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; flex-shrink: 0; border-top: 1px solid var(--border); }
    .volunteer-info h4 { color: var(--text); font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
    .volunteer-info p { font-size: 0.75rem; color: var(--subtext); line-height: 1.5; }
    @media(max-width:680px){}

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
    <div class="stat-card"><div class="stat-label">Total Shifts</div><div class="stat-number" id="totalShifts">—</div><div class="stat-sub">Mar–May 2026</div></div>
    <div class="stat-card"><div class="stat-label">Open Spots</div><div class="stat-number" id="openSpots">—</div><div class="stat-sub">volunteers needed</div></div>
    <div class="stat-card"><div class="stat-label">Signed Up</div><div class="stat-number" id="signedUpCount">—</div><div class="stat-sub">crew members</div></div>
    <div class="stat-card"><div class="stat-label">Steam Saturdays</div><div class="stat-number" id="steamCount">—</div><div class="stat-sub">locomotive days</div></div>
  </div>

  <div class="filters">
    <div class="filter-buttons">
      <button class="filter-btn active" data-filter="all">All shifts</button>
      <button class="filter-btn" data-filter="steam"> Steam</button>
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
  const RR_SCHEDULE = {
    '2026-3-7':'steam','2026-3-8':'none','2026-3-14':'steam','2026-3-15':'cable',
    '2026-3-21':'steam','2026-3-22':'speeder','2026-3-28':'steam','2026-3-29':'cable',
    '2026-4-4':'steam','2026-4-5':'cable','2026-4-11':'steam','2026-4-12':'none',
    '2026-4-18':'steam','2026-4-19':'cable','2026-4-25':'steam','2026-4-26':'speeder',
    '2026-5-2':'steam','2026-5-3':'cable','2026-5-9':'steam','2026-5-10':'none',
    '2026-5-16':'steam','2026-5-17':'cable','2026-5-23':'steam','2026-5-24':'speeder',
    '2026-5-30':'steam','2026-5-31':'cable',
  };
  function getEventForDate(y,m,d){const key=`${y}-${m+1}-${d}`;if(RR_SCHEDULE[key])return RR_SCHEDULE[key];const dow=new Date(y,m,d).getDay();if(dow===6)return 'steam';return null;}
  const startDate=new Date(2026,2,1),endDate=new Date(2026,4,31),allOps=[];
  let current=new Date(startDate);
  while(current<=endDate){
    const y=current.getFullYear(),m=current.getMonth(),d=current.getDate();
    const eventType=getEventForDate(y,m,d);
    if(eventType&&eventType!=='none'){
      let timeRange='',displayLabel='';
      if(eventType==='steam'){displayLabel='Steam Locomotive';timeRange='10:00am – 2:00pm';}
      if(eventType==='cable'){displayLabel='Cable Car';timeRange='11:00am – 2:00pm';}
      if(eventType==='speeder'){displayLabel='Speeder w/ Ore Cars';timeRange='11:00am – 2:00pm';}
      const weekdayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const dateObj=new Date(y,m,d);
      const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
      const formattedDate=`${months[m]} ${d}, ${y}`;
      const isoDate=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      allOps.push({id:isoDate,year:y,month:m,day:d,dateDisplay:formattedDate,weekday:weekdayNames[dateObj.getDay()],eventType,eventLabel:displayLabel,timeRange,iso:isoDate,slotsTotal:4,volunteers:[]});
    }
    current.setDate(current.getDate()+1);
  }
  let volunteerData={};
  let currentUser="CrewMember_"+(Math.floor(Math.random()*900)+100);
  function loadVolunteerData(){
    const stored=localStorage.getItem("PMRR_Volunteers");
    if(stored){try{volunteerData=JSON.parse(stored);}catch(e){volunteerData={};}}
    else{volunteerData={'2026-3-7':['Tom R.','Linda S.'],'2026-3-15':['Greg M.'],'2026-3-22':['Sarah K.','David L.'],'2026-4-4':['Emily W.'],'2026-4-19':['James C.','Robert N.'],'2026-5-2':['Anna P.'],'2026-5-24':['Mike D.','Chris T.','Olivia B.']};}
    for(let op of allOps){if(!volunteerData[op.iso])volunteerData[op.iso]=[];}
    saveVolunteerData();
  }
  function saveVolunteerData(){localStorage.setItem("PMRR_Volunteers",JSON.stringify(volunteerData));}
  function isUserSignedUp(iso){return(volunteerData[iso]||[]).includes(currentUser);}
  function signUpForShift(iso){if(!volunteerData[iso])volunteerData[iso]=[];const slots=volunteerData[iso];const shiftObj=allOps.find(op=>op.iso===iso);if(!shiftObj)return false;if(slots.length>=shiftObj.slotsTotal)return false;if(slots.includes(currentUser))return false;slots.push(currentUser);saveVolunteerData();return true;}
  function cancelSignUp(iso){if(!volunteerData[iso])return false;const idx=volunteerData[iso].indexOf(currentUser);if(idx!==-1){volunteerData[iso].splice(idx,1);saveVolunteerData();return true;}return false;}
  let currentFilter="all",searchQuery="";
  function getFilteredOps(){
    let filtered=[...allOps];
    if(currentFilter==='steam')filtered=filtered.filter(op=>op.eventType==='steam');
    else if(currentFilter==='cable')filtered=filtered.filter(op=>op.eventType==='cable');
    else if(currentFilter==='speeder')filtered=filtered.filter(op=>op.eventType==='speeder');
    else if(currentFilter==='open')filtered=filtered.filter(op=>(volunteerData[op.iso]?.length||0)<op.slotsTotal);
    else if(currentFilter==='my')filtered=filtered.filter(op=>isUserSignedUp(op.iso));
    if(searchQuery.trim()!==""){const q=searchQuery.toLowerCase();filtered=filtered.filter(op=>op.dateDisplay.toLowerCase().includes(q)||op.eventLabel.toLowerCase().includes(q)||op.weekday.toLowerCase().includes(q));}
    filtered.sort((a,b)=>new Date(a.iso)-new Date(b.iso));
    return filtered;
  }
  function updateStats(){
    const totalShifts=allOps.length;let openSpotsCount=0,totalSigned=0;
    const steamDays=allOps.filter(op=>op.eventType==='steam').length;
    for(let op of allOps){const taken=volunteerData[op.iso]?.length||0;openSpotsCount+=Math.max(0,op.slotsTotal-taken);totalSigned+=taken;}
    document.getElementById('totalShifts').innerText=totalShifts;
    document.getElementById('openSpots').innerText=openSpotsCount;
    document.getElementById('signedUpCount').innerText=totalSigned;
    document.getElementById('steamCount').innerText=steamDays;
  }
  function renderTable(){
    const filtered=getFilteredOps();const tbody=document.getElementById('tableBody');tbody.innerHTML='';
    if(filtered.length===0){const tr=document.createElement('tr');tr.innerHTML=`<td colspan="5" style="text-align:center;padding:40px;color:var(--subtext);">No shifts match the filter.</td>`;tbody.appendChild(tr);updateStats();return;}
    for(let op of filtered){
      const volunteersList=volunteerData[op.iso]||[];const takenCount=volunteersList.length;const slotsLeft=op.slotsTotal-takenCount;const isSigned=isUserSignedUp(op.iso);const isFull=takenCount>=op.slotsTotal;
      const badgeClass=`badge-${op.eventType}`;
      let eventIcon='';if(op.eventType==='steam')eventIcon=' ';else if(op.eventType==='cable')eventIcon='🚋 ';else eventIcon='🚃 ';
      const volunteersDisplay=volunteersList.length>0?volunteersList.join(', '):'— no volunteers yet';
      const tr=document.createElement('tr');
      tr.innerHTML=`<td class="date-cell">${op.dateDisplay}<br><span style="font-size:0.7rem;color:var(--subtext);">${op.weekday}</span></td><td><span class="badge-event ${badgeClass}">${eventIcon}${op.eventLabel}</span></td><td>${op.timeRange}</td><td><div><strong>${takenCount}/${op.slotsTotal} slots filled</strong></div><div class="shift-count" style="margin-top:4px;">👥 ${volunteersDisplay}</div>${isFull?'<div class="slot-full">⚠️ Shift full</div>':`<div style="color:#4caf82;font-size:0.7rem;">${slotsLeft} spot(s) open</div>`}</td><td class="volunteer-buttons">${!isSigned&&!isFull?`<button class="vol-btn signup" data-iso="${op.iso}">➕ Sign up</button>`:''} ${isSigned?`<button class="vol-btn cancel" data-iso="${op.iso}">✖ Cancel</button>`:''} ${isSigned?`<span class="vol-status">✓ Signed</span>`:(isFull?`<span class="vol-status" style="background:rgba(185,74,28,0.2);color:#fb923c;">🔒 Full</span>`:`<span class="vol-status">Open</span>`)}</td>`;
      tbody.appendChild(tr);
    }
    document.querySelectorAll('.vol-btn.signup').forEach(btn=>{btn.addEventListener('click',e=>{e.stopPropagation();const iso=btn.getAttribute('data-iso');if(signUpForShift(iso)){renderTable();updateStats();}else{alert('Unable to sign up.');renderTable();}});});
    document.querySelectorAll('.vol-btn.cancel').forEach(btn=>{btn.addEventListener('click',e=>{e.stopPropagation();cancelSignUp(btn.getAttribute('data-iso'));renderTable();updateStats();});});
    updateStats();
  }
  function initFilters(){
    document.querySelectorAll('.filter-btn').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentFilter=btn.getAttribute('data-filter');renderTable();});});
    document.getElementById('searchInput').addEventListener('input',e=>{searchQuery=e.target.value;renderTable();});
  }
  loadVolunteerData();renderTable();initFilters();updateStats();
</script>