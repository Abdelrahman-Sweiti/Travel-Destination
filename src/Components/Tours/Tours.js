import React from 'react';
import Tour from './Tour/Tour';
import { Link } from 'react-router-dom';


function Tours(props) {
  const mappedData = props.data.map((tour) => (
    <Link to={`/tour/${tour.id}`} key={tour.id}>
      <Tour tour={tour} />
    </Link>
  ));
  

  return <div>{mappedData}</div>;
}

export default Tours;
