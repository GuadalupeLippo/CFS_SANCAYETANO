"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombre = rls.question("ingrese el nombre del alumno: ");
var partePractica;
var parteProblema;
var parteTeorica;
var notaFinal;
while (nombre != "") {
    partePractica = rls.questionFloat("Ingrese nota de la parte practica:");
    if (partePractica >= 0 && partePractica <= 10) {
        parteProblema = rls.questionFloat("Ingrese nota de la parte problematica:");
        if (parteProblema >= 0 && parteProblema <= 10) {
            parteTeorica = rls.questionFloat("Ingrese nota de la parte teorica:");
            if (parteTeorica >= 0 && parteTeorica <= 10) {
                notaFinal = partePractica * 0.1 + parteProblema * 0.5 + parteTeorica * 0.4;
                console.log("El resultado de la parte Practica es de: ".concat(partePractica * 0.1, ".\nEl resultado de la parte problematica es de: ").concat(parteProblema * 0.5, "\nEl resultado de la parte Teorica es de: ").concat(parteTeorica * 0.4, "\nSu nota final es de: ").concat(notaFinal));
            }
            else {
                console.log("error en la carga de datos");
            }
        }
        else {
            console.log("error en la carga de datos");
        }
    }
    else {
        console.log("error en la carga de datos");
    }
    nombre = rls.question("Ingrese nombre del siguiente alumno: ");
}
console.log("gracias por utilizar el programa");
