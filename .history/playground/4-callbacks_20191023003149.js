setTimeout(() => {
  console.log('Two seconds');
}, 2000);

const names = ['Chris', 'Kimbee', 'Kobe'];
const shortNames = names.filter(name => {
  return name.length <= 5;
});

const geocode = (address, callback) => {
  const data = {
    latitude: 0,
    longitude: 0
  };

  return data;
};

const data = geocode('Manila');
