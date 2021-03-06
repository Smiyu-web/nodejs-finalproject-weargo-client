import React from "react";

const ImgWrapper = (props) => {
  return (
    <div className="img_wrapper">
      <div>
        <img src={props.src} alt={props.alt} />
        <div className="mask">
          <div className="caption">{props.user}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ImgWrapper;
