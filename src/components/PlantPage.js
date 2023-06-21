import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

	const [ plantsArray, setPlants ] = useState( [] )

	const addPlantToState = theNewPlantObj => {
		setPlants( [ ...plantsArray, theNewPlantObj ] )
	}

	useEffect( () => {
		fetch( 'http://localhost:6001/plants' )
			.then( r => r.json() )
			.then( plantsData => setPlants( plantsData ) )
	}, [] )

	return (
		<main>
			<NewPlantForm addPlantToState={ addPlantToState } />
			<Search />
			<PlantList plants={ plantsArray } />
		</main>
	);
}

export default PlantPage;
