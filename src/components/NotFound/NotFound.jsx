import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <p>404</p>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
