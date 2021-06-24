//获取所有的item
var items = document.getElementsByClassName('item')
// 获取上一个按钮
var prev = document.getElementById('prev')
// 获取下一个按钮
var next = document.getElementById('next')
//获取wrap
var wrap = document.getElementsByClassName('wrap')[0];
//
var slideriBtn = document.getElementsByClassName('slideri-btn');
//定义一个清楚active函数
function clearActive() {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
}
function clearSlideri() {
    for (var i = 0; i < slideriBtn.length; i++) {
        slideriBtn[i].className = 'slideri-btn';
    }
}
//定义一个index最大值函数
function maxIndex() {
    index > items.length - 1 ? index = 0 : null;
}
var index = 0;
//下一张图片
next.onclick = function () {
    clearInterval(nana)
    index++;
    maxIndex()
    clearActive()
    items[index].className = 'item active';
    clearSlideri()
    slideriBtn[index].className = 'slideri-btn active';
    jiajia()
}
//上一张图片
prev.onclick = function () {
    //先关闭定时器
    clearInterval(nana)
    index--;
    index < 0 ? index = 4 : null;
    clearActive()
    items[index].className = 'item active';
    clearSlideri()
    slideriBtn[index].className = 'slideri-btn active';
    //开启定时器
    jiajia()
}
//全局变量
var nana;
var jiajia = function () {
    nana = setInterval(function () {
        index++;
        maxIndex()
        //图片
        clearActive()
        items[index].className = 'item active';
        //
        clearSlideri()
        slideriBtn[index].className = 'slideri-btn active';
    }, 2500)
}
//执行定时器
jiajia();

//触摸暂定轮播
/* wrap.onmouseover = function () {
    clearInterval(nana)
}
wrap.onmouseout = function () {
    jiajia()
} */

for (var i = 0; i < slideriBtn.length; i++) {
    slideriBtn[i].num = i;
    slideriBtn[i].onclick = function () {
        clearInterval(nana)
        //图片
        clearActive();
        items[this.num].className = 'item active';
        //
        clearSlideri();
        slideriBtn[this.num].className = 'slideri-btn active';
        jiajia();
        index = this.num;
    }
}