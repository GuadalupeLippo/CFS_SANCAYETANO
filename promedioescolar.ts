/*Desarrolle un algoritmo que permita cargar alumnos y sus 
notas en los tres trimestres.Se debe permitir obtener el 
promedio anual (es decir, de sus tres notas) de un alumno 
(ingresado por el usuario).Luego de resolverlo, pensar en aprovechar métodos y discutir 
cómo representar la información*/

import *as rls from "readline-sync"
let cantidadAlumnos : number = rls.questionInt("ingrese la cantidad de alumnos:");
const arrAlum : string[] = new Array(cantidadAlumnos)


function cargarNombres( arr: string[]) {
    for ( let i=0; i<cantidadAlumnos; i++) {
        arrAlum[i]= rls.question ("ingrese un nombre:")
    }
    
}
cargarNombres(arrAlum)

function calcularPromedio ( arr: string[]) : number { 
    let nota1 : number= rls.questionInt("ingrese primer nota: ")
    let nota2 : number= rls.questionInt("ingrese segunda nota:")
    let nota3 : number= rls.questionInt("ingrese tercer nota: ")
    let promedio : number = (nota1+nota2+nota3)/3
    return(promedio)
}
for (let j= 0 ; j<arrAlum.length; j ++){
    console.log("el promedio de "+arrAlum[j] ,"es:", calcularPromedio(arrAlum));
    }

