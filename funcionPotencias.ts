import *as rls from "readline-sync"

function calcularPotencia() : number {
    let base : number =rls.questionInt("ingrese una base:")
    let exponente : number = rls.questionInt("ingrese un exponente: ")

    if (exponente<0) {
       exponente=rls.questionInt("ingrese un numero mayor o igual a cero: ");
    }
    
   
    return Math.pow(base,exponente)
   
} 

console.log("el resultado es:", calcularPotencia())
