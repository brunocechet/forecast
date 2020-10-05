export default function transformObjectData({ coord, main, name: city, sys, weather: weatherData } = {}) {
  const { feels_like: feelsLike, humidity, pressure, temp: actual, temp_max: max, temp_min: min } = main;

  const { description, icon, main: title } = weatherData.pop?.() ?? weatherData;

  const location = {
    city,
    country: sys?.country ?? ''
  };

  const temperature = {
    actual,
    feelsLike,
    max,
    min
  };

  const weather = {
    description,
    icon,
    image: `http://openweathermap.org/img/wn/${icon}@2x.png`,
    title
  };

  return {
    coord,
    humidity,
    location,
    pressure,
    temperature,
    weather
  };
}
