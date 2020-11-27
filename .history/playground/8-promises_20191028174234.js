const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([7, 4, 1]);
    reject('things went wrong');
  }, 2000);
});

doWorkPromise
  .then(result => {
    console.log('Success!', result);
  })
  .catch(error => {
    console.log('Error!', error);
  });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

console.log(
  add(10, 5)
    .then(sum => {
      console.log(sum);
    })
    .catch(e => {
      console.log('An error occured');
    })
);
