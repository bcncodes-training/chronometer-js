class Chronometer{
    constructor(){
        this.minutes=1;
        this.seconds=1;
        this.intervalId='';
    }
    start(){
        this.intervalId = setInterval(()=>{
            this.minutes++;
        },1000)
    }
}

crono = new Chronometer();

const inputHandler = {
    set: (target, prop, nuevoValor)=>{
        if(prop=='minutes'){
            target[prop]= nuevoValor;
            //document.getElementById(prop).innerHTML = nuevoValor;
            console.log('objeto dom --'+nuevoValor);
            return true;
        }
        else return false;
    }
}
const miProxy = new Proxy(crono,inputHandler);

miProxy.start();

//miProxy.minutes = 2;

console.log('objeto crono: '+crono.minutes);