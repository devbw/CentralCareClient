import React, {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie'
import axios from 'axios';

const Compte = () => {

  const [userInfos, setUserInfos] = useState([]);

  useEffect(() => {
    retrieveUser();
  }, [])

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
      setUserInfos(res.data)
      console.log(userInfos)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="account-container">
      <Navigation />
      <div className="fade-in-bottom block-title">
        <h1>Bienvenue, {userInfos.username}</h1>
        <p>Retrouvez ici toutes les informations liées à votre compte</p>
      </div>
      <div className="account-block fade-in-bottom">
        <div className="title-subblock">
          <i className="fas fa-portrait"></i>
          <h4>Mes informations</h4>
        </div>
        <div>
          <p>Nom : {userInfos.lastname}</p>
          <p>Prénom : {userInfos.firstname}</p>
          <p>Email : {userInfos.email}</p>
        </div>
        <button>Modifier mes informations</button>
      </div>
      <div className="account-block fade-in-bottom">
        <div className="title-subblock">
          <i className="far fa-clipboard"></i>
          <h4>Mes annonces</h4>
        </div>
        <button>Voir mes annonces</button>
      </div>
      <div className="account-block fade-in-bottom">
        <div className="title-subblock">
          <i className="fas fa-heart"></i>
          <h4>Mes favoris</h4>
        </div>
        <button>Voir mes favoris</button>
      </div>
      <div className="account-block fade-in-bottom">
        <div className="title-subblock">
          <i className="fas fa-shield-alt"></i>
          <h4>Sécurité</h4>
        </div>
        <button>Modifier mot de passe</button>
      </div>
      <div className="account-block fade-in-bottom">
        <div className="title-subblock">
          <i className="fas fa-user-times"></i>
          <h4>Supprimer</h4>
        </div>
        <button>Supprimer mon compte</button>
      </div>
    </div>
  );
};

export default Compte;