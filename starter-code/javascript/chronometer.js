 class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
        this.minutes;
        this.seconds;

}

 startClick() {
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
        printTime(this.minutes, this.seconds);
    }, 1000);

 }

 setMinutes() {
     return Math.floor(this.currentTime / 60);
 }

 setSeconds() {
     return this.currentTime % 60;
 }

 twoDigitsNumber(number) {
     return (number >=10) ? ('' + number) : ('0' + number);
 }

 setTime() {
     this.minutes = this.twoDigitsNumber(this.setMinutes());
     this.seconds = this.twoDigitsNumber(this.setSeconds());
 }

 setMilliseconds() {

 }

 stopClick() {
     clearInterval(this.intervalId);
 }

 resetClick() {
     this.currentTime = 0;
 }

 splitClick() {

 }
}

