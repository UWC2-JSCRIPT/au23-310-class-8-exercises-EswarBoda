let randomValue = 0;

// create a new promise
const randomNumberPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    randomValue = Math.random();

    if (randomValue > 0.5) {
      resolve(randomValue);

    } else if (randomValue <= 0.5) {
      reject(randomValue);
    }

  }, 1000)
})

// call .then() on the new promise, also catch error value if the promise failed
randomNumberPromise.then(() => {
  console.log('success', randomValue);

}).catch((err, value) => {   // promise failed check
  console.log('fail', err);

}).finally ( () => {
  console.log('complete');
})
