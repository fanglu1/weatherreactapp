import React from 'react';
import "./App.css";

const App = () => {
  const weather = {
    apiKey: "3b81ebede925f70faef548f7e16c5982",
    fetchWeather: function (zip) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${this.apiKey}`
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, feels_like, temp_max, temp_min, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".desc").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".feelsLike").innerText =
        "Feels like: " + feels_like;
      document.querySelector(".wind").innerText =
        "Wind Speed is: " + speed + " mph";
      document.querySelector(".low").innerText = "Low of: " + temp_min;
      document.querySelector(".high").innerText = "High of: " + temp_max;
      document.querySelector(".humid").innerText = "Humidity: " + humidity;
    },
    search: function () {
      this.fetchWeather(document.querySelector(".searchButn").value);
    },
  };
  const Weather = () => {
    return (weather.search());
  };

  const date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
       <nav className="flex-container">
      <div className="header">
        <h1 className="header-text">The Weather</h1>
      </div>
    </nav>
    <br></br>
      <div className="search">
        <input
          type="text"
          class="searchButn"
          placeholder="Enter Your Zip Code"
        />
        <button onClick={Weather}>Search</button>
      </div>
      <br></br>
      <div className="climate">
        <h2 className="title">Wow It's Nice/Not Nice Out</h2>
        <div className="date">{date}</div>
        <h3 className="city">City</h3>
        <div className="temp"></div>
        <div className="feelsLike">Feels Like: </div>
        <div className="humid">Humidity: </div>
        <div className="flex">
          <img src="" alt="" className="icon" />
          <div className="desc"></div>
        </div>
        <div className="high">High of:</div>
        <div className="low">Low of:</div>
        <div className="wind">Wind speed:</div>
        <br></br>
      </div>
    </div>
  );
};

export default App;
