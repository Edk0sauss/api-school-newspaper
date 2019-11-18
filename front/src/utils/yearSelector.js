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
		<Dropdown
		selection
		placeholder="value"
		options = {years}
		defaultValue = {props.beginYear}
		onChange = {(_,dropdown) => props.updateFrame(dropdown.value)}
		/>
	)
}

export default SelectYear;