---
layout: base
title: AI Visitor Assistant
permalink: /railroad/assistant
---

<style>
  :root {
    --background:#ffffff; --white:#ffffff; --text:#000000; --subtext:#666666;
    --border:#cccccc; --input-bg:#f7f7f7; --input-border:#dddddd;
    --rust:#000000; --ember:#333333; --accent:#000000;
    --success:#2d6a4f; --error:#b94a1c;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 100%; height: 100%; }
  body { background: var(--background); color: var(--text); font-family: 'Georgia', serif; }
  .page-content, .wrapper { max-width: none !important; padding: 0 !important; }

  .assistant-page { width: 100%; min-height: 100vh; background: var(--background); color: var(--text); }
  .assistant-wrap { display: flex; flex-direction: column; width: 100%; min-height: 100%; overflow: visible; }

  .rr-hero {
    padding: 32px 34px 26px;
    text-align: left;
    background: var(--background);
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }
  .rr-hero-tag { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.25em;
    text-transform:uppercase; color:var(--subtext); margin-bottom:10px; opacity:0.9; }
  .rr-hero h1 { font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--text); line-height:1.05; margin-bottom:12px; }
  .rr-hero h1 em { font-style:italic; color:var(--ember); }
  .rr-hero p { font-size:14px; color:var(--subtext); max-width:700px; line-height:1.7; }

  .rr-wrap { display: flex; flex: 1; width: 100%; overflow: visible; padding: 24px 24px 24px; }
  .rr-grid-2 { display: grid; grid-template-columns: 0.45fr 0.55fr; gap: 22px; width: 100%; min-height: 0; }
  .rr-grid-2 > div { min-height: 0; }
  @media(max-width:900px) { .rr-grid-2 { grid-template-columns: 1fr; } }

  .rr-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 16px; padding: 26px; border-top: 3px solid var(--accent);
    box-shadow: 0 12px 28px rgba(0,0,0,0.05);
    min-height: 0; overflow: auto;
  }
  .rr-card-title {
    font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.2em;
    text-transform:uppercase; color:var(--text); margin-bottom:16px;
    padding-bottom:10px; border-bottom:1px solid var(--border);
    display:flex; align-items:center; gap:8px;
  }

  /* Chat */
  .chat-window {
    background:var(--input-bg); border-radius:8px; padding:14px;
    height:320px; overflow-y:auto; margin-bottom:14px;
    border:1px solid var(--border);
    display:flex; flex-direction:column; gap:10px;
  }
  .chat-message { padding:10px 14px; border-radius:8px; font-size:13px; line-height:1.6; max-width:88%; }
  .chat-message.assistant {
    background:rgba(0,0,0,0.06); border:1px solid rgba(0,0,0,0.08);
    color:var(--text); align-self:flex-start;
  }
  .chat-message.user {
    background:rgba(0,0,0,0.04); border:1px solid rgba(0,0,0,0.08);
    color:var(--text); align-self:flex-end; text-align:right;
  }
  .rr-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.1em;
    text-transform:uppercase; color:var(--subtext); margin-bottom:6px; display:block; }
  .rr-textarea {
    width:100%; padding:10px 14px; background:var(--input-bg);
    border:1px solid var(--border); border-radius:6px;
    color:var(--text); font-family:'Georgia',serif; font-size:13px;
    resize:vertical; margin-bottom:10px; transition:border-color 0.2s;
  }
  .rr-textarea:focus { outline:none; border-color:var(--text); box-shadow:0 0 0 3px rgba(0,0,0,0.08); }
  .rr-btn-row { display:flex; gap:8px; }
  .rr-btn {
    padding:10px 20px; border:none; border-radius:6px; cursor:pointer;
    font-family:'Courier New',monospace; font-size:11px; letter-spacing:0.1em;
    text-transform:uppercase; transition:all 0.2s;
  }
  .rr-btn-primary { background:var(--rust); color:#fff; }
  .rr-btn-primary:hover { background:var(--ember); transform:translateY(-1px); }
  .rr-btn-secondary { background:var(--input-bg); color:var(--text); border:1px solid var(--border); }
  .rr-btn-secondary:hover { color:var(--text); border-color:var(--text); }
</style>

<div class="assistant-page">
<div class="assistant-wrap">
<div class="rr-hero">
  <div class="rr-hero-tag">AI Powered · Poway–Midland Railroad</div>
  <h1>Visitor <em>Assistant</em></h1>
  <p>Ask for visit recommendations, plan your trip, or explore engagement insights.</p>
</div>

<div class="rr-wrap">
  <div class="rr-card">
    <div class="rr-card-title"> Visitor Assistant</div>
    <div class="chat-window" id="chatWindow"></div>
    <label class="rr-label" for="aiInput">Ask for a recommendation</label>
    <textarea class="rr-textarea" id="aiInput" rows="3" placeholder="e.g. Suggest a 45-minute family visit plan"></textarea>
    <div class="rr-btn-row">
      <button class="rr-btn rr-btn-primary" id="sendBtn"> Get Recommendation</button>
      <button class="rr-btn rr-btn-secondary" id="clearBtn">Clear</button>
    </div>
  </div>
</div>
</div>
</div>

<script>
const chatWindow = document.getElementById('chatWindow');
const aiInput    = document.getElementById('aiInput');

function addMsg(role, text) {
  const d = document.createElement('div');
  d.className = `chat-message ${role}`;
  d.textContent = text;
  chatWindow.appendChild(d);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getReply(p) {
  const lp = p.toLowerCase();
  if (lp.includes('family')||lp.includes('kids'))
    return 'Recommendation: Start with the route map, ride the steam train before noon, then finish with the history timeline for a perfect 45-minute family visit.';
  if (lp.includes('history')||lp.includes('learn'))
    return 'Recommendation: Begin with hotspots 1 and 2, then open the 1995 and 1996 timeline cards for a focused history walkthrough.';
  if (lp.includes('volunteer')||lp.includes('help'))
    return "Recommendation: Use the contact form with subject 'Volunteer Opportunities' and mention your preferred weekend availability.";
  return 'Recommendation: Explore panoramas first, then route map markers, and finish with announcements to check upcoming events.';
}

document.getElementById('sendBtn').addEventListener('click', () => {
  const p = aiInput.value.trim();
  if (!p) return;
  addMsg('user', p);
  addMsg('assistant', getReply(p));
  aiInput.value = '';
});

document.getElementById('clearBtn').addEventListener('click', () => {
  chatWindow.innerHTML = '';
  addMsg('assistant', 'Chat reset. Ask a new question to get recommendations.');
});

addMsg('assistant', 'Hello! Ask for visit ideas, family plans, or volunteer recommendations. ');
</script>