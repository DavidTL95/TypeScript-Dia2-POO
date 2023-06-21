"use strict";
const genero = 'H';
class Persona {
    constructor(newDNI) {
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = genero;
        this.peso = 0;
        this.altura = 0;
    }
    saluda() {
        console.log(`Hola soy ${this.nombre}.`);
    }
}
let per1 = new Persona("25489632F");
console.log(per1);
let per2 = new Persona("78521436H");
console.log(per2);
let per3 = new Persona("96247536D");
console.log(per3);
