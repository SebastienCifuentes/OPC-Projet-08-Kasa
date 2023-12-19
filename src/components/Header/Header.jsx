import logo from '../../assets/logokasa.svg';
import Navbar from '../Navbar/Navbar';

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <Navbar />
    </header>
  );
}
