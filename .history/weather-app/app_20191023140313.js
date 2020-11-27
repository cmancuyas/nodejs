const geoCode = require('./utils/geoCode');
const weather = require('./utils/forecast');
// const url =
//   'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/37.8267,-122.4233?units=si&lang=lv';

// request({ url: url, json: true }, (error, response, body) => {
//   const data = JSON.parse(response.body);
//   console.log(data.currently);
//   if (error) {
//     console.log(error);
//     console.log('Unable to connect to Weather App');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(response.body.currently);
//     const degrees = response.body.currently.temperature;
//     const rainPercentage = response.body.currently.precipProbability;
//     const summary = response.body.daily.data[0].summary;
//     console.log(
//       summary +
//         ' ' +
//         'It is currently ' +
//         degrees +
//         ' degrees' +
//         ' out.' +
//         'There is ' +
//         rainPercentage +
//         '%' +
//         ' chance of rain.'
//     );
//     const latitude = response.body.latitude;
//     const longitude = response.body.longitude;
//     console.log('Los Angeles - Latitude: ' + latitude);
//     console.log('Los Angeles - Longitude: ' + longitude);
//   }
// const urlManila =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/manila.json?access_token=pk.eyJ1IjoieWFzaGlybzA4OSIsImEiOiJjazIxbmwxZG8wZGI1M2ZxY3Bnd3ZrdDd1In0.YEMeu1jKRy4Ttf-JmW3Q1g';
// request({ url: urlManila, json: true }, (error, response, body) => {
//   if (error) {
//     console.log('Unable to connect to API Services');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location');
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log('Manila - Latitude: ' + latitude);
//     console.log('Manila - Longitude: ' + longitude);
//   }
// });
// });

geoCode.geoCode('boston', (error, data) => {
  console.log(error);
  console.log(data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
