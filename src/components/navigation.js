import React from 'react';
import { NavLink } from 'react-router-dom'

const navigation = () => {
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
        <NavLink exact to="/annonces" activeClassName="nav-active">
          <p className="nav-item">Qui sommes-nous</p>
        </NavLink>
        <NavLink exact to="/annonces" activeClassName="nav-active">
          <p className="nav-item">Partenaires</p>
        </NavLink>
        <NavLink exact to="/annonces" activeClassName="nav-active">
          <p className="nav-item">Contact</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default navigation;