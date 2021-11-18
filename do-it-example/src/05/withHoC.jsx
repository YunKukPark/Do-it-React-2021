import React, { Component } from 'react';

export default function withHoC(WrappedComponent) {
  return class WithHoC extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
