let ch = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');
let splits      = document.getElementById('splits');

//iniciem proxy per desvincular el chrono del codi de la pagina
const inputHandler={
    set: function(target,prop,newValue){
        if (prop=='intervalId'){
            target[prop]=newValue;
            return true;
        }
        if(prop=='currentTime'){
            target[prop]=newValue;
            printTime();
            return true;
        }
        if(prop=='currentTimeMil'){
            target[prop]=newValue;
            printMilliseconds();
            return true;
        }
        else false;
    }
}
const miProxy=new Proxy(ch,inputHandler);


function chronometer() {

}
function printTime() {
    printMilliseconds();
    printSeconds();
    printMinutes();

}

function printMinutes() {
    minUni.innerText=ch.twoDigitsNumber(ch.setMinutes().toString()).substring(1,2);
    minDec.innerText=ch.twoDigitsNumber(ch.setMinutes().toString()).substring(0,1);

}

function printSeconds() {
    secUni.innerText=ch.twoDigitsNumber(ch.setSeconds().toString()).substring(1,2);
    secDec.innerText=ch.twoDigitsNumber(ch.setSeconds().toString()).substring(0,1);
}

function printMilliseconds() {
    milDec.innerText=ch.twoDigitsNumber(ch.setMilliseconds().toString()).substring(0,1);
    milUni.innerText=ch.twoDigitsNumber(ch.setMilliseconds().toString()).substring(1,2);
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {
    let split=document.createElement('li');
    split.innerText=`${ch.twoDigitsNumber(ch.setMinutes())}:${ch.twoDigitsNumber(ch.setSeconds())}:${ch.twoDigitsNumber(ch.setMilliseconds())}`;
    splits.appendChild(split);
    saveStorage();
}

function setStartBtn() {
    if (btnLeft.innerText=='START'){
        btnLeft.innerText='STOP';
        btnLeft.classList.add( 'stop');
        btnRight.innerText='SPLIT';
        btnRight.classList.add('split');       
        miProxy.startClick();  
    }
    else{
        btnLeft.innerText='START';
        btnLeft.classList.add( 'start');
        btnLeft.classList.remove('stop');
        btnRight.innerText='RESET';
        btnRight.classList.add( 'reset');
        miProxy.stopClick();
    }
}

function setResetBtn() {
    if (btnRight.innerText=='RESET'){
            ch.resetClick();
            btnRight.classList.remove('split'); 
            printTime(); 
            splits.innerText='';       
        }
    else{
        btnRight.classList.add('split');
         //let split=new HTMLElement('li');
         setSplitBtn();



    }

}
function saveStorage(){
    console.log(splits.children.length);
    //localStorage.set(`${splits.length}`);
}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
    setStartBtn();
   
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    setResetBtn();
});
