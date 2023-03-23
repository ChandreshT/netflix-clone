import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);

      return window.removeEventListener("scroll", null);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix logo"
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
      />
      <img
        alt="Netflix Avatarr"
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
      />
    </div>
  );
};

export default Navbar;
