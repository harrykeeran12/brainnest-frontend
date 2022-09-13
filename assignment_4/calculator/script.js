
let display = document.querySelector('.display');
let addButton = document.querySelector('.add');
let subtractButton = document.querySelector('.subtract');
let multiplyButton = document.querySelector('.multiply');
let divideButton = document.querySelector('.divide');
let clearButton = document.querySelector('.clear');
let equalsButton = document.querySelector('.equals');
let backSpaceButton = document.querySelector('.backspace')
let decimalButton = document.querySelector('.decimal')
let numberList = document.querySelectorAll('.number');
let wipe = true

function add(a,b){
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  if (b !== 0){
    if (Number.isInteger(a / b)){
      return a / b
    }
    else{
      return Math.fround(a / b)
    }
  }
  else{
    console.error('Please do not try and divide by 0.')
    return 0
  }
  
  
}
function operate(operator, a, b){
  switch (operator) {
    case '+':
      return add(a,b)
    case '-':
      return subtract(a, b)
    case 'x':
      return multiply(a, b)
    case '/':
      return divide(a, b) 
  }
}
function clear(){
  display.innerHTML = ''
}
function addtoDisplay(number){
  display.innerHTML += number
}
function replace(number){
  display.innerHTML = number
}
function isBlank(){
  if (display.innerHTML == 0) {
    return true
  }
  else{
    return false
  }
  
}
function backSpace(){
  if (display.innerHTML.length > 0){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
  }
  
}
function getOperatorNumber(){
  let operators = display.innerHTML.match(/[\+x\/\-]/gm);
  if (operators == null){
    return 0
  }
  return operators.length
}
function getDecimalPointNumber(){
  let points = display.innerHTML.match(/./gm);
  if (points == null) {
    return 0
  }
  return points.length
}
function main(){
  addButton.addEventListener('click', ()=>{
    if (getOperatorNumber() > 0) {
      equalsButton.click()
    }
    wipe = false
    addtoDisplay('+')
    
  })
  subtractButton.addEventListener('click', () => {
    if (getOperatorNumber() > 0) {
      equalsButton.click()
    }
    wipe = false
    addtoDisplay('-')
  })
  multiplyButton.addEventListener('click', () => {
    if (getOperatorNumber() > 0) {
      equalsButton.click()
    }
    wipe = false
    addtoDisplay('x')
  })
  divideButton.addEventListener('click', () => {
    if (getOperatorNumber() > 0) {
      equalsButton.click()
    }
    wipe = false
    addtoDisplay('/')
  })
  clearButton.addEventListener('click', ()=>{
    return clear();
  })
  backSpaceButton.addEventListener('click', ()=>{
    backSpace()
  })
  decimalButton.addEventListener('click', ()=>{
    if (getDecimalPointNumber() < 2) {
      wipe = false
      addtoDisplay('.')
    }
    
  })
  numberList.forEach(item => {
    item.addEventListener('click', ()=>{
      if (wipe){
        clear()
        wipe = false
      }
      addtoDisplay(item.innerHTML)
      
    })
  });
  equalsButton.addEventListener('click', ()=>{
    let numbers = display.innerHTML.split(/[\+x\/\-]/gm);
    console.log(numbers)
    let operator = display.innerHTML.match(/[\+x\/\-]/gm)[0];
    console.log(operator)
    if (numbers.length === operator.length * 2){
      let result = operate(operator, parseFloat(numbers[0]), parseFloat(numbers[1]))
      console.log(result)
      replace(result)
      wipe = true
    }
  })


}
document.addEventListener('keypress', (e) => {
  console.log(e.key)
  switch (e.key) {
    case '+':
      addButton.click()
    case '-':
      subtractButton.click()
      break;
    case '*':
      multiplyButton.click()
      break;
    case '/':
      divideButton.click()
      break;
    case "Backspace":
      backSpaceButton.click()
      break;
    case 'C':
      clearButton.click()
      break;
    case '.':
      decimalButton.click()
      break;
    
  }
})
main()