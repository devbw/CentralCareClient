import React, { useState } from "react";
import axios from "axios";
import validator from "validator";

const Signupuser = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signup = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setError("Email non conforme !");
      console.log(error);
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
        "Le mot de passe doit comporter 8 caractères minimum, 1 minuscule, 1 majuscule, 1 chiffre et 1 symbole"
      );
      console.log(error);
      return error;
    }
    if (validator.isLength(firstname, { min: 2 }) === false) {
      setError("Le prénom doit comporter au moins 2 caractères");
      return error;
    }
    if (validator.isLength(lastname, { min: 2 }) === false) {
      setError("Le nom doit comporter au moins 2 caractères");
      return error;
    }
    axios
      .post("http://localhost:3003/users", {
        firstname,
        lastname,
        email,
        password,
        date: new Date(),
      })
      .then(() => {
        console.log("Utilisateur inscrit avec succès !");
        setError("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <p className="form-error">{error}</p>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Ex: Jeanne"
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Ex: Dupuis"
          onChange={(e) => setLastname(e.target.value)}
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

export default Signupuser;
