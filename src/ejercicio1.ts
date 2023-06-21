
type sexType = 'H' | 'M';
const genero : sexType = 'H';

class Persona {

    private nombre : string;
    private edad : number;
    private DNI : string;
    private sexo : sexType;
    private peso : number;
    private altura : number;

    constructor(newDNI : string){

        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = genero;
        this.peso = 0;
        this.altura = 0;

    }

    saluda() : void{
        console.log(`Hola soy ${this.nombre}.`)
    } 
}


let per1 = new Persona("25489632F");
console.log(per1);

let per2 = new Persona("78521436H");
console.log(per2);

let per3 = new Persona("96247536D");
console.log(per3);