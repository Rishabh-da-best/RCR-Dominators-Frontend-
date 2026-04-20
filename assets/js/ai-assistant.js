// AI Assistant - Global Injection
(function() {
    // 避免重复注入
    if (window.__aiAssistantInjected) return;
    window.__aiAssistantInjected = true;
    
    // 等待 DOM 加载完成
    function init() {
        // 检查是否已经存在
        if (document.getElementById('aiFab')) return;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
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
                box-shadow: 0 6px 18px rgba(0,0,0,0.25);
                z-index: 999999;
                transition: transform 0.2s, background 0.2s;
            }
            .ai-fab:hover {
                transform: translateY(-2px);
                background: #3a2415;
            }
            .ai-chat {
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 350px;
                height: 450px;
                background: #ffffff;
                border-radius: 14px;
                box-shadow: 0 12px 30px rgba(0,0,0,0.2);
                display: none;
                flex-direction: column;
                overflow: hidden;
                z-index: 999999;
                border: 1px solid #ddd;
            }
            .ai-chat.show { display: flex; }
            .ai-header {
                background: #2a1a0e;
                color: #fff;
                padding: 12px 14px;
                font-size: 14px;
                font-weight: bold;
            }
            .ai-messages {
                flex: 1;
                padding: 12px;
                overflow-y: auto;
                background: #f7f7f7;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .ai-msg {
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 13px;
                max-width: 80%;
                line-height: 1.5;
            }
            .ai-msg.user {
                align-self: flex-end;
                background: #eaeaea;
            }
            .ai-msg.bot {
                align-self: flex-start;
                background: #ffffff;
                border: 1px solid #ddd;
            }
            .ai-input-wrap {
                display: flex;
                border-top: 1px solid #ddd;
            }
            .ai-input {
                flex: 1;
                border: none;
                padding: 10px;
                font-size: 13px;
                outline: none;
            }
            .ai-send {
                background: #2a1a0e;
                color: #fff;
                border: none;
                padding: 0 14px;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
        
        // 创建 HTML 结构
        const fab = document.createElement('div');
        fab.className = 'ai-fab';
        fab.id = 'aiFab';
        fab.textContent = '💬';
        
        const chat = document.createElement('div');
        chat.className = 'ai-chat';
        chat.id = 'aiChat';
        chat.innerHTML = `
            <div class="ai-header">Visitor Assistant 🚆</div>
            <div class="ai-messages" id="aiMessages"></div>
            <div class="ai-input-wrap">
                <input class="ai-input" id="aiInput" placeholder="Ask about tickets, trains..." />
                <button class="ai-send" id="aiSend">→</button>
            </div>
        `;
        
        document.body.appendChild(fab);
        document.body.appendChild(chat);
        
        // 绑定事件
        const msgs = document.getElementById('aiMessages');
        const input = document.getElementById('aiInput');
        
        fab.onclick = () => chat.classList.toggle('show');
        
        function addMsg(role, text) {
            const d = document.createElement('div');
            d.className = 'ai-msg ' + role;
            d.innerHTML = text;
            msgs.appendChild(d);
            msgs.scrollTop = msgs.scrollHeight;
        }
        
        function reply(q) {
            const t = q.toLowerCase();
            if (t.includes('ticket') || t.includes('book') || t.includes('buy'))
                return `You can book tickets from the <a href="/calendar">calendar</a>, then select a date to proceed to booking.`;
            if (t.includes('schedule') || t.includes('time'))
                return `Check today's train schedule here: <a href="/schedule">View Schedule</a>.`;
            if (t.includes('calendar') || t.includes('open') || t.includes('close'))
                return `See operating days and train availability on the <a href="/calendar">calendar page</a>.`;
            if (t.includes('train'))
                return `Learn about all trains here: <a href="/trains">Train Collection</a>.`;
            if (t.includes('history'))
                return `Explore railroad history here: <a href="/history">History Page</a>.`;
            if (t.includes('event'))
                return `Check upcoming events here: <a href="/events">Events Page</a>.`;
            if (t.includes('volunteer'))
                return `Sign up to volunteer here: <a href="/volunteer-schedule">Volunteer Schedule</a>.`;
            if (t.includes('forecast') || t.includes('crowd'))
                return `See park crowd and wait times: <a href="/forecast">Forecast Page</a>.`;
            if (t.includes('photo') || t.includes('note'))
                return `Share your experience here: <a href="/notes">Visitor Notes</a>.`;
            if (t.includes('contact') || t.includes('phone'))
                return `Contact information: <a href="/contact">Contact Page</a>.`;
            if (t.includes('camera') || t.includes('view'))
                return `Explore the park virtually: <a href="/camera">360° Camera</a>.`;
            if (t.includes('login') || t.includes('account'))
                return `Login or register here: <a href="/login">Account Page</a>.`;
            return `I'm here to help with train rides, tickets, events, and park info 🚆<br>
            Try asking about booking, schedule, or activities.`;
        }
        
        function send() {
            const text = input.value.trim();
            if (!text) return;
            addMsg('user', text);
            addMsg('bot', reply(text));
            input.value = '';
        }
        
        document.getElementById('aiSend').onclick = send;
        input.addEventListener('keypress', e => {
            if (e.key === 'Enter') send();
        });
        
        addMsg('bot', 'Hi! I can help you navigate the railroad website 🚆');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
