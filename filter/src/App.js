import React, { Component } from 'react';
import FilterSort from './components/FilterSort'

import mock from './mock'

class App extends Component {
  render() {
    return (
    <div className="App">
     <FilterSort
     items={mock}/>
    </div>
    );
  }
}

export default App;
