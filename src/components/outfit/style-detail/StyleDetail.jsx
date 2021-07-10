import React from "react";

import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Editor from "./Editor";

const StyleDetail = ({ data }) => {
  console.log(data);
  // console.log("styledetail: " + props.title);
  return (
    <div className="pt-20 flex justify-center">
      <div className="detail_card relative">
        <div className="mt-2">
          <img src={data.image} alt="outfit" className="w-56" />
        </div>
        <div className="absolute top-3 right-4 text-gray">
          <Editor id={data._id} />
        </div>
        <div>
          <div className="text-xs text-right mr-2 text-gray">{data.id}</div>
          <div className="flex ml-2">
            <h6 className="d_season">{data.season}</h6>
            <h6 className="d_weather">{data.weather}</h6>
          </div>
          <div className="ml-2">
            <h6 className="d_title">{data.title}</h6>
          </div>
          <div className="flex justify-center">
            <span className="block w-48 h-px bg-gray my-4"></span>
          </div>
          <div className="flex flex-wrap justify-center item-center">
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
          </div>
          <div className="flex absolute bottom-2 right-1">
            <div className="d_likes">
              <FontAwesomeIcon icon={farHeart} size="lg" className="" />
              {/* <FontAwesomeIcon icon={faHeart} size="lg" className="mr-3" /> */}
              <span className="text-xs pt-1">25</span>
            </div>
            <div className="d_save">
              <FontAwesomeIcon icon={farBookmark} size="lg" className="" />
              {/* <FontAwesomeIcon icon={faBookmark} size="lg" className="mr-3" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleDetail;
