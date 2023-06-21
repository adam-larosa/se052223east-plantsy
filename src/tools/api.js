const plantsURL = 'http://localhost:6001/plants'
const headers = { 'Content-Type': 'application/json' }
const parseJSON = r => r.json()

export const getPlants = () => fetch( plantsURL ).then( parseJSON )

export const postPlants = body => 
    fetch( plantsURL, { method: 'POST', headers, body } ).then( parseJSON ) 