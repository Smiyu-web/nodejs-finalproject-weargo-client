import React from "react";
import Axios from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCurrentStyle } from "../../../features/styleSlice";

const EditorDropDown = ({ id }) => {
  const styleId = useSelector(selectCurrentStyle);
  const postId = styleId._id;

  const handleDelete = async () => {
    await Axios.delete(`http://localhost:4000/style/${postId}`);
    console.log("deleted: " + postId);
  };

  return (
    <div>
      <div className="editor_container">
        <div className="text-center my-2">
          <Link href="/style/edit-style">
            <p className="text-xs mb-1">edit</p>
          </Link>
          <p className="text-xs" onClick={handleDelete}>
            delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditorDropDown;
