import *as rls from "readline-sync"

function cantidadDeDivisores ( num : number) : number {
    let cantidad: number =0
     for(let i = 0; i<=num; i++) 
       {   if (num % i ===0) {
        cantidad++
         }
       
        } 
        return (cantidad)
}

console.log(cantidadDeDivisores(50));
console.log(cantidadDeDivisores(16))
console.log(cantidadDeDivisores(100))
console.log(cantidadDeDivisores(40))
