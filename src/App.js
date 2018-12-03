import React, { Component } from 'react';
import './App.css';

class App extends Component {
  onClickAlert = () =>{
    alert("now you know how to handle onclick event");
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.onClickAlert}>Hello world!</button>
      </div>
    );
  }
}

export default App;
