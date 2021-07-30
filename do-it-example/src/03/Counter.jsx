import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      count: 0,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    // STATE 변경
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <div>
        <span>카운트: {this.state.count}</span>
        <button type="button" onClick={this.increaseCounter}>
          카운트 증가
        </button>
      </div>
    );
  }
}

export default Counter;
