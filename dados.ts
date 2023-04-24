import *as rls from "readline-sync"
const carasDado : number = 6;
let CantidadDados : number = rls.questionInt("ingrese la cantidad de dados: ");
let denominador = Math.pow(carasDado, CantidadDados);
let probabilidadSacarSeis : number = 1/denominador

console.log("el denominador es", denominador, "y la probabilidad de sacar todos seis es", probabilidadSacarSeis*100,"%.")


