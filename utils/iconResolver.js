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

IconsMap.set("react", <FaReact color="#5ED3F3" size={"auto"} />);
IconsMap.set("spring", <SiSpring size={"auto"} color="#70B366" />);
IconsMap.set("springboot", <SiSpringboot color="#70B366" size={"auto"} />);
IconsMap.set("javascript", <SiJavascript color="#EFD81D" size={"auto"} />);
IconsMap.set("typescript", <SiTypescript color="#2F74C0" size={"auto"} />);
IconsMap.set("express", <SiExpress color="" size={"auto"} />);
IconsMap.set("postgresql", <SiPostgresql color="#31648c" size={"auto"} />);
IconsMap.set("mysql", <SiMysql color="#d98b1b" size={"auto"} />);
IconsMap.set("mongodb", <SiMongodb color="#0fa54d" size={"auto"} />);
IconsMap.set("nextjs", <SiNextdotjs size={"auto"} />);
IconsMap.set("github", <FaGithub size={"auto"} />);
IconsMap.set("nodejs", <FaNodeJs color="#21A366" size={"auto"} />);
IconsMap.set("java", <FaJava color="#d98b1b" size={"auto"} />);
IconsMap.set("tailwind", <SiTailwindcss color="#38BDF8" size={"auto"} />);
export const iconResolver = (id, size) => {
  return (
    <div className={`h-${size}`}>{IconsMap.get(id)}</div> ?? (
      <h2 className="font-black  text-white bg-primary p-3 rounded-md">
        {id.length > 4 ? id.substring(0, 3).toUpperCase() : id.toUpperCase()}
      </h2>
    )
  );
};
