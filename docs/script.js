// 移除所有硬编码的 musicLibrary 数据。
let musicLibrary = []; 

const scheduleData = {
    monday: [
        { time: '06:30 - 07:00', title: '🚿洗澡 (Shower)', desc: '清洁放松，准备晚上学习' },
        { time: '07:00 - 07:25', title: '🍽️吃饭 (Eat)', desc: '营养均衡的晚餐' },
        { time: '07:25 - 07:30', title: '🎒收拾书包', desc: '准备好第二天需要的学习用品' },
        { time: '07:30 - 08:20', title: '✏️写作与学习', desc: '专注完成当天功课与学习任务' },
        { time: '08:20 - 08:30', title: '🪥刷牙 / 😴换上睡衣', desc: '准备就寝' },
        { time: '08:30 - 08:50', title: '🎮电子产品时间', desc: '有节制地使用电子产品放松' },
        { time: '08:50 - 09:00', title: '🆓自由时间', desc: '随心安排片刻自由' },
        { time: '09:00', title: '💤睡觉 (Bedtime)', desc: '准时入睡，保证充足休息' }
    ],
    tuesday: [
        { time: '06:30 - 07:00', title: '🚿洗澡 (Shower)', desc: '清洁放松，准备晚上学习' },
        { time: '07:00 - 07:25', title: '🍽️吃饭 (Eat)', desc: '营养均衡的晚餐' },
        { time: '07:25 - 07:30', title: '🎒收拾书包', desc: '准备好第二天需要的学习用品' },
        { time: '07:30 - 08:20', title: '✏️写作与学习', desc: '专注完成当天功课与学习任务' },
        { time: '08:20 - 08:30', title: '🪥刷牙 / 😴换上睡衣', desc: '准备就寝' },
        { time: '08:30 - 08:50', title: '🎮电子产品时间', desc: '有节制地使用电子产品放松' },
        { time: '08:50 - 09:00', title: '🆓自由时间', desc: '随心安排片刻自由' },
        { time: '09:00', title: '💤睡觉 (Bedtime)', desc: '准时入睡，保证充足休息' }
    ],
    wednesday: [
        { time: '04:15 - 07:30', title: '📘补习 (Tuition)', desc: '重点补强与巩固知识' },
        { time: '08:00 - 08:10', title: '🎒收拾书包', desc: '准备好第二天需要的学习用品' },
        { time: '08:10 - 08:30', title: '✏️写作与学习', desc: '专注完成当天功课与学习任务' },
        { time: '08:30 - 08:40', title: '🪥刷牙 / 😴换上睡衣', desc: '准备就寝' },
        { time: '08:40 - 08:50', title: '🎮电子产品时间', desc: '有节制地使用电子产品放松' },
        { time: '08:50 - 09:00', title: '🆓自由时间', desc: '随心安排片刻自由' },
        { time: '09:00', title: '💤睡觉 (Bedtime)', desc: '准时入睡，保证充足休息' }
],
    thursday: [
        { time: '05:15 - 08:00', title: '🥋跆拳道 (Taekwondo)', desc: '锻炼体魄与意志，培养专注与毅力' },
        { time: '08:30 - 08:40', title: '🎒收拾书包', desc: '准备好第二天需要的学习用品' },
        { time: '08:40 - 08:50', title: '✏️写作与学习', desc: '专注完成当天的功课与学习任务' },
        { time: '08:50 - 09:00', title: '🪥刷牙 / 😴换上睡衣', desc: '做好睡前清洁与准备' },
        { time: '09:00', title: '💤睡觉 (Bedtime)', desc: '准时入睡，保证充足休息' }
],
    friday: [
        { time: '06:30 - 07:00', title: '🚿洗澡 (Shower)', desc: '清洁放松，准备晚上学习' },
        { time: '07:00 - 07:25', title: '🍽️吃饭 (Eat)', desc: '营养均衡的晚餐' },
        { time: '07:25 - 07:30', title: '🎒收拾书包', desc: '准备好第二天需要的学习用品' },
        { time: '07:30 - 08:20', title: '✏️写作与学习', desc: '专注完成当天功课与学习任务' },
        { time: '08:20 - 08:30', title: '🪥刷牙 / 😴换上睡衣', desc: '准备就寝' },
        { time: '08:30 - 08:50', title: '🎮电子产品时间', desc: '有节制地使用电子产品放松' },
        { time: '08:50 - 09:00', title: '🆓自由时间', desc: '随心安排片刻自由' },
        { time: '09:00', title: '💤睡觉 (Bedtime)', desc: '准时入睡，保证充足休息' }
    ]
};
let isPlaying = false, currentSongIndex = -1;
const audioPlayer = document.getElementById('audioPlayer');
const musicBtn = document.getElementById('musicBtn');
const musicPanel = document.getElementById('musicPanel');
const currentCover = document.getElementById('currentCover'); // 获取封面元素

