# RCR Dominators — Poway Midland Railroad Digital Experience

A Design-Based Research capstone project by **Rebecca, Cyrus, and Rishabh** that transforms the static Poway-Midland Railroad website into a dynamic, data-driven visitor platform.

---

## Overview

The original Poway-Midland Railroad (PMRR) website is a plain informational site — static tables, unformatted text, no interactivity, and no online transactions. This project rebuilds the digital experience from the ground up with a Jekyll frontend and a Flask/Python backend, adding features the railroad has never had before.

**Live site:** Built & deployed via GitHub Pages.  
**Backend:** Flask + SQLite REST API (see `node_backend/`).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Jekyll, HTML, CSS, JavaScript |
| Backend | Python, Flask, SQLite |
| ML | scikit-learn (Gradient Boosting Regressor) |
| Maps | Leaflet.js, OpenStreetMap |
| 360° Views | Pannellum |
| Weather | Open-Meteo API |
| Auth | Flask sessions, SQLite user accounts |

---

## Features

### Live Train Schedule & Departure Board
- Real-time departure board with live seat counts per ride
- Date switcher to view any past or future operating day
- Animated live train position tracker across route stops
- Auto-detects operating type (Steam, Cable Car, Speeder)

> **Before:** A plain HTML table listing dates and times only — no seat availability, no live status.

---

### Online Reservation & Booking System
- Full booking form with passenger info and ticket counts
- Unique confirmation code (`PMR-XXXXXX`) for every reservation
- Seat conflict detection — prevents overbooking in real time
- Booking history visible on the personal profile page

> **Before:** *"No online sales — tickets only available at the depot on ride days."*

---

### ML-Powered Visitor Forecast
- Gradient Boosting model (R² = 0.93) trained on seasonal and weather features
- Auto-fetches real weather from the Open-Meteo API
- Detects Poway USD school breaks and US holidays automatically
- Hourly crowd predictions with temperature display per time slot

> **Before:** Zero visitor volume information on the original site.

---

### Interactive Fleet Encyclopedia
- 9 pieces of rolling stock with full specs and real photos
- Filter by operational status, steam, cable car, or static display
- Click-through modal with restoration timeline per vehicle
- Covers the 1907 Baldwin, SF Cable Car #17, Fairmont Speeder, and more

> **Before:** Short text paragraphs per vehicle, no photos, no filtering.

---

### Interactive History Timeline
- 7 clickable eras from the 1880s to today — expand to read each full story
- Interactive hotspot stage with numbered clickable markers
- Key figures cards — Pollard, Porter, Frank Lorey, and more
- Historical quote from PMRR historian Kay Prusinskas

> **Before:** Long unbroken paragraphs of static text with no structure or visuals.

---

### Volunteer Crew Scheduling Portal
- Full operating calendar auto-generated from schedule data
- One-click shift sign-up and cancellation
- Live stats — open spots, crew signed up, steam Saturdays
- Filter by operation type or your own signed shifts

> **Before:** A single *"Volunteer with us!"* link leading to a contact form.

---

### Events & Announcements Board
- Searchable events list with keyword and category filter
- Categories: Events, Volunteer, Operations, Service
- Instant filtering with no page reload

> **Before:** Events listed as plain bold text with no search or categories.

---

### 360° Panorama & Interactive Route Map
- 4 switchable 360° panoramic scenes with drag navigation
- Interactive Leaflet route map with animated train marker
- Route stops and historic markers labeled on the map

> **Before:** No virtual tour, no map, no digital way to explore the railroad.

---

### Visitor Notes & Community Board
- Visitors post text notes and photos from their visit
- Like/upvote system for community favourites
- Image uploads stored via the backend database
- Notes persist across sessions

> **Before:** No visitor interaction or community features of any kind.

---

### AI Visitor Assistant
- Floating chat button accessible from every page
- Guides visitors to schedule, booking, history, and volunteering pages
- Responds to family, history, and volunteer-related queries
- Available 24/7 with no staff required

> **Before:** No help system — visitors had to email or call volunteers for basic questions.

---

### Membership & Donation System
- Individual and Family membership tiers
- One-time donation and recurring support options
- Digital membership card shown on the profile page
- Integrated with the user account and login system

> **Before:** *"Become a Member"* led to a contact form — no online purchasing.

---

## Project Structure

```
_posts/Poway midland railroad/   # All page source files
_data/rcr_poway_midland_infograph.yml  # Feature and infograph data
assets/js/ai-assistant.js        # AI assistant logic
assets/data/poway-midland-route.json   # Route stop coordinates
node_backend/                    # Flask backend and nginx config
_includes/                       # Shared HTML components
_layouts/                        # Jekyll page layouts
```

---

## Local Development

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Backend (Flask)
cd node_backend
pip install -r requirements.txt
python app.py
```

---

## Team

| Name | Role |
|------|------|
| Rebecca | Full-stack, backend API, ML model |
| Cyrus | Full-stack, booking system, frontend |
| Rishabh | Full-stack, maps, history, volunteer portal |

---

## Future Features

| Feature | Requires |
|---------|----------|
| Real-Time GPS Train Tracker | GPS module + cellular data on locomotive |
| Live Camera Feed | IP camera + park network access |
| ML Forecast with Real Attendance Data | Historical attendance records from PMRR |
| Full LLM-Powered AI Assistant | LLM API key + live park data feed |
| Push Departure Notifications | GPS tracker + notification infrastructure |
| School & Group Booking Portal | Coordination with PMRR booking staff |

## License

This project is licensed under the GNU General Public License v3.0.

See the [LICENSE](LICENSE) file for details.

Copyright (C) 2026 Rebecca, Cyrus, Rishabh