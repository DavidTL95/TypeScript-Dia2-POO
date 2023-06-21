"use strict";
//Clase hija de repartidor.
class Rider extends Repartidor {
    //Constructor.
    constructor(newName, newEdad, newArea, newKmDia) {
        super(newName, newEdad, newArea);
        this.kmDia = newKmDia;
    }
}
