import React, { Component } from 'react';
import './ZipcodeSearch.css'

class ZipcodeSearch extends Component {
  constructor(props){
    super(props);
    this.state={newZip: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({newZip: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.setZip(this.state.newZip);
  }

  render() {
    return (
      <div className="ZipcodeSearch">
        <form onSubmit={this.handleSubmit}>
          <input name="zipcode" type="text" value={this.state.newZip} onChange={this.handleChange}></input>
          <input type='submit' value='Search'/>
        </form>
      </div>
    )
  }
}

export default ZipcodeSearch;