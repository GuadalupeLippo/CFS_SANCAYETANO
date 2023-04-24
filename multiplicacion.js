"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numInicial = rls.questionFloat("ingrese numero inicial: ");
var numMaximo = rls.questionFloat("Ingrese numero a multiplicar: ");
var variableDeControl = 0;
var resultado = 0;
while (variableDeControl <= numMaximo) {
    resultado = numInicial * variableDeControl;
    variableDeControl++;
    console.log("el numero ".concat(numInicial, " multiplicado por ").concat(numMaximo, " da como resultado ").concat(resultado, "."));
}
