const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Eusef Karl Blancada</p>
      <a href="#home" className="back-to-top">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
};

export default Footer;