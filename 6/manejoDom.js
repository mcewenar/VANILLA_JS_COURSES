function dolime() {
    var dd1 = document.getElementById("d1"); //parámetro del canvas: indica que la acción se hará en el tag canvas
    dd1.style.backgroundColor="lime";
  }
  function doyellow () { //función para dar interactividad al a la etiqueta mke yellow
    dd1=document.getElementById("d1"); //repite función proc en func. dolime
    dd1.style.backgroundColor="white" //la misma  chimbada, pero asignándole blanco.
    var ctx= dd1.getContext("2d"); //method returns a drawing context on the canvas, or null if the context identifier is not supported. The "2d" parámetro, se usa para representar un objeto en 2 dimensiones.
    ctx.fillStyle="yellow"; //Forma de rellenar a cada cuadradito de amarillo.
    ctx.fillRect(10,10,40,40); //dimensiones del primer cuadrado de color amarillo ctx.fillRect (cordx,cordy, width, heithg)
    ctx.fillRect(40,60,40,40);
    
    //texto de color negro dentro del canvas
    ctx.fillStyle="black";
    ctx.font="40px arial";
    ctx.fillText("BLUEx",60,30);
    
     
  }
  