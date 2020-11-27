const geoCode = require('./utils/geoCode');
const weather = require('./utils/forecast');

geoCode('makati', (error, data) => {
  if (error) {
    return console.log(error);
  }

  weather(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log('Error', error);
    }

    console.log(data.location);
    console.log(forecastData);
  });
});
