import { useState, useEffect } from "react";
import { getPlants } from '../tools/api'
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {

	const [ plants, setPlants ] = useState( [] )
	const addPlant = plant => setPlants( [ ...plants, plant ] )
	useEffect( () => { getPlants().then( setPlants ) }, [] )

	const [ search, setSearch ] = useState( '' )
	const updateSearch = query => setSearch( query.toLowerCase() )
	
	const byName = ({ name }) => name.toLowerCase().includes( search )
	const byPrice = ({ price }) => price.toString().includes( search )
	const byNameOrPrice = pObj => byPrice( pObj ) || byName( pObj )
	
	const filteredPlants = plants.filter( byNameOrPrice )

	return (
		<main>
			<NewPlantForm addPlant={ addPlant } />
			<Search updateSearch={ updateSearch } />
			<PlantList plants={ filteredPlants } />
		</main>
	);
}

export default PlantPage;
