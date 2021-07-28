import React, { Component } from 'react';
import ChildComponent from './03/ChildComponent';

class App extends Component {
  render() {
    const arr = [1, 2, 3];
    const obj = { name: '제목', age: 30 };
    const node = <h1>NODE</h1>;
    const myFunc = () => {
      console.log('메시지');
    };

    return (
      <div id="App">
        <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={arr}
          objValue={obj}
          nodeValue={node}
          funcValue={myFunc}
        />
      </div>
    );
  }
}

export default App;
