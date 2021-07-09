import React, { useState } from "react";
import Menu from "./Menu";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {!menuOpen ? (
        <div className="menu_bar" onClick={handleMenuOpen}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      ) : (
        <div className="menu_bar z-10" onClick={handleMenuClose}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </div>
      )}

      <Menu isOpen={menuOpen} />
    </div>
  );
};

export default Hamburger;
