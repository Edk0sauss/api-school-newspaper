import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'
import ToucanLine from './ToucanLine'
import env from './.env'

class ToucanTable extends Component{
    constructor(){
        super();
        this.state = {
            toucans: [],
        }
    }

    componentDidMount(){
        fetch(`${env.backURL}/toucan/toucans`)
        .then(result => {
            console.log(result)
            return result.json()
        })
        .then(toucans => {
                console.log(toucans)
                this.setState({toucans})
            })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <Table celled padded collapsing size="small" textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Cover</Table.HeaderCell>
                <Table.HeaderCell>Thème</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Supprimer</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
              {this.state.toucans.map(toucan => {
              return <ToucanLine key={toucan["_id"]} toucan={toucan}/>
              })}
          </Table>
        )
    }
}

export default ToucanTable