import { createStore } from 'redux';
import Axios from 'axios';

const estadoInicial = {
  heroes: [],
  arrayHeroes: [],
  buscarCampeon: '',
  buscarTipo: []
};

//FIXME: Cuando se carga el componente que deberia rellenarse con los valores de esta consulta a la api aparece vacio. ¿Es problema del ciclo de carga?
Axios.get(`http://ddragon.leagueoflegends.com/cdn/10.3.1/data/es_ES/champion.json`).then(response => {
  estadoInicial.heroes = response.data.data;
  console.log(estadoInicial.heroes);
  convertirArray(estadoInicial.heroes);
});

/**
 * Convierte un Objeto de objetos en un array de objetos para mejorar el "flujo de trabajo".
 * @param {object} objeto Objeto de objetos generados desde la Api
 */
const convertirArray = objeto => {
  Object.entries(objeto).map(campeon => estadoInicial.arrayHeroes.push(campeon[1]));
};

/* Por lo general esta funcion se le llama reduce******, esta funcion pasa por parametro el estado de nuestro 
estadoInicial y la accion que se activa se devuelve desde el componente que se activa */
const reducerHeroes = (state = estadoInicial, action) => {
  if (action.type === 'Buscar campeon') {
    return {
      ...state,
      buscarCampeon: (state.buscarCampeon = action.buscarCampeon),
    };
  }
  return state;
};

export default createStore(reducerHeroes);
