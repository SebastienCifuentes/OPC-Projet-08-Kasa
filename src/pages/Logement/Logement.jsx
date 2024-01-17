import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../datas/logements.json';
import Slideshow from '../../components/Slideshow/Slideshow';
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
      <div className="collapse_container">
        <div className="collapse_block">
          <Collapse title={'Description'} texte={house.description} />
        </div>
        <div className="collapse_block">
          <Collapse title={'Équipements'} texte={house.equipments} />
        </div>
      </div>
    </div>
  );
}
