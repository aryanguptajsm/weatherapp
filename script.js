
const button = document.getElementById("getWeatherButton");
const cityInput = document.getElementById("city");

function getWeatherIcon(weatherMain) {
  const iconMap = {
    'Clear': 'images/clear.png',
    'Clouds': 'images/clouds.png',
    'Rain': 'images/rain.png',
    'Drizzle': 'images/drizzle.png',
    'Snow': 'images/snow.png',
    'Mist': 'images/mist.png',
    'Smoke': 'images/mist.png',
    'Haze': 'images/mist.png',
    'Dust': 'images/mist.png',
    'Fog': 'images/mist.png',
    'Sand': 'images/mist.png',
    'Ash': 'images/mist.png',
    'Squall': 'images/wind.png',
    'Tornado': 'images/wind.png'
  };
  return iconMap[weatherMain] || 'images/clear.png';
}

function updateWeatherDisplay(data) {
  const temperature = `${(data.main.temp - 273.15).toFixed(2)}°C`;
  document.getElementById("temperature").textContent = temperature;
  document.getElementById("weatherDescription").textContent = data.weather[0].description;
  document.getElementById("humidityValue").textContent = `${data.main.humidity}%`;
  document.getElementById("windSpeedValue").textContent = `${data.wind.speed} m/s`;
  document.getElementById("cityName").textContent = data.name;
  
  // Update weather icon using local images
  const weatherIcon = getWeatherIcon(data.weather[0].main);
  document.getElementById("weatherIcon").src = weatherIcon;
  document.getElementById("weatherIcon").alt = data.weather[0].description;
}

function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8edc48f3924abad516c6916169b7f11e`)
    .then((response) => response.json())
    .then((data) => updateWeatherDisplay(data))
    .catch((error) => console.error("Error fetching weather data:", error));
}

button.addEventListener("click", () => {
  const city = cityInput.value.trim() || defaultCity;
  fetchWeather(city);
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  fetchWeather("London");
});
