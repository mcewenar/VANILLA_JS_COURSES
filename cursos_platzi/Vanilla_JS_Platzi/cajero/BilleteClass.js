class Billete {
    constructor(val=null,can=null) {
        this.valor = val;
        this.cantidad = can;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
};
