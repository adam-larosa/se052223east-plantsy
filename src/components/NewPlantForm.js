import { useState } from "react";

function NewPlantForm({ addPlantToState }) {

  // const [ name, setName ] = useState( '' )
  // const [ price, setPrice ] = useState( '' )
  // const [ image, setImage ] = useState( '' )

  // const handleName = e => setName( e.target.value )
  // const handlePrice = e => setPrice( e.target.value )
  // const handleImage = e => setImage( e.target.value )


  // same as above but using only one state and function to track the form 
  const [ form, setForm ] = useState( {} )
  const updateForm = e => {
    setForm( { ...form, [ e.target.name ]: e.target.value } )
  }

  const attemptNewPlant = e => {
    e.preventDefault()
    fetch( 'http://localhost:6001/plants', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( form )
    } )
      .then( r => r.json() )
      .then( addPlantToState )
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ attemptNewPlant } >
        <input onChange={ updateForm } type="text" name="name" placeholder="Plant name" />
        <input onChange={ updateForm } type="text" name="image" placeholder="Image URL" />
        <input onChange={ updateForm } type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
