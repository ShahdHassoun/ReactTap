import React from "react";
import { star, starHalf } from 'ionicons/icons';

const RatingStars = ( props ) => {
  const fullStarsNumber = Math.floor(props.ratings);
  const halfStarNumber = props.ratings % 1 >= 0.5;
  const starIcons = [];

  for (let i = 0; i < fullStarsNumber; i++) {
    starIcons.push(<ion-icon icon={star}></ion-icon>);
  }

  if (halfStarNumber) {
    starIcons.push(<ion-icon icon={starHalf}></ion-icon>);
  }

  return (
    <div className="stars-container">
      <div> {starIcons} </div>
    </div>
  );
}

export default RatingStars;