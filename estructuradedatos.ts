import *as rls from "readline-sync"
let dimensionArreglo : number = rls.questionInt(`Ingrese la dimensión del arreglo: `);
const nums : number[] = new Array (dimensionArreglo);
let numPos: number = 0
let numNeg: number = 0
let ceros : number = 0
 

for (let index : number = 0; index < dimensionArreglo; index++) {
    nums[index] = rls.questionInt(`Ingrese el numero que quiere poner en el lugar ${index}: `);
}
for (let i = 0 ; i < nums.length ; i++){
    if(nums[i]>0){
     numPos = numPos+1
     
    }  
        else if(nums[i]<0) { 
            numNeg= numNeg+1 
        } 
        else
            (ceros= ceros+1)
}           
console.log("La cantidad de numeros positivos es: ", numPos)
console.log("La cantidad de numeros negativos es:", numNeg) 
console.log("la cantidad de ceros es", ceros) 
