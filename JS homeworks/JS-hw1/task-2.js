'use strict';

const total = 100;
const ordered = 50;
let message;

if (total - ordered < 0){
    message = 'На складе недостаточно твоаров!';
}
else{
  message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);