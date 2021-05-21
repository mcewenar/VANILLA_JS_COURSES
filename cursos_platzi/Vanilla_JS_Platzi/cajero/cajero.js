//ALGORITMO DE NÚMERO DE BILLETES: TOTAL = TOTAL - (CANTIDAD DE BILLETES * VALOR DE BILLETE). 
function entregarDinero() { //Toma cada billete listado en el array
    let dinero = parseInt(text.value);
    console.log(dinero,typeof(dinero))
    if(dinero>=0) {
        for(let bi of caja) {
            if(dinero > 0) {
                div = Math.floor(dinero/bi.valor);
                //div = Math.trunc(dinero/b.valor); atributo valor
                if(div > bi.cantidad) {
                    papeles = bi.cantidad;
                } else {
                    papeles = div;
                }
                entregado.push( new Billete(bi.valor,papeles));
                dinero -= bi.valor*papeles; //++ != +=. += == variable = variable + i
            }
        }
        if(dinero>0) {
            console.log("Su petición excede no se encuentra disponible");
            resultado.innerHTML= "Su petición excede no se encuentra disponible"; //No es una función o método, es una variable, por tanto, se le asigna como si se tratara de cualquier variable
        } else {
            for(let e of entregado) { //Of te da una instancia de cada uno de los objetos dentro de la e. Diferente a In
                if(e.cantidad > 0) {
                    resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + ":<br>"; //Toca concatenar el valor anterior al último que se itera. (IMPORTANTE)
                    resultado.innerHTML += "<img src=" + e.imagen.src + " />" + "<br /><hr />";
                    //resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br>";
                    console.log(e.cantidad + " billetes de $" + e.valor + "\n");
                }
            }
        }
    } else {
        alert("Opción fuera de rango");
    }
};

function saldo() {
    let total = 0;
    let w = parseInt(text.value);
    if(w >= 0) {
        for(let t of caja) {
            total += t.valor * t.cantidad;
        }
        salida.innerHTML = "$ " + total;

    }
    
};


let imagenes = [];
imagenes[100] = "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\cajero\\imagenes\\100tick.jpg";
imagenes[50] = "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\cajero\\imagenes\\50tick.jpg";
imagenes[20] = "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\cajero\\imagenes\\20tick.jpg";
imagenes[10] = "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\cajero\\imagenes\\10tick.jpg";
imagenes[5] = "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\cajero\\imagenes\\5tick.jpg";

let caja = [];
let entregado = [];
caja.push( new Billete(100,3) );
caja.push( new Billete(50,4) );
caja.push( new Billete(20,6) );
caja.push( new Billete(10,7) );
caja.push( new Billete(5,10) );

let text = document.getElementById("dinero");
//let dinero = Number(text.value);

let div = 0;
let papeles = 0;

//Para manipular el botón extraer
let b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);

let resultado = document.getElementById("resultado"); //Innerhtml

let p = document.getElementById("cantidad");
p.addEventListener("click",saldo);

let salida = document.getElementById("sobrante");