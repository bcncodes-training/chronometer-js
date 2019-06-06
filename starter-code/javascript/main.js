let chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');


function printTime(minutes,seconds) {
    if(minutes>0){
        this.printMinutes(minutes);
    }
    this.printSeconds(seconds);
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
}

function setSplitBtn() {
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
}

function setStartBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';

}

function setResetBtn() {
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';

}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {

    if(btnLeft.className.indexOf('start')>0){
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    } else {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }

/*    e.currentTarget.classList.toggle('start');
   e.currentTarget.classList.toggle('stop');
   e.currentTarget.innerHTML ==='START'?
   e.currentTarget.innerHTML = 'STOP':
   e.currentTarget.innerHTML = 'START';
   e.currentTarget.nextElementSibling.classList.toggle('reset');
   e.currentTarget.nextElementSibling.classList.toggle('split');
   e.currentTarget.nextElementSibling.innerHTML ==='RESET'?
   e.currentTarget.nextElementSibling.innerHTML = 'SPLIT':
   e.currentTarget.nextElementSibling.innerHTML = 'RESET'; */
   
});

// Reset/Split Button
btnRight.addEventListener('click', function () {


   
});

