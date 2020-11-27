const request = require('request');
const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/' +
    latitude +
    ',' +
    longitude +
    '?units=si&lang=en';

  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Weather App', '');
    } else if (data.error) {
      callback('Unable to find location', '');
    } else {
      const degrees = data.currently.temperature;
      const rainPercentage = data.currently.precipProbability;
      const _summary = data.daily.data[0].summary;
      const summary =
        _summary +
        ' ' +
        'It is currently ' +
        degrees +
        ' degrees' +
        ' out. ' +
        'There is ' +
        rainPercentage +
        '%' +
        ' chance of rain. ';
      const latitude = data.latitude;
      const longitude = data.longitude;
      callback(summary + 'Latitude: ' + latitude + ' Longitude: ' + longitude);
    }
  });
};

module.exports = {
  forecast: forecast
};
