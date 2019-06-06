class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = '';
        this.currentTimeM = 0;        
    }

    startClick() {
        this.intervalId= setInterval(() => {
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
        else result=parseInt(Math.floor(this.currentTime%60));
        //else result=this.currentTime-(this.setMinutes()*60);
        return result;
    }

    twoDigitsNumber(number) {
       
        return number.toString().padStart(2,'0');
    }

    setTime() {
        let minutes=this.twoDigitsNumber(this.setMinutes());
        let seconds=this.twoDigitsNumber(this.setSeconds());
        let miliseconds=this.setMilliseconds();
    }

    setMilliseconds() {
        let result;
        if (this.currentTime==0) result=0;

        else result=(this.setSeconds()*60)-this.currentTime;
        return result;
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

