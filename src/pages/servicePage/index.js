import React from "react";
import Layout from "../../layout";
import CompanyAuthority from "../homePage/components/companyAuthority";
import { Link } from "react-router-dom";
import "./style.css";
import { DiscountForm } from "./components/discountForm";

const ServicePage = () => {
  return (
    <Layout>
      <section className="service_banner_section">
        <div className="page_width">
          <div className="service_banner_grid">
            <div className="service_banner_left">
              <h3>Our Services</h3>
              <h2>AC Duct</h2>
              <h1>Cleaning Services</h1>
              <div className="service_btn_banner">
                <Link to="/services">Book Now</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="service_banner_right">
              <div className="service_banner_img">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DiscountForm />
      <CompanyAuthority />
    </Layout>
  );
};

export default ServicePage;
