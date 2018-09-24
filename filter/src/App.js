import React, { Component } from 'react';
import FilterSort from './components/FilterSort'
import './App.css'

import mock from './mock'

class App extends Component {
  render() {
    return (
<div className='container'>
<div className="App">
 <FilterSort
 items={mock}/>
</div>
</div>

    );
  }
}

export default App;
