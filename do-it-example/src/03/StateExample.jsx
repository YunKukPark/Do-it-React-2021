import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };

    // 이후 콜백 함수를 다룰 때 bind(this) 를 사용 합니다.
    this.handleData = this.handleData.bind(this);
    // 4초 후에 handleData 함수를 호출합니다.
    setTimeout(this.handleData(this.state), 4000);
  }

  handleData(data) {
    this.setState((prevState) => ({
      loading: false,
      formData: data + prevState.formData,
    }));
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
