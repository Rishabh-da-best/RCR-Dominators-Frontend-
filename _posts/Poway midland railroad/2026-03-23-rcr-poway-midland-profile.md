---
layout: base
title: My Profile
permalink: /profile
---

<script src="/assets/js/api/config.js"></script>

<style>
  :root {
    --coal:#ffffff;--iron:#ffffff;--iron2:#f5f5f5;
    --rust:#000000; --ember:#333333; --gold:#000000;
    --steam:#000000;--smoke:#666666; --green:#2d6a4f;
    --text:#000000; --subtext:#666666; --background:#ffffff;
  }
  .page-content {
    max-width: none !important;
    padding: 0 !important;
  }
  .wrapper {
    max-width: none !important;
    padding: 0 !important;
  }
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  body { background:var(--coal); color:var(--steam); font-family:'Georgia',serif; padding-top:56px; }

  .pf-hero {
    padding: 60px 24px 40px; min-height:200px; text-align: center;
    background: #2a1a0e;
    border-bottom: 1px solid #cccccc;
    position: relative;
    overflow: hidden;
  }
  .pf-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 40px,
      rgba(0,0,0,0.02) 40px, rgba(0,0,0,0.02) 41px
    );
    pointer-events: none;
  }
  .pf-track {
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
  .pf-track::before, .pf-track::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 3px;
    background: #cccccc;
    opacity: 0.4;
  }
  .pf-track::before { top: 4px; }
  .pf-track::after  { bottom: 4px; }
  .pf-avatar {
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--rust); border: 3px solid var(--gold);
    display: flex; align-items: center; justify-content: center;
    font-size: 36px; font-weight: 700; color: #fff;
    margin: 0 auto 14px;
  }
  .pf-name { font-size: clamp(22px,4vw,34px); font-weight: 700; color: #ffffff; margin-bottom: 4px; }
  .pf-email { font-family: 'Courier New', monospace; font-size: 12px; color: #ffffff; }
  .pf-tag {
    display: inline-block; margin-top: 10px;
    font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold);
    background: rgba(201,148,58,0.1); border: 1px solid rgba(201,148,58,0.25);
    border-radius: 4px; padding: 4px 14px;
  }

  .pf-wrap { max-width: 900px; margin: 0 auto; padding: 36px 20px 80px; }

  .pf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px; }
  @media(max-width:680px) { .pf-grid { grid-template-columns: 1fr; } }

  .pf-card {
    background: var(--iron); border: 1px solid #cccccc;
    border-radius: 12px; padding: 24px; border-top: 3px solid var(--rust);
  }
  .pf-card-title {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 18px;
    padding-bottom: 10px; border-bottom:1px solid #cccccc;
  }

  .pf-field { margin-bottom: 14px; }
  .pf-label {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--smoke); margin-bottom: 5px; display: block;
  }
  .pf-value {
    font-size: 14px; color: var(--steam); padding: 10px 14px;
    background: var(--iron2); border-radius: 6px;
    border: 1px solid #cccccc;
  }
  .pf-input {
    width: 100%; padding: 10px 14px; background: var(--iron2);
    border: 1px solid #cccccc; border-radius: 6px;
    color: var(--steam); font-family: 'Georgia', serif; font-size: 14px;
    transition: border-color 0.2s;
  }
  .pf-input:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,148,58,0.15); }

  .pf-feedback {
    font-size: 12px; margin-top: 8px; padding: 8px 12px; border-radius: 4px;
    font-family: 'Courier New', monospace; display: none;
  }
  .pf-feedback.ok  { background: rgba(45,106,79,0.2);  border: 1px solid rgba(76,175,130,0.3); color: #4caf82; display: block; }
  .pf-feedback.err { background: rgba(185,74,28,0.2);  border: 1px solid rgba(185,74,28,0.3);  color: #fb923c; display: block; }

  .pf-btn {
    width: 100%; padding: 11px; border: none; border-radius: 6px; cursor: pointer;
    font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.1em;
    text-transform: uppercase; transition: all 0.2s; margin-top: 6px;
  }
  .pf-btn-primary { background: var(--rust); color: #fff; }
  .pf-btn-primary:hover { background: var(--ember); }
  .pf-btn-danger  { background: rgba(185,74,28,0.15); color: #e07050; border: 1px solid rgba(185,74,28,0.3); }
  .pf-btn-danger:hover { background: rgba(185,74,28,0.3); }

  /* 取消按钮样式 */
  .pf-cancel-btn {
    background: rgba(185, 74, 28, 0.15);
    border: 1px solid rgba(185, 74, 28, 0.3);
    color: #e07050;
    padding: 6px 12px;
    border-radius: 40px;
    font-size: 11px;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.2s;
  }
  .pf-cancel-btn:hover {
    background: rgba(185, 74, 28, 0.3);
    transform: scale(0.97);
  }

  /* Booking & Volunteer history */
  .pf-bookings { background: var(--iron); border: 1px solid #cccccc; border-radius: 12px; padding: 24px; border-top: 3px solid var(--gold); margin-top: 20px; }
  .pf-booking-row {
    display: grid; grid-template-columns: auto 1fr auto;
    gap: 14px; align-items: center;
    padding: 14px 0; border-bottom: 1px solid #cccccc;
  }
  .pf-booking-row:last-child { border-bottom: none; }
  .pf-booking-code {
    font-family: 'Courier New', monospace; font-size: 13px;
    font-weight: 700; color: var(--rust); letter-spacing: 0.1em;
    white-space: nowrap;
  }
  .pf-booking-detail { font-size: 13px; color: var(--steam); line-height: 1.5; }
  .pf-booking-detail small { display: block; font-size: 11px; color: var(--smoke); margin-top: 2px; }
  .pf-booking-price {
    font-family: 'Courier New', monospace; font-size: 14px;
    font-weight: 700; color: var(--gold); white-space: nowrap; text-align: right;
  }
  .pf-empty {
    text-align: center; padding: 40px 20px;
    font-family: 'Courier New', monospace; font-size: 12px; color: var(--smoke);
  }
  .pf-empty a { color: var(--gold); }

  /* Not logged in state */
  .pf-gate {
    display: none; text-align: center; padding: 60px 20px;
    max-width: 480px; margin: 40px auto;
  }
  .pf-gate.show { display: block; }
  .pf-gate-icon { font-size: 48px; margin-bottom: 16px; }
  .pf-gate h2 { font-size: 22px; color: var(--steam); margin-bottom: 10px; }
  .pf-gate p { font-size: 14px; color: var(--smoke); line-height: 1.7; margin-bottom: 24px; }
  .pf-gate a {
    display: inline-block; padding: 12px 28px; background: var(--rust);
    color: #fff; text-decoration: none; border-radius: 6px; font-weight: 700;
    font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 0.1em;
    text-transform: uppercase; transition: background 0.2s;
  }
  .pf-gate a:hover { background: var(--ember); }

  #pfMain { display: none; }
  #pfMain.show { display: block; }
</style>

<!-- Not logged in -->
<div class="pf-gate" id="pfGate">
  <div class="pf-gate-icon">🔒</div>
  <h2>Members Only</h2>
  <p>Sign in to view your profile, booking history, and account settings.</p>
  <a href="{{ "/login" | relative_url }}">Sign In →</a>
</div>

<!-- Profile content -->
<div id="pfMain">
  <div class="pf-hero">
    <div class="pf-avatar" id="pfAvatar">?</div>
    <div class="pf-name" id="pfName">Loading...</div>
    <div class="pf-email" id="pfEmail"></div>
    <div class="pf-tag"> Railroad Member</div>
    <div class="pf-track"></div>
  </div>

  <div class="pf-wrap">
    <div class="pf-grid">

      <!-- Account Info -->
      <div class="pf-card">
        <div class="pf-card-title">👤 Account Info</div>
        <div class="pf-field">
          <label class="pf-label">Full Name</label>
          <div class="pf-value" id="pfInfoName">—</div>
        </div>
        <div class="pf-field">
          <label class="pf-label">Email Address</label>
          <div class="pf-value" id="pfInfoEmail">—</div>
        </div>
        <div class="pf-field">
          <label class="pf-label">Password</label>
          <div class="pf-value">●●●●●●●●●●</div>
        </div>
      </div>

      <!-- Change Password -->
      <div class="pf-card">
        <div class="pf-card-title"> Change Password</div>
        <div class="pf-field">
          <label class="pf-label">Current Password</label>
          <input class="pf-input" type="password" id="pfCurPass" placeholder="Enter current password">
        </div>
        <div class="pf-field">
          <label class="pf-label">New Password</label>
          <input class="pf-input" type="password" id="pfNewPass" placeholder="At least 6 characters">
        </div>
        <div class="pf-field">
          <label class="pf-label">Confirm New Password</label>
          <input class="pf-input" type="password" id="pfConPass" placeholder="Repeat new password">
        </div>
        <div class="pf-feedback" id="pfPassFeedback"></div>
        <button class="pf-btn pf-btn-primary" onclick="pfChangePassword()">Update Password</button>
      </div>

    </div>

    <!-- Booking History -->
    <div class="pf-bookings">
      <div class="pf-card-title" style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:18px;padding-bottom:10px;border-bottom:1px solid #cccccc;">
         My Booking History
      </div>
      <div id="pfBookingList">
        <div class="pf-empty">Loading reservations...</div>
      </div>
    </div>

    <!-- Volunteer History -->
    <div class="pf-bookings">
      <div class="pf-card-title" style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:18px;padding-bottom:10px;border-bottom:1px solid #cccccc;">
         🤝 My Volunteer Shifts
      </div>
      <div id="pfVolunteerList">
        <div class="pf-empty">Loading volunteer shifts...</div>
      </div>
    </div>

    <!-- Danger zone -->
    <div style="margin-top:20px;text-align:right;">
      <button class="pf-btn pf-btn-danger" style="width:auto;padding:10px 24px;" onclick="pfLogout()">
        🚪 Sign Out
      </button>
    </div>

  </div>
</div>

<script type="module">
  import pythonURI from "/assets/js/api/config.module.js";
  
  var BACKEND = window.pythonURI;
  let pfUser = null;
  
  async function pfInit() {
    const localLoggedIn = localStorage.getItem('logged_in');
    
    if (localLoggedIn === 'true') {
      pfUser = {
        name: localStorage.getItem('user_name'),
        email: localStorage.getItem('user_email')
      };
      pfShowProfile(pfUser);
      pfLoadBookings(pfUser.email);
      pfLoadVolunteers(pfUser.email);
    } else {
      try {
        const res = await fetch(`${BACKEND}/api/user`, { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          if (data.uid) {
            localStorage.setItem('logged_in', 'true');
            localStorage.setItem('user_name', data.name);
            localStorage.setItem('user_email', data.uid);
            pfUser = { name: data.name, email: data.uid };
            pfShowProfile(pfUser);
            pfLoadBookings(pfUser.email);
            pfLoadVolunteers(pfUser.email);
          } else {
            pfShowGuest();
          }
        } else {
          pfShowGuest();
        }
      } catch {
        pfShowGuest();
      }
    }
  }

  function pfShowGuest() {
    document.getElementById('pfGate').classList.add('show');
    document.getElementById('pfMain').classList.remove('show');
    document.getElementById('pfAvatar').textContent = '?';
    document.getElementById('pfName').textContent = 'Guest';
    document.getElementById('pfEmail').textContent = 'Not signed in';
    document.getElementById('pfInfoName').textContent = '—';
    document.getElementById('pfInfoEmail').textContent = '—';
    
    const list = document.getElementById('pfBookingList');
    list.innerHTML = `<div class="pf-empty">Please <a href="{{ "/login" | relative_url }}">sign in</a> to view your booking history.</div>`;
    
    const volList = document.getElementById('pfVolunteerList');
    volList.innerHTML = `<div class="pf-empty">Please <a href="{{ "/login" | relative_url }}">sign in</a> to view your volunteer shifts.</div>`;
  }

  function pfShowProfile(user) {
    document.getElementById('pfGate').classList.remove('show');
    document.getElementById('pfMain').classList.add('show');
    document.getElementById('pfAvatar').textContent = user.name.charAt(0).toUpperCase();
    document.getElementById('pfName').textContent = user.name;
    document.getElementById('pfEmail').textContent = user.email;
    document.getElementById('pfInfoName').textContent = user.name;
    document.getElementById('pfInfoEmail').textContent = user.email;
  }

  // ========== 取消预订 ==========
  async function pfCancelBooking(confirmCode, rowElement) {
    const confirmed = confirm('⚠️ Are you sure you want to cancel this booking?\n\nThis action cannot be undone.');
    if (!confirmed) return;
    
    try {
      const res = await fetch(`${BACKEND}/api/reservations/${confirmCode}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (res.ok) {
        alert('✓ Booking cancelled successfully.');
        if (rowElement && rowElement.remove) rowElement.remove();
        const remainingRows = document.querySelectorAll('#pfBookingList .pf-booking-row');
        if (remainingRows.length === 0) {
          document.getElementById('pfBookingList').innerHTML = `<div class="pf-empty">No bookings yet. <a href="/schedule">Book a ride →</a></div>`;
        }
      } else {
        const data = await res.json();
        alert('✗ Failed to cancel: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Cancel error:', error);
      alert('✗ Network error. Please try again.');
    }
  }

  // ========== 取消志愿者报名 ==========
  async function pfCancelVolunteer(shiftId, dateLabel, rowElement) {
    const confirmed = confirm(`⚠️ Are you sure you want to cancel your volunteer sign-up for ${dateLabel}?\n\nThis action cannot be undone.`);
    if (!confirmed) return;
    
    try {
      const res = await fetch(`${BACKEND}/api/volunteer/shifts/${shiftId}/signup`, {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: pfUser?.email })
      });
      
      if (res.ok) {
        alert('✓ Volunteer sign-up cancelled successfully.');
        if (rowElement && rowElement.remove) rowElement.remove();
        const remainingRows = document.querySelectorAll('#pfVolunteerList .pf-booking-row');
        if (remainingRows.length === 0) {
          document.getElementById('pfVolunteerList').innerHTML = `<div class="pf-empty">No volunteer shifts yet. <a href="/volunteer-schedule">Sign up to volunteer →</a></div>`;
        }
      } else {
        const data = await res.json();
        alert('✗ Failed to cancel: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Cancel error:', error);
      alert('✗ Network error. Please try again.');
    }
  }

  // ========== 加载预订历史（带取消按钮）==========
  async function pfLoadBookings(email) {
    const list = document.getElementById('pfBookingList');
    try {
      const res = await fetch(`${BACKEND}/api/reservations`, { credentials: 'include' });
      const data = await res.json();
      const mine = data.filter(r => r.email && r.email.toLowerCase() === email.toLowerCase());

      if (!mine.length) {
        list.innerHTML = `<div class="pf-empty">No bookings yet. <a href="/schedule">Book a ride →</a></div>`;
        return;
      }

      mine.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      list.innerHTML = mine.map(r => {
        const d = new Date(r.date + 'T12:00:00');
        const dateLabel = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        const tickets = [
          r.adults   ? `${r.adults} adult${r.adults!==1?'s':''}` : '',
          r.children ? `${r.children} child${r.children!==1?'ren':''}` : '',
          r.infants  ? `${r.infants} infant${r.infants!==1?'s':''}` : '',
        ].filter(Boolean).join(', ');
        
        const rowId = `booking-${r.confirm_code.replace(/[^a-zA-Z0-9]/g, '')}`;
        return `
          <div class="pf-booking-row" id="${rowId}">
            <div class="pf-booking-code">${r.confirm_code}</div>
            <div class="pf-booking-detail">
              ${r.train_type} · ${dateLabel} at ${r.time}
              <small>${tickets} · Pay at depot</small>
            </div>
            <div class="pf-booking-price" style="display: flex; gap: 12px; align-items: center;">
              <span>$${r.total_price.toFixed(2)}</span>
              <button class="pf-cancel-btn" onclick="window.pfCancelBooking('${r.confirm_code}', document.getElementById('${rowId}'))">
                ✖ Cancel
              </button>
            </div>
          </div>`;
      }).join('');
    } catch {
      list.innerHTML = `<div class="pf-empty">Could not load bookings.</div>`;
    }
  }

  // ========== 加载志愿者班次（只使用后端 API，已删除 localStorage 逻辑）==========
  async function pfLoadVolunteers(email) {
    const list = document.getElementById('pfVolunteerList');
    
    console.log('pfLoadVolunteers - email:', email);
    
    try {
      const res = await fetch(`${BACKEND}/api/volunteer/shifts`, { 
        credentials: 'include' 
      });
      
      if (!res.ok) {
        console.log('API response not OK:', res.status);
        list.innerHTML = `<div class="pf-empty">Could not load volunteer shifts. <a href="/volunteer-schedule">Sign up →</a></div>`;
        return;
      }
      
      const allShifts = await res.json();
      console.log('All shifts from API:', allShifts);
      
      const myShifts = allShifts.filter(shift => {
        if (!shift.assignments || !Array.isArray(shift.assignments)) return false;
        return shift.assignments.some(a => a.email && a.email.toLowerCase() === email.toLowerCase());
      });
      
      console.log('My shifts from API:', myShifts);
      
      if (!myShifts.length) {
        list.innerHTML = `<div class="pf-empty">No volunteer shifts yet. <a href="/volunteer-schedule">Sign up to volunteer →</a></div>`;
        return;
      }
      
      myShifts.sort((a, b) => new Date(a.date) - new Date(b.date));
      
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      list.innerHTML = myShifts.map(shift => {
        const d = new Date(shift.date + 'T12:00:00');
        const dateLabel = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        const rowId = `volunteer-${shift.id}-${shift.date.replace(/-/g, '')}`;
        
        let job = 'Volunteer';
        if (shift.assignments) {
          const myInfo = shift.assignments.find(a => a.email && a.email.toLowerCase() === email.toLowerCase());
          if (myInfo && myInfo.job) job = myInfo.job;
        }
        
        const trainTypeDisplay = {
          'steam': '🔥 Steam Locomotive',
          'cable': '🚋 Cable Car',
          'speeder': '🚃 Speeder'
        }[shift.train_type] || shift.train_type || 'Train Operation';
        
        const timeRange = shift.time_start && shift.time_end ? `${shift.time_start} - ${shift.time_end}` : '10:00am – 2:00pm';
        
        return `
          <div class="pf-booking-row" id="${rowId}">
            <div class="pf-booking-code">${dateLabel}</div>
            <div class="pf-booking-detail">
              ${trainTypeDisplay} · ${timeRange}
              <small>Position: ${job}</small>
            </div>
            <div class="pf-booking-price" style="display: flex; gap: 12px; align-items: center;">
              <span>✅ Registered</span>
              <button class="pf-cancel-btn" onclick="window.pfCancelVolunteer(${shift.id}, '${dateLabel}', document.getElementById('${rowId}'))">
                ✖ Cancel
              </button>
            </div>
          </div>`;
      }).join('');
      
    } catch (error) {
      console.error('Error loading volunteers:', error);
      list.innerHTML = `<div class="pf-empty">Could not load volunteer shifts. Make sure backend is running.</div>`;
    }
  }

  function pfFeedback(id, msg, type) {
    const el = document.getElementById(id);
    el.textContent = msg;
    el.className = 'pf-feedback ' + (type === 'ok' ? 'ok' : 'err');
  }

  async function pfChangePassword() {
    const cur  = document.getElementById('pfCurPass').value.trim();
    const nw   = document.getElementById('pfNewPass').value.trim();
    const conf = document.getElementById('pfConPass').value.trim();
    const fb   = 'pfPassFeedback';

    if (!cur || !nw || !conf) { pfFeedback(fb, 'Please fill in all password fields.', 'err'); return; }
    if (nw.length < 6)        { pfFeedback(fb, 'New password must be at least 6 characters.', 'err'); return; }
    if (nw !== conf)           { pfFeedback(fb, 'New passwords do not match.', 'err'); return; }

    try {
      const res = await fetch(`${BACKEND}/api/auth/change-password`, {
        method:      'POST',
        credentials: 'include',
        headers:     { 'Content-Type': 'application/json' },
        body:        JSON.stringify({ current_password: cur, new_password: nw })
      });
      const data = await res.json();
      if (!res.ok) { pfFeedback(fb, data.error || 'Failed to update password.', 'err'); return; }
      pfFeedback(fb, 'Password updated successfully! ', 'ok');
      document.getElementById('pfCurPass').value = '';
      document.getElementById('pfNewPass').value = '';
      document.getElementById('pfConPass').value = '';
    } catch {
      pfFeedback(fb, 'Could not reach server.', 'err');
    }
  }

  async function pfLogout() {
    const confirmed = confirm('Are you sure you want to sign out?');
    if (!confirmed) return;
    
    localStorage.removeItem('logged_in');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('PMRR_Volunteers');
    
    try { 
      await fetch(`${BACKEND}/api/authenticate`, { 
        method: 'DELETE', 
        credentials: 'include' 
      }); 
    } catch(e) {
      console.log('Logout error:', e);
    }
    
    window.location.href = '{{ "/login" | relative_url }}';
  }

  // 挂载到 window 对象，供 onclick 调用
  window.pfCancelBooking = pfCancelBooking;
  window.pfCancelVolunteer = pfCancelVolunteer;
  window.pfChangePassword = pfChangePassword;
  window.pfLogout = pfLogout;

  pfInit();
</script>