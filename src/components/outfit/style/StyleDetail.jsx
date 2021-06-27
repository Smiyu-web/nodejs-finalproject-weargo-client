import React from "react";

import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyleDetail = () => {
  return (
    <div className="pt-20 flex justify-center">
      <div className="detail_card">
        <div className="mt-2">
          <img src="/outfit.jpeg" alt="outfit" className="w-56" />
        </div>
        <div>
          <div className="flex ml-2">
            <h6 className="d_season">spring</h6>
            <h6 className="d_weather">sunny</h6>
          </div>
          <div className="ml-2">
            <h6 className="d_title">spring daytime date</h6>
          </div>
          <div className="flex justify-center">
            <span className="block w-48 h-px bg-gray my-4"></span>
          </div>
          <div className="flex flex-wrap justify-center item-center h-28">
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
            <p className="text-xs text-gray tracking-wide	mx-1">#spring</p>
          </div>
          <div className="flex justify-end">
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
