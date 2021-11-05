import React, {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie'
import axios from 'axios';

const Compte = () => {

  const [username, setUsername] = useState('');

  useEffect(() => {
    retrieveUser();
  })

  const getCookie = () => {
    return Cookies.get('token');
  }
  const decodeToken = () => {
    let decoded = jwt_decode(getCookie());
    return decoded.id
  }
  const retrieveJWT = () => {
    return getCookie();
  }
  const retrieveUser = () => {
    axios.get(`https://centralcare.srpweb.fr/users/${decodeToken()}`, {
      headers: {
        Authorization: `Bearer ${retrieveJWT()}`
      }
    })
    .then((res) => {
      console.log(res.data.username)
      setUsername(res.data.username)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="account-container">
      <Navigation />
      <div className="fade-in-bottom block-title">
        <h1>Bienvenue, {username}</h1>
        <p>Retrouvez ici toutes les informations liées à votre compte</p>
      </div>
      <div className="account-block">
        <div className="title-subblock">
          <i className="fas fa-portrait"></i>
          <h4>Mes informations</h4>
        </div>
      </div>
      <div className="account-block">
        <div className="title-subblock">
          <i className="fas fa-shield-alt"></i>
          <h4>Sécurité</h4>
        </div>
      </div>
      <div className="account-block">
        <div className="title-subblock">
          <i className="fas fa-user-times"></i>
          <h4>Supprimer</h4>
        </div>
      </div>
      <div className="account-block">
        <div className="title-subblock">
          <i className="far fa-clipboard"></i>
          <h4>Mes annonces</h4>
        </div>
      </div>
      <div className="account-block">
        <div className="title-subblock">
          <i className="fas fa-heart"></i>
          <h4>Mes favoris</h4>
        </div>
      </div>
    </div>
  );
};

export default Compte;