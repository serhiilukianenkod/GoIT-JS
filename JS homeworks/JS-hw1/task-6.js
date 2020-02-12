'use strict';

let input;
let total = 0;
let userChoice;

do {
    userChoice = prompt('Please enter some number');
    if (Number.isNaN(Number(userChoice)))
        alert(`it was not a number!!!!!!!`);
    else
        total += Number(userChoice);
} while (userChoice !== null)

console.log(`Общая сумма чисел равна ${total}`)