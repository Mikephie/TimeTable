document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.day-button');
    const schedules = document.querySelectorAll('.schedule-card');
    const defaultMsg = document.getElementById('default-msg');
    
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
                
                // 确保移除旧的 position/visibility 样式 (来自 CSS 修正)
                card.style.position = 'absolute'; 
                card.style.visibility = 'hidden'; 
            });
            defaultMsg.classList.add('hidden');
            
            // 3. 移除所有按钮的激活状态
            buttons.forEach(btn => btn.classList.remove('active'));

            let targetScheduleId = `${day}-schedule`;
            const targetSchedule = document.getElementById(targetScheduleId);
            
            // 4. 显示目标时间表并添加动画类
            if (targetSchedule) {
                // 立即移除 position 和 visibility 样式，让 CSS 接管
                targetSchedule.classList.remove('hidden');
                targetSchedule.style.position = 'relative';
                targetSchedule.style.visibility = 'visible';
                
                // 强制浏览器重新计算布局，确保动画生效
                void targetSchedule.offsetWidth; 
                targetSchedule.classList.add('active-animation');
            }
            
            // 5. 设置当前点击按钮为激活状态
            button.classList.add('active');
        });
    });
});
