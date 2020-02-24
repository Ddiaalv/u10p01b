import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './components/store';

import CrearCuenta from './components/Logins/CrearCuenta/CrearCuenta';
import './components/Logins/LogOut/LogOut.css';
import LogOut from './components/Logins/LogOut/LogOut';
import Acceder from './components/Logins/Registrado/Acceder';
import AccederTlfn from './components/Logins/Registrado/AccederTlfn';
import OtrosLogins from './components/Logins/OtrosLogins/OtrosLogins';
import Errores from './components/Modal/Errores';
import ChampionContainer from './components/ChampionSection/ChampionContainer/ChampionContainer';
import Champion from './components/ChampionSection/Champion/Champion'

import lolLogo from './components/assets/img/lolLogo.png';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div id="login">
          <CrearCuenta />
          <Acceder />
          <AccederTlfn />
          <OtrosLogins />
          <Errores />
          <LogOut />
        </div>
        <header className="cabecera">
          <a href="/">
            <img className="lolLogo" src={lolLogo} alt="Logo del League of Legends" />
          </a>
          <video id="hero-vid" loop autoPlay>
            <source
              src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-es/production/es-es/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
              type="video/webm"
            />
          </video>
        </header>
        <div id="logueado">
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
