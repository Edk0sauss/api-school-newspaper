import React, {Component} from 'react'
import {Card, Segment} from 'semantic-ui-react'
import ToucanCard from './ToucanCard'
import env from '../../.env'



class AllToucan extends Component {
    constructor(){
        super();
        this.state = {
            toucans: [],
        }
    }

    componentDidMount(){
        fetch(`${env.backURL}/toucan/toucans`)
        .then(result => {
            return result.json()
        })
        .then(toucans => {
            this.setState({toucans})
            })
       .catch(err => console.log(err))
    }
    render(){
        return (
            <Segment style={{margin:"3em",padding:"2em"}} textAlign="center">
            <Card.Group>
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