class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.minutes;
    this.seconds;
  }

  startClick() {
      console.log("Chronometer Started...");
      this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
      }, 1);
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    return (number >= 10) ? ('' + number) : ('0' + number);
  }

  setTime() {
      this.minutes = this.twoDigitsNumber(this.setMinutes());
      this.seconds = this.twoDigitsNumber(this.setSeconds());
  }

  setMilliseconds() {
    return this.currentTime % 100;
  }

  stopClick() {
      clearInterval(this.intervalId);
      console.log("Chronometer Stopped...");
  }

  resetClick() {
      this.currentTime = 0;
  }

  splitClick() {}
}
