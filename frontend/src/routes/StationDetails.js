import { Flex } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'
import { STARTS_URL } from '../utils/urls'
import { END_URL } from '../utils/urls'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import stationsJsonData from '../data/stations.json'
import LoadingItem from '../components/LoadingItem'



const StyledFlex = styled(Flex)`
    flex-direction: column;
    padding: 1rem;
    margin-top: 80px;
`
const BackButton = styled.button`
    width: fit-content;
    border: 2px solid #d5c796;
    border-radius: 20px;
    padding: 5px 10px;
    &:hover{
        border-radius: none;
        background: #d5c796;
    }

`
const BoldText = styled.span`
    font-weight: 700;
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
                    <p><BoldText>Name:</BoldText> {findStation.Name}</p>
                    <p><BoldText>Address:</BoldText> {findStation.Osoite}</p>
                    <p><BoldText>Starts:</BoldText> {starts}</p>
                    <p><BoldText>Ends:</BoldText> {ends}</p>
                </div>
                }
            </StyledFlex>
	)
}

export default StationDetails