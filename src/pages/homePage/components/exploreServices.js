import React from "react";
import ServiceCard from "../../../components/serviceCard";
import ServiceCardAc from "../../../images/home/explore_services/ac_service.webp";
import ServiceCardDuct from "../../../images/home/explore_services/duct_cleaning.webp";
import ServiceCardHandy from "../../../images/home/explore_services/handy_man.webp";
import ServiceCardPlumbing from "../../../images/home/explore_services/plumbing.webp";
import ServiceCardElectricity from "../../../images/home/explore_services/electricity.webp";

const ExploreServices = () => {
  return (
    <div className="explore_components">
      <div className="page_width">
        <div className="title">
          <div className="explore_header">
            <h2>
              Explore our <span> Services </span>
            </h2>
            <div />
          </div>
          <div className="explore_services">
            <ServiceCard cardImage={ServiceCardAc} title="AC Services" />
            <ServiceCard cardImage={ServiceCardDuct} title="Duct Cleaning" />
            <ServiceCard cardImage={ServiceCardHandy} title="Handy Man" />
            <ServiceCard cardImage={ServiceCardPlumbing} title="Plumbing" />
            <ServiceCard cardImage={ServiceCardElectricity} title="Electricity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
