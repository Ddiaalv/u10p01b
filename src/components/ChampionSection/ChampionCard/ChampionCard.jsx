import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './ChampionCard.css'

export default class ChampionCard extends Component {
  styleChampionCard = {
    textDecoration: 'none'
  }
  render() {
    const datosCampeon = this.props.datos;
    const img = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + datosCampeon.id + '_0.jpg';
    const backgroundImg = {
      background: `url(` + img + `) no-repeat center top`,
      backgroundSize: `cover`,
    };
    return (
      <Link to={`/campeones/${datosCampeon.id}`} style={{ textDecoration: 'none' }}>
        <div className="championCard" style={backgroundImg}>
          <p>{datosCampeon.name}</p>
        </div>
      </Link>
    );
  }
}
