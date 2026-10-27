import { useState } from 'react';

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: '#work', label: '01 Work' },
  { href: '#stack', label: '02 Stack' },
  { href: '#about', label: '03 About' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Primary">
        <a href="#top" className="nav-wordmark" onClick={closeMenu}>
          eu<span className="accent-text">/</span>blancada
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <ul id="primary-navigation" className={`nav-menu${menuOpen ? ' is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Let’s talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
