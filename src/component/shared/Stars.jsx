import React from "react";
import { star, starHalf } from 'ionicons/icons';

const RatingStars = (props) => {
  let { rating } = props;
  let decimalPart=rating-Math.floor(rating);
  if (decimalPart > 0.25 && decimalPart <= 0.75) {
    rating= Math.floor(rating) + 0.5; // Round down and add half
  } else {
    rating= Math.round(rating); // Standard rounding
  }

  let fullStars = Math.floor(rating);
  let hasHalfStar=(fullStars!==rating);
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<ion-icon key={i} icon="star"></ion-icon>);
      } else if (hasHalfStar && i === fullStars) {
        stars.push(<ion-icon key="half" icon="star-half"></ion-icon>);
      } else {
        stars.push(<ion-icon key={`empty${i}`} icon="star-outline"></ion-icon>);
      }
    }

    return stars;
  };

  return <div className="stars-container">{renderStars()}</div>;
};

export default RatingStars;