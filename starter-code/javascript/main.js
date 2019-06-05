let chronometer /*= new Chronometer()*/;
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let milisecondsInterval, secondsInterval, minutesInterval;

function printTime() {
    console.log("Chrono started...PrintTime...");
  milisecondsInterval = setInterval(() => {
    printMilliseconds();
  }, 10);
  secondsInterval = setInterval(() => {
    printSeconds();
  }, 1000);
  minutesInterval = setInterval(() => {
    printMinutes();
  }, 60000);
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  console.log('minutes : ' + minutes);
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  console.log('seconds : ' + seconds);
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
  let miliseconds = chronometer.twoDigitsNumber(chronometer.setMilliseconds());
  milDec.innerHTML = miliseconds[0];
  milUni.innerHTML = miliseconds[1];
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', function(e) {
  if (btnLeft.classList.contains('start')) {
    chronometer.startClick();
    printTime();
  } else {
    chronometer.stopClick();
    clearInterval(milisecondsInterval);
    clearInterval(secondsInterval);
    clearInterval(minutesInterval);
  }
  toggleButtons();
});

// Reset/Split Button
btnRight.addEventListener('click', function() {});

addEventListener('load', () => {
  chronometer = new Chronometer();
});

function toggleButtons() {
  if (btnLeft.classList.contains('start')) {
    // start --> stop
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerHTML = 'STOP';
    // reset --> split
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';
  } else {
    // stop --> start
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerHTML = 'START';
    // split --> reset
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerHTML = 'RESET';
  }
}
