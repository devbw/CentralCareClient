import React from "react";
import Navigation from "../components/navigation";
import HomeButton from "../components/homeButton";

const Accueil = () => {
  return (
    <div className="container-home">
      <Navigation />
      <div className="title-home fade-in-bottom">
        <h1>
          Votre plateforme d'annonces <br />
          d'aide à la personne !
        </h1>
      </div>
      <HomeButton />
      <div className="home-trapezoid">
        <h2>
          Comment fonctionne <br /> la plateforme ?
        </h2>
        <div className="home-benefits fade-in-bottom">
          <div className="benefits">
            <div className="circle">
              <span>1</span>
            </div>
            <p>Je m'inscris sur la plateforme</p>
          </div>
          <div className="benefits">
            <div className="circle">
              <span>2</span>
            </div>
            <p>Je poste ou réponds à une annonce</p>
          </div>
          <div className="benefits">
            <div className="circle">
              <span>3</span>
            </div>
            <p>Je trouve mon intervenant ou bénéficiaire</p>
          </div>
        </div>
      </div>
      <div className="home-infos ">
        <div className="home-info">
          <i class="fas fa-atom"></i>
          <div className="home-card">
            <h3>Pourquoi cette plateforme ?</h3>
            <p>
              En partenariat avec Expairtise Pairformhand, chez CentralCare nous
              pensons que trouver un travail doit être facile, accessible et
              gratuit. Découvrez-en plus dans la section Qui sommes-nous.
            </p>
          </div>
        </div>
        <div className="home-info">
          <i class="fas fa-users"></i>
          <div className="home-card">
            <h3>Pour qui est-elle destinée ?</h3>
            <p>
              En partenariat avec Expairtise Pairformhand, chez CentralCare nous
              pensons que trouver un travail doit être facile, accessible et
              gratuit. Découvrez-en plus dans la section Qui sommes-nous.
            </p>
          </div>
        </div>
        <div className="home-info">
          <i class="fas fa-rocket"></i>
          <div className="home-card">
            <h3>Pourquoi s'abonner ?</h3>
            <p>
              En partenariat avec Expairtise Pairformhand, chez CentralCare nous
              pensons que trouver un travail doit être facile, accessible et
              gratuit. Découvrez-en plus dans la section Qui sommes-nous.
            </p>
          </div>
        </div>
      </div>
      <div className="subtitle-home">
        <h2>C'est parti !</h2>
      </div>
      <HomeButton />
    </div>
  );
};

export default Accueil;
