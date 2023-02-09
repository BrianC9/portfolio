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
} from "react-icons/si";
import { FaReact, FaGithub, FaNodeJs, FaJava } from "react-icons/fa";
const IconsMap = new Map();

export const iconResolver = (id, size) => {
  IconsMap.set("react", <FaReact color="#5ED3F3" size={size} />);
  IconsMap.set("spring", <SiSpring color="#70B366" size={size} />);
  IconsMap.set("springboot", <SiSpringboot color="#70B366" size={size} />);
  IconsMap.set("javascript", <SiJavascript color="#EFD81D" size={size} />);
  IconsMap.set("typescript", <SiTypescript color="#2F74C0" size={size} />);
  IconsMap.set("express", <SiExpress color="" size={size} />);
  IconsMap.set("postgresql", <SiPostgresql color="#31648c" size={size} />);
  IconsMap.set("mysql", <SiMysql color="#d98b1b" size={size} />);
  IconsMap.set("mongodb", <SiMongodb color="#0fa54d" size={size} />);
  IconsMap.set("nextjs", <SiNextdotjs size={size} />);
  IconsMap.set("github", <FaGithub size={size} />);
  IconsMap.set("nodejs", <FaNodeJs color="#21A366" size={size} />);
  IconsMap.set("java", <FaJava color="#d98b1b" size={size} />);
  IconsMap.set("tailwind", <SiTailwindcss color="#38BDF8" size={size} />);
  return (
    <div>{IconsMap.get(id)}</div> ?? (
      <h2 className="font-black  text-white bg-primary p-3 rounded-md">
        {id.length > 4 ? id.substring(0, 3).toUpperCase() : id.toUpperCase()}
      </h2>
    )
  );
};
