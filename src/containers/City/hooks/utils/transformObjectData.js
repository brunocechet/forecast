export default function transformObjectData({ coord, main, name: city, sys, weather: weatherData } = {}) {
  const { feels_like: feelsLike, humidity, pressure, temp: actual, temp_max: max, temp_min: min } = main ?? {};

  const { description, icon, main: title } = weatherData?.pop?.() ?? weatherData ?? {};

  const location = {
    city,
    country: sys?.country ?? ''
  };

  const temperature = {
    actual: `${parseInt(actual, 10)}º`,
    feelsLike: `${parseInt(feelsLike, 10)}º`,
    max: `${parseInt(max, 10)}º`,
    min: `${parseInt(min, 10)}º`
  };

  const weather = {
    description,
    icon,
    imageUrl: icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : '',
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
