'use strict';

// declaration
let stopwatch = document.querySelector('#stopwatch');
let startHandler = document.querySelector('#start');
let stopHandler = document.querySelector('#stop');
let resetHandler = document.querySelector('#reset');

let seconds = 0;
let stopwatchInterval;

startHandler.addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(function() {
        seconds++;
        stopwatch.textContent = updateTimer(seconds);
    }, 10);
});

stopHandler.addEventListener('click', function() {
    clearInterval(stopwatchInterval);
});

resetHandler.addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
    seconds = 0;
});

function updateTimer(seconds) {
    let minutes = Math.trunc(seconds / 100)
    seconds = seconds % 100;

    if (String(minutes).length < 2) {
        minutes = `0${minutes}`;
    }

    if (String(seconds).length < 2) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}