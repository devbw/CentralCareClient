import React, {useState} from 'react';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import validator from "validator";
import Error from "../errors/Error";
import Cookies from 'js-cookie';
import Spinner from '../../components/spinner';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setError("Email non conforme !");
      setShowError(true);
      return error;
    }
    setloading(true);
    axios.post('https://centralcare.srpweb.fr/auth/local', {
      identifier: email,
      password
    })
    .then((res) => {
      Cookies.set('token', res.data.jwt, {expires: 14});
    })
    .then(() => {
      setloading(false);
      history.push('/annonces');
    })
    .catch((error) => {
      setError(error.response.data.message[0].messages[0].message);
      setShowError(true);
      setloading(false);
    })
  }

  return (
    <form>
      {showError ? <Error error={error} /> : ''}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="exemple@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {showError ? <Error error={error} /> : ''}
      {loading ? <Spinner /> : ''}
      <button type="submit" onClick={login}>
        <i className="fas fa-rocket"></i>
        CONNEXION
      </button>
    </form>
  );
};

export default Signin;