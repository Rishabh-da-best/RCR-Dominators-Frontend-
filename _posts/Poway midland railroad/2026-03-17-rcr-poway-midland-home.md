---
layout: base
title: Home page of the project
permalink: /
---

<style>
  
  :root {
    --rust:  #b94a1c; --ember: #e8621a; --gold:  #eca52b;
    --coal:  #faf8f5; --iron:  #ffffff; --iron2: #f0ebe2;
    --steam: #2c1f0e; --smoke: #7a6a58; --rail:  #4a3f35;
  }

  body {
    background: var(--coal);
    color: var(--steam);
    font-family: 'Georgia', serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 54px !important;
    margin: 0;
    position: relative;
    isolation: isolate;
  }

  .page-content {
    max-width: none !important;
    padding: 0 !important;
  }

  .wrapper {
    max-width: none !important;
    padding: 0 !important;
  }

  /* ── PAGE CONTENT — all content sits directly on clean background ── */
  .rr-hero, .rr-wrap, .rr-footer { position: relative; z-index: 10; }

  /* ── HERO ── */
  .rr-hero {
    text-align: center;
    background: #2a1a0e;
    overflow: hidden;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    position: relative;
  }
  .rr-hero::before {
    content: ''; position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 60px,
      rgba(255,255,255,0.012) 60px, rgba(255,255,255,0.012) 61px);
    pointer-events: none;
  }
  /* 图片背景 Hero */
  .rr-hero-image {
    width: 100%;
    background-image: url('/images/rcr/train1.png');
    background-size: cover;
    background-position: center 30%;
    background-repeat: no-repeat;
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
  }
  .rr-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 100%);
    pointer-events: none;
  }
  .rr-hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 60px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rr-hero-image .rr-hero-badge,
  .rr-hero-image .rr-hero-sub {
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  .rr-hero-image .rr-main-title .white-part,
  .rr-hero-image .rr-main-title .orange-part {
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }
  .rr-hero-track {
    position: absolute; bottom: 0; left: 0; right: 0; height: 20px;
    background: repeating-linear-gradient(
      90deg, var(--rail) 0px, var(--rail) 30px, transparent 30px, transparent 50px);
    opacity: 0.4;
  }
  .rr-hero-icon { font-size:72px; display:block; margin-bottom:16px; animation:rr-chug 3s ease-in-out infinite; }
  @keyframes rr-chug {
    0%,100% { transform:translateX(0); }
    25%     { transform:translateX(4px); }
    75%     { transform:translateX(-4px); }
  }
  .rr-main-title {
    margin: 8px 0 12px 0;
    line-height: 1.2;
    font-family: "Goudy Old Style", "Goudy Bold", "Goudy", Georgia, serif;
  }
  .rr-main-title .white-part {
    color: white;
    font-size: clamp(36px, 6vw, 68px);
    font-weight: 700;
    display: block;
    letter-spacing: -0.01em;
  }
  .rr-main-title .orange-part {
    color: var(--ember);
    font-size: clamp(36px, 6vw, 68px);
    font-weight: 700;
    display: block;
    letter-spacing: -0.01em;
    font-style: italic;
  }
  .rr-hero-badge {
    font-family:'Courier New',monospace; font-size:10px;
    letter-spacing:0.3em; text-transform:uppercase;
    color:var(--gold); margin-bottom:16px; opacity:0.85;
  }
  .rr-hero-title {
    font-size:clamp(36px,7vw,76px); font-weight:700;
    color:#ffffff; line-height:1; margin-bottom:16px;
  }
  .rr-hero-title em { font-style:italic; color:#ffffff; }
  .rr-hero-sub {
    font-size:16px; color:#ffffff; max-width:800px;
    margin:0 auto 36px; line-height:1.7;
  }
  .rr-hero-btns { 
    display: flex; 
    gap: 12px; 
    justify-content: center; 
    flex-wrap: wrap; 
    margin: 0 auto; 
    text-align: center; 
  }
  .rr-btn-primary {
    padding:14px 28px; background:var(--rust); border:none;
    border-radius:4px; color:#fff!important; text-decoration:none;
    font-family:'Courier New',monospace; font-size:12px;
    vertical-align: middle;
    letter-spacing:0.12em; text-transform:uppercase;
    transition:background 0.2s, transform 0.15s; cursor:pointer;
    display: inline-block;
  }
  .rr-btn-primary:hover { background:var(--ember); transform:translateY(-2px); }
  .rr-btn-secondary {
    padding:14px 28px; background:transparent;
    border:1px solid var(--gold); border-radius:4px;
    color:var(--gold)!important; text-decoration:none;
    font-family:'Courier New',monospace; font-size:12px;
    letter-spacing:0.12em; text-transform:uppercase; transition:all 0.2s;
    display: inline-block;
  }
  .rr-btn-secondary:hover { background:rgba(201,148,58,0.15); transform:translateY(-2px); }

  /* ── CONTENT ── */
  .rr-wrap { max-width:1400px; margin:0 auto; padding:60px 20px 80px; flex:1; }
  .rr-section-title {
    font-family:'Courier New',monospace; font-size:10px;
    letter-spacing:0.3em; text-transform:uppercase;
    color:var(--gold); margin-bottom:24px;
    display:flex; align-items:center; gap:12px;
  }
  .rr-section-title::after { content:''; flex:1; height:1px; background:#cccccc; }

  /* Quick links */
  .rr-quick {
    display:grid; grid-template-columns:repeat(4,1fr);
    gap:12px;
  }
  @media(max-width:900px){ .rr-quick{ grid-template-columns:repeat(2,1fr); } }
  .rr-quick-card {
    background:rgba(46,38,32,0.85); border:1px solid rgba(255,255,255,0.07);
    border-radius:10px; padding:20px; text-align:center;
    text-decoration:none; transition:all 0.2s;
    backdrop-filter:blur(4px);
    display: block;
  }
  .rr-quick-card:hover { background:rgba(58,46,40,0.95); transform:translateY(-3px); border-color:var(--gold); }
  .rr-quick-icon { font-size:32px; display:block; margin-bottom:10px; }
  .rr-quick-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color: var(--gold); }
  .rr-quick-sub { font-size:12px; color: #ffffff; margin-top:4px; }

  /* News - 修改：让整个卡片可点击 */
  .rr-news-grid { 
    display:grid; 
    grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); 
    gap:16px; 
    margin-bottom:60px; 
  }
  .rr-news-card {
    background:rgba(46,38,32,0.85); 
    border:1px solid rgba(255,255,255,0.07);
    border-radius:10px; 
    padding:22px; 
    border-top:3px solid var(--rust);
    transition:transform 0.2s, box-shadow 0.2s; 
    backdrop-filter:blur(4px);
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
  .rr-news-card:hover { 
    transform:translateY(-3px); 
    box-shadow:0 8px 24px rgba(0,0,0,0.5); 
  }
  .rr-news-date { 
    font-family:'Courier New',monospace; 
    font-size:10px; 
    letter-spacing:0.1em; 
    text-transform:uppercase; 
    color:var(--gold); 
    margin-bottom:10px; 
  }
  .rr-news-card h3 { 
    font-size:18px; 
    color:var(--steam); 
    margin-bottom:8px; 
    line-height:1.3; 
  }
  .rr-news-card p { 
    font-size:13px; 
    color:var(--smoke); 
    line-height:1.7; 
    margin-bottom:14px; 
  }
  .rr-news-tag { 
    font-family:'Courier New',monospace; 
    font-size:9px; 
    letter-spacing:0.15em; 
    text-transform:uppercase; 
    padding:4px 10px; 
    border-radius:2px; 
    background:rgba(201,148,58,0.15); 
    color:var(--gold); 
    border:1px solid rgba(201,148,58,0.2); 
    display: inline-block; 
  }

  /* Contact */
  .rr-contact {
    background:rgba(46,38,32,0.9); border:1px solid rgba(255,255,255,0.07);
    border-radius:12px; padding:36px; border-left:4px solid var(--rust);
    display:flex; justify-content:space-between; align-items:center;
    flex-wrap:wrap; gap:24px; backdrop-filter:blur(4px);
  }
  .rr-contact h2 { font-size:24px; color:var(--steam); margin-bottom:12px; }
  .rr-contact p  { font-size:14px; color:var(--smoke); line-height:1.8; }
  .rr-contact p span { color:var(--gold); font-family:'Courier New',monospace; font-size:12px; }

  /* Footer */
  .rr-footer {
    background:rgba(46,38,32,0.95); border-top:1px solid rgba(255,255,255,0.07);
    padding:20px; text-align:center;
    font-family:'Courier New',monospace; font-size:10px;
    letter-spacing:0.1em; text-transform:uppercase; color:var(--smoke);
  }

  @media(max-width:600px){
    .rr-contact{ flex-direction:column; }
  }

  /* base link styles */
  a { text-decoration: none; }
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

<body>

<!-- HERO - 图片背景版本 -->
<div class="rr-hero rr-hero-image">
  <div class="rr-hero-overlay"></div>
  <div class="rr-hero-content">
    <div class="rr-hero-badge">Since 1987 · Heritage Rail · Old Poway Park</div>
    
    <div class="rr-main-title">
      <span class="white-part">Poway-Midland</span>
      <span class="orange-part">Railroad</span>
    </div>
    
    <p class="rr-hero-sub">Experience the charm of vintage railroading in the heart of Old Poway Park. Our historic locomotive, and other engines and cars, offer an unforgettable journey into the past, perfect for families, train enthusiasts, and history lovers alike.</p>
    
    <div class="rr-hero-btns">
      <a href="/calendar" class="rr-btn-primary">Book a Ride</a>
      <a href="/trains" class="rr-btn-secondary">Our Fleet</a>
    </div>
  </div>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">
  <div class="rr-section-title">Latest News from the Line</div>
  <div class="rr-news-grid">
    <a href="/events/1" class="rr-news-card">
      <div class="rr-news-date">📆 March 10, 2026</div>
      <h3>Steam Every Saturday!</h3>
      <p>Starting 2026, our beloved 1907 Baldwin Steam Locomotive runs every single Saturday. Come feel the steam and hear the whistle every weekend.</p>
      <span class="rr-news-tag">steam · event</span>
    </a>
    <a href="#" class="rr-news-card">
      <div class="rr-news-date">📆 February 28, 2026</div>
      <h3>New Online Booking</h3>
      <p>Reserve your seat before you arrive! Our new online booking system lets you pick your ride time and secure your spot ahead of the weekend rush.</p>
      <span class="rr-news-tag">booking · new</span>
    </a>
    <a href="#" class="rr-news-card">
      <div class="rr-news-date">📆 February 12, 2026</div>
      <h3>Depot Restoration Begins</h3>
      <p>The historic Midland depot is getting a faithful renovation. Volunteer carpenters and historians are working to preserve the 1890s structure.</p>
      <span class="rr-news-tag">preservation</span>
    </a>
  </div>

  <div class="rr-section-title">Quick Access</div>
  <div class="rr-quick">
    <a href="/schedule" class="rr-quick-card"><span class="rr-quick-icon">📅</span><div class="rr-quick-label">Schedule</div><div class="rr-quick-sub">View today's rides</div></a>
    <a href="/calendar" class="rr-quick-card"><span class="rr-quick-icon">🎟️</span><div class="rr-quick-label">Book a Ride</div><div class="rr-quick-sub">Reserve your seat</div></a>
    <a href="/trains" class="rr-quick-card"><span class="rr-quick-icon">🚆</span><div class="rr-quick-label">Our Fleet</div><div class="rr-quick-sub">Meet the trains</div></a>
    <a href="/notes" class="rr-quick-card"><span class="rr-quick-icon">📝</span><div class="rr-quick-label">Notes</div><div class="rr-quick-sub">Share your experience</div></a>
    <a href="/forecast" class="rr-quick-card"><span class="rr-quick-icon">🌤️</span><div class="rr-quick-label">Visitor Forecast</div><div class="rr-quick-sub">ML prediction</div></a>
    <a href="/events" class="rr-quick-card"><span class="rr-quick-icon">🎉</span><div class="rr-quick-label">Events</div><div class="rr-quick-sub">Upcoming activities</div></a>
    <a href="/camera" class="rr-quick-card"><span class="rr-quick-icon">📹</span><div class="rr-quick-label">Live Camera</div><div class="rr-quick-sub">Watch the park live</div></a>
  </div>
</div>
