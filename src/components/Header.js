import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user) {
      window.alert(`${user.name}님, 환영합니다 `);
      return;
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="header">
      <div className="header2">
        <nav className="gnb inner">
          <a href="index.html">
            <img className="logo" src={Logo} alt="logo" />
          </a>

          <ul>
            <li className="on">
              <a href="index.html">종목추천</a>
            </li>
            <li>
              <span onClick={clickHandler}>Login</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
