const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (!process.argv[2]) {
  console.log('Please enter a location...');
} else {
  const location = process.argv[2];
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
