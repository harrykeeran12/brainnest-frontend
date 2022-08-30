/* Find the area of a triangle with sides 5, 6 and 7. */
const sideOne = 5;
const sideTwo = 6;
const sideThree = 7;

let perimeter = (sideOne + sideTwo + sideThree) / 2

let area = Math.sqrt(perimeter*(perimeter - sideOne) * (perimeter - sideTwo) * (perimeter - sideThree));

console.log(`The area of a triangle with sides ${sideOne}, ${sideTwo} and ${sideThree} is ${area}`)