console.log('Starting...');

setTimeout(() => {
  console.log('2 second timer');
}, 2000);

const listLocations = locations => [
  locations.forEach(location => {
    console.log(location);
  })
];

const myLocations = ['Makati', 'Taguig'];

const locations = listLocations(mylocations);
console.log(locations);

console.log('Stopping...');
