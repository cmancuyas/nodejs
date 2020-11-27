const geoCode = require('./utils/geoCode');
const weather = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
} else {
  geoCode.geoCode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log('Geocode Error: ', error);
    } else {
    }

    weather.forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log('Forecast Error: ', error);
      } else {
        console.log(latitude, longitude, location);
        console.log(forecastData);
      }
    });
  });
}
