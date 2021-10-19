import React from 'react';
import Navigation from "../components/navigation";

const Connect = () => {
  return (
    <div className="login-register-container">
      <Navigation />
      <div className="connection-container">
        <div className="connection-login fade-in-bottom">
          <div className="connection-button">
              <button>CONNEXION</button>
              <button>INSCRIPTION</button>
          </div>
          <div className="divider"></div>
          <form>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="exemple@gmail.com" required/>
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder="Votre mot de passe" required/>
            <button type="submit">
              <i class="fas fa-rocket"></i>
              CONNEXION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;