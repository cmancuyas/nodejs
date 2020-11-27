const add = (a, b) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve(a + b);
    // }, 2000);
    if (a < 0 || b < 0) {
      return reject('Numbers must be negative');
    }

    resolve(a + b);
  });
};

const doWork = async () => {
  //   throw new Error('Something went wrong');
  //   return 'Kobe';
  const sum = await add(1, 99);
  const sum2 = await add(sum, 50);
  const sum3 = await (sum2 + 40);
  return sum3;
};

doWork()
  .then(result => {
    console.log('result: ', result);
  })
  .catch(e => {
    console.log('Error: ', e);
  });
