import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import FilterType from '../FilterType/FilterType';

import './FilterContainer.css';
export class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.getValorInput = this.getValorInput.bind(this);
  }
  
  /**
   * Recoge el valor del input, para enviarlo mediante un dispatch(action de redux) al store de nuestra aplicacion.
   * @param {*} evento Recoge el evento al que hace referencia el update.
   */
  getValorInput(evento) {
    console.log(evento.target.value);
    this.setState({ value: evento.target.value });
    store.dispatch({
      type: 'Buscar campeon',
      buscarCampeon: evento.target.value,
    });
  }

  render() {
    const tiposCampeones = ['Mage', 'Tank', 'Marksman', 'Support', 'Fighter'];
    return (
      <div className="filterContainer">
        <label htmlFor="buscarCampeon">
          <input
            type="text"
            id="buscarCampeon"
            value={this.state.value}
            onChange={this.getValorInput}
            placeholder="Buscar un campeon..."
          />
        </label>
        {tiposCampeones.map((tipoCampeon, index) => (
          <FilterType key={index} tipo={tipoCampeon} />
        ))}
      </div>
    );
  }
}

/**
 * Permite pasar un estado a una prop para poder utilizarla en el componente actual.
 * @param {object} state Estado del store
 */
const mapStateToProps = state => ({
  buscarCampeon: state.buscarCampeon,
});

export default connect(mapStateToProps, {})(FilterContainer);
