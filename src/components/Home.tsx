import profileImage from '../assets/profile-image.jpg';

type SocialLink = {
  label: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/evolto06' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eusefkarl/' },
  { label: 'Instagram', href: 'https://www.instagram.com/karito.0.0/' },
  { label: 'Facebook', href: 'https://www.facebook.com/euxef.karl' },
];

// TODO: set to the résumé PDF URL. The button stays hidden while this is null.
const resumeUrl: string | null = null;

const Home = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="hero-status">
          <span className="hero-status-dot" aria-hidden="true" />
          3rd-year BS Computer Science · UP Visayas
        </p>
        <h1>
          Eusef Karl
          <br />
          Blancada<span className="accent-text">.</span>
        </h1>
        <p className="hero-tagline">
          I build software from the <span className="hero-highlight">bare metal</span> up.
        </p>
        <p className="hero-bio">
          Aspiring software developer, hobbyist game developer and low-level enthusiast — from NASM and Rust to
          full-stack apps and AI-powered tools.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-accent">
            See my work <span aria-hidden="true">↘</span>
          </a>
          {resumeUrl && (
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Résumé <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <div className="hero-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-offset" aria-hidden="true" />
        <div className="hero-photo">
          <img src={profileImage} alt="Portrait of Eusef Karl Blancada" />
        </div>
        <div className="hero-badge">
          <div className="hero-badge-prompt">~ $ whoami</div>
          <div>
            builder<span className="accent-text">::</span>low_level
            <span className="hero-caret accent-text" aria-hidden="true">
              ▍
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
