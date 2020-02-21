import React, { Component } from 'react';
import fire from '../../../fire.js';
import firebase from 'firebase';
import acceso from '../acceso'
import './Acceder.css';

export default class AccederTlfn extends Component {

  //Obtiene el numero del telefono y verifica el captcha para mandar un SMS con el codigo de verificacion
  phoneAuth() {
    document.getElementById("recaptcha-container").style.display = "inline"
    let number = document.getElementById('telefono').value
    number = number.replace(/ /g, "")
    if(number.length == 9 && !(isNaN(number+0))){
      number = `+34${number}`
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      var appVerifier = window.recaptchaVerifier;
      fire.auth().signInWithPhoneNumber(number, appVerifier)
        .then(function (confirmationResult) {
          document.getElementById("recaptcha-container").style.display = "none"
          document.getElementById("verificacion").style.display = "inline"
          window.confirmationResult = confirmationResult
        })
        .catch(function (error) {
          console.log(error)
          window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        });
    }
    else{
      document.getElementById("Info").innerHTML = "No has introducido un numero de telefono valido"
      console.log("Esto no funca")
    }
      

  }


  //Verifica el codigo enviado previamente al usuario
  codeVerify() {
    
    var code = document.getElementById('Codigo').value
    window.confirmationResult.confirm(code)
      .then(function (result) {
        document.getElementById("verificacion").style.display = "none"
        document.getElementById("Info").innerHTML = ""
        document.getElementById("saludo").innerHTML = `Bienvenido ${document.getElementById('telefono').value}`;
        let user = result.user;
        acceso();
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  render() {

    return (
      <div id="registradoTlfn" >
        <label for="telefono">Introduzca su numero de telefono(Solo se admiten numeros españoles es decir se le aplicara +34 internamente)</label>
        <input type="text" id="telefono" min="0" />
        <button onClick={this.phoneAuth}>Enviar SMS</button>
        <p id="recaptcha-container"></p>
        <br /> <br />

        <div id="verificacion">
          <label for="Codigo">Codigo del sms</label>
          <input type="text" id="Codigo" />
          <button onClick={this.codeVerify}>Comprobar</button>
        </div>
      </div>
    );
  }
}