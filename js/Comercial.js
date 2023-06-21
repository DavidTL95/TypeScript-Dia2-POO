"use strict";
//Clase hija de Empleado.
class Comercial extends Empleado {
    //Constructor.
    constructor(newNombre, newEdad, newComision) {
        super(newNombre, newEdad);
        this.comision = newComision;
    }
}
