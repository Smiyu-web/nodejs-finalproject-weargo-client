import React from "react";
import Button from "../ui/Button";
import InputWrapper from "../ui/InputWrapper";

const AddStyle = () => {
  return (
    <div className="pt-28 flex flex-col items-center">
      <h2 className="py-6">Add style</h2>
      <div>
        <InputWrapper title="title" type="text" name="title" />
        {/* season option */}
        <div className="input_wrapper">
          <label>season</label>
          <select
            className="bg-white"
            style={{ textAlignLast: "center" }}
            type="text"
            name="season"
          >
            <option value="all">all</option>
            <option value="spring">spring</option>
            <option value="summer">summer</option>
            <option value="fall">fall</option>
            <option value="winter">winter</option>
          </select>
        </div>
        {/* weather option */}
        <div className="input_wrapper">
          <label>weather</label>
          <select
            className="bg-white"
            style={{ textAlignLast: "center" }}
            type="text"
            name="season"
          >
            <option value="all">all</option>
            <option value="sunny">sunny</option>
            <option value="scloudyummer">cloudy</option>
            <option value="rainy">rainy</option>
            <option value="windy">windy</option>
            <option value="snowing">snowing</option>
          </select>
        </div>
        <div className="input_wrapper">
          <label>tags</label>
          <textarea name="" id="" cols="20" rows="3"></textarea>
        </div>
      </div>
      <div>
        <Button button="Add" />
      </div>
    </div>
  );
};

export default AddStyle;
