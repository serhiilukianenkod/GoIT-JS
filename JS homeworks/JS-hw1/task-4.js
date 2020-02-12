'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let message;

const userChoice = prompt('Какое количество дроидов Вы хотите преобрести?');

// console.log(userChoice);
if (userChoice === null) {
    message = 'Отменено пользователем!';
} else {
    const totalPrice = Number(userChoice) * pricePerDroid;
    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    } else {
        message = `Вы купили ${Number(userChoice)} дроидов, на счету осталось ${credits-totalPrice} кредитов.`;
    }
}

console.log(message);