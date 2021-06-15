import React from "react";

const InputWrapper = (props) => {
  return (
    <div className="input_wrapper">
      <label>{props.title}</label>
      <input className="outline-none" type={props.type} name={props.name} />
    </div>
  );
};

export default InputWrapper;
