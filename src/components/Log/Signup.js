import React, { useState } from 'react';

const Signup = () => {

  const [user, setUser] = useState(true);
  const [proUser, setProUser] = useState(false);

  const stateUser = () => {
    setUser(true);
    setProUser(false);
  };
  const stateProUser = () => {
    setUser(false);
    setProUser(true);
  };

  let showConditionnal;

  if (user) {
    showConditionnal =       <form>
    <label htmlFor="firstname">Prénom</label>
    <input
      type="text"
      name="firstname"
      id="firstname"
      placeholder="Ex: Jeanne"
      required
    />
    <label htmlFor="lastname">Nom</label>
    <input
      type="text"
      name="lastname"
      id="lastname"
      placeholder="Ex: Dupuis"
      required
    />
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
    <label htmlFor="confirm">Confirmer</label>
    <input
      type="password"
      name="confirm"
      id="confirm"
      placeholder="Confirmer mot de passe"
      required
    />
    <div className="cgu">
      <input type="checkbox" name="acceptcgu" checked required/>
      <span>J'ai lu et j'accepte les <a href="/">CGU</a></span>
    </div>
    <button type="submit">
    <i className="fas fa-user-plus"></i>
      M'INSCRIRE
    </button>
  </form>;
  } else {
    showConditionnal =       <form>
    <label htmlFor="socialreason">Raison Sociale</label>
    <input
      type="text"
      name="socialreason"
      id="socialreason"
      placeholder="Raison sociale"
      required
    />
    <label htmlFor="siret">N°SIRET</label>
    <input
      type="text"
      name="siret"
      id="siret"
      placeholder="N°SIRET"
      required
    />
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
    <label htmlFor="confirm">Confirmer</label>
    <input
      type="password"
      name="confirm"
      id="confirm"
      placeholder="Confirmer mot de passe"
      required
    />
    <div className="cgu">
      <input type="checkbox" name="acceptcgu" checked required/>
      <span>J'ai lu et j'accepte les <a href="/">CGU</a></span>
    </div>
    <button type="submit">
    <i className="fas fa-user-plus"></i>
      M'INSCRIRE
    </button>
  </form>;
  }

  return (
    <div className="signup">
      <h3>Je suis</h3>
      <div className="circle-container">
        <div className="circle-choice" onClick={stateUser}>
          <div className="circle">
            <i className="fas fa-users"></i>
          </div>
          <p>Intervenant <br/> Bénéficiaire</p>
        </div>
        <div className="circle-choice" onClick={stateProUser}>
          <div className="circle">
            <i className="fas fa-store"></i>
          </div>
          <p>Structure <br/> Professionnelle</p>
        </div>
      </div>
      {showConditionnal}
    </div>
  );
};

export default Signup;