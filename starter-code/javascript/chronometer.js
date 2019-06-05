class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            this.setTime();
            printTime();
            }, 1000);    
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
    }

    setMilliseconds() {

    }

    stopClick() {
        clearInterval(this.intervalId); 
        //this.currentTime=0; 
    }
    resetClick() {
        this.currentTime=0;
    }

    splitClick() {

    }
}

