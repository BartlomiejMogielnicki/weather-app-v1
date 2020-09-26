const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=9bdf00c4def029700be74f09d2d02c3f&query=' +
    longitude +
    ',' +
    latitude +
    '&units=m';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to forecast services.', undefined);
    } else if (response.body.error) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const description = response.body.current.weather_descriptions;
      const temperature = response.body.current.temperature;
      const tempFeelsLike = response.body.current.feelslike;
      callback(
        undefined,
        description +
          '. Current temperature is ' +
          temperature +
          ' degrees and it feels like ' +
          tempFeelsLike +
          ' degrees out.'
      );
    }
  });
};

module.exports = forecast;
