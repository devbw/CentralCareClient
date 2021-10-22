import React from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Annonces = () => {
  return (
    <div className="container-adverts">
      <Navigation/>
      <div className="adverts-filter">
        <button className="adverts-publish">
          <i className="fas fa-plus"></i>
          PUBLIER
        </button>
        <input type="text" className="search" placeholder="Votre recherche"/>
        <input type="text" className="city" placeholder="Ville, Ex : Aix-en-Provence"/>
        <div className="filter">
          <button>
            <i class="fas fa-rocket"></i>
            <span>Rechercher</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Annonces;