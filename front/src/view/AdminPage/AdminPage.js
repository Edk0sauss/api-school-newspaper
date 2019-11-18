import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react';
//import ToucanTable from './showToucan/ToucanTable';
import FormToucan from './FormToucan';
//import LogoutButton from '../LogoutButton';


class MainPage extends Component {

    render(){
        return (
            <Segment style={{margin:"3em",padding:"2em"}}>
                <h2 style={{textAlign:"center"}}>Rajout de Toucan</h2>
                <FormToucan />
            </Segment>
        );
    }

}

export default MainPage;
