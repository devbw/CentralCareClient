import React from "react";

const Signuppro = () => {
  return (
    <div>
      <form>
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
          <input type="checkbox" name="acceptcgu" defaultChecked required />
          <span>
            J'ai lu et j'accepte les <a href="/">CGU</a>
          </span>
        </div>
        <button type="submit">
          <i className="fas fa-user-plus"></i>
          M'INSCRIRE
        </button>
      </form>
    </div>
  );
};

export default Signuppro;
