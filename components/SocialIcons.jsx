import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
function SocialIcons() {
  return (
    <div className="flex items-center gap-3 h-14 sm:h-16 md:h-20 ">
      <FaGithubSquare
        size="100%"
        width="auto"
        color={"#21243D"}
        className="hover:fill-secondary cursor-pointer"
        title="Github"
      />
      <FaLinkedin
        size="auto"
        width="auto"
        color={"#21243D"}
        className="hover:fill-secondary cursor-pointer"
        title="LinkedIn"
      />
    </div>
  );
}

export default SocialIcons;
