import React, { useState } from "react";

import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorDropDown from "./EditorDropDown";

const Editor = () => {
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
      <FontAwesomeIcon icon={faEllipsisH} size="md" onClick={handleOpen} />
      {!modalOpen ? null : <EditorDropDown />}
    </div>
  );
};

export default Editor;
