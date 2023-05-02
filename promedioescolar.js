"use strict";
/*Desarrolle un algoritmo que permita cargar alumnos y sus
notas en los tres trimestres.Se debe permitir obtener el
promedio anual (es decir, de sus tres notas) de un alumno
(ingresado por el usuario).Luego de resolverlo, pensar en aprovechar métodos y discutir
cómo representar la información*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var cantidadAlumnos = rls.questionInt("ingrese la cantidad de alumnos:");
var arrAlum = new Array(cantidadAlumnos);
function cargarNombres(arr) {
    for (var i = 0; i < arrAlum.length; i++) {
        arrAlum[i] = rls.question("ingrese un nombre en el lugar ".concat(i + 1, ":"));
    }
}
cargarNombres(arrAlum);
function calcularPromedio(arr) {
    var nota1 = rls.questionInt("ingrese primer nota: ");
    var nota2 = rls.questionInt("ingrese segunda nota:");
    var nota3 = rls.questionInt("ingrese tercer nota: ");
    var promedio = (nota1 + nota2 + nota3) / 3;
    return (promedio);
}
for (var j = 0; j < arrAlum.length; j++) {
    console.log("el promedio de " + arrAlum[j], "es:", calcularPromedio(arrAlum));
}
