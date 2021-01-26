import React, { Component } from "react";

export class WeatherCard extends Component {
  render() {
    const { weather, main, sys, name, wind } = this.props.data;
    return (
      <div className="container mt-4">
        <div className="card p-4 w-50 mx-auto">
          <div className="row">
            <div className="col-4 text-center">
              <img
                className="weather-icon w-100"
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
              {weather[0].description}
            </div>
            <div className="col-8">
              <h3 className="font-weight-bold">
                {name}, {sys.country}
              </h3>
              <hr />
                Feels like: {main.feels_like}&deg;C<br />
                Wind: {wind.speed} m/s<br />
                Humidity: {main.humidity} %<br />
                Pressure: {main.pressure} hPa<br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
