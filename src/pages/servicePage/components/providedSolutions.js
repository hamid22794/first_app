import React from "react";
import psImg1 from "../../../images/service_page/provided_solutions/ps_image1.svg";
import psImg2 from "../../../images/service_page/provided_solutions/ps_image2.webp";

const ProvidedSolutions = () => {
  return (
    <div>
      <section className="provided_solutions">
        <div className="page_width">
          <div className="provided_solutions_grid">
            <div className="ps_left_side">
              <div className="ps_title">
                <h2>
                  Provided <span>Solutions</span>
                </h2>
              </div>
              <div className="ps_text">
                <p>
                  Dubai has a lovely environment that attracts people to visit
                  or stay in Dubai. But this lovely environment becomes
                  scorching hot with an AC breakdown. To keep your AC from
                  breaking down, the best way is regular AC maintenance. To keep
                  your cool and fresh all year round, it is best to employ
                  proper AC Services in dubai.
                </p>
                <br />
                <p>
                  Our Home Comfort team are master technicians who have
                  experience in providing a multitude of AC services, including
                  AC installation, AC repair, AC maintenance, and many other AC
                  services dubai. They can not only easily find the faults but
                  also repair them without affecting the quality of AC services.
                  Don’t Forget to CONTACT US when your AC requires servicing,
                  you can also call on us for regular AC maintenance. We
                  guarantee the quality of our service.
                </p>
              </div>
            </div>
            <div className="ps_right_side">
              <img src={psImg1} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="page_width">
        <div className="provided_solutions_1">
          <div className="ps1_left_side">
            <img src={psImg2} alt="" />
          </div>
          <div className="ps1_right_side">
            <div className="ps1_text">
              <p>
                Our Home Comfort team are master technicians who have experience
                in providing a multitude of AC services, including AC
                installation, AC repair, AC maintenance, and many other AC
                services dubai. They can not only easily find the faults but
                also repair them without affecting the quality of AC services.
                Don’t Forget to CONTACT US when your AC requires servicing, you
                can also call on us for regular AC maintenance. We guarantee the
                quality of our service.
              </p>
              <br />
              <p>
                Our Home Comfort team are master technicians who have experience
                in providing a multitude of AC services, including AC
                installation, AC repair, AC maintenance, and many other AC
                services dubai. They can not only easily find the faults but
                also repair them without affecting the quality of AC services.
                Don’t Forget to CONTACT US when your AC requires servicing, you
                can also call on us for regular AC maintenance. We guarantee the
                quality of our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidedSolutions;
