import React from 'react';
import Banner from '../Banner/Banner';
import BannerImage from '../../assets/bannerabout.png';

export default function About() {
  return (
    <div>
      <Banner pathimage={BannerImage} text={''} />
      <h1>A PROPOS</h1>
    </div>
  );
}
