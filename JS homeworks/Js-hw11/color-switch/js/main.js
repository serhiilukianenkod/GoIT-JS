"use strict"
// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
// ];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
const text = document.getElementsByClassName('rgb')[0];
let isActive = false;
let intervalId;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(text);


startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);

function handleStart() {
    if (isActive) return;
    intervalId = setInterval(changeColor, 1000, body);
    isActive = true;
}

function handleStop() {
    clearInterval(intervalId);
    isActive = false;
}

function changeColor(elem) {
    const color = randomColor();
    // const color = colors[randomIntegerFromInterval(0, 5)];
    elem.style = `background-color: ${color};`;
    text.textContent = elem.style.backgroundColor
}

function randomColor() {
    let res = `#`;
    for (let i = 0; i < 6; i++) res += randomIntegerFromInterval(0, 15).toString(16);
    return res;
}

console.dir(body);
console.log(body.style.backgroundColor);