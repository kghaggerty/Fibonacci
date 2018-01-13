//list of fib numbers less than 500  [1,1,2,3,5,8,13,21..]

let a = 0
let b = 1
let sum = ""

for (let index = 0; index < 13; index++) {
    let sum = a + b
    console.log(sum);
    a = b;
    b = sum;
    
}