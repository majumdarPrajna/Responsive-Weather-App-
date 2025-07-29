const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");

  if (!city) {
    weatherInfo.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    weatherInfo.innerHTML = "Loading...";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    weatherInfo.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌤️ Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    weatherInfo.innerHTML = "Error: " + error.message;
  }
}
