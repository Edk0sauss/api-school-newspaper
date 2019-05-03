import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'
import ToucanLine from './ToucanLine'

class ToucanTable extends Component{
    constructor(){
        super();
        this.state = {
            toucans: [],
        }
    }

    componentDidMount(){
        fetch('/toucan/toucans')
        .then(result => {
            result.json()
            .then(toucans => {
                this.setState({toucans})
            })
        })
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