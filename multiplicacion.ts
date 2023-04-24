import *as rls from "readline-sync"
let numInicial : number = rls.questionFloat("ingrese numero inicial: ");
let numMaximo : number = rls.questionFloat ("Ingrese numero a multiplicar: ");
let variableDeControl : number = 0;
let resultado : number = 0;

while (variableDeControl <= numMaximo) {
     resultado= numInicial*variableDeControl 
    variableDeControl++
    console.log(`el numero ${numInicial} multiplicado por ${numMaximo} da como resultado ${resultado}.`);
    
} 

