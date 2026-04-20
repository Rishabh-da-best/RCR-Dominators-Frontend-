// Smart AI Assistant for Poway Midland Railroad
(function() {
    if (window.__PMRRAssistantLoaded) return;
    window.__PMRRAssistantLoaded = true;
    
    // 智能回复函数
    function getSmartReply(message) {
        const msg = message.toLowerCase().trim();
        
        // 订票相关问题
        if (msg.includes('ticket') || msg.includes('book') || msg.includes('订票') || msg.includes('买票')) {
            return "🎟️ Tickets are available at the depot on ride days. Cash and card accepted. For group rates, please contact us.";
        }
        
        // 时刻表/运营时间
        if (msg.includes('schedule') || msg.includes('time') || msg.includes('时刻') || msg.includes('运营')) {
            return "🚂 Steam runs on most Saturdays, with Cable Car or Speeder on Sundays. Please check our calendar for exact dates: https://powaymidlandrr.org/calendar";
        }
        
        // 明天
        if (msg.includes('tomorrow') || msg.includes('明天')) {
            return "🔮 For tomorrow's schedule, please check our online calendar: https://powaymidlandrr.org/calendar";
        }
        
        // 活动/事件
        if (msg.includes('event') || msg.includes('festival') || msg.includes('活动')) {
            return "🎉 Upcoming events: Horseless Carriage Show (April 18), Sam Hinton Folk Festival (June 6), 4th of July Celebration (July 4), Rendezvous in Poway (Oct 3-4), Halloween Event (Oct 24), Train Song Festival (Nov 14), Christmas in the Park (Dec 11-12). Details: https://powaymidlandrr.org/events";
        }
        
        // 7月4日
        if (msg.includes('july') || msg.includes('4th')) {
            return "🎆 July 4th 250th Celebration! 10am-4pm. Ride our 1906 Baldwin Steam Locomotive at Old Poway Park. Steam, whistles, and patriotic fun!";
        }
        
        // 位置
        if (msg.includes('location') || msg.includes('where') || msg.includes('地址')) {
            return "📍 Location: 14154 Midland Rd, Poway, CA 92064. Free parking available.";
        }
        
        // 联系方式
        if (msg.includes('contact') || msg.includes('email')) {
            return "📧 Contact: info@powaymidlandrr.org | Website: https://powaymidlandrr.org";
        }
        
        // 私人活动
        if (msg.includes('private') || msg.includes('group') || msg.includes('birthday')) {
            return "🎂 Private train rides available for groups, birthdays, and special occasions. Contact us for more information.";
        }
        
        // 志愿者
        if (msg.includes('volunteer')) {
            return "🙌 The railroad is volunteer-run! Contact us to get involved.";
        }
        
        // 问候
        if (msg.match(/^(hi|hello|hey|你好|您好)$/)) {
            return "👋 Hello! Welcome to Poway Midland Railroad. How can I help you? Try asking: tickets, schedule, events, location, or private events.";
        }
        
        // 帮助
        if (msg.includes('help')) {
            return "💡 I can help with: tickets, schedule, events, location, private events, and volunteer opportunities. What would you like to know?";
        }
        
        // 默认回复
        return "🚂 I'm your Poway Midland Railroad assistant. Ask me about: tickets, schedule, events, location, or private events!";
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
            div.innerHTML = text;
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
        
        addMessage('bot', '🚂 Welcome to Poway Midland Railroad! Ask me about tickets, schedule, events, location, or private rides.');
        
        console.log('AI Assistant loaded successfully!');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
