const forecast = (latitude, longitude, error) => {
  const url =
    'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/' +
    latitude +
    ',' +
    longitude +
    '?units=si&lang=lv';
};

module.exports = {
  forecast: forecast
};
