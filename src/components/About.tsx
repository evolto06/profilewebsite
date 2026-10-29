type Capability = {
  index: string;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    index: '02',
    title: 'Full-stack development',
    description: 'Frontends and backends end to end — React, TypeScript, Supabase, Firebase.',
  },
  {
    index: '03',
    title: 'AI engineering & ML',
    description: 'Designing practical AI-powered tools and building models that learn from data.',
  },
  {
    index: '04',
    title: 'Agentic coding',
    description: 'Using AI agents as a force multiplier for generation, review and debugging.',
  },
  {
    index: '05',
    title: 'Game development',
    description: 'A hobbyist’s love for game feel, animation and local multiplayer.',
  },
];

const gcdLoop = ['  xor  edx, edx', '  div  ecx', '  mov  eax, ecx', '  mov  ecx, edx', '  test ecx, ecx', '  jnz  .loop'].join('\n');

const About = () => {
  return (
    <section id="about" className="section about-section">
      <p className="section-kicker">02 — What I do</p>
      <h2 className="section-title about-title">Comfortable anywhere in the stack.</h2>
      <div className="capability-grid">
        <div className="capability-card capability-card-accent">
          <div className="capability-accent-text">
            <span className="capability-index">01</span>
            <h3>
              Low-level &amp;
              <br />
              embedded systems
            </h3>
            <p>Assembly, C and Rust — microcontrollers, embedded Linux, and knowing what the machine is actually doing.</p>
          </div>
          <pre className="code-block">
            <code>
              <span className="code-comment">; gcd_asm — euclid</span>
              {'\n'}
              <span className="accent-text">.loop:</span>
              {'\n'}
              {gcdLoop}
            </code>
          </pre>
        </div>
        {capabilities.map((capability) => (
          <div key={capability.index} className="capability-card">
            <span className="capability-index">{capability.index}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
