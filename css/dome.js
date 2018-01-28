
    window.onload = function (){
        let ban = document.querySelector(".banner");
        let banimg = document.querySelectorAll(".banner_center li");
        let btn = document.querySelectorAll("ul.banner_center ul.banner_dian .button");
        let left = document.querySelector('.banner_center .zuojian');
        let right = document.querySelector('.banner_center .youjian');
        let t = 0;
        function name() {
            if (t == banimg.length) {
                t = 0;
            }
            banimg.forEach(function (value) {
                value.className =' ';
            })
            banimg[t].className ="active"
            t++;
            console.log(banimg);
        }
        let time = setInterval(name, 2000);
        ban.onmouseover = function () {
            clearInterval(time);
        }
        ban.onmouseout = function () {
            time = setInterval(name, 2000);
        }
        right.onclick = function () {
            t++;
            if (t == banimg.length) {
                t = 0;
            }
            banimg.forEach(function (value) {
                value.className =" ";
            })
            banimg[t].className ='active';
        }
        left.onclick = function () {
            t--;
            if (t < 0) {
                t = banimg.length - 1;
            }
            banimg.forEach(function (value) {
                value.className = " ";
            })
            banimg[t].className = "active";
        }

    }

