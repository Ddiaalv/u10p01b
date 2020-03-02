import React, { Component } from 'react';
import fire from '../../../fire.js';
import './LogOut.css';


export default class LogOut extends Component {

  /**
  * Desconecta al usuario y muestra nuevamente el crear usuario
  */
  logout() {
    //Limpia los campos del login
    document.getElementById("Nombre").value = "";
    document.getElementById("Pass").value = "";
    document.getElementById("Usuario").value = "";
    document.getElementById("Cont").value = "";
    document.getElementById("Codigo").value = "";
    document.getElementById("telefono").value = "";

    fire.auth().signOut().then(function () {
      document.getElementById("saludo").innerHTML = `Ha cerrado su sesion`;
      document.getElementById("registrado").style.display = "none";
      document.getElementById("registradoTlfn").style.display = "none";
      document.getElementById("registro").style.display = "inline";
      document.getElementById("NoLog").style.display = "none";
      document.getElementById("Logged").style.display = "none";
      document.getElementById("ErroresSolucion").style.display = "none"
      document.getElementById("logueado").style.display ="none"
    })
      .catch(console.log);
  }

  render() {
    return (
      <div id="Logged">
        <a href="/">
          <button>Logout</button>
        </a>
      </div>
    );
  }
}
