import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const plantComponents = plants.map( plantObject => {

    return <PlantCard key={ plantObject.id } plant={ plantObject } />

  } )


  return (
    <ul className="cards">
      { plantComponents }
    </ul>
  );
}

export default PlantList;