// 工具函数：只移除非法字符，不替换空格
function sanitizeAndEncode(s) {
    if (!s) return ''; 
    // 仅清理非字母、数字、中文、空格的字符
    return s.replace(/[^a-zA-Z0-9\s\u4e00-\u9fa5.\-]/g, '').trim(); 
}

// 💥 新增：处理封面显示和 has-cover 类的函数
function updateMusicCover(coverUrl) {
    // 检查 URL 是否有效。由于你的 URL 是构造出来的，我们主要检查其是否为空。
    // 如果你希望在图片加载失败时也退回到 '🎵'，需要更复杂的逻辑（如 Image 对象的 onError 事件），
    // 但现在我们只关注 URL 是否存在。
    const hasValidCoverUrl = coverUrl && coverUrl.trim() !== '';

    if (hasValidCoverUrl) {
        // 尝试加载图片
        currentCover.style.backgroundImage = `url('${coverUrl}')`;
        // 假设图片会加载成功，添加 has-cover 类来隐藏 '🎵'
        currentCover.classList.add('has-cover');
        
        // 💡 增强：可以在此处添加一个图片加载监听，以处理图片不存在的情况
        // 比如：使用 Image 对象预加载，如果失败则执行 else 块的逻辑
    } else {
        // URL 无效，或你故意传入 'null' 来显示默认图标
        currentCover.style.backgroundImage = 'none'; // 清除背景图
        currentCover.classList.remove('has-cover'); // 移除类，显示 '🎵'
    }
}

function initMusicList() {
    const musicList = document.getElementById('musicList');
    musicList.innerHTML = ''; // 清空旧列表
    
    musicLibrary.forEach((asset, index) => {
        const song = asset.metadata;
        
        if (asset.type !== 'audio' || !song) return;
        
        const item = document.createElement('div');
        item.className = 'music-item';
        
        // 关键修改：在列表中显示 Album 名称
        const albumDisplay = song.album ? ` (${song.album})` : '';
        item.textContent = `${song.title} - ${song.artist}${albumDisplay}`;
        
        item.addEventListener('click', () => playSong(index));
        musicList.appendChild(item);
    });
}

function playSong(index) {
    const asset = musicLibrary[index];
    if (!asset || asset.type !== 'audio') return; 

    currentSongIndex = index;
    const song = asset.metadata;
    
    document.getElementById('currentTitle').textContent = song.title;
    document.getElementById('currentArtist').textContent = song.artist;
    
    // --- 核心逻辑：使用 Album Name 构造 URL ---
    const rawKey = sanitizeAndEncode(song.album);
    
    // 💥 关键：只有当 rawKey 有效时，才构造 URL
    let finalCoverUrl = '';
    if (rawKey) {
        const encodedKey = encodeURIComponent(rawKey);
        finalCoverUrl = `https://music.mikephie.site/covers/${encodedKey}.JPG`;
    }
    
    // 💥 调用新的处理函数来设置背景图和 has-cover 类
    updateMusicCover(finalCoverUrl);
    // --- 核心逻辑结束 ---

    document.getElementById('musicError').style.display = 'none';
    document.querySelectorAll('.music-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    
    // 使用 asset.url 作为音频源
    audioPlayer.src = asset.url;
    audioPlayer.load();
    audioPlayer.play().then(() => {
        isPlaying = true;
        musicBtn.textContent = '⏸️';
    }).catch(error => {
        console.error('播放失败:', error);
        document.getElementById('musicError').textContent = '播放失败,请检查音频链接或 CORS 设置';
        document.getElementById('musicError').style.display = 'block';
        isPlaying = false;
        musicBtn.textContent = '▶️';
    });
}
musicBtn.addEventListener('click', function() {
    if (!musicPanel.classList.contains('active')) {
        musicPanel.classList.add('active');
    } else {
        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
            musicBtn.textContent = '▶️';
        } else {
            if (currentSongIndex >= 0) {
                audioPlayer.play();
                isPlaying = true;
                musicBtn.textContent = '⏸️';
            }
        }
    }
});
document.getElementById('closePanel').addEventListener('click', function() {
    musicPanel.classList.remove('active');
});
audioPlayer.addEventListener('ended', function() {
    currentSongIndex = (currentSongIndex + 1) % musicLibrary.length;
    playSong(currentSongIndex);
});
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 60 + 20;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        container.appendChild(particle);
    }
}

