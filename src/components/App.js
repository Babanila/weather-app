import React, { Component } from "react"
import axios from "axios"
import WeatherDetails from "./Structure"
import "../styles/App.css"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: "",
      value: "",
      isLoading: true,
      weatherData: {}
    }
  }

  componentDidMount() {
    this.fetchWeatherData()
  }

  componentDidUpdate() {
    this.fetchWeatherData()
  }

  fetchWeatherData = async () => {
    const { city } = this.state
    const url = `http://localhost:3333/${city}`
    try {
      const { data } = await axios.get(url)
      this.setState({
        weatherData: data,
        isLoading: false
      })
    } catch (_) {}
  }

  //   handleInputChange = ({ target }) => {
  //     const { value } = target
  //     console.log(value)
  //   }

  handleSubmit = ({ target }) => {
    const { value } = target

    this.setState({
      city: value
    })
  }

  render() {
    const { value, weatherData } = this.state

    return (
      <div>
        <WeatherDetails data={weatherData} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City Name"
            name="city"
            value={value}
            // onChange={this.handleInputChange}
          />
          <button type="submit" value="Submit">
            Enter
          </button>
          <p className="author">Designed By Babanila</p>
        </form>
      </div>
    )
  }
}
