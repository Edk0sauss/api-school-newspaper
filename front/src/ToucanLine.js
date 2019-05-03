import React, {Component} from 'react'
import {Table, Image, Button} from 'semantic-ui-react'

class ToucanLine extends Component {
    mois = ["janvier", "février", "mars", "avril", "mai", "juin","juillet","août","septembre","octobre","novembre","décembre"]
    date(time){
        const dateObject = new Date(time)
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth();
        const day = dateObject.getDay();
        return (`${day+1}/${month+1}/${year}`)
    }

    render(){
        return (
            <Table.Row>
                <Table.Cell >
                    {console.log(this.props.toucan["_id"])}
                    <a href={`http://localhost:8000/toucan/pdf/${this.props.toucan["_id"]}`}>
                    <img
                    src={`/toucan/img/${this.props.toucan["_id"]}`}
                    style={{width: "50px"}}
                    alt="cover"
                    />
                    </a>
                </Table.Cell>
                <Table.Cell  >
                    {this.props.toucan.title}
                </Table.Cell>
                <Table.Cell  >
                    {this.date(this.props.toucan.date)}
                </Table.Cell>
                <Table.Cell style={{width:"fit-content"}}>
                    <Button negative icon="cancel"/>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default ToucanLine