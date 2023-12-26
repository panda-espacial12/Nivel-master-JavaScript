//cuanndo creas una funcion creas un prototipo
class objeto {
    constructor(){};
    hablar(){
        console.log("hola")
    }
}


const objeto = new objeto();

objeto.hablar = ()=>{
    console.log("hablando desde afuera")
}
let arr = [];

arr.__proto = objeto;

arr.__proto__.hablar()