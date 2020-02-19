import React, { Component } from 'react'

export default class FilterType extends Component {
  render() {
    const tipoCampeon = this.props.tipo;
    return (
      <label htmlFor={tipoCampeon}>
        <input type="radio" id={tipoCampeon} name="tipoCampeon" value={tipoCampeon}></input>
        {tipoCampeon}
      </label>
    );
  }
}
