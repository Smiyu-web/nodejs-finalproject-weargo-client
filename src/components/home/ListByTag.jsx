import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "next/link";
import Axios from "axios";

import ImgWrapper from "../ui/ImgWrapper";
import Loading from "../ui/Loading";
import { setListStyles, selectListStyles } from "../../features/styleSlice";

const ListByTag = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectListStyles);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:4000/style/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       dispatch(setListStyles(data));
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(async () => {
    try {
      // setLoading(true);
      const result = await Axios("http://localhost:4000/style/");
      dispatch(setListStyles(result.data));
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
    // setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="mt-8 mx-9">
          <h6 className="mb-2 font-thin">#spring</h6>
          <div className="flex justify-center">
            <div className="grid grid-flow-col grid-cols-3 gap-4 text-center">
              {lists?.map((data, index) => {
                return (
                  <div key={index}>
                    <Link href={`/style/${data.id}`}>
                      <ImgWrapper
                        className="shadow-lg"
                        src={data.image}
                        alt="outfit"
                        user={data.userId}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListByTag;
