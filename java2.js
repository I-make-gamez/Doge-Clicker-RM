
//Version DOM
const ver = document.querySelector('.vers')
const wbg = document.querySelector('.wbg')
//MVVs
var page = window
var ask = page.prompt

//Version Start
var version = 'vb0.50'
var page = window

page.onload = function(){
    ver.innerHTML = `Version: ${version}`
    let doco = Math.floor(localStorage.getItem('tdc'))
    dc.innerHTML = `DogeCoin: ${doco}`

}

let codes = [
    1807, 
];

//Version End

document.onkeydown = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        var coAns = ask('Enter Admin Code\nThen Command ID\nThen Value(if any)')
        var coAns2 = coAns.split(" ")
        if (coAns2[0] == codes[0]) {
            switch (coAns2[1]) {
                default: break;
                case '1':
                    wbg.
                    break;
            }
        }
    }
};