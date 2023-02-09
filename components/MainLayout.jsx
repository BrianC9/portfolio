import React from "react";
import Header from "./Header";
import Head from "next/head";
import { Nunito } from "@next/font/google";
const rubik = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
function MainLayout({ children, page }) {
  return (
    <div className={`${rubik.className} `}>
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
