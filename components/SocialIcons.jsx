import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
function SocialIcons() {
  return (
    <div className="flex items-center gap-3 h-10">
      <FaGithubSquare
        color={"#21243D"}
        className="hover:fill-secondary cursor-pointer"
        title="Github"
        size={"auto"}
      />
      <FaLinkedin
        color={"#21243D"}
        size={"auto"}
        className="hover:fill-secondary cursor-pointer"
        title="LinkedIn"
      />
    </div>
  );
}

export default SocialIcons;
