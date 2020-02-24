import React, { Component } from 'react';
import Modal from 'react-modal';
import Paso1 from '../Capturas/1.png';
import Paso2 from '../Capturas/2.png';
import Paso3 from '../Capturas/3.png';
import Paso4 from '../Capturas/4.png';
import './Errores.css';

export default class Errores extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div id="ErroresSolucion">
          <button onClick={this.handleOpenModal}>En caso de que no aparezcan los campeones pulsa aqui</button>
          <Modal 
             isOpen={this.state.showModal}
             contentLabel="Solucion de error http 400"
          >
            <button onClick={this.handleCloseModal}>Cerrar esta ventana</button>

            <p id="PreP1">Si observamos que la pagina no tiene los campeones tras logearnos o usar el filtro (Como en la siguiente imagen) realizamos lo siguiente</p>
            <img id="Paso1" src={Paso1} alt="Paso numero 1 para solucionar error"></img>
            <p id="PreP2">Accedemos a la configuracion del sitio web</p>
            <img id="Paso2" src={Paso2} alt="Paso numero 1 para solucionar error"></img>
            <p id="PreP3">Cambiamos el contenido no seguro de Bloquear a Permitir (Ya que la api del lol devuelve una conexion http en vez de https y firebase la bloquea)</p>
            <img id="Paso3" src={Paso3} alt="Paso numero 1 para solucionar error"></img>
            <p id="PreP4">Finalmente volvemos a la pagina y recargamos</p>
            <img id="Paso4" src={Paso4} alt="Paso numero 1 para solucionar error"></img>
          </Modal>
        </div>
      );
    }
}
