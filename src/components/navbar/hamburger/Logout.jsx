import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout, setCurrentUser } from "../../../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  // const isUser = useSelector(setCurrentUser);

  const handleLogout = () => {
    dispatch(logout({ user: undefined }));
  };

  return (
    <div>
      <li
        style={{
          opacity: "0",
          animation: "1s SlideIn forwards",
          animationDelay: "0.1s",
        }}
        className="my-8"
        onClick={handleLogout}
      >
        Log out
      </li>
    </div>
  );
};

export default Logout;
