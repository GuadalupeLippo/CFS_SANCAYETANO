import *as rls from "readline-sync"

function esMultiplo(n1 : number, n2 : number) : boolean {
    let result : boolean
    if (n1 % n2 ===0 ) {
         result = true      
    } else (result= false)
    return (result)
}
console.log(esMultiplo(100,10));
console.log(esMultiplo(4,8));
console.log(esMultiplo(8,4));
console.log(esMultiplo(50,5));
console.log(esMultiplo(9,3));
console.log(esMultiplo(10,100));
console.log(esMultiplo(4,8));
console.log(esMultiplo(8,4));
console.log(esMultiplo(5,50));
console.log(esMultiplo(3,9));

