const contaier = document.querySelector('.container');
const lts = document.querySelectorAll('.controls li');
const viewHeight = document.body.clientHeight;
let index = 0;
let lastTime = null;
for (let i = 0; i < lts.length; i++) {
    lts[i].addEventListener('click', () => {
        index = i;
        lts.forEach((item) => {
            item.classList = '';
        });
        lts[i].classList = 'active';
        contaier.style.top = `${-i * viewHeight}px`;
    })

}
// 绑定鼠标滚轮事件(节流防抖)
document.addEventListener('mousewheel', (e) => {
    if (!lastTime) {
        ensureIndex(e);
    } else {
        let now = new Date().getTime();
        if (now - lastTime > 800) {
            ensureIndex(e);
            lastTime = new Date().getTime();
        }
    }
})
//  滑动切换样式函数
function silde(index) {
    lastTime = new Date().getTime();
    contaier.style.top = `${-index * viewHeight}px`;
    lts.forEach((item) => {
        item.classList = '';
    });
    lts[index].classList = 'active';
}
// 确定滑动索引函数
function ensureIndex(e) {
    switch (e.wheelDelta > 0) {
        // 向上滑动
        case true:
            index--;
            if (index < 0) {
                index = 0;
            }
            silde(index);
            break;
        // 向下滑动
        case false:
            index++;
            if (index > lts.length - 1) {
                index = lts.length - 1;
            }
            silde(index);
            break;
    }
}