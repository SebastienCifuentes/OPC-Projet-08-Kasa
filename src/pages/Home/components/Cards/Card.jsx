import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => {
  const url = `/logement/${props.id}`;

  return (
    <Link to={url} className="card_logement">
      {' '}
      <div className="cardBg"></div>
      <img className="cardCover" src={props.cover} alt="Cover img" />
      <div className="card_logement_title">{props.title}</div>
    </Link>
  );
};
