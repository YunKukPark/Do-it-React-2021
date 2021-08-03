import React, { Component } from 'react';

class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }

  constructor(props) {
    super(props);
    // getDerivedStateFromProp() 함수를 사용하므로
    // 경고 메세지를 건너 뛰기 위해 state 초깃값을 설정합니다.
    this.state = {};
    console.log('constructor 호출');
  }

  componentDidMount() {
    console.log('componentDidMount 호출');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforUpdate 호출');
    return {};
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
    return true;
  }

  render() {
    console.log('render 호출');
    return null;
  }
}

export default LifecycleExample;
