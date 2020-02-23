import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '../../store';

export class FilterType extends Component {
  constructor(props) {
    super(props);
    this.state = { valorCheckeds: '' };
    this.getTipoCampeon = this.getTipoCampeon.bind(this);
  }

  getTipoCampeon() {
    const checkBoxElements = document.querySelectorAll('input[name="tipoCampeon"]');
    const tiposSeleccionados = [];
      checkBoxElements.forEach(tipoSeleccionado => {
        if (tipoSeleccionado.checked) tiposSeleccionados.push(tipoSeleccionado.value);
      });
    this.setState({ valorCheckeds: tiposSeleccionados });
      console.log(tiposSeleccionados)
    store.dispatch({
      type: 'Buscar tipo',
      buscarTipo: tiposSeleccionados,
    });
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
        onClick={this.getTipoCampeon} />
        {tipoCampeon}
      </label>
    );
  }
}

const mapStateToProps = state => ({
  buscarTipo: state.buscarTipo,
});

export default connect(mapStateToProps, {})(FilterType);
