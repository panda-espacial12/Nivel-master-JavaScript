//clausuras
"strict mode";

const saludar = (nombre)=>{
    return function(){
        console.log("hola "+nombre);
    }
}

let saludo = saludar("pedro")

addEventListener("load",saludo)//con esto se ejecuta cuando la pagina carge 
//otro ejemplo

const canbiartamaño = tamaño =>{
    return ()=>{ 
       document.querySelector(".texto").style.fontsize =`${tamaño}px`;
    }   
}

px12 = canbiartamaño(12);
px14 = canbiartamaño(14);
px16 = canbiartamaño(16);

document.querySelector(".t12").addEventListener("click",px12)
document.querySelector(".t14").addEventListener("click",px14)
document.querySelector(".t16").addEventListener("click",px16)



