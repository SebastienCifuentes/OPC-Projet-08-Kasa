import logo from '../../assets/logokasa.svg';

export function Footer() {
  return (
    <footer className='footer-container'>
      <img src={logo} alt="logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
