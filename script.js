document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.day-button');
    const schedules = document.querySelectorAll('.schedule-card');
    const defaultMsg = document.getElementById('default-msg');
    
    // 获取周一的通用安排列表内容
    const monScheduleList = document.getElementById('mon-schedule').querySelector('ul').innerHTML;


    // 1. 页面加载时，确保所有时间表内容都是隐藏的（尽管CSS也做了，JS再确认一遍）
    schedules.forEach(card => card.classList.add('hidden'));
    defaultMsg.classList.remove('hidden');


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            
            // 2. 隐藏所有时间表和默认信息
            schedules.forEach(card => card.classList.add('hidden'));
            defaultMsg.classList.add('hidden');
            
            // 3. 移除所有按钮的激活状态
            buttons.forEach(btn => btn.classList.remove('active'));

            let targetScheduleId = `${day}-schedule`;
            const targetSchedule = document.getElementById(targetScheduleId);
            
            // 4. 处理周二和周五的通用内容
            if (day === 'tue' || day === 'fri') {
                // 如果是周二或周五，我们复制周一的列表内容，并显示该卡片
                if (!targetSchedule.querySelector('ul')) {
                    targetSchedule.insertAdjacentHTML('beforeend', '<ul></ul>');
                }
                targetSchedule.querySelector('ul').innerHTML = monScheduleList;
                targetSchedule.querySelector('.same-as')?.classList.add('hidden'); // 隐藏 "same as" 提示
            }

            // 5. 显示目标时间表
            if (targetSchedule) {
                targetSchedule.classList.remove('hidden');
            }
            
            // 6. 设置当前点击按钮为激活状态
            button.classList.add('active');
        });
    });
});
