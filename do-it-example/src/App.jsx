import React, { Component } from 'react';
import Counter from './03/Counter3';
import ScrollSpy from './03/ScrollSpy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <ScrollSpy />
      </div>
    );
  }
}

export default App;
