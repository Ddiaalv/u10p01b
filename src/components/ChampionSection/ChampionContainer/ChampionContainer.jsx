import React from 'react';
import './ChampionContainer.css';
import { connect } from 'react-redux';
import ChampionCard from '../ChampionCard/ChampionCard';

const ChampionContainer = ({ heroes, buscarCampeon }) => (
  <div>
    <div className="championContainer">
      {filtrarHeroes(heroes, buscarCampeon).map(heroe => (
        <ChampionCard key={heroe.key} datos={heroe} />
      ))}
    </div>
  </div>
);

/**
 * Nos permite pasar por parametro la lista de campeones y el texto que se desea buscar entre la lista para devolver los campeones que coincidan con buscarCampeon.
 * @param {array} campeones Lista de campeones
 * @param {string} buscarCampeon Valor del input para realizar la busqueda
 */
const filtrarHeroes = (campeones, buscarCampeon) => {
  let heroesFiltrados = campeones.filter(campeon =>
    campeon.name
      .toLowerCase()
      .trim()
      .includes(buscarCampeon.toLowerCase().trim())
  );
  return heroesFiltrados;
};

/**
 * Permite pasar un estado a una prop para poder utilizarla en el componente actual.
 * @param {object} state Estado del store
 */
const mapStateToProps = state => ({
  heroes: state.arrayHeroes,
  buscarCampeon: state.buscarCampeon,
});

export default connect(mapStateToProps, {})(ChampionContainer);
