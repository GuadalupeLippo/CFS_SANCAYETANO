let result: string = "";
for (let i: number = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) 
  if (i<100) {result += `${i},`}
  else {result += `${i}.`}
}
console.log(result);