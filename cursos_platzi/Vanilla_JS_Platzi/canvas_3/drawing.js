
drawingLing("blue",10,200,220,10); //HOISTING
drawingLing("pink",30,33,51,25);

var d = document.getElementById("draw"); //the canvas is inside document object
var lienzo = d.getContext("2d"); //Object is d. Method that choice 2d canvas
//.getContext("") method of canvas
console.log(lienzo);



lienzo.beginPath();
lienzo.strokeStyle = "red"; //Choice color
lienzo.moveTo(100,100); //from to... (donde inicia)
lienzo.lineTo(200,200); //till to...
lienzo.stroke(); // method that draw the line
lienzo.closePath(); //Close the path o "levantar el lapiz"

lienzo.beginPath();
lienzo.strokeStyle = "red"; //Choice color
lienzo.moveTo(40,100); //from to... (donde inicia)
lienzo.lineTo(150,180); //till to...
lienzo.stroke(); // method that draw the line
lienzo.closePath(); //Close the path o "levantar el lapiz"


function drawingLing(color, x_inicial, y_inicial,x_final,y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color; //Choice color
    lienzo.moveTo(x_inicial,y_inicial); //from to... (donde inicia)
    lienzo.lineTo(x_final,y_final); //till to...
    lienzo.stroke(); // method that draw the line
    lienzo.closePath();
}