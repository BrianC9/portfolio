// TODO: LINKS CONST
//const links = [
//     {
//     }
// ]

// TODO: REFACTOR TO MAKE A FLOAT NAVBAR LIKE: https://skiff.com/

import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Hamburguer from "./Hamburguer";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex justify-between items-center sticky rounded-b-xl md:rounded-full top-0 z-50   max-w-[85ch] mx-auto  bg-neutral/20 backdrop-blur-md mb-10  md:mb-20 h-20 px-5 sm:px-10 md:px-15 lg:px-5  ">
      <Logo />
      <DesktopNav path={asPath} />
      <div className="z-[100] md:hidden">
        <Hamburguer isOpen={isOpen} handleIsOpen={handleOpen} />
      </div>
      <MobileNav isOpen={isOpen} path={asPath} />
    </header>
  );
}

export default Header;
