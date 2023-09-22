
import React from 'react';

export default function DetailsContent({ id, name, image, topic, category, description, subtopics }) {
  const imgStyle = {
    backgroundImage: `url("url(${process.env.PUBLIC_URL}/image/${image})")`,
  };

  // Use map to generate an array of JSX elements for subtopics
  const subTopicsList = subtopics.map((subtopic, index) => (
    <li key={index} className="category">
      <ion-icon name="checkmark-circle-outline"></ion-icon> {subtopic}
    </li>
  ));
  const heartIcon= {color:'white',
                   fontSize:'1.9rem',
                   marginBottom: '20px',};

  return (
    <>
      <div className="card-details">
        <div className="details-container">
          <div className="card-info">
            <p className="heading-para category">{category}</p>
            <h2 className="category">{topic}</h2>
            <div className="stars"></div>
            <p className="card-desc card-para-cat">{description}</p>
            <div className="topic-img">
              <div className="img-cont" style={imgStyle}></div>
              <div className="topic-details">
                <p className="category">
                  <span>{topic}</span> by <a href="#">{name}</a>
                </p>
                <div className="add-favorites-container">
                  <p className="category">Interested about this topic?</p>
                  <button id="favoriteButton" className="addfav-button category">
                    Add to Favorites <ion-icon style={heartIcon}className="heart-icon" name="heart-outline"></ion-icon>
                  </button>
                  <p className="unlimited-credits category">Unlimited Credits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="sub-topics-container">
        <h1 className="category">{topic} Sub Topics</h1>
        <ul>{subTopicsList}</ul>
      </section>
    </>
  );
}
