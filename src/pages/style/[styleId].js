import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import StyleDetail from "../../components/outfit/style-detail/StyleDetail";
import { selectListStyles, setCurrentStyle } from "../../features/styleSlice";
import { getDataById } from "../../features/findData";

const StyleDetailPage = () => {
  const lists = useSelector(selectListStyles);
  const router = useRouter();
  const dispatch = useDispatch();

  const eventId = router.query.eventId;
  const event = getDataById(lists, eventId);

  console.log(event);

  useEffect(() => {
    dispatch(setCurrentStyle(event));
    console.log(event);
  }, [event]);

  return (
    <Layout style="h-screen">
      <StyleDetail
        id={event.userId}
        season={event.season}
        weather={event.weather}
        title={event.title}
        img={event.image}
      />
    </Layout>
  );
};

export default StyleDetailPage;
