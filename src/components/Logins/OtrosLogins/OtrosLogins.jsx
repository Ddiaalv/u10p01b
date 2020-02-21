import React, { Component } from 'react';
import fire from '../../../fire.js';
import firebase from 'firebase';
import acceso from '../acceso'
import './OtrosLogins.css';

export default class OtrosLogins extends Component {

    //Nos pedira permiso para permitir a nuestra aplicacion registrar la cuenta de github como un usuario y posteriormente lo guardara
    gitHubSignin() {
        let provider = new firebase.auth.GithubAuthProvider();
        fire.auth().signInWithPopup(provider)
          .then(result => {
            let user = result.user;
            document.getElementById("saludo").innerHTML = `Bienvenido ${user.email}`;
            acceso()
          }
      
          ).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
            console.log(error);
          });
    }
    //Nos pedira permiso para permitir a nuestra aplicacion registrar la cuenta de twitter como un usuario y posteriormente lo guardara
    twitterSignin() {
        let provider = new firebase.auth.TwitterAuthProvider();
        fire.auth().signInWithPopup(provider)
          .then(result => {
            let user = result.user;
            document.getElementById("saludo").innerHTML = `Bienvenido ${user.displayName}`;
            acceso()
          }
      
          ).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
            console.log(error);
          });
    }

    //Nos vuelve a mostrar el crear usuario con correo y clave
    crear() {
        document.getElementById("registrado").style.display = "none";
        document.getElementById("NoLog").style.display = "none";
        document.getElementById("registro").style.display = "inline";
        document.getElementById("Info").innerHTML = " "
    }

  render() {
    return (
        <div id= "NoLog">
            <button onClick = {this.gitHubSignin}>GitHub Signin</button>
            <button onClick = {this.twitterSignin}>Twitter Signin</button>
            <button onClick = {this.crear}>Crear usuario</button>
        </div>
    );
  }
}
