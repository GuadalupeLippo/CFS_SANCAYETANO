"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var Num = rls.questionInt("ingrese un numero: ");
var numeroMaximo = 0;
while (Num != 0) {
    if (numeroMaximo <= Num)
        numeroMaximo = Num;
    Num = rls.questionInt("ingrese otro numero: ");
}
console.log("el numero mas grande es", numeroMaximo);
