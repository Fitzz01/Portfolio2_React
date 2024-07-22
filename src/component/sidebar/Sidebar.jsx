import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assest/logoF.png";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>

        {/* Put icon of dark/light mode here */}
        <a href="#home" className="nav_mode">
          <img src={Logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="icon-home" title="Home"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="icon-user" title="About"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#resume" className="nav_link">
                  <i className="icon-briefcase" title="Resume"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#work" className="nav_link">
                  <i className="icon-graduation" title="Experience"></i>
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="icon-note" title="Contact"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; Fitri - 2024</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
