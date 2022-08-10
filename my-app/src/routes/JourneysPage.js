import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/urls'
import { Flex } from '@aws-amplify/ui-react';
import styled from 'styled-components';

const pageSize = 10;
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

	console.log('test:', journeys.length !== 0);

	const StyledFlex = styled(Flex)`
	  flex-direction: column;
	  box-sizing: border-box;
	  width: 100vw;
	  padding: 0.5rem;
	`
	const StyledTable = styled.table`
	
	`

	const pageCount = journeys? Math.ceil(journeys.length / pageSize) : 0
	
	return (
		<StyledFlex>
			<h1>Journeys | May 2021</h1>
			<StyledTable>
				<thead>
					<tr>
						<th>Departure</th>
						<th>Return</th>
						<th>Distance</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>
					{journeys.length !== 0 &&
					journeys.map((journey, index) =>{
						return (
							<tr key={index}>
								<td>{journey.departureStationName}</td>
								<td>{journey.returnStationName}</td>
								<td>{Math.round(journey.coveredDistance / 1000 * 10) / 10}km</td>
								<td>{Math.round(journey.duration / 60)}min</td>
							</tr>
						)
					})
					}
				</tbody>
			</StyledTable>
			<nav className='d-flex justify-content-center'>
				<ul className='pagination'>
					<li className='page-link'>1</li>
					<li className='page-link'>2</li>
					<li className='page-link'>3</li>
				</ul>
			</nav>
		</StyledFlex>
	)
}

export default JourneysPage