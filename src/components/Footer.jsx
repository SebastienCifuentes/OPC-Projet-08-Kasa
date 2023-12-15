import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
