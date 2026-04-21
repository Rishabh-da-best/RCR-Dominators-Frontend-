---
layout: base
title: Tomorrow's Visitor Forecast
permalink: /forecast
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&family=Source+Serif+4:wght@300;400;600&display=swap" rel="stylesheet">

<style>
  :root{--coal:#faf8f5;--iron:#ffffff;--iron2:#f5f5f5;--rust:#000000;--ember:#333333;--gold:#000000;--steam:#000000;--smoke:#666666;--text:#000000;--subtext:#666666;--background:#ffffff;}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html, body { width:100%; height:100%; }
  body{overflow-x:visible;overflow-y:auto;background:#faf8f5; padding-top: 54px !important;}
  .page-content, .wrapper { max-width: none !important; padding: 0 !important; }
  .fc-page{background:var(--coal);min-height:100vh;font-family:'Source Serif 4',Georgia,serif;color:var(--steam);width:100%;overflow:visible;}

  .fc-hero{position:relative;padding:60px 24px 40px;min-height:200px;text-align:center;background:#2a1a0e;border-bottom:1px solid #cccccc;overflow:hidden;}
  .fc-hero::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(0,0,0,0.02) 40px,rgba(0,0,0,0.02) 41px);pointer-events:none;}
  .fc-track{position:absolute;bottom:0;left:0;right:0;height:20px;background:repeating-linear-gradient(90deg,#cccccc 0px,#cccccc 30px,transparent 30px,transparent 50px);opacity:0.3;}
  .fc-track::before,.fc-track::after{content:'';position:absolute;left:0;right:0;height:3px;background:#cccccc;opacity:0.4;}
  .fc-track::before{top:4px;}
  .fc-track::after{bottom:4px;}
  .fc-hero-icon{font-size:60px;display:block;margin-bottom:12px;animation:fc-chug 2.5s ease-in-out infinite;}
  @keyframes fc-chug{0%,100%{transform:translateX(0);}25%{transform:translateX(3px);}75%{transform:translateX(-3px);}}
  .fc-hero-tag{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#ffffff;margin-bottom:10px;opacity:0.8;}
  .fc-hero-title{font-family:'Playfair Display',serif;font-size:clamp(32px,5vw,64px);font-weight:900;line-height:1;margin-bottom:12px;color:#ffffff;}
  .fc-hero-title em{font-style:italic;color:#ffffff;}
  .fc-hero-sub{font-size:16px;color:#ffffff;max-width:600px;margin:12px auto 0;line-height:1.7;font-weight:400;}

  .fc-wrap{max-width:1200px;margin:0 auto;padding:48px 24px 100px;}

  /* Date banner */
  .fc-date-banner{background:var(--iron);border:1px solid #cccccc;border-radius:16px;padding:28px 32px;margin-bottom:32px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;border-left:5px solid var(--gold);box-shadow:0 2px 8px rgba(0,0,0,0.1);}
  .fc-date-label{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--smoke);margin-bottom:6px;font-weight:600;}
  .fc-date-value{font-family:'Playfair Display',serif;font-size:clamp(22px,3vw,32px);font-weight:700;color:var(--steam);}
  .fc-date-holiday{font-size:14px;color:var(--gold);margin-top:6px;font-family:'DM Mono',monospace;letter-spacing:0.05em;font-weight:500;}
  .fc-weather-panel{display:flex;align-items:center;gap:24px;flex-wrap:wrap;}
  .fc-wx-item{text-align:center;}
  .fc-wx-icon{font-size:32px;display:block;}
  .fc-wx-label{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--smoke);margin-top:4px;font-weight:500;}
  .fc-wx-val{font-size:16px;font-weight:700;color:var(--steam);}
  .fc-wx-loading{font-family:'DM Mono',monospace;font-size:12px;color:var(--smoke);animation:blink 1s infinite;}
  @keyframes blink{0%,100%{opacity:1;}50%{opacity:0.3;}}

  .fc-card{background:var(--iron);border:1px solid #cccccc;border-radius:16px;padding:32px;margin-bottom:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);transition:box-shadow 0.3s ease;}
  .fc-card:hover{box-shadow:0 4px 20px rgba(0,0,0,0.12);}
  .fc-card-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--gold);margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #cccccc;}

  /* Time grid */
  .fc-time-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;}
  .fc-time-btn{display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 12px;border-radius:12px;border:2px solid #cccccc;background:var(--iron2);cursor:pointer;transition:all 0.3s;font-weight:500;}
  .fc-time-btn:hover{border-color:#999999;background:#e8e8e8;}
  .fc-time-btn:has(input:checked){border-color:var(--gold);background:#f5f5f5;}
  .fc-time-btn input{display:none;}
  .fc-time-label{font-family:'DM Mono',monospace;font-size:13px;font-weight:700;color:var(--steam);}
  .fc-time-temp{font-size:12px;color:var(--smoke);font-weight:500;}
  .fc-time-busy{font-size:11px;font-family:'DM Mono',monospace;letter-spacing:0.05em;font-weight:600;}
  .busy-low{color:#4caf82;}.busy-mid{color:#f59e0b;}.busy-peak{color:#ef4444;}

  /* Event checkboxes */
  .fc-event-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;}
  .fc-event-btn{display:flex;align-items:center;gap:10px;padding:14px 18px;border-radius:12px;border:2px solid #cccccc;background:var(--iron2);cursor:pointer;font-size:14px;color:var(--smoke);transition:all 0.3s;font-weight:500;}
  .fc-event-btn:hover{border-color:#999999;background:#e8e8e8;}
  .fc-event-btn:has(input:checked){border-color:var(--gold);color:var(--gold);background:#f5f5f5;}
  .fc-event-btn input{display:none;}

  .fc-btn{width:100%;padding:18px;background:#2a1a0e;border:none;border-radius:12px;color:#ffffff;font-family:'DM Mono',monospace;font-size:14px;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:all 0.3s;margin-top:8px;font-weight:600;}
  .fc-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(42,26,14,0.4);background:#1a0f08;}
  .fc-btn:disabled{opacity:0.5;cursor:not-allowed;transform:none;}

  .fc-result{display:none;}
  .fc-result.show{display:block;animation:fc-fade 0.5s ease;}
  @keyframes fc-fade{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:none;}}

  /* Big number */
  .fc-big{background:#f8f9fa;border:2px solid #cccccc;border-radius:20px;padding:48px;text-align:center;margin-bottom:24px;box-shadow:0 4px 16px rgba(0,0,0,0.1);}
  .fc-big-time{font-family:'DM Mono',monospace;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;font-weight:600;}
  .fc-big-num{font-family:'Playfair Display',serif;font-size:clamp(64px,12vw,96px);font-weight:900;color:var(--ember);line-height:1;}
  .fc-big-unit{font-family:'DM Mono',monospace;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:var(--smoke);margin-top:8px;font-weight:500;}
  .fc-crowd-wrap{margin-top:24px;}
  .fc-crowd-sublabel{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--smoke);margin-bottom:12px;font-weight:600;}
  .fc-crowd-bar-bg{height:16px;background:#cccccc;border-radius:8px;overflow:hidden;border:1px solid #999999;}
  .fc-crowd-bar-fill{height:100%;border-radius:8px;transition:width 1.2s cubic-bezier(0.4,0,0.2,1);}
  .fc-crowd-pct-text{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-top:12px;}

  /* Factors */
  .fc-factors{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px;}
  .fc-factor{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.08em;padding:5px 12px;border-radius:20px;border:1px solid;text-transform:uppercase;}
  .fc-factor.pos{background:rgba(45,106,79,0.15);color:#4caf82;border-color:rgba(76,175,130,0.3);}
  .fc-factor.neg{background:rgba(185,74,28,0.15);color:#fb923c;border-color:rgba(185,74,28,0.3);}
  .fc-factor.neu{background:rgba(255,255,255,0.05);color:var(--smoke);border-color:rgba(255,255,255,0.1);}

  .fc-tip{border-radius:12px;padding:18px 20px;margin-bottom:24px;font-size:14px;line-height:1.6;font-weight:400;}
  .fc-tip.busy{background:#fef2f2;border:2px solid #fca5a5;color:#dc2626;}
  .fc-tip.mod{background:#fefce8;border:2px solid #fcd34d;color:#d97706;}
  .fc-tip.quiet{background:#f0fdf4;border:2px solid #a7f3d0;color:#166534;}

  /* Hourly chart */
  .fc-hour-row{display:flex;align-items:center;gap:12px;margin-bottom:10px;padding:8px 0;border-bottom:1px solid #f0f0f0;}
  .fc-hour-time{font-family:'DM Mono',monospace;font-size:11px;color:var(--smoke);width:80px;flex-shrink:0;text-align:right;font-weight:600;}
  .fc-hour-bar-bg{flex:1;height:24px;background:#cccccc;border-radius:6px;overflow:hidden;border:1px solid #999999;}
  .fc-hour-bar{height:100%;border-radius:6px;transition:width 1s cubic-bezier(0.4,0,0.2,1);display:flex;align-items:center;padding-left:10px;}
  .fc-hour-txt{font-family:'DM Mono',monospace;font-size:11px;color:var(--text);white-space:nowrap;font-weight:600;}
  .fc-hour-temp{font-family:'DM Mono',monospace;font-size:11px;color:var(--smoke);width:45px;flex-shrink:0;font-weight:500;}
  .fc-active-hour .fc-hour-time{color:var(--gold);font-weight:700;}

  /* Feature weights */
  .fc-wt{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;display:flex;align-items:center;gap:8px;font-weight:600;}
  .fc-wt::after{content:'';flex:1;height:2px;background:#cccccc;}
  .fc-wr{display:flex;align-items:center;gap:12px;margin-bottom:10px;padding:8px 0;border-bottom:1px solid #f0f0f0;}
  .fc-wn{font-family:'DM Mono',monospace;font-size:11px;color:var(--smoke);width:130px;flex-shrink:0;text-transform:uppercase;letter-spacing:0.05em;font-weight:500;}
  .fc-wb-bg{flex:1;height:10px;background:#cccccc;border-radius:5px;overflow:hidden;border:1px solid #999999;}
  .fc-wb{height:100%;border-radius:5px;background:var(--gold);opacity:0.8;transition:width 1s cubic-bezier(0.4,0,0.2,1);}
  .fc-wp{font-family:'DM Mono',monospace;font-size:11px;color:var(--gold);width:40px;text-align:right;flex-shrink:0;font-weight:600;}

  .fc-error{display:none;margin-top:12px;padding:12px 16px;background:rgba(127,29,29,0.3);border:1px solid rgba(185,74,28,0.4);border-radius:8px;font-size:13px;color:#fca5a5;}
  /* Unified Poway hero banner */
  .rr-hero, .eq-hero, .pf-hero, .fc-hero, .hs-hero {
    position: relative !important;
    padding: 72px 24px 52px !important;
    text-align: center !important;
    background: #1e1208 !important;
    border-bottom: 3px solid #b94a1c !important;
    overflow: hidden !important;
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
  .rr-hero h1, .eq-hero-title, .fc-hero-title, .hs-hero h1, .pf-name {
    font-family: "Goudy Old Style", "Goudy Bold", "Goudy", Georgia, serif !important;
    font-size: clamp(36px, 6vw, 68px) !important;
    font-weight: 700 !important;
    line-height: 1.2 !important;
    margin-bottom: 12px !important;
    color: #ffffff !important;
    letter-spacing: -0.01em !important;
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

<div class="fc-page">
  <div class="fc-hero">
    <span class="fc-hero-icon"></span>
    <div class="fc-hero-tag">AI-Powered Analytics · Poway–Midland Railroad</div>
    <h1 class="fc-hero-title">Visitor Flow<br><em>Intelligence</em></h1>
    <p class="fc-hero-sub">Advanced machine learning algorithms analyze real-time weather patterns, historical data, and seasonal trends to provide precise crowd predictions for the Poway–Midland Railroad experience.</p>
    <div class="fc-track"></div>
  </div>

  <div class="fc-wrap">

    <!-- Auto date + live weather -->
    <div class="fc-date-banner">
      <div>
        <div class="fc-date-label">Forecasting for</div>
        <div class="fc-date-value" id="fcDateVal">Loading...</div>
        <div class="fc-date-holiday" id="fcHolidayBadge"></div>
      </div>
      <div class="fc-weather-panel" id="fcWeatherPanel">
        <span class="fc-wx-loading">⟳ Fetching Poway weather...</span>
      </div>
    </div>

    <!-- Time selector -->
    <div class="fc-card">
      <div class="fc-card-title">🕐 Arrival Time Selection</div>
      <div class="fc-time-grid" id="fcTimeGrid">
        <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--smoke);">Loading...</div>
      </div>
    </div>

    <button class="fc-btn" id="fcBtn" onclick="fcPredict()">📈 Generate Intelligence Report</button>
    <div class="fc-error" id="fcError"></div>

    <!-- Result -->
    <div class="fc-result" id="fcResult">
      <div class="fc-big">
        <div class="fc-big-time" id="fcBigTime"></div>
        <div class="fc-big-num"  id="fcBigNum">—</div>
        <div class="fc-big-unit">estimated visitors</div>
        <div class="fc-crowd-wrap">
          <div class="fc-crowd-sublabel">Crowd Level</div>
          <div class="fc-crowd-bar-bg"><div class="fc-crowd-bar-fill" id="fcCrowdFill" style="width:0%"></div></div>
          <div class="fc-crowd-pct-text" id="fcCrowdPct"></div>
        </div>
      </div>

      <div class="fc-factors" id="fcFactors"></div>
      <div class="fc-tip" id="fcTip"></div>

      <div class="fc-card">
        <div class="fc-card-title">📊 Complete Daily Forecast</div>
        <div id="fcHourly"></div>
      </div>

      <div class="fc-card">
        <div class="fc-card-title">🔍 Predictive Model Insights</div>
        <div class="fc-wt">Algorithm Decision Factors</div>
        <div id="fcWeights"></div>
      </div>
    </div>

  </div>
</div>

<script>
const BACKEND = pythonURI;
const LAT = 32.9728, LON = -117.0359;

// ── US Federal Holidays + CA observances 2025–2027 ────────────────────────
const HOLIDAYS = {
  // 2025
  '2025-01-01':"New Year's Day 🎆",'2025-01-20':'MLK Jr. Day',
  '2025-02-17':"Presidents' Day",'2025-04-18':'Good Friday',
  '2025-04-20':'Easter Sunday 🐰','2025-05-26':'Memorial Day',
  '2025-07-04':'Independence Day 🎆','2025-09-01':'Labor Day',
  '2025-10-31':'Halloween 🎃','2025-11-11':'Veterans Day',
  '2025-11-27':'Thanksgiving 🦃','2025-12-24':'Christmas Eve',
  '2025-12-25':'Christmas 🎄','2025-12-31':"New Year's Eve",
  // 2026
  '2026-01-01':"New Year's Day 🎆",'2026-01-19':'MLK Jr. Day',
  '2026-02-16':"Presidents' Day",'2026-04-03':'Good Friday',
  '2026-04-05':'Easter Sunday 🐰','2026-05-25':'Memorial Day',
  '2026-07-04':'Independence Day 🎆','2026-09-07':'Labor Day',
  '2026-10-31':'Halloween 🎃','2026-11-11':'Veterans Day',
  '2026-11-26':'Thanksgiving 🦃','2026-12-24':'Christmas Eve',
  '2026-12-25':'Christmas 🎄','2026-12-31':"New Year's Eve",
  // 2027
  '2027-01-01':"New Year's Day 🎆",'2027-01-18':'MLK Jr. Day',
  '2027-02-15':"Presidents' Day",'2027-03-26':'Good Friday',
  '2027-03-28':'Easter Sunday 🐰','2027-05-31':'Memorial Day',
  '2027-07-04':'Independence Day 🎆','2027-09-06':'Labor Day',
  '2027-10-31':'Halloween 🎃','2027-11-11':'Veterans Day',
  '2027-11-25':'Thanksgiving 🦃','2027-12-24':'Christmas Eve',
  '2027-12-25':'Christmas 🎄','2027-12-31':"New Year's Eve",
};

const SCHOOL_BREAKS = [
  // Poway USD approximate breaks
  ['2025-06-12','2025-08-14'],['2025-03-31','2025-04-07'],
  ['2024-12-23','2025-01-05'],['2025-11-24','2025-11-28'],
  ['2026-03-30','2026-04-06'],['2026-06-11','2026-08-13'],
  ['2025-12-22','2026-01-05'],['2026-11-23','2026-11-27'],
  ['2027-03-29','2027-04-05'],['2027-06-10','2027-08-12'],
  ['2026-12-21','2027-01-04'],
];

const BUCKETS_SAT = [
  {label:'10–11 AM',start:10,peak:0.55},
  {label:'11 AM–12 PM',start:11,peak:0.85},
  {label:'12–1 PM',start:12,peak:1.00},
  {label:'1–2 PM',start:13,peak:0.75},
];
const BUCKETS_SUN = [
  {label:'11 AM–12 PM',start:11,peak:0.80},
  {label:'12–1 PM',start:12,peak:1.00},
  {label:'1–2 PM',start:13,peak:0.70},
];

const FEAT_NAMES = {
  is_saturday:'Saturday',day_of_month:'Day of Month',weather_sunny:'Sunny',
  rides:'No. Rides',capacity:'Capacity',train_steam:'Steam Loco',
  month:'Month',temperature:'Temperature',is_school_break:'School Break',
  has_event:'Special Event',is_holiday:'Holiday',weather_rainy:'Rainy',
  weather_cloudy:'Cloudy',weather_windy:'Windy',train_cable:'Cable Car',
  temp_mild:'Mild Temp',temp_warm:'Warm Temp',temp_hot:'Hot Temp',temp_cold:'Cold Temp',
};

function wxFromCode(c){
  if(c===0)return{label:'Clear',emoji:'☀️',type:'sunny'};
  if(c<=2) return{label:'Partly Cloudy',emoji:'⛅',type:'cloudy'};
  if(c<=3) return{label:'Overcast',emoji:'☁️',type:'cloudy'};
  if(c<=49)return{label:'Foggy',emoji:'🌫️',type:'cloudy'};
  if(c<=67)return{label:'Rainy',emoji:'🌧️',type:'rainy'};
  if(c<=82)return{label:'Showers',emoji:'🌦️',type:'rainy'};
  return      {label:'Stormy',emoji:'⛈️',type:'rainy'};
}

let fcData={date:'',isSat:false,isSun:false,isHoliday:false,holidayName:'',isSchoolBreak:false,weather:null};

async function fcInit(){
  const tomorrow=new Date(); tomorrow.setDate(tomorrow.getDate()+1);
  const y=tomorrow.getFullYear(), m=String(tomorrow.getMonth()+1).padStart(2,'0'), d=String(tomorrow.getDate()).padStart(2,'0');
  fcData.date=`${y}-${m}-${d}`;
  fcData.isSat=tomorrow.getDay()===6;
  fcData.isSun=tomorrow.getDay()===0;

  // Date display
  const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONS=['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('fcDateVal').textContent=`${DAYS[tomorrow.getDay()]}, ${MONS[tomorrow.getMonth()]} ${tomorrow.getDate()}, ${y}`;

  // Holiday
  fcData.holidayName=HOLIDAYS[fcData.date]||'';
  fcData.isHoliday=!!fcData.holidayName;
  const td=new Date(fcData.date);
  fcData.isSchoolBreak=SCHOOL_BREAKS.some(([s,e])=>td>=new Date(s)&&td<=new Date(e));

  const badge=document.getElementById('fcHolidayBadge');
  if(fcData.holidayName) badge.textContent='🎉 '+fcData.holidayName;
  else if(fcData.isSchoolBreak) badge.textContent='🏫 School Break Week';
  else if(!fcData.isSat&&!fcData.isSun){badge.textContent='⚠️ No rides tomorrow (weekday)';badge.style.color='var(--smoke)';}

  // Build time slots first (no temp yet)
  fcBuildSlots();
  // Fetch weather
  await fcFetchWeather();
}

async function fcFetchWeather(){
  try{
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&hourly=temperature_2m,precipitation_probability,weather_code&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles&forecast_days=2`;
    const res=await fetch(url); const data=await res.json();
    // Tomorrow = indices 24–47
    fcData.weather={
      times:data.hourly.time.slice(24,48),
      temps:data.hourly.temperature_2m.slice(24,48),
      precip:data.hourly.precipitation_probability.slice(24,48),
      codes:data.hourly.weather_code.slice(24,48),
    };
    // Op hours summary (10am–2pm)
    const op=fcData.weather.times.map((t,i)=>{const h=new Date(t).getHours();return h>=10&&h<=14?i:-1;}).filter(i=>i>=0);
    const avgT=Math.round(op.reduce((s,i)=>s+fcData.weather.temps[i],0)/op.length);
    const avgP=Math.round(op.reduce((s,i)=>s+fcData.weather.precip[i],0)/op.length);
    const midWx=wxFromCode(fcData.weather.codes[op[Math.floor(op.length/2)]]);
    document.getElementById('fcWeatherPanel').innerHTML=`
      <div class="fc-wx-item"><span class="fc-wx-icon">${midWx.emoji}</span><div class="fc-wx-label">Conditions</div><div class="fc-wx-val">${midWx.label}</div></div>
      <div class="fc-wx-item"><span class="fc-wx-icon">🌡️</span><div class="fc-wx-label">Temp (op hours)</div><div class="fc-wx-val">${avgT}°F</div></div>
      <div class="fc-wx-item"><span class="fc-wx-icon">☔</span><div class="fc-wx-label">Rain Chance</div><div class="fc-wx-val">${avgP}%</div></div>`;
    // Update slot temps
    fcUpdateSlotTemps();
  }catch(e){
    document.getElementById('fcWeatherPanel').innerHTML=`<span style="font-size:13px;color:var(--smoke);">⚠️ Weather unavailable — using seasonal averages</span>`;
  }
}

function fcBuildSlots(){
  const buckets=fcData.isSat?BUCKETS_SAT:BUCKETS_SUN;
  const grid=document.getElementById('fcTimeGrid');
  if(!fcData.isSat&&!fcData.isSun){
    grid.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--smoke);padding:8px;">⚠️ No rides on weekdays</div>`;
    return;
  }
  grid.innerHTML=buckets.map((b,i)=>`
    <label class="fc-time-btn">
      <input type="radio" name="fcSlot" value="${i}" ${i===1?'checked':''}>
      <span class="fc-time-label">${b.label}</span>
      <span class="fc-time-temp" id="fcST-${i}">—°F</span>
      <span class="fc-time-busy ${b.peak>=0.95?'busy-peak':b.peak>=0.75?'busy-mid':'busy-low'}" id="fcSB-${i}">
        ${b.peak>=0.95?'⬤ Peak':b.peak>=0.75?'⬤ Busy':'⬤ Calm'}
      </span>
    </label>`).join('');
}

function fcUpdateSlotTemps(){
  if(!fcData.weather) return;
  const buckets=fcData.isSat?BUCKETS_SAT:BUCKETS_SUN;
  buckets.forEach((b,i)=>{
    const el=document.getElementById(`fcST-${i}`); if(!el) return;
    const idx=fcData.weather.times.findIndex(t=>new Date(t).getHours()===b.start);
    if(idx>=0) el.textContent=Math.round(fcData.weather.temps[idx])+'°F';
  });
}

async function fcPredict(){
  const btn=document.getElementById('fcBtn'), errEl=document.getElementById('fcError');
  errEl.style.display='none';
  const tomorrow=new Date(); tomorrow.setDate(tomorrow.getDate()+1);
  const month=tomorrow.getMonth()+1, dom=tomorrow.getDate();
  const isSat=fcData.isSat;
  const hasEvent = false;

  const slotIdx=parseInt(document.querySelector('input[name="fcSlot"]:checked')?.value||1);
  const buckets=isSat?BUCKETS_SAT:BUCKETS_SUN;
  const bucket=buckets[slotIdx]||buckets[0];

  let weather='sunny', temperature=75, wxEmoji='☀️', wxLabel='Clear';
  if(fcData.weather){
    const idx=fcData.weather.times.findIndex(t=>new Date(t).getHours()===bucket.start);
    if(idx>=0){
      temperature=Math.round(fcData.weather.temps[idx]);
      const wx=wxFromCode(fcData.weather.codes[idx]);
      weather=wx.type; wxEmoji=wx.emoji; wxLabel=wx.label;
    }
  }

  btn.disabled=true; btn.textContent='⏳ Generating...';
  try{
    const res=await fetch(`${BACKEND}/api/visitor/predict`,{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({month,day_of_month:dom,is_saturday:isSat,
        is_holiday:fcData.isHoliday,is_school_break:fcData.isSchoolBreak,
        has_event:hasEvent,weather,train_type:isSat?'steam':'cable',temperature})
    });
    if(!res.ok) throw new Error('HTTP '+res.status);
    const data=await res.json();
    showResult(data,bucket,weather,wxEmoji,wxLabel,temperature,hasEvent,isSat,buckets);
  }catch(e){
    errEl.textContent='⚠️ Could not reach backend. Make sure the server is running on localhost:8428.';
    errEl.style.display='block';
  }finally{btn.disabled=false;btn.textContent='📈 Generate Forecast';}
}

function showResult(data,bucket,weather,wxEmoji,wxLabel,temp,hasEvent,isSat,buckets){
  const base=data.predicted_visitors;
  const visitors=Math.round(base*bucket.peak);
  const cap=data.capacity;
  const occ=Math.min(98,Math.round(visitors/cap*100));
  const weights=data.feature_weights;

  document.getElementById('fcBigTime').textContent='During '+bucket.label;
  document.getElementById('fcBigNum').textContent=visitors.toLocaleString();
  const barColor=occ>=65?'#ef4444':occ>=40?'#f59e0b':'#4caf82';
  document.getElementById('fcCrowdFill').style.background=barColor;
  document.getElementById('fcCrowdPct').textContent=occ+'% capacity';
  document.getElementById('fcCrowdPct').style.color=barColor;
  setTimeout(()=>{document.getElementById('fcCrowdFill').style.width=occ+'%';},50);

  // Factors
  const facts=[];
  facts.push({label:wxEmoji+' '+wxLabel,type:weather==='sunny'?'pos':weather==='rainy'?'neg':'neu'});
  if(temp<60)facts.push({label:'🥶 Cold',type:'neg'});
  else if(temp<78)facts.push({label:'😊 Mild',type:'pos'});
  else if(temp<88)facts.push({label:'😎 Warm',type:'pos'});
  else facts.push({label:'🔥 Hot',type:'neg'});
  if(fcData.isHoliday)facts.push({label:'🎉 '+fcData.holidayName,type:'pos'});
  if(fcData.isSchoolBreak)facts.push({label:'🏫 School Break',type:'pos'});
  if(hasEvent)facts.push({label:' Special Event',type:'pos'});
  facts.push({label:'⏰ '+bucket.label,type:bucket.peak>=0.95?'neg':'neu'});
  document.getElementById('fcFactors').innerHTML=facts.map(f=>`<span class="fc-factor ${f.type}">${f.label}</span>`).join('');

  // Tip
  const tipEl=document.getElementById('fcTip');
  if(occ>=65){tipEl.className='fc-tip busy';tipEl.innerHTML=`<strong>🔥 Very Busy!</strong> Expect full rides and waits. Arrive 15–20 min early. Book your ride online before heading out.`;}
  else if(occ>=40){tipEl.className='fc-tip mod';tipEl.innerHTML=`<strong>👍 Moderate Crowd.</strong> Good attendance expected — most time slots accessible with short waits.`;}
  else{tipEl.className='fc-tip quiet';tipEl.innerHTML=`<strong>✅ Relaxed Day.</strong> Walk-on rides likely available. ${weather==='rainy'?'Rain may keep crowds away — bring a jacket!':'Enjoy the open air and easy boarding!'}`;}

  // Hourly breakdown
  const maxV=Math.max(...buckets.map(b=>Math.round(base*b.peak)));
  document.getElementById('fcHourly').innerHTML=buckets.map(b=>{
    const v=Math.round(base*b.peak);
    const barW=Math.round(v/maxV*100);
    const color=b.peak>=0.95?'#ef4444':b.peak>=0.75?'#f59e0b':'#4caf82';
    const crowd=b.peak>=0.95?'Peak':b.peak>=0.75?'Busy':'Calm';
    const isActive=b.label===bucket.label;
    let tStr='';
    if(fcData.weather){const idx=fcData.weather.times.findIndex(t=>new Date(t).getHours()===b.start);if(idx>=0)tStr=Math.round(fcData.weather.temps[idx])+'°F';}
    return`<div class="fc-hour-row ${isActive?'fc-active-hour':''}">
      <div class="fc-hour-time">${b.label}</div>
      <div class="fc-hour-bar-bg"><div class="fc-hour-bar" style="width:0%;background:${color};" data-w="${barW}">
        <span class="fc-hour-txt">${v} visitors · ${crowd}</span></div></div>
      <div class="fc-hour-temp">${tStr}</div></div>`;
  }).join('');
  setTimeout(()=>{document.querySelectorAll('.fc-hour-bar').forEach(b=>{b.style.width=b.dataset.w+'%';});},100);

  // Feature weights
  if(weights){
    const sorted=Object.entries(weights).sort((a,b)=>b[1]-a[1]).slice(0,8);
    const max=sorted[0]?.[1]||1;
    document.getElementById('fcWeights').innerHTML=sorted.map(([f,imp])=>`
      <div class="fc-wr"><div class="fc-wn">${FEAT_NAMES[f]||f}</div>
      <div class="fc-wb-bg"><div class="fc-wb" style="width:${Math.round(imp/max*100)}%"></div></div>
      <div class="fc-wp">${Math.round(imp*100)}%</div></div>`).join('');
  }

  document.getElementById('fcResult').classList.add('show');
  setTimeout(()=>{document.getElementById('fcResult').scrollIntoView({behavior:'smooth',block:'start'});},100);
}

fcInit();
</script>