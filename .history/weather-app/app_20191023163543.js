const geoCode = require('./utils/geoCode');
const weather = require('./utils/forecast');

const address = process.argv[2];

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
