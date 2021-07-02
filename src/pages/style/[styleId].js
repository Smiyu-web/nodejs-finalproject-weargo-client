import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import StyleDetail from "../../components/outfit/style/StyleDetail";
import { selectListStyles } from "../../features/styleSlice";

const StyleDetailPage = () => {
  const lists = useSelector(selectListStyles);
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  return (
    <Layout style="h-screen">
      <StyleDetail />
    </Layout>
  );
};

export default StyleDetailPage;
