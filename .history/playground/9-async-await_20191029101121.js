const doWork = async () => {
  return 'Kobe';
};

doWork()
  .then(result => {
    console.log('result', result);
  })
  .catch(e => {
    console.log('e', e);
  });
