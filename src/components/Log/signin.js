import React from 'react';

const signin = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="exemple@gmail.com"
        required
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Votre mot de passe"
        required
      />
      <button type="submit">
        <i className="fas fa-rocket"></i>
        CONNEXION
      </button>
    </form>
  );
};

export default signin;