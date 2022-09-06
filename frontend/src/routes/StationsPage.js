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
const StyledInputFlex = styled(Flex)`
    flex-direction: column;
    @media (min-width:786px) {
		flex-direction: row;
	}
`
const StyledSelect = styled.select`
    height: 40px;
    width: 240px;
    font-size: 20px;
    padding-left: 10px;
`

const StyledInput = styled.input`
    height: 40px;
    width: 240px;
    font-size: 20px;
    padding-left: 10px;
`

const StationsPage = () => {

    const [sorting, setSorting] = useState()
    const [data, setData] = useState(stationsData)
    const [search, setSearch] = useState('')

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
            <StyledInputFlex>
                <label htmlFor='sorting'>
					<StyledSelect
						id='sorting'
						value={sorting}
						onChange={(e) => setSorting(e.target.value)}
					>
						<option selected='true' disabled='disabled'>
							SORT STATIONS
						</option>
						<option value='byName'>Name</option>
						<option value='byId'>Id</option>
					</StyledSelect>
				</label>
                <StyledInput 
                    type="text" 
                    placeholder="Search by name"
                    onChange={event => {setSearch(event.target.value)}}></StyledInput>
            </StyledInputFlex>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Station</th>
                        <th>ID No</th>
                    </tr>
                </thead>
                <tbody>
                {data.filter(item => {
                    if(search == ''){
                        return item
                    } else if (item.Name.toLowerCase().includes(search.toLowerCase())) {
                        return item
                    }
                }).map(station => {
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