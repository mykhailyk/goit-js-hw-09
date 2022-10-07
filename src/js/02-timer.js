import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputRef = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
startBtn.disabled = true;

let counter = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(selectedDates) < Date.parse(new Date())) {
      Notify.failure('Please choose a date in the future');
    } else {
      counter = Date.parse(selectedDates[0]) - Date.parse(new Date());
      startBtn.disabled = false;
    }
  },
};

startBtn.addEventListener('click', () => startHandler(counter));

function startHandler() {
  const showTimer = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      (counter = counter - 1000)
    );
    const daysStr = days.toString();
    const hoursStr = hours.toString();
    const minutesStr = minutes.toString();
    const secondsStr = seconds.toString();
    daysRef.textContent =
      daysStr.length > 1 ? daysStr : addLeadingZero(daysStr);
    hoursRef.textContent =
      hoursStr.length > 1 ? hoursStr : addLeadingZero(hoursStr);
    minutesRef.textContent =
      minutesStr.length > 1 ? minutesStr : addLeadingZero(minutesStr);
    secondsRef.textContent =
      secondsStr.length > 1 ? secondsStr : addLeadingZero(secondsStr);
  }, 1000);
}

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.padStart(2, '0');
}
