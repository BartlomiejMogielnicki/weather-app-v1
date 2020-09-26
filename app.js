const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=9bdf00c4def029700be74f09d2d02c3f&query=53.1780,22.0593&units=m';

request({ url: url, json: true }, (error, response) => {
  const temperature = response.body.current.temperature;
  const tempFeels = response.body.current.feelslike;
  const description = response.body.current.weather_descriptions[0];
  console.log(
    description +
      '. It is currently ' +
      temperature +
      ' degrees out. It feels like ' +
      tempFeels +
      ' degrees out.'
  );
});

const geocodingUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFydGVrbW9nIiwiYSI6ImNrZmpnOG95aDA5MWEydW56ZzhkZmQweWQifQ.JkI1ElQocmnXFGEb2vVYSw&limit=1';

request({ url: geocodingUrl, json: true }, (error, response) => {
  const cityName = response.body.features[0].text;
  const longitude = response.body.features[0].center[0];
  const latitude = response.body.features[0].center[1];
  console.log(cityName);
  console.log(longitude, latitude);
});
