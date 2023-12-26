"use strict";

const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarhora = ()=>{
    const time = new Date();
    let hora =addZeros(time.getHours());
    let min =addZeros(time.getMinutes());
    let seg =addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;  
    document.querySelector(".min").textContent = min;    
    document.querySelector(".seg").textContent = seg;    
}

actualizarhora()
setInterval(actualizarhora,1000) 


