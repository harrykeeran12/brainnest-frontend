function greater(a, b){
  if (a == b) {
    return null
  }
  else if(a > b){
    return a;
  }
  else{
    return b;
  }
}

let num1 = 9
let num2 = 6
console.log(`The greater number out of ${num1} and ${num2} is ${greater(num1, num2)}`)