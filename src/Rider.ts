//Clase hija de repartidor.

class Rider extends Repartidor {

    //Atributos.
    private kmDia : number;

    //Constructor.
    constructor(newName : string, newEdad : number, newArea : string, newKmDia : number) {
        super(newName, newEdad, newArea)
        this.kmDia = newKmDia;
    }
    //Métodos.
}