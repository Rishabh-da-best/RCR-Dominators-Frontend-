---
layout: opencs
title: Our Trains
permalink: /trains
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
:root {
  --coal: #111;
  --steam: #111;
  --smoke: #666;
  --rail: #ccc;
  --rust: #b94a1c;
  --paper: #faf8f5;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
}

.page-content,
.wrapper {
  max-width: none !important;
  padding: 0 !important;
}

/* ───── PAGE ───── */

.eq-page {
  background: var(--paper);
  min-height: 100vh;
  font-family: 'Source Serif 4', Georgia, serif;
  color: var(--steam);
}

/* ───── HERO ───── */

.eq-hero {
  position: relative;
  padding: 70px 24px 40px;
  text-align: center;
  background: #2a1a0e;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}

.eq-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 40px,
    rgba(255,255,255,0.02) 40px,
    rgba(255,255,255,0.02) 41px
  );
}

.eq-hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(42px, 8vw, 88px);
  font-weight: 900;
  color: #fff;
  line-height: 1;
}

.eq-hero-title em {
  color: #c9943a;
  font-style: italic;
  display: block;
}

.eq-hero-sub {
  color: rgba(255,255,255,0.75);
  margin-top: 14px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.eq-hero-track {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 18px;
  background: repeating-linear-gradient(
    90deg,
    #ccc 0px,
    #ccc 30px,
    transparent 30px,
    transparent 50px
  );
  opacity: 0.35;
}

/* ───── FILTERS ───── */

.eq-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 24px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}

.eq-filter-btn {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid #ccc;
  background: transparent;
  cursor: pointer;
}

.eq-filter-btn.active {
  background: var(--rust);
  border-color: var(--rust);
  color: #fff;
}

/* ───── GRID ───── */

.eq-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 14px;
}

/* ───── CARD ───── */

.eq-card {
  background: #fff;
  border: 1px solid #ddd;
  transition: transform 0.25s, box-shadow 0.25s;
  cursor: pointer;
}

.eq-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

.eq-card-banner {
  height: 6px;
  background: var(--rust);
}

.eq-card-emoji {
  font-size: 48px;
  padding: 26px;
  display: block;
}

.eq-card-body {
  padding: 0 26px 26px;
}

.eq-card-type {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--rust);
  margin-bottom: 6px;
}

.eq-card-name {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.eq-card-desc {
  font-size: 13px;
  color: var(--smoke);
  line-height: 1.6;
  margin-bottom: 18px;
}

.eq-card-btn {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background: transparent;
  cursor: pointer;
}

/* ───── MODAL ───── */

.eq-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255,255,255,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
}

.eq-modal-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.eq-modal {
  background: #fff;
  max-width: 760px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid #ccc;
}
</style>

<div class="eq-page">

  <div class="eq-hero">
    <div class="eq-hero-title">Our <em>Fleet</em></div>
    <p class="eq-hero-sub">Historic locomotives and rolling stock preserved and operated at Old Poway Park.</p>
    <div class="eq-hero-track"></div>
  </div>

  <div class="eq-filters">
    <button class="eq-filter-btn active" onclick="eqFilter('all', this)">All</button>
    <button class="eq-filter-btn" onclick="eqFilter('operational', this)">Operational</button>
    <button class="eq-filter-btn" onclick="eqFilter('steam', this)">Steam</button>
    <button class="eq-filter-btn" onclick="eqFilter('cable', this)">Cable</button>
    <button class="eq-filter-btn" onclick="eqFilter('static', this)">Static</button>
  </div>

  <div class="eq-grid" id="eqGrid"></div>

</div>

<!-- Modal -->
<div class="eq-modal-overlay" id="eqModal" onclick="eqCloseModal(event)">
  <div class="eq-modal" id="eqModalInner"></div>
</div>

<script>
const EQ_DATA = [
  {
    id: "steam",
    category: "steam",
    status: "operational",
    emoji: "🚂",
    type: "Steam Locomotive",
    name: "1907 Baldwin 0-4-0",
    tagline: "Over 100 years of steam power."
  },
  {
    id: "cable",
    category: "cable",
    status: "operational",
    emoji: "🚌",
    type: "Cable Car",
    name: "SF Cable Car #17",
    tagline: "1906 earthquake survivor."
  },
  {
    id: "speeder",
    category: "speeder",
    status: "operational",
    emoji: "🚃",
    type: "Maintenance Vehicle",
    name: "Fairmont Speeder",
    tagline: "Rail maintenance workhorse."
  },
  {
    id: "static",
    category: "static",
    status: "static",
    emoji: "🏛",
    type: "Static Display",
    name: "Handcar Replica",
    tagline: "Section gang maintenance tool."
  }
];

function eqRender() {
  const grid = document.getElementById("eqGrid");
  grid.innerHTML = "";

  EQ_DATA.forEach(eq => {
    const card = document.createElement("div");
    card.className = "eq-card";
    card.dataset.category = eq.category;
    card.dataset.status = eq.status;

    card.innerHTML = `
      <div class="eq-card-banner"></div>
      <div class="eq-card-emoji">${eq.emoji}</div>
      <div class="eq-card-body">
        <div class="eq-card-type">${eq.type}</div>
        <div class="eq-card-name">${eq.name}</div>
        <div class="eq-card-desc">${eq.tagline}</div>
        <button class="eq-card-btn" onclick="eqOpenModal('${eq.id}')">View</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function eqFilter(type, btn) {
  document.querySelectorAll(".eq-filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".eq-card").forEach(card => {
    const show =
      type === "all" ||
      card.dataset.category === type ||
      card.dataset.status === type;

    card.style.display = show ? "block" : "none";
  });
}

function eqOpenModal(id) {
  const eq = EQ_DATA.find(e => e.id === id);
  const modal = document.getElementById("eqModal");
  const inner = document.getElementById("eqModalInner");

  inner.innerHTML = `
    <div style="padding:24px">
      <div style="font-size:48px">${eq.emoji}</div>
      <h2>${eq.name}</h2>
      <p>${eq.tagline}</p>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function eqCloseModal(e) {
  if (e && e.target !== document.getElementById("eqModal")) return;
  document.getElementById("eqModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") eqCloseModal();
});

eqRender();
</script>