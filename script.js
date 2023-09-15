const datetimeInput = document.getElementById('date');
const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const calculateBtn = document.getElementById('calculateBtn');

let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval);

    const selectedDatetime = new Date(datetimeInput.value);

    updateCountdown(selectedDatetime);

    countdownInterval = setInterval(() => {
        updateCountdown(selectedDatetime);
    }, 1000);
}

function updateCountdown(targetDate) {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        daysDisplay.textContent = hoursDisplay.textContent = minutesDisplay.textContent = secondsDisplay.textContent = '0';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');

    daysDisplay.textContent = days;
    hoursDisplay.textContent = hours;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
}

calculateBtn.addEventListener('click', startCountdown);