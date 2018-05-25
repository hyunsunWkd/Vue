import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Buttons from './Buttons';
import Counter from './Counter';
import StepInput from './StepInput';

/*
-----------------
카운터
---------------
[증가] [감소]
----------------
[step 입력]
-------------------
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
        <p className="App-intro">
          
        </p>
        <Counter />
        <Buttons />
        <StepInput />
      </div>
    );
  }
}

export default App;
