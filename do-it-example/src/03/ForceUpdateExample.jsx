import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.loading = true;
    this.formData = 'no data';

    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    //state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
