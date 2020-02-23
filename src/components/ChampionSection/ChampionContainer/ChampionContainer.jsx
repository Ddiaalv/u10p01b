import React from 'react';
import { connect } from 'react-redux';
import './ChampionContainer.css';
import ChampionCard from '../ChampionCard/ChampionCard';
import FilterContainer from '../../FilterSection/FilterContainer/FilterContainer';

function ChampionContainer({ heroes, buscarCampeon, buscarTipo }) {
  return (
    <div>
      <div className="championContainer">
        <FilterContainer />
        {filtrar(heroes, buscarCampeon, buscarTipo).map(campeon => (
          <ChampionCard key={campeon.key} datos={campeon} />
        ))}
      </div>
    </div>
  );
}

/**
 * Pequeño embudo con la funcionalidad de filtrar la lista de campeones segun lo que el usuario solicite.
 * @param {Array} campeones Lista de campeones. Array de objetos
 * @param {String} buscarCampeon Cadena de texto referente al nombre del campeon a buscar.
 * @param {Array} tipos Lista de tipos seleccionados por el usuario.
 */
const filtrar = (campeones, buscarCampeon, tipos) => {
  let campeonesFiltrados;
  if (buscarCampeon !== '')
    if (tipos.length >= 1) {
      campeonesFiltrados = filtrarPorNombre(campeones, buscarCampeon);
      campeonesFiltrados = filtrarPorTipo(campeonesFiltrados, tipos);
    } else campeonesFiltrados = filtrarPorNombre(campeones, buscarCampeon);
  else campeonesFiltrados = filtrarPorTipo(campeones, tipos);
  console.log(campeonesFiltrados);
  return campeonesFiltrados;
};

/**
 * Nos permite pasar por parametro la lista de campeones y el texto que se desea buscar entre la lista para devolver los campeones que coincidan con buscarCampeon.
 * @param {array} campeones Lista de campeones
 * @param {string} buscarCampeon Valor del input para realizar la busqueda
 */
const filtrarPorNombre = (campeones, buscarCampeon) => {
  let heroesFiltrados = campeones.filter(campeon =>
    campeon.name
      .toLowerCase()
      .trim()
      .includes(buscarCampeon.toLowerCase().trim())
  );
  return heroesFiltrados;
};

/* TODO: Buscar la forma de que dentro de .includes(tipos[0]) se pueda añadir todos los valores de tipos, no solo una posicion
 */
/**
 * Filtra la lista según los tipos de campeones que elija el usuario.
 * @param {array} campeones Lista de campeones, array de objetos
 * @param {array} tipos Lista de tipos seleccionados por el usuario
 */
const filtrarPorTipo = (campeones, tipos) => {
  let heroesFiltrados = campeones.filter(campeon => campeon.tags.includes(tipos[0]));
  return heroesFiltrados;
};

/**
 * Permite pasar un estado a una prop para poder utilizarla en el componente actual.
 * @param {object} state Estado del store
 */
const mapStateToProps = state => ({
  heroes: state.arrayHeroes,
  buscarCampeon: state.buscarCampeon,
  buscarTipo: state.buscarTipo,
});

export default connect(mapStateToProps, {})(ChampionContainer);
