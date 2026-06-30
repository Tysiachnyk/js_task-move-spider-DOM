'use strict';
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
document.addEventListener('click', (e)=>{
    if (!wall.contains(e.target)) return;
    const wallRect = wall.getBoundingClientRect();
    const leftPosition = e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
    const topPosition = e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;
    const maxLeft = wall.clientWidth - spider.offsetWidth;
    const maxTop = wall.clientHeight - spider.offsetHeight;
    spider.style.left = `${Math.min(Math.max(leftPosition, 0), maxLeft)}px`;
    spider.style.top = `${Math.min(Math.max(topPosition, 0), maxTop)}px`;
});

//# sourceMappingURL=js_task-move-spider-DOM.f75de5e1.js.map
