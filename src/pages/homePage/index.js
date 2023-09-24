import React from "react";
import Layout from "../../layout";
import bannerImg from "../../images/home/banner/banner.svg";
import "./style.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <section>
        <div className="page_width">
          <div className="banner_grid">
            <div className="banner_left">
              <h3>Best in Dubai</h3>
              <h2>Welcome To</h2>
              <h1>
                Home <span>Comfort</span>
              </h1>
              <p>
                Home Comfort provides home repair services in Dubai with
                reasonable rates. We fix it right with home comfort professional
                experts.
              </p>
              <div className="btn_banner">
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/services">Learn More</Link>
              </div>
            </div>
            <div className="banner_right">
              <div className="banner_img">
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
