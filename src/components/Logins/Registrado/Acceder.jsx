import React, { Component } from 'react';
import fire from '../../../fire.js';
import acceso from '../acceso'
import './Acceder.css';


export default class Acceder extends Component {

  //realiza una peticion con el usuario y la contraseña y si firebase lo tiene en sus usuarios le permite el acceso al resto de la pagina
  acceder() {

    let email = document.getElementById("Usuario").value;
    let password = document.getElementById("Cont").value;

    fire.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
    })
      .then(result => {
        let user = result.user;
        document.getElementById("saludo").innerHTML = `Bienvenido ${user.email}`;
        acceso()
      }
      );
  }

  render() {
    return (
      <div id="registrado" >
        <label for="Usuario">Correo electronico</label>
        <input id="Usuario" type="text" />
        <label for="Cont">Contraseña</label>
        <input id="Cont" type="password" />
        <button onClick={this.acceder}>Acceder</button>
      </div>
    );
  }
}
