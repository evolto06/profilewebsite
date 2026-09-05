import { SiRust, SiTypescript, SiJavascript, SiPython, SiC } from 'react-icons/si';

const About = () => {
  const proficiencies = [
    { name: 'Rust', Icon: SiRust },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'Python', Icon: SiPython },
    { name: 'C', Icon: SiC },
  ];

  const skills = [
    { title: 'Full Stack Development', description: 'Experience in building both frontend and backend applications.' },
    { title: 'Embedded Systems', description: 'Working with microcontrollers and embedded Linux.' },
    { title: 'Agentic Coding', description: 'Utilizing AI agents to assist in code generation and debugging.' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="proficiencies">
          <h3>Proficiencies</h3>
          <div className="proficiency-icons">
            {proficiencies.map((prof, index) => (
              <div key={index} className="proficiency-item">
                <prof.Icon className="icon" />
                <span className="proficiency-name">{prof.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-cards">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;