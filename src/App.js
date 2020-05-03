import React from 'react';
import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css';

const API_KEY = '698d4876a40308b354b40e038a3fcf26';

class App extends React.Component{
  state = {
    temp:undefined,
    city:undefined,
    wind:undefined,
    error:undefined
  };

  showCurrentWeather = async (e) => {
    e.preventDefault();
    let city = document.forms.weatherForm.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    this.setState({
      temp:data.list[0].main.temp,
      city:data.city.name,
      wind:data.list[0].wind.speed,
      error:data.message
    });
    console.log(this.state)
  };
  render() {
    return (
      <div>
        <Form showCurrentWeather={this.showCurrentWeather}/>
        <Weather temp={this.state.temp}
                 city={this.state.city}
                 wind={this.state.wind}
                 error={this.state.error}
        />
      </div>
    )
  }

}

export default App;
