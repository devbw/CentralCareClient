import React, {useState} from 'react';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
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