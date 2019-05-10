import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react';
import ToucanTable from './showToucan/ToucanTable';
import FormToucan from './FormToucan'


class MainPage extends Component {

    render(){
        return (
            <Segment.Group  >
            <Segment padded style={{margin:"3%"}}>
            <h2 style={{textAlign:"center"}}>Rajout de Toucan</h2>
                <FormToucan />
            </Segment>
            <Segment textAlign="center" padded style={{margin:"3%"}} >
            <h2>Les Toucans</h2>
                <ToucanTable style={{margin:"50px"}}/>
            </Segment>
            </Segment.Group>
        );
    }

}

export default MainPage;
