:root {
    --main-blue: #1a73e8; /* 主题蓝 */
    --main-dark-blue: #004d99; /* 深蓝用于标题 */
    --soft-white: #fcfcfc; /* 柔和白色，替代纯白 */
    --light-gray: #f8f8f8; /* 柔和浅灰 */
    --light-blue: #e6f7ff; /* 浅蓝背景 */
    --highlight-pink: #fff0f6; 
    --bedtime-red: #ff4d4f; 
}

/* 关键样式：控制显示/隐藏 */
.hidden {
    display: none !important;
    opacity: 0 !important;
    position: absolute !important; /* 确保不占用空间 */
    visibility: hidden !important; 
}

/* --- 动画定义 --- */
@keyframes fadeInSlide {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes breathingShadow {
    0% {
        box-shadow: 0 4px 12px rgba(255, 133, 192, 0.2);
    }
    50% {
        box-shadow: 0 6px 15px rgba(255, 133, 192, 0.4);
    }
    100% {
        box-shadow: 0 4px 12px rgba(255, 133, 192, 0.2);
    }
}

@keyframes pulseBackground {
    0% { background-color: var(--light-blue); }
    50% { background-color: #f0f8ff; } 
    100% { background-color: var(--light-blue); }
}

/* 新增：主背景渐变动画 */
@keyframes background-gradient {
    0% { background-color: #f4f7f6; }
    50% { background-color: #eaf1f8; } 
    100% { background-color: #f4f7f6; }
}

/* 新增：默认信息欢迎动画 */
@keyframes welcomeScale {
    from {
        opacity: 0;
        transform: translateY(20px); 
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* --- 基础样式和布局压缩 (单屏优化) --- */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* 应用背景动画 */
    background-color: #f4f7f6;
    animation: background-gradient 15s ease infinite alternate;
    
    margin: 0;
    padding: 10px; 
    color: #333;
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    min-height: 100vh;
    overflow: hidden; 
}

.main-container {
    width: 100%;
    max-width: 650px; 
    background-color: var(--soft-white); /* 柔和白色背景 */
    padding: 20px 15px; 
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); 
    border-top: 5px solid var(--main-blue); /* 顶部蓝色强调线 */
}

h1 {
    text-align: center;
    color: var(--main-dark-blue);
    margin-bottom: 20px; 
    font-weight: 700;
    font-size: 1.8em; 
}

/* 按钮组样式 */
.button-group {
    display: flex;
    justify-content: center; 
    gap: 5px; 
    margin-bottom: 20px;
    overflow-x: auto;
    padding-bottom: 5px;
}

.day-button {
    flex-shrink: 0;
    padding: 10px 12px; 
    border-radius: 20px; 
    background-color: var(--light-blue);
    color: var(--main-blue);
    font-size: 0.95em; 
    transition: all 0.3s ease; 
}

/* 按钮点击动画 */
.day-button:active {
    transform: scale(0.95);
    background-color: var(--main-dark-blue);
}

.day-button:hover, .day-button.active {
    background-color: var(--main-blue);
    color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* 时间表显示区域 */
.schedule-display {
    min-height: 250px; 
    position: relative; 
}

.info-msg {
    text-align: center;
    padding: 30px 10px; 
    color: var(--main-blue); 
    font-style: italic;
    font-size: 1em;
    opacity: 0;
    animation: welcomeScale 0.6s ease-out 0.8s forwards; 
}
.info-msg::before {
    content: "📅 "; 
    font-size: 1.4em; 
    display: block;
    margin-bottom: 5px;
}

/* 时间表卡片样式 */
.schedule-card {
    border: 1px solid #ddd;
    padding: 10px; 
    border-radius: 8px;
    transition: opacity 0.3s ease;
    background-color: var(--light-gray); /* 柔和浅灰色背景 */
    
    /* 默认状态：不占用空间，由 .hidden 类控制 */
    width: calc(100% - 20px); 
}

/* 激活的卡片应用动画 */
.schedule-card.active-animation {
    /* 恢复到占据空间，并应用动画 */
    animation: fadeInSlide 0.4s ease-out forwards;
    opacity: 1;
    position: relative; 
    visibility: visible; 
}

.schedule-card h2 {
    color: var(--main-blue);
    border-bottom: 2px solid var(--light-blue);
    padding-bottom: 5px;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.4em; 
}

.schedule-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.schedule-card li {
    padding: 8px 10px; 
    margin-bottom: 5px; 
    border-radius: 5px;
    border-left: 5px solid var(--main-blue);
    animation: pulseBackground 8s ease-in-out infinite alternate;
    background-color: var(--soft-white); /* 列表项内部使用柔和白 */
}

/* 列表项鼠标悬停效果 */
.schedule-card li:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}


/* 特殊项目样式 */
.schedule-card .after-school {
    background-color: #d9f7be; 
    font-weight: bold;
    border-left-color: #52c41a;
    font-size: 1em; 
    animation-delay: 0.1s;
}

.schedule-card .bedtime {
    background-color: #fcebeb; 
    border-left-color: var(--bedtime-red);
    font-weight: bold;
    animation-delay: 0.7s;
}

.schedule-card .detail-time {
    background-color: #fffae6; 
    border-left-color: #faad14;
    animation-delay: 0.5s;
}

/* 新增：主要活动样式 */
.schedule-card .big-event {
    background-color: #ffe7ba; 
    border-left-color: #fa8c16;
    font-weight: bold;
    font-size: 1.15em;
    margin-top: 15px; 
}

/* 周三/周四的突出样式和呼吸动画 */
.schedule-card.highlight {
    background-color: var(--highlight-pink);
    border-color: #ff85c0;
    animation: breathingShadow 3s ease-in-out infinite alternate; 
}

.schedule-card.highlight li {
    background-color: var(--soft-white);
}

.schedule-card.highlight li.detail-time {
    background-color: #ffe0e9; 
    border-left-color: #ff4d94;
}

.same-as {
    text-align: center;
    font-style: italic;
    color: #666;
    padding: 30px;
}

/* 媒体查询：应对极小屏幕，进一步压缩字体 */
@media (max-width: 380px) {
    .main-container {
        padding: 15px 10px;
    }
    h1 {
        font-size: 1.6em;
    }
    .day-button {
        font-size: 0.9em;
        padding: 8px 10px;
    }
    .schedule-card li {
        font-size: 0.9em;
        padding: 6px 8px;
    }
}
