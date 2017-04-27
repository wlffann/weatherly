import React, { Component } from 'react';
import logo from '../logo.svg';
import Forecast from '../Forecast/Forecast'
import ZipcodeSearch from '../ZipcodeSearch/ZipcodeSearch'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {zipcode: 80211}
    this.setZip = this.handler.bind(this)
  }

  handler(newZip) {
    this.setState({
      zipcode: newZip
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weatherly</h2>
          <ZipcodeSearch text="Enter your zipcode" setZip={this.setZip} />
        </div>
        <Forecast zipcode={this.state.zipcode} />
      </div>
    );
  }
}

export default App;
