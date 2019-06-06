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


function chronometer() {

}

function printTime() {
    printMilliseconds();
    printSeconds();
    printMinutes();
}

function printMinutes() {
    minUni.innerText = ch.twoDigitsNumber(ch.setMinutes().toString()).substring(1, 2);
    minDec.innerText = ch.twoDigitsNumber(ch.setMinutes().toString()).substring(0, 1);
}

function printSeconds() {
    secUni.innerText = ch.twoDigitsNumber(ch.setSeconds().toString()).substring(1, 2);
    secDec.innerText = ch.twoDigitsNumber(ch.setSeconds().toString()).substring(0, 1);
}

function printMilliseconds() {
    //milUni.innerText = ch.setMilliseconds().toString().substring(2, 3);
    milli.innerText = ch.setMilliseconds().toString().substring(0, 2);;
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
    btnRight.innerText = 'RESET';
    btnRight.classList.add('btn', 'reset');
    ch.stopClick();
}

function setSplitBtn() {
    btnRight.classList.add('split');
    let cadena = `${ch.twoDigitsNumber(ch.setMinutes())}:${ch.twoDigitsNumber(ch.setSeconds())}:${ch.setMilliseconds()}`;
    printSplit(cadena);
    saveSplit(cadena);
}

function setStartBtn() {
    if (btnLeft.innerText == 'START') {
        btnLeft.innerText = 'STOP';
        btnLeft.classList.add('btn', 'stop');
        btnRight.innerText = 'SPLIT';
        btnRight.classList.add('btn', 'split');
        ch.startClick();
    }
    else {
        setStopBtn();
    }
}

function setResetBtn() {
    if (btnRight.innerText == 'RESET') {
        ch.resetClick();
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
