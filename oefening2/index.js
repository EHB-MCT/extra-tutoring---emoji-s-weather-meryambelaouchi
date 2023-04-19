"use strict";

const weatherApp = {
  init() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function () {
      console.log('ok');
    });
  },
  fetchWeatherData(city) {

  },
  renderWeatherData(weatherData) {

    //Template
    /*
    <h2>Weather</h2>
        <ul>
          <li>Average tempature: ${temp} °C</li>
          <li>Min tempature: ${temp_min} °C</li>
          <li>Max tempature: ${temp_max} °C</li>
          <li>Description: ${description}</li>
        </ul>
    */

  }
}