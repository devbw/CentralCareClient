import React from "react";
import Navigation from "../components/Navigation";
import HomeButton from "../components/homeButton";
import Footer from "../components/footer";

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
      <div className="home-wrapper">
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
      </div>
      <div className="home-infos ">
        <div className="home-info">
          <i className="fas fa-atom"></i>
          <div className="home-card">
            <h3>Qui sommes-nous ?</h3>
            <p>
              En partenariat avec Expairtise Pairformhand, chez CentralCare nous
              pensons que trouver un travail doit être facile, accessible et
              gratuit. Découvrez-en plus dans la section Qui sommes-nous.
            </p>
          </div>
        </div>
        <div className="home-info">
          <i className="fas fa-wifi"></i>
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
          <i className="fas fa-users"></i>
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
          <i className="fas fa-people-carry"></i>
          <div className="home-card">
            <h3>Intervenant ? Bénéficiaire ?</h3>
            <p>
              En partenariat avec Expairtise Pairformhand, chez CentralCare nous
              pensons que trouver un travail doit être facile, accessible et
              gratuit. Découvrez-en plus dans la section Qui sommes-nous.
            </p>
          </div>
        </div>
        <div className="home-info">
          <i className="fas fa-paper-plane"></i>
          <div className="home-card">
            <h3>Nous contacter</h3>
            <p>
              Une question ? Un problème ? Une demande ?
              C'est ici que ça se passe ! N'hésitez pas et envoyez-nous un message !
            </p>
          </div>
        </div>
        <div className="home-info">
        <i className="fas fa-handshake"></i>
          <div className="home-card">
            <h3>Nos Partenaires</h3>
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
      <Footer />
    </div>
  );
};

export default Accueil;
