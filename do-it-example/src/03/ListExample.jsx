import React, { Component } from 'react';

class ListExample extends Component {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price, index) => <div key={index}>가격: {price}원</div>);
    return (
      <div>
        <label>가격 목록</label>
        {prices};
      </div>
    );
  }
}

export default ListExample;
