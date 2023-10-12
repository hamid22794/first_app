import React from 'react'
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ reviewImg,title }) => {
  return (
    <div className="client_reviews_grid">
    <div className="our_client_card">
    <div className="card_top">
      <div className="card_top_left">
        <img src={reviewImg} alt="" />
      </div>
      <div className="card_top_right">
        <div className="top_right_text">
          <h2>Alena Herwitz</h2>
        </div>
        <div className="top_right_bottom_text">
          <p>3 Months ago</p>
          <div className="star_rating">
            <AiFillStar color="#FFB800" />
            <AiFillStar color="#FFB800" />
            <AiFillStar color="#FFB800" />
            <AiFillStar color="#FFB800" />
            <AiFillStar color="#FFB800" />
          </div>
        </div>
      </div>
    </div>
    <div className="card_bottom">
      <p>
        We make sure that your safety is never compromised. This is
        why we hire all the staff under the roof of Home Comfort, just
        for your satisfaction.
      </p>
    </div>
  </div>
    </div>
  )
}

export default ReviewCard