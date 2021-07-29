import React, { Component } from 'react';

class BooleanComponent extends Component {
  render() {
    // 불리언 타입을 조건문에 적용한 예제
    const message = this.props.bored ? '놀러가자' : '하던일이나 마저해라';
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;
