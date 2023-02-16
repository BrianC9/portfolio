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
  SiCss3,
  SiNetlify,
  SiVercel,
  SiSupabase,
} from 'react-icons/si';
import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaExternalLinkSquareAlt,
} from 'react-icons/fa';
const IconsMap = new Map();
export const Remix = ({ size, title, color }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 256 297'
        color={color}
      >
        <title>{title}</title>
        <path
          fill='#121212'
          d='M141.675 0C218.047 0 256 36.35 256 94.414c0 43.43-26.707 71.753-62.785 76.474c30.455 6.137 48.259 23.604 51.54 58.065l.474 6.337l.415 5.924l.358 5.542l.249 4.179l.267 4.93l.138 2.814l.198 4.47l.159 4.222l.079 2.427l.107 3.888l.092 4.446l.033 2.148l.06 6.226l.02 6.496v3.885h-78.758l.004-1.62l.028-3.147l.047-3.065l.136-7.424l.035-2.489l.027-3.902l-.004-2.496l-.023-2.617l-.032-2.054l-.064-2.876l-.094-3.05l-.125-3.242l-.16-3.455l-.096-1.813l-.16-2.833l-.186-2.976l-.287-4.204l-.247-3.342a116.56 116.56 0 0 0-.247-3.02l-.202-1.934c-2.6-22.827-11.655-32.157-27.163-35.269l-1.307-.245a60.184 60.184 0 0 0-2.704-.408l-1.397-.164c-.236-.025-.472-.05-.71-.073l-1.442-.127l-1.471-.103l-1.502-.081l-1.514-.058l-1.544-.039l-1.574-.018L0 198.74V136.9h127.62c2.086 0 4.108-.04 6.066-.12l1.936-.095l1.893-.122l1.85-.15c.305-.028.608-.056.909-.086l1.785-.193a86.3 86.3 0 0 0 3.442-.475l1.657-.28c20.709-3.755 31.063-14.749 31.063-36.2c0-24.075-16.867-38.666-50.602-38.666H0V0h141.675ZM83.276 250.785c10.333 0 14.657 5.738 16.197 11.23l.203.79l.167.782l.109.617l.046.306l.078.603l.058.59l.023.29l.031.569l.01.278l.008.54v29.507H0v-46.102h83.276Z'
        />
      </svg>
    </>
  );
};
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
    'netlify',
    <SiNetlify title={name} color='#7AB9D0' size={size} />
  );
  IconsMap.set('vercel', <SiVercel title={name} size={size} />);
  IconsMap.set('css', <SiCss3 title={name} color='blue' size={size} />);
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
  IconsMap.set('remix', <Remix title={name} color='#0fa54d' size={size} />);
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
