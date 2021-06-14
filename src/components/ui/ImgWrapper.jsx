import React from "react";

const ImgWrapper = (props) => {
  return (
    <div class="img_wrapper">
      <img src={props.src} alt={props.alt} />
      <div class="mask">
        <div class="caption">{props.user}</div>
      </div>
    </div>
  );
};

export default ImgWrapper;
