type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  repo?: string;
  livePreview?: string;
  techStack?: string[];
};

const featuredProject: Project = {
  id: 1,
  title: 'Tuonta',
  // TODO: add a one-line statement of the problem it solves and the owner's role.
  description: 'A study group finder application.',
  image: '/projects/tuonta-preview.png',
  imageAlt: 'Tuonta website preview',
  // TODO: add the year ("FEATURED · YYYY") once verified.
  category: 'FEATURED',
  // TODO: add `repo` once the source link is provided. The Source button stays hidden until then.
  livePreview: 'https://tuonta.vercel.app/',
  techStack: ['React', 'Supabase'],
};

const projects: Project[] = [
  {
    id: 2,
    title: 'TrapScript',
    description:
      'A dynamically typed scripting language styled on internet slang — scanner, parser, AST and evaluator. Built with Joseph Patrick Salomeo.',
    image: '/projects/trapscript.png',
    imageAlt: 'A TrapScript program and its terminal output',
    category: 'LANGUAGE · RUST',
    repo: 'https://github.com/ysxiaixsy/cmsc-124-rust',
  },
  {
    id: 3,
    title: 'FateGrandCalculator',
    description:
      'An unofficial Fate/Grand Order damage calculator — one Rust engine for desktop (egui) and WebAssembly, with step-by-step breakdowns.',
    image: '/projects/fategrandcalculator.png',
    imageAlt: 'FateGrandCalculator: attack order cards and estimated damage per card',
    category: 'DESKTOP APP · RUST / EGUI',
    repo: 'https://github.com/evolto06/FateGrandCalculator',
  },
  {
    id: 4,
    title: 'Damang Damang',
    description:
      'A local fighting game inspired by Filipino spider fights on twigs — bite, web-stun and swing back on silk, solo or two-player.',
    image: '/projects/damang-damang.png',
    imageAlt: 'Damang Damang gameplay: two spiders on a wire above a barangay street',
    category: 'BROWSER GAME · WEBGL',
    // TODO: add `repo` once evolto06/damang-damang is confirmed public or hosted. The link stays hidden until then.
  },
];

const FeaturedProject = ({ project }: { project: Project }) => {
  return (
    <article className="featured-card lift">
      <div className="featured-media">
        <div className="browser-frame">
          <div className="browser-bar">
            <span className="browser-dot" aria-hidden="true" />
            <span className="browser-dot" aria-hidden="true" />
            <span className="browser-dot" aria-hidden="true" />
            <span className="browser-url">tuonta.vercel.app</span>
          </div>
          <img src={project.image} alt={project.imageAlt} />
        </div>
      </div>
      <div className="featured-body">
        <div>
          <div className="featured-meta">
            <span className="project-category">{project.category}</span>
            {project.livePreview && (
              <span className="live-badge">
                <span className="live-badge-dot" aria-hidden="true" />
                Live
              </span>
            )}
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.techStack && (
            <div className="tech-tags" aria-label="Technologies used">
              {project.techStack.map((technology) => (
                <span key={technology} className="tech-tag">
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="featured-actions">
          {project.livePreview && (
            <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              Open live site <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="project-card lift">
      <img src={project.image} alt={project.imageAlt} loading="lazy" />
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-link project-link">
          View repo <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
};

const Projects = () => {
  return (
    <section id="work" className="section work-section">
      <div className="work-heading">
        <div>
          <p className="section-kicker">01 — Selected work</p>
          <h2 className="section-title">
            Things I’ve shipped
            <br />
            &amp; things I’m building.
          </h2>
        </div>
        <a href="https://github.com/evolto06" target="_blank" rel="noopener noreferrer" className="text-link">
          All repos on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
      <FeaturedProject project={featuredProject} />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
