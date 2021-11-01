import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Userpost from '../components/Post/Userpost';
import Cookies from 'js-cookie';
import Spinner from '../components/spinner';

const Posts = () => {
	const [post, setPost] = useState([]);
  const [loggedCookie, setLoggedCookie] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
    getCookie();
		getPost();
	}, []);

  const getCookie = () => {
    let cookie = Cookies.get('token');

    if(cookie === undefined) {
      setLoggedCookie(false);
    } else {
      setLoggedCookie(true);
    }
  }

	const getPost = () => {
		axios
			.get('https://centralcare.srpweb.fr/annonces')
			.then((res) => {
				setPost(res.data);
				console.log(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='container-post'>
			<Navigation />
      <h2>Trouvez votre mission sans frais d'agence !</h2>
			<div className='post-filter'>
        {loggedCookie ? <NavLink exact to="/poster" activeClassName="nav-active">
          <button className='post-publish'>
            <i className='fas fa-plus'></i>
            PUBLIER
          </button>
        </NavLink> : <NavLink exact to="/login-register" activeClassName="nav-active">
          <button className='post-publish'>
            CONNECTEZ-VOUS POUR PUBLIER
          </button>
        </NavLink>}

				<input type='text' className='search' placeholder='Votre recherche' />
				<input
					type='text'
					className='city'
					placeholder='Ville, Ex : Aix-en-Provence'
				/>
				<div className='filter'>
					<button>
						<i className='fas fa-rocket'></i>
						<span>Rechercher</span>
					</button>
				</div>
			</div>
			{loading ? <Spinner />: ''}
			<div className='block-post'>
				{post.map((userpost) => (
					<Userpost userpost={userpost} key={userpost.id} />
				))}
			</div>
		</div>
	);
};

export default Posts;
