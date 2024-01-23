import { Link } from 'react-router-dom';

export const NotFound = () => {

  document.title = "Kasa | Erreur 404";

  return (
    <div className="notfound_container">
      <p className="notfound_number">404</p>
      <p className="notfound_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound_backbtn">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};
