'use strict';
let boxes = '';
const createBtn = document.querySelector('#controls button[data-action="render"]');
const deleteBtn = document.querySelector('#controls button[data-action="destroy"]');
const divBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
deleteBtn.addEventListener('click', destroyBoxes);


function createBoxes() {
    let cou = document.querySelector('#controls input').value;
    divBoxes.innerHTML = '';
    boxes = '';
    for (let i = 0; i < cou; i += 1)
        boxes += `<div style="width: ${30+i*10}px; background: #${(Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()}; height: ${30+i*10}px;"></div>`;
    divBoxes.insertAdjacentHTML('afterbegin', boxes);
}

function destroyBoxes() {
    divBoxes.innerHTML = '';
    boxes = '';
}