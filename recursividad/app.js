//las funciones recursuvas se llanab a si mismas
//so no la usas bien se crean bucles infinitos
"strict mode";

const validaredad = (msg)=>{
    let edad;
    try {
        if (msg) edad = promt(msg);
        else edad = promt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un numero para la edad";
        if (edad > 18) console.log("sos mayor de edad");
        else console.log("sos menor de edad");
    } catch(e){
        validaredad(e)
    }
}

validaredad()


