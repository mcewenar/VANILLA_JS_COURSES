function  buttonfun() {
    var canvas = document.getElementById("can");
    canvas.style.backgroundColor = "green"; //botón make color, button determinate
  }
  function onchange() {
    var canvas = document.getElementById("can");
    var colorinput = document.getElementById("clr");
    canvas.style.backgroundColor = colorinput.value;
  }
  function dosquare() {
    var sliderinput = document.getElementById("slr");
    var len = sliderinput.value;
    var canvas = document.getElementById("can");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(10,10,len,len);
    context.fillRect(parseInt(len)+20,10,len,len);
    context.fillRect(len*3,10,len,len);
    
  }