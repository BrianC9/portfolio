import Link from "next/link";
function DesktopNav({ path }) {
  return (
    <nav>
      <ul className="hidden md:flex gap-6  ">
        <Link href={"/aboutme"}>
          <li
            className={`px-3 ${
              path === "/aboutme"
                ? "cursor-pointer uppercase list-none   font-bold  text-center  bg-secondary text-white transition-all duration-200 rounded-full"
                : "cursor-pointer uppercase list-none  text-secondary font-bold  text-center  hover:bg-secondary hover:text-white transition-all duration-200 hover:rounded-full"
            }`}
          >
            About me
          </li>
        </Link>
        <Link href={"/projects"}>
          <li
            className={`px-3 ${
              path.split("/")[1] === "projects"
                ? "cursor-pointer uppercase list-none   font-bold  text-center  bg-secondary text-white transition-all duration-200 rounded-full"
                : "cursor-pointer uppercase list-none  text-secondary font-bold  text-center   hover:bg-secondary hover:text-white transition-all duration-200 hover:rounded-full"
            }`}
          >
            Projects
          </li>
        </Link>
        <Link href={"/contact"}>
          <li
            className={`px-3 ${
              path === "/contact"
                ? "cursor-pointer uppercase list-none   font-bold  text-center  bg-secondary text-white transition-all duration-200 rounded-full"
                : "cursor-pointer uppercase list-none  text-secondary font-bold  text-center  hover:bg-secondary hover:text-white transition-all duration-200 hover:rounded-full"
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default DesktopNav;
