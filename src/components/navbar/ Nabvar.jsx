import React from "react";
import Hamburger2 from "./hamburger/Hamburger2";
import { faUser, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nabvar = () => {
  return (
    <div className="navbar_wrapper">
      <div>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <div className="flex">
        <div className="mr-2 mt-1 text-xs">Hello, guest</div>
        <div>
          <FontAwesomeIcon icon={faUser} size="lg" className="mr-3" />
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
