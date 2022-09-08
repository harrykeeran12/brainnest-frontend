
let display = document.querySelector('.display');
let addButton = document.querySelector('.add');
let subtractButton = document.querySelector('.subtract');
let multiplyButton = document.querySelector('.multiply');
let divideButton = document.querySelector('.divide');
let clearButton = document.querySelector('.clear');
let equalsButton = document.querySelector('.equals');
let backSpaceButton = document.querySelector('.backspace')
let numberList = document.querySelectorAll('.number');

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
function main(){
  addButton.addEventListener('click', ()=>{
    addtoDisplay('+')
  })
  subtractButton.addEventListener('click', () => {
    addtoDisplay('-')
  })
  multiplyButton.addEventListener('click', () => {
    addtoDisplay('x')
  })
  divideButton.addEventListener('click', () => {
    addtoDisplay('/')
  })
  clearButton.addEventListener('click', ()=>{
    return clear();
  })
  backSpaceButton.addEventListener('click', ()=>{
    backSpace()
  })
  numberList.forEach(item => {
    item.addEventListener('click', ()=>{
      addtoDisplay(item.innerHTML)
    })
  });
  equalsButton.addEventListener('click', ()=>{
    let numbers = display.innerHTML.split(/\D+/gm);
    let operator = display.innerHTML.match(/\D+/gm)[0];
    let result = operate(operator, parseInt(numbers[0]), parseInt(numbers[1]))
    replace(result)
  })

}
main()