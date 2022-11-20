import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', getFormValues);
function getFormValues(event) {
  event.preventDefault();
  let firstDelay = event.target.delay.value;
  let stepDelay = event.target.step.value;
  let amount = event.target.amount.value;
  // console.log(firstDelay)
  createNewPromises(Number(firstDelay), Number(stepDelay), Number(amount));
}

function createNewPromises(firstDelay, step, amount) {
  let newStep = firstDelay;
  // console.log(firstDelay)
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, newStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    newStep += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setInterval(() => {
      if (shouldResolve) {
        resolve(position, delay);
      } else {
        reject(position, delay);
      }
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
