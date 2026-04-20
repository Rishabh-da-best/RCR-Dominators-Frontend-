// FILE: assets/js/ai-smart.js
(function() {
    if (window.__PMRRAssistantLoaded) return;
    window.__PMRRAssistantLoaded = true;

    // ========================
    // KNOWLEDGE BASE (from powaymidlandrr.org)
    // ========================
    const pmrr = {
        // Schedule for 2026 (as published)
        schedule: [
            { date: "4/11/26", steam: true, cableCar: false, speeder: false, note: "" },
            { date: "4/12/26", steam: false, cableCar: false, speeder: false, note: "No Operation" },
            { date: "4/18/26", steam: true, cableCar: true, speeder: false, note: "" },
            { date: "4/19/26", steam: false, cableCar: true, speeder: false, note: "" },
            { date: "4/25/26", steam: true, cableCar: false, speeder: true, note: "" },
            { date: "4/26/26", steam: false, cableCar: false, speeder: true, note: "" },
            { date: "5/2/26", steam: true, cableCar: true, speeder: false, note: "" },
            { date: "5/3/26", steam: false, cableCar: true, speeder: false, note: "" },
            { date: "5/9/26", steam: true, cableCar: false, speeder: false, note: "" },
            { date: "5/10/26", steam: false, cableCar: false, speeder: false, note: "No Operation" },
            { date: "5/16/26", steam: true, cableCar: true, speeder: false, note: "" },
            { date: "5/17/26", steam: false, cableCar: true, speeder: false, note: "" },
            { date: "5/23/26", steam: true, cableCar: false, speeder: true, note: "" },
            { date: "5/24/26", steam: false, cableCar: false, speeder: true, note: "" },
            { date: "5/30/26", steam: true, cableCar: false, speeder: false, note: "" },
            { date: "5/31/26", steam: false, cableCar: true, speeder: false, note: "" }
        ],
        events: [
            { name: "Horseless Carriage Car Show", date: "April 18", time: "9:00am – 1:00pm", description: "Edwardian-style motorcars showcase at Old Poway Park, co-hosted by La Jolla Regional Group of HCCA." },
            { name: "Sam Hinton Folk Festival", date: "June 6", time: "10:00am – 5:00pm", description: "Honoring local folk music icon with music and train rides (train hours TBD)." },
            { name: "All Aboard for the 4th of July 250!!", date: "July 4", time: "10:00am – 4:00pm", description: "Celebrate America’s 250th birthday with the 1906 Baldwin Steam Locomotive." },
            { name: "Rendezvous in Poway", date: "October 3 & 4", time: "All day", description: "Step back to the 1820-1890s. Ride the 1907 Steam Locomotive or 1906 Cable Car." },
            { name: "Once Upon a Hallowe’en", date: "October 24", time: "3:30pm – 8:30pm", description: "Haunted house, carnival games, and train rides." },
            { name: "Train Song Festival", date: "November 14", time: "10:00am – 4:00pm", description: "Music, model railroads, museum tours, steam engine rides, and artisan market." },
            { name: "Christmas In The Park", date: "December 11 & 12", time: "All day", description: "Caroling, Santa, crafts, night-time steam train rides. Tree lighting on Friday at 6:00pm." }
        ],
        location: "14154 Midland Rd, Poway, CA 92064",
        tickets: "Available at the depot on ride days. Cash and card accepted.",
        privateEvents: "We offer private train rides for groups, birthdays, and special occasions.",
        volunteer: "The railroad is volunteer-run. Contact us to get involved."
    };

    // Helper: Get today's operation (based on schedule)
    function getTodaysOperation() {
        const today = new Date();
        const mm = String(today.getMonth() + 1).padStart(2,'0');
        const dd = String(today.getDate()).padStart(2,'0');
        const yy = String(today.getFullYear()).slice(-2);
        const todayStr = `${mm}/${dd}/${yy}`;
        const entry = pmrr.schedule.find(s => s.date === todayStr);
        if (!entry) return "No scheduled operation today. Please check our calendar for upcoming dates.";
        if (entry.note) return entry.note;
        const rides = [];
        if (entry.steam) rides.push("Steam Locomotive");
        if (entry.cableCar) rides.push("Cable Car");
        if (entry.speeder) rides.push("Speeder");
        return rides.length ? `Today's rides: ${rides.join(", ")}.` : "No rides scheduled today.";
    }

    // Helper: Find upcoming events
    function getUpcomingEvents() {
        const monthOrder = {January:1, February:2, March:3, April:4, May:5, June:6, July:7, August:8, September:9, October:10, November:11, December:12};
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const upcoming = pmrr.events.filter(ev => {
            const evMonth = monthOrder[ev.date.split(' ')[0]];
            return evMonth >= currentMonth;
        });
        return upcoming.slice(0,3);
    }

    // Core response generator
    function getSmartReply(userMessage, history) {
        const msg = userMessage.toLowerCase();

        // Greetings
        if (msg.match(/^(hi|hello|hey|good morning|good afternoon|good evening|greetings|hola|howdy)$/)) {
            return "Hello! Welcome to the Poway Midland Railroad. How can I help you today? You can ask about our schedule, upcoming events, location, tickets, or private charters.";
        }

        // Schedule questions
        if (msg.match(/schedule|operating|running|today|this week|what.*running|when.*ride/)) {
            if (msg.includes("today")) {
                return `🚂 ${getTodaysOperation()} Remember, equipment changes and cancellations sometimes occur. For the full schedule, please check our calendar: https://powaymidlandrr.org/calendar`;
            } else {
                return "Our planned 2026 operation schedule is available on our website: https://powaymidlandrr.org. Steam runs on most Saturdays, with Cable Car or Speeder on Sundays. Please note that equipment changes and cancellations can happen. For the exact day-by-day schedule, please visit our calendar page.";
            }
        }

        // Events
        if (msg.match(/event|festival|celebration|holiday|horseless carriage|sam hinton|4th of july|rendezvous|halloween|train song|christmas/)) {
            const upcoming = getUpcomingEvents();
            if (upcoming.length === 0) return "We have several wonderful events planned throughout the year. Please visit our website's events page for the full 2026 calendar: https://powaymidlandrr.org/events";
            let reply = "🎉 **Upcoming events at Poway Midland Railroad:**\n\n";
            upcoming.forEach(ev => {
                reply += `• **${ev.name}** – ${ev.date}, ${ev.time}\n   ${ev.description}\n\n`;
            });
            reply += "For more details, please visit our events page: https://powaymidlandrr.org/events";
            return reply;
        }

        // Location
        if (msg.match(/location|where|address|park|old poway park/)) {
            return `📍 **Location:** ${pmrr.location}. Old Poway Park is a beautiful historic setting for our railroad. Free parking is available.`;
        }

        // Tickets
        if (msg.match(/ticket|price|cost|fare|how much|pay/)) {
            return `🎟️ **Tickets:** ${pmrr.tickets} We recommend arriving early, as rides can fill up on busy days. For group rates or special accommodations, please contact us in advance.`;
        }

        // Private events
        if (msg.match(/private|group|birthday|special occasion|charter/)) {
            return `🎂 **Private Events:** ${pmrr.privateEvents} For more information or to book, please visit our website: https://powaymidlandrr.org/private-events`;
        }

        // Volunteer / about us
        if (msg.match(/volunteer|run by|who operates|nonprofit/)) {
            return `🙌 **Volunteer-Run:** ${pmrr.volunteer} It's a great way to give back and be part of preserving railway history. Check our website for volunteer opportunities.`;
        }

        // Fallback / help
        return "I'm your assistant for the Poway Midland Railroad. I can tell you about our **schedule**, **upcoming events**, **tickets**, **location**, **private charters**, and **volunteer opportunities**. What would you like to know?";
    }

    // UI Styles & Injection (same as previous assistant, with minor text adjustments)
    // ... (keep your existing CSS and UI creation code, just update the bot's welcome message)
    // For brevity, I'm showing only the new init message; reuse your previous working UI code.
    // In your init() function, set welcome message:
    // addMessage('bot', '🚂 Hello! I'm the Poway Midland Railroad assistant. Ask me about our 2026 steam schedule, upcoming events, tickets, location, or private charters.');
})();