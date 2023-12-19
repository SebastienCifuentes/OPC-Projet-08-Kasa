import logo from '../assets/logokasa.svg';

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#accueil">Accueil</a>
          </li>
          <li>
            <a href="#apropos">À propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
