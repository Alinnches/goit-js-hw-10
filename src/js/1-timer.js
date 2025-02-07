import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import '../css/libraries.css'
import pathErrorIcon from "../img/error-icon.svg";

const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');

const timeEl = { 
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let selectedDate = null;
startBtn.disabled = true;

flatpickr(inputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    position: "below",
    onClose(selectedDates) {
        selectedDate = selectedDates[0];

        if (selectedDate <= new Date()) {
            iziToast.error({
                title: "Error!",
                message: "Please choose a date in the future!",
                position: "topRight",
                backgroundColor: "#EF4040",
                titleColor: "#fff",
                messageColor: "#fff",
                iconUrl : pathErrorIcon,
            });
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    },
});

function updateTimer(time) {
    timeEl.daysEl.textContent = time.days.toString().padStart(2, '0');
    timeEl.hoursEl.textContent = time.hours.toString().padStart(2, '0');
    timeEl.minutesEl.textContent = time.minutes.toString().padStart(2, '0');
    timeEl.secondsEl.textContent = time.seconds.toString().padStart(2, '0');
}

function startTimer(targetDate) {
    startBtn.disabled = true;

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(timer);
            updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60 * 60)) / 1000);

        updateTimer({ days, hours, minutes, seconds });
    }, 1000);
}

startBtn.addEventListener('click', () => {
    if (selectedDate) {
        startTimer(selectedDate.getTime());
    }
});