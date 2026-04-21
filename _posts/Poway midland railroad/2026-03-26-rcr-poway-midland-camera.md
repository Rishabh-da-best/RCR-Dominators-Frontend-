---
layout: base
title: Live Camera & Explorer
permalink: /camera
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="">

<style>
  :root{--coal:#ffffff;--iron:#ffffff;--iron2:#f5f5f5;--rust:#000000;--ember:#333333;--gold:#000000;--steam:#000000;--smoke:#666666;--text:#000000;--subtext:#666666;--background:#ffffff;}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--coal);color:var(--steam);font-family:'Georgia',serif;padding-top:56px; padding-top: 54px !important;}

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
  .page-content { max-width: none !important; padding: 0 !important; }
  .wrapper { max-width: none !important; padding: 0 !important; }

  .rr-hero-track {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 20px;
    background: repeating-linear-gradient(90deg,#cccccc 0px,#cccccc 30px,transparent 30px,transparent 50px);
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
  .rr-hero p{font-size:14px;color:#ffffff;max-width:560px;margin:0 auto;line-height:1.7;}

  .rr-wrap{max-width:1100px;margin:0 auto;padding:40px 20px 80px;}
  .rr-section{margin-bottom:48px;}
  .rr-section-title{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;display:flex;align-items:center;gap:12px;}
  .rr-section-title::after{content:'';flex:1;height:1px;background:#cccccc;}
  .rr-card{background:var(--iron);border:1px solid #cccccc;border-radius:12px;padding:24px;border-top:3px solid var(--rust);}

  /* Panorama */
  .pano-controls{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;}
  .pano-btn{padding:8px 16px;background:var(--iron2);border:1px solid #cccccc;border-radius:6px;color:var(--smoke);cursor:pointer;font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;transition:all 0.2s;}
  .pano-btn[aria-pressed="true"],.pano-btn:hover{background:rgba(201,148,58,0.15);border-color:var(--gold);color:var(--gold);}
  .rr-note{font-family:'Courier New',monospace;font-size:10px;color:var(--smoke);margin-top:8px;}

  /* Map */
  .rr-map-grid{display:grid;grid-template-columns:1fr 280px;gap:20px;align-items:start;}
  @media(max-width:700px){.rr-map-grid{grid-template-columns:1fr;}}
  #routeMap{width:100%;height:360px;border-radius:8px;border:1px solid #cccccc;}
  .rr-map-sidebar h3{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;margin-top:16px;}
  .rr-map-sidebar h3:first-child{margin-top:0;}
  .rr-map-list{list-style:none;padding:0;}
  .rr-map-list li{font-size:13px;color:var(--smoke);padding:6px 0;border-bottom:1px solid #cccccc;display:flex;align-items:flex-start;gap:6px;}
  .rr-map-list li::before{content:'▸';color:var(--rust);flex-shrink:0;}

  /* Modal */
  dialog{background:var(--iron);border:1px solid #cccccc;border-radius:12px;padding:0;max-width:600px;width:90%;color:var(--steam);}
  dialog::backdrop{background:rgba(0,0,0,0.8);}
  .modal-inner{padding:24px;}
  .modal-close{padding:9px 20px;background:var(--rust);border:none;border-radius:6px;color:#fff;cursor:pointer;font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;}
  .modal-close:hover{background:var(--ember);}

  .rr-wrap p,
  .rr-map-list li,
  .rr-card p {
    color: #666666 !important;
    opacity: 1 !important;
}
  /* Unified Poway hero banner */
  .rr-hero, .eq-hero, .pf-hero, .fc-hero, .hs-hero {
    position: relative !important;
    width: min(1100px, 100%) !important;
    max-width: 1100px !important;
    margin: 0 auto !important;
    padding: 72px 24px 52px !important;
    min-height: 260px !important;
    text-align: center !important;
    background: #1e1208 !important;
    border-bottom: 3px solid #b94a1c !important;
    overflow: hidden !important;
    box-sizing: border-box !important;
  }
  .rr-hero::before, .eq-hero::before, .pf-hero::before, .fc-hero::before, .hs-hero::before {
    content: '' !important;
    position: absolute !important;
    inset: 0 !important;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 48px,
      rgba(255,255,255,0.015) 48px, rgba(255,255,255,0.015) 49px
    ) !important;
    pointer-events: none !important;
  }
  .rr-hero-track, .eq-hero-track, .pf-track, .fc-track, .hs-track, .hs-hero-track {
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 18px !important;
    background: repeating-linear-gradient(
      90deg,
      rgba(201,148,58,0.4) 0px,
      rgba(201,148,58,0.4) 28px,
      transparent 28px,
      transparent 48px
    ) !important;
  }
  .rr-hero-track::before, .rr-hero-track::after,
  .eq-hero-track::before, .eq-hero-track::after,
  .pf-track::before, .pf-track::after,
  .fc-track::before, .fc-track::after,
  .hs-track::before, .hs-track::after,
  .hs-hero-track::before, .hs-hero-track::after {
    content: '' !important;
    position: absolute !important;
    left: 0 !important;
    right: 0 !important;
    height: 2px !important;
    background: #c9943a !important;
    opacity: 0.35 !important;
  }
  .rr-hero-track::before, .eq-hero-track::before, .pf-track::before, .fc-track::before, .hs-track::before, .hs-hero-track::before { top: 3px !important; }
  .rr-hero-track::after, .eq-hero-track::after, .pf-track::after, .fc-track::after, .hs-track::after, .hs-hero-track::after { bottom: 3px !important; }

  .rr-hero-tag, .eq-hero-tag, .pf-hero-tag, .fc-hero-tag, .hs-hero-tag {
    font-family: 'DM Mono', monospace !important;
    font-size: 10px !important;
    letter-spacing: 0.35em !important;
    text-transform: uppercase !important;
    color: #c9943a !important;
    margin-bottom: 14px !important;
    opacity: 0.9 !important;
  }
  .rr-hero h1, .eq-hero-title, .rr-main-title, .fc-hero-title, .hs-hero h1, .pf-name {
    font-family: 'Playfair Display', Georgia, serif !important;
    font-size: clamp(34px, 6vw, 64px) !important;
    font-weight: 900 !important;
    line-height: 1.05 !important;
    margin-bottom: 14px !important;
    color: #ffffff !important;
    letter-spacing: -0.02em !important;
  }
  .rr-hero h1 em, .eq-hero-title em, .rr-main-title .orange-part, .rr-hero-title em, .fc-hero-title em, .hs-hero h1 em, .hs-hero h1 span, .pf-name em {
    font-style: italic !important;
    color: #c9943a !important;
    display: block !important;
  }
  .rr-hero p, .eq-hero-sub, .rr-hero-sub, .fc-hero-sub, .hs-hero p {
    font-size: 15px !important;
    color: rgba(255,255,255,0.72) !important;
    max-width: 560px !important;
    margin: 0 auto !important;
    line-height: 1.75 !important;
    font-weight: 300 !important;
  }
  .rr-hero-image {
    background-image: none !important;
    background-color: #1e1208 !important;
    min-height: auto !important;
    padding: 0 !important;
  }
  .rr-hero-content { padding: 0 !important; }
</style>

<div class="rr-hero">
  <div class="rr-hero-tag">Explorer · Poway–Midland Railroad</div>
  <h1>Railroad <em>Explorer</em></h1>
  <p>Panoramas, route map, history hotspots, and timeline — all in one place.</p>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">

  <!-- 1. Panorama -->
  <div class="rr-section">
    <div class="rr-section-title">1 · 360° Panoramic Views</div>
    <div class="rr-card">
      <p style="font-size:13px;color:var(--smoke);margin-bottom:14px;">Drag with mouse or finger to look around each scene.</p>
      <div class="pano-controls" id="panoControls"></div>
      <div id="pano-wrapper" style="width:100%;height:400px;border-radius:8px;overflow:hidden;border:1px solid #cccccc;">
        <iframe id="pano-frame" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!4v1776718863451!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDQ2YU9rdVFF!2m2!1d32.96993600442323!2d-117.0370793129599!3f80.74755193883568!4f0!5f0.7820865974627469&hl=en">
        </iframe>
      </div>
      <p class="rr-note">Drag to look around 360°. Use buttons above to switch scenes.</p>
    </div>
  </div>

  <!-- 2. Map -->
  <div class="rr-section">
    <div class="rr-section-title">2 · Interactive Route Map</div>
    <div class="rr-card">
      <div class="rr-map-grid">
        <div id="routeMap"></div>
        <div class="rr-map-sidebar">
          <h3>Route Stops</h3>
          <ul class="rr-map-list" id="stopsList"></ul>
          <h3>Historic Markers</h3>
          <ul class="rr-map-list" id="poiList"></ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Link to History page -->
  <div class="rr-section">
    <div class="rr-card" style="text-align:center;padding:32px;">
      <div style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;">Explore the Full Story</div>
      <p style="font-size:14px;color:var(--smoke);margin-bottom:20px;line-height:1.7;">Discover the rich history of the Poway Midland Railroad — from the 1880s valley settlers to the volunteers who keep the iron horse alive today.</p>
      <a href="{{ "/history" | relative_url }}" style="display:inline-block;padding:12px 28px;background:var(--rust);color:#fff;text-decoration:none;border-radius:6px;font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;transition:background 0.2s;" onmouseover="this.style.background='#e8621a'" onmouseout="this.style.background='#b94a1c'">View Full History →</a>
    </div>
  </div>

</div>

<dialog id="histModal">
  <div class="modal-inner">
    <img class="modal-img" id="modalImg" src="" alt="">
    <div class="modal-year" id="modalYear"></div>
    <div class="modal-caption" id="modalCaption"></div>
    <button class="modal-close" id="modalClose">Close</button>
  </div>
</dialog>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
<script>

// ── Panorama Data ─────────────────────────────────────────────────────────
const PANO_SCENES = [
  {
    id: 'gazebo',
    title: "Gazebo View",
    src: "https://www.google.com/maps/embed?pb=!4v1776718863451!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDQ2YU9rdVFF!2m2!1d32.96993600442323!2d-117.0370793129599!3f80.74755193883568!4f0!5f0.7820865974627469&hl=en"
  },
  {
    id: 'track',
    title: "Track View",
    src: "https://www.google.com/maps/embed?pb=!4v1776719075157!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDRqUHJwZFE.!2m2!1d32.97003962812893!2d-117.0374035867116!3f52.84635641785955!4f0!5f0.7820865974627469&hl=en"
  },
  {
    id: 'porters',
    title: "Porter's House",
    src: "https://www.google.com/maps/embed?pb=!4v1!6m8!1m7!1sTRGQ3npzCMLCtS2ad2yNNQ!2m2!1d32.9697771!2d-117.0366493!3f114.96!4f7.95!5f0.75&hl=en"
  },
  {
    id: 'north',
    title: "Railroad North End",
    src: "https://www.google.com/maps/embed?pb=!4v1!6m8!1m7!1s-RJelLThvsiLdgkoscNB_w!2m2!1d32.9711678!2d-117.037117!3f178.1!4f-1.19!5f0.75&hl=en"
  },
];

const ctrlEl = document.getElementById('panoControls');
const frame  = document.getElementById('pano-frame');

PANO_SCENES.forEach((s, i) => {
  const btn = document.createElement('button');
  btn.className = 'pano-btn';
  btn.textContent = s.title;
  btn.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
  btn.addEventListener('click', () => {
    ctrlEl.querySelectorAll('.pano-btn').forEach(b => b.setAttribute('aria-pressed','false'));
    btn.setAttribute('aria-pressed','true');
    frame.src = s.src;
  });
  ctrlEl.appendChild(btn);
});

// ── Route Data (PMRR actual loop around Old Poway Park) ───────────────────
const ROUTE = {
  // Clockwise loop tracing the actual PMRR track perimeter
  route:[
    {lat:32.9693, lng:-117.0364}, // Train Depot / Station (start)
    {lat:32.9696, lng:-117.0358}, // East side, heading north
    {lat:32.9701, lng:-117.0355}, // NE corner
    {lat:32.9706, lng:-117.0357}, // North straight
    {lat:32.9710, lng:-117.0361}, // North side heading west
    {lat:32.9711, lng:-117.0368}, // NW area
    {lat:32.9708, lng:-117.0374}, // West side heading south
    {lat:32.9703, lng:-117.0377}, // SW bend
    {lat:32.9697, lng:-117.0375}, // South side heading east
    {lat:32.9694, lng:-117.0371}, // SE curve back toward depot
    {lat:32.9693, lng:-117.0367}, // approaching depot
    {lat:32.9693, lng:-117.0364}, // back to Depot (close loop)
  ],
  stops:[
    {name:'Train Depot (Station)',   lat:32.9693, lng:-117.0364, type:'start'},
    {name:'North Straight',          lat:32.9710, lng:-117.0361, type:'stop'},
    {name:'West Side / Turnaround',  lat:32.9708, lng:-117.0374, type:'turnaround'},
  ],
  poi:[
    {name:"Porter's House",          lat:32.9700, lng:-117.0370},
    {name:'Train Barn',              lat:32.9695, lng:-117.0366},
    {name:'Gazebo',                  lat:32.9699, lng:-117.0368},
    {name:'Nelson House',            lat:32.9704, lng:-117.0363},
  ]
};

// ── Map ───────────────────────────────────────────────────────────────────
const map = L.map('routeMap', {scrollWheelZoom:true}).setView([32.9626,-117.035], 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '© OpenStreetMap'
}).addTo(map);

const lls = ROUTE.route.map(p => [p.lat, p.lng]);
const poly = L.polyline(lls, {color:'#b94a1c', weight:6, opacity:0.85}).addTo(map);

ROUTE.stops.forEach(s => {
  L.circleMarker([s.lat, s.lng], {
    radius: 8,
    color: '#20547f',
    fillColor: s.type === 'start' ? '#f59e0b' : '#66b3ff',
    fillOpacity: 0.95,
    weight: 2
  }).bindPopup(`<b>${s.name}</b><br/>Type: ${s.type}`).addTo(map);
});

ROUTE.poi.forEach(p => L.marker([p.lat, p.lng]).bindPopup(`<b>${p.name}</b>`).addTo(map));
map.fitBounds(poly.getBounds(), {padding:[20,20]});

const trainIcon = L.divIcon({
  className: '',
  html: '<span style="font-size:1.2rem">🚂</span>',
  iconSize: [32,24],
  iconAnchor: [16,12]
});
const trainMarker = L.marker(lls[0], {icon:trainIcon}).addTo(map);
let ri = 0;
setInterval(() => { ri = (ri+1) % lls.length; trainMarker.setLatLng(lls[ri]); }, 1800);

// Sidebar lists
const stopsList = document.getElementById('stopsList');
const poiList   = document.getElementById('poiList');
ROUTE.stops.forEach(s => { stopsList.innerHTML += `<li>${s.name} (${s.type})</li>`; });
ROUTE.poi.forEach(p   => { poiList.innerHTML   += `<li>${p.name}</li>`; });

// ── Modal close ───────────────────────────────────────────────────────────
document.getElementById('modalClose').addEventListener('click', () => document.getElementById('histModal').close());
document.getElementById('histModal').addEventListener('click', e => { if(e.target === document.getElementById('histModal')) document.getElementById('histModal').close(); });

</script>