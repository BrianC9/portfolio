// TODO: LINKS CONST
//const links = [
//     {
//     }
// ]

// TODO: add hover effect active on current page

import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Hamburguer from "./Hamburguer";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();
  console.log(asPath);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full sticky top-0 z-50 bg-neutral shadow-lg h-20 px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30 mb-10 md:mb-20">
      <div className="flex justify-between items-center  h-full  ">
        <Logo />
        <nav>
          <ul className="hidden md:flex">
            <Link href={"/aboutme"}>
              <li
                className={
                  asPath === "/aboutme"
                    ? "cursor-pointer uppercase list-none   font-bold lg:ml-20 w-36 text-center md:py-1 bg-secondary text-white transition-all duration-200 rounded-full"
                    : "cursor-pointer uppercase list-none  text-secondary font-bold lg:ml-20 w-36 text-center md:py-1 hover:bg-secondary hover:text-white transition-all duration-200 hover:rounded-full"
                }
              >
                About me
              </li>
            </Link>
            <Link href={"/projects"}>
              <li
                className={
                  asPath.split("/")[1] === "projects"
                    ? "cursor-pointer uppercase list-none   font-bold lg:ml-20 w-36 text-center md:py-1 bg-secondary text-white transition-all duration-200 rounded-full"
                    : "cursor-pointer uppercase list-none  text-secondary font-bold lg:ml-20 w-36 text-center md:py-1  hover:bg-secondary hover:text-white transition-all duration-200 hover:rounded-full"
                }
              >
                Projects
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                className={
                  asPath === "/contact"
                    ? "cursor-pointer uppercase list-none   font-bold lg:ml-20 w-36 text-center md:py-1 bg-secondary text-white transition-all duration-200 rounded-full"
                    : "cursor-pointer uppercase list-none  text-secondary font-bold lg:ml-20 w-36 text-center md:py-1 hover:bg-secondary hover:text-white transition-all duration-200 hover:rounded-full"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </nav>
        <div className="z-[100] md:hidden">
          <Hamburguer isOpen={isOpen} handleIsOpen={handleOpen} />
        </div>
        <div
          className={
            isOpen
              ? "md:hidden overflow-hidden fixed left-0 top-0 w-full h-screen transition-all  ease-in-out duration-300 bg-black/60"
              : " fixed left-[-100%] top-0 transition-all  ease-in-out duration-300"
          }
          id="mobile-menu"
        >
          <div className="bg-neutral   h-screen  p-5 sm:px-10 md:px-15">
            <div
              id="header-mobile"
              className="flex items-center content-center justify-between "
            >
              <Logo />
            </div>
            <div className="flex flex-col gap-16">
              <div>
                <p className="border-b border-secondary text-sm sm:text-lg my-3 text-center w-fit mx-auto">
                  Software developer
                </p>
              </div>
              <div id="mavbar-mobile" className=" py-6 ">
                <ul className="flex flex-col items-center gap-10">
                  <Link href={"/"}>
                    <li
                      className={
                        asPath === "/"
                          ? "text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200"
                          : "active:text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200 "
                      }
                    >
                      Home
                    </li>
                  </Link>
                  <Link href={"/aboutme"}>
                    <li
                      className={
                        asPath === "/aboutme"
                          ? "text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200"
                          : "active:text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200 "
                      }
                    >
                      About me
                    </li>
                  </Link>
                  <Link href={"/projects"}>
                    <li
                      className={
                        asPath.split("/")[1] === "projects"
                          ? "text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200"
                          : "active:text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200 "
                      }
                    >
                      Projects
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li
                      className={
                        asPath === "/contact"
                          ? "text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200"
                          : "active:text-secondary sm:text-4xl cursor-pointer uppercase list-none text-3xl font-bold  text-center md:py-1 transition-all duration-200 "
                      }
                    >
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
