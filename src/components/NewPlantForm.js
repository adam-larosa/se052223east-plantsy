import { useState } from "react";

function NewPlantForm({ addPlantToState }) {

  const [ name, setName ] = useState( '' )
  const [ price, setPrice ] = useState( '' )
  const [ image, setImage ] = useState( '' )

  const handleName = e => setName( e.target.value )
  const handlePrice = e => setPrice( e.target.value )
  const handleImage = e => setImage( e.target.value )


  // same as above but using only one state and function to track the form 
  // const [ form, setForm ] = useState( {} )
  // const updateForm = e => {
  //   setForm( { ...form, [e.target.id]: e.target.value } )
  // }

  const attemptNewPlant = e => {
    e.preventDefault()
    const newPlant = {
      name: name,
      image: image,
      price: price 
    }

    addPlantToState( newPlant )

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ attemptNewPlant } >
        <input onChange={ handleName } type="text" name="name" placeholder="Plant name" />
        <input onChange={ handleImage } type="text" name="image" placeholder="Image URL" />
        <input onChange={ handlePrice } type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
