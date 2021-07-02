import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import StyleDetail from "../../components/outfit/style/StyleDetail";
import { selectListStyles } from "../../features/styleSlice";
import { getEventById } from "../../features/data";

const StyleDetailPage = () => {
  const lists = useSelector(selectListStyles);
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(lists, eventId);

  return (
    <Layout style="h-screen">
      <StyleDetail
        id={event._id}
        season={event.season}
        weather={event.weather}
        title={event.title}
        img={event.image}
      />
    </Layout>
  );
};

export default StyleDetailPage;
