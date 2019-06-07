let ch = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
//let milDec = document.getElementById('milDec');
//let milUni = document.getElementById('milUni');
let milli = document.getElementById('milli');
let splits = document.getElementById('splits');
let mSplits = [];

// Generamos el proxy
// Controlamos el cambio de las propiedades currentTime. contMili e intervalId
// No utilizamos el ch salvo para crear el objeto, utilizamos sinembargo miProxy
const inputHandler={
    set: function(target,prop,newValue){
        if(prop=='currentTime'){
            target[prop]=newValue;
            printTime();
            return true;
        }
        if(prop=='contMili'){
            target[prop]=newValue;
            printTime();
            return true;
        }
        if(prop=='intervalId') {
            target[prop]=newValue;
            return true;
        } else return false;

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
    //minUni.innerText = ch.twoDigitsNumber(ch.setMinutes().toString()).substring(1, 2);
    //minDec.innerText = ch.twoDigitsNumber(ch.setMinutes().toString()).substring(0, 1);
    minUni.innerText = miProxy.twoDigitsNumber(miProxy.setMinutes().toString()).substring(1, 2);
    minDec.innerText = miProxy.twoDigitsNumber(miProxy.setMinutes().toString()).substring(0, 1);

}

function printSeconds() {
    //secUni.innerText = ch.twoDigitsNumber(ch.setSeconds().toString()).substring(1, 2);
    //secDec.innerText = ch.twoDigitsNumber(ch.setSeconds().toString()).substring(0, 1);
    secUni.innerText = miProxy.twoDigitsNumber(miProxy.setSeconds().toString()).substring(1, 2);
    secDec.innerText = miProxy.twoDigitsNumber(miProxy.setSeconds().toString()).substring(0, 1);
}

function printMilliseconds() {
    //milli.innerText = ch.twoDigitsNumber(ch.setMilliseconds().toString().substring(0, 2));
    milli.innerText = miProxy.twoDigitsNumber(miProxy.setMilliseconds().toString().substring(0, 2));
}

function printSplits() {
    for(let i=0; i<mSplits.length; i++) {
        printSplit(mSplits[i].split);
    }
}

function printSplit(cadena) {
    //let split=new HTMLElement('li');
    let split = document.createElement('li');
    split.innerText = cadena;
    splits.appendChild(split);
}

function saveSplit(cadena) {
    let objSplit = {split: cadena};
    mSplits.push(objSplit);    
    localStorage.setItem("chronometer", JSON.stringify(mSplits));
}

function clearSplits() {
    splits.innerText = '';
    mSplits = [];
    localStorage.clear();
}

function setStopBtn() {
    btnLeft.innerText = 'START';
    btnLeft.classList.add('btn', 'start');
    btnLeft.classList.remove('stop');
    btnRight.innerText = 'RESET';
    btnRight.classList.add('btn', 'reset');
    //ch.stopClick();
    miProxy.stopClick();
}

function setSplitBtn() {
    btnRight.classList.add('split');
    //let cadena = `${ch.twoDigitsNumber(ch.setMinutes())}:${ch.twoDigitsNumber(ch.setSeconds())}:${ch.setMilliseconds()}`;
    let cadena = `${miProxy.twoDigitsNumber(miProxy.setMinutes())}:${miProxy.twoDigitsNumber(miProxy.setSeconds())}:${miProxy.setMilliseconds()}`;
    printSplit(cadena);
    saveSplit(cadena);
}

function setStartBtn() {
    if (btnLeft.innerText == 'START') {
        btnLeft.innerText = 'STOP';
        btnLeft.classList.add('btn', 'stop');
        btnLeft.classList.remove('start');
        btnRight.innerText = 'SPLIT';
        btnRight.classList.add('btn', 'split');
        //ch.startClick();
        //miProxy.intervalId=miProxy.startClick();
        miProxy.startClick();
    }
    else {
        setStopBtn();
    }
}

function setResetBtn() {
    if (btnRight.innerText == 'RESET') {
        //ch.resetClick();
        miProxy.resetClick();
        btnRight.classList.remove('split');
        printTime();
        clearSplits();
    }
    else {
        setSplitBtn();
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// En el onloand de la página leemos si existen datos en local storage
addEventListener("load", () => {
    mSplits = JSON.parse(localStorage.getItem("chronometer"));
    if(mSplits !== null)
        printSplits();
    else
        mSplits = [];
});

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
    setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    setResetBtn();
});
