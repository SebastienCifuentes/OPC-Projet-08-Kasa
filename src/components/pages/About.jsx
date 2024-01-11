import React from 'react';
import Banner from '../Banner/Banner';
import BannerImage from '../../assets/bannerabout.png';
import Collapse from "../Collapse/Collapse"
import dataAbout from "../../datas/about.json"

export default function About() {
  return (
    <div>
      <Banner pathimage={BannerImage} text={''} />
      <h1>A PROPOS</h1>
      {dataAbout.map((d) => (
          <Collapse title={d.title} texte={d.texte} />
        ))}
    </div>
  );
}
