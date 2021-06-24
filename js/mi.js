//头部商品
head_goods();
function head_goods() {
    let show = document.getElementsByClassName('show'); //商品列表
    let goodsimg = document.getElementsByClassName('goods-img'); //img
    let pn = document.getElementsByClassName('pn'); //商品名称
    let sp = document.getElementsByClassName('sp'); //价格

    // 图片
    const xmArr = ['../images/xm/1.webp', '../images/xm/2.webp', '../images/xm/3.webp', '../images/xm/4.webp', '../images/xm/5.webp', '../images/xm/6.webp'];
    const hmArr = ['../images/xm/7.webp', '../images/xm/8.webp', '../images/xm/9.webp', '../images/xm/10.webp', '../images/xm/11.webp', '../images/xm/12.webp'];
    const tvArr = ['../images/xm/tv1.webp', '../images/xm/tv2.webp', '../images/xm/tv3.webp', '../images/xm/tv4.webp', '../images/xm/tv5.webp', '../images/xm/tv6.webp'];
    const nbArr = ['../images/xm/nb1.webp', '../images/xm/nb2.webp', '../images/xm/nb3.webp', '../images/xm/nb4.png', '../images/xm/nb5.webp', '../images/xm/nb6.webp',];
    const jdArr = ['../images/xm/jd1.webp', '../images/xm/jd2.png', '../images/xm/jd3.jpg', '../images/xm/jd4.png', '../images/xm/jd5.webp', '../images/xm/jd6.webp',];
    // 名称
    const xmName = ['小米10S', '小米11', '小米10至尊纪念版', '小米10', '小米10 青春版 5G', '小米MIX Alpha'];
    const hmName = ['K40 Pro 系列', 'Redmi K40', 'Redmi Note 9 系列', 'Redmi K30S 至尊纪念版', 'Redmi K30 至尊纪念版', 'Redmi 9A'];
    const tvName = ['Redmi MAX 86"超大屏电视', '小米电视大师82英寸至尊纪念版', '小米电视大师82英寸', '小米透明电视', '小米电视大师65英寸OLED', 'Redmi智能电视MAX 98'];
    const nbName = ['RedmiBook Pro 14', 'RedmiBook Pro 15', 'Redmi G游戏本', 'RedmiBook 16', 'RedmiBook Air 13', '显示器'];
    const jdName = ['米家风冷对开门冰箱483L', '米家扫拖机器人1T', '米家互联网洗烘一体机10kg', '小米净水器S1 800G', '米家空气净化器3 高效除菌', '米家两门冰箱 160L'];
    // 价格
    const xmPrice = ['3299元起', '3999元起', '5299元起', '3399元起', '1899元起', '19999元起'];
    const hmPrice = ['2799元起', '1999元起', '999元起', '2599元起', '1999元起', '499元起'];
    const tvPrice = ['7999元起', '49999元起', '9999元起', '49999元起', '9999元起', '19999元起'];
    const nbPrice = ['4699元起', '4999元起', '5499元起', '3299元起', '4799元起', '2399元'];
    const jdPrice = ['2399元', '2299元', '1999元', '2498元', '799元', '949元'];

    move(0, xmArr, xmName, xmPrice);
    move(1, hmArr, hmName, hmPrice);
    move(2, tvArr, tvName, tvPrice);
    move(3, nbArr, nbName, nbPrice);
    move(4, jdArr, jdName, jdPrice);


    function move(index, tp, name, price,) {
        show[index].onmouseover = function () {
            for (var i = 0; i < tp.length; i++) {
                goodsimg[i].src = tp[i];
                pn[i].innerHTML = name[i];
                sp[i].innerHTML = price[i];
            }
        }
    }
}

//轮播图
move();
function move() {
    let prev = document.getElementById('prev'); //上一张
    let next = document.getElementById('next'); //下一张
    let lisNode = document.querySelectorAll('.img-list li'); //所有的li图片
    let swiperNodes = document.querySelectorAll('.banner-list li '); //小圆点
    let index = 0, timer;

    move2();
    function move2() {
        timer = setInterval(() => {
            index++;
            index > lisNode.length - 1 ? index = 0 : null;
            forSwiper(index);
        }, 2000)

    }
    prev.addEventListener('click', () => {
        clearInterval(timer);
        index--;
        index < 0 ? index = lisNode.length - 1 : index;
        forSwiper(index);
        move2();
    })
    next.addEventListener('click', () => {
        clearInterval(timer);
        index++;
        index > lisNode.length - 1 ? index = 0 : null;
        forSwiper(index);
        move2();
    })

    for (var i = 0; i < swiperNodes.length; i++) {
        swiperNodes[i].index = i;
        swiperNodes[i].onclick = function () {
            clearInterval(timer);
            forSwiper(this.index);
            index = this.index;
            move2();
        }
    }

    //点更新
    function forSwiper(index) {
        for (var i = 0; i < lisNode.length; i++) {
            lisNode[i].classList.remove('active');
            swiperNodes[i].classList.remove('active');
        }
        lisNode[index].classList.add('active');
        swiperNodes[index].classList.add('active');
    }
}

//小米秒杀
seckill();
function seckill() {
    var right_list = document.querySelector('.kill_row .right_list'); //ul列表
    var div_list = document.querySelector('.kill_row .div_list'); //可视窗口
    var control_left = document.getElementsByClassName('control_left')[0]; //左边
    var control_right = document.getElementsByClassName('control_right')[0]; //右边
    var liWidth = div_list.offsetWidth; //可视区域宽度
    var liIndex = 0, liTimer;

    killMove();
    control_left.style.cursor = 'default'; //默认左边按钮状态
    function killMove() {
        liTimer = setInterval(() => {
            liIndex++;
            killIF(); //判断按钮状态
            right_list.style.left = -liIndex * liWidth + 'px';
            liIndex == 2 ? liIndex = -1 : null;
        }, 3000)
    }

    control_left.addEventListener('click', function () {
        if (liIndex != 0) {
            clearInterval(liTimer);
            liIndex == -1 ? liIndex = 2 : liIndex--;
            killIF();
            right_list.style.left = -liIndex * liWidth + 'px';
            killMove();
        }
    })
    control_right.addEventListener('click', function () {
        if (liIndex != -1) {
            clearInterval(liTimer);
            liIndex++;
            console.log(liIndex);
            right_list.style.left = -liIndex * liWidth + 'px';
            killIF(); //这个需要写到这里,不能写到下面,不然LiIndex就更新了
            if (liIndex == 2) {
                liIndex = -1;
            }
            killMove();
        }
    })

    //判断按钮的状态
    function killIF() {
        if (liIndex != 0) {
            control_left.style.cursor = 'pointer';
            control_left.classList.remove('hover');
        } else {
            control_left.style.cursor = 'default';
            control_left.classList.add('hover');
            control_right.style.cursor = 'pointer';
            control_right.classList.remove('hover');
        }
        if (liIndex == 2) {
            control_right.style.cursor = 'default';
            control_right.classList.add('hover');
        }
    }
}

