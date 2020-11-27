const geoCode = require('./utils/geoCode');
const weather = require('./utils/forecast');

console.log(process.argv);

geoCode.geoCode('manila', (error, data) => {
  if (error) {
    return console.log('Geocode Error: ', error);
  } else {
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
