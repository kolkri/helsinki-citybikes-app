import { Flex } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/urls'
import { STARTS_URL } from '../utils/urls'
import { END_URL } from '../utils/urls'
import stationsData from '../data/stations.json'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import stationsJsonData from '../data/stations.json'



const StyledFlex = styled(Flex)`
    flex-direction: column;
    padding: 1rem;
`
const BackButton = styled.button`
    width: fit-content;
`
const StationDetails = () => {

    const [starts, setStarts] = useState(0)
    const [ends, setEnds] = useState(0)
    const { id } = useParams()
    const findStation = stationsJsonData.find(item => item.ID == id)

    const navigate = useNavigate()


    useEffect( () => {
        fetchStarts()
        fetchEnds()
    }, [])

    const fetchStarts = () => {
        fetch(STARTS_URL(id))
        .then(res => res.json())
        .then(data => {
            setStarts(data.response)
        })
    }

    const fetchEnds = () => {
        fetch(END_URL(id))
        .then(res => res.json())
        .then(data => {
            setEnds(data.response)
        })
    }






	return (
		<StyledFlex>
            <BackButton onClick={() => navigate(-1)}> &#8592; Back</BackButton>
			<h3>Station details</h3>
            {starts !== 0 && ends !== 0 && 
            <div>
                <p>Name: {findStation.Name}</p>
                <p>Address: {findStation.Osoite}</p>
                <p>Starts: {starts}</p>
                <p>Ends: {ends}</p>
            </div>
            }
		</StyledFlex>
	)
}

export default StationDetails