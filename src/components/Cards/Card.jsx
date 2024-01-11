import React from 'react';
import { Link } from 'react-router-dom';


export const Card = (props) => {
  console.log(props);

  const url = `/logement/${props.id}`
  console.log(props.id)
  

  return (
    <Link to={url} className="card_logement"> {/* Ici css d'une card */}
      <img src={props.cover} alt="Cover img" />
      <div className="card_logement_title">{props.title}</div>
    </Link>
  );
};
