'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const elements = [];

for (let ingredient of ingredients) {
    let element = document.createElement('li');
    element.textContent = ingredient;
    elements.push(element);
}

document.querySelector('#ingredients').append(...elements);