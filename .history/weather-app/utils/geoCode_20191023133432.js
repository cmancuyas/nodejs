const request = require('request');
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