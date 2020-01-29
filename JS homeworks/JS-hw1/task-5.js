'use strict';

const deliveryCountries = ['Китай', 'Чили', 'Австралия', 'Индия', 'Ямайка'];
const deliveryPrices =[100, 250, 170, 80, 120];
let message;
let indexOfCountry;

const userChoise = prompt('В какую страну Вы хотите осуществить пересылку: Китай, Чили, Австралия, Индия, Ямайка');

switch (userChoise.toLowerCase()){
    case deliveryCountries[0].toLowerCase():
        indexOfCountry = 0;
        break;
    
    case deliveryCountries[1].toLowerCase():
        indexOfCountry = 1;
        break;

    case deliveryCountries[2].toLowerCase():
        indexOfCountry = 2;
        break;

    case deliveryCountries[3].toLowerCase():
        indexOfCountry = 3;
        break;
 
    case deliveryCountries[4].toLowerCase():
        indexOfCountry = 4;
        break;
    }
if (indexOfCountry===undefined) alert('В вашей стране доставка не доступна'); 
else{
message = `Доставка в ${deliveryCountries[indexOfCountry]} будет стоить ${deliveryPrices[indexOfCountry]} кредитов`;
console.log(message);}