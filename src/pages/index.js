import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import ListByTag from "../components/home/ListByTag";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <ListByTag />
        <ListByTag />
        <ListByTag />
        <Footer />
      </Layout>
    </div>
  );
}
