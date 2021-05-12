//yi=10xl
//xf=10xl
//Demás constantes

let d = document.getElementById("draw")
let lienzo = d.getContext("2d")
let lines = 30;
let l = 0;
let color = "#AAF"
//var yi, xf

//Usando for:
//for(l=0;l<lineas;l++) hace lo mismo que el while de abajo
//Do while
while(l<lines) {
    drawingLing(color,0,l*10,10*(l+1),300); //HOISTING
    drawingLing(color,l*10,0,300,10*(l+1));
    drawingLing(color,0,10*l,300-(10*l),0);
    drawingLing(color,10*l,300,300,300-(10*(l+1)));
    console.log("Línea "+ l)
    l = l+1;
    //Otra forma: l++ SOLO FUNCIONA CON 1
    //Recuerda que los parámetros se pueden crear variables
}
drawingLing(color,1,1,1,299); //HOISTING
drawingLing(color,1,299,299,299)
///drawingLing("pink",30,33,51,25);
drawingLing(color,299,1,1,1); //HOISTING
drawingLing(color,299,299,299,1)

function drawingLing(colores, x_inicial, y_inicial,x_final,y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = colores; //Choice color
    lienzo.moveTo(x_inicial,y_inicial); //from to... (donde inicia)
    lienzo.lineTo(x_final,y_final); //till to...
    lienzo.stroke(); // method that draw the line
    lienzo.closePath(); //CloseLineDraw
}