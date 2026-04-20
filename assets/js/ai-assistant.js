// Smart AI Assistant for Poway Midland Railroad
(function() {
    if (window.__PMRRAssistantLoaded) return;
    window.__PMRRAssistantLoaded = true;
    
    // 内部页面链接 (Jekyll 编译后的 URL)
    const pageLinks = {
        schedule: "/schedule",      // 2026-03-06-rcr-poway-midland-schedule.md
        events: "/events",          // 2026-03-20-rcr-poway-midland-events.md
        tickets: "/booksystem",     // 2026-03-12-rcr-poway-midland-booksystem.md
        volunteer: "/volunteerschedule", // 2026-03-27-rcr-poway-midland-volunteerschedule.md
        calendar: "/calendar",      // 2026-03-12-rcr-poway-midland-calendar.md
        contact: "/contact",        // 2026-03-20-rcr-poway-midland-contact.md
        donate: "/donate",          // 2026-04-17-rcr-poway-midland-donate.md
        history: "/history",        // 2026-03-26-rcr-poway-midland-history.md
        home: ""                    // 2026-03-17-rcr-poway-midland-home.md
    };
    
    // 辅助函数：将文本中的链接标记转换为 HTML 链接
    function addLinks(text) {
        // 转换 [文本](链接) 格式
        return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: inherit; text-decoration: underline;" target="_blank">$1</a>');
    }
    
    // 智能回复函数
    function getSmartReply(message) {
        const msg = message.toLowerCase().trim();
        
        // 订票相关问题 → 链接到 booksystem.md
        if (msg.includes('ticket') || msg.includes('book') || msg.includes('订票') || msg.includes('买票')) {
            return `🎟️ Tickets are available at the depot on ride days. Cash and card accepted. For group rates and booking details, please visit our [booking page](${pageLinks.tickets}).`;
        }
        
        // 时刻表/运营时间 → 链接到 schedule.md 和 calendar.md
        if (msg.includes('schedule') || msg.includes('time') || msg.includes('时刻') || msg.includes('运营')) {
            return `🚂 Steam runs on most Saturdays, with Cable Car or Speeder on Sundays. 📅 [View full schedule](${pageLinks.schedule}) | [View calendar](${pageLinks.calendar})`;
        }
        
        // 明天
        if (msg.includes('tomorrow') || msg.includes('明天')) {
            return `🔮 For tomorrow's schedule, please check our [calendar page](${pageLinks.calendar}).`;
        }
        
        // 活动/事件 → 链接到 events.md
        if (msg.includes('event') || msg.includes('festival') || msg.includes('活动')) {
            return `🎉 Upcoming events: Horseless Carriage Show (April 18), Sam Hinton Folk Festival (June 6), 4th of July Celebration (July 4), Rendezvous in Poway (Oct 3-4), Halloween Event (Oct 24), Train Song Festival (Nov 14), Christmas in the Park (Dec 11-12). 📅 [View all events](${pageLinks.events})`;
        }
        
        // 7月4日
        if (msg.includes('july') || msg.includes('4th')) {
            return `🎆 July 4th 250th Celebration! 10am-4pm. Ride our 1906 Baldwin Steam Locomotive at Old Poway Park. Steam, whistles, and patriotic fun! [More details](${pageLinks.events})`;
        }
        
        // 位置
        if (msg.includes('location') || msg.includes('where') || msg.includes('地址')) {
            return `📍 Location: 14154 Midland Rd, Poway, CA 92064. Free parking available. [View on Google Maps](https://www.google.com/maps/place/Poway-Midland+Railroad/@32.970647,-117.0364226,17z/data=!3m1!4b1!4m6!3m5!1s0x80dbfa5ef2853f59:0xf6e2250894a12182!8m2!3d32.970647!4d-117.0364226!16zL20vMDg0dmg2?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D)`;
        }
        
        // 联系方式
        if (msg.includes('contact') || msg.includes('email')) {
            return `📧 Contact us: [Contact page](${pageLinks.contact}) | Email: info@powaymidlandrr.org | Website: https://powaymidlandrr.org`;
        }
        
        // 私人活动
        if (msg.includes('private') || msg.includes('group') || msg.includes('birthday')) {
            return `🎂 Private train rides available for groups, birthdays, and special occasions. [Contact us](${pageLinks.contact}) for more information.`;
        }
        
        // 志愿者 → 链接到 volunteerschedule.md
        if (msg.includes('volunteer')) {
            return `🙌 The railroad is volunteer-run! Check our [volunteer opportunities page](${pageLinks.volunteer}) to get involved.`;
        }
        
        // 捐赠
        if (msg.includes('donate') || msg.includes('donation') || msg.includes('捐赠')) {
            return `💝 Support the Poway Midland Railroad! [Donate here](${pageLinks.donate}) to help preserve railway history.`;
        }
        
        // 历史
        if (msg.includes('history') || msg.includes('历史')) {
            return `📖 Learn about the rich history of Poway Midland Railroad on our [history page](${pageLinks.history}).`;
        }
        
        // 问候
        if (msg.match(/^(hi|hello|hey|你好|您好)$/)) {
            return `👋 Hello! Welcome to Poway Midland Railroad. How can I help you? Try asking: tickets, schedule, events, location, volunteer, or private events.`;
        }
        
        // 帮助
        if (msg.includes('help')) {
            return `💡 I can help with: [tickets](${pageLinks.tickets}), [schedule](${pageLinks.schedule}), [events](${pageLinks.events}), location, private events, and [volunteer opportunities](${pageLinks.volunteer}). What would you like to know?`;
        }
        
        // 默认回复
        return `🚂 I'm your Poway Midland Railroad assistant. Ask me about: [tickets](${pageLinks.tickets}), [schedule](${pageLinks.schedule}), [events](${pageLinks.events}), location, or private events!`;
    }
    
    // ========================
    // UI Styles
    // ========================
    const styles = `
        .ai-fab {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            background: #2a1a0e;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            cursor: pointer;
            z-index: 999999;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: transform 0.2s;
        }
        .ai-fab:hover { transform: scale(1.05); }
        .ai-chat {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 380px;
            height: 500px;
            background: #fff;
            border-radius: 16px;
            display: none;
            flex-direction: column;
            z-index: 999999;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            border: 1px solid #ddd;
            overflow: hidden;
        }
        .ai-chat.show { display: flex; }
        .ai-header {
            background: #2a1a0e;
            color: #fff;
            padding: 14px 16px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .ai-close {
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 20px;
        }
        .ai-messages {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
            background: #f8f8f8;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .ai-msg {
            padding: 10px 14px;
            border-radius: 12px;
            max-width: 85%;
            word-wrap: break-word;
            font-size: 14px;
            line-height: 1.5;
        }
        .ai-msg.user {
            background: #2a1a0e;
            color: #fff;
            align-self: flex-end;
        }
        .ai-msg.bot {
            background: #fff;
            border: 1px solid #e0e0e0;
            align-self: flex-start;
        }
        .ai-msg.bot a {
            color: #2a1a0e;
            text-decoration: underline;
        }
        .ai-input-wrap {
            display: flex;
            padding: 12px;
            background: #fff;
            border-top: 1px solid #e0e0e0;
            gap: 8px;
        }
        .ai-input {
            flex: 1;
            padding: 10px 14px;
            border: 1px solid #ddd;
            border-radius: 24px;
            outline: none;
            font-size: 14px;
        }
        .ai-input:focus {
            border-color: #2a1a0e;
        }
        .ai-send {
            background: #2a1a0e;
            color: #fff;
            border: none;
            padding: 8px 20px;
            border-radius: 24px;
            cursor: pointer;
            font-size: 14px;
        }
        .ai-send:hover {
            background: #3a2415;
        }
    `;
    
    function init() {
        if (document.getElementById('aiFab')) return;
        
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.appendChild(style);
        
        const fab = document.createElement('div');
        fab.className = 'ai-fab';
        fab.id = 'aiFab';
        fab.textContent = '💬';
        
        const chat = document.createElement('div');
        chat.className = 'ai-chat';
        chat.id = 'aiChat';
        chat.innerHTML = `
            <div class="ai-header">
                <span>🚂 Poway Midland Railroad</span>
                <button class="ai-close" id="aiCloseBtn">✕</button>
            </div>
            <div class="ai-messages" id="aiMessages"></div>
            <div class="ai-input-wrap">
                <input class="ai-input" id="aiInput" placeholder="Ask me about tickets, schedule, events..." autocomplete="off" />
                <button class="ai-send" id="aiSend">Send</button>
            </div>
        `;
        
        document.body.appendChild(fab);
        document.body.appendChild(chat);
        
        const msgs = document.getElementById('aiMessages');
        const input = document.getElementById('aiInput');
        const sendBtn = document.getElementById('aiSend');
        const closeBtn = document.getElementById('aiCloseBtn');
        const chatWindow = document.getElementById('aiChat');
        
        function addMessage(role, text) {
            const div = document.createElement('div');
            div.className = 'ai-msg ' + role;
            // 如果是机器人消息，处理链接
            if (role === 'bot') {
                div.innerHTML = addLinks(text);
            } else {
                div.textContent = text;
            }
            msgs.appendChild(div);
            msgs.scrollTop = msgs.scrollHeight;
        }
        
        function sendMessage() {
            const text = input.value.trim();
            if (!text) return;
            addMessage('user', text);
            setTimeout(function() {
                const reply = getSmartReply(text);
                addMessage('bot', reply);
            }, 300);
            input.value = '';
        }
        
        fab.onclick = function() { chatWindow.classList.toggle('show'); };
        sendBtn.onclick = sendMessage;
        closeBtn.onclick = function() { chatWindow.classList.remove('show'); };
        input.onkeypress = function(e) { if (e.key === 'Enter') sendMessage(); };
        
        addMessage('bot', '🚂 Welcome to Poway Midland Railroad! Ask me about [tickets](' + pageLinks.tickets + '), [schedule](' + pageLinks.schedule + '), [events](' + pageLinks.events + '), location, or private rides.');
        
        console.log('AI Assistant loaded successfully!');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();