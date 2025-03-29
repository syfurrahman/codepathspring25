import React from 'react';
import './FoodCard.css';

const FoodCard = ({ name, description, image, location }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-card-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{location}</p>
    </div>
  );
}

export default FoodCard;