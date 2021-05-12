let text = document.getElementById("text_lines"); //Elements manager
let boton = document.getElementById("button");
boton.addEventListener("click",drawForClick); //se activa cuando se da click
//Nota: son 2 parámetros: 1. la forma en que reacciona al evento
//2. es la función referida que se va a disparar cuando se le dé click. Si tuviese paréntesis, se ejecuta y no se refiere
let d = document.getElementById("draw")
let lienzo = d.getContext("2d") //GLOBALS SCOPES O ÁMBITOS GLOBALES
let ancho = d.width;
//alert(ancho)

function drawingLine(colores, x_inicial, y_inicial,x_final,y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = colores; //Choice color
    lienzo.moveTo(x_inicial,y_inicial); //from to... (donde inicia)
    lienzo.lineTo(x_final,y_final); //till to...
    lienzo.stroke(); //method that draw the line
    lienzo.closePath(); //CloseLineDraw
    //Ancho/líneas
}

function drawForClick() {
    let l = 0;
    let color = "#AAF";
    let lines = text.value; //text.value para obtener texto escrito por usuario
    let space = ancho/lines;
    console.log(text + "-" + text.value);
    if (parseInt(lines) <= 0 || parseInt(lines) > 300) {
        alert("Fuera de rango")

    } 
    else if (parseInt(lines)) {
        //while(l < lines) {
        for (l=0; l<lines; l++) {
            drawingLine(color,0,l*space,space*(l+1),300); //HOISTING
            drawingLine(color,l*space,0,300,space*(l+1));
            drawingLine(color,0,space*l,300-(space*l),0);
            drawingLine(color,space*l,300,300,300-(space*(l+1)));
            l = l+1;
            console.log("Línea "+ l);
        }
        drawingLine(color,1,1,1,299);
        drawingLine(color,1,299,299,299);
        drawingLine(color,299,1,1,1);
        drawingLine(color,299,299,299,1);
    //document.write("Prueba "+text.value);
    //alert("Don't touch me")
    //texto.value;
    }
    else if(typeof(lines) === "string") {
        alert("No se permiten letras")

    }
}