import React from "react";
import Button from "../ui/Button";
import InputWrapper from "../ui/InputWrapper";

const SearchContainer = () => {
  return (
    <div className="pt-28 flex flex-col items-center">
      <h2 className="py-6">Search</h2>
      <div className="search_input">
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
        <input className="py-2 text-center" type="search" name="search" />
      </div>
      <div>
        <Button button="Search" />
      </div>
    </div>
  );
};

export default SearchContainer;
