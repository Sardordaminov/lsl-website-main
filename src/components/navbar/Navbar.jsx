import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logo/Screenshot_2024-12-06_161718-removebg-preview.png";
import uk from "../../assets/flags/uk.png";
import uzb from "../../assets/flags/uzb.png";
import rus from "../../assets/flags/rus.png";

const Navbar = () => {
  const [changelang, setChangelang] = useState("Eng");
  const [theme, setTheme] = useState(false);
  const [langmenuopener, setLangMenuOpener] = useState(false);
  const [navopener, setNavopener] = useState(false);

  const langswitcher = (value) => {
    setChangelang(value);
    setLangMenuOpener(false);
  };
  const getFlag = () => {
    if (changelang === "Eng") return uk;
    if (changelang === "Uzb") return uzb;
    if (changelang === "Rus") return rus;
    return uk;
  };

  return (
    <div className={`navbar ${theme ? "dark" : "light"}`}>
      <div className="container">
        <div className={`main-navbar ${navopener ? 'active' : ""}`}>
          <img src={logo} alt="Logo" />
          <ul>
            <li>Teachers</li>
            <li>Courses</li>
            <li>Branches</li>
            <li>Achievements</li>
            <li className="callcenter">Call Center</li>
          </ul>
          <div className="main-navbar-item">
            <div className="multilang-btn">
              <button
                className={`multilang-button ${langmenuopener ? "active" : ""}`}
                onClick={() => setLangMenuOpener(!langmenuopener)}
              >
                <img src={getFlag()} alt="" />
                {changelang}
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className={`multilang-btn-menu ${langmenuopener ? "active" : ""}`}>
                <button onClick={() => langswitcher("Eng")}>Eng</button>
                <button onClick={() => langswitcher("Uzb")}>Uzb</button>
                <button onClick={() => langswitcher("Rus")}>Rus</button>
              </div>
            </div>
            <button onClick={() => setTheme(!theme)} className="theme-switcher-btn">
              <i className={theme ? "fa-solid fa-moon" : "fa-regular fa-sun-bright"}></i>
            </button>
            <button onClick={() => setNavopener(!navopener)} className="navopener">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
