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

  const styleId = router.query.styleId;
  const data = getDataById(lists, styleId);

  useEffect(() => {
    dispatch(setCurrentStyle(data));
  }, [data]);

  return (
    <Layout style="h-screen">
      <StyleDetail data={data} />
    </Layout>
  );
};

export default StyleDetailPage;
