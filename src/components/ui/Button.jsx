import React from "react";

const Button = (props) => {
  return (
    <div className="btn_wrapper">
      <button className="btn">{props.button}</button>
    </div>
  );
};

export default Button;
