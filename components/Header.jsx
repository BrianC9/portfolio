// TODO: LINKS CONST
//const links = [
//     {
//     }
// ]

import Logo from "./Logo";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <header className="w-full sticky h-16 sm:h-24 top-0 z-50 shadow-lg  ">
      <div className="flex justify-between items-center h-full px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 ">
        <Logo />
        <nav>
          <ul className="hidden md:flex">
            <Link href={"/aboutme"}>
              <li className="cursor-pointer uppercase list-none  text-secondary font-extrabold lg:ml-20 w-36 text-center md:py-1 hover:bg-secondary hover:text-white transition-all duration-200  hover:rounded-full">
                About me
              </li>
            </Link>
            <Link href={"/projects"}>
              <li className="cursor-pointer uppercase list-none  text-secondary font-extrabold lg:ml-20 w-36 text-center md:py-1 hover:bg-secondary hover:text-white transition-all duration-200  hover:rounded-full">
                Projects
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="cursor-pointer uppercase list-none  text-secondary font-extrabold lg:ml-20 w-36 text-center md:py-1 hover:bg-secondary hover:text-white transition-all duration-200  hover:rounded-full">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={35} color={"#21243D"} strokeWidth={30} />
          </div>
        </nav>
        <div
          className="fixed left-0 top-0 w-full h-screen bg-black/60"
          id="mobile-menu"
        >
          <div className="bg-neutral fixed left-0 top-0 h-screen w-full ease-in duration-500 p-5 sm:p-10 md:p-15">
            <div className="flex items-center justify-between">
              <Logo />
              <AiOutlineClose size={35} color={"#21243D"} strokeWidth={30} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
