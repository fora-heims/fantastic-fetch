import React from 'react';
import './Details.css';

export default function Details({ data }) {
  return (
    <div className="details">
      {data.map((item) => (
        <div className="zoo-card" key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image_link} width="250px" />
          <h3>{item.latin_name}</h3>
          <h5>
            {`${item.active_time} ${item.animal_type}`}
            {}
          </h5>
          <h4>Habitat: {item.habitat}</h4>
          <h4>Geographical Range: {item.geo_range}</h4>
          <h5>Diet: {item.diet}</h5>
        </div>
      ))}
    </div>
  );
}
