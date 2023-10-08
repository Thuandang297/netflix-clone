import React, { useEffect, useState } from "react";
import "./index.css";
import netflixLogo from "/netflix.png";
const Nav = () => {
  const [black, setBlack] = useState(false);
  useEffect(() => {
    console.log("window.scrollY", window.scrollY);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBlack(true);
      } else setBlack(false);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);
  return (
    <div className={black ? "nav_black" : "nav"}>
      <img src={netflixLogo} className="nav_icon" alt="Netflix"></img>
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Avatar"
      ></img>
    </div>
  );
};
export default Nav;
