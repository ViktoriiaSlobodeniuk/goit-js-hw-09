const firstDelayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const firstDelay = Number(firstDelayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  for (let position = 1; position <= amount; position += 1) {
    const delay = firstDelay + step * (position - 1);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const result = { position, delay };
      if (shouldResolve) {
        return resolve(result);
      } else {
        return reject(result);
      }
    }, delay);
  });
}
