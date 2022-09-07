function createNewElement(elementName, elementText){
  let newElement = document.createElement(elementName)
  var text = document.createTextNode(elementText)
  newElement.appendChild(text)
  return newElement

}
let a = createNewElement('p', "'Hey, I'm red!")
let append = document.getElementById('root')
a.style.color = 'red'
append.appendChild(a)