import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {number:0}
  onClickAlert = () =>{
    alert("now you know how to handle onclick event");
  }
  onClickUpdateNumber = () => {
    this.state.number++
    this.setState({number:this.state.number})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.onClickUpdateNumber}>Hello world!</button>
        <span>number: {this.state.number}</span>
      </div>
    );
  }
}

export default App;
