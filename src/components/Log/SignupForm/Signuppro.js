import React, {useState} from "react";
import axios from "axios";
import validator from "validator";
import Error from "../../errors/Error";

const Signuppro = () => {

  const [reason, setReason] = useState("");
  const [siret, setSiret] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const signup = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setError("Email non conforme !");
      setShowError(true);
      return error;
    }
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
      }) === false
    ) {
      setError(
        "Le mot de passe doit comporter 8 caractères minimum, 1 minuscule, 1 majuscule, 1 chiffre et 1 symbole !"
      );
      setShowError(true);
      return error;
    }
    if (validator.isLength(reason, { min: 2 }) === false) {
      setError("La raison sociale doit comporter au moins 2 caractères !");
      setShowError(true);
      return error;
    }
    if(validator.isNumeric(siret) === false) {
      setError("Le N°SIRET doit comporter uniquement des chiffres !");
      setShowError(true);
      return error;
    }
    if (validator.isLength(siret, { min: 14, max: 14 }) === false) {
      setError("Le N°SIRET doit comporter 14 chiffres");
      setShowError(true);
      return error;
    }
    axios.post('http://localhost:3003/pro', {
      reason,
      siret,
      email,
      password,
      date: new Date()
    })
    .then(() => {
      setError("");
      setShowError(false);
      console.log("Utilisateur professionnel inscrit avec succès !")
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <div>
      <form>
        {showError ? <Error error={error} /> : ''}
        <label htmlFor="socialreason">Raison Sociale</label>
        <input
          type="text"
          name="socialreason"
          id="socialreason"
          placeholder="Raison sociale"
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <label htmlFor="siret">N°SIRET</label>
        <input
          type="text"
          name="siret"
          id="siret"
          placeholder="N°SIRET"
          onChange={(e) => setSiret(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="exemple@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
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
        <button type="submit" onClick={signup}>
          <i className="fas fa-user-plus"></i>
          M'INSCRIRE
        </button>
      </form>
    </div>
  );
};

export default Signuppro;
