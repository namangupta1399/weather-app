import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Spinner from "./Spinner";
import WeatherCard from "./WeatherCard";

export class App extends Component {
  state = {
    searchText: "",
    lat: "",
    long: "",
    error: "",
    loading: false,
    data: null,
  };

  initialState = { ...this.state };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      this.setState({ data: response.data, error: "", loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getCurrentLocation = async () => {
    this.setState({ loading: true });
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setState({
          ...this.initialState,
          lat,
          long,
        });
        this.getWeatherByCoord();
      },
      (error) => {
        this.setState({ error: error.message, loading: false });
      }
    );
  };

  getWeatherByCoord = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      this.setState({ data: response.data, error: "", loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  onSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      if (this.state.searchText) {
        this.setState({ loading: true });
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchText}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        this.setState({ data: response.data, error: "", loading: false });
      } else {
        this.setState({ error: "Location cannot be blank" });
      }
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-light bg-light">
            <div className="container">
              <span className="navbar-brand mb-0 h1">Weather App</span>
            </div>
          </nav>
        </header>
        {this.state.loading ? <Spinner /> : this.state.data ? <WeatherCard data={this.state.data} /> : null}
        <section className="container">
          <Search
            searchValue={this.state.searchText}
            handleChange={this.handleChange}
            onSearchSubmit={this.onSearchSubmit}
            getCurrentLocation={this.getCurrentLocation}
            error={this.state.error}
          />
        </section>
        <footer className="p-3">
          <div>Designed &amp; developed by <a href="https://www.linkedin.com/in/namangupta1399/" target="_blank" className="font-weight-bold">Naman Gupta</a></div>
        </footer>
      </div>
    );
  }
}

export default App;
