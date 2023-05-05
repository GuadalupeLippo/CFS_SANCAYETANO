//Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay.Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos. La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada .La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada.//

import *as rls from "readline-sync"
let CantidadBut : number = rls.questionInt("ingrese la cantidad de butacas:")
const arrBut : boolean[] = new Array (CantidadBut)

function cargarArr (arr : boolean[]) {
    for (let i = 0 ; i <arrBut.length; i++) {
        let datoCargado = Math.random()
        if (datoCargado>0.5) {
            arrBut[i]= true
        }
         else {
            arrBut[i]= false    
        }
     console.log(`el numero cargado en la posicion ${i+1} , es ${arrBut[i]}`);
     
    }
   
}
cargarArr(arrBut)

function contadorButVacias (arr : boolean[]) : number { 
    let butVacias : number = 0
    for (let i = 0 ; i <arrBut.length; i++) {
        if (arrBut[i] == false) {
            butVacias = butVacias+1
        }
    }
    return butVacias
}   
console.log(`la cantidad de butacas vacias en el cine son : ${contadorButVacias(arrBut)}`)
