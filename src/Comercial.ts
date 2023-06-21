//Clase hija de Empleado.

class Comercial extends Empleado{
    //Atributos.
    private comision : number;

    //Constructor.
    constructor(newNombre : string, newEdad : number, newComision : number) {
        super(newNombre, newEdad);
        this.comision = newComision;
    }
    //Métodos.
}