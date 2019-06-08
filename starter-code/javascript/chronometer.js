class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.currentTimeMil = 0;
        this.intervalId = '';
        this.currentTimeM = 0;        
    }

    startClick() {
        let dec=50;
        this.intervalId= setInterval(() => {
            if (dec==100){
              dec=0;
              this.currentTimeMil=0;
              this.currentTime++;
              this.setTime();              
            }
            this.currentTimeMil++;
            
            //console.log(this.currentTimeMil);
            dec++; 
            }, 10);    
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
    setMilliseconds() {
        let result;
        if (this.currentTimeMil==0) result=0;
        else result=parseInt(Math.floor(this.currentTimeMil));
        //else result=this.currentTime-(this.setMinutes()*60);
        return result;
    }

    twoDigitsNumber(number) {
       
        return number.toString().padStart(2,'0');
    }

    setTime() {
        let minutes=this.twoDigitsNumber(this.setMinutes());
        let seconds=this.twoDigitsNumber(this.setSeconds());
        let miliseconds=this.twoDigitsNumber(this.setMilliseconds());
    }

    
    stopClick() {
         clearInterval(this.intervalId); 
    }
    resetClick() {
        this.currentTime=0;this.currentTimeMil=0;
    }

    splitClick() {

    }
}

