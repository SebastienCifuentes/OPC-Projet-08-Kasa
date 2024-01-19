import React, { useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsInfos from '../../datas/logements.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse';
import RateScale from '../../components/RateScale/RateScale';

export default function Logement() {

  const { id } = useParams();
  const actualLogement = logementsInfos.find((logement) => logement.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!actualLogement) {
      navigate("*")
    }
  }, [actualLogement, navigate])

    if (actualLogement){

    const description = actualLogement ? actualLogement.description : "";
    const equipments = actualLogement ? actualLogement.equipments:"";
    const rating = actualLogement ? actualLogement.rating : 0;
    const tags = actualLogement ? actualLogement.tags : "";
    const title = actualLogement ? actualLogement.title : "";
    const location = actualLogement ? actualLogement.location : "";
    const host = actualLogement ? actualLogement.host : "";

  return (
    <div className='main_logement'>
      <Slideshow pictureList={actualLogement.pictures} />
      <div className="infoHost_container">
        <div className="titleTags_container">
          <div className="logement_titleInfos">
            <h1>{title}</h1>
            <h2>{location}</h2>
          </div>
          <div className="logement_tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="hostRate_container">
          <div className="logement_host_container">
            <h3>{host.name}</h3>
            <img src={host.picture} alt="Host picture" />
          </div>
          <div className="logement_rate_container">
            <RateScale scaleValue={rating} /> 
          </div>
        </div>
      </div>
      <div className="collapse_container">
        <div className="collapse_block">
          <Collapse title={'Description'} texte={description} />
        </div>
        <div className="collapse_block">
          <Collapse title={'Équipements'} texte={
            <ul>
              {equipments.map((infos, index) =>
                <li>{infos}</li>)}
            </ul>
          } />
        </div>
      </div>
    </div>
  );
  }
}
