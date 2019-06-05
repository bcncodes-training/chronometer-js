class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
  }

  startClick() {
    //console.log('Chronometer Started...');
    this.intervalId = setInterval(() => {
      ++this.currentTime;
      this.setTime();
    }, 10);
  }

  setMinutes() {
    let num = Math.floor(this.currentTime / 6000) % 60;
    //console.log('minutos : ' + num);
    return num;
  }

  setSeconds() {
    let num = Math.floor(this.currentTime / 100) % 60;
    //console.log('segundos : ' + num);
    return num;
  }

  setMilliseconds() {
    let num = this.currentTime % 100;
    //console.log('milis : ' + num);
    return num;
  }

  twoDigitsNumber(number) {
    return number >= 10 ? '' + number : '0' + number;
  }

  setTime() {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
  }

  stopClick() {
    clearInterval(this.intervalId);
    //console.log('Chronometer Stopped...');
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return this.minutes + ':' + this.seconds + ':' + this.milliseconds;
  }
}
