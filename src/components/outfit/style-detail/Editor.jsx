import React, { useState } from "react";

import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorDropDown from "./EditorDropDown";

const Editor = ({ id }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    if (modalOpen === true) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div>
      <FontAwesomeIcon icon={faEllipsisH} size="sm" onClick={handleOpen} />
      {!modalOpen ? null : <EditorDropDown id={id} />}
    </div>
  );
};

export default Editor;
