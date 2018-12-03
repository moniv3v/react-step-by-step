import React, { Component } from 'react';
import './App.css';
import NumberText from './NumberText.js';

class App extends Component {
  state = {number:0}
  onClickAlert = () =>{
    alert("now you know how to handle onclick event");
  }
  onClickUpdateNumber = () => {
    let newValue = this.props.onClickAddTwo(this.state.number)
    this.setState({number:newValue})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.onClickUpdateNumber}>Hello {this.props.who}</button>
        <span><NumberText /> {this.state.number}</span>
      </div>
    );
  }
}

export default App;
