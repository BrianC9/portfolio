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
    <header className="w-full sticky h-20 sm:h-24 top-0 z-50 shadow-lg  ">
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
        </nav>
        <div className="md:hidden rounded-full shadow-lg shadow-gray-600 p-2 cursor-pointer active:shadow-gray-300 transition-shadow duration-200">
          <AiOutlineMenu
            className
            size={25}
            color={"#21243D"}
            strokeWidth={30}
          />
        </div>
        <div
          className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/60"
          id="mobile-menu"
        >
          <div className="bg-neutral  h-screen w-full ease-in duration-500 px-5 sm:px-10 md:px-15">
            <div
              id="header-mobile"
              className="flex items-center content-center justify-between h-20 sm:h-24"
            >
              <Logo />
              <div className="rounded-full shadow-lg shadow-gray-600 p-2 cursor-pointer active:shadow-gray-300 transition-shadow duration-200">
                <AiOutlineClose
                  className
                  size={25}
                  color={"#21243D"}
                  strokeWidth={30}
                />
              </div>
            </div>
            <div className="flex flex-col gap-16">
              <div>
                <p className="border-b border-secondary text-sm sm:text-lg my-3 text-center w-fit mx-auto">
                  Software developer
                </p>
              </div>
              <div id="mavbar-mobile" className=" py-6 ">
                <ul className="flex flex-col items-center gap-10">
                  <Link href={"/aboutme"}>
                    <li className=" active:text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200 ">
                      About me
                    </li>
                  </Link>
                  <Link href={"/projects"}>
                    <li className="sm:text-4xl active:text-secondary cursor-pointer uppercase list-none text-3xl  font-bold text-center md:py-1  transition-all duration-200 ">
                      Projects
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li className="sm:text-4xl active:text-secondary cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1  transition-all duration-200 ">
                      Contact
                    </li>
                  </Link>
                </ul>
                <div
                  id="toggle"
                  className="my-10 flex items-center gap-2 justify-center"
                >
                  <span>ES</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <span>EN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
