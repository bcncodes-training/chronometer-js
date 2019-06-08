class Chronometer{
    constructor(){
        this.minute=1;
        this.seconds=1;
        this.intervalId='';
    }
    start(){
         return setInterval(() => {
            this.minute++;            
        }, 1000);        
    }
}

crono=new Chronometer();
const inputHandler={
    set: function(target,prop,newValue){
        if(prop=='minute'){
            target[prop]=newValue;
            //document.getElementById(prop).innerHTML=newValue;
            console.log('obj DOM: '+newValue);
            return true;
        }
        else false;
    }
}
const miProxy=new Proxy(crono,inputHandler);

miProxy.intervalId=miProxy.start();

console.log('objecte crono: '+crono.minute);