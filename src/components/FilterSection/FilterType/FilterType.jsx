import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '../../store';
import imgTank from '../../assets/img/types/Tank.webp'
import imgFighter from '../../assets/img/types/Fighter.webp'
import imgMage from '../../assets/img/types/Mage.webp'
import imgMarksman from '../../assets/img/types/Marksman.webp'
import imgSupport from '../../assets/img/types/Support.webp'
import './FilterType.css';

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
    if (tipoCampeon === 'Tank') {
      return (
        <label htmlFor={tipoCampeon}>
          <img src={imgTank} alt=""/>
          <input type="radio"
            id={tipoCampeon}
            name="tipoCampeon"
            ref="check_me"
            value={tipoCampeon}
            onClick={this.getTipoCampeon} />
        </label>
      );
    } else if (tipoCampeon === 'Fighter') {
      return (
        <label htmlFor={tipoCampeon}>
          <img src={imgFighter} alt="" />
          <input type="radio"
            id={tipoCampeon}
            name="tipoCampeon"
            ref="check_me"
            value={tipoCampeon}
            onClick={this.getTipoCampeon} />
        </label>
      );
    } else if (tipoCampeon === 'Mage') {
      return (
        <label htmlFor={tipoCampeon}>
          <img src={imgMage} alt="" />
          <input type="radio"
            id={tipoCampeon}
            name="tipoCampeon"
            ref="check_me"
            value={tipoCampeon}
            onClick={this.getTipoCampeon} />
        </label>
      );
    } else if (tipoCampeon === 'Marksman') {
      return (
        <label htmlFor={tipoCampeon}>
          <img src={imgMarksman} alt="" />
          <input type="radio"
            id={tipoCampeon}
            name="tipoCampeon"
            ref="check_me"
            value={tipoCampeon}
            onClick={this.getTipoCampeon} />
        </label>
      );
    } else {
      return (
        <label htmlFor={tipoCampeon}>
          <img src={imgSupport} alt="" />
          <input type="radio"
            id={tipoCampeon}
            name="tipoCampeon"
            ref="check_me"
            value={tipoCampeon}
            onClick={this.getTipoCampeon} />
        </label>
      );
    }

  }
}

const mapStateToProps = state => ({
  buscarTipo: state.buscarTipo,
});

export default connect(mapStateToProps, {})(FilterType);
