import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import ChampionContainer from './components/ChampionSection/ChampionContainer/ChampionContainer';
import CrearCuenta from './components/Logins/CrearCuenta/CrearCuenta';
import LogOut from './components/Logins/LogOut/LogOut';
import Acceder from './components/Logins/Registrado/Acceder';
import AccederTlfn from './components/Logins/Registrado/AccederTlfn';
import OtrosLogins from './components/Logins/OtrosLogins/OtrosLogins';
import lolLogo from './components/assets/img/lolLogo.png';
import Champion from './components/Champion'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div id="login">
          <CrearCuenta />
          <Acceder />
          <AccederTlfn />
          <OtrosLogins />
          <LogOut />
        </div>
        <header className="cabecera">
          <img className="lolLogo" src={lolLogo} alt="Logo del League of Legends" />
          <h3>Busca tu campeón favorito:</h3>
          <video id="hero-vid" loop autoPlay>
            <source
              src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-es/production/es-es/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
              type="video/webm"
            />
          </video>
        </header>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={ChampionContainer} />
              <Route path="/campeones/:idCampeon" component={Champion} />
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
}
export default App;
