 class Chronometer {
    constructor() {
        this.currentTime=0;
        this.intervalId=0;

}

 startClick() {
    this.intervalId = setInterval(()=>{
        this.currentTime++;
        this.setTime();
       // console.log(this.minutes+':'+this.seconds);
       printTime(this.minutes,this.seconds);
    },1000)
/*     setInterval(()=>{
        this.currentTime++;
    },1000).bind(this); */
 }

 setMinutes() {
     return Math.floor(this.currentTime/60);
 }

 setSeconds() {
     return Math.floor(this.currentTime%60);
 }

 twoDigitsNumber(number) {
     return '0'.concat(number.toString()).slice(-2);
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
     this.currentTime=0;
 }

 splitClick() {

 }
}

/* let crono = new Chronometer;
crono.startClick(); */

