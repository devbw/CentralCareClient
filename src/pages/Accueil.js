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
        <h2>Comment fonctionne <br/> la plateforme ?</h2>
        <div className="home-benefits">
          <div className="benefits">
            <div className="circle"><span>1</span></div>
            <p>Je m'inscris sur la plateforme</p>
          </div>
          <div className="benefits">
            <div className="circle"><span>2</span></div>
            <p>Je poste ou réponds à un annonce</p>
          </div>
          <div className="benefits">
            <div className="circle"><span>3</span></div>
            <p>Je trouve mon intervenant ou bénéficiaire</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;