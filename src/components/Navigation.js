import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

const Navigation = () => {
  useEffect(() => {
    getCookie();
  }, [])

  const getCookie = () => {
    let cookie = Cookies.get('token');
    console.log(cookie)
  }

  return (
    <div className="navigation-bar">
      <NavLink exact to="/">
        <p className="centralcare">CentralCare</p>
      </NavLink>
      <nav className="nav-list">
        <NavLink exact to="/" activeClassName="nav-active">
          <p className="nav-item">Accueil</p>
        </NavLink>
        <NavLink exact to="/annonces" activeClassName="nav-active">
          <p className="nav-item">Annonces</p>
        </NavLink>
        <NavLink exact to="/a-propos" activeClassName="nav-active">
          <p className="nav-item">Qui sommes-nous</p>
        </NavLink>
        <NavLink exact to="/partenaires" activeClassName="nav-active">
          <p className="nav-item">Partenaires</p>
        </NavLink>
        <NavLink exact to="/contact" activeClassName="nav-active">
          <p className="nav-item">Contact</p>
        </NavLink>
      </nav>
      <div className="nav-bars">
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
      </div>
    </div>
  );
};

export default Navigation;
