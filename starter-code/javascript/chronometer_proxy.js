class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
        this.contMili = 0;
    }

    // Esta función retornará el intervalId.
    startClick() {
        this.intervalId = setInterval(() => {
            if(this.contMili==1000) {
                this.currentTime++;
                this.contMili = 0;
            }
            this.contMili+=10;
            this.setTime();
            }, 10);    
    }

    setMinutes() {
        return parseInt(Math.floor(this.currentTime/60));
    }

    setSeconds() {
        let result;
        if (this.currentTime==0) result=0;

        else result=this.currentTime-(this.setMinutes()*60);
        return result;
    }

    twoDigitsNumber(number) {
        return number.toString().padStart(2,'0');
    }

    setTime() {
        let minutes=this.twoDigitsNumber(this.setMinutes());
        let seconds=this.twoDigitsNumber(this.setSeconds());
        let miliseconds=this.setMilliseconds();
        // Para evitar el utilizar una llamada fuera del objeto, implementamos un proxy
        // A través del proxy nos ocuparemos del cambio del cronometro
        // El proxy está en main.js
        // printTime(minutes,seconds,miliseconds);
    }

    setMilliseconds() {
        return parseInt(Math.floor(this.contMili)/10);
    }

    stopClick() {
        clearInterval(this.intervalId); 
    }

    resetClick() {
        this.currentTime=0;
        this.contMili = 0;
    }
}