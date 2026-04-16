---
layout: base
title: Home page of the project
permalink: /
---

  <style>
    :root {
      --rust:  #b94a1c; --ember: #e8621a; --gold:  #c9943a;
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
      padding-top: 0px;
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
    .rr-hero-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
    .rr-btn-primary {
      padding:14px 28px; background:var(--rust); border:none;
      border-radius:4px; color:#fff; text-decoration:none;
      font-family:'Courier New',monospace; font-size:12px;
      letter-spacing:0.12em; text-transform:uppercase;
      transition:background 0.2s, transform 0.15s; cursor:pointer;
      display: inline-block;
    }
    .rr-btn-primary:hover { background:var(--ember); transform:translateY(-2px); }
    .rr-btn-secondary {
      padding:14px 28px; background:transparent;
      border:1px solid var(--gold); border-radius:4px;
      color:var(--gold); text-decoration:none;
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
      gap:12px; margin-bottom:60px;
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
    .rr-quick-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); }
    .rr-quick-sub { font-size:12px; color:var(--smoke); margin-top:4px; }

    /* News */
    .rr-news-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:16px; margin-bottom:60px; }
    .rr-news-card {
      background:rgba(46,38,32,0.85); border:1px solid rgba(255,255,255,0.07);
      border-radius:10px; padding:22px; border-top:3px solid var(--rust);
      transition:transform 0.2s, box-shadow 0.2s; backdrop-filter:blur(4px);
    }
    .rr-news-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.5); }
    .rr-news-date { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--gold); margin-bottom:10px; }
    .rr-news-card h3 { font-size:18px; color:var(--steam); margin-bottom:8px; line-height:1.3; }
    .rr-news-card p  { font-size:13px; color:var(--smoke); line-height:1.7; margin-bottom:14px; }
    .rr-news-tag { font-family:'Courier New',monospace; font-size:9px; letter-spacing:0.15em; text-transform:uppercase; padding:4px 10px; border-radius:2px; background:rgba(201,148,58,0.15); color:var(--gold); border:1px solid rgba(201,148,58,0.2); display: inline-block; }

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
  </style>
</head>
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
    
    <p class="rr-hero-sub">Your digital depot for steam, steel, and stories. Explore vintage locomotives, real-time schedules, and the volunteers who keep the iron horse alive every weekend in Poway, CA.</p>
    
    <div class="rr-hero-btns">
      <a href="/calendar" class="rr-btn-primary">Book a Ride</a>
      <a href="/trains" class="rr-btn-secondary">Our Fleet</a>
    </div>
  </div>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">
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

  <div class="rr-section-title">Latest News from the Line</div>
  <div class="rr-news-grid">
    <div class="rr-news-card">
      <div class="rr-news-date">📆 March 10, 2026</div>
      <h3>Steam Every Saturday!</h3>
      <p>Starting 2026, our beloved 1907 Baldwin Steam Locomotive runs every single Saturday. Come feel the steam and hear the whistle every weekend.</p>
      <span class="rr-news-tag">steam · event</span>
    </div>
    <div class="rr-news-card">
      <div class="rr-news-date">📆 February 28, 2026</div>
      <h3>New Online Booking</h3>
      <p>Reserve your seat before you arrive! Our new online booking system lets you pick your ride time and secure your spot ahead of the weekend rush.</p>
      <span class="rr-news-tag">booking · new</span>
    </div>
    <div class="rr-news-card">
      <div class="rr-news-date">📆 February 12, 2026</div>
      <h3>Depot Restoration Begins</h3>
      <p>The historic Midland depot is getting a faithful renovation. Volunteer carpenters and historians are working to preserve the 1890s structure.</p>
      <span class="rr-news-tag">preservation</span>
    </div>
  </div>
