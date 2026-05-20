const button = document.getElementById("getWeatherButton");
button.addEventListener("click", () => {
  return fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=8edc48f3924abad516c6916169b7f11e")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherInfo = document.querySelector(".weather-info");
      weatherInfo.innerHTML = `
        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
      `;
    })
    .catch((error) => console.error("Error fetching weather data:", error));    
    
});
