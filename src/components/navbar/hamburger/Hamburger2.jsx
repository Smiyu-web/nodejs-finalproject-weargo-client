import React, { useState } from "react";
import {
  HamburgerContainer,
  MenuToggle,
  HamburgerMenu,
} from "./hamburger.style";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isHanburgerOpen = () => {
    setIsOpen(true);
  };

  return (
    <HamburgerContainer>
      <nav className="mobilescreen">
        <MenuToggle title="Menu" id="menuToggle">
          {/* <input type="checkbox" /> */}
          {!isOpen ? (
            <div className="checked" onClick={isHanburgerOpen}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <HamburgerMenu id="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </HamburgerMenu>
          )}
        </MenuToggle>
      </nav>
    </HamburgerContainer>
  );
};

export default Hamburger;
