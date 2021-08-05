import React, { Component } from 'react';

class ComponentExample extends Component {
  constructor(props) {
    super(props);
    console.log('생성함수');
    this.state = {};
  }
  componentDidMount() {
    /* 상속받은 생명주기 함수 */
  }
  myMethod() {
    // 추가 확장 함수
  }
  render() {
    // 상속 받은 화면 출력 함수
    return <div></div>;
  }
}

export default ComponentExample;
