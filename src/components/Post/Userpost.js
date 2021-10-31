import React from 'react';

const Userpost = (props) => {
	const { userpost } = props;
	const date = new Date(userpost.published_at);

	return (
		<div className='post' key={userpost.id}>
			<div className='top-post mb'>
				<div>
					<span>{userpost.users_permissions_user.firstname},&#x20;</span>
					<span>à {userpost.city}</span>
					<span>&#x20; ({userpost.postal_code}) &#x20;</span>
					<span>
						- publié le{' '}
						{date.toLocaleDateString('fr-FR', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						})}
					</span>
				</div>
				<i className='fas fa-ellipsis-h' title='Options'></i>
			</div>
			<h3 className='mb'>{userpost.title}</h3>
			<div className='divider mb'></div>
			<div className='category-post mb'>
				<p>Catégorie : </p>
				<p>{userpost.category}</p>
			</div>
			<div className='type-post mb'>
				<p>Type : </p>
				<p>{userpost.type}</p>
			</div>
			<div className='divider mb'></div>
			<div className='mb content-post'>
				{userpost.content.substring(0, 150)}
			</div>
			<div className='divider mb'></div>
			<div className='actions'>
				<div>
					<button>Voir tout</button>
					<button>Répondre</button>
				</div>
				<i className='far fa-heart' title='Ajouter aux favoris'></i>
			</div>
		</div>
	);
};

export default Userpost;
