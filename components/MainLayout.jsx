import React from "react";
import Header from "./Header";
import { Rubik } from "@next/font/google";
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
function MainLayout({ children }) {
  return (
    <div className={`${rubik.className} h-screen w-screen `}>
      <Header key={"header"} />
      {children}
    </div>
  );
}

export default MainLayout;
