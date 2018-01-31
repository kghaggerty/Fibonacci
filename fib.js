//list of fib numbers

let a = 0
let b = 1
let sum = []

for (let index = 0; index < 10; index++) {
    let c = a + b
    sum.push(c + "")
    a = b
    b = c
  }
  console.log(sum)

//compare palindrones 
  let radar = "radar"
  let newRadar = radar.split("").reverse().join('')
  if(radar === newRadar){
      console.log("success!")
  }