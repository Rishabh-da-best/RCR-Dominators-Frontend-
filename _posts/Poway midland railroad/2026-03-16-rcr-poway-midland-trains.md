---
layout: base
title: Railroad History
permalink: /history
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
.hs-page *,.hs-page *::before,.hs-page *::after{box-sizing:border-box;margin:0;padding:0;}
body{background:#faf8f5 !important;}
.page-content{max-width:none !important;padding:0 !important;background:#faf8f5 !important;}
.wrapper{max-width:none !important;padding:0 !important;}

.hs-page{background:#faf8f5;min-height:100vh;font-family:'Source Serif 4',Georgia,serif !important;color:#1a1a18;}

/* Hero */
.hs-page .hs-hero{position:relative;padding:72px 24px 52px;text-align:center;background:#1e1208;border-bottom:3px solid #b94a1c;overflow:hidden;}
.hs-page .hs-hero::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(90deg,transparent,transparent 48px,rgba(255,255,255,0.015) 48px,rgba(255,255,255,0.015) 49px);pointer-events:none;}
.hs-page .hs-track{position:absolute;bottom:0;left:0;right:0;height:18px;background:repeating-linear-gradient(90deg,rgba(201,148,58,0.4) 0px,rgba(201,148,58,0.4) 28px,transparent 28px,transparent 48px);}
.hs-page .hs-track::before,.hs-page .hs-track::after{content:'';position:absolute;left:0;right:0;height:2px;background:#c9943a;opacity:0.35;}
.hs-page .hs-track::before{top:3px;}
.hs-page .hs-track::after{bottom:3px;}
.hs-page .hs-hero-tag{font-family:'DM Mono',monospace !important;font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:#c9943a !important;margin-bottom:14px;}
.hs-page .hs-hero h1{font-family:'Playfair Display',Georgia,serif !important;font-size:clamp(34px,6vw,64px);font-weight:900;line-height:1.05;margin-bottom:14px;color:#ffffff !important;letter-spacing:-0.02em;}
.hs-page .hs-hero h1 em{font-style:italic;color:#c9943a !important;display:block;}
.hs-page .hs-hero p{font-size:15px;color:rgba(255,255,255,0.72) !important;max-width:560px;margin:0 auto;line-height:1.75;font-weight:300;}

/* Layout */
.hs-page .hs-wrap{max-width:1100px;margin:0 auto;padding:56px 24px 96px;}
.hs-page .hs-section{margin-bottom:72px;}
.hs-page .hs-label{font-family:'DM Mono',monospace !important;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#b94a1c !important;margin-bottom:28px;display:flex;align-items:center;gap:14px;}
.hs-page .hs-label::after{content:'';flex:1;height:1px;background:#e8e4de;}

/* Timeline */
.hs-page .hs-timeline{position:relative;padding-left:40px;}
.hs-page .hs-timeline::before{content:'';position:absolute;left:13px;top:8px;bottom:8px;width:2px;background:#e0d8ce;opacity:0.8;}
.hs-page .hs-event{position:relative;margin-bottom:16px;cursor:pointer;}
.hs-page .hs-event-dot{position:absolute;left:-33px;top:20px;width:16px;height:16px;border-radius:50%;background:#faf8f5;border:2px solid #d4cec5;transition:all 0.2s;z-index:2;}
.hs-page .hs-event:hover .hs-event-dot,.hs-page .hs-event.active .hs-event-dot{background:#b94a1c;border-color:#b94a1c;box-shadow:0 0 0 4px rgba(185,74,28,0.12);transform:scale(1.2);}
.hs-page .hs-event-card{background:#ffffff;border:1px solid #e8e4de;border-radius:10px;padding:20px 24px;border-left:3px solid #e8e4de;transition:border-color 0.2s,box-shadow 0.2s;}
.hs-page .hs-event:hover .hs-event-card{border-left-color:#c9943a;box-shadow:0 2px 12px rgba(0,0,0,0.06);}
.hs-page .hs-event.active .hs-event-card{border-left-color:#b94a1c;box-shadow:0 4px 20px rgba(0,0,0,0.08);}
.hs-page .hs-event-year{font-family:'DM Mono',monospace !important;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#b94a1c !important;margin-bottom:5px;}
.hs-page .hs-event-title{font-family:'Playfair Display',serif !important;font-size:20px;font-weight:700;color:#1a1a18 !important;line-height:1.3;}
.hs-page .hs-expand-hint{font-family:'DM Mono',monospace !important;font-size:10px;color:#9a9590 !important;margin-top:10px;letter-spacing:0.1em;text-transform:uppercase;transition:color 0.2s;}
.hs-page .hs-event:hover .hs-expand-hint{color:#c9943a !important;}
.hs-page .hs-event.active .hs-expand-hint{display:none;}
.hs-page .hs-event-body{font-size:14px;color:#4a4840 !important;line-height:1.8;max-height:0;overflow:hidden;transition:max-height 0.5s ease,opacity 0.3s ease,margin 0.3s ease;opacity:0;margin-top:0;}
.hs-page .hs-event.active .hs-event-body{max-height:600px;opacity:1;margin-top:14px;}

/* Loco grid */
.hs-page .hs-loco-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
@media(max-width:700px){.hs-page .hs-loco-grid{grid-template-columns:1fr;}}
.hs-page .hs-loco-card{background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:28px;border-top:3px solid #b94a1c;}
.hs-page .hs-loco-card h3{font-family:'DM Mono',monospace !important;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#c9943a !important;margin-bottom:16px;}
.hs-page .hs-loco-card p{font-size:14px;color:#4a4840 !important;line-height:1.8;}
.hs-page .hs-loco-card p+p{margin-top:12px;}
.hs-page .hs-spec-table{width:100%;border-collapse:collapse;font-size:13px;margin-top:4px;}
.hs-page .hs-spec-table tr{border-bottom:1px solid #e8e4de;}
.hs-page .hs-spec-table tr:last-child{border-bottom:none;}
.hs-page .hs-spec-table td{padding:9px 8px;vertical-align:top;color:#4a4840 !important;background:#ffffff !important;}
.hs-page .hs-spec-table td:first-child{font-family:'DM Mono',monospace !important;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#7a756c !important;width:42%;padding-right:16px;}
.hs-page .hs-gold-badge{color:#7a3a10 !important;font-family:'DM Mono',monospace !important;font-size:12px;background:#f0e4cc;padding:8px 14px;border-radius:6px;display:inline-block;margin-top:8px;line-height:1.6;}

/* Hotspot */
.hs-page .hs-stage{position:relative;width:100%;height:200px;background:linear-gradient(135deg,#1e1208,#2a1a0e 60%,#1a1410);border-radius:12px;border:1px solid #e8e4de;overflow:hidden;margin-bottom:16px;}
.hs-page .hs-stage-track{position:absolute;bottom:28px;left:0;right:0;height:8px;background:repeating-linear-gradient(90deg,#4a3f35 0,#4a3f35 40px,transparent 40px,transparent 60px);opacity:0.6;}
.hs-page .hs-stage-rail{position:absolute;left:0;right:0;height:2px;background:rgba(201,148,58,0.3);}
.hs-page .hs-stage-loco{position:absolute;bottom:34px;left:36px;font-size:42px;animation:hs-chug 3s ease-in-out infinite;}
@keyframes hs-chug{0%,100%{transform:translateX(0);}50%{transform:translateX(3px);}}
.hs-page .hs-hspot{position:absolute;width:30px;height:30px;border-radius:50%;background:#b94a1c;border:2px solid #c9943a;color:#fff !important;font-family:'DM Mono',monospace !important;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;z-index:2;}
.hs-page .hs-hspot:hover,.hs-page .hs-hspot.active{background:#d4581f;transform:scale(1.25);box-shadow:0 0 0 4px rgba(185,74,28,0.2);}
.hs-page .hs-popup{background:#faf9f7;border:1px solid #e8e4de;border-left:3px solid #c9943a;border-radius:10px;padding:20px 24px;min-height:80px;}
.hs-page .hs-popup h3{font-family:'DM Mono',monospace !important;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#c9943a !important;margin-bottom:8px;}
.hs-page .hs-popup p{font-size:14px;color:#4a4840 !important;line-height:1.7;}

/* Quote */
.hs-page .hs-quote{background:#faf9f7;border:1px solid #e8e4de;border-left:4px solid #c9943a;border-radius:0 10px 10px 0;padding:32px 36px;}
.hs-page .hs-quote blockquote{font-size:16px;color:#1a1a18 !important;line-height:1.85;font-style:italic;margin-bottom:16px;}
.hs-page .hs-quote blockquote::before{content:'\201C';font-size:52px;color:#c9943a;line-height:0;vertical-align:-20px;margin-right:4px;font-family:Georgia,serif;}
.hs-page .hs-quote cite{font-family:'DM Mono',monospace !important;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#7a756c !important;}

/* People */
.hs-page .hs-people{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;}
.hs-page .hs-person{background:#ffffff;border:1px solid #e8e4de;border-radius:10px;padding:20px;border-top:2px solid #c9943a;transition:box-shadow 0.2s,transform 0.2s;}
.hs-page .hs-person:hover{box-shadow:0 4px 16px rgba(0,0,0,0.07);transform:translateY(-2px);}
.hs-page .hs-person-era{font-family:'DM Mono',monospace !important;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:#b94a1c !important;margin-bottom:7px;}
.hs-page .hs-person h4{font-family:'Playfair Display',serif !important;font-size:16px;font-weight:700;color:#1a1a18 !important;margin-bottom:8px;}
.hs-page .hs-person p{font-size:13px;color:#4a4840 !important;line-height:1.65;}
</style>

<div class="hs-page">

<div class="hs-hero">
  <div class="hs-hero-tag">Since 1880s · Poway–Midland Railroad</div>
  <h1>Iron Horse <em>History</em></h1>
  <p>The Poway-Midland Railroad is a non-profit organization dedicated to preserving and operating historical railroad equipment — run entirely by passionate volunteers.</p>
  <div class="hs-track"></div>
</div>

<div class="hs-wrap">

<div class="hs-section">
<div class="hs-label">Timeline — Click Each Era to Expand</div>
<div class="hs-timeline">

<div class="hs-event" onclick="toggleEvent(this)">
  <div class="hs-event-dot"></div>
  <div class="hs-event-card">
    <div class="hs-event-year">1880s</div>
    <div class="hs-event-title">A Valley Full of Promise</div>
    <div class="hs-expand-hint">▸ Click to read more</div>
    <div class="hs-event-body">Poway in the 1880s was a prosperous and well-populated valley. Families were settling on farms, planting orchards and vineyards, and growing grain. By 1887, approximately 800 people lived in the area — enough to support a church, school, hotel, and general store. Two railroad lines were expected to pass just west of present-day Midland Road, setting off a real estate boom. Developers Baird and Chapin laid out the Piermont Plan, envisioning a town near today's Old Poway Park.</div>
  </div>
</div>

<div class="hs-event" onclick="toggleEvent(this)">
  <div class="hs-event-dot"></div>
  <div class="hs-event-card">
    <div class="hs-event-year">1887</div>
    <div class="hs-event-title">The Railroad That Never Came</div>
    <div class="hs-expand-hint">▸ Click to read more</div>
    <div class="hs-event-body">The San Diego Central and Southern Pacific proposed a line from Poway toward Ramona and Julian — but the plans failed. Railroad companies cited insufficient business and unfeasible terrain. The real estate boom collapsed. Instead, a railway was built from Escondido to Oceanside. Railroad interest was renewed in the late 1890s when Poway's peaches and grapes became prized crops shipped east, but another town meeting proposal was again rejected by railroad officials.</div>
  </div>
</div>

<div class="hs-event" onclick="toggleEvent(this)">
  <div class="hs-event-dot"></div>
  <div class="hs-event-card">
    <div class="hs-event-year">1907</div>
    <div class="hs-event-title">The Baldwin Locomotive Is Born</div>
    <div class="hs-expand-hint">▸ Click to read more</div>
    <div class="hs-event-body">In April 1907, Baldwin Locomotive Works of Philadelphia completed a small 0-4-0T saddle-tank engine — serial number 30646. Ordered by the Henry Cowell Lime and Cement Company for its narrow-gauge railroad in California, it spent 45 years hauling rock from quarry to crusher. One of 433 identical locomotives built by Baldwin between 1875 and 1925, it ran on 42-inch "bastard gauge" rails with 28-inch driver wheels and could develop 5,160 pounds of tractive force.</div>
  </div>
</div>

<div class="hs-event" onclick="toggleEvent(this)">
  <div class="hs-event-dot"></div>
  <div class="hs-event-card">
    <div class="hs-event-year">1952 – 1966</div>
    <div class="hs-event-title">A Clouded History & A New Identity</div>
    <div class="hs-expand-hint">▸ Click to read more</div>
    <div class="hs-event-body">After 45 years of service, the engine was auctioned in 1952 and rescued from a scrap yard in 1960 by Charles B. Pollard of Vista. Pollard spent a year rebuilding it and deliberately falsified its history — removing the builder's plates, claiming it was an 1878 logging locomotive from the Pacific Northwest. He cast new plates reading "1878" with a bogus serial number. The locomotive ran as the "Robert E. Lee" on the P&H Short Line. After Pollard's death in 1966, John S. Porter of Poway purchased the entire railroad.</div>
  </div>
</div>

<div class="hs-event" onclick="toggleEvent(this)">
  <div class="hs-event-dot"></div>
  <div class="hs-event-card">
    <div class="hs-event-year">1960s – 1980</div>
    <div class="hs-event-title">The Poway Village & Rattlesnake Creek Railroad</div>
    <div class="hs-expand-hint">▸ Click to read more</div>
    <div class="hs-event-body">John Porter expanded the tracks to include a trestle over Rattlesnake Creek, renaming the operation the Poway Village and Rattlesnake Creek Railroad. He collected a Southern Pacific caboose, gondola cars, speeder cars, and a small flat car. Porter proudly displayed his "1878" locomotive, unaware of Pollard's fabrications. His death in 1980 idled the railroad, and the locomotive sat silent until the City of Poway acquired the property in December 1987.</div>
  </div>
</div>

<div class="hs-event" onclick="toggleEvent(this)">
  <div class="hs-event-dot"></div>
  <div class="hs-event-card">
    <div class="hs-event-year">1988 – 1991</div>
    <div class="hs-event-title">The Truth Is Revealed — Restoration Begins</div>
    <div class="hs-expand-hint">▸ Click to read more</div>
    <div class="hs-event-body">Historian Frank Lorey spent three months in 1988 researching the locomotive's true origins. Detailed examinations confirmed it as Baldwin #30646 from April 1907. New authentic builder's plates were restored. In February 1991, volunteers met at the Hamburger Factory in Poway and founded the Poway-Midland Railroad Volunteers. By June 1991, the City Council ratified their contract to restore, operate, and maintain the railroad.</div>
  </div>
</div>

<div class="hs-event" onclick="toggleEvent(this)">
  <div class="hs-event-dot"></div>
  <div class="hs-event-card">
    <div class="hs-event-year">1996 – Today</div>
    <div class="hs-event-title">Steam Returns to Poway</div>
    <div class="hs-expand-hint">▸ Click to read more</div>
    <div class="hs-event-body">Public rides began and quickly became a beloved weekend tradition at Old Poway Park. The all-volunteer crew maintains and operates historic trains every Saturday, with cable car and speeder rides on select Sundays. Today the same iron horse that hauled cement in 1907 now carries children and rail enthusiasts through the park.</div>
  </div>
</div>

</div>
</div>

<div class="hs-section">
<div class="hs-label">The Baldwin Locomotive — #30646</div>
<div class="hs-loco-grid">
  <div class="hs-loco-card">
    <h3>Original Specifications</h3>
    <table class="hs-spec-table">
      <tr><td>Built</td><td>April 1907, Philadelphia, PA</td></tr>
      <tr><td>Builder</td><td>Baldwin Locomotive Works</td></tr>
      <tr><td>Serial No.</td><td>30646</td></tr>
      <tr><td>Type</td><td>0-4-0T Saddle Tank</td></tr>
      <tr><td>Cylinders</td><td>9 × 14 inches</td></tr>
      <tr><td>Driver Wheels</td><td>28 inches</td></tr>
      <tr><td>Gauge</td><td>42-inch narrow gauge</td></tr>
      <tr><td>Boiler Pressure</td><td>150 psi</td></tr>
      <tr><td>Weight</td><td>24,400 lbs</td></tr>
      <tr><td>Tractive Force</td><td>5,160 lbs</td></tr>
      <tr><td>Fuel</td><td>Oil-fired</td></tr>
    </table>
  </div>
  <div class="hs-loco-card">
    <h3>The Fake History That Almost Held</h3>
    <p>Charles Pollard was so convincing that his fabricated 1878 story appeared in the published book <em>"A History of Vista."</em> He removed all identifying markings, cast new builder's plates with a false date and serial number, and named the engine the "Robert E. Lee."</p>
    <p>His one mistake: Baldwin's serial numbers for 1878 ran between 4,273 and 4,564. Pollard assigned number 0491 — an impossible figure that gave historians the first clue.</p>
    <p>Today, the restored authentic plates read:</p>
    <div class="hs-gold-badge">Baldwin Locomotive Works · No. 30646 · April 1907 · Philadelphia, U.S.A.</div>
  </div>
</div>
</div>

<div class="hs-section">
<div class="hs-label">Interactive Hotspots</div>
<div class="hs-stage">
  <div class="hs-stage-track"></div>
  <div class="hs-stage-rail" style="bottom:34px;"></div>
  <div class="hs-stage-rail" style="bottom:24px;"></div>
  <div class="hs-stage-loco">🚂</div>
  <div class="hs-hspot" style="left:44%;top:38%;" onclick="showHotspot(0)">1</div>
  <div class="hs-hspot" style="left:20%;top:52%;" onclick="showHotspot(1)">2</div>
  <div class="hs-hspot" style="left:68%;top:42%;" onclick="showHotspot(2)">3</div>
  <div class="hs-hspot" style="left:55%;top:20%;" onclick="showHotspot(3)">4</div>
</div>
<div class="hs-popup">
  <h3 id="hsHeading">Click a Marker</h3>
  <p id="hsText">Select any numbered hotspot above to reveal facts about the Poway Midland Railroad.</p>
</div>
</div>

<div class="hs-section">
<div class="hs-quote">
  <blockquote>The proposed line was to terminate in the area of today's Poway-Midland Railroad, according to Gus Kear's Memoirs of Early Poway. On Irving Avenue had been a reservation of land for a depot and railroad yards for the proposed railroad in the Piermont Plan.</blockquote>
  <cite>— Kay Prusinskas, Historian, November 1999</cite>
</div>
</div>

<div class="hs-section">
<div class="hs-label">Key Figures in PMRR History</div>
<div class="hs-people">
  <div class="hs-person">
    <div class="hs-person-era">1880s</div>
    <h4>Baird &amp; Chapin</h4>
    <p>Developers who laid out the Piermont Plan, envisioning a town near today's Old Poway Park based on expected railroad access.</p>
  </div>
  <div class="hs-person">
    <div class="hs-person-era">1960 – 1966</div>
    <h4>Charles B. Pollard</h4>
    <p>Vista machinist who rescued the Baldwin from scrap, rebuilt it, and invented an elaborate false history — calling it an 1878 logging locomotive.</p>
  </div>
  <div class="hs-person">
    <div class="hs-person-era">1966 – 1980</div>
    <h4>John S. Porter</h4>
    <p>Poway resident who bought the entire P&amp;H Short Line and expanded it into the Poway Village &amp; Rattlesnake Creek Railroad.</p>
  </div>
  <div class="hs-person">
    <div class="hs-person-era">1988</div>
    <h4>Frank Lorey</h4>
    <p>Railroad historian and Charter Member who spent three months uncovering the true identity of the Baldwin locomotive.</p>
  </div>
  <div class="hs-person">
    <div class="hs-person-era">1991 – Present</div>
    <h4>PMRR Volunteers</h4>
    <p>Founded February 1991 at the Hamburger Factory. Volunteers restore, operate, and maintain the railroad for the people of Poway every weekend.</p>
  </div>
  <div class="hs-person">
    <div class="hs-person-era">1907</div>
    <h4>Henry Cowell</h4>
    <p>Lime &amp; Cement magnate who originally ordered Baldwin #30646 to haul rock on his narrow-gauge quarry railroad near San Francisco.</p>
  </div>
</div>
</div>

</div>
</div>

<script>
function toggleEvent(el) {
  const wasActive = el.classList.contains('active');
  document.querySelectorAll('.hs-event').forEach(e => e.classList.remove('active'));
  if (!wasActive) el.classList.add('active');
}

const HOTSPOTS = [
  { title: 'Steam Locomotive — Baldwin #30646',
    text: 'Built in 1907 in Philadelphia, this 0-4-0T saddle-tank locomotive spent 45 years hauling cement before arriving in Poway. Its true identity was hidden for decades behind a false 1878 history.' },
  { title: 'The Piermont Plan (1887)',
    text: 'Developers planned a full town here based on expected railroad access. When the railroad companies pulled out, the real estate boom collapsed — but the reservation for a depot yard was never forgotten.' },
  { title: 'Volunteer Engineers',
    text: 'Every weekend, trained volunteer engineers and conductors operate the railroad. The all-volunteer crew maintains the equipment, sells tickets, and keeps the tradition alive for families and rail enthusiasts.' },
  { title: 'Old Poway Park Station',
    text: 'Today\'s station sits near the exact site where railroad planners in the 1880s had reserved land for a depot. The iron horse finally arrived — just over a century later than originally planned.' },
];

function showHotspot(i) {
  document.querySelectorAll('.hs-hspot').forEach((b, j) => b.classList.toggle('active', j === i));
  document.getElementById('hsHeading').textContent = HOTSPOTS[i].title;
  document.getElementById('hsText').textContent    = HOTSPOTS[i].text;
}
</script>