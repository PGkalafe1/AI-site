
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const typingIndicator = document.getElementById('typingIndicator');

// پایگاه دانش هوش مصنوعی
const aiKnowledge = {
    greetings: [
        "سلام عزیز! 😊 چه خبر؟ چطور می‌تونم کمکت کنم؟",
        "درود! 👋 خوشحالم که اینجایی. چه کاری برات انجام بدم؟",
        "سلام و احوال! 🌟 امیدوارم روز خوبی داشته باشی!",
        "های! 😄 چه موضوع جالبی می‌خوای باهام در میون بذاری؟"
    ],

    jokes: [
        "چرا برنامه‌نویسا همیشه عینک دارن؟ 🤓\nچون نمی‌تونن C شارپ ببینن! 😂",
        "معلم: چرا دیر اومدی؟\nدانش‌آموز: چون خواب دیدم 2+2=5 بود!\nمعلم: خب که چی؟\nدانش‌آموز: داشتم اثباتش می‌کردم! 😅",
        "یه روز یه برنامه‌نویس رفت دکتر گفت: دکتر من bug دارم!\nدکتر گفت: برو پیش دامپزشک! 🐛😂",
        "چرا هکرا هیچ وقت سرما نمی‌خورن؟\nچون همیشه Windows بستشون! 🪟❄️"
    ],

    programming: {
        html: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<title>صفحه من</title>
<style>
body {
    font-family: Tahoma;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    margin: 0;
    padding: 20px;
}
.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
h1 {
    color: #333;
    text-align: center;
    font-size: 2.5em;
}
.btn {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.3s;
}
.btn:hover {
    transform: scale(1.05);
}
</style>
</head>
<body>
<div class="container">
<h1>🎉 سلام دنیا!</h1>
<p>این اولین صفحه HTML من است و خیلی زیباست!</p>
<button class="btn" onclick="alert('سلام!')">کلیک کن!</button>
</div>
</body>
</html>`,

        css: `.beautiful-card {
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
padding: 30px;
border-radius: 20px;
box-shadow: 0 15px 35px rgba(0,0,0,0.1);
transition: all 0.3s ease;
margin: 20px;
}

.beautiful-card:hover {
transform: translateY(-10px);
box-shadow: 0 25px 50px rgba(0,0,0,0.2);
}

.glow-button {
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
color: white;
padding: 15px 30px;
border: none;
border-radius: 50px;
cursor: pointer;
font-size: 18px;
transition: all 0.3s ease;
box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.glow-button:hover {
transform: scale(1.1);
box-shadow: 0 10px 30px rgba(255,107,107,0.4);
}`,

        javascript: `// ماشین حساب هوشمند
function smartCalculator(expression) {
try {
// امنیت: فقط اعداد و عملگرهای ریاضی
if (!/^[0-9+\\-*/.() ]+$/.test(expression)) {
    return "❌ فقط اعداد و عملگرهای ریاضی مجاز است!";
}

const result = eval(expression);
return \`✅ نتیجه: \${result}\`;
} catch (error) {
return "❌ خطا در محاسبه! فرمت صحیح: 2+3*4";
}
}

// تولید رنگ تصادفی
function randomColor() {
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
return colors[Math.floor(Math.random() * colors.length)];
}

// انیمیشن متن
function animateText(text) {
let result = '';
for (let i = 0; i < text.length; i++) {
setTimeout(() => {
    result += text[i];
    console.log(result);
}, i * 100);
}
}

// مثال استفاده
console.log(smartCalculator("10 + 5 * 2")); // 20
document.body.style.backgroundColor = randomColor();
animateText("سلام دنیا!");`
    },

    poetry: [
        `🌸 در باغ دل، گل امید می‌کارم
با نور عشق، تاریکی می‌شکارم  
هر روز نو، فرصتی تازه‌ست
با تو که هستی، زندگی زیباست 🌸`,

        `🌟 ستاره‌ای در آسمان شب می‌درخشد
امید در دل‌های غمگین می‌نشیند
هر قطره باران، نوید بهاری‌ست  
زندگی زیبا، با تو معنا می‌یابد 🌟`,

        `🦋 پروانه‌ای بودم، در کوکون خواب
رویای پرواز، در دلم تاب
حالا که بالم گشوده شده
دنیای زیبا، پیش رویم آمده 🦋`
    ],

    stories: [
        `📚 روزی روزگاری، در شهری دور، دختری زیبا زندگی می‌کرد که عاشق کتاب بود. هر شب زیر نور ماه، کتاب‌هایش را می‌خواند و با شخصیت‌هایشان به دنیاهای جادویی سفر می‌کرد. یک شب، کتابی پیدا کرد که صفحاتش خالی بود، اما وقتی شروع به نوشتن کرد، کلماتش زنده شدند و ماجراجویی واقعی‌اش آغاز شد... ✨`,

        `🌟 در کوهستانی بلند، پیرمردی حکیم زندگی می‌کرد که راز شادی را می‌دانست. مردم از دور و نزدیک نزد او می‌آمدند. او می‌گفت: "شادی در کوچکترین لحظات پنهان است. یک لبخند، یک دست کمک، یک کلمه مهربان - اینها کلیدهای شادی هستند." 😊`,

        `🦋 پروانه‌ای کوچک آرزو داشت مثل عقاب بلند پرواز کند. عقاب گفت: "تو نمی‌توانی مثل من بلند پرواز کنی، اما زیبایی تو در رنگ‌هایت است که هیچ پرنده‌ای ندارد." پروانه فهمید هر کسی زیبایی خاص خودش را دارد. 🌈`
    ]
};

// تشخیص نوع پیام
function detectMessageType(message) {
    const msg = message.toLowerCase();

    if (msg.includes('سلام') || msg.includes('درود') || msg.includes('چطوری') || msg.includes('احوال')) {
        return 'greeting';
    }
    if (msg.includes('شوخی') || msg.includes('جک') || msg.includes('خنده') || msg.includes('بامزه')) {
        return 'joke';
    }
    if (msg.includes('کد') || msg.includes('html') || msg.includes('css') || msg.includes('javascript') || msg.includes('برنامه')) {
        return 'programming';
    }
    if (msg.includes('شعر') || msg.includes('غزل')) {
        return 'poetry';
    }
    if (msg.includes('داستان') || msg.includes('قصه')) {
        return 'story';
    }
    if (msg.includes('حساب') || msg.includes('ریاضی') || msg.includes('جمع') || msg.includes('ضرب') ||
        msg.includes('تقسیم') || msg.includes('تفریق') || /\d+[\+\-\*\/]\d+/.test(msg)) {
        return 'math';
    }
    if (msg.includes('ممنون') || msg.includes('متشکر') || msg.includes('عالی') || msg.includes('خوب')) {
        return 'thanks';
    }
    if (msg.includes('خداحافظ') || msg.includes('بای') || msg.includes('برم')) {
        return 'goodbye';
    }

    return 'general';
}

// تولید پاسخ هوشمند
function generateResponse(message, type) {
    switch (type) {
        case 'greeting':
            return aiKnowledge.greetings[Math.floor(Math.random() * aiKnowledge.greetings.length)];

        case 'joke':
            return aiKnowledge.jokes[Math.floor(Math.random() * aiKnowledge.jokes.length)];

        case 'programming':
            if (message.toLowerCase().includes('html')) {
                return "اینجا یک کد HTML زیبا برات نوشتم! 💻\n\n```html\n" + aiKnowledge.programming.html + "\n```\n\nاین کد رو کپی کن و توی یک فایل .html ذخیره کن، بعد باز کن!";
            } else if (message.toLowerCase().includes('css')) {
                return "اینجا چند استایل CSS فوق‌العاده! 🎨\n\n```css\n" + aiKnowledge.programming.css + "\n```\n\nاینا رو به CSS فایلت اضافه کن تا صفحه‌ات خیلی زیبا بشه!";
            } else if (message.toLowerCase().includes('javascript')) {
                return "یه سری کد JavaScript کاربردی برات! ⚡\n\n```javascript\n" + aiKnowledge.programming.javascript + "\n```\n\nاینا رو امتحان کن، خیلی جالبن!";
            } else {
                return "چه نوع کدی می‌خوای؟ HTML، CSS یا JavaScript؟ 🤔\nمن همه‌شون رو بلدم و می‌تونم برات بنویسم! 💪";
            }

        case 'poetry':
            return "یه شعر زیبا برات! 🌹\n\n" + aiKnowledge.poetry[Math.floor(Math.random() * aiKnowledge.poetry.length)] +
                "\n\nچطوره؟ دوست داشتی؟ 😊";

        case 'story':
            return "بیا یه داستان قشنگ برات تعریف کنم! 📖\n\n" + aiKnowledge.stories[Math.floor(Math.random() *
                aiKnowledge.stories.length)] + "\n\nادامه‌ش رو می‌خوای؟ 🤗";

        case 'math':
            // تشخیص عملیات ریاضی
            const mathMatch = message.match(/(\d+)\s*[\+\-\*\/]\s*(\d+)/);
            if (mathMatch) {
                const num1 = parseInt(mathMatch[1]);
                const num2 = parseInt(mathMatch[2]);
                const operator = message.match(/[\+\-\*\/]/)[0];

                let result;
                switch (operator) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*': result = num1 * num2; break;
                    case '/': result = num2 !== 0 ? (num1 / num2).toFixed(2) : "تقسیم بر صفر ممکن نیست!"; break;
                }

                return `🧮 محاسبه:\n${num1} ${operator} ${num2} = ${result}\n\nسوال ریاضی دیگه‌ای داری؟ 🤓`;
            } else {
                return "ریاضی عاشقشم! 🔢\nیه عملیات ریاضی بنویس مثل: 25 + 17\nیا بپرس چیزی درباره ریاضی! 📐";
            }

        case 'thanks':
            return "قابلی نداره عزیزم! 😊\nخوشحالم که تونستم کمکت کنم. چیز دیگه‌ای هم می‌خوای؟ 🤗";

        case 'goodbye':
            return "خداحافظ عزیز! 👋\nهر وقت برگشتی، اینجا منتظرتم! موفق باشی! ✨🌟";

        default:
            const responses = [
                "جالب! 🤔 بیشتر توضیح بده تا بتونم بهتر کمکت کنم.",
                "این موضوع پیچیده‌ست! 🧠 بذار فکر کنم و جواب کاملی بهت بدم...",
                "سوال جالبی پرسیدی! 💭 چه جنبه‌ای از این موضوع رو می‌خوای بدونی؟",
                "هممم... 🤨 می‌تونی کمی بیشتر توضیح بدی؟ تا بتونم دقیق‌تر جواب بدم.",
                "این سوال نیاز به تحلیل داره! 📊 بیا قدم به قدم بررسیش کنیم."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
    }
}

// ارسال پیام
function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    // اضافه کردن پیام کاربر
    addMessage(message, 'user');
    messageInput.value = '';

    // نمایش تایپ کردن
    showTyping();

    // تولید پاسخ
    setTimeout(() => {
        hideTyping();
        const messageType = detectMessageType(message);
        const response = generateResponse(message, messageType);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 2000);
}

// اضافه کردن پیام به چت
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';

    // پردازش کد blocks
    if (text.includes('```')) {
        const parts = text.split('```');
        let html = '';
        for (let i = 0; i < parts.length; i++) {
            if (i % 2 === 0) {
                html += parts[i].replace(/\n/g, '<br>');
            } else {
                html += `<div style="background: rgba(0,0,0,0.1); padding: 10px; border-radius: 8px; margin: 10px 0; font-family: monospace; font-size: 14px; overflow-x: auto; white-space: pre-wrap;">${parts[i]}</div>`;
            }
        }
        messageDiv.innerHTML = html;
    } else {
        messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// نمایش تایپ کردن
function showTyping() {
    typingIndicator.style.display = 'block';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// مخفی کردن تایپ کردن
function hideTyping() {
    typingIndicator.style.display = 'none';
}

// ارسال پیشنهاد
function sendSuggestion(text) {
    messageInput.value = text;
    sendMessage();
}

// مدیریت کلید Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// پاک کردن چت
function clearChat() {
    if (confirm('مطمئنی می‌خوای چت رو پاک کنی؟')) {
        chatMessages.innerHTML = `
        <div class="bot-message">
            چت پاک شد! 🧹✨<br>
            دوباره شروع کنیم؟ چه کمکی می‌تونم بکنم؟ 😊
        </div>
        `;
    }
}

// دانلود چت
function downloadChat() {
    const messages = chatMessages.querySelectorAll('.user-message, .bot-message');
    let chatText = 'گفتگو با چت بات هوشمند\n';
    chatText += '='.repeat(40) + '\n\n';

    messages.forEach((msg, index) => {
        const isUser = msg.classList.contains('user-message');
        const text = msg.textContent || msg.innerText;
        chatText += `${isUser ? '👤 شما' : '🤖 ربات'}: ${text}\n\n`;
    });

    const blob = new Blob([chatText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// پیام خوش‌آمدگویی
console.log('🤖 چت بات هوشمند آماده است!');