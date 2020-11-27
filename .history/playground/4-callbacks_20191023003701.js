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

const data = geocode('Manila');
console.log(data);
