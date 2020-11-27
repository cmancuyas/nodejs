console.log('client side js file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then(response => {
//   response.json().then(data => {
//     console.log(data);
//   });
// });

const forecast = fetch('/weather').then(response => {
  response.json().then(forecastData => {
    return forecastData;
  });
});
