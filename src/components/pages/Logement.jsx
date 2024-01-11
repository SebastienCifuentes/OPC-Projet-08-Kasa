import React from 'react';
import Carrousel from "../Carrousel/Carrousel";
import { useParams } from 'react-router-dom';
import data from "../../datas/logements.json";
import Collapse from '../Collapse/Collapse';

export default function Logement() {

  const url = useParams();
  console.log(url)
  const house = data.find(item => item.id === url.id)
  console.log(house)

  return (
    <div>
      <h1>Carrousel</h1>
      <h1>{house.title}</h1>
      <h2>{house.location}</h2>
      <Collapse title={"Description"} texte={house.description} />
    </div>
  );
}
