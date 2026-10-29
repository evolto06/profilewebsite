const languages: string[] = ['Rust', 'TypeScript', 'Python', 'C', 'Java', 'JavaScript', 'NASM', 'React'];

const MarqueeGroup = () => (
  <div className="marquee-group">
    {languages.map((language) => (
      <div key={language} className="marquee-item">
        <span>{language}</span>
        <span>✳</span>
      </div>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <div id="stack" className="marquee" role="img" aria-label={`Languages and tools: ${languages.join(', ')}`}>
      <div className="marquee-track" aria-hidden="true">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
};

export default Marquee;
