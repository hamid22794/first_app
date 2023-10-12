import React from "react";
import ClientOneImg from "../../../images/home/our_clients/Client1.webp";
import ClientTwoImg from '../../../images/home/our_clients/Client2.webp';
import ClientThreeImg from '../../../images/home/our_clients/Client3.webp';
import ClientFourImg from '../../../images/home/our_clients/Client4.webp';
import ClientFiveImg from '../../../images/home/our_clients/Client5.webp';
import ClientSixImg from '../../../images/home/our_clients/Client6.webp';
import ReviewCard from "../../../components/reviewCard";

const OurClients = () => {
  return (
    <div>
      <div className="page_width">
        <div className="our_clients">
          <div className="header_part">
            <div className="our_client_title">
              <h2>
                Our <span>Clients</span>
              </h2>
            </div>
            <p>
              We make sure that your safety is never compromised. This is why we
              hire all the staff under the roof of Home Comfort, just for your
              satisfaction. Our goal is to become the largest and most famous
              online home services platform and provide our customers with the
              best of services and experience.
            </p>
          </div>
          <div className="client_reviews_grid">
            <ReviewCard reviewImg={ClientOneImg} />
            <ReviewCard reviewImg={ClientTwoImg} />
            <ReviewCard reviewImg={ClientThreeImg} />
            <ReviewCard reviewImg={ClientFourImg} />
            <ReviewCard reviewImg={ClientFiveImg} />
            <ReviewCard reviewImg={ClientSixImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
