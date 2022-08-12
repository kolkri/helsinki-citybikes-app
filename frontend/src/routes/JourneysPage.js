import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/urls'
import { Flex, Pagination } from '@aws-amplify/ui-react'
import styled from 'styled-components'
import _ from 'lodash'
import ReactPaginate from 'react-paginate'

const StyledFlex = styled(Flex)`
	  flex-direction: column;
	  box-sizing: border-box;
	  width: 100vw;
	  padding: 0.5rem;
	`
	const StyledTable = styled.table`
	  font-size: 12px;
	  @media (min-width:786px) and (max-width:1024px) {
		  font-size: 16px;
	  }
	  
	  @media (min-width: 1025px) {
		  font-size: 24px;
	  }
	`


const pageSize = 200;
const JourneysPage = () => {

	const [journeys, setJourneys] = useState([])
	const [loading, setLoading] = useState(false)
	const [paginatedJourneys, setPaginatedJourneys] = useState()
	const [currentpage, setCurrentpage] = useState(1)

	useEffect( () =>{
		fetchJourneys()
	  }, [])

	const fetchJourneys = () => {
		setLoading(true)
		fetch(API_URL('biketours'))
		.then(res=>res.json())
		.then(data=>{
			setJourneys(data.response)
			setPaginatedJourneys(_(data.response).slice(0).take(pageSize).value())
		})
		.finally(()=>setLoading(false))
  	} 


	const pageCount = journeys? Math.ceil(journeys.length / pageSize) : 0
	if (pageCount === 1 ) return null
	const pages = _.range(1, pageCount+1)

	const pagination = (pageNo) => {
		setCurrentpage(pageNo)
		const startIndex = (pageNo - 1) * pageSize
		const paginatedJourney = _(journeys).slice(startIndex).take(pageSize).value()
		setPaginatedJourneys(paginatedJourney)
	}

	const handlePageClick = (data) => {
		setCurrentpage(data.selected + 1)
		const startIndex = (data.selected) * pageSize
		const paginatedJourney = _(journeys).slice(startIndex).take(pageSize).value()
		setPaginatedJourneys(paginatedJourney)
	}
	
	return (
		<StyledFlex>
			<h3>Journeys | May 2021</h3>
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
					paginatedJourneys.map((journey, index) =>{
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
			<ReactPaginate  
				previousLabel={"previous"}
				nextLabel={"next"}
				breakLabel={"..."}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				onPageChange={handlePageClick}
				containerClassName={"pagination justify-content-center"}
				pageClassName={"page-item"}
				pageLinkClassName={"page-link"}
				previousClassName={"page-item"}
				previousLinkClassName={"page-link"}
				nextClassName={"page-item"}
				nextLinkClassName={"page-link"}
				breakClassName={"page-item"}
				breakLinkClassName={"page-link"}
				activeClassName={"active"}
				/>
			{/* <nav className='d-flex justify-content-center'>
				<ul className='pagination'>
					{journeys.length !== 0 && 
					pages.map(page => {
						return (
						<li key={page} className={
							page === currentpage ? "page-item active" : "page-item"
						}>
							<p className="page-link"
							onClick={() => pagination(page)}>{page}</p>
						</li>
						)}
					)}
				</ul>
			</nav> */}
		</StyledFlex>
	)
}

export default JourneysPage