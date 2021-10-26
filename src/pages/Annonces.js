import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import axios from "axios";
import Adverts from "../components/Adverts/Adverts";

const Annonces = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdverts();
  }, []);

  const getAdverts = () => {
    axios
      .get("http://localhost:3003/posts")
      .then((res) => {
        setAdverts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-adverts">
      <Navigation />
      <div className="adverts-filter">
        <button className="adverts-publish">
          <i className="fas fa-plus"></i>
          PUBLIER
        </button>
        <input type="text" className="search" placeholder="Votre recherche" />
        <input
          type="text"
          className="city"
          placeholder="Ville, Ex : Aix-en-Provence"
        />
        <div className="filter">
          <button>
            <i className="fas fa-rocket"></i>
            <span>Rechercher</span>
          </button>
        </div>
      </div>
      <div className="block-adverts">
        {adverts.map((advert) => (
          <Adverts
            user_id={advert.user_id}
            type={advert.type}
            category={advert.category}
            title={advert.title}
            post_content={advert.post_content}
            key={advert.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Annonces;
