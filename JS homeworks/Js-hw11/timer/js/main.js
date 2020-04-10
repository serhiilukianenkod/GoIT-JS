'use strict';

const targetDate = 'Apr 14, 2021';
let time;
time = new Date(targetDate).getTime() - Date.now();
const _days = document.querySelector('[data-value="days"]');
const _hours = document.querySelector('[data-value="hours"]');
const _mins = document.querySelector('[data-value="mins"]');
const _secs = document.querySelector('[data-value="secs"]');

const test = document.querySelector('[data-value="test-secs"]');
const before = document.querySelector('[data-value="test-secs"]  + :before');

console.dir(before);

setInterval(updateTime, 1000);

function updateTime() {
  time = new Date(targetDate).getTime() - Date.now();
  updateClockface(time);
}

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  _days.textContent = `${days}`;
  _hours.textContent = `${hours}`;
  _mins.textContent = `${mins}`;
  _secs.textContent = `${secs}`;

  test.textContent = `${secs % 10}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
