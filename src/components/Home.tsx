import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import profileImage from '../assets/profile-image.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h2>Hello, I'm Eusef Karl Blancada</h2>
          <p>
            I am a 3rd Year BS Computer Science student of University of the Philippines Visayas. An aspiring Software Developer,
            Hobbyist Game Developer, and Low-Level Enthusiast. I am passionate about creating innovative and efficient software solutions and learning about Computer Science.
          </p>
          <div className="home-icons">
            <a href="https://github.com/evolto06" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub profile">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/eusefkarl/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn profile">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.facebook.com/euxef.karl" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Facebook profile">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/karito.0.0/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram profile">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
        <div className="home-visual">
          <div className="home-image-placeholder">
            <img className="profile-image" src={profileImage} alt="Eusef Karl Blancada" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;