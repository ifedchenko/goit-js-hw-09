import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(event.target.elements.delay.value);
  const step = parseInt(event.target.elements.step.value);
  const amount = parseInt(event.target.elements.amount.value);

  if (delay <= 0 || isNaN(delay)) {
    // console.log(`Invalid delay value: ${delay}`);
    Notiflix.Notify.warning(`Invalid delay value: ${delay}`);
    return;
  }

  if (step <= 0 || isNaN(step)) {
    // console.log(`Invalid step value: ${step}`);
    Notiflix.Notify.warning(`Invalid delay value: ${step}`);
    return;
  }

  if (amount <= 0 || isNaN(amount)) {
    // console.log(`Invalid amount value: ${amount}`);
    Notiflix.Notify.warning(`Invalid delay value: ${amount}`);

    return;
  }

  let currentDelay = delay;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, currentDelay).then(
      ({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      },
      ({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    );
    currentDelay += step;
  }
});
