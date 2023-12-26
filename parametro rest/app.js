"strict mode";

const suma = (frase,...num)=>{
    let resultado = 0;
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];
    }
    console.log(`${frase} ${resultado}`);
}

suma("frase",15,3,3,3);


