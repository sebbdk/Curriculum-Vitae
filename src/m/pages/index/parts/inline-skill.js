import React, { Component } from 'react';

export default class extends Component {

  render() {
    return <span className="v-skill v-skill--inline"><span>{this.props.children}</span></span>
  }

}