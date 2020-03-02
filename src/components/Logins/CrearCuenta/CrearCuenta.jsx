import React, { Component } from 'react';
import fire from '../../../fire.js';
import acceso from '../acceso'

const expresionCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
const aceptPassw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/

export default class CrearCuenta extends Component {

  /**
  * Recoge los campos de usuario y contraseña y tras contrastarlos con las expresiones regulares, si cumplen crea la cuenta en firebase
  */
  registrar() {
    let email = document.getElementById("Nombre").value;
    let password = document.getElementById("Pass").value;
    let messError = "";
    if (expresionCorreo.test(email)) {
      if (aceptPassw.test(password)) {
        fire.auth().createUserWithEmailAndPassword(email, password)
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // eslint-disable-next-line eqeqeq
            if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          })
          .then(result => {
            if (result != null) {
              document.getElementById("Nombre").value = "";
              document.getElementById("Pass").value = "";
              let user = result.user;
              document.getElementById("saludo").innerHTML = `Bienvenido  ${user.email}`;
              acceso();
            }

          });
      }

      else
        messError = "Contraseña introducida no valida compruebe que la longitud es de entre 8 y 15 con al menos una mayuscula una minuscula un digito y 1 caracter especial (No se admiten espacios en blanco)"

    }

    else
      messError = "Correo electronico no valido"

    document.getElementById("Info").innerHTML = messError
  }

  /**
  * Nos oculta el crear usuario y nos muestra los otros metodos de login
  */
  registered() {
    document.getElementById("registrado").style.display = "inline";
    document.getElementById("registradoTlfn").style.display = "inline";
    document.getElementById("NoLog").style.display = "inline";
    document.getElementById("registro").style.display = "none";
    document.getElementById("Info").innerHTML = " "
    document.getElementById("saludo").innerHTML = " "
  }

  render() {
    return (
      <div>
        <div id="registro">
          <label for="Nombre">Correo electronico</label>
          <input id="Nombre" type="text" />
          <label for="Pass">Contraseña</label>
          <input id="Pass" type="password" />
          <button onClick={this.registrar}>Registrar</button>

          <br />

          <p>En caso de tener ya una cuenta o querer usar otro metodo pulse el siguiente boton</p>
          <button onClick={this.registered}>Ya tengo una cuenta</button>
        </div>
        <p id="Info"></p>
        <p id="saludo"></p>
      </div>
    );
  }
}
