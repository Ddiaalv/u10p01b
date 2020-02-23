import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './Champion.css'

export default class Champion extends Component {
    state = {
    campeonData: [],
    arrayCampeones: [],
    urlSplash: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/`
  }

  componentDidMount() {
    const id = this.props.match.params.idCampeon;
    console.log(id);
    Axios.get(`http://ddragon.leagueoflegends.com/cdn/10.4.1/data/es_ES/champion/${id}.json`).then(res => {
      const campeonData = res.data.data;
      console.log(campeonData);
      this.convertirArray(campeonData);
      this.setState({ campeonData });
    });
  }

  convertirArray = objeto => {
    Object.entries(objeto).map(campeon => this.state.arrayCampeones.push(campeon[1]));
    console.log(this.state.arrayCampeones);
  };

  render() {
    return (
      <div>
        {this.state.arrayCampeones.map(campeon => (
          <div className="detallesCampeon">
            <div className="splashCampeon">
              <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeon.id}_0.jpg`} alt="" />
            </div>
            <div className="informacionCampeon">
              <h1> {campeon.name} </h1>
              <span>LORE: {campeon.lore}</span>
              <span>ROL: {campeon.tags[0]}</span>
              <div className="hechizos">
                {campeon.spells.map(spell => (
                  <div className="hechizo">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${spell.id}.png`} alt="" />
                    <p>{spell.name}</p>
                    <p>{spell.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <Link to="/">Lista campeones</Link>
      </div>
    );
  }
}
