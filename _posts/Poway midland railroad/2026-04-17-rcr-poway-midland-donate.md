---
layout: base
title: Support Us - Donate & Membership
permalink: /donate
---

<style>
  :root {
    --coal: #1a1410;
    --iron: #2a1f18;
    --iron2: #2a1a0e;
    --rust: #b94a1c;
    --ember: #eca52b;
    --gold: #eca52b;
    --steam: #e8e0d0;
    --smoke: #b8aa8a;
    --text: #e8e0d0;
    --subtext: #b8aa8a;
    --background: #1a1410;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: var(--coal);
    color: var(--steam);
    font-family: 'Georgia', serif;
    padding-top: 54px !important;
  }
  
  .page-content {
    max-width: none !important;
    padding: 0 !important;
  }
  
  .wrapper {
    max-width: none !important;
    padding: 0 !important;
  }
  
  /* Hero Section */
  .rr-hero {
    position: relative;
    padding: 60px 24px 40px;
    min-height: 200px;
    text-align: center;
    background: linear-gradient(135deg, #2a1a0e, #1a1410);
    border-bottom: 1px solid rgba(201,148,58,0.3);
    overflow: hidden;
  }
  
  .rr-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 40px,
      rgba(201,148,58,0.03) 40px, rgba(201,148,58,0.03) 41px
    );
    pointer-events: none;
  }
  
  .rr-hero-track {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: repeating-linear-gradient(
      90deg,
      #eca52b 0px, #eca52b 30px,
      transparent 30px, transparent 50px
    );
    opacity: 0.3;
  }
  
  .rr-hero-track::before, .rr-hero-track::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background: #eca52b;
    opacity: 0.4;
  }
  
  .rr-hero-track::before { top: 4px; }
  .rr-hero-track::after { bottom: 4px; }
  
  .rr-hero-tag {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #eca52b;
    margin-bottom: 10px;
    opacity: 0.8;
  }
  
  .rr-hero h1 {
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 10px;
    color: #e8e0d0;
  }
  
  .rr-hero h1 em {
    font-style: italic;
    color: #eca52b;
  }
  
  .rr-hero p {
    font-size: 14px;
    color: #b8aa8a;
    max-width: 560px;
    margin: 0 auto;
    line-height: 1.7;
  }
  
  /* Main Content Wrapper */
  .rr-wrap {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px 80px;
  }
  
  /* Section Styles */
  .rr-section {
    margin-bottom: 48px;
  }
  
  .rr-section-title {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .rr-section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(201,148,58,0.3);
  }
  
  /* Card Styles */
  .rr-card {
    background: var(--iron);
    border: 1px solid rgba(201,148,58,0.2);
    border-radius: 12px;
    padding: 24px;
    border-top: 3px solid var(--rust);
  }
  
  /* Membership Grid */
  .membership-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    gap: 24px;
  }
  
  .membership-card {
    background: rgba(42, 31, 24, 0.6);
    border: 1px solid rgba(201,148,58,0.2);
    border-radius: 10px;
    padding: 28px 20px;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .membership-card:hover {
    transform: translateY(-5px);
    border-color: rgba(201,148,58,0.5);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  }
  
  .membership-card h3 {
    font-family: 'Courier New', monospace;
    font-size: 18px;
    letter-spacing: 0.15em;
    color: #eca52b;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  
  .price {
    font-size: 36px;
    font-weight: bold;
    color: #e8e0d0;
    margin-bottom: 20px;
    font-family: 'Georgia', serif;
  }
  
  .price span {
    font-size: 14px;
    color: #8c7f6e;
  }
  
  .membership-card p {
    font-size: 13px;
    color: #b8aa8a;
    margin-bottom: 25px;
    line-height: 1.6;
  }
  
  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 10px 24px;
    background: linear-gradient(135deg, #e8a735 0%, #c94f1c 100%);
    color: #fff;
    text-decoration: none;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border-radius: 6px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  
  .btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(201, 79, 28, 0.4);
  }
  
  .btn-secondary {
    background: transparent;
    border: 2px solid #eca52b;
    color: #eca52b;
  }
  
  .btn-secondary:hover {
    background: rgba(201,148,58,0.1);
    transform: scale(1.05);
  }
  
  /* Support Grid */
  .support-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }
  
  .support-card {
    background: rgba(42, 31, 24, 0.8);
    border-left: 3px solid #eca52b;
    padding: 24px;
    transition: all 0.3s ease;
  }
  
  .support-card:hover {
    background: rgba(42, 31, 24, 1);
    transform: translateX(5px);
  }
  
  .support-card h3 {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    letter-spacing: 0.15em;
    color: #eca52b;
    margin-bottom: 12px;
    text-transform: uppercase;
  }
  
  .support-card p {
    font-size: 13px;
    color: #b8aa8a;
    line-height: 1.6;
  }
  
  .social-links {
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }
  
  .social-link {
    color: #eca52b;
    text-decoration: none;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    transition: color 0.2s;
  }
  
  .social-link:hover {
    color: #e8a735;
  }
  
  /* Info Box */
  .info-box {
    background: rgba(201,148,58,0.05);
    border: 1px solid rgba(201,148,58,0.2);
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    margin-top: 20px;
  }
  
  .info-box p {
    margin-bottom: 16px;
    font-size: 13px;
    color: #543f0d;
    line-height: 1.6;
  }
  
  .info-box strong {
    color: #593e0e;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .rr-hero h1 { font-size: 32px; }
    .rr-section-title { font-size: 9px; }
    .membership-grid { grid-template-columns: 1fr; }
    .support-grid { grid-template-columns: 1fr; }
    .rr-wrap { padding: 30px 16px 60px; }
  }
  
  @media (max-width: 480px) {
    .rr-hero { padding: 40px 16px 30px; }
    .membership-card { padding: 20px; }
    .price { font-size: 32px; }
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
  <div class="rr-hero-tag">Support · Poway Midland Railroad</div>
  <h1>Donate & <em>Membership</em></h1>
  <p>Becoming a member helps support train operations, restoration projects, and educational programs.</p>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">

  <!-- Membership Options -->
  <div class="rr-section">
    <div class="rr-section-title">Membership Options</div>
    <div class="rr-card">
      <div class="membership-grid">
        
        <div class="membership-card">
          <h3>Individual</h3>
          <div class="price">$30<span>/year</span></div>
          <p>Perfect for individuals who want to support our mission and enjoy the benefits of membership.</p>
          <a href="#" class="btn">Join Now</a>
        </div>
        
        <div class="membership-card">
          <h3>Family</h3>
          <div class="price">$50<span>/year</span></div>
          <p>For all household members. A great way for families to support and enjoy the railroad together.</p>
          <a href="#" class="btn">Join Now</a>
        </div>
        
        <div class="membership-card">
          <h3>Supporter</h3>
          <div class="price">$100<span>/year</span></div>
          <p>Includes special perks, exclusive updates, and recognition in our newsletter.</p>
          <a href="#" class="btn">Join Now</a>
        </div>
        
        <div class="membership-card">
          <h3>Lifetime</h3>
          <div class="price">$500<span>/one-time</span></div>
          <p>A lasting legacy of support for future generations. Lifetime recognition and benefits.</p>
          <a href="#" class="btn">Join Now</a>
        </div>
        
      </div>
    </div>
  </div>

  <!-- Other Ways to Support -->
  <div class="rr-section">
    <div class="rr-section-title">Other Ways to Support</div>
    <div class="support-grid">
      
      <div class="support-card">
        <h3>Donate</h3>
        <p>Help fund train maintenance and restoration. Every contribution keeps our historic trains running.</p>
        <a href="#" class="btn-secondary btn" style="margin-top:15px; display:inline-block;">Make a Donation</a>
      </div>
      
      <div class="support-card">
        <h3>Corporate Sponsorship</h3>
        <p>Partner with us to keep history alive. Corporate sponsors receive prominent recognition and exclusive benefits.</p>
        <a href="#" class="btn-secondary btn" style="margin-top:15px; display:inline-block;">Become a Sponsor</a>
      </div>
      
      <div class="support-card">
        <h3>Spread the Word</h3>
        <p>Follow us on Facebook and Instagram and share your experience. Help us grow our community!</p>
        <div class="social-links">
          <a href="#" class="social-link">Facebook →</a>
          <a href="#" class="social-link">Instagram →</a>
        </div>
      </div>
      
    </div>
  </div>

  <!-- Info Box -->
  <div class="rr-section">
    <div class="info-box">
      <p>All donations and membership fees are tax-deductible to the extent allowed by law.</p>
      <p>For questions about membership or donations, please contact us at <strong>support@pmrr.org</strong></p>
      <a href="#" class="btn" style="margin-top:10px;">Contact Us</a>
    </div>
  </div>

</div>  