
    window.onload = function (){
// 侧导航
        let fiexd = document.querySelectorAll(".fixed ul li.si");
        console.log(fiexd);
        let block = document.querySelectorAll(".si .block");
        console.log(block);
        fiexd.forEach(function (val,ccc) {
            val.onmouseenter = function () {
                fiexd.forEach(function (vv,iii) {
                    val.classList.add("active");
                    animate(block[ccc],{left:-47},500);
                })
            }
            val.onmouseleave = function () {
                val.classList.remove("active");
                fiexd.forEach(function (vv,iii) {
                    animate(block[ccc],{left:0},500);
                })
            }
        })
        let three = document.querySelectorAll(".fixed ul li.san");
        let bl = document.querySelectorAll(".block1");
        three.forEach(function (vall,indd) {
            vall.onmouseenter = function () {
                three.forEach(function (zh,xii) {
                    vall.classList.add("active")
                    animate(bl[indd],{left:-75},500);

                })
            }
            vall.onmouseleave = function () {
                vall.classList.remove("active")
                three.forEach(function (zh,xii) {
                    animate(bl[indd],{left:0},500);

                })
            }
        })
// 导航开始
        let shan = document.querySelectorAll(".hd_left .shan");
        let hid1 = document.querySelectorAll(".hidden1");
        shan.forEach(function (dom,xi) {
            dom.onmouseenter = function () {
                shan.forEach(function (zhi,biao) {
                    if(hid1.length.height ==140){
                        animate(hid1[xi],{height:140,border:"1px solid #ccc",display:"block"},60);
                    }else if(hid1.length.height =240){
                        animate(hid1[xi],{height:240,border:"1px solid #ccc",display:"block"},60);
                    }

                })
            }
            dom.onmouseleave = function () {
                shan.forEach(function (zhi,biao) {
                    zhi.classList.remove("active");
                    animate(hid1[xi],{height:0,border:"none",display:"none"},60);
                })
            }
        })
//   右边
        let wo = document.querySelectorAll(".my.choice");
        let hidd2 = document.querySelectorAll(".hiddenz");
        wo.forEach(function (value,index) {
            value.onmouseenter = function () {
                wo.forEach(function (vaa,inn) {
                    vaa.classList.remove("active");
                    animate(hidd2[index],{height:220,border:"1px solid #ccc",display:"block"},60);
                })
            }
            // wo.onmouseenter = function () {
            //     animate(hidden[0],{height:120,border:"1px solid #ccc",display:"block"},60);
            // }
            // wo.onmouseenter = function () {
            //     animate(hidden[1],{height:156,border:"1px solid #ccc",display:"block"},60);
            // }
            // wo.onmouseenter = function () {
            //     animate(hidden[2],{height:120,border:"1px solid #ccc",display:"block"},60);
            // }
            // wo.onmouseenter = function () {
            //     animate(hidden[3],{height:220,border:"1px solid #ccc",display:"block"},60);
            // }
            value.onmouseleave = function () {
                wo.forEach(function (vaa,inn) {
                    vaa.classList.remove("active");
                    animate(hidd2[index],{height:0,border:"none",display:"none"},60);
                })
            }
        })
// 导航结束
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
    let today = document.querySelectorAll(".juhui_bottom ul.bottom_five");
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
        let paibutton = document.querySelectorAll(".bottom_button .buttonbb");
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
        // back.onclick =function () {
        //     animate(document.body,{scrollTop:0},500);
        //     animate(document.documentElement,{scrollTop:0},500);
        // }
        let lian =document.querySelector(".lianjie");
        lian.style.display="none";
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
            console.log(hidden)
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
        let video_box=document.querySelector('.video_box ul');
        let vlist=document.querySelectorAll('.video_box ul li');
        let vleft=document.querySelector('.video_box  .left_zou');
        let vright=document.querySelector('.video_box  .right_you');
        let w=video_box.parentNode.offsetWidth;
        let vadios=document.querySelectorAll('.video a');
        function shiping(){
            animate(video_box,{left:-w}, 1000,function(){
                // let i=0;
                for(let i=0;i<3;i++){
                    let first=video_box.firstElementChild;
                    video_box.appendChild(first);
                }
                video_box.style.left=0;

            })
        }
        vright.onclick=function(){
            shiping()

        }
        vlist.forEach(function(value,index){
            value.onmousemove=function(){
                vadios.forEach(function(v,i){
                    v.classList.remove('active');
                })
                vadios[index].classList.add('active');
            }
        })
        vleft.onclick=function(){
            video_box.style.left=-w+'px';
            for(let i=0;i<3;i++){
                let first=video_box.firstElementChild;
                let last=video_box.lastChild;
                video_box.insertBefore(last, first);

            }
            animate(video_box,{left:0}, 1000)
        }
    }