let teclas = {
    UP:38, //Mayúsculas para denotar que no cambia
    DOWN:40,
    LEFT:37,
    RIGHT:39
}; //JSON: Javascript Object Notation. Cada elemento se separa con comas

//console.log(teclas);
document.addEventListener("keydown",drawKeyboard); //Usamos el objeto document porque es el todo de la página web
//mousedown or mouseup para usar mouse
let square = document.getElementById("Key");
let paper = square.getContext("2d");
let x = 30;
let y = 150;

function drawingLine(colorese, x_inicial, y_inicial,x_final,y_final,lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorese; //Choice color
    lienzo.lineWidth = 4; //Make the line more widht
    lienzo.moveTo(x_inicial,y_inicial); //from to... (donde inicia)
    lienzo.lineTo(x_final,y_final); //till to...
    lienzo.stroke(); //method that draw the line
    lienzo.closePath(); //CloseLineDraw
    //Ancho/líneas
};
drawingLine("blue", x-1, y-1, x+1, y+1, paper);

function drawKeyboard(event) {
    let colores = "blue";
    let mov = 2;
    switch (event.keyCode) {
        case teclas.UP:
            drawingLine(colores, x, y, x, y-mov, paper);
            y = y - mov;
            console.log("UP!");
        break;
        case teclas.DOWN:
            drawingLine(colores, x, y, x, y+mov, paper);
            y = y + mov;
            console.log("DOWN!");
        break;
        case teclas.LEFT:
            drawingLine(colores,x,y,x-mov,y, paper);
            x = x - mov;
            console.log("LEFT!");
        break;
        case teclas.RIGHT:
            drawingLine(colores,x,y,x+mov,y, paper);
            x = x + mov;
            console.log("RIGHT!");
        break;
        default: //es el else del switch
            console.log("Other key");
        break;
    };
    //Using Control structure Switch
    
    //console.log(event.keyCode); //el atributo value, se usa para atrapara formularios, no aplica para este caso
};


/*}
    if(event.keyCode==teclas.UP) {
        console.log("UP!")
    }
    else if(event.keyCode==teclas.DOWN){
        console.log("DOWN!")
    }
    else if(event.keyCode==teclas.RIGHT){
        console.log("RIGHT!")
    }
    else if(event.keyCode==teclas.LEFT){
        console.log("LEFT!")
    }*/