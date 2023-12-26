const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",e=>{
    e.preventDefault();
    changeStyle(e.Event.srcElement,"#222");
})

zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.Event.srcElement,"#888");
})

const changeStyle = (obj,color)=>{
    obj.style.color =color;
    obj.style.border = `4px dashed ${color}`;
}

zona.addEventListener("drop",e=>{
    changeStyle(e.srcElement,'#888')
    changeStyle(e.dataTransfer.files[0]);
})

const cargarArchivo = ar => {
    const reader = new filereader();
    reader.readAsText(ar);
    document.querySelector(".resultado").textContent = e.currentTarget,result 
}







