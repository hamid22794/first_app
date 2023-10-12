import React from "react";
import CompanyImg from "../../../images/home/company_authority/company_authority.webp";

const CompanyAuthority = () => {
  return (
    <div>
      <section className="company_authority section_margin">
        <div className="page_width">
        <div className="company_authority_grid">
          <div className="left_side">
            <div className="title">
              <h2>
                Company <span>Authority</span>
              </h2>
            </div>
            <div className="text">
              <p>
                Basically, finding the right person to do up the works is very
                much important and for that, there are certain things you should
                keep in mind while appointing a service man. Analyze the best
                service provider who can perform the works well and give you
                desired results. You can search for professional home service
                companies online and get the best company that meets up your
                demands.
              </p>
              <br />
              <p>
                Home Comfort is a leading multiple service provider company
                catering to your 360 needs with quality guaranteed. The aim and
                priority of Home Comfort are to add value to our consumers’
                lives by providing smart solutions to all their problems. Our
                pride is providing the most extensive range of services. From
                home maintenance to personal assistance.
              </p>
            </div>
          </div>
          <div className="right_side">
            <img src={CompanyImg} alt="" />
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyAuthority;
