const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/' +
    latitude +
    ',' +
    longitude +
    '?units=si&lang=lv';

  request({ url: url }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to Weather App');
    } else if (response.body.error) {
      console.log('Unable to find location');
    } else {
      console.log(response.body.currently);
      const degrees = response.body.currently.temperature;
      const rainPercentage = response.body.currently.precipProbability;
      const summary = response.body.daily.data[0].summary;
      console.log(
        summary +
          ' ' +
          'It is currently ' +
          degrees +
          ' degrees' +
          ' out.' +
          'There is ' +
          rainPercentage +
          '%' +
          ' chance of rain.'
      );
      const latitude = response.body.latitude;
      const longitude = response.body.longitude;
      console.log('Latitude: ' + latitude);
      console.log('Longitude: ' + longitude);
    }
  });
};

module.exports = {
  forecast: forecast
};
