'use strict';

const input = document.querySelector('#validation-input');
const validationLength = input.dataset.length;

input.addEventListener('blur', handleBlur);

function handleBlur(event) {
    if (event.currentTarget.value.length == validationLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        // input.classList.replace('invalid', 'valid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        // input.classList.replace('valid', 'invalid');
    }
}