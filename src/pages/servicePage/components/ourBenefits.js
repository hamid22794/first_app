import React from "react";
import coolImg from "../../../images/service_page/our_benefits/cooling.svg";
import reliableImg from "../../../images/service_page/our_benefits/reliability.svg";
import energyImg from "../../../images/service_page/our_benefits/energy.svg";

const OurBenefits = () => {
  return (
    <section className="section_margin">
      <div className="page_width">
        <div className="our_benefits_title">
          <h2>
            Our <span>Benefits</span>
          </h2>
          <p>
            We make sure that your safety is never compromised. This is why we
            hire all the staff under the roof of Home Comfort, just for your
            satisfaction. Our goal is to become the largest and most famous
            online home services platform and provide our customers with the
            best of services and experience.
          </p>
        </div>
        <div className="our_benefits_body_grid">
          <div className="our_benefits_card">
            <div className="our_benefits_card_img">
              <img src={coolImg} alt="" />
            </div>
            <h3>Improved Cooling</h3>
            <p>
              Regular AC servicing maintains the effectiveness of your AC,
              ensuring all mechanical components are workingoptimally whilst
              also getting obviate dust and germs
            </p>
          </div>

          <div className="our_benefits_card">
            <div className="our_benefits_card_img">
              <img src={reliableImg} alt="" />
            </div>
            <h3>Reliability</h3>
            <p>
              Regular AC services enable us to identify any potential problems
              early before they will negatively impact the safe and effective
              running of your unit.
            </p>
          </div>

          <div className="our_benefits_card">
            <div className="our_benefits_card_img">
              <img src={energyImg} alt="" />
            </div>
            <h3>Energy Efficiency</h3>
            <p>
              Regular AC services enable us to identify any potential problems
              early before they will negatively impact the safe and effective
              running of your unit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
