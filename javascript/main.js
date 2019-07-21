let chronometer    /* = new Chronometer()*/;
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
    if (minutes>0){
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
    

}

function setSplitBtn() {
    

}

function setStartBtn() {
    

}

function setResetBtn() {
   

}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
    if( btnLeft.classList.contains('start')){
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');
        btnLeft.innerHTML = 'STOP';
        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.innerHTML = 'SPLIT';
        

    } else{
        btnLeft.classList.remove('stop');
        btnLeft.classList.add('start')
        btnLeft.innerHTML = 'START';
        btnRight.classList.remove('split');
        btnRight.classList.add('reset');
        btnRight.innerHTML = 'RESET';
        
        
    }
   
});


 // Reset/Split Button

 btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains('split')){
        let split = document.getElementById('splits');
        split.appendChild(document.createElement('li'));
        
        
    } else {
        let borrar = document.getElementById('splits');
      // borrar.removeChild(borrar.lastChild);
        borrar.innerHTML = "";
          
    }
    
}); 

