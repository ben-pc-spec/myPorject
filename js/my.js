/* 点击小圆点切换图片 */
function circle(flag) {
    /* console.log(flag); */
    switch (flag) {
        case 1:
            document.getElementById("card").style.backgroundImage = 'url(img/tes.jpg)';
            document.getElementById("card").style.backgroundSize = '820px 440px';
            /* console.log('wo shi 1'); */
            break;
        case 2:
            document.getElementById("card").style.backgroundImage = 'url(img/dwg.jpg)';
            document.getElementById("card").style.backgroundSize = '820px 440px';
            /* console.log('wo shi 2'); */
            break;
        case 3:
            document.getElementById("card").style.backgroundImage = 'url(img/g2.jpg)';
            document.getElementById("card").style.backgroundSize = '820px 440px';
            /* console.log('wo shi 2'); */
            break;
        case 4:
            document.getElementById("card").style.backgroundImage = 'url(img/lgd.jpg)';
            document.getElementById("card").style.backgroundSize = '820px 440px';
            /* console.log('wo shi 2'); */
            break;
    }
}