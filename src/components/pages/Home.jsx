import React from 'react';
import Bannerhome from '../Bannerhome/Bannerhome';
import data from '../../datas/logements.json';

export const Home = () => {
  console.log(data);
  return (
    <div>
      <Bannerhome />
      <h1>Emplacement des cards TESSSST</h1>
      {data.map((d) => (
        <p>{d.title}</p>
      ))}
    </div>
  );
};
