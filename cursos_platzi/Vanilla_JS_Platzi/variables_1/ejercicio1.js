//Gravedad
//Gravedad Tierra 9.8m/s2
//Gravedad en marte 3.7
//Gravedaad en Jupiter 24.8
const g_tierra = 9.8;
const g_marte = 3.7;
const g_jupiter= 24.79;
var nombre = "";
var peso_final;
//let l = true;
//while (l) {
    var planeta = parseInt(prompt("Ingrese 1 si desea calcular tu peso en marte. \n Elige 2 si deseas calcular tu peso en Jupiter. \n Ingrese 3 para salir"));
    if (planeta === 1) {
        var peso = parseInt(prompt("Ingrese su peso en la Tierra"));
        peso_final = (peso*g_marte)/g_tierra;
        nombre = "Marte";
        //peso_marte = parseInt(peso_marte);
        //console.log("Su peso en Marte es: " + peso_marte);
        //document.write("Tu peso en Marte es: <strong>" + peso_marte.toFixed(2) + "Kg </strong>");
        
    } else if (planeta === 2) {
        var peso = parseInt(prompt("Ingrese su peso en la Tierra"));
        peso_final = (peso*g_jupiter)/g_tierra;
        nombre = "Jupiter";
        //console.log("Su peso en Jupiter es: " + peso_jupiter);
        //document.write("Tu peso en Jupiter es: <strong>" + peso_jupiter.toFixed(2) + "Kg </strong>");
        
    } else if (planeta === 3) {
        alert("See you later");
    } else {
        alert("Fail enter, repeat again");
    }
    console.log("Su peso en " + nombre +  " es: " + peso_final.toFixed(2)+ "Kg");
    document.write("Tu peso en " + nombre + " es: <strong>" + peso_final.toFixed(2) + "Kg </strong>");
