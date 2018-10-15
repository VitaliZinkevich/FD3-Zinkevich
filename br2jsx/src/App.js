import React, { Component } from 'react';
import Br2jsx from './components/Br2jsx'


let text = 'получает <br/>ОДИН<br /> props, <br>содержащий <br/>многострочный текст,<br/> разбитый на строки<br> тегами <бр>,и отображает этот<br /> многострочный текст внутри <br/>себя. '

class App extends Component {
  render() {
    return (
      <div className="App">
        <Br2jsx 
        string={text}
        />
      </div>
    );
  }
}

export default App;
