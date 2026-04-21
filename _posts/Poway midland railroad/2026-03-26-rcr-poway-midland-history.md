---
layout: opencs
title: Railroad History
permalink: /history
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

<div class="theme-page">

<!-- ================= HERO ================= -->
<div class="theme-hero">

  <div class="theme-label" style="margin-top:72px;">
    Since 1880s · Poway–Midland Railroad
  </div>

  <h1>
    Iron Horse
    <span>History</span>
  </h1>

  <p>
    The Poway-Midland Railroad is a non-profit organization dedicated to preserving and operating historical railroad equipment — run entirely by passionate volunteers.
  </p>

  <div class="theme-hero-track"></div>
</div>

<!-- ================= CONTENT ================= -->
<div class="theme-wrap">

<!-- Timeline -->
<div class="theme-section">

  <div class="theme-label">
    Timeline — Click Each Era to Expand
  </div>

  <div class="hs-timeline">

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1880s</div>
        <div class="hs-event-title">A Valley Full of Promise</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          Poway in the 1880s was a prosperous and well-populated valley...
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
          The San Diego Central and Southern Pacific proposed a line...
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
          In April 1907, Baldwin Locomotive Works of Philadelphia...
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
          After 45 years of service, the engine was auctioned...
        </div>
      </div>
    </div>

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1960s – 1980</div>
        <div class="hs-event-title">Poway Village Railroad Era</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          John Porter expanded the tracks...
        </div>
      </div>
    </div>

    <div class="hs-event" onclick="toggleEvent(this)">
      <div class="hs-event-dot"></div>
      <div class="hs-event-card">
        <div class="hs-event-year">1988 – 1991</div>
        <div class="hs-event-title">The Truth Is Revealed</div>
        <div class="hs-expand-hint">▸ Click to read more</div>
        <div class="hs-event-body">
          Historian Frank Lorey confirmed the locomotive identity...
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
          Public rides began and became a tradition...
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Loco -->
<div class="theme-section">

  <div class="theme-label">The Baldwin Locomotive — #30646</div>

  <div class="hs-loco-grid">

    <div class="hs-loco-card">
      <h3>Original Specifications</h3>
      <table class="hs-spec-table">
        <tr><td>Built</td><td>April 1907</td></tr>
        <tr><td>Builder</td><td>Baldwin Locomotive Works</td></tr>
        <tr><td>Serial</td><td>30646</td></tr>
        <tr><td>Type</td><td>0-4-0T Saddle Tank</td></tr>
      </table>
    </div>

    <div class="hs-loco-card">
      <h3>Historical Note</h3>
      <p>
        The locomotive was misidentified for decades as “1878”.
      </p>
    </div>

  </div>
</div>

</div>
</div>

<script>
function toggleEvent(el){
  const was = el.classList.contains('active');
  document.querySelectorAll('.hs-event').forEach(e=>e.classList.remove('active'));
  if(!was) el.classList.add('active');
}
</script>