import React from "react";
import ImgWrapper from "../ui/ImgWrapper";

const ListByTag = () => {
  return (
    <div className="mt-8 mx-9">
      <h6 className="mb-2 font-thin">#spring</h6>
      <div className="flex justify-center">
        <div className="grid grid-flow-col grid-cols-3 gap-4 text-center">
          <ImgWrapper
            className="shadow-lg"
            src="/outfit.jpeg"
            alt="outfit"
            user="@koa0403"
          />
          <ImgWrapper
            className="shadow-md"
            src="/outfit.jpeg"
            alt="outfit"
            user="@koa0403"
          />
          <ImgWrapper
            className="shadow-md"
            src="/outfit.jpeg"
            alt="outfit"
            user="@koa0403"
          />
        </div>
      </div>
    </div>
  );
};

export default ListByTag;
