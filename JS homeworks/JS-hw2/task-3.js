'use strict';

const findLongestWord = function (string) {
    let longestWord = '';
    const arrayFromString = string.split(' ');
    for (let i = 0; i < arrayFromString.length; i++) {
        if ((arrayFromString[i]).length > longestWord.length)
            longestWord = arrayFromString[i];

    }
    return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'