import React from "react";
import Head from "next/head";

const Layout = ({ description, title, children }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
