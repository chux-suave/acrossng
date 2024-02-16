import Head from "next/head";
import React from "react";
import StickyNavbar from "./Stickynavbar";
import favicon from "../../public/favicon.ico";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  return (
    <div className="p-0 m-0 items-center content-center justify-center scroll-smooth">
      <Head>
        <title>
          {title ? title + "-Across Nigeria" : "Across Nigeria Reality Show"}
        </title>
        <meta
          name="description"
          content="Naija's Number One entertainment and Lifestyle Hub"
        />
        <link rel="icon" href={favicon} />
      </Head>
      <StickyNavbar />{" "}
      <div className="flex flex-col relative w-screen items-center content-center overflow-hidden justify-center p-0 m-0 max-w-full min-h-screen ">
        <main className=" w-screen items-center flex-1 content-center overflow-hidden justify-center mx-0 mb-1 mt-24 p-0">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
