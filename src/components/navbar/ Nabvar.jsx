import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setCurrentUser } from "../../features/userSlice";
import Hamburger from "./hamburger/Hamburger";

const Nabvar = React.forwardRef((props, ref) => {
  const isUser = useSelector(setCurrentUser);

  useEffect(() => console.log(isUser.name), [isUser]);

  return (
    <div className="navbar_wrapper" ref={ref}>
      <div>
        <Hamburger />
      </div>
      <div className="flex pt-4 pr-4">
        <div className="mr-2 mt-1 text-xs">
          Hello,&nbsp;
          {isUser.name ? isUser.name : "guest"}
        </div>
        <div className="cursor-pointer">
          <Link href="/user/signup">
            <FontAwesomeIcon icon={faUser} size="lg" className="mr-3" />
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/style/search">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Nabvar;
