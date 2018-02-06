
    window.onload = function (){
// 导航
        let wangzhan = document.querySelector(".wangzhan");
        let no = document.querySelector(".no");
        let shangjia =document.querySelector(".shangjia");
        let shan = document.querySelector(".shan");
        let kefu = document.querySelector(".kefu");
        let ke = document.querySelector(".ke");
        // let dizhi = document.querySelector(".dizhi");
        // let dizhi_box = document.querySelector(".dizhi_box");
        // let iconfont = document.querySelector(".icon5");
        // console.log(iconfont)
        let dingdang = document.querySelector(".dingdang")
        let ding_dang = document.querySelector(".ding_dang");
        let yigou = document.querySelector(".yigou");
        let yigou_box = document.querySelector(".yigou_box");
        let gouwu = document.querySelector(".gouwu")
        let gouwu_boxx = document.querySelector(".gouwu_boxx");
        let phone =document.querySelector(".phone");
        let phone_box = document.querySelector(".phone_box");
        wangzhan.onmousemove = function () {
            animate(no,{height:240,overflow:"none",border:"1px solid #ccc",borderTop:"none"},200)
        }
        wangzhan.onmouseout = function () {
            animate(no,{height:0,overflow:"hidden",border:"none"},200)
        }
        shangjia.onmousemove = function () {
            animate(shan,{height:122,overflow:"none",border:"1px solid #ccc",borderTop:"none"},200)
        }
        shangjia.onmouseout = function () {
            animate(shan,{height:0,overflow:"hidden",border:"none"},200)
        }
        kefu.onmousemove = function () {
            animate(ke,{height:122,overflow:"none",border:"1px solid #ccc",borderTop:"none"},200)
        }
        kefu.onmouseout = function () {
            animate(ke,{height:0,overflow:"hidden",border:"none"},200)
        }
        // dizhi.onclick = function () {
        //     dizhi.style.background ="#fff";
        //     animate(dizhi_box,{height:133,overflow:"none",border:"none"},200)
        // }
        // iconfont.onclick = function () {
        //     animate(dizhi_box,{height:0,overflow:"hidden",border:"none"},200)
        // }
        dingdang.onmousemove = function () {
            animate(ding_dang,{height:120,overflow:"none",border:"1px solid #ccc",borderTop:"none"},200)
        }
        dingdang.onmouseout = function () {
            animate(ding_dang,{height:0,overflow:"hidden",border:"none"},200)
        }
        yigou.onmousemove = function () {
            animate(yigou_box,{height:156,overflow:"none",border:"1px solid #ccc",borderTop:"none"},200)
        }
        yigou.onmouseout = function () {
            animate(yigou_box,{height:0,overflow:"hidden",border:"none"},200)
        }
        gouwu.onmousemove = function () {
            animate(gouwu_boxx,{height:400,overflow:"none",border:"1px solid #ccc",borderTop:"none"},200)
        }
        gouwu.onmouseout = function () {
            animate(gouwu_boxx,{height:0,overflow:"hidden",border:"none"},200)
        }
        phone.onmousemove = function () {
            animate(phone_box,{height:220,overflow:"none",border:"1px solid #ccc",borderTop:"none"},200)
        }
        phone.onmouseout = function () {
            animate(phone_box,{height:0,overflow:"hidden",border:"none"},200)
        }

// banner
        let ban = document.querySelector(".banner");
        let banimg = document.querySelectorAll(".banner_center li");
        let btn = document.querySelectorAll(".banner_dian span.button");
        // console.log(btn);
        let left = document.querySelector('.banner_center .zuojian');
        let right = document.querySelector('.banner_center .youjian');
        let t = 0;
        function name() {
            t++;
            if (t == banimg.length) {
                t = 0;
            }
            for (let i = 0;i<banimg.length;i++){
                banimg[i].classList.remove("active");
                btn[i].classList.remove("active");
            }
            banimg[t].classList.add("active");
            btn[t].classList.add("active");
        }
        let time = setInterval(name,3000);
        let flag = true;
        ban.onmouseover = function () {
            clearInterval(time);
        }
        ban.onmouseout = function () {
            time = setInterval(name, 3000);
        }
        right.onclick = function () {
            if(!flag){
                return;
            }
            flag = false;
            name()
        }
        left.onclick = function () {
            if(!flag){
                return;
            }
            flag = false;
            t--;
            if (t < 0) {
                t = banimg.length - 1;
            }
            banimg.forEach(function (value) {
                value.className = " ";
            })
            banimg[t].className = "active";
        }
        btn.forEach(function (vv,ii) {
            vv.onclick = function () {
                if(!flag){
                    return;
                }
                flag = false;
                btn.forEach(function (va,id) {
                    va.classList.remove("active");
                    banimg[id].classList.remove("active");
                })
                btn[ii].classList.add("active");
                banimg[ii].classList.add("active");
                t = ii;
            }
        })
        banimg.forEach(function (valu) {
            valu.addEventListener("transitionend",function () {
                flag = true;
            })
        })
    // banner侧导航
        let cenav = document.querySelectorAll(".banner_left .br_word");
        // console.log(cenav);
        let non = document.querySelectorAll(".none_nn")
        cenav.forEach(function (dom,xia) {
            dom.onmousemove = function () {
                cenav.forEach(function (vv,ii) {
                    vv.classList.remove("active");
                    non[ii].classList.remove("active");
                })
                cenav[xia].classList.add("active");
                non[xia].classList.add("active");
                non[xia].classList.add("ji");
            }
            dom.onmouseout = function () {
                cenav.forEach(function (vv,ii) {
                    vv.classList.remove("active");
                    non[ii].classList.remove("active");
                })
                cenav[xia].classList.remove("active");
                non[xia].classList.remove("active");
            }
        })

// 今日聚惠
    let ju = document.querySelectorAll(".juhui_top .jin_bb .jj");
    console.log(ju);
    let today = document.querySelectorAll(".juhui_bottom ul.bottom_five");
    console.log(today);
    ju.forEach(function (vvv,xas) {
        vvv.onmousemove = function () {
            ju.forEach(function (vaa,inn) {
                vaa.classList.remove("active");
                today[inn].classList.remove("active");
            })
            ju[xas].classList.add("active");
            today[xas].classList.add("active");
        }
    })
//     排行榜
        let haohuo_box = document.querySelector(".haohuo_box1")
        let paihan = document.querySelectorAll(".paihan_bottom");
        console.log(paihan);
        let paibutton = document.querySelectorAll(".bottom_button .buttonbb");
        console.log(paibutton);
        let now = 0;
        let next = 0;
        let width = parseInt(getComputedStyle(haohuo_box,null).width);
        function pai() {
            next = now+1;
            if(next>=paihan.length){
                next =0;
            }
            paihan[next].style.left = "100%";
            animate(paihan[now],{left:-width},200);
            animate(paihan[next],{left:0},200);
            paibutton[now].classList.remove("active");
            paibutton[next].classList.add("active");
            now = next;
        }
        let shi = setInterval(pai,2000);
        let rig = document.querySelector(".paihan_right");
        let lef = document.querySelector(".paihan_left");
        haohuo_box.onmouseenter= function () {
            clearInterval(shi);
        }
        haohuo_box.onmouseleave= function () {
            clearInterval(shi);
        }
        rig.onclick =function () {
            pai();
        }
        lef.onclick = function () {
            next = now -1;
            if(next <0){
                next = paihan.length-1;
            }
            paihan[next].style.left = "-100%";
            animate(paihan[now],{left:width},200);
            animate(paihan[next],{left:0},200);
            paibutton[now].classList.remove("active");
            paibutton[next].classList.add("active");
            now = next;
        }
        paibutton.forEach(function (pa,biao) {
            pa.onclick =function () {
                paibutton.forEach(function (pai,bi) {
                    pai.classList.remove("active");
                    animate(paihan[now], {left: width},200);
                })
                paibutton[biao].classList.add("active");
                animate(paihan[next],{left:0},200);
            }
        })
        // 楼层跳转
        // 返回顶部
        let back = document.querySelector(".tten");
        back.onclick =function () {
            animate(document.body,{scrollTop:0},500);
            animate(document.documentElement,{scrollTop:0},500);
        }
        let lian =document.querySelector(".lianjie");
        lian.style.display="none";
        console.log(lian);
        let flag1 = true;
        let flag2 =true;
        // 获取页面的高度
        let height = document.documentElement.clientHeight;
        window.onscroll = function (){
            // 获取要跳转的每个楼层
            let floor = document.querySelectorAll(".floor");
            // 获取楼层按钮
            let lianjie = document.querySelectorAll(".lianjie ul li.he");
            // 获取hidden出现的高度   banner下
            let banhe = document.querySelector(".juhui");
            // 获取hidden
            let hidden = document.querySelector(".hidden");
            // 获取链接出现是位置
            let su = document.querySelector(".suning");
            let tops = document.body.scrollTop? document.body.scrollTop:document.documentElement.scrollTop;
            // hidden出现的位置
            if(tops > banhe.offsetTop){
                if(flag1){
                    flag1 = false;
                    animate(hidden,{top:0},500,function () {
                        flag2 = false;
                    })
                }
            }else{
                if(!flag2){
                    flag2 = false;
                    animate(hidden,{top:-50},500,function () {
                        flag1 = true;
                    })
                }
            }
            // 链接出现的位置
            if(tops >su.offsetTop+260){
                lian.style.display="block";
            }else if(tops <su.offsetTop){
                lian.style.display="none";
            }
            floor.forEach(function (fv,fi) {
                // 滚动条的高度>=楼层距离窗口高度;
                if(tops>=fv.offsetTop-height+120){
                    lianjie.forEach(function (lv,li) {
                        lv.classList.remove("active");
                    })
                    lianjie[fi].classList.add("active");
                }else if(tops<height-120){
                    lianjie.forEach(function (ll,li) {
                        ll.classList.remove("active");
                    })
                }
            })
            // 要出现的楼层跳转，遍历lianjie
            lianjie.forEach(function (liv,lii) {
                liv.onclick = function () {
                    // 保存一下值连接
                    let bao = floor[lii].offsetTop;
                    animate(document.body,{scrollTop:bao-70},100);
                    animate(document.documentElement,{scrollTop:bao-70},100);
                }
            })
        }
// 视频
//         let wid = document.querySelector(".boot").offsetWidth;
//         console.log(wid);
//         let shipin =document.querySelector(".shiping_bottom");
//         let shipin_box = document.querySelectorAll(".boot");
//         function video() {
//             animate(shipin,{left:-wid},500,function (){
//                 let one = shipin.firstElementChild;
//                 shipin.appendChild(one);
//                 shipin.style.left=0;
//             })
//         }
//         let ti = setInterval(video,1000);
//         shipin.onmouseenter= function () {
//             clearInterval(ti);
//         }
//         shipin.onmouseleave = function () {
//             ti = setInterval(video,1000)
//         }

    }
