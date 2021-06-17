import React from "react";
import Link from "next/link";

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
          <Link href="/user/signup">
            <FontAwesomeIcon icon={faUser} size="lg" className="mr-3" />
          </Link>
          <Link href="/style/search">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
