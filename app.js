const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=9bdf00c4def029700be74f09d2d02c3f&query=53.1780,22.0593';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
