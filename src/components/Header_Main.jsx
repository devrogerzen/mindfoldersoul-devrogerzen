import React from "react";

import "./Header_Main.css";

const Header_Main = () => {
  return (
    <header className="header_main">
      <div className="header_main__logo">Logo</div>
      <ul className="header_main__ul">
        <li>Discover</li>
        <li>Services</li>
        <li>Code</li>
        <li>Learn</li>
      </ul>
      <div className="header_main__right-panel">
        <button>Contact Us</button>

      </div>
    </header>
  );
};

export default Header_Main;
