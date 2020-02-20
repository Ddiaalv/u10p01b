import React from 'react';
import FilterContainer from './components/FilterSection/FilterContainer/FilterContainer'
import ChampionContainer from './components/ChampionSection/ChampionContainer/ChampionContainer';
import './App.css';
import { Provider } from 'react-redux'
import store from './components/store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <header className="App-header"></header>
        <div>
          Todos los campeones del League of Legends
          <FilterContainer />
          <ChampionContainer />
        </div>
      </div>
    </Provider>
  );
}
export default App;
