import { useState } from "react";


function PlantCard({ plant }) {

  const [ isInStock, setIsInStock ] = useState( true )
  const handleClick = () => setIsInStock( s => !s )

  return (
    <li className="card">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price: { plant.price }</p>
      { isInStock ? (
        <button onClick={ handleClick } className="primary">In Stock</button>
      ) : (
        <button onClick={ handleClick }>Out of Stock</button>
      ) }
    </li>
  );
}

export default PlantCard;
