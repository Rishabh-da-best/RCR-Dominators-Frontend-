---
layout: base
title: Railroad History
permalink: /history
---

<style>
:root{
  --coal:#ffffff;
  --iron:#fafafa; /* 关键：卡片不再纯白 */
  --iron2:#f5f5f5;
  --rust:#000000;
  --ember:#333333;
  --gold:#000000;
  --steam:#000000;
  --smoke:#444444; /* 稍微加深 */
  --text:#000000;
  --subtext:#666666;
  --background:#ffffff;
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

body{
  background:#ffffff; /* 保持你原来的纯白 */
  color:var(--steam);
  font-family:'Georgia',serif;
  padding-top:54px !important;
}

.page-content,
.wrapper{
  max-width:none !important;
  padding:0 !important;
  background:#ffffff;
}

/* Hero */
.hs-hero{
  position:relative;
  padding:80px 24px 60px;
  min-height:200px;
  text-align:center;
  overflow:hidden;
  background:#2a1a0e;
}
.hs-hero::before{
  content:'';
  position:absolute;inset:0;
  background-image:repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(0,0,0,0.02) 40px,rgba(0,0,0,0.02) 41px);
}
.hs-track{
  position:absolute;bottom:0;left:0;right:0;height:20px;
  background:repeating-linear-gradient(90deg,#cccccc 0px,#cccccc 30px,transparent 30px,transparent 50px);
  opacity:0.3;
}
.hs-track::before,.hs-track::after{
  content:'';position:absolute;left:0;right:0;height:3px;background:#cccccc;opacity:0.4;
}
.hs-track::before{top:4px;}
.hs-track::after{bottom:4px;}

.hs-tag{
  font-family:'Courier New',monospace;
  font-size:10px;
  letter-spacing:0.3em;
  text-transform:uppercase;
  color:#ffffff;
  margin-bottom:12px;
  opacity:0.8;
}
.hs-hero h1{
  font-size:clamp(32px,6vw,64px);
  font-weight:700;
  margin-bottom:10px;
  color:#ffffff;
}
.hs-hero p{
  font-size:14px;
  color:#ffffff;
  max-width:540px;
  margin:0 auto;
  line-height:1.7;
}

/* 内容容器（关键优化） */
.hs-wrap{
  max-width:1100px;
  margin:40px auto;
  padding:40px 32px 80px;
}

/* Section label */
.hs-label{
  font-family:'Courier New',monospace;
  font-size:11px;
  letter-spacing:0.25em;
  text-transform:uppercase;
  color:#333;
  margin-bottom:24px;
  display:flex;
  align-items:center;
  gap:12px;
}
.hs-label::after{
  content:'';
  flex:1;
  height:1px;
  background:#e5e5e5;
}

/* TIMELINE */
.hs-timeline{
  position:relative;
  padding-left:32px;
  margin-bottom:64px;
}
.hs-timeline::before{
  content:'';
  position:absolute;
  left:10px;top:0;bottom:0;width:2px;
  background:#ccc;
}

.hs-event{
  position:relative;
  margin-bottom:48px;
  cursor:pointer;
}

.hs-event-dot{
  position:absolute;
  left:-27px;
  top:6px;
  width:14px;height:14px;
  border-radius:50%;
  background:#fff;
  border:2px solid #000;
  transition:all 0.2s;
}
.hs-event:hover .hs-event-dot,
.hs-event.active .hs-event-dot{
  background:#000;
  transform:scale(1.2);
}

.hs-event-card{
  background:var(--iron);
  border:1px solid #e2e2e2;
  border-radius:10px;
  padding:18px 20px;
  transition:all 0.2s ease;
}
.hs-event-card:hover{
  box-shadow:0 6px 18px rgba(0,0,0,0.08);
  transform:translateY(-2px);
}

.hs-event-year{
  font-family:'Courier New',monospace;
  font-size:11px;
  letter-spacing:0.15em;
  color:#555;
  margin-bottom:4px;
}

.hs-event-title{
  font-size:18px;
  font-weight:700;
  color:#111;
  margin-bottom:6px;
}

.hs-event-body{
  font-size:14px;
  color:#444;
  line-height:1.8;
  max-height:0;
  overflow:hidden;
  transition:max-height 0.5s ease, opacity 0.3s ease;
  opacity:0;
}
.hs-event.active .hs-event-body{
  max-height:600px;
  opacity:1;
}

/* 卡片统一优化 */
.hs-loco-card,
.hs-person,
.hs-popup{
  background:var(--iron);
  border:1px solid #e2e2e2;
  border-radius:10px;
  transition:all 0.2s ease;
}
.hs-loco-card:hover,
.hs-person:hover{
  box-shadow:0 6px 18px rgba(0,0,0,0.08);
  transform:translateY(-2px);
}

/* 文本优化 */
.hs-loco-card p,
.hs-person p,
.hs-popup p{
  color:#444;
  font-size:13px;
  line-height:1.7;
}

.hs-person{
  padding:20px;
}
.hs-person h4{
  font-size:15px;
  font-weight:600;
}

/* HOTSPOT */
.hs-stage{
  position:relative;
  height:200px;
  background:linear-gradient(135deg,#2a1a0e,#1a1410);
  border-radius:12px;
  border:1px solid #ddd;
  overflow:hidden;
}

/* Quote */
.hs-quote{
  background:#fafafa;
  border:1px solid #e2e2e2;
  border-left:4px solid #000;
  border-radius:12px;
  padding:28px 32px;
  margin-bottom:64px;
}
.hs-quote blockquote{
  font-size:15px;
  line-height:1.8;
  font-style:italic;
  color:#222;
}

/* spacing */
p{margin-bottom:10px;}
</style>

<div class="hs-hero">
  <div class="hs-tag">Since 1880s · Poway–Midland Railroad</div>
  <h1>Iron Horse <em>History</em></h1>
  <p>The Poway-Midland Railroad is a non-profit organization dedicated to preserving and operating historical railroad equipment. We run Steam Locomotive, Cable Car, and Speeder rides throughout the year with the help of passionate volunteers.</p>
  <div class="hs-track"></div>
</div>

<div class="hs-wrap">

  <!-- ── TIMELINE ── -->
  <div class="hs-label">🕰 Timeline — Click Each Era to Expand</div>
  <div class="hs-timeline">

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1880s</div>
        <div class="hs-event-title">A Valley Full of Promise</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          Poway in the 1880s was a prosperous and well-populated valley. Families were settling on farms, planting orchards and vineyards, and growing grain. By 1887, approximately 800 people lived in the area — enough to support a church, school, hotel, and general store. Two railroad lines were expected to pass just west of present-day Midland Road, setting off a real estate boom. Developers Baird and Chapin laid out the Piermont Plan, envisioning a town near today's Old Poway Park.
        </div>
      </div>
    </div>

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1887</div>
        <div class="hs-event-title">The Railroad That Never Came</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          The San Diego Central and Southern Pacific proposed a line from Poway toward Ramona and Julian — but the plans failed. Railroad companies cited insufficient business and unfeasible terrain. The real estate boom collapsed. Instead, a railway was built from Escondido to Oceanside. Railroad interest was renewed in the late 1890s when Poway's peaches and grapes became prized crops shipped east, but another town meeting proposal was again rejected by railroad officials.
        </div>
      </div>
    </div>

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1907</div>
        <div class="hs-event-title">The Baldwin Locomotive Is Born</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          In April 1907, Baldwin Locomotive Works of Philadelphia completed a small 0-4-0T saddle-tank engine — serial number 30646. Ordered by the Henry Cowell Lime and Cement Company for its narrow-gauge railroad in California, it spent 45 years hauling rock from quarry to crusher. One of 433 identical locomotives built by Baldwin between 1875 and 1925, it ran on 42-inch "bastard gauge" rails with 28-inch driver wheels and could develop 5,160 pounds of tractive force.
        </div>
      </div>
    </div>

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1952 – 1966</div>
        <div class="hs-event-title">A Clouded History & A New Identity</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          After 45 years of service, the engine was auctioned in 1952 and rescued from a scrap yard in 1960 by Charles B. Pollard of Vista. Pollard spent a year rebuilding it and deliberately falsified its history — removing the builder's plates, claiming it was an 1878 logging locomotive from the Pacific Northwest. He cast new plates reading "1878" with a bogus serial number. The locomotive ran as the "Robert E. Lee" on the P&H Short Line. After Pollard's death in 1966, John S. Porter of Poway purchased the entire railroad and brought it to Midland Road.
        </div>
      </div>
    </div>

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1960s – 1980</div>
        <div class="hs-event-title">The Poway Village & Rattlesnake Creek Railroad</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          John Porter expanded the tracks to include a trestle over Rattlesnake Creek, renaming the operation the Poway Village and Rattlesnake Creek Railroad. He collected a Southern Pacific caboose (built 1937, retired after a 1964 crash), gondola cars, speeder cars, and a small flat car. Porter proudly displayed his "1878" locomotive, unaware of Pollard's fabrications. His death in 1980 idled the railroad, and the locomotive sat silent in its storage shed until the City of Poway acquired the property in December 1987.
        </div>
      </div>
    </div>

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1988 – 1991</div>
        <div class="hs-event-title">The Truth Is Revealed — Restoration Begins</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          Historian Frank Lorey spent three months in 1988 researching the locomotive's true origins. Detailed examinations revealed subtle differences from sister engines — one fewer rivet in a cab row, a slightly different smokestack flange — confirming it as Baldwin #30646 from April 1907. New authentic builder's plates were restored. In February 1991, a group of volunteers met at the Hamburger Factory in Poway and formed the Poway-Midland Railroad Volunteers. By June 1991, the City Council ratified their contract to restore, operate, and maintain the railroad.
        </div>
      </div>
    </div>

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1996 – Today</div>
        <div class="hs-event-title">Steam Returns to Poway</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          Public rides began and quickly became a beloved weekend tradition at Old Poway Park. The all-volunteer crew maintains and operates historic trains every Saturday, with cable car and speeder rides on select Sundays. Track improvements over the years have expanded reliability and the event program. Today the Poway Midland Railroad connects families across generations — the same iron horse that hauled cement in 1907 now carries children and rail enthusiasts through the park.
        </div>
      </div>
    </div>

  </div>

  <!-- ── LOCOMOTIVE STORY ── -->
  <div class="hs-label"> The Baldwin Locomotive — #30646</div>
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
        <tr><td>Gauge</td><td>42-inch (narrow)</td></tr>
        <tr><td>Boiler Pressure</td><td>150 psi</td></tr>
        <tr><td>Weight</td><td>24,400 lbs</td></tr>
        <tr><td>Tractive Force</td><td>5,160 lbs</td></tr>
        <tr><td>Fuel</td><td>Oil-fired</td></tr>
      </table>
    </div>
    <div class="hs-loco-card">
      <h3>The Fake History That Almost Held</h3>
      <p>Charles Pollard was so convincing that his fabricated 1878 story appeared in the published book <em>"A History of Vista."</em> He removed all identifying markings, cast new builder's plates with a false date and serial number, and named the engine the "Robert E. Lee."</p>
      <p style="margin-top:10px;">His one mistake: Baldwin's serial numbers for 1878 ran between 4,273 and 4,564. Pollard assigned number 0491 — an impossible figure that gave historians the first clue.</p>
      <p style="margin-top:10px;">Today, the restored authentic plates read: <span style="color:var(--gold);font-family:'Courier New',monospace;font-size:11px;">Baldwin Locomotive Works · No. 30646 · April 1907 · Philadelphia, U.S.A.</span></p>
    </div>
  </div>

  <!-- ── HOTSPOT STAGE ── -->
  <div class="hs-label">📍 Interactive Hotspots</div>
  <div class="hs-hotspot-wrap">
    <div class="hs-stage">
      <div class="hs-stage-track"></div>
      <div class="hs-stage-loco"></div>
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

  <!-- ── QUOTE ── -->
  <div class="hs-quote">
    <blockquote>"Interestingly enough, the proposed line was to terminate in the area of today's Poway-Midland Railroad, according to Gus Kear's Memoirs of Early Poway. On Irving Avenue had been a reservation of land for a depot and railroad yards for the proposed railroad in the Piermont Plan."</blockquote>
    <cite>— Kay Prusinskas, Historian, November 1999</cite>
  </div>

  <!-- ── KEY FIGURES ── -->
  <div class="hs-label">👤 Key Figures in PMRR History</div>
  <div class="hs-people">
    <div class="hs-person">
      <div class="hs-person-era">1880s</div>
      <h4>Baird & Chapin</h4>
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
      <p>Poway resident who bought the entire P&H Short Line and expanded it into the Poway Village & Rattlesnake Creek Railroad.</p>
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
      <p>Lime & Cement magnate who originally ordered Baldwin #30646 to haul rock on his narrow-gauge quarry railroad near San Francisco.</p>
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
  { title:'Steam Locomotive — Baldwin #30646',
    text:'Built in 1907 in Philadelphia, this 0-4-0T saddle-tank locomotive spent 45 years hauling cement before arriving in Poway. Its true identity was hidden for decades behind a false 1878 history.' },
  { title:'The Piermont Plan (1887)',
    text:'Developers planned a full town here based on expected railroad access. When the railroad companies pulled out, the real estate boom collapsed — but the reservation for a depot yard was never forgotten.' },
  { title:'Volunteer Engineers',
    text:'Every weekend, trained volunteer engineers and conductors operate the railroad. The all-volunteer crew maintains the equipment, sells tickets, and keeps the tradition alive for families and rail enthusiasts.' },
  { title:'Old Poway Park Station',
    text:'Today\'s station sits near the exact site where railroad planners in the 1880s had reserved land for a depot. The iron horse finally arrived — just over a century later than originally planned.' },
];

function showHotspot(i) {
  document.querySelectorAll('.hs-hspot').forEach((b,j)=>b.classList.toggle('active',j===i));
  document.getElementById('hsHeading').textContent = HOTSPOTS[i].title;
  document.getElementById('hsText').textContent    = HOTSPOTS[i].text;
}
</script>
