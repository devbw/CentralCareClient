import React from 'react';

const Adverts = (props) => {
  return (
    <div className="adverts">
      <div className="top-adverts">
        <span>{props.user_id}</span>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <h3>{props.title}</h3>
      <div className="category-adverts">
        <p>Catégorie :</p>
        <p>{props.category}</p>
      </div>
      <div>
        <p>Type :</p>
        <p>{props.type}</p>
      </div>
      <div>
        {props.content}
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