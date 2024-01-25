import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../MenuItems";
import "./Navbar.css";



const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  console.log("Rendering with clicked:", clicked);

  return (
    <nav className="nav__items">
      <h1 className="nav__logo">TeensVoice</h1>

      <div className="menu__icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav__menu active" : "nav__menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i> {item.title}
            </Link>
          </li>
        ))}

        {/* <button>Sign Up</button> */}
      </ul>
    </nav>
  );
};

export default Navbar;



