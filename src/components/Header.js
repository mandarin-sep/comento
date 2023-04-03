import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header2">
        <nav className="gnb inner">
          <a href="index.html">
            <img className="logo" src="../assets/logo.png" alt="logo" />
          </a>
          <ul>
            <li className="on">
              <a href="index.html">종목추천</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
