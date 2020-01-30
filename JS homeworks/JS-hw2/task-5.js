'use strict';

const checkForSpam = function(message) {
    const isSpamHere = message.toLowerCase().includes('spam');
    const isSaleHere = message.toLowerCase().includes('sale');
    // console.log(isSpamHere, isSaleHere)
    return (isSpamHere || isSaleHere);

  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true