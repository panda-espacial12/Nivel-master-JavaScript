"use strict";

this.nombre = "dalto";

function saludar(){
    console.log(`hola ${this.nombre}`);
}

const objeto = {
    nombre: "lucas",
    saludar 
}

function otroContexto(){
    this.nombre ="roberto";
    this.saludar = saludar;
}
const objeto2 = new otroContexto();

objeto.saludar()

objeto2.saludar()

console.log(this.nombre)






