const musicLibrary = [
    { title: 'Song of the Rabbit', artist: 'Jangdan', url: 'https://music.mikephie.site/audio/Jangdan%20-%20Song%20of%20the%20Rabbit.FLAC' },
    { title: '孤勇者', artist: '陈奕迅', url: 'https://music.mikephie.site/audio/%E5%AD%A4%E5%8B%87%E8%80%85.FLAC' },
    { title: '稻香', artist: '周杰伦', url: 'https://music.mikephie.site/audio/%E7%A8%BB%E9%A6%99.FLAC' }
];
const scheduleData = {
    monday: [
        { time: '放学后', title: '吃水果', desc: '放学后补充维生素与能量', tags: ['放学', '习惯'] },
        { time: '06:30 - 07:00', title: '洗澡 (Shower)', desc: '清洁放松,准备晚上学习', tags: ['卫生'] },
        { time: '07:00 - 07:25', title: '吃饭 (Eat)', desc: '营养均衡的晚餐', tags: ['用餐'] },
        { time: '07:25 - 07:30', title: '收拾书包', desc: '准备好第二天需要的学习用品', tags: ['整理'] },
        { time: '07:30 - 08:20', title: '写作与学习', desc: '专注完成当天写作与学习任务', tags: ['学习', '专注'] },
        { time: '08:20 - 08:30', title: '刷牙 / 准备睡觉', desc: '睡前清洁,进入休息模式', tags: ['卫生', '就寝前'] },
        { time: '08:30 - 08:50', title: '电子产品时间', desc: '有节制地使用电子产品放松', tags: ['放松', '电子'] },
        { time: '08:50 - 09:00', title: '自由时间', desc: '随心安排片刻自由', tags: ['放松'] },
        { time: '09:00', title: '睡觉 (Bedtime)', desc: '按时入睡,保证充足睡眠', tags: ['就寝'] }
    ],
    tuesday: [
        { time: '放学后', title: '吃水果', desc: '放学后补充维生素与能量', tags: ['放学', '习惯'] },
        { time: '06:30 - 07:00', title: '洗澡 (Shower)', desc: '清洁放松,准备晚上学习', tags: ['卫生'] },
        { time: '07:00 - 07:25', title: '吃饭 (Eat)', desc: '营养均衡的晚餐', tags: ['用餐'] },
        { time: '07:25 - 07:30', title: '收拾书包', desc: '准备好第二天需要的学习用品', tags: ['整理'] },
        { time: '07:30 - 08:20', title: '写作与学习', desc: '专注完成当天写作与学习任务', tags: ['学习', '专注'] },
        { time: '08:20 - 08:30', title: '刷牙 / 准备睡觉', desc: '睡前清洁,进入休息模式', tags: ['卫生', '就寝前'] },
        { time: '08:30 - 08:50', title: '电子产品时间', desc: '有节制地使用电子产品放松', tags: ['放松', '电子'] },
        { time: '08:50 - 09:00', title: '自由时间', desc: '随心安排片刻自由', tags: ['放松'] },
        { time: '09:00', title: '睡觉 (Bedtime)', desc: '按时入睡,保证充足睡眠', tags: ['就寝'] }
    ],
    wednesday: [
        { time: '04:15 - 07:30', title: '补习 (Tuition)', desc: '重点补强与巩固知识', tags: ['补习', '重要'] },
        { time: '补习后', title: '吃水果', desc: '补习后补充能量', tags: ['补习后', '习惯'] },
        { time: '07:30 - 08:10', title: '吃饭 / 收拾 / 准备', desc: '补充能量并整理状态', tags: ['用餐', '整理'] },
        { time: '08:10 - 08:20', title: '写作 (Write)', desc: '完成当日写作任务', tags: ['写作', '学习'] },
        { time: '08:20 - 08:30', title: '学习 (Study)', desc: '短时高效巩固', tags: ['学习', '专注'] },
        { time: '08:30 - 08:35', title: '收拾书包', desc: '为第二天做好准备', tags: ['整理'] },
        { time: '08:35 - 08:45', title: '刷牙 (Brush)', desc: '睡前清洁', tags: ['卫生'] },
        { time: '08:45 - 09:00', title: '自由时间', desc: '轻松片刻', tags: ['放松'] },
        { time: '09:00', title: '睡觉 (Bedtime)', desc: '按时入睡', tags: ['就寝'] }
    ],
    thursday: [
        { time: '05:15 - 08:00', title: '跆拳道 (Taekwondo)', desc: '锻炼体魄与意志', tags: ['运动', '训练'] },
        { time: '回家后', title: '吃水果', desc: '运动后补充能量', tags: ['习惯'] },
        { time: '08:00 - 08:30', title: '吃饭 / 准备', desc: '补充能量并整理状态', tags: ['用餐', '整理'] },
        { time: '08:30 - 08:40', title: '写作 (Write)', desc: '短时写作练习', tags: ['写作'] },
        { time: '08:40 - 08:45', title: '收拾书包', desc: '准备好第二天的用品', tags: ['整理'] },
        { time: '08:45 - 08:55', title: '刷牙 (Brush)', desc: '睡前清洁', tags: ['卫生'] },
        { time: '08:55 - 09:00', title: '睡觉 (Bedtime)', desc: '按时入睡', tags: ['就寝'] }
    ],
    friday: [
        { time: '放学后', title: '吃水果', desc: '放学后补充维生素与能量', tags: ['放学', '习惯'] },
        { time: '06:30 - 07:00', title: '洗澡 (Shower)', desc: '清洁放松,准备晚上学习', tags: ['卫生'] },
        { time: '07:00 - 07:25', title: '吃饭 (Eat)', desc: '营养均衡的晚餐', tags: ['用餐'] },
        { time: '07:25 - 07:30', title: '收拾书包', desc: '准备好第二天需要的学习用品', tags: ['整理'] },
        { time: '07:30 - 08:20', title: '写作与学习', desc: '专注完成当天写作与学习任务', tags: ['学习', '专注'] },
        { time: '08:20 - 08:30', title: '刷牙 / 准备睡觉', desc: '睡前清洁,进入休息模式', tags: ['卫生', '就寝前'] },
        { time: '08:30 - 08:50', title: '电子产品时间', desc: '有节制地使用电子产品放松', tags: ['放松', '电子'] },
        { time: '08:50 - 09:00', title: '自由时间', desc: '随心安排片刻自由', tags: ['放松'] },
        { time: '09:00', title: '睡觉 (Bedtime)', desc: '按时入睡,保证充足睡眠', tags: ['就寝'] }
    ]
};
let isPlaying = false, currentSongIndex = -1;
const audioPlayer = document.getElementById('audioPlayer');
const musicBtn = document.getElementById('musicBtn');
const musicPanel = document.getElementById('musicPanel');
function initMusicList() {
    const musicList = document.getElementById('musicList');
    musicLibrary.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = 'music-item';
        item.textContent = `${song.title} - ${song.artist}`;
        item.addEventListener('click', () => playSong(index));
        musicList.appendChild(item);
    });
}
function playSong(index) {
    currentSongIndex = index;
    const song = musicLibrary[index];
    document.getElementById('currentTitle').textContent = song.title;
    document.getElementById('currentArtist').textContent = song.artist;
    document.getElementById('musicError').style.display = 'none';
    document.querySelectorAll('.music-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    audioPlayer.src = song.url;
    audioPlayer.load();
    audioPlayer.play().then(() => {
        isPlaying = true;
        musicBtn.textContent = '⏸️';
    }).catch(error => {
        console.error('播放失败:', error);
        document.getElementById('musicError').textContent = '播放失败,请检查音频链接';
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

// 初始化
createParticles();
updateCalendar();
initMusicList();
