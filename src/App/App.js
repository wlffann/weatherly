import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Forecast from '../Forecast/Forecast'

class App extends Component {
  constructor() {
    super();
    this.state = {zipcode: 80211}
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Weatherly</h2>
        </div>
        <Forecast zipcode={this.state.zipcode}/>
      </div>
    );
  }
}

export default App;
