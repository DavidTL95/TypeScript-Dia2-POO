//Superclass Empleado.

// export class Empleado {
class Empleado {

    //1 - Atributos.

    protected nombre : string;
    protected departamento : string;
    protected edad : number;
    protected esResponsable : boolean;

    //2 - Contructor.

    constructor(newNombre : string, newEdad : number){

        this.nombre = newNombre;
        this.departamento = 'IT';
        this.edad = newEdad;
        this.esResponsable = false;
        
    }

    //3 - Métodos propios.

    setResp(){
        if(this.esResponsable == true){
            this.esResponsable = false;
        }else{
            this.esResponsable = true;
        }
    }
}

// let emple1 = new Empleado('Miguel', 30);
// console.log(emple1)
// emple1.setResp()
// console.log(emple1)
