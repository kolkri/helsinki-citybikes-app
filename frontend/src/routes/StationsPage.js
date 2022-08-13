import { Flex } from '@aws-amplify/ui-react'
import React from 'react'
import stationsData from '../data/stations.json'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledFlex = styled(Flex)`
    flex-direction: column;
    padding: 1rem;
    margin-top: 80px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    transition: all 200ms ease-in-out;
    &:hover {
        font-weight: 900;
        color: inherit;
    }
`
const StyledTable = styled.table`
    width: fit-content;
`
const StationsPage = () => {

	return (
		<StyledFlex>
			<h3>City bikes stations</h3>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Station</th>
                        <th>ID No</th>
                    </tr>
                </thead>
                <tbody>
                {stationsData.map(station => {
                    return (
                        <tr key={station.ID}>
                            <td><StyledLink to={`/station/${station.ID}`}>{station.Name}</StyledLink></td>
                            <td><StyledLink to={`/station/${station.ID}`}>{station.ID}</StyledLink></td>
                        </tr>
                    )}
                )}
                </tbody>
            </StyledTable>

		</StyledFlex>
	)
}

export default StationsPage