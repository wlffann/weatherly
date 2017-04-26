import React, { Component } from 'react';
import Axios from 'axios'
import './Forecast.css'

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state={
      zipcode: this.props.zipcode
    }
  }

  getForecast() {
    Axios.get()
  }

  render () {
    return (
      <div className='Forecast'>
        <p>{this.state.zipcode}</p>
      </div>
    )
  }
}

export default Forecast;