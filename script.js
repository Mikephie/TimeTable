document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.day-button');
    const schedules = document.querySelectorAll('.schedule-card');
    const defaultMsg = document.getElementById('default-msg');
    
    // --- 周一通用安排列表内容 ---
    const monScheduleList = `
        <li class="after-school">放学吃水果</li>
        <li>06:30 - 07:00：洗澡 (Shower)</li>
        <li>07:00 - 07:25：吃饭 (Eat)</li>
        <li>07:25 - 07:30：收拾书包 (Pack Bag)</li>
        <li>07:30 - 08:20：开始写作和学习</li>
        <li>08:20 - 08:30：刷牙/准备睡觉</li>
        <li>08:30 - 08:50：电子产品时间 (Gadget)</li>
        <li>08:50 - 09:00：自由时间</li>
        <li class="bedtime">09:00：睡觉 (Bedtime)</li>
    `;

    // 预先填充周一的通用列表内容
    document.getElementById('mon-schedule').querySelector('ul').innerHTML = monScheduleList;


    // 1. 页面加载时，确保所有时间表内容是隐藏的
    schedules.forEach(card => card.classList.add('hidden'));
    defaultMsg.classList.remove('hidden');


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            
            // 2. 隐藏所有卡片并移除动画类
            schedules.forEach(card => {
                card.classList.add('hidden');
                card.classList.remove('active-animation');
            });
            defaultMsg.classList.add('hidden');
            
            // 3. 移除所有按钮的激活状态
            buttons.forEach(btn => btn.classList.remove('active'));

            let targetScheduleId = `${day}-schedule`;
            const targetSchedule = document.getElementById(targetScheduleId);
            
            // 4. 处理周二和周五的通用内容（填充周一的列表）
            if (day === 'tue' || day === 'fri') {
                if (!targetSchedule.querySelector('ul')) {
                    targetSchedule.insertAdjacentHTML('beforeend', '<ul></ul>');
                }
                targetSchedule.querySelector('ul').innerHTML = monScheduleList;
                targetSchedule.querySelector('.same-as')?.classList.add('hidden');
            }

            // 5. 显示目标时间表并添加动画类
            if (targetSchedule) {
                targetSchedule.classList.remove('hidden');
                // 强制浏览器重新计算布局，确保动画生效
                void targetSchedule.offsetWidth; 
                targetSchedule.classList.add('active-animation');
            }
            
            // 6. 设置当前点击按钮为激活状态
            button.classList.add('active');
        });
    });
});
