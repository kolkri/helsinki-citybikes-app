import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/urls'
import {
	Flex,
	Table,
	TableCell,
	TableBody,
	TableHead,
	TableRow,
  } from '@aws-amplify/ui-react';
import styled from 'styled-components';

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
	const StyledTable = styled(Table)`
		width: 100%;
		overflow:hidden;
	`
	return (
		<StyledFlex>
			<h1>Journeys | May 2021</h1>
			<StyledTable
				size="small">
				<TableHead>
					<TableRow>
					<TableCell width="30vw" as="th">Departure</TableCell>
					<TableCell width="30vw"as="th">Return</TableCell>
					<TableCell width="20vw"as="th">Range</TableCell>
					<TableCell width="20vw"as="th">Time</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{journeys.length !== 0 &&
						journeys.map(journey => {
							return (
							<TableRow>
								<TableCell>{journey.departureStationName}</TableCell>
								<TableCell>{journey.returnStationName}</TableCell>
								<TableCell>{Math.round(journey.coveredDistance / 1000 * 10) / 10}km</TableCell>
								<TableCell>{Math.round(journey.duration / 60)}min</TableCell>
							</TableRow>
						)}
					)}
				</TableBody>
			</StyledTable>
		</StyledFlex>
	)
}

export default JourneysPage