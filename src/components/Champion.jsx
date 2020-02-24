import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Champion.css';
import Chart from 'react-google-charts';

export default class Champion extends Component {
  state = {
    campeonData: [],
    arrayCampeones: [],
    urlSplash: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/`,
    chartData: [],
    skillData01: [],
    skillData02: [],
    skillData03: [],
    skillData04: [],
    skillData: [],
  };

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
    this.obtenerCooldowns(this.state.arrayCampeones);
    console.log(this.state.arrayCampeones);
  };

  /**
   * Nos permite extraer varios array con los diferentes valores del cooldown de las habilidades, para luego pintar una gráfica con dichos valores por habilidad.
   * @param {Array} arrayCampeones Lista de campeones, array de objetos
   */
  obtenerCooldowns(arrayCampeones) {
    const skillData01 = [['Habilidad', 'Cooldown']];
    const skillData02 = [['Habilidad', 'Cooldown']];
    const skillData03 = [['Habilidad', 'Cooldown']];
    const skillData04 = [['Habilidad', 'Cooldown']];
    // eslint-disable-next-line array-callback-return
    arrayCampeones.map(campeon => {
      // eslint-disable-next-line array-callback-return
      campeon.spells.map((spell, index) => {
        // eslint-disable-next-line array-callback-return
        spell.cooldown.map((cd, indexCD) => {
          if (index === 0) skillData01.push([`${spell.name} lvl${indexCD + 1}`, cd]);
          if (index === 1) skillData02.push([`${spell.name} lvl${indexCD + 1}`, cd]);
          if (index === 2) skillData03.push([`${spell.name} lvl${indexCD + 1}`, cd]);
          if (index === 3) skillData04.push([`${spell.name} lvl${indexCD + 1}`, cd]);
        });
      });
    });
    this.setState({
      skillData01: skillData01,
      skillData02: skillData02,
      skillData03: skillData03,
      skillData04: skillData04,
    });
    this.state.skillData.push(this.state.skillData01);
    this.state.skillData.push(this.state.skillData02);
    this.state.skillData.push(this.state.skillData03);
    this.state.skillData.push(this.state.skillData04);
  }

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
                {campeon.spells.map((spell, index) => (
                  <div className="hechizo">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${spell.id}.png`} alt="" />
                    <p>{spell.name}</p>
                    <p>{spell.description}</p>
                    <Chart
                      width={'500px'}
                      height={'300px'}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={this.state.skillData[index]}
                      options={{
                        title: `Cooldown: ${spell.name}`,
                        is3D: true,
                      }}
                      rootProps={{ 'data-testid': '2' }}
                    />
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
