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


	const [ search, setSearch ] = useState( '' )
	
	const updateSearchState = someNewString => {
		setSearch( someNewString.toLowerCase() )
	}

	const byName = ({ name }) => {
		/* This callback function we're giving as an argument to filter 
		   NEEDS to have a return value of true or false, so filter will know
		   what to put in the filtered array */
		return name.toLowerCase().includes( search )
	}

	const byPrice = ({ price }) => {
		/* This callback function we're giving as an argument to filter 
		   NEEDS to have a return value of true or false, so filter will know
		   what to put in the filtered array */
		return price.toString().includes( search )
	}

	const byNameOrPrice = pObj => {
		return byPrice( pObj ) || byName( pObj )
	}


	const filteredPlants = plantsArray.filter( byNameOrPrice )


	return (
		<main>
			<NewPlantForm addPlantToState={ addPlantToState } />
			<Search updateSearchState={ updateSearchState } />
			<PlantList plants={ filteredPlants } />
		</main>
	);
}

export default PlantPage;
