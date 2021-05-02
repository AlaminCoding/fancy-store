import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="nav">
          <Link to="/">
            <img src={logo} alt="Site er logo" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
