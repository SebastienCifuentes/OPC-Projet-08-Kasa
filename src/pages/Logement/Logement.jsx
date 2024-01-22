import React from 'react';
import { useParams } from 'react-router-dom';
import logementsInfos from '../../datas/logements.json';
import { Slideshow } from '../../components/Slideshow/Slideshow';
import { Collapse } from '../../components/Collapse/Collapse';
import { RateScale } from '../Home/components/RateScale/RateScale';
import { NotFound } from '../NotFound/NotFound';

export const Logement = () => {
  const { id } = useParams();
  const actualLogement = logementsInfos.find((logement) => logement.id === id);


  if (!actualLogement) {
    return <NotFound />;
  }

  if (actualLogement) {
    const description = actualLogement ? actualLogement.description : '';
    const equipments = actualLogement ? actualLogement.equipments : '';
    const rating = actualLogement ? actualLogement.rating : 0;
    const tags = actualLogement ? actualLogement.tags : '';
    const title = actualLogement ? actualLogement.title : '';
    const location = actualLogement ? actualLogement.location : '';
    const host = actualLogement ? actualLogement.host : '';

    const name = host.name;
    const firstname = name.split(' ')[0];
    const lastname = name.split(' ')[1];

    return (
      <div className="main_logement">
        <Slideshow pictureList={actualLogement.pictures} />
        <div className="infoHost_container">
          <div className="titleTags_container">
            <div className="logement_titleInfos">
              <h1>{title}</h1>
              <h2>{location}</h2>
            </div>
            <div className="logement_tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hostRate_container">
            <div className="logement_host_container">
              <div className="hostName">
                <p className="">{firstname}</p>
                <p className="">{lastname}</p>
              </div>
              <div className="hostProfilePicture">
                <img src={host.picture} alt="Profile pic" />
              </div>
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
            <Collapse
              title={'Équipements'}
              texte={
                <ul className="equipmentsContainer">
                  {equipments.map((infos, index) => (
                    <li key={index}>{infos}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    );
  }
};
