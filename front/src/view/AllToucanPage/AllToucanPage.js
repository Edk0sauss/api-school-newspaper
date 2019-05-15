import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
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
            console.log(toucans)
            })
       .catch(err => console.log(err))
    }
    render(){
        return (
            <Card.Group>
                {this.state.toucans.map( toucan => {
                    return <ToucanCard
                    image={`${env.backURL}/toucan/img/${toucan["_id"]}`}
                    link={`${env.backURL}/toucan/pdf/${toucan["_id"]}`}
                    header={toucan.title}
                    />
             })}
            </Card.Group>
        )}
}

export default AllToucan