// 渲染时间表
function renderSchedule(day) {
    const timeline = document.getElementById('timeline');
    const schedule = scheduleData[day] || [];
    timeline.innerHTML = '';

    schedule.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'timeline-item';
        el.style.animationDelay = (index * 0.08) + 's';

        const tagsHtml = (item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
        el.innerHTML = `
            <div class="timeline-dot"></div>
            ${index < schedule.length - 1 ? '<div class="timeline-line"></div>' : ''}
            <div class="timeline-card">
                <div class="timeline-time">🕐 ${item.time}</div>
                <div class="timeline-title">${item.title}</div>
                ${item.desc ? `<div class="timeline-desc">${item.desc}</div>` : ''}
                ${tagsHtml ? `<div class="timeline-tags">${tagsHtml}</div>` : ''}
            </div>
        `;
        timeline.appendChild(el);
    });

    document.getElementById('taskCount').textContent = schedule.length;
}

// 更新日期显示
function updateDateDisplay(day) {
    const dayMap = { monday: '周一', tuesday: '周二', wednesday: '周三', thursday: '周四', friday: '周五' };
    document.getElementById('scheduleDate').textContent = `10月 ${dayMap[day]}`;
}

// 星期按钮点击事件
document.querySelectorAll('.week-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const day = this.getAttribute('data-day');
        document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        document.getElementById('emptyState').style.display = 'none';
        const scheduleContent = document.getElementById('scheduleContent');
        scheduleContent.classList.add('active');

        renderSchedule(day);
        updateDateDisplay(day);
    });
});

// 更新日历为当前日期
function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = {
        0: { en: 'JAN', cn: '一月' }, 1: { en: 'FEB', cn: '二月' }, 2: { en: 'MAR', cn: '三月' },
        3: { en: 'APR', cn: '四月' }, 4: { en: 'MAY', cn: '五月' }, 5: { en: 'JUN', cn: '六月' },
        6: { en: 'JUL', cn: '七月' }, 7: { en: 'AUG', cn: '八月' }, 8: { en: 'SEP', cn: '九月' },
        9: { en: 'OCT', cn: '十月' }, 10: { en: 'NOV', cn: '十一月' }, 11: { en: 'DEC', cn: '十二月' }
    };
    const month = monthNames[now.getMonth()];
    document.getElementById('calendarMonth').textContent = `${month.en} ${month.cn}`;
    document.getElementById('calendarDay').textContent = day;
}

// 💥 异步函数定义
async function loadMusicLibrary() {
    try {
        // 关键修改：引用正确的 JSON 文件名
        const response = await fetch('https://music.mikephie.site/music_assets.json'); 
        if (!response.ok) {
            throw new Error('无法加载音乐数据文件，请检查 JSON 文件是否存在或 CORS 设置');
        }
        
        // 过滤非音频资产，确保 musicLibrary 只包含歌曲
        const fullAssets = await response.json();
        // 确保 fullAssets.assets 存在且是数组
        if (!fullAssets.assets || !Array.isArray(fullAssets.assets)) {
             throw new Error('JSON 格式不正确，缺少 assets 数组');
        }
        
        // 过滤出音频资产，并映射到 musicLibrary
        musicLibrary = fullAssets.assets.filter(asset => asset.type === 'audio');
        
        initMusicList(); // 数据加载成功后，渲染列表
    } catch (error) {
        console.error('音乐库加载失败:', error);
        document.getElementById('musicList').innerHTML = '<div style="color:red;padding:10px;font-size:14px;text-align:center;">错误: 音乐数据加载失败。请检查 music_assets.json 的 CORS 设置或 JSON 格式。</div>';
    }
}

// ==========================================================
// 🚀 PWA 核心：Service Worker 注册
// ==========================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // 使用相对路径 'sw.js'，它会被 <base href="/TimeTable/"> 解析为 /TimeTable/sw.js
        navigator.serviceWorker.register('sw.js?v=2') 
            .then(registration => {
                console.log('Service Worker 注册成功，作用域：', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker 注册失败:', error);
            });
    });
}
// ==========================================================

// 初始化
createParticles();
updateCalendar();
loadMusicLibrary(); // 调用新的异步加载函数
