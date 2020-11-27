const geoCode = require('./utils/geoCode');
const weather = require('./utils/forecast');

geoCode.geoCode('makati', (error, data) => {
  if (error) {
    return console.log(error);
  }

  weather.forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log('Error', error);
    }

    console.log(data.location);
    console.log(forecastData);
  });
});
