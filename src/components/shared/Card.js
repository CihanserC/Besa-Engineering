import React from 'react';
import './Card.css'; // Assuming you have a CSS file for styling

const Card = ({ title, description, image, price }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
            </div>
        </div>
    );
};

export default Card;