import React, { Component } from 'react';
import shallowEqual from 'shallow-equal';

export class PureComponentExample extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
}
