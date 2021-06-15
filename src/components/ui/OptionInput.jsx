import React from "react";

const OptionInput = () => {
  return (
    <div>
      <select
        className="search_type"
        style={{ textAlignLast: "center" }}
        type="search"
        name="search"
      >
        <option value="all">all</option>
        <option value="folder">my folder</option>
        <option value="likes">liked</option>
        <option value="save">saved</option>
      </select>
    </div>
  );
};

export default OptionInput;
