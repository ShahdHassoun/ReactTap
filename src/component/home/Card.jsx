import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../shared/Stars'
export default function Card({ topic , image, name, id, category ,rating }) {
  const imgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/${image})`,

  };

  return (
    <Link className="html-details" to={`/details/${id}`}>
      <div className="card-sec" id="card-sec">
        <div className="card-img" style={imgStyle}></div>
        <div className="card-info">
          <p className="category truncate-text">{category}</p>
          <h3 className="card-title categ2lines">{topic}</h3>
          <div className="stars-container">
            <RatingStars ratings={rating}/>
          </div>
          <p className="author-name">Author: {name}</p>
        </div>
      </div>
    </Link>
  );
}


