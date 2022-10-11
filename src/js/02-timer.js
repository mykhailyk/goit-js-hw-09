import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const text = document.querySelector('#datetime-picker');
const timerBody = document.querySelector('.timer');
const btnStart = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    }
    btnStart.disabled = false;
  },
};

flatpickr(text, options);

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
  return value.toString().padStart(2, '0');
}

btnStart.addEventListener('click', () => {
  let timer = setInterval(() => {
    let counter = new Date(text.value) - new Date();
    btnStart.disabled = true;
    if (counter >= 0) {
      let Obj = convertMs(counter);
      days.textContent = addLeadingZero(Obj.days);
      hours.textContent = addLeadingZero(Obj.hours);
      minutes.textContent = addLeadingZero(Obj.minutes);
      seconds.textContent = addLeadingZero(Obj.seconds);
      if (counter <= 10000) {
        timerBody.style.color = 'red';
      }
    } else {
      Notiflix.Notify.success('Counter already finished');
      timerBody.style.color = 'black';
      clearInterval(timer);
    }
  }, 1000);
});
