---
layout: base
title: Railroad Operations Calendar
permalink: /railroad/calendar
---

<style>
  :root {
    --rust:#000000; --gold:#333333; --green:#000000;
    --coal:#ffffff;--iron:#ffffff;--iron2:#f5f5f5;
    --steam:#000000;--smoke:#666666;
    --border:#cccccc;
    --text:#000000; --subtext:#666666;
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

  .cal-page{background:var(--coal);min-height:100vh;font-family:'Georgia',serif;color:var(--steam);display:flex;flex-direction:column;}
  .cal-wrap{display:flex;flex-direction:column;min-height:100vh;margin:0;padding:0;}

  .cal-header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;padding:20px;background:var(--coal);border-bottom:1px solid var(--border);flex-shrink:0;}
  .cal-header-left{display:flex;align-items:center;gap:12px;}
  .cal-logo{font-size:28px;background:var(--rust);border-radius:10px;width:48px;height:48px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .cal-title{font-size:clamp(16px,2.5vw,20px);font-weight:700;color:var(--steam);margin:0;}
  .cal-subtitle{font-size:11px;color:var(--subtext);letter-spacing:0.1em;text-transform:uppercase;margin-top:2px;}

  .cal-back{display:flex;align-items:center;gap:6px;padding:8px 16px;background:var(--iron);border:1px solid var(--border);border-radius:8px;color:var(--steam);text-decoration:none;font-size:13px;font-weight:600;transition:background 0.2s,transform 0.15s;}
  .cal-back:hover{background:var(--iron2);transform:translateY(-1px);}

  .cal-nav{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;background:var(--coal);border-bottom:1px solid var(--border);flex-wrap:wrap;gap:12px;flex-shrink:0;}
  .cal-month-title{font-size:clamp(20px,4vw,28px);font-weight:800;color:var(--steam);}
  .cal-nav-btns{display:flex;gap:8px;align-items:center;}
  .cal-nav-btn{width:36px;height:36px;border-radius:8px;border:1px solid var(--border);background:var(--iron);color:var(--steam);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s,transform 0.15s;}
  .cal-nav-btn:hover{background:var(--iron2);transform:translateY(-1px);}
  .cal-today-btn{padding:8px 16px;border-radius:8px;border:1px solid var(--text);background:var(--iron);color:var(--text);font-size:12px;font-weight:600;letter-spacing:0.05em;cursor:pointer;transition:background 0.2s;}
  .cal-today-btn:hover{background:#f0f0f0;}

  .cal-legend{display:flex;flex-direction:column;gap:12px;padding:16px;background:var(--coal);border-bottom:1px solid var(--border);flex-shrink:0;}
  .legend-item{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--subtext);}
  .legend-dot{width:12px;height:12px;border-radius:3px;flex-shrink:0;}
  .dot-steam{background:#e8a020;}.dot-cable{background:#3b82f6;}.dot-speeder{background:#10b981;}.dot-none{background:#999;}

  .cal-grid-header{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:3px;padding:8px;}
  .cal-day-label{text-align:center;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--subtext);padding:8px 4px;}
  .cal-day-label.weekend{color:var(--text);}

  .cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;padding:8px;overflow-y:auto;flex:1;}

  .cal-cell{min-height:90px;background:var(--coal);border:1px solid var(--border);border-radius:8px;padding:8px;transition:box-shadow 0.2s,transform 0.15s;}
  .cal-cell.clickable{cursor:pointer;}
  .cal-cell.clickable:hover{box-shadow:0 4px 16px rgba(0,0,0,0.15);transform:translateY(-2px);border-color:var(--text);}
  .cal-cell.other-month{background:#f9f9f9;opacity:0.3;pointer-events:none;}
  .cal-cell.today{border:2px solid var(--text);}
  .cal-cell.today .cal-date-num{color:var(--text);font-weight:800;}
  .cal-cell.past{opacity:0.5;}

  .cal-date-num{font-size:13px;font-weight:600;color:var(--text);margin-bottom:5px;}

  .cal-event{font-size:10px;font-weight:600;padding:3px 7px;border-radius:5px;margin-bottom:3px;line-height:1.3;}
  .event-steam  {background:rgba(232,160,32,0.15);color:#b87a00;border-left:3px solid #e8a020;}
  .event-cable  {background:rgba(59,130,246,0.15);color:#0050b3;border-left:3px solid #3b82f6;}
  .event-speeder{background:rgba(16,185,129,0.15);color:#007d4e;border-left:3px solid #10b981;}
  .event-none   {background:#f5f5f5;color:var(--subtext);border-left:3px solid #999;font-style:italic;}

  .cal-event-time{font-size:9px;color:var(--subtext);margin-top:2px;}
  .cal-click-hint{font-size:9px;color:var(--text);margin-top:4px;font-style:italic;}

  /* Main content area - horizontal layout */
  .main-cal-content { display: flex; flex: 1; }

  .cal-info{display:flex;flex-direction:column;gap:12px;padding:16px 20px;background:var(--coal);border-right:1px solid var(--border);flex:0 0 30%;overflow-y:auto;}
  .cal-info-card{background:var(--coal);border:1px solid var(--border);border-radius:10px;padding:16px;border-top:3px solid var(--text);}
  .cal-info-label{font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--subtext);margin-bottom:6px;}
  .cal-info-value{font-size:15px;font-weight:700;color:var(--steam);margin-bottom:3px;}
  .cal-info-sub{font-size:11px;color:var(--subtext);line-height:1.4;}
  
  .cal-right-section { flex: 1; display: flex; flex-direction: column; }

  /* Remove Minima width constraints and keep full-screen layout */
  .page-content, .wrapper { max-width: none !important; padding: 0 !important; }
  body { background: #ffffff; color: #000000; }

  @media(max-width:580px){
    .cal-cell{min-height:64px;padding:5px;}
    .cal-event{font-size:9px;padding:2px 5px;}
    .cal-date-num{font-size:11px;}
    .cal-event-time,.cal-click-hint{display:none;}
    .main-cal-content { flex-direction: column; }
    .cal-info { flex: 0 auto; border-right: none; border-bottom: 1px solid var(--border); }
    .cal-right-section { flex: 1; }
  }
</style>

<div class="cal-page">
<div class="cal-wrap">

  <div class="cal-header">
    <div class="cal-header-left">
      <div class="cal-logo"></div>
      <div>
        <div class="cal-title">Operations Calendar</div>
        <div class="cal-subtitle">Poway–Midland Railroad · Old Poway Park</div>
      </div>
    </div>
    <a href="{{ "/railroad/schedule" | relative_url }}" class="cal-back">← Schedule &amp; Tracker</a>
  </div>

  <div class="main-cal-content">
    <!-- Left sidebar: Legend and Info Cards -->
    <div class="cal-info">
      <div style="margin-bottom: 8px;">
        <div style="font-size: 12px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--subtext); margin-bottom: 12px;">Operations Guide</div>
        <div class="legend-item"><div class="legend-dot dot-steam"></div> <span style="font-size: 11px;">Steam Locomotive (Sat 10am–2pm)</span></div>
        <div class="legend-item"><div class="legend-dot dot-cable"></div> <span style="font-size: 11px;">Cable Car (Sun 11am–2pm)</span></div>
        <div class="legend-item"><div class="legend-dot dot-speeder"></div> <span style="font-size: 11px;">Speeder w/ Ore Cars (Sun 11am–2pm)</span></div>
        <div class="legend-item"><div class="legend-dot dot-none"></div> <span style="font-size: 11px;">No Operation</span></div>
      </div>

      <div class="cal-info-card">
        <div class="cal-info-label">Steam Locomotive</div>
        <div class="cal-info-value">Every Saturday</div>
        <div class="cal-info-sub">10:00am – 2:00pm<br>Up to 65 riders<br>Adult $5 · Child $2</div>
      </div>
      <div class="cal-info-card" style="border-top-color:#3b82f6;">
        <div class="cal-info-label">Cable Car</div>
        <div class="cal-info-value">Select Sundays</div>
        <div class="cal-info-sub">11:00am – 2:00pm<br>Up to 30 riders<br>Adult $5 · Child $2</div>
      </div>
      <div class="cal-info-card" style="border-top-color:#10b981;">
        <div class="cal-info-label">Speeder w/ Ore Cars</div>
        <div class="cal-info-value">Select Sundays</div>
        <div class="cal-info-sub">11:00am – 2:00pm<br>Up to 30 riders<br>Adult $4 · Child $2</div>
      </div>
      <div class="cal-info-card" style="border-top-color:#999;">
        <div class="cal-info-label">No Operation</div>
        <div class="cal-info-value">2nd Sunday / Weekdays</div>
        <div class="cal-info-sub">No rides on 2nd Sunday each month or weekdays.</div>
      </div>
    </div>

    <!-- Right section: Calendar -->
    <div class="cal-right-section">
      <div class="cal-nav">
        <div class="cal-month-title" id="calMonthTitle">March 2026</div>
        <div class="cal-nav-btns">
          <button class="cal-nav-btn" onclick="calChangeMonth(-1)">‹</button>
          <button class="cal-today-btn" onclick="calGoToday()">Today</button>
          <button class="cal-nav-btn" onclick="calChangeMonth(1)">›</button>
        </div>
      </div>

      <div class="cal-grid-header">
        <div class="cal-day-label weekend">Sun</div>
        <div class="cal-day-label">Mon</div>
        <div class="cal-day-label">Tue</div>
        <div class="cal-day-label">Wed</div>
        <div class="cal-day-label">Thu</div>
        <div class="cal-day-label">Fri</div>
        <div class="cal-day-label weekend">Sat</div>
      </div>

      <div class="cal-grid" id="calGrid"></div>
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
  const EVENT_CONFIG = {
    steam:  {cls:'event-steam',  label:' Steam Locomotive',time:'10am – 2pm'},
    cable:  {cls:'event-cable',  label:'🚌 Cable Car',       time:'11am – 2pm'},
    speeder:{cls:'event-speeder',label:'🚃 Speeder',         time:'11am – 2pm'},
    none:   {cls:'event-none',   label:'No Operation',       time:''},
  };
  let calYear, calMonth;
  const calScheduleBase = '{{ "/railroad/schedule" | relative_url }}';

  function calInit(){const now=new Date();calYear=now.getFullYear();calMonth=now.getMonth();calRender();}
  function calChangeMonth(d){calMonth+=d;if(calMonth>11){calMonth=0;calYear++;}if(calMonth<0){calMonth=11;calYear--;}calRender();}
  function calGoToday(){const now=new Date();calYear=now.getFullYear();calMonth=now.getMonth();calRender();}
  function getEventForDate(y,m,d){const key=`${y}-${m+1}-${d}`;if(RR_SCHEDULE[key])return RR_SCHEDULE[key];const dow=new Date(y,m,d).getDay();if(dow===6)return 'steam';return null;}

  function calRender(){
    const today=new Date();today.setHours(0,0,0,0);
    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    document.getElementById('calMonthTitle').textContent=`${months[calMonth]} ${calYear}`;
    const grid=document.getElementById('calGrid');grid.innerHTML='';
    const firstDay=new Date(calYear,calMonth,1).getDay();
    const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
    const prevDays=new Date(calYear,calMonth,0).getDate();
    for(let i=firstDay-1;i>=0;i--){const cell=document.createElement('div');cell.className='cal-cell other-month';cell.innerHTML=`<div class="cal-date-num">${prevDays-i}</div>`;grid.appendChild(cell);}
    for(let d=1;d<=daysInMonth;d++){
      const cellDate=new Date(calYear,calMonth,d);cellDate.setHours(0,0,0,0);
      const isToday=cellDate.getTime()===today.getTime();
      const isPast=cellDate<today;
      const event=getEventForDate(calYear,calMonth,d);
      const isOp=event&&event!=='none';
      const mm=String(calMonth+1).padStart(2,'0');
      const dd=String(d).padStart(2,'0');
      const dateStr=`${calYear}-${mm}-${dd}`;
      let cls='cal-cell';
      if(isToday)cls+=' today';
      if(isPast&&!isToday)cls+=' past';
      if(isOp&&!isPast)cls+=' clickable';
      let inner=`<div class="cal-date-num">${d}</div>`;
      if(event){const cfg=EVENT_CONFIG[event];inner+=`<div class="cal-event ${cfg.cls}">${cfg.label}`;if(cfg.time)inner+=`<div class="cal-event-time">${cfg.time}</div>`;inner+=`</div>`;if(isOp&&!isPast)inner+=`<div class="cal-click-hint">View schedule →</div>`;}
      const cell=document.createElement('div');cell.className=cls;cell.innerHTML=inner;
      if(isOp&&!isPast){cell.addEventListener('click',()=>{window.location.href=`${calScheduleBase}?date=${dateStr}`;});}
      grid.appendChild(cell);
    }
    const total=firstDay+daysInMonth;const remaining=total%7===0?0:7-(total%7);
    for(let i=1;i<=remaining;i++){const cell=document.createElement('div');cell.className='cal-cell other-month';cell.innerHTML=`<div class="cal-date-num">${i}</div>`;grid.appendChild(cell);}
  }
  calInit();
</script>