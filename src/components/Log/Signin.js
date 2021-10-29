import React, {useState} from 'react';
import axios from 'axios';
import validator from "validator";
import Error from "../errors/Error";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const login = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setError("Email non conforme !");
      setShowError(true);
      return error;
    }
    axios.post('', {
      email,
      password
    })
    .then(() => {
      console.log('Connexion réussie');
    })
    .catch((error) => {
      console.log(error);
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
      <button type="submit" onClick={login}>
        <i className="fas fa-rocket"></i>
        CONNEXION
      </button>
    </form>
  );
};

export default Signin;