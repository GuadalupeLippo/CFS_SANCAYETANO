import *as rls from "readline-sync"

let dimensionArreglo : number = rls.questionInt(`Ingrese la dimensión del arreglo: `);
const nums : number[] = new Array (dimensionArreglo);

function cargarNums (arr : number[]) {for (let index : number = 0; index < dimensionArreglo; index++) {
    nums[index] = rls.questionInt(`Ingrese el numero que quiere poner en el lugar ${index}: `);
}
}
cargarNums(nums)

function numPos (arr: number[]) : number {
    let numPos: number= 0
    for (let i =0; i<nums.length; i++) { 
        if(nums[i]>0) {
            numPos=numPos+1
        }
        
    }
    return (numPos)
}
console.log("los numeros positivos son: ",numPos(nums))

function numNeg (arr: number[]) : number {
    let numNeg: number= 0
    for (let i =0; i<nums.length; i++) { 
        if(nums[i]<0) {
            numNeg=numNeg+1
        }
        
    }
    return (numNeg)
}
console.log("los numeros negativos son", numNeg(nums));

function ceros (arr: number[]) : number {
    let ceros: number= 0
    for (let i =0; i<nums.length; i++) { 
        if(nums[i]===0) {
            ceros=ceros+1
        }
        
    }
    return (ceros)
}
console.log("la cantidad de ceros son :", ceros(nums));
