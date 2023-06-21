import { useState } from "react";
import { postPlants } from '../tools/api'


function NewPlantForm({ addPlant }) {
 
  const [ newPlant, setForm ] = useState( {} )
  const updateForm = ({ target:{ name, value } }) => {
    setForm( { ...newPlant, [name]: value } )
  }

  const attemptNewPlant = e => {
    e.preventDefault()
    postPlants( JSON.stringify( newPlant ) ).then( addPlant )
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ attemptNewPlant } >
        <input onChange={ updateForm } type="text" name="name" 
          placeholder="Plant name" />
        <input onChange={ updateForm } type="text" name="image" 
          placeholder="Image URL" />
        <input onChange={ updateForm } type="number" name="price" step="0.01" 
          placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
