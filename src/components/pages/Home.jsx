import React from "react";
import Bannerhome from "../Bannerhome/Bannerhome";
import data from "../../datas/logements.json";
import { Card } from "../Cards/Card";

export const Home = () => {
  console.log(data);
  return (
    <div>
      <Bannerhome />
      <div className="cards-container"> {/* Ici css pour le thumbnail(fond gris, flex etc etc) */}
        {data.map((d) => (
          <Card title={d.title} cover={d.cover} />
        ))}
      </div>
    </div>
  );
};
