import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h2>Hello, I'm Eusef Karl Blancada</h2>
          <p>
            I am a 3rd Year BS Computer Science student of University of the Philippines Visayas.
            My nickname is Eu.
          </p>
        </div>
        <div className="home-image-placeholder">
          <h1>Test Image Placeholder</h1>
        </div>
      </div>
      <div className="home-icons">
        <a href="#" className="icon-link">
          <FaGithub className="icon" />
        </a>
        <a href="#" className="icon-link">
          <FaLinkedin className="icon" />
        </a>
        <a href="#" className="icon-link">
          <FaFacebook className="icon" />
        </a>
        <a href="#" className="icon-link">
          <FaInstagram className="icon" />
        </a>
      </div>
    </section>
  );
};

export default Home;