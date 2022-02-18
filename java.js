//Player DOM
const doge = document.querySelector('.doge')
const doge2 = document.querySelector('.doge2')
const dc = document.querySelector('.dc')
//Upgrade DOM
const u1 = document.querySelector('.u1')
const dfCost = document.querySelector('.dfCost')
const clicpo = document.querySelector('.cpwr')
//Version DOM
const ver = document.querySelector('.vers')

//MVVs
var doco = 0;
var clipo = 1;
var dfPrice = 100;

//Version Start
var version = 'vb0.40'
var page = window

page.onload = function(){
    ver.innerHTML = `Version: ${version}`
}
//Version End

//EL Start

doge.addEventListener('click', function(){
    doco += clipo;
    dc.innerHTML = `DogeCoin: ${doco}`
    anim()
});

u1.addEventListener('click', function(){
    if(doco >= dfPrice){
        clipo += 1;
        clicpo.innerHTML = `ClickPower: ${clipo}`
        doco -= dfPrice;
        dfPrice *= 2
        dfCost.innerHTML = `Cost: ${dfPrice}DC`;
        dc.innerHTML = `DogeCoin: ${doco}`
        
        
    }
})

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