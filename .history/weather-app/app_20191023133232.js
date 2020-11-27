const request = require('request');

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
const geoCode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address +
    '.json?access_token=pk.eyJ1IjoieWFzaGlybzA4OSIsImEiOiJjazIxbmwxZG8wZGI1M2ZxY3Bnd3ZrdDd1In0.YEMeu1jKRy4Ttf-JmW3Q1g';
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
};

geoCode('philadelphia', (error, data) => {
  console.log(error);
  console.log(data);
});
