import React, { useState } from 'react';
import chevron from '../../assets/chevron.png';

export default function Collapse({ title, texte }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapseContainer">
      <div className="collapseTitleContainer primaryBackground">
        <h1 className="collapseTitle">{title}</h1>
        <p className="collapseButton" onClick={toggle}>
          <img
            src={chevron}
            className={(!open ? 'down' : 'up') + ' chevron'}
            alt="chevron"
          />
        </p>
      </div>
      <div
        className="collapseTexteContainer secondaryBackground"
        style={open ? { height: 'fit-content' } : { height: '0px' }}
      >
        <div className="primary collapseTexte">{texte}</div>
      </div>
    </div>
  );
}
