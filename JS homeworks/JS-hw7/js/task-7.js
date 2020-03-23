'use strict';

const fontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

fontSize.addEventListener('input', handleChangeSize);

function handleChangeSize(event) {
    spanText.setAttribute('style', `font-size: ${event.target.value/50}em;`);
}