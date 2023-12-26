"use strict";

const geolocation = navigator.geolocation;

const position =(pos)=>{
    console.log(pos)
}

const err = ()=> console.log(e);

const options = {
    maximumAge: 0,//esto es el tiempo que se guarda en el cache con 0 lo buscara cada vez
    timeout: 3000,//el tiempo que tarda en mostrarlo
   enableHightaccurancy: true
}




