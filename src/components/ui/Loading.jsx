import React from "react";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

const Loading = (props) => {
  const override = css`
    display: block;
    position: absolute;
    inset: 0;
    margin: auto;
  `;
  return (
    <div>
      <ClockLoader
        color={"gray"}
        loading={props.loading}
        size={60}
        css={override}
      />
    </div>
  );
};

export default Loading;
