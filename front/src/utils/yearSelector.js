import React from 'react'
import {Dropdown} from 'semantic-ui-react'


  

function SelectYear(props) {

	const years = []

	for (let year = props.beginYear; year >= 2018; year -= 1) {
		years.push({
			text: `${year.toString()}-${(year+1).toString()}`,
			value: year,
			key: year
		});
	}
	return(
		<div style={props.style}>
			<span style={{marginRight:'1em'}}>Année de parution :</span> 
			<Dropdown
			selection
			placeholder="value"
			options = {years}
			defaultValue = {props.beginYear}
			onChange = {(_,dropdown) => props.updateFrame(dropdown.value)}
			/>
		</div>
	)
}

export default SelectYear;