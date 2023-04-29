"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function calcularPotencia() {
    var base = rls.questionInt("ingrese una base:");
    var exponente = rls.questionInt("ingrese un exponente: ");
    if (exponente < 0) {
        exponente = rls.questionInt("ingrese un numero mayor o igual a cero: ");
    }
    return Math.pow(base, exponente);
}
console.log("el resultado es:", calcularPotencia());
