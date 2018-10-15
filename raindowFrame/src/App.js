import React, { Component } from 'react';
import RainbowFrame from './components/RainbowFrame'
import Rainbow from './components/Rainbow'

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple']

class App extends Component {
  render() {
    return (
      <div className="">
      <RainbowFrame
       colors={colors}
      >
      <Rainbow/>
      <Rainbow/>
      </RainbowFrame>
      </div>
    );
  }
}

export default App;
