import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

const Navigation = () => {
  const [loggedCookie, setLoggedCookie] = useState(false);

  useEffect(() => {
    getCookie();
  }, [])

  const getCookie = () => {
    let cookie = Cookies.get('token');

    if(cookie === undefined) {
      setLoggedCookie(false);
    } else {
      setLoggedCookie(true);
    }
  }

  return (
    <div className="navigation-bar">
      <NavLink exact to="/">
        <p className="centralcare">CentralCare</p>
      </NavLink>

      {loggedCookie ? <nav className="nav-list">
        <NavLink exact to="/" activeClassName="nav-active">
          <p className="nav-item">Accueil</p>
        </NavLink>
        <NavLink exact to="/annonces" activeClassName="nav-active">
          <p className="nav-item">Annonces</p>
        </NavLink>
        <NavLink exact to="/poster" activeClassName="nav-active">
          <p className="nav-item">Poster une annonce</p>
        </NavLink>
        <NavLink exact to="/mon-compte" activeClassName="nav-active">
          <p className="nav-item">Mon compte</p>
        </NavLink>
        <NavLink exact to="/contact" activeClassName="nav-active">
          <p className="nav-item">Contact</p>
        </NavLink>
      </nav> : <nav className="nav-list">
        <NavLink exact to="/" activeClassName="nav-active">
          <p className="nav-item">Accueil</p>
        </NavLink>
        <NavLink exact to="/annonces" activeClassName="nav-active">
          <p className="nav-item">Annonces</p>
        </NavLink>
        <NavLink exact to="/contact" activeClassName="nav-active">
          <p className="nav-item">Contact</p>
        </NavLink>
        <NavLink exact to="/login-register" activeClassName="nav-active">
          <p className="nav-item-connect">Inscription/Connexion</p>
        </NavLink>
      </nav>}

      {loggedCookie ? <div className="nav-bars">
        <NavLink exact to="/" className="resp-icon" activeClassName="resp-active">
          <i className="fas fa-home"></i>
        </NavLink>
        <NavLink exact to="/annonces" className="resp-icon" activeClassName="resp-active">
          <i className="fas fa-search"></i>
        </NavLink>
        <NavLink exact to="/poster" className="resp-icon" activeClassName="resp-active">
          <i className="far fa-plus-square"></i>
        </NavLink>
        <NavLink exact to="/mon-compte" className="resp-icon" activeClassName="resp-active">
          <i className="far fa-user-circle"></i>
        </NavLink>
      </div> : <div className="nav-bars">
        <NavLink exact to="/" className="resp-icon" activeClassName="resp-active">
          <i className="fas fa-home"></i>
        </NavLink>
        <NavLink exact to="/annonces" className="resp-icon" activeClassName="resp-active">
          <i className="fas fa-search"></i>
        </NavLink>
        <NavLink exact to="/login-register" className="resp-icon" activeClassName="resp-active">
          <span>Connexion</span>
        </NavLink>
        <NavLink exact to="/login-register" className="resp-icon" activeClassName="resp-active">
          <span>Inscription</span>
        </NavLink>
      </div>}

    </div>
  );
};

export default Navigation;
