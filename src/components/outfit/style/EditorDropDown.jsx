import React from "react";
import Link from "next/link";

const EditorDropDown = () => {
  return (
    <div>
      <div className="editor_container">
        <div className="text-center my-2">
          <Link href="/style/edit-style">
            <p className="text-xs mb-1">edit</p>
          </Link>
          <p className="text-xs">delete</p>
        </div>
      </div>
    </div>
  );
};

export default EditorDropDown;
