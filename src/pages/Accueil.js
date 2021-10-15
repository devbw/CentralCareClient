import React from 'react';
import Navigation from '../components/navigation'

const Accueil = () => {
  return (
    <div className="container-home">
      <Navigation/>
      <div className="title-home">
        <h1>Votre plateforme d'annonces <br/>d'aide à la personne !</h1>
      </div>
      <div className="home-button">
        <button>CONNEXION</button>
        <button>INSCRIPTION</button>
      </div>
      <div className="home-trapezoid">
        
      </div>
    </div>
  );
};

export default Accueil;