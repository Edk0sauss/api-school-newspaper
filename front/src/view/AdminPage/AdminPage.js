import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react';
import ToucanTable from './showToucan/ToucanTable';
import FormToucan from './FormToucan';
import LogoutButton from '../LogoutButton';


class MainPage extends Component {

    render(){
        return (
            <Segment.Group >
            <Segment padded style={{margin:"3%"}}>
            <div style={{textAlign:"right"}}>
                <LogoutButton />
            </div>
            <div>
                <h2 style={{textAlign:"center"}}>Rajout de Toucan</h2>
                <FormToucan />
            </div>
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
