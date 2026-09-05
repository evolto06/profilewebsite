type Project = {
  id: number;
  title: string;
  description: string;
  livePreview?: string;
  techStack?: string[];
  status: 'deployed' | 'under-construction';
};

const ProjectPreview = ({ project }: { project: Project }) => {
  return (
    <div className="static-preview">
      <img
        src="/tuonta-preview.png"
        alt={`${project.title} website preview`}
        className="static-preview-image"
      />
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Tuonta',
      description: 'A study group finder application.',
      livePreview: 'https://tuonta.vercel.app/',
      techStack: ['React', 'Supabase'],
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
      <div className="projects-heading">
        <div>
          <span className="section-kicker">Selected work</span>
          <h2>Recent projects</h2>
        </div>
        <span className="project-count">{projects.length.toString().padStart(2, '0')} projects</span>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.status === 'deployed' && (
              <div className="project-showcase">
                <ProjectPreview project={project} />
              </div>
            )}
            <div className="project-card-content">
              <div className="project-card-title">
                <h3>{project.title}</h3>
                {project.status === 'deployed' && <span className="project-status">Live</span>}
              </div>
              <p>{project.description}</p>
              {project.techStack && (
                <div className="project-tech-stack" aria-label="Technologies used">
                  {project.techStack.map((technology) => (
                    <span key={technology} className="tech-tag">
                      {technology}
                    </span>
                  ))}
                </div>
              )}
              {project.status === 'deployed' && (
                <div className="project-actions">
                  <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="btn-live">
                    Open project <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </div>
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