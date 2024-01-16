import React from 'react';
import Slideshow from '../../components/Slideshow/Slideshow';
import { useParams } from 'react-router-dom';
import data from '../../datas/logements.json';
import Collapse from '../../components/Collapse/Collapse';

export default function Logement() {
  const url = useParams();
  console.log(url);
  const house = data.find((item) => item.id === url.id);
  console.log(house);

  return (
    <div className='main_logement'>
      <Slideshow pictureList={house.pictures} />
      <h1>{house.title}</h1>
      <h2>{house.location}</h2>
      <Collapse title={'Description'} texte={house.description} />
      <Collapse title={'Équipements'} texte={house.equipments} />
    </div>
  );
}
