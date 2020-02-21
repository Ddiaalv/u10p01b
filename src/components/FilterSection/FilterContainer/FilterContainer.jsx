import React, { Component } from 'react'
import FilterType from '../FilterType/FilterType'

export default class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.getValorInput = this.getValorInput.bind(this);
  }

  getValorInput(evento) {
    console.log(evento.target.value);
    this.setState({value: evento.target.value});
  }

  render() {
    const tiposCampeones = ['Mage', 'Tank', 'Slayer', 'Controller', 'Fighter'];

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
        {/* Se utiliza el index en el bucle por que es una buena practica tener una key unica para cada valor */}
        {tiposCampeones.map((tipoCampeon, index) => (
          <FilterType key={index} tipo={tipoCampeon} />
        ))}
      </div>
    );
  }
}
