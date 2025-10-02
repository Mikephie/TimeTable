document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.day-button');
    const schedules = document.querySelectorAll('.schedule-card');
    const defaultMsg = document.getElementById('default-msg');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            
            // 1. 隐藏所有时间表和默认信息
            schedules.forEach(card => card.classList.add('hidden'));
            defaultMsg.classList.add('hidden');
            
            // 2. 移除所有按钮的激活状态
            buttons.forEach(btn => btn.classList.remove('active'));

            // 3. 显示对应的时间表
            let targetScheduleId;
            if (day === 'tue' || day === 'fri') {
                // 周二和周五内容与周一通用，但显示各自的卡片
                targetScheduleId = `${day}-schedule`;
                
                // 为了显示通用内容，我们需要手动填充周二/周五的 ul 列表
                const targetCard = document.getElementById(targetScheduleId);
                const monContent = document.getElementById('mon-schedule').querySelector('ul').innerHTML;
                if (!targetCard.querySelector('ul')) {
                    targetCard.insertAdjacentHTML('beforeend', '<ul></ul>');
                }
                targetCard.querySelector('ul').innerHTML = monContent;
                targetCard.querySelector('.same-as').classList.add('hidden'); // 隐藏 "same as" 提示
                
            } else {
                targetScheduleId = `${day}-schedule`;
            }

            const targetSchedule = document.getElementById(targetScheduleId);
            if (targetSchedule) {
                targetSchedule.classList.remove('hidden');
            }
            
            // 4. 设置当前点击按钮为激活状态
            button.classList.add('active');
        });
    });
});
