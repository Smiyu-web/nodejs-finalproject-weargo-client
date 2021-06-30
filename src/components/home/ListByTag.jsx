import React, { useEffect, useState } from "react";
import Axios from "axios";

import ImgWrapper from "../ui/ImgWrapper";

const ListByTag = () => {
  const [data, setData] = useState();

  useEffect(async () => {
    const result = await Axios("http://localhost:4000/style/");
    setData(result.data);
    console.log("data: " + result);
  }, []);

  const styleList = data.map((result) => {
    return (
      <>
        <p>{result.title}</p>
        <ImgWrapper
          className="shadow-lg"
          src={result.image}
          alt="outfit"
          user={result.userId}
        />
      </>
    );
  });

  return (
    <div className="mt-8 mx-9">
      <h6 className="mb-2 font-thin">#spring</h6>
      <div className="flex justify-center">
        <div className="grid grid-flow-col grid-cols-3 gap-4 text-center">
          {styleList}
        </div>
      </div>
    </div>
  );
};

export default ListByTag;
