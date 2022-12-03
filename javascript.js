//js cho slider image

// index = 0;
// changImage = function (){
//     var imgs = ["./assects/Image/elentra.png","./assects/Image/fortuner.png", "./assects/Image/carnival.png"];
//     document.getElementById('img').src = imgs[index];
//     index++;
//     if (index==4){
//         index = 0;
//     }
// }
// setInterval(changImage,1000);

// khi click menu thì hiện ra phần menu

var nav = document.getElementById('nav');
var mobileMenu = document.getElementById('mobile-menu');
var navHeight = nav.clientHeight;

mobileMenu.onclick = function(){
    var isClosed = nav.clientHeight === navHeight;
    if(isClosed){
        nav.style.height = 'auto';
    } else{
        nav.style.height = null;
    }
}