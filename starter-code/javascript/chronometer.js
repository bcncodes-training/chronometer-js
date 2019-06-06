 class Chronometer {
    constructor() {

        //inicicializamos
        this.currentTime = 0;//0 minutes
        //this.intervalId = 1000;//este intervalId declarado
        this.intervalId = 0;

}

 startClick() {
//this.interval = setInterval(()=>{this.currentTime+=1}, 1000);
this.intervalId = setInterval(()=>{
    this.currentTime++;
    this.setTime();//llamada
   //console.log(this.minutes+':'+this.seconds);
    printTime(this.minutes,this.seconds);
}, 1000);
    /*las function de flecha tienen el contexto ya establecido del padre
    si utilizamos function debemos utilizar bind(this)para decirle que su contexto es chronometre y no window */
    

    //printTime(this.minutes, this.seconds);
 }

 setMinutes() {
   /*  let minutes = Math.floor(this.currentTime/60);
     return minutes;*/
     return Math.floor(this.currentTime/60);
 }

 setSeconds() {
     /*let seconds = Math.floor(this.currentTime % 60);
     return seconds;*/
     return Math.floor(this.currentTime%60);
 }

 twoDigitsNumber(number) {
     // seconds.value//son number
     //minutes.value
     let numero = number.toString();
     //let numero = '0'.concat(number.toString());//.slice(-2);//pk array?
        if( numero.length <2){
            numero = '0'.concat(number);//.toString());
        }
     return numero;
     /*let longitudNumero = numero.length();
    if (longitudNumero=3)*/
    
    // return '0'.concat(number.toString()).slice(-2);//solucion Raul
     
 }

 setTime() {
    //let minutes
    //let seconds
    //llamadas a set minutes,set seconds,twodigits

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
    this.setTime();
    printTime(this.minutes, this.seconds);
 }

 splitClick() {//trabajar
    this.currentTime;
    this.setTime();
    localStorage.setItem(this.setTime, this.currentTime);
    let x = localStorage.getItem(this.setTime);
    //console.log(x);
    document.getElementById("splits").innerHTML = x;
    
 }
}

/*let crono = new Chronometer;
crono.startClick();*/

