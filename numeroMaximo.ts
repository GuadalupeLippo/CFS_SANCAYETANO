import *as rls from "readline-sync"
let Num : number = rls.questionInt ("ingrese un numero: ")
let numeroMaximo : number = 0

while (Num !=0) {
   

    if (numeroMaximo <= Num)  numeroMaximo = Num

    Num = rls.questionInt ("ingrese otro numero: ")     
    
}
 console.log("el numero mas grande es", numeroMaximo);
