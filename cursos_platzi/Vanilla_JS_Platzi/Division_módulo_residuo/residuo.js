//Escribe los números del 1 al 100 y escribimos FIZZ a números divisibles por 3 y buzz en números divisibles por 5
//Mod = %. 5%5==0. Para saber la divisibilidad de un número
//Fizz = 3
//Buzz = 5
// % == módulo
//Ej: if(#1 % #2 == 0) {}
for (let i = 1; i<=100; i++) {
    if (Divisible(i,3) && Divisible(i,5)) {
        document.write("Fizz/buzz ", i, "<br>")
    }

    else if (Divisible(i,3)==true) {
        document.write("Fizz ",i+"<br>");
    }
    else if (Divisible(i,5)==true) {
        document.write("Buzz ",i+"<br>");
    }
    else {
        document.write(i + " no es divisible por ninguno <br>");
    }
};


function Divisible(num,divi) {
    if (num % divi == 0) {
        return true;
    }

    else {
        return false;
    }
};

/*FORMA SI NO ES DIVISIBLE NI POR 3 NI POR 5
let num = 100;
let divisible = false;
for (let i = 1; i<=100; i++) {
    divisible = false;
    if (i % 3 == 0) {
        document.write("fizz ",i+"<br>"); //Se pueden escribir etiquetas dentro de las comillas en JS
        divisible = true;
    }
    if (i % 5 == 0) {
        document.write("buzz ",i+"<br>");
        divisible = true;
    }
    if (!divisible) {
        document.write(i + " no es divisible por ninguno <br>");
    }
    document.write("<br>")
};*/
/*let num = 100;
let divisible = false;
for (let i = 1; i<=100; i++) {
    divisible = false;
    if (i % 3 == 0) {
        document.write("fizz ",i+"<br>"); //Se pueden escribir etiquetas dentro de las comillas en JS
    }
    if (i % 5 == 0) {
        document.write("buzz ",i+"<br>");  
    }
    if (i%3!=0 && i%5!=5) {
        document.write(i + " no es divisible por ninguno <br>");
    }
    document.write("<br>")
};  

//1. colocar de primero  else if (i % 3 == 0 && i % 5 == 0)
//2.

*/