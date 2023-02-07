import React from "react";
import Header from "./Header";
import Head from "next/head";
import { Rubik } from "@next/font/google";
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
function MainLayout({ children, page }) {
  return (
    <div
      className={`${rubik.className} h-screen w-screen px-5 sm:px-10 md:px-15 lg:px-20 xl:px-30`}
    >
      <Head>
        <title>{`BC - ${page}`}</title>
        <meta
          name="description"
          content="Bryan Cusme portfolio website, software developer"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
