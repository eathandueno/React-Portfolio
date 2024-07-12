import React, { useEffect, useState } from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
const Nav = ({ handleClick }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className={`nav-left ${visible ? "" : "hidden"}`}>
      <a href="#Home" onClick={() => handleClick("Home")}>
        <h4>
          <b>Home</b>
        </h4>
      </a>
      <a href="#Projects" onClick={() => handleClick("Projects")}>
        projects
      </a>
      <a href="#Education" onClick={() => handleClick("Education")}>
        education
      </a>
    </div>
  );
};

export default Nav;
