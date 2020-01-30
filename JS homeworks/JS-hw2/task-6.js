'use strict';

let input;
const numbers = [];
let total = 0;
let userChoice;

do{
    userChoice = prompt('Please enter some number');
    if (Number.isNaN(Number(userChoice)))
    alert(`it was not a number!!!!!!!`);
    else 
    numbers.push(Number(userChoice));
    // total += Number(userChoice);
}while(userChoice!==null)

numbers.pop();

if (numbers.length === 0){
    console.log('You did not enter any numbers((( Good Buy');
}else{
for (let number of numbers){
    total += number;
}
console.log(`Общая сумма чисел равна ${total}`)
}