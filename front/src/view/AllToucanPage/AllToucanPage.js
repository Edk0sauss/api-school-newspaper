import React, {useState, useEffect} from 'react'
import {Card, Segment} from 'semantic-ui-react'
import SelectYear from '../../utils/yearSelector'
import FormToucan from '../../utils//FormToucan.js'
import ToucanCard from './ToucanCard'

const date = new Date()
const beginYear = 1900 + (date.getMonth() < 8 ? date.getYear()-1 : date.getYear());

function AllToucan(props){
	const [toucans,setToucans] = useState([]);
	const [before,setBefore] = useState((new Date(beginYear+1,7,31)).getTime());
	const [after, setAfter] = useState((new  Date(beginYear,8,1)).getTime());
		
		useEffect(()=>{
			fetch(`${props.backURL}/toucan/toucans?before=${before}&after=${after}`)
			.then(result => {
				return result.json()
			})
			.then(toucans => {
				setToucans(toucans)
				})
		   .catch(err => console.log(err))
		},[before,after,props.backURL]
	)

	function updateFrame(value){
		var before = (new Date(value+1,7,31)).getTime()
		var after = (new Date(value,8,1)).getTime()
		setBefore(before)
		setAfter(after)
	}
	const formNewToucan = props.isAdmin ? 
	<Segment style={{margin:"3em",padding:"2em"}}>
		<h2 style={{textAlign:"center"}}>Rajout de Toucan</h2>
		<FormToucan backURL={props.backURL}/>
	</Segment> :
	null
	return (
		<div>
			{formNewToucan}
			<Segment style={{textAlign:"center", margin:"3em",padding:"2em"}} >
				<SelectYear
				style={{marginBottom:"2em"}}
				beginYear={beginYear}
				updateFrame = {updateFrame}
				/>
				<Card.Group centered >
				{toucans.map( toucan => {
					return <ToucanCard
					image={`${props.backURL}/toucan/img/${toucan["_id"]}`}
					link={`${props.backURL}/toucan/pdf/${toucan["_id"]}.pdf`}
					header={toucan.title}
					toucanId={toucan._id}
					isAdmin={props.isAdmin}
					date={(new Date(toucan.date).toLocaleDateString())}
					key={toucan._id}
					/>
				})}
				</Card.Group>
			</Segment>
		</div>
		)}
		

export default AllToucan