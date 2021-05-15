let z 
for (let i=0; i<10; i++) {
    z = aleatorio(10,20);
    document.write(z+ ", ")
}

function aleatorio(min,max) {
    let resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min;
    return resultado //Retorna a la línea de código que invocó a la función, el valor que va junto a la palabra clave return
};