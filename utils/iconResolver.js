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
import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaGithubSquare,
} from "react-icons/fa";
const IconsMap = new Map();

export const iconResolver = (id, size, name) => {
  IconsMap.set(
    "redirect",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      title={name}
      height={size}
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M10.5 2.49976V3.99976H13.1925L5.82 11.3723L6.8775 12.4298L14.25 5.05726V7.74976H15.75V2.49976M14.25 14.4998H3.75V3.99976H9V2.49976H3.75C3.35218 2.49976 2.97064 2.65779 2.68934 2.9391C2.40804 3.2204 2.25 3.60193 2.25 3.99976V14.4998C2.25 14.8976 2.40804 15.2791 2.68934 15.5604C2.97064 15.8417 3.35218 15.9998 3.75 15.9998H14.25C14.6478 15.9998 15.0294 15.8417 15.3107 15.5604C15.592 15.2791 15.75 14.8976 15.75 14.4998V9.24976H14.25V14.4998Z"
        fill="#21243D"
      />
    </svg>
  );
  IconsMap.set("react", <FaReact title={name} color="#5ED3F3" size={size} />);
  IconsMap.set("spring", <SiSpring title={name} color="#70B366" size={size} />);
  IconsMap.set(
    "springboot",
    <SiSpringboot title={name} color="#70B366" size={size} />
  );
  IconsMap.set(
    "javascript",
    <SiJavascript title={name} color="#EFD81D" size={size} />
  );
  IconsMap.set(
    "typescript",
    <SiTypescript title={name} color="#2F74C0" size={size} />
  );
  IconsMap.set("express", <SiExpress title={name} color="" size={size} />);
  IconsMap.set(
    "postgresql",
    <SiPostgresql title={name} color="#31648c" size={size} />
  );
  IconsMap.set("mysql", <SiMysql title={name} color="#d98b1b" size={size} />);
  IconsMap.set(
    "mongodb",
    <SiMongodb title={name} color="#0fa54d" size={size} />
  );
  IconsMap.set("nextjs", <SiNextdotjs title={name} size={size} />);
  IconsMap.set("github", <FaGithub title={name} size={size} />);
  IconsMap.set("nodejs", <FaNodeJs title={name} color="#21A366" size={size} />);
  IconsMap.set("java", <FaJava title={name} color="#d98b1b" size={size} />);
  IconsMap.set(
    "tailwind",
    <SiTailwindcss title={name} color="#38BDF8" size={size} />
  );
  return (
    <div>{IconsMap.get(id)}</div> ?? (
      <h2 className="font-black  text-white bg-primary p-3 rounded-md">
        {id.length > 4 ? id.substring(0, 3).toUpperCase() : id.toUpperCase()}
      </h2>
    )
  );
};
