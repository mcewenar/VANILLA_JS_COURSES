//Algoritmo para tomar la imagen y crear la escala de grises
var image;
function upload() {
  /* var fileinput =     document.getElementById("textinp");
  var filename = fileinput.value;
  alert("You choose"+ filename); */
  var fileinput = document.getElementById("finput")
   image = new SimpleImage(fileinput)
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function makegray() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
    }
    var canvas = document.getElementById("can");
    image.drawTo(canvas);
}