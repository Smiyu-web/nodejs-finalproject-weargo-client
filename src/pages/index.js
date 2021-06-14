import React from "react";
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
      </Layout>
    </div>
  );
}
