import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Adverts from '../components/Adverts/Adverts';
import Cookies from 'js-cookie';
import Footer from '../components/footer'

const Annonces = () => {
	const [adverts, setAdverts] = useState([]);
  const [loggedCookie, setLoggedCookie] = useState(false);

	useEffect(() => {
    getCookie();
		getAdverts();
	}, []);

  const getCookie = () => {
    let cookie = Cookies.get('token');

    if(cookie === undefined) {
      setLoggedCookie(false);
    } else {
      setLoggedCookie(true);
    }
  }

	const getAdverts = () => {
		axios
			.get('https://centralcare.srpweb.fr/annonces')
			.then((res) => {
				setAdverts(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='container-adverts'>
			<Navigation />
      <h2>Trouvez votre mission sans frais d'agence !</h2>
			<div className='adverts-filter'>
        {loggedCookie ? <NavLink exact to="/poster" activeClassName="nav-active">
          <button className='adverts-publish'>
            <i className='fas fa-plus'></i>
            PUBLIER
          </button>
        </NavLink> : <NavLink exact to="/login-register" activeClassName="nav-active">
          <button className='adverts-publish'>
            Connectez-vous pour publier
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
			<div className='block-adverts'>
				{adverts.map((advert) => (
					<Adverts advert={advert} key={advert.id} />
				))}
			</div>
      <Footer />
		</div>
	);
};

export default Annonces;
