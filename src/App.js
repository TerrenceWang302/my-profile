import React, { Component } from 'react';
import FunctionBar from './containers/FunctionBar/FunctionBar';
import Bg from './containers/Bg/Bg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionBar />
        <Bg />
      </div>
    );
  }
}

export default App;
