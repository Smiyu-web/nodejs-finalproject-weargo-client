import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

import ErrorNotice from "../../ui/ErrorNotice";
import { selectCurrentStyle } from "../../../features/styleSlice";
import { updatePost } from "../../../api/api";

const EditStyle = () => {
  const styleId = useSelector(selectCurrentStyle);
  console.log(styleId);

  const postId = styleId._id;
  const [title, setTitle] = useState(styleId.title);
  const [season, setSeason] = useState(styleId.season);
  const [weather, setWeather] = useState(styleId.weather);
  const [tags, setTags] = useState(styleId.tags);
  const [image, setImage] = useState(styleId.image);
  const [error, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();

    try {
      console.log(postId);

      const updatedData = {
        title,
        season,
        weather,
        tags,
        image,
      };

      await Axios.patch(`http://localhost:4000/style/${postId}`, updatedData);
      console.log("update: " + title);
    } catch (err) {
      console.log(err.response?.data.msg) && setError(err.response.data.msg);
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center">
      <h2 className="py-6">Edit style</h2>

      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}

      <div>
        <form onSubmit={submit} encType="multiple/form-data">
          <div className="input_wrapper">
            <label>Title</label>
            <input
              type="title"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* season option */}
          <div className="input_wrapper">
            <label>season</label>
            <select
              className="bg-white"
              style={{ textAlignLast: "center" }}
              type="text"
              name="season"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
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
              name="weather"
              value={weather}
              onChange={(e) => setWeather(e.target.value)}
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
            <textarea
              name="tags"
              id="tags"
              cols="20"
              rows="3"
              value={tags}
              onChange={(e) => setTags(e.target.value.split(","))}
            ></textarea>
          </div>
          <div className="flex flex-col p-2 pb-1 mb-2 w-56">
            <label className="mb-2">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              filename="image"
              // value={image}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="text-center">
            <input className="input_btn" type="submit" value="Add" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStyle;
