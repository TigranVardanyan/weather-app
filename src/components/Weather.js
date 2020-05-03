import React from "react";

class Weather extends React.Component{
  render() {
    return <div>
      {this.props.error == 0 &&
      <ul>
        <li>City : {this.props.city}</li>
        <li>Temp now : {this.props.temp}</li>
        <li>Wind speed : {this.props.wind}</li>
      </ul>
      }
      {this.props.error != 0 && <div>Please enter city</div>}
    </div>
  }
}

export default Weather