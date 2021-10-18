import React from 'react';
import { NavLink } from "react-router-dom";

const homeButton = () => {
  return (
    <div className="home-button fade-in-bottom">
      <NavLink exact to="/login-register">
        <button>CONNEXION</button>
      </NavLink>
      <NavLink exact to="/login-register">
        <button>INSCRIPTION</button>
      </NavLink>
    </div>
  );
};

export default homeButton;