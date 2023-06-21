//Persona class.

// class Persona {
//     //1 - Atributos de clase.

//         private nombre: string; //Privado solo se puede acceder desde dentro de la clase, o mediante un método.
//         public edad : number;
//         public haceDeporte : boolean;

//     //2 - Contructor de clase. - Como se va a instanciar esta clase y crear objetos a partir de ella.

//         constructor(newNombre : string, newEdad : number, newDeporte : boolean){

//             this.nombre = newNombre;
//             this.edad = newEdad;
//             this.haceDeporte = newDeporte;

//         }

//         //CONSTRUCTOR VACÍO.

//         // constructor(){

//         //     this.nombre = 'newNombre';
//         //     this.edad = 0;
//         //     this.haceDeporte = false;

//         // }

//     //3 - Métodos de class.

//         saluda():void{
//             console.log(`Hola, soy ${this.nombre}.`);
//         }

//         //Getter & Setter.

//         getNombre() : string {
//             return this.nombre;
//         }

//         setNombre(newNom : string) : void{
//             this.nombre = newNom;
//         }

// }

// //Creamos objetos instancias de clase.

// //Objeto 1.

// let per1 = new Persona('David', 27, true);
// console.log(per1);
// per1.saluda();

//  //Objeto 2.

// let per2 = new Persona('Jose', 30, false);
// per2.setNombre('Diana');
// console.log(per2.getNombre());