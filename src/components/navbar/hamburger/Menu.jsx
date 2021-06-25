import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { setCurrentUser } from "../../../features/userSlice";

const Menu = (props) => {
  const isUser = useSelector(setCurrentUser);
  const [open, setOpen] = useState(props.isOpen);

  const Menus = isUser
    ? [
        { link: "/", text: "Home", delay: "0.4s" },
        { link: "/ranking", text: "Ranking", delay: "0.5s" },
        { link: "/folder", text: "Folder", delay: "0.6s" },
        { link: "/liked", text: "Liked", delay: "0.7s" },
        { link: "/saved", text: "Saved", delay: "0.8s" },
      ]
    : [
        { link: "/", text: "Home", delay: "0.3s" },
        { link: "/ranking", text: "Ranking", delay: "0.4s" },
      ];

  useEffect(() => {
    if (props.isOpen !== open) {
      setOpen(props.isOpen);
    }
  }, [props]);

  const ListItem = Menus.map((menu, index) => {
    return (
      <Link href={menu.link} key={index}>
        <li
          className="mb-8"
          style={{
            opacity: "0",
            animation: "1s SlideIn forwards",
            animationDelay: menu.delay,
          }}
        >
          {menu.text}
        </li>
      </Link>
    );
  });

  return (
    <div>
      {open ? (
        <div
          className="hamburger_menu"
          style={{
            opacity: "0",
            animation: "1s SlideIn forwards",
          }}
        >
          {!isUser ? (
            <>
              <ul className="hamburger_ul mt-20">
                <Link href="/user/login">
                  <li
                    style={{
                      opacity: "0",
                      animation: "1s SlideIn forwards",
                      animationDelay: "0.1s",
                    }}
                  >
                    Signup or Login
                  </li>
                </Link>
              </ul>
              <div className="flex justify-center">
                <span
                  className="block w-16 h-px bg-white my-8"
                  style={{
                    opacity: "0",
                    animation: "1s SlideIn forwards",
                    animationDelay: "0.2s",
                  }}
                ></span>
              </div>
            </>
          ) : (
            <>
              <ul className="hamburger_ul mt-20 ">
                <Link href="/user/login">
                  <li
                    style={{
                      opacity: "0",
                      animation: "1s SlideIn forwards",
                      animationDelay: "0.1s",
                    }}
                    className="my-8"
                  >
                    Log out
                  </li>
                </Link>
                <Link href="/style/add-style">
                  <li
                    style={{
                      opacity: "0",
                      animation: "1s SlideIn forwards",
                      animationDelay: "0.2s",
                    }}
                  >
                    Add style
                  </li>
                </Link>
              </ul>
              <div className="flex justify-center">
                <span
                  className="block w-16 h-px bg-white my-8"
                  style={{
                    opacity: "0",
                    animation: "1s SlideIn forwards",
                    animationDelay: "0.3s",
                  }}
                ></span>
              </div>
            </>
          )}
          <ul className="hamburger_ul">{ListItem}</ul>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
