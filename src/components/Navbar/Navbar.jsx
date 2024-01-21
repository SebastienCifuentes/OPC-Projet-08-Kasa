import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar_button-home">
        Accueil
      </Link>
      <Link to="/about" className="navbar_button-about">
        A propos
      </Link>
    </nav>
  );
};
