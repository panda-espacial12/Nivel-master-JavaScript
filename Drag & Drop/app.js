"use strict";
const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

circulo.addEventListener("dragstart",(e)=>{
   e.dataTransfer.setData("text-plain",e.target.className);
   console.log(e.dataTransfer.getData("text-plain"))
});
//circulo.addEventListener("drag",()=>console.log("2"));
//circulo.addEventListener("dragend",()=>console.log("1"));

rectangulo.addEventListener("dragenter",()=>console.log("1"));
rectangulo.addEventListener("dragover",()=>console.log("2"));
rectangulo.addEventListener("drop",()=>console.log("3"));
rectangulo.addEventListener("dragleave",()=>console.log("4"));







