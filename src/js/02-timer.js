import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  userSelectedDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),

  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() > selectedDates[0]) {
    //   return window.alert('Please choose a date in the future');
    return Notiflix.Notify.warning('Please choose a date in the future');
    }
    refs.startBtn.disabled = false;
  },
};

const fp = flatpickr(refs.userSelectedDate, options);

refs.startBtn.addEventListener('click', startTimer);

function startTimer() {
  const selectedUserDate = fp.selectedDates[0];

  const intervalId =  setInterval(() => {
    const currentTime = Date.now();
    msToDate = selectedUserDate - currentTime;
    console.log("🚀 ~ file: 02-timer.js ~ line 42 ~ intervalId ~ msToDate", msToDate);

    innerDateHtml(addLeadingZero(convertMs(msToDate)));


    if (msToDate <= 1000) {
      clearInterval(intervalId)
    }
  }, 1000);

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
    days = days.toString().padStart(2, 0)
    hours = hours.toString().padStart(2, 0)
    minutes = minutes.toString().padStart(2, 0)
    seconds = seconds.toString().padStart(2, 0)

    return { days, hours, minutes, seconds }
}

function innerDateHtml({ days, hours, minutes, seconds }){
    refs.days.textContent = days
    refs.hours.textContent = hours
    refs.minutes.textContent = minutes
    refs.seconds.textContent = seconds
}