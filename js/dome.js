
    window.onload = function (){
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
    // let l_jian = document.querySelector(".juhui_zuojian");
    // console.log(l_jian);
    // let r_jian = document.querySelector(".juhui_youjian");
    // console.log(r_jian);



    }
