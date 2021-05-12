function changecolor() {
    var dd1=document.getElementById("d1");
    var dd2=document.getElementById("d2")
    
    dd1.className="blueback";
    dd2.className="orangeblack";  
  }
  function doRed() {
    alert("are you ready?");
    var canvas=document.getElementById("d1");
      canvas.style.backgroundColor="blue";
    var context=canvas.getContext("2d");
      context.fillStyle = yellow;
      context.fillRect = (30.30,40,40);
      context.fillRect = (10,10,80,80);
  }
  function doGreen() {
    var gg1=document.getElementById("d2");
  }