//轮播图
carousel_map();
function carousel_map() {
    //获取节点
    let swipe_span = document.querySelector('.swipe-span'); //轮播图五个点包含块
    let all_span = document.querySelectorAll('#span'); //轮播图所有的点
    swipe_span.style.marginLeft = (590 - (all_span.length * 16)) / 2 + 'px'; //包含块提升
    let prev = document.getElementById('swipe-prev'); //轮播图上一个
    let next = document.getElementById('swipe-next'); //轮播图下一个
    let swipe_item = document.querySelectorAll('.swipe-item'); //所有的轮播图片
    let index = 0; //定义一个索引给定时器用
    let contrast_index = 0;// 创建a为了和index进行对比，触发for循环
    let tiemr; //定时器标识
    let autoplay = () => {
        index++; //索引++
        index > (swipe_item.length - 1) ? index = 0 : null;
        for (var i = 0; i < swipe_item.length; i++) {
            swipe_item[i].style.opacity = '0';
            all_span[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            if (index === i) {
                swipe_item[i].style.opacity = '1';
                swipe_item[i].style.zIndex = '1';
                all_span[i].style.backgroundColor = 'rgba(255, 255, 255, 1)';
            }
        }
    }

    auto(); //开启定时器
    function auto() {
        tiemr = setInterval(autoplay, 1700);
    }

    //上一张
    prev.onclick = () => {
        clearInterval(tiemr); //关闭定时器
        contrast_index = index + 1;
        if (index != contrast_index) {
            // 先为所有的图片设置透明度为0
            for (var i = 0; i < swipe_item.length; i++) {
                swipe_item[i].style.opacity = '0';
                all_span[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }
        }
        // 按下按钮 显示当前index - 1 索引的图片
        index = index - 1;
        //切换到左边尽头跳到最后一张
        index < 0 ? index = (swipe_item.length - 1) : null;
        swipe_item[index].style.opacity = '1';
        swipe_item[index].style.zIndex = '1';
        all_span[index].style.backgroundColor = 'rgba(255, 255, 255, 1)';
        auto();
    }

    //下一张
    next.onclick = () => {
        clearInterval(tiemr);
        contrast_index = index - 1;
        if (index != contrast_index) {
            for (var i = 0; i < swipe_item.length; i++) {
                swipe_item[i].style.opacity = '0';
                all_span[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }
        }
        index = index + 1;
        index > (swipe_item.length - 1) ? index = 0 : null;
        swipe_item[index].style.opacity = '1';
        swipe_item[index].style.zIndex = '1';
        all_span[index].style.backgroundColor = 'rgba(255, 255, 255, 1)';
        auto();
    }

    for (var i = 0; i < all_span.length; i++) {
        all_span[i].onclick = () => {
            var spanIndex = this.dataset.index;
            clearInterval(tiemr);
            index = spanIndex;
            for (var j = 0; j < all_span.length; j++) {
                swipe_item[j].style.opacity = '0';
                all_span[j].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }
            swipe_item[index].style.opacity = '1';
            all_span[index].style.backgroundColor = 'rgba(255, 255, 255, 1)';
            auto();
        }
    }
}

//副轮播图
vice_auto();
function vice_auto() {
    let tpimg_prev = document.getElementById('tpimg-prev'); //副轮播图上一张按钮
    let tpimg_next = document.getElementById('tpimg-next');
    let tp1 = document.querySelector('.tp1');
    let tp2 = document.querySelector('.tp2');
    let tp3 = document.querySelector('.tp3');
    let tp_arr = [tp1, tp2, tp3]; //3层div
    let vice_index = 0;

    tpimg_prev.onclick = () => {
        vice_index--;
        vice_index < 0 ? vice_index = (tp_arr.length - 1) : null;
        for (var i = 0; i < tp_arr.length; i++) {
            tp_arr[i].style.opacity = 0;
        }
        tp_arr[vice_index].style.opacity = 1;
    }
    tpimg_next.onclick = () => {
        vice_index++;
        vice_index == tp_arr.length ? vice_index = 0 : null;
        for (var i = 0; i < tp_arr.length; i++) {
            tp_arr[i].style.opacity = 0;
        }
        tp_arr[vice_index].style.opacity = 1;
    }
}

//秒杀倒计时
count_down();
function count_down() {
    // https://tool.chinaz.com/Tools/unixtime.aspx
    let end_time = 1617552000000; //获取明天24:00时间戳
    let now_time = new Date().getTime(); //获取当前时间
    let timer; //定时器

    function cunt() {
        clearInterval(timer);
        var difference = end_time - now_time; //时间差
        var time = parseInt(difference / (1000 * 60 * 60)); //获取小时
        difference = difference - (time * 1000 * 60 * 60);
        time < 12 ? time = "0" + time : null;

        var branch = parseInt(difference / (1000 * 60)); //获取分钟
        difference = difference - (branch * 1000 * 60);
        branch < 10 ? branch = "0" + branch : null;

        var second = parseInt(difference / (1000)); //获取秒钟
        difference = difference - (second * 1000);
        second < 10 ? second = "0" + second : null;

        //更新时间
        document.getElementById('time').innerHTML = time;
        document.getElementById('branch').innerHTML = branch;
        document.getElementById('second').innerHTML = second;

        timer = setInterval(() => {
            now_time += 1000;
            cunt();
        }, 1000);
        setInterval(() => {
            if (end_time - now_time < 60000) {
                end_time += 86397423
            }
        })
    }
    cunt();
}

//每日特价
special_offer();
function special_offer() {
    let hd_list = document.getElementById('right-hd-list').children; //五个li
    let qs = document.getElementsByClassName('q'); //五个层

    for (var i = 0; i < hd_list.length; i++) {
        hd_list[i].onmouseover = function () {
            for (var j = 0; j < hd_list.length; j++) {
                qs[j].classList.remove('active')
            }
            var index = this.dataset.index
            qs[index].classList.add('active')
        }
    }
}

//发现好货
/* goods();
function goods() {
    let imgList = document.getElementsByClassName('img_list')[0]; //ul列表
    let goodBlock = document.querySelector('.good_bottom .good_block'); //滑块
    const ONEWidth = 1584;
    let starValue = 0;
    let spend = -2;
    setInterval(() => {
        starValue += spend;
        if (starValue <= ONEWidth)
            imgList.style.left = starValue + 'px';
    }, 30);
} */


goods();
function goods() {
    let img_list = document.querySelector('.img_list'); //所有ul大小
    let good_right = document.querySelector('.good_right'); //可视窗口大小
    let imgL = parseInt(window.getComputedStyle(img_list, null).left); //获取left值
    let good_block = document.querySelector('.good_bottom .good_block'); //滑块
    let good_progress = document.querySelector('.good_bottom .good_progress'); //线
    let good_block_width = parseInt(window.getComputedStyle(good_block, null).width); //一个滑块的大小 99

    const ONEWidth = 1584; //一个ul的偏移量
    let bnl, bdx, box, bleft, imgTimer;
    var progressWidth = good_progress.offsetWidth; //good_progress总宽度

    function imgPlay() {
        imgTimer = setInterval(function () {
            imgL += -2;
            if (imgL <= -ONEWidth) {
                imgL = -20;
            }
            img_list.style.left = imgL + 'px';
            good_block.style.left = (-1 * imgL) / (ONEWidth / (progressWidth - good_block_width)) + 'px';
        }, 30)
    }
    imgPlay();

    good_right.onmouseover = function () {
        clearInterval(imgTimer);
        good_right.onmouseout = function () {
            imgPlay();
        }
    }

    good_block.onmousedown = function (ev) {
        ev = ev || window.event;
        if (good_block.setCapture) {
            good_block.setCapture();
        }

        bdx = ev.clientX; //good_block的X轴
        bnl = good_block.offsetLeft; //good_block的left值

        document.onmousemove = function (ev) {
            ev = ev || window.event;

            clearInterval(imgTimer);
            box = ev.clientX; //移动的x轴位置
            bleft = bnl + (box - bdx);

            if (bleft < 0) {
                bleft = 0;
            } else if (bleft > progressWidth - good_block.offsetWidth) {
                bleft = progressWidth - good_block.offsetWidth;
            }

            good_block.style.left = bleft + 'px';
            percentage = (good_block.offsetLeft - 15) / (progressWidth - good_block_width) //百分比
            imgL = img_list.style.left = (-ONEWidth * percentage) + 'px';

            document.onmouseup = function () {
                //有问题
                document.onmousemove = document.onmouseup = null;
                if (document.releaseCapture) {
                    document.releaseCapture()
                }
                goods();
            }
        }
        return false;
    }
}