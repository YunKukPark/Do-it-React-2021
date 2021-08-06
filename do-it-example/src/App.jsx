import React, { Component } from 'react';
import ListExample from './03/ListExample';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }

  render() {
    return (
      <div className="App">
        <ListExample />
      </div>
    );
  }
}

export default App;
