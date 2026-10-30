const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <span>© {new Date().getFullYear()} Eusef Karl Blancada</span>
        <span>Built with React + Vite</span>
        <a href="#top" className="text-link">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
