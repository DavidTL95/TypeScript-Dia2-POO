//Clase hija de Empleado.

class Repartidor extends Empleado{

    //1 - Atributos.
        protected area : string;

    //2 - Contrusctor.

        constructor(newName : string, newEdad : number, newArea : string){
            super(newName,newEdad);
            this.area = newArea;
        }

    //3 - Métodos.
        getArea() : string{
            return this.area;
        }

        setArea(newArea : string) : void{
            this.area = newArea;
        }
}

//Instancia de repartidor.
