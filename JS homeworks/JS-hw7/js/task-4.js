'use strict';

let counterValue = 0;

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener('click', decrementHandler);
incrementBtn.addEventListener('click', incrementHandler);

function decrementHandler() {
    counterValue -= 1;
    value.textContent = counterValue;
}

function incrementHandler() {
    counterValue += 1;
    value.textContent = counterValue;
}