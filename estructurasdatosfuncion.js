"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimensionArreglo = rls.questionInt("Ingrese la dimensi\u00F3n del arreglo: ");
var nums = new Array(dimensionArreglo);
function cargarNums(arr) {
    for (var index = 0; index < nums.length; index++) {
        nums[index] = rls.questionInt("Ingrese el numero que quiere poner en el lugar ".concat(index + 1, ": "));
    }
}
cargarNums(nums);
function numPos(arr) {
    var numPos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            numPos = numPos + 1;
        }
    }
    return (numPos);
}
console.log("los numeros positivos son: ", numPos(nums));
function numNeg(arr) {
    var numNeg = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            numNeg = numNeg + 1;
        }
    }
    return (numNeg);
}
console.log("los numeros negativos son", numNeg(nums));
function ceros(arr) {
    var ceros = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            ceros = ceros + 1;
        }
    }
    return (ceros);
}
console.log("la cantidad de ceros son :", ceros(nums));
