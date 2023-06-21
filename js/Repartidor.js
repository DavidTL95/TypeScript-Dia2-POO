"use strict";
//Clase hija de Empleado.
class Repartidor extends Empleado {
    //2 - Contrusctor.
    constructor(newName, newEdad, newArea) {
        super(newName, newEdad);
        this.area = newArea;
    }
    //3 - Métodos.
    getArea() {
        return this.area;
    }
    setArea(newArea) {
        this.area = newArea;
    }
}
//Instancia de repartidor.
