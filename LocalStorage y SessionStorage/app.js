"use strict";

//localStorage lo mantiene en el almacenamiento local
localStorage.setItem("nombre","peter");

//sessionStorage lo muestra mientra que  este la ventana abierta
sessionStorage.setItem("nombre","pedro");


console.log(localStorage)

let nombre = sessionStorage.getItem("nombre")
console.log(nombre)
