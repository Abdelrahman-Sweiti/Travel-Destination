import React from 'react';
import data from '../../Data/db.json';

function Tours() {
  const mappedData = data.map((x) => (
    <div key={x.id}>
      <h2>{x.name}</h2>
      <img src={x.image} alt={x.name} />
      <hr/>
    </div> 
    
  ));

  return <div>{mappedData}
  </div>;
}

export default Tours;
