"use strict";
class Password {
    constructor(newLong = 8) {
        this.longitud = newLong;
        this.contraseña = this.generarContraseña(this.longitud);
    }
    generarContraseña(longitud) {
        let password = "";
        const aleatorio = 'abcdefghijklmnopqqrstuvwxyz0123456789';
        for (let i = 0; i < longitud; i++) {
            let elemento = Math.random() * aleatorio.length;
            password += aleatorio.charAt(elemento);
        }
        return password;
    }
    getPassword() {
        return this.contraseña;
    }
}
let pas1 = new Password();
console.log(pas1.getPassword());
