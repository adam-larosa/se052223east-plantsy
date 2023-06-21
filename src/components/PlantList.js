import { Children } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const plantComponents = plants.map( plant => <PlantCard plant={ plant } /> )

  return (
    <ul className="cards">
      { Children.toArray( plantComponents ) }
    </ul>
  );
}

export default PlantList;
