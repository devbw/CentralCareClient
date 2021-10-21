import React from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Annonces = () => {
  return (
    <div className="container-adverts">
      <Navigation/>
      <div className="adverts-filter">
        <div className="filter">
          <input type="text" className="search" placeholder="Votre recherche"/>
        </div>
        <div className="filter">
          <input type="text" className="city" placeholder="Paris"/>
        </div>
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