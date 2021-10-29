import React from 'react';

const Adverts = (props) => {
  const {advert} = props;
  return (
    <div className="adverts" key={advert.id}>
      <div className="top-adverts mb">
        <div>
          <span>{advert.user_id},&#x20;</span>
          <span>à {advert.city},</span>
          <span>&#x20; {advert.postal_code}</span>
        </div>
        <i className="fas fa-ellipsis-h" title="Options"></i>
      </div>
      <h3 className="mb">{advert.title}</h3>
      <div className="divider mb"></div>
      <div className="category-adverts mb">
        <p>Catégorie : </p>
        <p>{advert.category}</p>
      </div>
      <div className="type-adverts mb">
        <p>Type : </p>
        <p>{advert.type}</p>
      </div>
      <div className="divider mb"></div>
      <div className="mb content-adverts">
        {advert.post_content}
      </div>
      <div className="divider mb"></div>
      <div className="actions">
        <div>
          <button>Voir tout</button>
          <button>Répondre</button>
        </div>
          <i className="far fa-heart" title="Ajouter aux favoris"></i>
      </div>
    </div>
  );
};

export default Adverts;