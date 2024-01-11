import React from 'react';
import Banner from '../Banner/Banner';
import BannerImage from '../../assets/bannerabout.png';
import Collapse from '../Collapse/Collapse';
import dataAbout from '../../datas/about.json';

export default function About() {
  document.title = 'Kasa | A Propos';

  return (
    <div className='mainAbout'>
      <Banner pathimage={BannerImage} text={''} />
      <div className="collaspse_container">
        {dataAbout.map((d) => (
          <Collapse title={d.title} texte={d.texte} />
        ))}
      </div>
    </div>
  );
}
