import React, { Component } from 'react'

export default class FilterType extends Component {
  mostrarConsola() {
    const checkBoxElements = document.querySelectorAll('input[name="tipoCampeon"]');
    const tiposSeleccionados = [];
    checkBoxElements.forEach(tipoSeleccionado => {
      if (tipoSeleccionado.checked) tiposSeleccionados.push(tipoSeleccionado.value);
    });
    console.log(tiposSeleccionados)
  }

  render() {
    const tipoCampeon = this.props.tipo;
    return (
      <label htmlFor={tipoCampeon}>
        <input type="checkbox" 
        id={tipoCampeon} 
        name="tipoCampeon" 
        ref="check_me" 
        value={tipoCampeon}
        onClick={this.mostrarConsola} />
        {tipoCampeon}
      </label>
    );
  }
}
