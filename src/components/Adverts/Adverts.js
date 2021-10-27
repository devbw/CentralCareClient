import React from 'react';

const Adverts = (props) => {
	const { adverts } = props;

	if (adverts.length > 0) {
		return adverts.map((advert, index) => {
			console.log(advert);
			return (
				<div className='adverts' key={advert.id}>
					<div className='top-adverts'>
						<span>{advert.user_id}</span>
						<i className='fas fa-ellipsis-h'></i>
					</div>
					<h3>{advert.title}</h3>
					<div className='category-adverts'>
						<p>Catégorie :</p>
						<p>{advert.category}</p>
					</div>
					<div>
						<p>Type :</p>
						<p>{advert.type}</p>
					</div>
					<div>{advert.content}</div>
					<div className='actions'>
						<div>
							<button>Voir tout</button>
							<button>Répondre</button>
						</div>
						<div>
							<i className='far fa-heart'></i>
						</div>
					</div>
				</div>
			);
		});
	} else {
		return <p>Aucune annonce pour le moment</p>;
	}
};

export default Adverts;
