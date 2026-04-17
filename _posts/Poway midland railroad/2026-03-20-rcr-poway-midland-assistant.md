---

layout: base
title: AI Visitor Assistant
permalink: /assistant
---------------------

<style>
:root {
  --background:#ffffff; --white:#ffffff; --text:#000000; --subtext:#666666;
  --border:#cccccc; --input-bg:#f7f7f7;
  --rust:#2a1a0e; --ember:#3a2415;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--background);
  color: var(--text);
  font-family: 'Georgia', serif;
}

.page-content, .wrapper {
  max-width: none !important;
  padding: 0 !important;
}

/* Layout */
.assistant-page {
  width: 100%;
  min-height: 100vh;
}

.assistant-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

/* Hero */
.rr-hero {
  padding: 60px 24px 40px;
  text-align: center;
  background: #2a1a0e;
  color: #fff;
}

.rr-hero h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.rr-hero p {
  font-size: 14px;
  opacity: 0.85;
}

/* Card */
.rr-wrap {
  padding: 24px;
  display: flex;
  justify-content: center;
}

.rr-card {
  width: 420px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
}

/* Chat */
.chat-window {
  background: var(--input-bg);
  border-radius: 8px;
  padding: 14px;
  height: 320px;
  overflow-y: auto;
  margin-bottom: 10px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chat-message {
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  max-width: 85%;
  line-height: 1.6;
}

.chat-message.assistant {
  background: #eeeeee;
  align-self: flex-start;
}

.chat-message.user {
  background: #dddddd;
  align-self: flex-end;
  text-align: right;
}

/* Input */
.rr-textarea {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border);
  margin-bottom: 8px;
  font-size: 13px;
}

.rr-btn {
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  background: var(--rust);
  color: #fff;
  font-weight: 600;
}

/* Suggestions */
#suggestions {
  margin-top: 10px;
}

#suggestions button {
  margin: 4px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  background: #fff;
  font-size: 12px;
}
</style>

<div class="assistant-page">
  <div class="assistant-wrap">

```
<div class="rr-hero">
  <h1>Visitor Assistant</h1>
  <p>Ask anything about tickets, trains, events, or your visit.</p>
</div>

<div class="rr-wrap">
  <div class="rr-card">

    <div class="chat-window" id="chatWindow"></div>

    <textarea id="aiInput" class="rr-textarea" placeholder="Ask something..."></textarea>

    <button id="sendBtn" class="rr-btn">Send</button>

    <div id="suggestions"></div>

  </div>
</div>
```

  </div>
</div>

<script>
// ===== 知识库 =====
const pages = [
  { name:'Schedule', url:'/schedule', keywords:['ticket','book','ride','time','schedule'], desc:'View train times and book rides.' },
  { name:'Calendar', url:'/calendar', keywords:['date','open','day'], desc:'Check open days and train availability.' },
  { name:'Login / Profile', url:'/login', keywords:['login','account','record','history booking'], desc:'Log in to view your bookings.' },
  { name:'Trains', url:'/trains', keywords:['train','steam','locomotive'], desc:'Explore different trains and their history.' },
  { name:'Events', url:'/events', keywords:['event','activity','festival'], desc:'See special events at the park.' },
  { name:'Forecast', url:'/forecast', keywords:['busy','wait','crowd'], desc:'Check crowd levels and wait times.' },
  { name:'Camera', url:'/camera', keywords:['map','view','camera','360'], desc:'Explore the park in 360° view.' },
  { name:'Notes', url:'/notes', keywords:['review','comment','experience'], desc:'Read or share visitor experiences.' },
  { name:'History', url:'/history', keywords:['history','story'], desc:'Learn about the railroad history.' },
  { name:'Contact', url:'/contact', keywords:['contact','help','email','phone'], desc:'Contact the railroad or send a message.' },
  { name:'Volunteer', url:'/volunteer-schedule', keywords:['volunteer','join','signup'], desc:'Sign up for volunteering opportunities.' }
];

// ===== UI =====
const chatWindow = document.getElementById('chatWindow');
const aiInput = document.getElementById('aiInput');

function addMsg(role, text) {
  const d = document.createElement('div');
  d.className = 'chat-message ' + role;
  d.innerHTML = text;
  chatWindow.appendChild(d);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// ===== AI逻辑 =====
function getReply(p) {
  const lp = p.toLowerCase();

  for (let page of pages) {
    for (let k of page.keywords) {
      if (lp.includes(k)) {
        return `
Here’s what you’re looking for:

👉 <a href="${page.url}"><strong>${page.name}</strong></a><br>
${page.desc}
        `;
      }
    }
  }

  if (lp.includes('family') || lp.includes('kids')) {
    return `
Planning a family visit?

👉 <a href="/schedule">Check Train Schedule</a><br>
Steam trains are great for kids!
    `;
  }

  return `
I can help with:

👉 <a href="/schedule">Tickets</a><br>
👉 <a href="/events">Events</a><br>
👉 <a href="/trains">Trains</a><br>
👉 <a href="/contact">Contact</a><br>

Try asking about booking, trains, or activities!
  `;
}

// ===== 发送 =====
document.getElementById('sendBtn').onclick = () => {
  const p = aiInput.value.trim();
  if (!p) return;
  addMsg('user', p);
  addMsg('assistant', getReply(p));
  aiInput.value = '';
};

// ===== 猜你想问 =====
const suggestions = [
  "How do I book a ticket?",
  "What trains are there?",
  "Is it busy today?",
  "Are there events?",
  "How to volunteer?"
];

const sugBox = document.getElementById('suggestions');
suggestions.forEach(q => {
  const b = document.createElement('button');
  b.textContent = q;
  b.onclick = () => aiInput.value = q;
  sugBox.appendChild(b);
});

// ===== 初始消息 =====
addMsg('assistant', 'Hi! I can help you navigate the railroad website. Try asking something!');
</script>
