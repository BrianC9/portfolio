// TODO: solve Error: <svg> attribute width: Expected length, "auto".
import {
  SiSpring,
  SiSpringboot,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';
import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaExternalLinkSquareAlt,
} from 'react-icons/fa';
const IconsMap = new Map();

export const iconResolver = (id, size, name) => {
  IconsMap.set(
    'redirect',
    <FaExternalLinkSquareAlt title={name} size={size} />
  );
  IconsMap.set('react', <FaReact title={name} color='#5ED3F3' size={size} />);
  IconsMap.set('spring', <SiSpring title={name} color='#70B366' size={size} />);
  IconsMap.set(
    'springboot',
    <SiSpringboot title={name} color='#70B366' size={size} />
  );
  IconsMap.set(
    'javascript',
    <SiJavascript title={name} color='#EFD81D' size={size} />
  );
  IconsMap.set(
    'typescript',
    <SiTypescript title={name} color='#2F74C0' size={size} />
  );
  IconsMap.set('express', <SiExpress title={name} color='' size={size} />);
  IconsMap.set(
    'postgresql',
    <SiPostgresql title={name} color='#31648c' size={size} />
  );
  IconsMap.set('mysql', <SiMysql title={name} color='#d98b1b' size={size} />);
  IconsMap.set(
    'mongodb',
    <SiMongodb title={name} color='#0fa54d' size={size} />
  );
  IconsMap.set('nextjs', <SiNextdotjs title={name} size={size} />);
  IconsMap.set('github', <FaGithub title={name} size={size} />);
  IconsMap.set('nodejs', <FaNodeJs title={name} color='#21A366' size={size} />);
  IconsMap.set('java', <FaJava title={name} color='#d98b1b' size={size} />);
  IconsMap.set(
    'tailwind',
    <SiTailwindcss title={name} color='#38BDF8' size={size} />
  );
  return (
    <div>{IconsMap.get(id)}</div> ?? (
      <h2 className='font-black  text-white bg-primary p-3 rounded-md'>
        {id[0].toUpperCase()}
      </h2>
    )
  );
};
