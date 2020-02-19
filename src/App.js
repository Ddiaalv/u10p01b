import React from 'react';
import FilterContainer from './components/FilterSection/FilterContainer/FilterContainer'
import ChampionContainer from './components/ChampionSection/ChampionContainer/ChampionContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        Todos los campeones del League of Legends
        <FilterContainer/>
        <ChampionContainer/>
      </div>
    </div>
  );
}
export default App;
