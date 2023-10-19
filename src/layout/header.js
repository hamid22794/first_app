import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="page_width">
        <div className="nav_desktop">
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
        </div>
      </div>
    </header>
  );
};
export default Header;
