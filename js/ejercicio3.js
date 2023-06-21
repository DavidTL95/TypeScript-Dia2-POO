"use strict";
const defPrecio = 100;
const color = 'blanco';
const defConsumo = 'F';
const peso = 5;
class Electrodomestico {
    constructor(newColor = color, newConsumo = defConsumo, newPeso = peso) {
        this.precio = defPrecio;
        this.color = newColor.toLowerCase();
        this.consumo = newConsumo;
        this.peso = newPeso;
    }
    getPrecio() {
        return this.precioFinal();
    }
    getColor() {
        // if (typeof this.color === 'colores'){
        //     return this.color;
        // }
        return this.color;
    }
    getConsumo() {
        return this.consumo;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        this.consumo = letra;
    }
    comprobarColor(color) {
        this.color = color;
    }
    precioFinal() {
        switch (this.consumo) {
            case 'A':
                this.precio += 100;
                break;
            case 'B':
                this.precio += 80;
                break;
            case 'C':
                this.precio += 60;
                break;
            case 'D':
                this.precio += 50;
                break;
            case 'E':
                this.precio += 30;
                break;
            case "F":
                this.precio += 10;
                break;
            default:
                break;
        }
        if (this.peso > 0 && this.peso <= 19) {
            this.precio += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            this.precio += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            this.precio += 80;
        }
        else {
            this.precio += 100;
        }
        return this.precio;
    }
}
let elec1 = new Electrodomestico('rojo', 'B', 50);
console.log(`Color: ${elec1.getColor()}`);
console.log(`Consumo: ${elec1.getConsumo()}`);
console.log(`Peso: ${elec1.getPeso()}`);
console.log(`Precio final: ${elec1.getPrecio()}`);
