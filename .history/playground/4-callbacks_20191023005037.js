setTimeout(() => {
  console.log('Two seconds');
}, 2000);

const names = ['Chris', 'Kimbee', 'Kobe'];
const shortNames = names.filter(name => {
  return name.length <= 5;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    };

    callback(data);
  }, 2000);
};

geocode('Manila', data => {
  console.log(data);
});

const add = (num1, num2, sum) => {
  setTimeout(() => {
    const total = num1 + num2;
    sum(total);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum); // Should print: 5
});
