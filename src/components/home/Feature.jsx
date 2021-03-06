import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Axios from "axios";

import ImgWrapper from "../ui/ImgWrapper";
import Loading from "../ui/Loading";
import { setListStyles, selectListStyles } from "../../features/styleSlice";
import { data } from "autoprefixer";

const Feature = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectListStyles);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      // setLoading(true);
      const result = await Axios("http://localhost:4000/style/");
      dispatch(setListStyles(result.data));
      // console.log(result.data);
    } catch (err) {
      console.log(err);
    }
    // setLoading(false);
  }, []);

  const click = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h5>Features</h5>
      <div className="flex justify-center">
        <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-8 text-center">
          {lists?.map((data, index) => {
            // console.log(data);
            return (
              <div key={index}>
                <Link href={`/style/${data._id}`}>
                  <a>
                    <ImgWrapper
                      className="shadow-lg"
                      id={data._id}
                      src={data.image}
                      alt={data.title}
                      user={data.userId}
                      title={data.title}
                      // onClick={(e) => click(e)}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
