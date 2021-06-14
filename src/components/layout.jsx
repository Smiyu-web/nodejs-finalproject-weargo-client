import React from "react";
import Head from "next/head";
import Nabvar from "./navbar/ Nabvar";
import Footer from "./footer/Footer";

const Layout = ({ description, title, children, style }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <main className={style}>
        <Nabvar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
