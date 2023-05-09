import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');

btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(options.defaultDate);
    if (selectedDates[0] < options.defaultDate) {
      window.alert('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);
