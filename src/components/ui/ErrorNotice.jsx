import React from "react";

const ErrorNotice = (props) => {
  return (
    <div className="error_notice">
      <p>{props.message}</p>
      <button className="error_btn" onClick={props.clearError}>
        x
      </button>
    </div>
  );
};

export default ErrorNotice;
