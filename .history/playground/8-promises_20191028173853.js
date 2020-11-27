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

      add(sum + 5)
        .then(sum2 => {
          console.log(sum2);
        })
        .catch(() => {
          console.log('Error on sum2');
        });
    })
    .catch(e => {
      console.log('An error occured');
    })
);
