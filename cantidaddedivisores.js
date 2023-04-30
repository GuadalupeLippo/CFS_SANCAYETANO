"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cantidadDeDivisores(num) {
    var cantidad = 0;
    for (var i = 0; i <= num; i++) {
        if (num % i === 0) {
            cantidad++;
        }
    }
    return (cantidad);
}
console.log(cantidadDeDivisores(50));
console.log(cantidadDeDivisores(16));
console.log(cantidadDeDivisores(100));
console.log(cantidadDeDivisores(40));
