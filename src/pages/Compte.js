import React, {useEffect} from 'react';
import Navigation from '../components/Navigation';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie'
import axios from 'axios';

const Compte = () => {

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
  const retrieveUser = () => {
    axios.get(`https://centralcare.srpweb.fr/users/${decodeToken()}`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Compte;