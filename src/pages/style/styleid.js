import StyleDetail from "../../components/outfit/style/StyleDetail";
import React from "react";
import Layout from "../../components/layout";

const StyleDetailPage = () => {
  const getEventById = (id) => {
    return DUMMY_EVENTS.find((event) => event.id === id);
  };

  return (
    <Layout style="h-screen">
      <StyleDetail />
    </Layout>
  );
};

export default StyleDetailPage;
