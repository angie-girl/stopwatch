const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const div = document.querySelector('.time div');
let number = 0;
let active = false;
let stoper;

const startTime = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza";
        stoper = setInterval(start, 10)

    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(stoper)
    }
}
const start = () => {
    number++
    div.textContent = (number / 100).toFixed(2);
}

const resetTime = () => {
    number = 0;
    div.textContent = "---"
}

btnStart.addEventListener('click', startTime)
btnReset.addEventListener('click', resetTime)