// Type castings allow you to convert a variable from one type to another.

const textInput = document.getElementById('name') as HTMLInputElement;
const numberInput = <HTMLInputElement> document.getElementById('age');

console.log(textInput.value);
console.log(numberInput.value);