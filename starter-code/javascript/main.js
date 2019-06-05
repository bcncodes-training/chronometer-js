let chronometer /*= new Chronometer()*/;
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');
let printInterval;

function printTime() {
  //console.log('Chrono started...PrintTime...');
  printInterval = setInterval(() => {
    printDataTime();
  }, 1);
}

function printDataTime(){
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  //console.log('minutes : ' + minutes);
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  //console.log('seconds : ' + seconds);
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
  let miliseconds = chronometer.twoDigitsNumber(chronometer.setMilliseconds());
  //console.log('miliseconds : ' + miliseconds);
  milDec.innerHTML = miliseconds[0];
  milUni.innerHTML = miliseconds[1];
}

function printSplit() {
  let split = chronometer.splitClick();
  let listElem = document.createElement('li');
  let listElemText = document.createTextNode(split);
  listElem.appendChild(listElemText);
  splits.appendChild(listElem);
}

function clearSplits() {
  while (splits.firstChild) splits.removeChild(splits.firstChild);
  chronometer.resetClick();
  printDataTime();
}

function setStopBtn() {
  // start --> stop
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  // reset --> split
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // stop --> start
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  // split --> reset
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function(e) {
  if (btnLeft.classList.contains('start')) {
    chronometer.startClick();
    printTime();
  } else {
    chronometer.stopClick();
    clearInterval(printInterval);
  }
  toggleButtons();
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (btnRight.classList.contains('split')) {
    printSplit();
  } else {
    clearSplits();
  }
});

addEventListener('load', () => {
  chronometer = new Chronometer();
});

function toggleButtons() {
  if (btnLeft.classList.contains('start')) {
    // start --> stop
    setStopBtn();
    // reset --> split
    setSplitBtn();
  } else {
    // stop --> start
    setStartBtn();
    // split --> reset
    setResetBtn();
  }
}
