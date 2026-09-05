const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Tuonta',
      description: 'A study group finder application.',
      livePreview: 'https://tuonta.vercel.app/',
      status: 'deployed',
    },
    {
      id: 2,
      title: 'Under Construction',
      description: 'Project details coming soon.',
      status: 'under-construction',
    },
    {
      id: 3,
      title: 'Under Construction',
      description: 'Project details coming soon.',
      status: 'under-construction',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.status === 'deployed' && (
              <div className="project-actions">
                <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="btn-live">
                  View Live
                </a>
                {/* We can add an iframe for live preview if desired, but for simplicity we'll just link */}
                {/* <iframe src={project.livePreview} title="Live preview" className="live-preview"></iframe> */}
              </div>
            )}
            {project.status === 'under-construction' && (
              <div className="under-construction">
                <p>Under Construction</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;