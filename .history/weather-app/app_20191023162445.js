const geoCode = require('./utils/geoCode');
const weather = require('./utils/forecast');

geoCode.geoCode('Boston', (error, data) => {
  if (error) {
    return console.log('Geocode Error: ', error);
  }

  weather.forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log('Forecast Error: ', error);
    } else {
      console.log(data.location);
      console.log(forecastData);
    }
  });
});
