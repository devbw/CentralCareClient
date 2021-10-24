import React, {useState} from "react";
import axios from "axios";

const Signuppro = () => {

  const [reason, setReason] = useState("");
  const [siret, setSiret] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3003/pro', {
      reason,
      siret,
      email,
      password,
      date: new Date()
    })
    .then(() => {
      console.log("Utilisateur professionnel inscrit avec succès !")
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <div>
      <form>
        <label htmlFor="socialreason">Raison Sociale</label>
        <input
          type="text"
          name="socialreason"
          id="socialreason"
          placeholder="Raison sociale"
          minlength="2"
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <label htmlFor="siret">N°SIRET</label>
        <input
          type="text"
          name="siret"
          id="siret"
          placeholder="N°SIRET"
          minlength="14"
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
          minlength="8"
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
