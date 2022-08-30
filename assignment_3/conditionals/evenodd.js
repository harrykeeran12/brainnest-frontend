function evenOrOdd(num){
  if (num % 2 == 0) {
    return 'even'
  } else {
    return 'odd'
  }
}
let number = 51;
console.log(`${number} is ${evenOrOdd(number)}`)
