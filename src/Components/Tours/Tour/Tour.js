import React from 'react';
import { Link, useParams } from 'react-router-dom';


function Tour(props) {
  const { id, name, image } = props.tour;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <hr />
    </div>
  );
}

export default Tour;
