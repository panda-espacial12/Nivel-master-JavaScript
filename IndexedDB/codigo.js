"use strict";

const iDBRequest = indexedDB.open("daltobase",1);

iDBRequest.addEventListener("upgradeneeded",()=>{
   const db = iDBRequest.result;
   db.createObjectStore("nombres",{
    autoIncrement: true
   });
})

iDBRequest.addEventListener("succesoss",()=>{
    console.log("todo salio corectamente");
})

iDBRequest.addEventListener("error",()=>{
    console.log("ocurrio un error al abrir la base de datos");
})

const addbObjetos = objetos =>{
    const db = iDBRequest.result;
    const iDBtransaction =db.transaction("nombres","readwrite")//hay dos modos [readwrite] leer y escribir o [readonly] solamente se puede leer
    const ObjectStore = iDBtransaction.objectStore("nombres");
    objectStore.add(objeto);
    iDBtransaction.addEventListener("complete",()=>{
        console.log("objeto agragado Corectamente")
    })
}






