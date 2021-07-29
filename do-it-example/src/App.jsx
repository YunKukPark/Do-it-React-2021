import React, { Component } from 'react';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent from './03/ChildComponent';
import ChildComponent2 from './03/ChildComponent2';

class App extends Component {
  render() {
    const arr = [1, 2, 3];
    const node = <h1>NODE</h1>;
    const obj = {
      name: 'yunkuk',
      age: 20,
    };
    const myFunc = () => {
      console.log('메시지');
    };

    return (
      <div id="App">
        <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={arr}
          nodeValue={node}
          funcValue={myFunc}
        />
        <ChildComponent2 objValue={obj} />
        <BooleanComponent bored />
        <BooleanComponent />
      </div>
    );
  }
}

export default App;
