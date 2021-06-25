import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setCurrentUser } from "../../features/userSlice";
import Hamburger from "./hamburger/Hamburger";

const Nabvar = () => {
  const isUser = useSelector(setCurrentUser);

  return (
    <div className="navbar_wrapper">
      <div>
        <Hamburger />
      </div>
      <div className="flex pt-4 pr-4">
        <div className="mr-2 mt-1 text-xs">
          Hello,&nbsp;
          {isUser.user?.name ? isUser.user?.name : "guest"}
        </div>
        <div className="cursor-pointer">
          <Link href="/user/signup">
            <a>
              <FontAwesomeIcon icon={faUser} size="lg" className="mr-3" />
            </a>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/style/search">
            <a>
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
