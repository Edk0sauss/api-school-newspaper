import React, {Component} from 'react'
import {Card, Segment} from 'semantic-ui-react'
import SelectYear from '../../utils/yearSelector'
import ToucanCard from './ToucanCard'
import env from '../../.env'

const date = new Date()
const beginYear = 1900 + (date.getMonth() < 8 ? date.getYear()-1 : date.getYear());

class AllToucan extends Component {
    constructor(){
        super();
        this.state = {
			toucans: [],
			before: (new Date(beginYear+1,7,31)).getTime(),
			after: (new  Date(beginYear,8,1)).getTime(),
		}
	}

    updateToucan(){
        fetch(`${env.backURL}/toucan/toucans?before=${this.state.before}&after=${this.state.after}`)
        .then(result => {
            return result.json()
        })
        .then(toucans => {
            this.setState({toucans})
            })
       .catch(err => console.log(err))
	}

	updateFrame(value){
		var before = (new Date(value+1,7,31)).getTime()
		var after = (new Date(value,8,1)).getTime()

		this.setState({before, after},()=> this.updateToucan())
	}
	
	componentDidMount(){
		this.updateToucan()
	}
    render(){
        return (
            <Segment style={{textAlign:"center", margin:"3em",padding:"2em"}} >
				<SelectYear
					beginYear={beginYear}
					updateFrame = {this.updateFrame.bind(this)}
				/>
				{/* <Dropdown
					selection
					placeholder="value"
					options = {years}
					defaultValue = {beginYear}
					onChange = {(_,props) => this.setState({
						before : (new Date(props.value+1,7,31)).getTime(),
						after : (new  Date(props.value,8,1)).getTime()
					}, () => this.updateToucan())}
				/> */}
				<Card.Group centered >
					{this.state.toucans.map( toucan => {
						return <ToucanCard
						image={`${env.backURL}/toucan/img/${toucan["_id"]}`}
						link={`${env.backURL}/toucan/pdf/${toucan["_id"]}.pdf`}
						header={toucan.title}
						date={(new Date(toucan.date).toLocaleDateString())}
						key={toucan._id}
						/>
				})}
				</Card.Group>
            </Segment>
        )}
}

export default AllToucan