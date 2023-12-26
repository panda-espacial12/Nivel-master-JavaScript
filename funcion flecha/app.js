//esto es una funcion flechas
const saludar1 = ()=>{
    console.log("hola")
    console.log("¿hola como estas?")
}

//si es solamente una exptecion en la misma linea de codigo

//cuando hay un solo parametro usamos las llaves
//const salud = function(res) {return nombre =res};

//const salud = res=> nombre = res,

//resultado = salud("hola soy dalto");

//console.log(resultado)

//use Strict // 
//this hace referencia al objeto que esta llamando a la funcion
"use Strict";

const objeto ={
    nombre2 : "lucas",
    saludar3 : function (){console.log(`hola ${this.nombre2}`)}
}

const objeto2 ={
    nombre2 : "lucas",
    saludar3 : ()=>{console.log(`hola ${this.nombre2}`)}//no recomendable usarlo como metodo
}
objeto.saludar3()
objeto2.saludar3()
//fin use Strict //
