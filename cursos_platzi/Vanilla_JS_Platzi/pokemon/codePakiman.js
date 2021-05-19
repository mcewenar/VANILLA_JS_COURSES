//Clases: investigar actualizaciones
/*let caja = [];
Añadir valores:
caja[0] = "Hola";
caja[1] = "David";
caja.push("último");
console.log(caja);
console.log(caja[2]);*/

let img = []; //SON COMO DICCIONARIOS EN PYTHON. Se llaman arrays asociados
//Se puede hacer usando JSON
img["Cauchín"] = "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\pokemon\\Imagenes\\vaca.png";
img["Pokacho"] = "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\pokemon\\Imagenes\\pollo.png";
img["Tocinauro"] = "C:\Users\\dmcew\\proy_programacion\\Duke_cour1\\cursos_platzi\\Vanilla_JS_Platzi\\pokemon\\Imagenes\\cerdo.png";
/*console.log(img["Tocinauro"]);
console.log(img);*/

/*let cauchin = new Pokemon("Cauchín",100,30); //Instancia de la clase. Se ejecuta clase.
//cauchin.hablar();
let pokacho = new Pokemon("Pokacho",80,50);
let tocinauro = new Pokemon("Tocinauro",120,40);
console.log(cauchin,pokacho,tocinauro); //Se puede separar argumentos con comas

pokacho.mostrar();
tocinauro.mostrar();
cauchin.mostrar();
//console.log(cauchin.tipo);
//console.log(cauchin.nombre);
*/
let coleccion = [];
coleccion.push(new Pokemon("Pokacho",80,50)); //No hace falta crear una variable
coleccion.push(new Pokemon("Tocinauro",120,40));
coleccion.push(new Pokemon("Cauchín",100,30));
console.log(coleccion);

for(pokemon of coleccion) { //Opera por la cantidad de objetos que hay en el array
    //Existe for(pokemon IN coleccion)
    pokemon.mostrar();
}
//En in sale clave, en of no

for(pokemon in coleccion) { //Sale clave
    //In itera en el índice y Of itera sobre el objeto
    console.log(pokemon)
}