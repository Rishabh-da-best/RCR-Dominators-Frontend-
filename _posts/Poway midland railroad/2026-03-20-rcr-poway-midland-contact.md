---
layout: base
title: Contact & Feedback
permalink: /contact
---

<style>

  .contact-page {
  --rust:#000000; --gold:#333333; --green:#000000;
  --background:#ffffff; --white:#ffffff; --primary:#000000;
  --border:#cccccc; --input-bg:#f7f7f7; --input-border:#dddddd;
  --text:#000000; --subtext:#666666;
  --accent:#000000; --accent2:#333333;
  --success:#2d6a4f; --error:#b94a1c;
}
  *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width:100%; height:100%; }
  body {
    background: var(--background);
    color: var(--text);
    font-family: 'Georgia', serif;
    padding-top: 54px !important;
  }

  .page-content, .wrapper { max-width: none !important; padding: 0 !important; }

  .contact-page { width: 100%; min-height: 100vh; background: var(--background); color: var(--text); }
  .contact-wrap { display: flex; flex-direction: column; width: 100%; min-height: 100%; overflow: visible; }

  .rr-hero {
    padding: 60px 24px 40px;
    min-height: 200px;
    text-align: center;
    background: #2a1a0e;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
  }
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
  .rr-hero-tag {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 16px;
    opacity: 0.7;
    font-weight: 600;
  }
  .rr-hero h1 {
    font-size: clamp(42px, 8vw, 88px);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    color: #ffffff;
  }
  .rr-hero h1 em {
    font-style: italic;
    color: #ffffff;
    display: block;
  }
  .rr-hero p {
    font-size: 16px;
    color: #ffffff;
    max-width: 520px;
    margin: 0 auto 40px;
    line-height: 1.7;
    font-weight: 300;
  }

  .rr-wrap { display: flex; flex: 1; width: 100%; overflow: visible; padding: 24px 24px 24px; }
  .rr-grid-2 { display: grid; grid-template-columns: 0.42fr 0.58fr; gap: 22px; width: 100%; min-height: 0; }
  .rr-grid-2 > div { min-height: 0; }
  @media(max-width:900px) { .rr-grid-2 { grid-template-columns: 1fr; } }

  .rr-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 26px;
    border-top: 3px solid var(--accent);
    box-shadow: 0 12px 28px rgba(0,0,0,0.05);
    min-height: 0;
    overflow: auto;
  }
  .rr-card-title {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text);
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }


  .rr-field { margin-bottom: 14px; }
  .rr-label {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 5px;
    display: block;
  }
  .rr-input, .rr-select, .rr-textarea {
    width: 100%;
    padding: 10px 14px;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 6px;
    color: #111;
    font-family: 'Georgia', serif;
    font-size: 13px;
    transition: border-color 0.2s;
  }
  .rr-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236b3f19'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 32px;
  }
  .rr-textarea { resize: vertical; }
  .rr-input:focus, .rr-select:focus, .rr-textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(185,74,28,0.10);
  }
  .rr-select option { background: var(--input-bg); }
  .rr-field-err {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: var(--error);
    margin-top: 4px;
    display: none;
  }
  .rr-field-err.show { display: block; }


  .rr-btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.2s;
    margin-top: 4px;
    background: var(--accent);
    color: #fff;
    box-shadow: 0 1px 2px rgba(107,63,25,0.04);
  }
  .rr-btn:hover {
    background: #222222;
    transform: translateY(-1px);
  }
  .rr-feedback {
    font-size: 12px;
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    display: none;
  }
  .rr-feedback.ok {
    background: rgba(45,106,79,0.08);
    border: 1px solid rgba(45,106,79,0.18);
    color: var(--success);
    display: block;
  }
  .rr-feedback.err {
    background: rgba(185,74,28,0.08);
    border: 1px solid rgba(185,74,28,0.18);
    color: var(--error);
    display: block;
  }


  .rr-checklist { list-style: none; padding: 0; }
  .rr-checklist li {
    padding: 8px 0;
    border-bottom: 1px solid var(--border);
    font-size: 13px;
    color: var(--primary);
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .rr-checklist li::before {
    content: '✓';
    color: var(--accent);
    font-family: 'Courier New', monospace;
    flex-shrink: 0;
  }


  .rr-contact-info { margin-top: 20px; }
  .rr-contact-info p {
    font-size: 13px;
    color: var(--text);
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .rr-contact-info span { color: var(--accent2); }

  .contact-page .rr-contact-info p,
  .contact-page .rr-contact-info span {
    color: var(--text) !important;
    opacity: 1 !important;
  }
</style>

<div class="contact-page">
<div class="contact-wrap">
<div class="rr-hero">
  <div class="rr-hero-tag">Get in Touch · Poway–Midland Railroad</div>
  <h1>Contact <em>&amp; Feedback</em></h1>
  <p>Looking for a unique event?
We offer private train rides for groups, birthdays, and special occassions.</p>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">
  <div class="rr-grid-2">

    <div class="rr-card">
      <div class="rr-card-title"> Send a Message</div>
      <form id="contactForm" novalidate>
        <div class="rr-field">
          <label class="rr-label" for="cName">Name</label>
          <input class="rr-input" id="cName" type="text" required minlength="2">
          <div class="rr-field-err" id="errName"></div>
        </div>
        <div class="rr-field">
          <label class="rr-label" for="cEmail">Email</label>
          <input class="rr-input" id="cEmail" type="email" required>
          <div class="rr-field-err" id="errEmail"></div>
        </div>
        <div class="rr-field">
          <label class="rr-label" for="cSubject">Subject</label>
          <select class="rr-select" id="cSubject" required>
            <option value="">Select a topic</option>
            <option value="tickets">Group Tickets</option>
            <option value="volunteer">Volunteer Opportunities</option>
            <option value="event">Event Support</option>
            <option value="other">Other</option>
          </select>
          <div class="rr-field-err" id="errSubject"></div>
        </div>
        <div class="rr-field">
          <label class="rr-label" for="cMsg">Message</label>
          <textarea class="rr-textarea" id="cMsg" rows="4" required minlength="12"></textarea>
          <div class="rr-field-err" id="errMsg"></div>
        </div>
        <button class="rr-btn" type="submit">Send Message →</button>
        <div class="rr-feedback" id="contactFeedback"></div>
      </form>
    </div>

    <div>
      <div class="rr-card">
        <div class="rr-card-title">📍 Direct Contact</div>
        <div class="rr-contact-info">
          <p><span>📞</span> (858) 748-0379</p>
          <p><span>📧</span> info@powaymidlandrr.org</p>
          <p><span>📍</span> 14134 Midland Rd, Poway, CA 92064</p>
          <p><span>🕐</span> Saturdays &amp; Select Sundays · 10am–2pm</p>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
</div>

<script>
const validateEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function setErr(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg; el.className = 'rr-field-err' + (msg ? ' show' : '');
}
function setFeedback(el, msg, type) {
  el.textContent = msg; el.className = 'rr-feedback ' + (type==='ok'?'ok':'err');
}

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name    = document.getElementById('cName').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const subject = document.getElementById('cSubject').value;
  const msg     = document.getElementById('cMsg').value.trim();
  const fb      = document.getElementById('contactFeedback');
  let valid = true;

  ['errName','errEmail','errSubject','errMsg'].forEach(id => setErr(id,''));

  if (name.length < 2)        { setErr('errName','Please enter a valid name.'); valid=false; }
  if (!validateEmail(email))  { setErr('errEmail','Please enter a valid email address.'); valid=false; }
  if (!subject)               { setErr('errSubject','Please select a subject.'); valid=false; }
  if (msg.length < 12)        { setErr('errMsg','Message must be at least 12 characters.'); valid=false; }

  if (!valid) { setFeedback(fb,'Please fix the highlighted fields before submitting.','err'); return; }
  setFeedback(fb,'Message sent! Our team will follow up shortly. ','ok');
  document.getElementById('contactForm').reset();
});
</script>
