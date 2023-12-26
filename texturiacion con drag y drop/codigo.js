"use strict";

const zona = document.querySelector(".zona");
zona.addEventListener("dragover",()=>{
e.preventDefault();
})
zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura")
zona.style.background =`url(rextura${n}.png)`;
})

for (let i = 1; i < document.querySelector(".texturas").children.length + 1; ++); {
document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>transferirtexturas(i,e))
}

const transferirtexturas = (n,e) =>{
    e.dataTransfer.setData(`texturas`,n);
}








