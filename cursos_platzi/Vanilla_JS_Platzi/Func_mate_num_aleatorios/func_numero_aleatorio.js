let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");

let fondo = {
  url: "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\Func_mate_num_aleatorios\\Imagenes\\tile.png", //FORMA DE APLICAR RUTAS EN JS (IMPORTANTE)
  cargaOK: false
};
let vaca = {
  url: "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\Func_mate_num_aleatorios\\Imagenes\\vaca.png",
  cargaOK: false
};
let cerdo = {
    url: "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\Func_mate_num_aleatorios\\Imagenes\\cerdo.png",
    cargaOk: false
};
let pollo = {
    url: "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\Func_mate_num_aleatorios\\Imagenes\\pollo.png",
    cargaOk: false
};

let cantidad1 = aleatorio(1, 10);
let cantidad2 = aleatorio(3, 8);
let cantidad3 = aleatorio(3, 5);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);


function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
};

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
};

function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
};

function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
};

function dibujar() {
  if(fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK) {
    console.log(cantidad1);
    for(let v=0; v < cantidad1; v++) {
      let x = aleatorio(0, 7);
      let y = aleatorio(0, 10);
      x = x * 60;
      y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK) {
    console.log(cantidad2);
    for(v=0; v < cantidad2; v++) {
      x = aleatorio(0, 3);
      y = aleatorio(0, 10);
      x = x * 60;
      y = y * 40;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if(pollo.cargaOK) {
    console.log(cantidad3);
    for(v=0; v < cantidad3; v++) {
      x = aleatorio(1, 7);
      y = aleatorio(2, 10);
      x = x * 60;
      y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
};
function aleatorio(min, maxi) {
  let resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
};






/* Made it by me: 
let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");
let mapa = "tile.png";
let backgr = new Image(); //Clase Image, instancia imagen
backgr.src = mapa;
backgr.addEventListener("load", draw);
let cow = new Image();
cow.src = "vaca.png";
cow.addEventListener("load", drawCow);
let pig = new Image();
pig.src = "pollo.png";
pig.addEventListener("load", drawPig);
let chicken = new Image();
chicken.src = "cerdo.png";
chicken.addEventListener("load", drawChicken);
function draw() {
    papel.drawImage(backgr, 0, 0);
};
function drawCow() {
    papel.drawImage(cow, 0, 0);
};
function drawPig() {
    papel.drawImage(pig, 0, 0);
};
function drawChicken() {
    papel.drawImage(chicken, 0, 0);
};
function aleatorio(min,max) {
    let resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min; //Ecuaci??n para un n??mero aleatorio con el m??todo .math
    return resultado //Retorna a la l??nea de c??digo que invoc?? a la funci??n, el valor que va junto a la palabra clave return
};
let z; 
for (let i=0; i<10; i++) {
    z = aleatorio(10,20);
    document.write(z+ ", ")
}//jjs*/