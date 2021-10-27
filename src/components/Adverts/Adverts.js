import React from 'react';

const Adverts = (props) => {
  const {advert} = props;
  return (
    <div className="adverts" key={advert.id}>
      <div className="top-adverts mb">
        <span>{advert.user_id}</span>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <h3 className="mb">{advert.title}</h3>
      <div className="category-adverts mb">
        <p>Catégorie : </p>
        <p>{advert.category}</p>
      </div>
      <div className="type-adverts mb">
        <p>Type : </p>
        <p>{advert.type}</p>
      </div>
      <div className="mb">
        {advert.post_content}
      </div>
      <div className="actions">
        <div>
          <button>Voir tout</button>
          <button>Répondre</button>
        </div>
        <div>
          <i className="far fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default Adverts;