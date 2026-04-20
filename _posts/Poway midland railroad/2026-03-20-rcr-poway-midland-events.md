---
layout: base
title: Events & Announcements
permalink: /events
---

<style>
  :root{--coal:#ffffff;--iron:#ffffff;--iron2:#f5f5f5;--rust:#000000;--ember:#333333;--gold:#000000;--steam:#000000;--smoke:#666666;--text:#000000;--subtext:#666666;--background:#ffffff;}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

  .ev-page{background:var(--coal);min-height:100vh;font-family:'Georgia',serif;color:var(--steam);}

  body { background: #ffffff; padding-top: 54px !important;}
  .page-content { max-width: none !important; padding: 0 !important; background: #ffffff; }
  .wrapper { max-width: none !important; padding: 0 !important; }

  .rr-hero{position:relative;padding:60px 24px 40px;min-height:200px;text-align:center;background:#2a1a0e;border-bottom:1px solid #cccccc;overflow:hidden;}
  .rr-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 40px,
      rgba(0,0,0,0.02) 40px, rgba(0,0,0,0.02) 41px
    );
    pointer-events: none;
  }
  .rr-hero-track {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 20px;
    background: repeating-linear-gradient(
      90deg,
      #cccccc 0px, #cccccc 30px,
      transparent 30px, transparent 50px
    );
    opacity: 0.3;
  }
  .rr-hero-track::before, .rr-hero-track::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 3px;
    background: #cccccc;
    opacity: 0.4;
  }
  .rr-hero-track::before { top: 4px; }
  .rr-hero-track::after  { bottom: 4px; }
  .rr-hero-tag{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#ffffff;margin-bottom:10px;opacity:0.8;}
  .rr-hero h1{font-size:clamp(28px,5vw,52px);font-weight:700;line-height:1;margin-bottom:10px;color:#ffffff;}
  .rr-hero h1 em{font-style:italic;color:#ffffff;}
  .rr-hero p{font-size:14px;color:#ffffff;max-width:520px;margin:0 auto;line-height:1.7;}

  .rr-wrap{max-width:1000px;margin:0 auto;padding:40px 20px 80px;}
  .rr-grid-2{display:grid;grid-template-columns:280px 1fr;gap:20px;}
  @media(max-width:700px){.rr-grid-2{grid-template-columns:1fr;}}

  .rr-card{background:var(--iron);border:1px solid #cccccc;border-radius:12px;padding:24px;border-top:3px solid var(--rust);}
  .rr-card-title{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid #cccccc;}

  .rr-field{margin-bottom:14px;}
  .rr-label{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--smoke);margin-bottom:5px;display:block;}
  .rr-input,.rr-select{width:100%;padding:10px 14px;background:var(--iron2);border:1px solid #cccccc;border-radius:6px;color:var(--steam);font-family:'Georgia',serif;font-size:13px;transition:border-color 0.2s;}
  .rr-select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238c7f6e'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:32px;}
  .rr-input:focus,.rr-select:focus{outline:none;border-color:var(--gold);}
  .rr-select option{background:var(--iron2);}
  .rr-status-note{font-family:'Courier New',monospace;font-size:10px;color:var(--smoke);margin-top:10px;}

  .rr-announcement{background:var(--iron2);border:1px solid #cccccc;border-radius:8px;padding:16px;margin-bottom:10px;transition:all 0.2s;}
  .rr-announcement:hover{border-color:rgba(201,148,58,0.3);background:rgba(42,31,24,0.6);}
  .rr-ann-title{font-size:15px;color:var(--steam);font-weight:600;margin-bottom:6px;}
  .rr-ann-meta{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;}
  .rr-ann-body{font-size:13px;color:var(--smoke);line-height:1.6;}
  .rr-empty{text-align:center;padding:40px;font-family:'Courier New',monospace;font-size:12px;color:var(--smoke);}
</style>

<div class="ev-page">

<div class="rr-hero">
  <div class="rr-hero-tag">Latest News · Poway–Midland Railroad</div>
  <h1>Events <em>&amp; Announcements</em></h1>
  <p>Search and filter operational updates and event announcements.</p>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">
  <div class="rr-grid-2">

    <div class="rr-card" style="align-self:start;">
      <div class="rr-card-title">🔍 Filter Updates</div>
      <div class="rr-field">
        <label class="rr-label" for="searchInput">Search</label>
        <input class="rr-input" id="searchInput" type="search" placeholder="Search by title or keyword">
      </div>
      <div class="rr-field">
        <label class="rr-label" for="catFilter">Category</label>
        <select class="rr-select" id="catFilter">
          <option value="all">All Categories</option>
        </select>
      </div>
      <div class="rr-status-note" id="statusNote">Loading updates...</div>
    </div>

    <div class="rr-card">
      <div class="rr-card-title">📰 Latest Updates</div>
      <div id="updatesList"></div>
    </div>

  </div>
</div>

</div>

<script>
const UPDATES = [
  { id:1, title:"Steam Every Saturday!",   category:"events",     date:"2026-03-10", summary:"Starting 2026, our beloved 1907 Baldwin Steam Locomotive runs every single Saturday. Come feel the steam and hear the whistle every weekend." },
  { id:2, title:"Volunteer Engineer Orientation",       category:"volunteer",  date:"2026-03-08", summary:"New volunteer orientation includes dispatch basics, safety checks, and guest operations." },
  { id:3, title:"Group Booking Support Added",          category:"service",    date:"2026-02-27", summary:"School and community groups can request planning support through the online form." },
  { id:4, title:"Track Maintenance Complete",           category:"operations", date:"2026-02-15", summary:"Routine maintenance improved ride smoothness and reduced dwell time at turnaround point." },
  { id:5, title:"Steam Locomotive Seasonal Schedule",   category:"events",     date:"2026-02-10", summary:"Full steam operations confirmed for all Saturdays through summer 2026." },
];

let store = [...UPDATES];
const listEl   = document.getElementById('updatesList');
const statusEl = document.getElementById('statusNote');
const searchEl = document.getElementById('searchInput');
const catEl    = document.getElementById('catFilter');

const cats = [...new Set(store.map(u=>u.category))];
cats.forEach(c => {
  const o = document.createElement('option');
  o.value = c; o.textContent = c[0].toUpperCase()+c.slice(1);
  catEl.appendChild(o);
});

function render() {
  const q   = searchEl.value.trim().toLowerCase();
  const cat = catEl.value;
  const filtered = store.filter(u => {
    const matchQ   = !q || (u.title+' '+u.summary).toLowerCase().includes(q);
    const matchCat = cat==='all' || u.category===cat;
    return matchQ && matchCat;
  });
  statusEl.textContent = `${filtered.length} item(s) shown`;
  listEl.innerHTML = '';
  if (!filtered.length) {
    listEl.innerHTML = '<div class="rr-empty">No results match your search.</div>';
    return;
  }

  function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

filtered.forEach(u => {
  // 根据 category 生成不同的跳转链接
  let detailUrl = '#';
  switch (u.category) {
    case 'events':
      detailUrl = `/events/${u.id}`;
      break;
    case 'volunteer':
      detailUrl = `/volunteer/${u.id}`;
      break;
    case 'service':
      detailUrl = `/service/${u.id}`;
      break;
    case 'operations':
      detailUrl = `/operations/${u.id}`;
      break;
    default:
      detailUrl = `/announcement/${u.id}`;
  }
  
  listEl.innerHTML += `
    <a href="${detailUrl}" class="rr-announcement-link" style="text-decoration: none; display: block; cursor: pointer;">
      <div class="rr-announcement">
        <div class="rr-ann-title">${escapeHtml(u.title)}</div>
        <div class="rr-ann-meta">${u.category.toUpperCase()} · ${u.date}</div>
        <div class="rr-ann-body">${escapeHtml(u.summary)}</div>
      </div>
    </a>`;
});
}

searchEl.addEventListener('input', render);
catEl.addEventListener('change', render);
render();
</script>