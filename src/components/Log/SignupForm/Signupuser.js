import React, {useState} from "react";
import axios from "axios";

const Signupuser = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3003/users', {
      firstname,
      lastname,
      email,
      password,
      date: new Date()
    })
    .then(() => {
      console.log("Utilisateur inscrit avec succès !")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <form>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Ex: Jeanne"
          min="2"
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Ex: Dupuis"
          min="2"
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
          min="8"
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
