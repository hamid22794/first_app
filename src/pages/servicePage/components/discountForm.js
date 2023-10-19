import React from "react";
import "../style.css";
import discountImg from "../../../images/service_page/discount/discount_image.svg";

export const DiscountForm = () => {
  return (
    <div className="discount_form" id="discount_form">
      <div className="page_width">
        <form action="">
          <div className="discount_image">
            <img src={discountImg} alt="" />
          </div>
          <div className="input_grid">
            <div className="input_fields">
              <input type="text" name="name" placeholder="Enter Name" />
              <input type="email" name="email" placeholder="Enter Email" />
              <input type="phone" name="phone" placeholder="Enter phone" />
              <select name="Select Service" className="minimal" id="">
                <option hidden className="select_service">
                  {" "}
                  Select Service{" "}
                </option>
                <option> AC Services </option>
                <option> Duct Cleaning </option>
                <option> Handyman </option>
                <option> Plumbing </option>
                <option> Electrical </option>
                <option> Painting </option>
                <option> Water Tank Cleaning </option>
              </select>
            </div>
          </div>
          <div className="message_area">
            <textarea
              name="message"
              id=""
              placeholder="Message"
              style={{ width: "100%", height: "160px" }}
            ></textarea>
          </div>
          <div className="send_btn">
            <button> SEND </button>
          </div>
        </form>
      </div>
    </div>
  );
};
