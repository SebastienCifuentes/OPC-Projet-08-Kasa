import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar_button-home">
        Accueil
      </NavLink>
      <NavLink to="/about" className="navbar_button-about">
        A propos
      </NavLink>
    </nav>
  );
};
