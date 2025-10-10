// ====== 音乐列表配置 ======
// 提示：请替换为你自己的音乐链接
// 支持的格式：.mp3, .wav, .ogg, .m4a
const musicLibrary = [
    { title: '示例音乐 1', artist: 'SoundHelix', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: '示例音乐 2', artist: 'SoundHelix', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: '示例音乐 3', artist: 'SoundHelix', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

// ====== 时间表数据 ======
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
        { time: '08:45 - 08:55', title: '刷牙 (Brush)', desc: '睡前
