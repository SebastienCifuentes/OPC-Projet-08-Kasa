import React from 'react';
import { Banner } from '../../components/Banner/Banner';
import data from '../../datas/logements.json';
import { Card } from '../../pages/Home/components/Cards/Card';
import BannerImage from '../../assets/bannerhome.png';

export const Home = () => {
  return (
    <div>
      <Banner pathimage={BannerImage} text={'Chez vous, partout et ailleurs'} />
      <div className="cards-container">
        {' '}
        {data.map((d) => (
          <Card key={d.id} title={d.title} cover={d.cover} id={d.id} />
        ))}
      </div>
    </div>
  );
};
