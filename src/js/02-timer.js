import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  btnStart: document.querySelector('[data-start]'),
  inputDate: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.setAttribute('disabled', true);

let remainingTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.btnStart.removeAttribute('disabled');
      remainingTime = selectedDate - currentDate;
      // console.log('selected date: ' + selectedDate);
      // console.log('current date: ' + currentDate);
    }
  },
};

flatpickr(refs.inputDate, options);

refs.btnStart.addEventListener('click', onStartCountdownTimer);

function onStartCountdownTimer() {
  const timerInit = setInterval(() => {
    refs.btnStart.setAttribute('disabled', true);
    refs.inputDate.setAttribute('disabled', true);
    if (remainingTime >= 1000) {
      remainingTime -= 1000;
      timeOnStart(remainingTime);
    } else {
      clearInterval(timerInit);
      refs.btnStart.removeEventListener('click', onStartCountdownTimer);
      refs.btnStart.setAttribute('disabled', true);
      refs.inputDate.removeAttribute('disabled');
    }
  }, 1000);
}

function timeOnStart(remainingTime) {
  const { days, hours, minutes, seconds } = convertMs(remainingTime);
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// const timer = {
//   intervalId: null,
//   isActive: false,

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = new Date();
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = new Date();
//       const timeDiff = currentTime - startTime;
//       time(timeDiff);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };
