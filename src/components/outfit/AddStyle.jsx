import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

import ErrorNotice from "../ui/ErrorNotice";
import { setCurrentUser } from "../../features/userSlice";

const AddStyle = () => {
  const [title, setTitle] = useState();
  const [season, setSeason] = useState();
  const [weather, setWeather] = useState();
  const [tags, setTags] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState();

  const isUser = useSelector(setCurrentUser);
  const userId = isUser.user?._id;

  const submit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("season", season);
      formData.append("weather", weather);
      formData.append("userId", userId);
      formData.append("tags", tags);
      formData.append("image", image);

      await Axios.post("http://localhost:4000/style/add-style", formData);
    } catch (err) {
      console.log(err.response?.data.msg) && setError(err.response.data.msg);
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center">
      <h2 className="py-6">Add style</h2>

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

export default AddStyle;
