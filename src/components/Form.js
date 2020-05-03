import React from "react";

class Form extends React.Component {
  render() {
    return <form name={'weatherForm'} onSubmit={this.props.showCurrentWeather}>
      <input type="text" name={'city'}/>
      <button>Submit</button>
    </form>
  }
}

export default Form