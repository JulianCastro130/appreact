import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, category, image, price }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className={`card ${category}-category`}>
        <div className="card-body">
        <span className="card-title">{name}</span>
        <span>Cat: {category}</span>
        <span>
          <img src={image} alt={name} className={'card-img-top'} />
        </span>
        <span>$ {price}</span>
        </div>
      </div>
    </Link>
  );
};