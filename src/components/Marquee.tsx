import type { IconType } from 'react-icons';
import { BsCpu } from 'react-icons/bs';
import { FaJava } from 'react-icons/fa6';
import { SiJavascript, SiPython, SiReact, SiRust, SiTypescript } from 'react-icons/si';
import { TbHexagonLetterCFilled } from 'react-icons/tb';

type Language = {
  name: string;
  Logo: IconType;
};

const languages: Language[] = [
  { name: 'Rust', Logo: SiRust },
  { name: 'TypeScript', Logo: SiTypescript },
  { name: 'Python', Logo: SiPython },
  // The Simple Icons C has a flat base that touches its frame and looks cropped
  { name: 'C', Logo: TbHexagonLetterCFilled },
  { name: 'Java', Logo: FaJava },
  { name: 'JavaScript', Logo: SiJavascript },
  // NASM has no logo in the icon set, so it uses a generic CPU icon
  { name: 'NASM', Logo: BsCpu },
  { name: 'React', Logo: SiReact },
];

const MarqueeGroup = () => (
  <div className="marquee-group">
    {languages.map(({ name, Logo }) => (
      <div key={name} className="marquee-item">
        <Logo className="marquee-logo" />
        <span>{name}</span>
      </div>
    ))}
  </div>
);

const Marquee = () => {
  const names = languages.map(({ name }) => name).join(', ');

  return (
    <div id="stack" className="marquee" role="img" aria-label={`Languages and tools: ${names}`}>
      <div className="marquee-track" aria-hidden="true">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
};

export default Marquee;
