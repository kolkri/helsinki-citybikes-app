import { Flex } from '@aws-amplify/ui-react'
import React, {useEffect, useState} from 'react'
import stationsData from '../data/stations.json'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledFlex = styled(Flex)`
    flex-direction: column;
    padding: 1rem;
    margin-top: 80px;
`

const StyledLink = styled(Link)`
    
    color: #000;
    padding-right: 1rem;
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

    const [sorting, setSorting] = useState()
    const [data, setData] = useState(stationsData)

    useEffect(() => {
		if (sorting === 'byName') {
            const sortedData = [...data]
			setData(
				sortedData.sort((a, b) => (a.Name < b.Name ? -1 : 1))
			)
		} else if (sorting === 'byId') {
            const sortedData = [...data]
			setData(
				sortedData.sort((a, b) =>
					a.ID < b.ID ? -1 : 1
				)
			)
		}
	}, [sorting])


	return (
		<StyledFlex>
			<h3>City bikes stations</h3>
            <Flex>
                <label htmlFor='sorting'>
					<select
						id='sorting'
						value={sorting}
						onChange={(e) => setSorting(e.target.value)}
					>
						<option selected='true' disabled='disabled'>
							SORT STATIONS
						</option>
						<option value='byName'>Name</option>
						<option value='byId'>Id</option>
					</select>
				</label>
            </Flex>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Station</th>
                        <th>ID No</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(station => {
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