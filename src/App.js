import React from 'react';
import FilterContainer from './components/FilterSection/FilterContainer/FilterContainer';
import ChampionContainer from './components/ChampionSection/ChampionContainer/ChampionContainer';
import CrearCuenta from './components/Logins/CrearCuenta/CrearCuenta';
import LogOut from './components/Logins/LogOut/LogOut';
import Acceder from './components/Logins/Registrado/Acceder';
import AccederTlfn from './components/Logins/Registrado/AccederTlfn';
import OtrosLogins from './components/Logins/OtrosLogins/OtrosLogins';
import { Provider } from 'react-redux';
import store from './components/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <div>
          Todos los campeones del League of Legends
          <CrearCuenta />
          <Acceder />
          <AccederTlfn />
          <OtrosLogins />
          <LogOut />
          <FilterContainer />
          <ChampionContainer />
        </div>
      </div>
    </Provider>
  );
}
export default App;
