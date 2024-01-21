import logo from '../../assets/logo-footer.svg';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={logo} alt="logo Kasa" />
      <p className="footer-container_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
