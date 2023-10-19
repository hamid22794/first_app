import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const showNav = () => {
    document.getElementById("mobile_id").style.display = "block";
  };
  const hideNav = () => {
    document.getElementById("mobile_id").style.display = "none";
  };
  return (
    <header>
      <div className="page_width">
        <div className="nav_desktop">
          <div className="menu_bar" onClick={showNav}>
            <FaBars />
          </div>
          <div className="logo">
            <a href="/">
              <img src={props.logo} alt="" />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="services_dropdown">
                <Link to="/services">Services {props.icon1}</Link>
                <div className="services_submenu">
                  <ul>
                    <li>
                      <a href="/services">AC Services</a>
                    </li>
                    <li>
                      <a href="/">Duct Cleaning</a>
                    </li>
                    <li>
                      <a href="/">Handyman</a>
                    </li>
                    <li>
                      <a href="/">Plumbing</a>
                    </li>
                    <li>
                      <a href="/">Electrical</a>
                    </li>
                    <li>
                      <a href="/">Painting</a>
                    </li>
                    <li>
                      <a href="/">Water Tank Cleaning</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className="tel">
                <a href="tel:+971586747123">
                  {props.icon}
                  <span>+971 58 67 47 123</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="mobile_nav" id="mobile_id">
            <div className="icon">
              <FaTimes color="white" onClick={hideNav} />
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/services">AC Services</a>
                </li>
                <li>
                  <a href="/">Duct Cleaning</a>
                </li>
                <li>
                  <a href="/">Handyman</a>
                </li>
                <li>
                  <a href="/">Plumbing</a>
                </li>
                <li>
                  <a href="/">Electrical</a>
                </li>
                <li>
                  <a href="/">Painting</a>
                </li>
                <li>
                  <a href="/">Water Tank Cleaning</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
