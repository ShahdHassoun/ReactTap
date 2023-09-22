import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ topic , image, name, id, category }) {
  const imgStyle = {
    backgroundImage: `url("../image/${image}")`,
  };

  return (
    <Link className="html-details" to={`/details/${id}`}>
      <div className="card-sec" id="card-sec">
        <div className="card-img" style={imgStyle}></div>
        <div className="card-info">
          <p className="category truncate-text">{category}</p>
          <h3 className="card-title categ2lines">{topic}</h3>
          <div className="rating-stars"></div>
          <p className="author-name">Author: {name}</p>
        </div>
      </div>
    </Link>
  );
}


