//Player DOM
const doge = document.querySelector('.doge')
const doge2 = document.querySelector('.doge2')
const dc = document.querySelector('.dc')
//Version DOM
const ver = document.querySelector('.vers')

//MVVs
var doco = 0;

//Version Start
var version = 'vb0.31'
var page = window

page.onload = function(){
    ver.innerHTML = `Version: ${version}`
}
//Version End

//EL Start

doge.addEventListener('click', function(){
    doco += 1;
    dc.innerHTML = `DogeCoin: ${doco}`
    anim()
});

//EL End

//Functtions Start

function anim(){
    doge.style.content = "url(./assets/DOGE2.png)"
    setTimeout(function () {
        doge.style.content = "url(./assets/DOGE.png)"
    }, 200)
}

//Functions End

/* 
Snipets


*/