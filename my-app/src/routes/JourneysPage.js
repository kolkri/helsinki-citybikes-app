import { Flex } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/urls'

const JourneysPage = () => {

	const [journeys, setJourneys] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect( () =>{
		fetchJourneys()
	  }, [])

	const fetchJourneys = () => {
		setLoading(true)
		fetch(API_URL('biketours'))
		.then(res=>res.json())
		.then(data=>{
			console.log('data:', data)
			setJourneys(data.response)
		})
		.finally(()=>setLoading(false))
  	} 
	const testArray = ['one', 'two', 'three']

	console.log('test:', journeys.length !== 0);


	return (
		<Flex>
			<h1>Journeys:</h1>
		 	{journeys.length !== 0 && 
			 journeys.map(journey => <p>{journey.departureStationName}</p>)} 
		</Flex>
	)
}

export default JourneysPage