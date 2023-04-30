"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimensionArreglo = rls.questionInt("Ingrese la dimensi\u00F3n del arreglo: ");
var nums = new Array(dimensionArreglo);
var numPos = 0;
var numNeg = 0;
var ceros = 0;
for (var index = 0; index < dimensionArreglo; index++) {
    nums[index] = rls.questionInt("Ingrese el numero que quiere poner en el lugar ".concat(index, ": "));
}
for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        numPos = numPos + 1;
    }
    else if (nums[i] < 0) {
        numNeg = numNeg + 1;
    }
    else
        (ceros = ceros + 1);
}
console.log("La cantidad de numeros positivos es: ", numPos);
console.log("La cantidad de numeros negativos es:", numNeg);
console.log("la cantidad de ceros es", ceros);
