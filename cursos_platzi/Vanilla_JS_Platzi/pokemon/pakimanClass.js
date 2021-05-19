class Pokemon {
    constructor(name=null,life=null,attack=null) {
        //propiedades:
        this.imagen = new Image(); //Clase image()
        this.nombre = name;
        this.tipo = "tierra"; //This: indicador de la instancia en la que se está. Es el self de Python.
        this.vida = life;
        this.ataque = attack;

        this.imagen.src = img[this.nombre];
    }
    //Métodos: (no necesita palabra clave "function")
    hablar() {
        alert("¡" + this.nombre + "!");
    }
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br>");
        document.write("Vida: " + this.vida + "</br>");
        document.write("Ataque: " + this.ataque);
        document.write("</p><hr>");
    }
};

//Instancias de objetos separados de clase Pokemon